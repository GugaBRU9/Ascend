#!/usr/bin/env bash
set -euo pipefail

usage() {
  cat <<'EOF'
Usage: bash scripts/profile-android-smoke.sh --scenario boot-shell|hud-idle|combat-smoke [--install] [--serial DEVICE]

Environment:
  APK_PATH             Optional override for the APK to install.
  APP_ID               Optional override for the Android package id.
  UNITY_ACTIVITY       Optional override for the launch activity.
  PROFILE_OUTPUT_ROOT  Optional override for the smoke profiling output directory.
  ADB_BIN              Optional override for the adb executable.
EOF
}

scenario=""
should_install=false
device_serial=""

while [[ $# -gt 0 ]]; do
  case "$1" in
    --scenario)
      if [[ $# -lt 2 ]]; then
        echo "--scenario requires a value." >&2
        usage
        exit 1
      fi

      scenario="$2"
      shift 2
      ;;
    --install)
      should_install=true
      shift
      ;;
    --serial)
      if [[ $# -lt 2 ]]; then
        echo "--serial requires a device id." >&2
        usage
        exit 1
      fi

      device_serial="$2"
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

case "$scenario" in
  boot-shell)
    capture_seconds=20
    scenario_goal="Boot into the Bootstrap shell and hold idle on the baseline app entry."
    ;;
  hud-idle)
    capture_seconds=30
    scenario_goal="Stay on the shell HUD idle state long enough to inspect UI overhead and frame pacing."
    ;;
  combat-smoke)
    capture_seconds=45
    scenario_goal="Hold on the first combat-ready smoke path once combat scaffolding exists."
    ;;
  *)
    echo "Unsupported or missing scenario: '${scenario:-<missing>}'" >&2
    usage
    exit 1
    ;;
esac

project_root="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
apk_path="${APK_PATH:-${project_root}/Build/Android/Ascend-dev.apk}"
app_id="${APP_ID:-com.ascend.slice}"
unity_activity="${UNITY_ACTIVITY:-com.unity3d.player.UnityPlayerActivity}"
profile_output_root="${PROFILE_OUTPUT_ROOT:-${project_root}/Profiling}"
adb_bin="${ADB_BIN:-$(command -v adb || true)}"

if [[ -z "$adb_bin" ]]; then
  echo "adb not found. Install Android platform-tools or set ADB_BIN." >&2
  exit 1
fi

adb_args=()
if [[ -n "$device_serial" ]]; then
  adb_args=(-s "$device_serial")
fi

timestamp="$(date -u +%Y%m%dT%H%M%SZ)"
session_dir="$profile_output_root/${timestamp}-${scenario}"
logs_dir="$session_dir/logs"
profiler_dir="$session_dir/profiler"

mkdir -p "$logs_dir" "$profiler_dir"

if $should_install; then
  if [[ ! -f "$apk_path" ]]; then
    echo "APK not found for install: $apk_path" >&2
    exit 1
  fi

  "$adb_bin" "${adb_args[@]}" install -r "$apk_path"
fi

"$adb_bin" "${adb_args[@]}" wait-for-device
"$adb_bin" "${adb_args[@]}" logcat -c

metadata_file="$session_dir/session.txt"
cat > "$metadata_file" <<EOF
scenario: $scenario
goal: $scenario_goal
app_id: $app_id
launch_command: adb shell am start -n ${app_id}/${unity_activity}
expected_outputs:
  - CPU
  - Memory
  - Rendering
profiler_capture_dir: $profiler_dir
EOF

profiler_notes="$profiler_dir/README.txt"
cat > "$profiler_notes" <<EOF
Save Unity Profiler captures for the ${scenario} smoke pass in this directory.
Expected modules for Phase 1:
- CPU
- Memory
- Rendering
EOF

logcat_file="$logs_dir/logcat.txt"
"$adb_bin" "${adb_args[@]}" logcat -v time > "$logcat_file" &
logcat_pid=$!

cleanup() {
  if kill -0 "$logcat_pid" >/dev/null 2>&1; then
    kill "$logcat_pid" >/dev/null 2>&1 || true
    wait "$logcat_pid" 2>/dev/null || true
  fi
}

trap cleanup EXIT

"$adb_bin" "${adb_args[@]}" shell am start -n "${app_id}/${unity_activity}" --es ascendScenario "$scenario"
sleep "$capture_seconds"

"$adb_bin" "${adb_args[@]}" shell top -b -n 1 > "$logs_dir/cpu-top.txt"
"$adb_bin" "${adb_args[@]}" shell dumpsys meminfo "$app_id" > "$logs_dir/memory-dumpsys.txt"
"$adb_bin" "${adb_args[@]}" shell dumpsys gfxinfo "$app_id" framestats > "$logs_dir/rendering-gfxinfo.txt"

echo "Smoke profiling staged for '$scenario'."
echo "Logs: $logs_dir"
echo "Profiler captures: $profiler_dir"
