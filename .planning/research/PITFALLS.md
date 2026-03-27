# Pitfalls Research

**Domain:** Mobile turn-based RPG in Unity
**Researched:** 2026-03-27
**Confidence:** HIGH

## Critical Pitfalls

### Pitfall 1: Combat rules trapped in scenes and animations

**What goes wrong:**
Battle logic becomes distributed across scene references, animation callbacks and `MonoBehaviour` state, making fixes slow and regressions common.

**Why it happens:**
Unity prototypes often start inside scenes because it feels faster.

**How to avoid:**
Keep combat phases, action resolution, damage and status logic in pure C# systems from the beginning.

**Warning signs:**
You cannot run combat tests without loading a scene, or changing a rule requires editing several unrelated objects.

**Phase to address:**
Phase 1 and Phase 2

---

### Pitfall 2: GC spikes during combat

**What goes wrong:**
Low-end devices hitch whenever turns resolve, tooltips open or repeated effects spawn.

**Why it happens:**
Frequent allocations from LINQ, string churn, temporary collections and instantiate/destroy loops accumulate quickly.

**How to avoid:**
Profile on device, preallocate hot-path collections, pool repeated objects and watch GC allocs every combat step.

**Warning signs:**
Profiler shows regular GC allocations in the turn loop or frame hitches during repeated actions.

**Phase to address:**
Phase 1, Phase 2 and Phase 8

---

### Pitfall 3: UI that is visually simple on paper but expensive in practice

**What goes wrong:**
Menus and combat HUD look minimal yet still drop frames because of overdraw, texture churn or too many moving elements.

**Why it happens:**
Teams treat UI simplicity as an art choice, not a rendering-budget rule.

**How to avoid:**
Use atlas-friendly assets, keep moving UI elements limited, validate draw calls and batches, and profile every important screen on target devices.

**Warning signs:**
Frame drops happen when the HUD updates, menus open, or status icons multiply.

**Phase to address:**
Phase 1, Phase 7 and Phase 8

---

### Pitfall 4: Companion AI that feels random or untrustworthy

**What goes wrong:**
Players stop engaging with the system because companions waste turns, ignore priorities or sabotage the player's plan.

**Why it happens:**
AI rules remain implicit and are tuned only by feel instead of being made observable.

**How to avoid:**
Implement explicit tactical-role rules, focus-target logic and debug-friendly traces for chosen actions.

**Warning signs:**
Testers cannot explain why an ally chose an action, or the same setup produces surprising outcomes repeatedly.

**Phase to address:**
Phase 3

---

### Pitfall 5: Scope blow-up from optional systems

**What goes wrong:**
The team starts building manual full-party control, broad campaign content or meta systems before the core loop is stable.

**Why it happens:**
Optional features feel harmless until they triple UI, balance and content complexity.

**How to avoid:**
Treat the first roadmap as a validation slice and defer optional expansion explicitly in requirements.

**Warning signs:**
New menus or secondary systems appear before the first clean combat session is playable on device.

**Phase to address:**
Phase 5 onward, enforced at roadmap level

---

### Pitfall 6: Undefined design edges turning into rework

**What goes wrong:**
Systems are implemented twice because critical values, loops or priorities were never decided clearly enough.

**Why it happens:**
Teams "fill in the blanks" under schedule pressure instead of forcing a decision.

**How to avoid:**
Use targeted Q&A when a missing rule blocks implementation, and log the answer as a project decision immediately.

**Warning signs:**
Repeated debate around the same unresolved topic, such as active slot count, target platform baseline or save structure.

**Phase to address:**
All phases, especially Phase 1 through Phase 5

## Technical Debt Patterns

| Shortcut | Immediate Benefit | Long-term Cost | When Acceptable |
|----------|-------------------|----------------|-----------------|
| Hardcode balance numbers in scene scripts | Faster prototype | Painful tuning and hidden regressions | Only for throwaway spikes |
| Use `Resources/` for everything | Zero setup | Weak memory control and messy asset growth | Small temporary prototypes only |
| Skip device profiling until later | Short-term speed | Late discovery of fatal performance issues | Never for this project |

## Integration Gotchas

| Integration | Common Mistake | Correct Approach |
|-------------|----------------|------------------|
| Save system | Serialize live scene objects directly | Save compact versioned runtime state instead |
| UI assets | Load textures ad hoc per screen | Reuse atlases and verify batching behavior |
| Content bundles | Add Addressables too late and migrate in panic | Introduce them only when needed, but keep data boundaries ready |

## Performance Traps

| Trap | Symptoms | Prevention | When It Breaks |
|------|----------|------------|----------------|
| Per-turn allocations | Random hitches in repeated combat | Preallocate, reuse and pool | Immediately on older devices |
| HUD overdraw / texture churn | Menus or combat overlays tank FPS | Atlas discipline and simple layout rules | As soon as UI density grows |
| Synchronous bulk loading | Long hangs entering encounters | Keep the slice small, then add staged loading | Once multiple encounters/assets exist |

## Security Mistakes

| Mistake | Risk | Prevention |
|---------|------|------------|
| Trusting save data shape blindly | Corrupted saves and broken progression | Version and validate saved payloads |
| Mixing debug cheats into shipping flows | Progression exploits and invalid test data | Gate cheats behind dev-only flags |
| Hiding critical state in scene-only objects | Save/load inconsistencies | Centralize persistent state in a runtime model |

## UX Pitfalls

| Pitfall | User Impact | Better Approach |
|---------|-------------|-----------------|
| Too many taps to take a turn | Combat feels slow despite being turn-based | Keep action selection shallow and predictable |
| Status effects without readable feedback | Player cannot reason about outcomes | Show source, duration and impact clearly |
| Companion behavior without explanation | Player loses trust in automation | Surface role and target priority rules clearly |

## "Looks Done But Isn't" Checklist

- [ ] **Combat loop:** turn order is visible, costs are correct and end-of-turn effects resolve in the right place
- [ ] **Companion AI:** allies respect tactical role and focus target in repeated scenarios
- [ ] **Mobile UI:** main combat actions are usable on a phone without hidden overflow flows
- [ ] **Performance:** the slice has been profiled on the target device, not only in the Editor
- [ ] **Save/resume:** interruption and return paths are validated at least once on device

## Recovery Strategies

| Pitfall | Recovery Cost | Recovery Steps |
|---------|---------------|----------------|
| Scene-owned combat logic | HIGH | Freeze features, extract rules into domain layer, backfill tests |
| GC spikes in combat | MEDIUM | Capture profiles, remove hot-path allocations, pool repeated objects |
| UI overdraw / batching issues | MEDIUM | Audit atlases, simplify visual tree, re-profile on device |
| Scope blow-up | HIGH | Cut back to validated slice and move extras to future requirements |

## Pitfall-to-Phase Mapping

| Pitfall | Prevention Phase | Verification |
|---------|------------------|--------------|
| Scene-owned combat logic | Phase 1 | Domain rules run without scene dependencies |
| GC spikes in combat | Phase 1 / 2 / 8 | Profiler shows clean hot path in core encounters |
| Expensive UI | Phase 1 / 7 / 8 | HUD and menus stay responsive on target device |
| Untrustworthy companion AI | Phase 3 | Repeated scenarios produce explainable ally actions |
| Scope blow-up | Roadmap governance / Phase 5+ | Deferred items stay out of MVP implementation |
| Undefined design edges | All phases | Blocking questions are answered and logged before coding |

## Sources

- Internal design source: `Estruturacao.md`
- Project context: `.planning/PROJECT.md`
- Unity Manual, Garbage collector overview: https://docs.unity3d.com/Manual/performance-garbage-collector.html
- Unity Manual, Performance consideration for runtime UI: https://docs.unity3d.com/Manual/UIE-performance-consideration-runtime.html
- Unity Manual, Control textures of the dynamic atlas: https://docs.unity3d.com/Manual/UIE-control-textures-of-the-dynamic-atlas.html
- Unity Manual, Collecting performance data: https://docs.unity3d.com/Manual/profiler-profiling-applications.html
- Unity Learn, Object pooling: https://learn.unity.com/course/design-patterns-unity-6/tutorial/use-object-pooling-to-boost-performance-of-c-scripts-in-unity

---
*Pitfalls research for: mobile turn-based RPG in Unity*
*Researched: 2026-03-27*
