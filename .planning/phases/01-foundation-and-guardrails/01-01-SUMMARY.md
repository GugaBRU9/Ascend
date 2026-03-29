---
phase: 01-foundation-and-guardrails
plan: 01
subsystem: infra
tags: [unity, urp, input-system, ugui, bootstrap, benchmark]
requires: []
provides:
  - Unity baseline without Visual Scripting, multiplayer center, or collab proxy in the manifest
  - Ascend player identity and benchmark contract anchored on Galaxy A15 at 30 FPS
  - Project-owned Bootstrap scene as the sole build entry point
affects: [foundation, runtime-architecture, profiling, authored-data]
tech-stack:
  added: []
  patterns:
    - project-owned Bootstrap scene as the build entry point
    - benchmark assumptions documented under the phase directory
    - minimal Unity baseline trimmed to slice-safe packages
key-files:
  created:
    - .planning/phases/01-foundation-and-guardrails/01-BENCHMARK-ASSUMPTIONS.md
    - Unity/Assets/_Project/Scenes/Bootstrap.unity
    - Unity/Assets/_Project/Scenes/Bootstrap.unity.meta
  modified:
    - Unity/Packages/manifest.json
    - Unity/ProjectSettings/ProjectSettings.asset
    - Unity/ProjectSettings/EditorBuildSettings.asset
key-decisions:
  - "Bootstrap.unity remains a minimal camera-plus-root shell until runtime systems exist, avoiding template gameplay content."
  - "ProjectSettings.templateDefaultScene was aligned to Bootstrap to remove the remaining SampleScene template pointer from Player Settings."
patterns-established:
  - "Unity project identity changes land alongside phase benchmark assumptions, not as ad-hoc editor state."
  - "Scene assets committed for build ownership carry a matching .meta so EditorBuildSettings keeps a stable GUID."
requirements-completed: [TECH-01]
duration: 3min
completed: 2026-03-29
---

# Phase 1 Plan 1: Normalize Unity baseline, packages and benchmark-device assumptions Summary

**Unity baseline trimmed to slice-safe packages, Ascend player identity, and a project-owned Bootstrap scene aligned to Galaxy A15 at 30 FPS.**

## Performance

- **Duration:** 3 min 10 s
- **Started:** 2026-03-29T18:49:28-03:00
- **Completed:** 2026-03-29T21:52:31Z
- **Tasks:** 3
- **Files modified:** 6

## Accomplishments
- Removed Visual Scripting, multiplayer center, and collab proxy from the Unity manifest while preserving Input System, URP, uGUI, and the test framework.
- Replaced the template player identity with Ascend-specific settings and documented the phase benchmark contract for Galaxy A15, Galaxy A10, and 30 FPS.
- Replaced SampleScene in build ownership with a project-owned Bootstrap scene safe to open before combat/runtime systems exist.

## Task Commits

Each task was committed atomically:

1. **Task 1: Trim template packages to the slice baseline** - `7ff43a0` (chore)
2. **Task 2: Replace template identity and record benchmark assumptions** - `ef660e8` (chore)
3. **Task 3: Replace SampleScene with a stable Bootstrap scene** - `4942ceb` (feat)

**Plan metadata:** Captured in the final docs commit together with `STATE.md`, `ROADMAP.md`, and requirement progress.

## Files Created/Modified
- `Unity/Packages/manifest.json` - Manifest baseline without template-only package dependencies.
- `Unity/ProjectSettings/ProjectSettings.asset` - Player identity normalized to Ascend and detached from the template app id root.
- `.planning/phases/01-foundation-and-guardrails/01-BENCHMARK-ASSUMPTIONS.md` - Human-readable benchmark contract for the slice baseline.
- `Unity/ProjectSettings/EditorBuildSettings.asset` - Build scene ownership moved from SampleScene to Bootstrap.
- `Unity/Assets/_Project/Scenes/Bootstrap.unity` - Stable shell scene with only camera/bootstrap root content.
- `Unity/Assets/_Project/Scenes/Bootstrap.unity.meta` - Stable Unity GUID matching the build settings entry.

## Decisions Made
- Kept the Bootstrap scene intentionally minimal so Phase 1 establishes ownership and boot safety without inventing runtime systems early.
- Updated `templateDefaultScene` to `Assets/_Project/Scenes/Bootstrap.unity` so Player Settings stop pointing at the template SampleScene.

## Deviations from Plan

### Auto-fixed Issues

**1. [Rule 2 - Missing Critical] Added Bootstrap scene metadata for GUID stability**
- **Found during:** Task 3 (Replace SampleScene with a stable Bootstrap scene)
- **Issue:** `EditorBuildSettings.asset` needs a stable Unity GUID; without `Bootstrap.unity.meta`, the build entry would depend on editor-regenerated metadata outside git.
- **Fix:** Added `Unity/Assets/_Project/Scenes/Bootstrap.unity.meta` with an explicit GUID and referenced the same GUID from `EditorBuildSettings.asset`.
- **Files modified:** `Unity/Assets/_Project/Scenes/Bootstrap.unity.meta`, `Unity/ProjectSettings/EditorBuildSettings.asset`
- **Verification:** `test -f Unity/Assets/_Project/Scenes/Bootstrap.unity` and `rg -n "Assets/_Project/Scenes/Bootstrap\\.unity" Unity/ProjectSettings/EditorBuildSettings.asset`
- **Committed in:** `4942ceb` (part of task commit)

**2. [Rule 3 - Blocking] Synchronized human-readable planning progress after GSD tool updates**
- **Found during:** Final workflow metadata update
- **Issue:** The GSD state/roadmap commands advanced structural state, but the human-readable `STATE.md` metrics and ROADMAP progress row still showed `0` completed plans.
- **Fix:** Manually aligned `STATE.md` and the ROADMAP progress table with the completed `01-01` plan and the recorded execution metrics.
- **Files modified:** `.planning/STATE.md`, `.planning/ROADMAP.md`
- **Verification:** `STATE.md` now shows `Total plans completed: 1` and `ROADMAP.md` shows Phase 1 as `1/3 | In Progress`.
- **Committed in:** Final docs commit for plan metadata

---

**Total deviations:** 2 auto-fixed (1 missing critical, 1 blocking)
**Impact on plan:** No scope creep. Both fixes were required for artifact integrity: one for Unity asset stability and one for accurate GSD planning state.

## Issues Encountered
- The repository worktree already contained unrelated deletions under `Scripts/` and a largely untracked `Unity/` tree. Each task commit staged only the required plan files to avoid mixing unrelated changes into execution history.

## User Setup Required

None - no external service configuration required.

## Next Phase Readiness
- Ready for `01-02` to introduce `_Project/` runtime architecture and authored-data assets on top of a project-owned Bootstrap entry point.
- `Unity/Packages/packages-lock.json` and the rest of the untracked Unity template artifacts remain outside this plan's scope and were intentionally not normalized here.

---
*Phase: 01-foundation-and-guardrails*
*Completed: 2026-03-29*

## Self-Check: PASSED
