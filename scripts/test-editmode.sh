#!/usr/bin/env bash
set -euo pipefail

usage() {
  cat <<'EOF'
Usage: bash scripts/test-editmode.sh --suite smoke|full

Environment:
  UNITY_EDITOR       Absolute path to the Unity Editor executable.
  UNITY_PROJECT_PATH Optional override for the Unity project path.
  RESULTS_DIR        Optional override for the XML results output directory.
EOF
}

suite=""

while [[ $# -gt 0 ]]; do
  case "$1" in
    --suite)
      if [[ $# -lt 2 ]]; then
        echo "--suite requires a value." >&2
        usage
        exit 1
      fi

      suite="$2"
      shift 2
      ;;
    -h|--help)
      usage
      exit 0
      ;;
    *)
      echo "Unknown argument: $1" >&2
      usage
      exit 1
      ;;
  esac
done

if [[ -z "${UNITY_EDITOR:-}" ]]; then
  echo "UNITY_EDITOR must point to the Unity Editor executable." >&2
  exit 1
fi

project_root="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
unity_project_path="${UNITY_PROJECT_PATH:-${project_root}/Unity}"
results_dir="${RESULTS_DIR:-${project_root}/TestResults}"

if [[ ! -d "$unity_project_path" ]]; then
  echo "Unity project path not found: $unity_project_path" >&2
  exit 1
fi

mkdir -p "$results_dir"

common_args=(
  -batchmode
  -projectPath "$unity_project_path"
  -runTests
  -testPlatform EditMode
  -assemblyNames Ascend.Tests.EditMode
  -logFile -
)

case "$suite" in
  smoke)
    results_file="$results_dir/editmode-smoke-results.xml"
    exec "$UNITY_EDITOR" "${common_args[@]}" -testCategory Smoke -testResults "$results_file" -quit
    ;;
  full)
    results_file="$results_dir/editmode-full-results.xml"
    exec "$UNITY_EDITOR" "${common_args[@]}" -testResults "$results_file" -quit
    ;;
  *)
    echo "Unsupported suite: '${suite:-<missing>}'" >&2
    usage
    exit 1
    ;;
esac
