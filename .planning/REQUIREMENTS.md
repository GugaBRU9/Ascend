# Requirements: Ascend

**Defined:** 2026-03-27
**Core Value:** Entregar combate por turnos legivel e profundo no mobile, com build rica e frame-time estavel mesmo em hardware antigo.

## v1 Requirements

Requirements for the initial vertical slice release. Each maps to exactly one roadmap phase.

### Technical Foundation

- [x] **TECH-01**: Project can produce a development build that boots on the chosen low-end benchmark mobile device into the playable slice.
- [ ] **TECH-02**: Combat, progression and content definitions are authored through reusable data assets instead of scene-only values.
- [ ] **TECH-03**: Team can capture CPU, memory and rendering baselines on device for every slice milestone build.

### Combat Loop

- [ ] **COMB-01**: Turn order is based on speed and clearly displayed to the player.
- [ ] **COMB-02**: Combat resolves in the sequence protagonist -> allies -> enemies -> end-of-turn effects.
- [ ] **COMB-03**: Actions consume and regenerate energy/effort in a way that enables combos without constant skill spam.

### Party Automation

- [ ] **PART-01**: Player controls one customizable protagonist and brings four companions into battle.
- [ ] **PART-02**: Player can assign a tactical role to each companion before battle.
- [ ] **PART-03**: Companions prioritize the protagonist's focused target and fall back predictably when it is unavailable.

### Progression

- [ ] **PROG-01**: Leveling the protagonist grants +3 distributable attribute points across the six core attributes.
- [ ] **PROG-02**: Equipment, level and attribute choices immediately update derived combat stats.

### Skills

- [ ] **SKIL-01**: Player can build the protagonist across multiple skill tracks at the same time.
- [ ] **SKIL-02**: Combat limits equipped active skills to a small slot set while unlocked passives stay active automatically.
- [ ] **SKIL-03**: Skill acquisition supports exploration, NPC rewards and reflection rules, with at least two of these paths exercised in the first slice.

### Tactical Systems

- [ ] **SYST-01**: Buffs, debuffs and crowd-control effects apply, refresh duration on reapplication and obey defined stacking rules.
- [ ] **SYST-02**: Supported cleanse actions remove the correct effect groups without breaking status state.
- [ ] **SYST-03**: The damage system is authored around the 11 defined damage types, while the first slice exercises only the subset needed for its encounters.

### Session Flow

- [ ] **SESS-01**: Player can complete a short encounter sequence that fits the intended ~10 minute session target.
- [ ] **SESS-02**: Player can save and resume progress safely at defined checkpoints in the slice.

### Mobile UX

- [ ] **UX-01**: Combat and build UI remain readable on phone screens with shallow, touch-first flows.
- [ ] **UX-02**: The playable slice runs responsively on the chosen low-end mobile device profile without noticeable hitching during normal combat.

## v2 Requirements

Deferred until the vertical slice proves the combat/build loop.

### Party Expansion

- **PART-04**: Player can switch to full manual control of all party members during battle.

### World and Content

- **WRLD-01**: Player can explore a broader world with richer ruins, dungeons, puzzles and NPC hubs.
- **WRLD-02**: The game offers a materially larger catalog of encounters, bosses, archetypes and skill content than the validation slice.

### Product Expansion

- **META-01**: Player has access to broader meta progression, economy and campaign systems.
- **PLAT-01**: Player can use cloud-linked or online-dependent features across sessions and devices.

## Out of Scope

Explicitly excluded from the first roadmap to prevent scope creep.

| Feature | Reason |
|---------|--------|
| Multiplayer / PvP / guild systems | Not required to validate the combat + build core value |
| Live ops, gacha or monetization loops | Add major product complexity before the core loop is proven |
| Full build management for all companions | Conflicts with the low-friction party concept and mobile UI simplicity |
| Heavy visual fidelity requirements (expensive post-process, dense VFX, shader-heavy scenes) | Directly conflicts with the low-end mobile performance target |
| Broad campaign breadth and long-form narrative content | Too large for the first validation slice |

## Traceability

Which phases cover which requirements. Updated during roadmap creation.

| Requirement | Phase | Status |
|-------------|-------|--------|
| TECH-01 | Phase 1 | Complete |
| TECH-02 | Phase 1 | Pending |
| TECH-03 | Phase 1 | Pending |
| COMB-01 | Phase 2 | Pending |
| COMB-02 | Phase 2 | Pending |
| COMB-03 | Phase 2 | Pending |
| PART-01 | Phase 3 | Pending |
| PART-02 | Phase 3 | Pending |
| PART-03 | Phase 3 | Pending |
| PROG-01 | Phase 4 | Pending |
| PROG-02 | Phase 4 | Pending |
| SKIL-01 | Phase 5 | Pending |
| SKIL-02 | Phase 5 | Pending |
| SKIL-03 | Phase 5 | Pending |
| SYST-01 | Phase 6 | Pending |
| SYST-02 | Phase 6 | Pending |
| SYST-03 | Phase 6 | Pending |
| SESS-01 | Phase 7 | Pending |
| SESS-02 | Phase 7 | Pending |
| UX-01 | Phase 7 | Pending |
| UX-02 | Phase 8 | Pending |

**Coverage:**
- v1 requirements: 21 total
- Mapped to phases: 21
- Unmapped: 0

---
*Requirements defined: 2026-03-27*
*Last updated: 2026-03-27 after initial definition*
