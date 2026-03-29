---
phase: 01-foundation-and-guardrails
plan: 02
subsystem: runtime
tags: [unity, asmdef, scriptableobject, bootstrap, mobile]
requires:
  - phase: 01-01
    provides: "Bootstrap scene project-owned and Unity baseline normalized for Phase 1"
provides:
  - "Layered runtime asmdefs under Unity/Assets/_Project"
  - "Authored bootstrap, benchmark, combat baseline and session flow assets"
  - "Bootstrap.unity wired to AppBootstrapConfig with fail-fast validation"
affects: [02-combat-core, 07-mobile-ux-and-session-flow, TECH-02]
tech-stack:
  added: [Unity asmdef boundaries, ScriptableObject-authored configuration]
  patterns: [explicit bootstrap composition root, root game-data catalog]
key-files:
  created:
    - Unity/Assets/_Project/Runtime/Domain/Ascend.Domain.asmdef
    - Unity/Assets/_Project/Runtime/Application/Ascend.Application.asmdef
    - Unity/Assets/_Project/Runtime/Presentation/Ascend.Presentation.asmdef
    - Unity/Assets/_Project/Runtime/Infrastructure/Ascend.Infrastructure.asmdef
    - Unity/Assets/_Project/Content/Definitions/GameDataCatalog.cs
    - Unity/Assets/_Project/Content/Definitions/Assets/GameDataCatalog.asset
  modified:
    - Unity/Assets/_Project/Bootstrap/AppBootstrap.cs
    - Unity/Assets/_Project/Bootstrap/Ascend.Bootstrap.asmdef
    - Unity/Assets/_Project/Scenes/Bootstrap.unity
key-decisions:
  - "Authored configs live in a dedicated Ascend.Content.Definitions assembly so bootstrap code can reference them without falling back to Assembly-CSharp."
  - "Bootstrap.unity serializes only the AppBootstrapConfig root asset; benchmark and gameplay slice assumptions are resolved transitively through GameDataCatalog."
patterns-established:
  - "Bootstrap reads a single root config asset and validates every required downstream reference before continuing."
  - "Slice assumptions such as device baseline, active skill slots and checkpoint model are versioned as ScriptableObject data, not scene-only fields."
requirements-completed: [TECH-02]
duration: 13min
completed: 2026-03-29
---

# Phase 1 Plan 2: Runtime Architecture and Authored Catalog Summary

**Layered Unity runtime assemblies with ScriptableObject-authored bootstrap, combat baseline, and session flow wired into Bootstrap.unity**

## Performance

- **Duration:** 13 min
- **Started:** 2026-03-29T21:57:37Z
- **Completed:** 2026-03-29T22:05:27Z
- **Tasks:** 3
- **Files modified:** 35

## Accomplishments
- Created the first `_Project` runtime boundaries with dedicated asmdefs for bootstrap, domain, application, presentation and infrastructure.
- Added authored benchmark, bootstrap, combat baseline and session flow definitions plus concrete assets for the Galaxy A15 baseline and the first playable sequence.
- Wired `Bootstrap.unity` to `AppBootstrapConfig.asset` and made `AppBootstrap` fail fast when benchmark or catalog dependencies are missing.

## Task Commits

Each task was committed atomically:

1. **Task 1: Create layered runtime assemblies and bootstrap entrypoint** - `e923325` (feat)
2. **Task 2: Create authored definitions and concrete config assets for the slice baseline** - `c67b0ad` (feat)
3. **Task 3: Wire Bootstrap scene to authored config instead of scene-only constants** - `81390d2` (feat)

## Files Created/Modified
- `Unity/Assets/_Project/Bootstrap/AppBootstrap.cs` - Minimal composition root that validates and resolves authored bootstrap dependencies.
- `Unity/Assets/_Project/Bootstrap/Ascend.Bootstrap.asmdef` - Bootstrap assembly boundary plus reference to authored definitions.
- `Unity/Assets/_Project/Content/Definitions/Ascend.Content.Definitions.asmdef` - Dedicated assembly for authored configuration types.
- `Unity/Assets/_Project/Content/Definitions/GameDataCatalog.cs` - Root catalog that exposes combat and session configs to runtime code.
- `Unity/Assets/_Project/Content/Definitions/CombatPrototypeConfig.cs` - Authored combat slice baseline with `FrontBackline` and `activeSkillSlots = 3`.
- `Unity/Assets/_Project/Content/Definitions/SessionFlowConfig.cs` - Authored session flow and checkpoint model for the first playable sequence.
- `Unity/Assets/_Project/Content/Definitions/Assets/AppBootstrapConfig.asset` - Root bootstrap asset linking benchmark and catalog data.
- `Unity/Assets/_Project/Scenes/Bootstrap.unity` - Scene shell now serialized against the authored bootstrap asset.

## Decisions Made
- Added a dedicated `Ascend.Content.Definitions` asmdef because `AppBootstrap` could not safely evolve toward typed config references while authored config scripts remained outside assembly boundaries.
- Kept all slice assumptions in authored assets and limited scene serialization to the root bootstrap asset so future phases can extend data without burying rules in scene state.

## Deviations from Plan

### Auto-fixed Issues

**1. [Rule 3 - Blocking] Added `Ascend.Content.Definitions` assembly for authored config types**
- **Found during:** Task 2 (Create authored definitions and concrete config assets for the slice baseline)
- **Issue:** `AppBootstrap` needed to evolve from a generic placeholder reference to typed `AppBootstrapConfig` and `GameDataCatalog` references, but Unity asmdefs do not provide a safe path from `Ascend.Bootstrap` to scripts left in the default predefined assembly.
- **Fix:** Added `Unity/Assets/_Project/Content/Definitions/Ascend.Content.Definitions.asmdef` and updated `Ascend.Bootstrap.asmdef` to reference it before wiring the typed bootstrap in Task 3.
- **Files modified:** `Unity/Assets/_Project/Content/Definitions/Ascend.Content.Definitions.asmdef`, `Unity/Assets/_Project/Bootstrap/Ascend.Bootstrap.asmdef`
- **Verification:** `rg -n 'Ascend.Content.Definitions' Unity/Assets/_Project/Bootstrap/Ascend.Bootstrap.asmdef`
- **Committed in:** `c67b0ad` and `81390d2`

---

**Total deviations:** 1 auto-fixed (1 blocking)
**Impact on plan:** Required for correctness of the assembly split and for typed authored-config wiring. No gameplay scope was expanded.

## Issues Encountered
- Unity assembly boundaries required one extra content asmdef beyond the plan file list. The issue was resolved inline without changing the plan objective.

## User Setup Required

None - no external service configuration required.

## Next Phase Readiness
- The project now has a stable runtime/data boundary for future combat, progression and session-flow work.
- `Bootstrap.unity` depends on authored assets instead of scene-only constants, which keeps TECH-02 aligned for downstream phases.
- No automated Unity compile or EditMode runner was executed in this plan because Phase 01-03 is the plan that introduces those guardrails.

---
*Phase: 01-foundation-and-guardrails*
*Completed: 2026-03-29*

## Self-Check: PASSED
