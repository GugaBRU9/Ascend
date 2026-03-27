# Feature Research

**Domain:** Mobile turn-based RPG
**Researched:** 2026-03-27
**Confidence:** MEDIUM

## Feature Landscape

### Table Stakes (Users Expect These)

| Feature | Why Expected | Complexity | Notes |
|---------|--------------|------------|-------|
| Short playable combat loop | Mobile RPG players expect a complete encounter in a reasonable session | MEDIUM | Must validate the promised ~10 minute session target. |
| Small end-to-end mission slice | A vertical slice is stronger when it includes at least one full run shape, not only disconnected battles | MEDIUM | The exact mission structure is still open and should be closed by Q&A before implementation hardens. |
| Clear turn readability | Turn-based combat fails fast if order, target and effect feedback are unclear | MEDIUM | UI simplicity is part of the product promise, not polish-only work. |
| Character progression with meaningful choices | Build depth is central to retention in this genre | HIGH | Needs attributes, skills and equipment working together. |
| Party roles and companion usefulness | A 5-character party feels broken if allies are passive or incoherent | HIGH | Automation must feel intentional, not random. |
| Save/resume on mobile | Sessions get interrupted; losing progress breaks trust quickly | MEDIUM | Safe-point scope is enough for the first vertical slice. |
| Stable low-end performance | The stated audience includes older phones | HIGH | Performance is a launch requirement, not a post-launch optimization task. |

### Differentiators (Competitive Advantage)

| Feature | Value Proposition | Complexity | Notes |
|---------|-------------------|------------|-------|
| One deep protagonist + 4 auto-managed companions | Preserves build depth without overwhelming mobile UI | HIGH | Strong product identity versus "manage 5 full builds" designs. |
| Hybrid skill acquisition from exploration, NPCs and reflection | Gives three distinct ways to grow without forcing one playstyle | HIGH | Reflection unlocks need telemetry or rule tracking. |
| Limited active slots with unlimited unlocked passives | Keeps turns fast while allowing long-term build complexity | HIGH | Needs disciplined balance and status/scaling clarity. |
| Optional full manual party control | Advanced-mode depth for expert players | HIGH | Valuable differentiator, but likely post-MVP due UI/scope cost. |

### Anti-Features (Commonly Requested, Often Problematic)

| Feature | Why Requested | Why Problematic | Alternative |
|---------|---------------|-----------------|-------------|
| Full build management for all companions in MVP | Sounds "deeper" on paper | Explodes UI, balancing and content authoring cost immediately | Keep archetype-led companions with tactical roles |
| Real-time / hybrid combat layers | Feels modern and flashy | Conflicts with readability, input simplicity and low-end performance | Stay fully turn-based and optimize pacing instead |
| Heavy VFX, post-processing and shader spectacle | Looks premium in screenshots | Directly hurts the low-end phone goal | Prefer strong silhouettes, timing and readable effects |
| Live-service systems before core validation | Feels like future-proofing | Distracts from validating combat/build value | Ship an offline-first vertical slice first |

## Feature Dependencies

```text
[Short session loop]
    └──requires──> [Save/resume]
    └──requires──> [Readable combat UI]

[Companion automation]
    └──requires──> [Party structure]
    └──requires──> [Tactical roles]
    └──requires──> [Target priority rules]

[Hybrid skill acquisition]
    └──requires──> [Skill system]
    └──requires──> [Progress tracking / reflection triggers]
    └──requires──> [Exploration/NPC encounter hooks]

[Optional manual party control]
    └──conflicts early with──> [Simple UI MVP]
```

### Dependency Notes

- **Short session loop requires save/resume:** mobile interruption is normal, so "10 minute sessions" are not credible without safe resume behavior.
- **Companion automation requires explicit tactical rules:** otherwise allies feel random and break trust in the system.
- **Hybrid skill acquisition requires instrumentation:** reflection unlocks depend on tracking recurring player behavior.
- **Optional manual control conflicts early with simple UI:** it can be added later, but it should not shape the first vertical slice.

## MVP Definition

### Launch With (v1)

- [ ] Playable turn-based combat loop on mobile — validates the core promise
- [ ] Protagonist progression via attributes, skills and equipment — validates build depth
- [ ] Four companions with tactical role presets and reliable auto-actions — validates low-friction party play
- [ ] Status, resistance, damage-type and energy systems — validates tactical depth
- [ ] Minimal acquisition hooks for exploration/NPC/reflection rewards — validates long-term growth shape
- [ ] Save/resume and performance verification on low-end hardware — validates mobile viability

### Add After Validation (v1.x)

- [ ] Optional full manual party control — add once the base UI is proven
- [ ] Broader encounter catalog and richer archetype roster — add after combat readability is stable
- [ ] Deeper exploration spaces and stronger NPC teaching loop — add once core progression pacing is tuned

### Future Consideration (v2+)

- [ ] Full campaign content breadth — defer until the vertical slice proves the combat/build loop
- [ ] Cloud sync or online services — defer until offline-first loop is solid
- [ ] Meta progression, monetization and live content cadence — defer until product direction is validated

## Feature Prioritization Matrix

| Feature | User Value | Implementation Cost | Priority |
|---------|------------|---------------------|----------|
| Readable combat loop | HIGH | HIGH | P1 |
| Protagonist build depth | HIGH | HIGH | P1 |
| Companion automation | HIGH | HIGH | P1 |
| Save/resume | HIGH | MEDIUM | P1 |
| Reflection-based skill unlocks | MEDIUM | HIGH | P2 |
| Optional manual party control | MEDIUM | HIGH | P2 |
| Broad content library | MEDIUM | HIGH | P3 |

**Priority key:**
- P1: Must have for launch
- P2: Should have, add when possible
- P3: Nice to have, future consideration

## Competitor Feature Analysis

| Feature | Competitor A | Competitor B | Our Approach |
|---------|--------------|--------------|--------------|
| Party combat | Common in mobile RPGs | Common in mobile RPGs | Keep the party, but collapse companion micromanagement by default |
| Build depth | Often spread across many characters | Often tied to roster collection | Concentrate build depth in the protagonist first |
| Session pacing | Often elongated by grind loops | Often elongated by meta layers | Protect the 10-minute session target as a product rule |
| Auto/manual control | Often one-button auto-battle | Often full manual or full auto | Use tactical-role automation with optional manual expansion later |

## Sources

- Internal design source: `Estruturacao.md`
- Project context source: `.planning/PROJECT.md`
- Genre conventions inferred from the product direction and constraints documented above

## Open Questions To Carry Into Planning

- What is the tactical field model for the slice: grid, lanes, hex, fixed front/backline or another layout?
- What is the exact shape of the first mission slice: number of combats, rest/event nodes and boss structure?
- Does the MVP lock to 3 or 4 active skill slots?
- Which skill acquisition source is mandatory in the first playable slice, and which can stay stubbed?
- Is save/resume allowed only between nodes or also during an active combat?

---
*Feature research for: mobile turn-based RPG*
*Researched: 2026-03-27*
