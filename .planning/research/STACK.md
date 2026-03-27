# Stack Research

**Domain:** Mobile turn-based RPG in Unity
**Researched:** 2026-03-27
**Confidence:** HIGH

## Recommended Stack

### Core Technologies

| Technology | Version | Purpose | Why Recommended |
|------------|---------|---------|-----------------|
| Unity Editor | 6000.3 LTS | Engine, tooling and mobile runtime | Unity docs currently expose the supported line as Unity 6.3 LTS, and the local project already exists on `6000.3.2f1`, reducing migration risk early. |
| C# | Built into Unity 6000.3 | Gameplay, simulation and tooling code | Best fit for testable domain logic separated from scene objects, with mature Unity integration. |
| Unity Input System | 1.17.0 | Touch and input abstraction | Already present in the local manifest and is the modern input path for mobile and optional controller support. |
| uGUI + TextMeshPro | uGUI 2.0.0 | Primary runtime UI for HUD, combat overlays and menus | Current Unity docs still recommend uGUI as the general runtime UI baseline, and it is the most pragmatic path for GameObject-heavy game HUD flows. |
| URP 17.3.0 (conditional) | From local manifest | Rendering pipeline if 2D lights/shaders are actually needed | Acceptable if kept lean, but should remain optional and benchmarked against the low-end device target before heavy adoption. |

### Supporting Libraries

| Library | Version | Purpose | When to Use |
|---------|---------|---------|-------------|
| Addressables | 2.7.6 | Asset loading and memory control | Add once the project starts loading content sets beyond a tiny vertical slice; useful for memory discipline on mobile. |
| Unity Test Framework | 1.6.0 | EditMode and PlayMode tests | Use from Phase 1 onward for combat rules, AI decisions and regression coverage. |
| UI Toolkit | Unity 6.3 built-in | Optional menu/overlay UI alternative | Consider only if later menus benefit from document-style authoring without increasing runtime complexity in combat screens. |
| Sprite Atlas / dynamic atlas | Built-in | Reduce texture-driven batch breaks in UI and 2D assets | Use as soon as multiple UI or sprite textures appear on the same screen. |
| Unity built-in object pooling | Unity 6.x | Reuse combat UI widgets, VFX and transient objects | Use for any repeated runtime spawn/despawn path that would otherwise allocate during combat. |

### Development Tools

| Tool | Purpose | Notes |
|------|---------|-------|
| Unity Profiler | CPU, memory and frame-time inspection | Must be used on target devices, not only in the Editor. |
| Frame Debugger | Batch and overdraw investigation | Especially important for combat HUD and menu screens. |
| Memory Profiler / managed memory tools | Detect leaks and heap growth | Use when combat turns or loading flow show increasing memory pressure. |

## Installation

```text
Core
- Keep the project on Unity 6000.3 LTS unless a later patch is explicitly validated.
- Keep C# gameplay code in pure runtime assemblies where possible.

Supporting
- Add Addressables only when content loading complexity justifies it.
- Keep Test Framework enabled for EditMode/PlayMode validation.
- Use Sprite Atlas / UI Toolkit atlas settings before adding UI-heavy content.
```

## Alternatives Considered

| Recommended | Alternative | When to Use Alternative |
|-------------|-------------|-------------------------|
| uGUI 2.0.0 | UI Toolkit Runtime | Consider UI Toolkit later for menu-heavy overlays if it measurably improves authoring and does not complicate combat/UI event flow. |
| Lean URP usage | Built-in Render Pipeline | Consider Built-in only if the final art direction stays extremely simple and URP overhead fails low-end benchmarks. |
| ScriptableObject-authored data + pure C# runtime state | MonoBehaviour-heavy logic and scene-owned data | Only acceptable for throwaway prototypes, not for a production vertical slice. |

## What NOT to Use

| Avoid | Why | Use Instead |
|-------|-----|-------------|
| Visual Scripting for core combat logic | Harder to diff, test and refactor, especially with many rule interactions | Pure C# systems with tests |
| `Resources/` as the main content pipeline | Weak memory control and poor long-term asset organization | Explicit references early, Addressables when content scales |
| Heavy post-processing and renderer features by default | Conflicts with low-end mobile performance target | Minimal renderer setup, art-first optimization budget |
| Reflection-heavy service locators / DI frameworks early | Adds startup/runtime overhead and debugging complexity with little MVP benefit | Explicit composition roots and simple constructors |

## Stack Patterns by Variant

**If the UI remains GameObject-heavy and tightly coupled to combat state:**
- Use uGUI as the default runtime UI system.
- Because Unity still documents uGUI as the general runtime recommendation and it is straightforward to wire from `MonoBehaviour` presenters.

**If later menus become document-heavy and mostly static:**
- Evaluate UI Toolkit for those specific screens only.
- Because mixing UI systems too early adds event/input complexity without helping the first slice.

**If content grows beyond one vertical slice:**
- Introduce Addressables for encounter bundles, skill content and large asset groups.
- Because the current mobile target values controlled memory and predictable loading.

## Version Compatibility

| Package A | Compatible With | Notes |
|-----------|-----------------|-------|
| Unity `6000.3.2f1` | Input System `1.17.0` | Observed in local `Unity/Packages/manifest.json`. |
| Unity `6000.3.2f1` | UGUI `2.0.0` | Observed in local manifest; available as fallback UI path. |
| Unity `6000.3.2f1` | URP `17.3.0` | Observed in local manifest; keep renderer features lean. |
| Unity `6000.3` | Addressables `2.7.6` docs | Current package docs are available and emphasize memory management discipline. |

## Sources

- Local file `Unity/ProjectSettings/ProjectVersion.txt` — current editor version observed in repo
- Local file `Unity/Packages/manifest.json` — current packages observed in repo
- Unity Manual, Comparison of UI systems: https://docs.unity3d.com/6000.0/Documentation/Manual/UI-system-compare.html
- Unity uGUI package manual: https://docs.unity3d.com/Packages/com.unity.ugui%402.0/manual/index.html
- Unity Input System manual: https://docs.unity3d.com/Packages/com.unity.inputsystem%401.17/manual/index.html
- Unity ScriptableObject API: https://docs.unity3d.com/ScriptReference/ScriptableObject.html
- Unity Manual, Garbage collector overview: https://docs.unity3d.com/Manual/performance-garbage-collector.html
- Unity Manual, Collecting performance data: https://docs.unity3d.com/Manual/profiler-profiling-applications.html
- Unity Addressables, Memory management: https://docs.unity3d.com/Packages/com.unity.addressables%402.7/manual/MemoryManagement.html
- Unity Learn, Object pooling: https://learn.unity.com/course/design-patterns-unity-6/tutorial/use-object-pooling-to-boost-performance-of-c-scripts-in-unity

---
*Stack research for: mobile turn-based RPG in Unity*
*Researched: 2026-03-27*
