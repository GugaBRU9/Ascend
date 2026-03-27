# Project Research Summary

**Project:** Ascend
**Domain:** Mobile turn-based RPG in Unity
**Researched:** 2026-03-27
**Confidence:** HIGH

## Executive Summary

Ascend is best approached as a mobile-first, offline-first Unity vertical slice where the core validation target is not content breadth, but a fast and readable combat/build loop that still feels deep on older phones. Current Unity 6.3 LTS documentation strongly supports an optimization-first workflow: keep managed allocations near zero in hot paths, profile on device, and treat runtime UI batching/atlas behavior as an explicit engineering concern.

The recommended implementation direction is a data-driven Unity project with authored content in ScriptableObjects and combat rules in pure C# runtime systems. This fits the design's many interacting rules while keeping the project testable and easier to optimize. The main risk is not engine capability; it is scope and architecture drift: if combat logic leaks into scenes, optional systems arrive too early, or UI/performance are handled late, the mobile promise breaks quickly.

## Key Findings

### Recommended Stack

Use Unity 6000.3 LTS as the project baseline, matching both the current supported documentation line and the local observed project version family. Keep gameplay systems in C#, favor pure runtime state over scene-owned logic, and use uGUI as the default runtime UI path for the first playable slice, leaving UI Toolkit as a later option for non-combat overlays if it proves useful.

**Core technologies:**
- Unity 6000.3 LTS: engine and tooling baseline — matches the current local project direction
- C#: gameplay and simulation layer — best fit for explicit rules and tests
- Input System 1.17.0: touch/input abstraction — already present locally
- uGUI 2.0.0: runtime UI baseline — pragmatic for GameObject-driven combat HUD and menu flows

### Expected Features

The table-stakes slice is a short, readable turn-based combat loop with meaningful progression, trustworthy companion automation, save/resume and low-end responsiveness. The design's strongest differentiators are concentrating build depth in a single protagonist, keeping companions auto-managed by default, and unlocking skills through multiple vectors instead of one linear tree.

**Must have (table stakes):**
- Readable turn-based combat loop — users cannot value depth if moment-to-moment turns are unclear
- Progression with real build choices — the project promise depends on this
- Reliable companion automation — otherwise the 5-character party becomes friction
- Save/resume and stable performance — mandatory for mobile sessions

**Should have (competitive):**
- Hybrid skill acquisition — reinforces exploration, NPC and playstyle expression
- Limited active slots with always-on passives — preserves speed without flattening depth

**Defer (v2+):**
- Optional full manual party control
- Broad campaign content and meta systems
- Cloud/online layers

### Architecture Approach

Use a layered structure where scenes and UI only present state, application services orchestrate flow, and the domain layer owns combat/progression/AI rules. Author content through ScriptableObjects, but create runtime battle state in plain C# objects so the rules can be tested and optimized independently.

**Major components:**
1. Presentation layer — screens, combat HUD, touch input and feedback
2. Application layer — battle flow, session flow and persistence orchestration
3. Domain layer — turn queue, action resolution, status/damage systems, AI and progression rules
4. Data/infrastructure layer — authored definitions, saving/loading, profiling and asset boundaries

### Critical Pitfalls

1. **Scene-owned combat logic** — keep rules out of MonoBehaviour lifecycles from Phase 1
2. **GC spikes during combat** — profile on device and remove allocations from hot paths early
3. **Expensive "simple" UI** — control batching, atlases and moving elements intentionally
4. **Untrustworthy companion AI** — make tactical-role behavior explicit and testable
5. **Scope blow-up from optional systems** — protect the vertical slice and defer extras

## Implications for Roadmap

Based on research, suggested phase structure:

### Phase 1: Foundation and Guardrails
**Rationale:** Architecture and performance discipline must exist before combat rules spread.
**Delivers:** Clean Unity baseline, data backbone and profiling workflow.
**Addresses:** Stack setup and low-end performance constraints.
**Avoids:** Scene-owned combat logic and late performance surprises.

### Phase 2: Combat Core
**Rationale:** The product lives or dies on readable turn resolution.
**Delivers:** Turn order, action resolution and energy pacing.
**Uses:** Pure C# runtime systems and tests.
**Implements:** Battle flow and resolver core.

### Phase 3: Party and AI
**Rationale:** The party structure is central to the game's identity.
**Delivers:** Protagonist + companions, tactical roles and reliable automation.
**Uses:** Data-authored archetypes and explainable AI rules.
**Implements:** Party state and AI planner.

### Phase 4: Progression and Build Rules
**Rationale:** Build depth is the second half of the core promise.
**Delivers:** Attributes, leveling and equipment-driven stat changes.

### Phase 5: Skills and Acquisition
**Rationale:** Skill identity depends on both combat slots and unlock sources.
**Delivers:** Multi-track skills plus acquisition hooks.

### Phase 6: Status and Damage Matrix
**Rationale:** Tactical depth needs consistent effects, damage types and resistances.
**Delivers:** Status, cleanse, resistances and vulnerabilities.

### Phase 7: Mobile UX and Session Loop
**Rationale:** The slice is not valid until the phone experience is actually smooth.
**Delivers:** Readable HUD, short-session flow and save/resume.

### Phase 8: Vertical Slice Hardening
**Rationale:** Final validation must happen under the target hardware and pacing constraints.
**Delivers:** Tuned, profiled and regression-checked MVP slice.

### Phase Ordering Rationale

- Combat foundation precedes content breadth because rule integrity and performance are the main risks.
- Companion AI follows core combat so automation is built on stable action semantics.
- Mobile UX and save/resume happen before final hardening because the 10-minute-session promise depends on them.
- Optional complexity remains deferred so the first milestone proves the core value fast.

### Research Flags

Phases likely needing deeper research during planning:
- **Phase 5:** reflection-based unlock rules may need a tighter design contract
- **Phase 7:** final UI system split (UI Toolkit only vs selective UGUI) should be decided by profiling
- **Phase 8:** target device selection and budgets must be made explicit

Phases with standard patterns (skip research-phase if needed):
- **Phase 1:** Unity project structure and profiling workflow
- **Phase 2:** explicit turn-state architecture
- **Phase 4:** data-driven attributes and derived stat propagation

## Confidence Assessment

| Area | Confidence | Notes |
|------|------------|-------|
| Stack | HIGH | Backed by current Unity 6.3 LTS docs and local project state |
| Features | MEDIUM | Strong internal design basis, but some product edges remain intentionally open |
| Architecture | HIGH | Standard Unity best practices match the project's constraints closely |
| Pitfalls | HIGH | Risks are consistent with Unity/mobile performance guidance and the design itself |

**Overall confidence:** HIGH

### Gaps to Address

- Exact target low-end device profile: define during Phase 1 so "performance" becomes measurable
- Tactical field model for combat: define before combat UI and AI lock in
- Exact active skill slot count and save granularity: define via Q&A before implementation hardens
- Scope of the first content slice: define before Phase 5/7 to avoid content creep

## Sources

### Primary (HIGH confidence)
- Local file `Unity/ProjectSettings/ProjectVersion.txt` — observed editor version
- Local file `Unity/Packages/manifest.json` — observed package baseline
- Unity Manual, Comparison of UI systems: https://docs.unity3d.com/6000.0/Documentation/Manual/UI-system-compare.html
- Unity uGUI package manual: https://docs.unity3d.com/Packages/com.unity.ugui%402.0/manual/index.html
- Unity Input System manual: https://docs.unity3d.com/Packages/com.unity.inputsystem%401.17/manual/index.html
- Unity ScriptableObject API: https://docs.unity3d.com/ScriptReference/ScriptableObject.html
- Unity Manual, Garbage collector overview: https://docs.unity3d.com/Manual/performance-garbage-collector.html
- Unity Manual, Collecting performance data: https://docs.unity3d.com/Manual/profiler-profiling-applications.html
- Unity Addressables, Memory management: https://docs.unity3d.com/Packages/com.unity.addressables%402.7/manual/MemoryManagement.html

### Secondary (MEDIUM confidence)
- Unity Learn, Object pooling: https://learn.unity.com/course/design-patterns-unity-6/tutorial/use-object-pooling-to-boost-performance-of-c-scripts-in-unity
- Internal design source: `Estruturacao.md`

---
*Research completed: 2026-03-27*
*Ready for roadmap: yes*
