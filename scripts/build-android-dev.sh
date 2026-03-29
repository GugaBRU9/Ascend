#!/usr/bin/env bash
set -euo pipefail

usage() {
  cat <<'EOF'
Usage: bash scripts/build-android-dev.sh

Environment:
  UNITY_EDITOR          Optional absolute path to the Unity Editor executable.
  UNITY_PROJECT_PATH    Optional override for the Unity project path.
  ANDROID_BUILD_OUTPUT  Optional override for the APK output path.
  BUILD_LOGS_DIR        Optional override for the Unity build logs directory.
EOF
}

if [[ "${1:-}" == "-h" || "${1:-}" == "--help" ]]; then
  usage
  exit 0
fi

project_root="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
unity_project_path="${UNITY_PROJECT_PATH:-${project_root}/Unity}"
android_build_output="${ANDROID_BUILD_OUTPUT:-${project_root}/Build/Android/Ascend-dev.apk}"
build_logs_dir="${BUILD_LOGS_DIR:-${project_root}/Build/Android/Logs}"
project_version_file="$unity_project_path/ProjectSettings/ProjectVersion.txt"

if [[ ! -d "$unity_project_path" ]]; then
  echo "Unity project path not found: $unity_project_path" >&2
  exit 1
fi

if [[ ! -f "$project_version_file" ]]; then
  echo "ProjectVersion.txt not found: $project_version_file" >&2
  exit 1
fi

detect_unity_editor() {
  if [[ -n "${UNITY_EDITOR:-}" ]]; then
    printf '%s\n' "$UNITY_EDITOR"
    return 0
  fi

  local editor_version
  editor_version="$(awk -F': ' '/m_EditorVersion:/{print $2}' "$project_version_file")"

  local candidates=(
    "$HOME/Unity/Hub/Editor/${editor_version}/Editor/Unity"
    "/Applications/Unity/Hub/Editor/${editor_version}/Unity.app/Contents/MacOS/Unity"
    "/opt/unity/Editor/Unity"
  )

  local candidate
  for candidate in "${candidates[@]}"; do
    if [[ -x "$candidate" ]]; then
      printf '%s\n' "$candidate"
      return 0
    fi
  done

  if command -v unity-editor >/dev/null 2>&1; then
    command -v unity-editor
    return 0
  fi

  return 1
}

unity_editor="$(detect_unity_editor || true)"
if [[ -z "$unity_editor" ]]; then
  echo "Unable to locate a Unity Editor executable. Set UNITY_EDITOR explicitly." >&2
  exit 1
fi

mkdir -p "$(dirname "$android_build_output")" "$build_logs_dir"

generated_editor_dir="$unity_project_path/Assets/Editor/__AscendGeneratedBuild"
generated_builder="$generated_editor_dir/AscendAndroidDevBuilder.cs"
generated_builder_meta="${generated_builder}.meta"
unity_build_log="$build_logs_dir/android-dev-build.log"

cleanup() {
  rm -f "$generated_builder" "$generated_builder_meta"
  rmdir "$generated_editor_dir" 2>/dev/null || true
  rmdir "$(dirname "$generated_editor_dir")" 2>/dev/null || true
}

trap cleanup EXIT

mkdir -p "$generated_editor_dir"
builder_guid="$(cat /proc/sys/kernel/random/uuid | tr -d '-')"

cat > "$generated_builder" <<'EOF'
using System;
using System.IO;
using UnityEditor;
using UnityEditor.Build.Reporting;

namespace Ascend.Editor.Generated
{
    public static class AscendAndroidDevBuilder
    {
        public static void Build()
        {
            string outputPath = Environment.GetEnvironmentVariable("ASCEND_ANDROID_BUILD_OUTPUT");
            if (string.IsNullOrWhiteSpace(outputPath))
            {
                throw new InvalidOperationException("ASCEND_ANDROID_BUILD_OUTPUT is required.");
            }

            string outputDirectory = Path.GetDirectoryName(outputPath);
            if (string.IsNullOrWhiteSpace(outputDirectory))
            {
                throw new InvalidOperationException($"Invalid Android output path: {outputPath}");
            }

            Directory.CreateDirectory(outputDirectory);

            var buildPlayerOptions = new BuildPlayerOptions
            {
                scenes = new[]
                {
                    "Assets/_Project/Scenes/Bootstrap.unity"
                },
                locationPathName = outputPath,
                target = BuildTarget.Android,
                options = BuildOptions.Development | BuildOptions.ConnectWithProfiler | BuildOptions.AllowDebugging
            };

            BuildReport report = BuildPipeline.BuildPlayer(buildPlayerOptions);
            if (report.summary.result != BuildResult.Succeeded)
            {
                throw new Exception($"Android development build failed: {report.summary.result}");
            }
        }
    }
}
EOF

cat > "$generated_builder_meta" <<EOF
fileFormatVersion: 2
guid: ${builder_guid}
MonoImporter:
  externalObjects: {}
  serializedVersion: 2
  defaultReferences: []
  executionOrder: 0
  icon: {instanceID: 0}
  userData:
  assetBundleName:
  assetBundleVariant:
EOF

echo "Building Android development APK to $android_build_output"

ASCEND_ANDROID_BUILD_OUTPUT="$android_build_output" \
  "$unity_editor" \
  -batchmode \
  -quit \
  -nographics \
  -projectPath "$unity_project_path" \
  -buildTarget Android \
  -executeMethod Ascend.Editor.Generated.AscendAndroidDevBuilder.Build \
  -logFile "$unity_build_log"

echo "Build completed: $android_build_output"
echo "Unity build log: $unity_build_log"
