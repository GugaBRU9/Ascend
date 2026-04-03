# Requirements: Ascend

**Defined:** 2026-04-03
**Core Value:** As mecanicas centrais de Ascend precisam ser interessantes, legiveis e testaveis independentemente da midia em que forem apresentadas.

## v1 Requirements

### Engine

- [ ] **ENGN-01**: Designer can define canonical content in versioned data files and receive actionable validation errors when content is invalid.
- [ ] **ENGN-02**: System can resolve seeded tests using canonical modifiers, advantage/disadvantage and degrees of success.
- [ ] **ENGN-03**: System can apply canonical formulas for defenses, PE, fixed damage, resistances, vulnerabilities and condition effects.
- [ ] **ENGN-04**: Team can replay a seeded command/event sequence and reproduce the same mechanical outcome.

### Combat

- [ ] **COMB-01**: GM can run initiative and full round order for all actors in a combat scene.
- [ ] **COMB-02**: Player can use action, movement, reaction and pressure attack rules in zone-based combat.
- [ ] **COMB-03**: System can resolve canonical combat interactions including attacks, cover, movement, skill activation, condition application and downed recovery.
- [ ] **COMB-04**: GM can run common, elite and boss encounters using canonical enemy definitions.

### Scenes

- [ ] **SCEN-01**: GM can configure a non-combat scene with objective, risk, ND, progress target and pressure limit.
- [ ] **SCEN-02**: Player can resolve social, investigative and exploratory actions through the same core test engine used by the rest of the system.
- [ ] **SCEN-03**: System can advance `Progress x Pressure` and apply visible success or failure consequences to scene state.

### Characters

- [ ] **CHAR-01**: Player can create a level 1 character using canonical origins, attributes, trained skills, primary and secondary trails, starting abilities and initial equipment.
- [ ] **CHAR-02**: Team can load and run the documented level 1 pregens without manual rule patches.
- [ ] **CHAR-03**: System can derive Vida, PE, Defesa, Fortitude, Reflexos and Vontade from canonical formulas.
- [ ] **CHAR-04**: System enforces level 1 build rules including tier access, prepared active skill limits and starting load constraints.

### Content

- [ ] **CONT-01**: System can load canonical origins, trails, skills, equipment, enemies and starter adventure data from the content catalog.
- [ ] **CONT-02**: GM can prepare encounters using canonical `Valor de Ameaca` guidance and group-size inputs.
- [ ] **CONT-03**: System can carry lightweight consequences between scenes in the starter adventure so earlier choices affect later scenes.

### Playtest

- [ ] **PLYT-01**: Team can run the starter adventure end to end through a minimal playable adapter without depending on a final UI.
- [ ] **PLYT-02**: System records command logs, seeds and outcome events for debugging and replay.
- [ ] **PLYT-03**: Team can capture core playtest signals including turn duration, PE usage, skill frequency, dominant patterns and confusion points.
- [ ] **PLYT-04**: Team can generate a post-session report that helps decide whether cycle 1 validation criteria passed or failed.

## v2 Requirements

### Campaign

- **CAMP-01**: GM can run multi-session campaign progression with persistent faction, NPC and world-state consequences beyond the starter session.
- **CAMP-02**: Player can advance beyond the first validation band with broader progression, talents and trail depth.

### Delivery

- **DLVR-01**: Team can provide a richer interactive adapter beyond the minimal validation interface.
- **DLVR-02**: Team can expose projections or inspectors tailored to future web, mobile or terminal experiences.

### Systems Expansion

- **SYST-01**: Player can use deeper economy and crafting systems without breaking the validated core loop.
- **SYST-02**: GM can use optional companion or small-party support modules as structured add-ons.

## Out of Scope

| Feature | Reason |
|---------|--------|
| Polished consumer UI | Not needed to validate the mechanics-first hypothesis |
| Save system, codex, journal and lore archive | Product-layer concerns explicitly deferred by canonical docs |
| Companion AI and solo protagonist mode | Conflict with the current canonical group model and inflate scope |
| Mandatory node-map progression and exploration energy | Explicitly deferred until playtests prove the need |
| Deep economy, shops and advanced crafting | Secondary systems that do not reduce the main project risk right now |
| Large-scale content expansion before loop validation | More content would hide balance and clarity problems instead of solving them |

## Traceability

Which phases cover which requirements. Updated during roadmap creation.

| Requirement | Phase | Status |
|-------------|-------|--------|
| ENGN-01 | Phase 1 | Pending |
| ENGN-02 | Phase 1 | Pending |
| ENGN-03 | Phase 3 | Pending |
| ENGN-04 | Phase 1 | Pending |
| COMB-01 | Phase 3 | Pending |
| COMB-02 | Phase 3 | Pending |
| COMB-03 | Phase 3 | Pending |
| COMB-04 | Phase 3 | Pending |
| SCEN-01 | Phase 4 | Pending |
| SCEN-02 | Phase 4 | Pending |
| SCEN-03 | Phase 4 | Pending |
| CHAR-01 | Phase 2 | Pending |
| CHAR-02 | Phase 2 | Pending |
| CHAR-03 | Phase 2 | Pending |
| CHAR-04 | Phase 2 | Pending |
| CONT-01 | Phase 1 | Pending |
| CONT-02 | Phase 3 | Pending |
| CONT-03 | Phase 5 | Pending |
| PLYT-01 | Phase 5 | Pending |
| PLYT-02 | Phase 1 | Pending |
| PLYT-03 | Phase 5 | Pending |
| PLYT-04 | Phase 5 | Pending |

**Coverage:**
- v1 requirements: 22 total
- Mapped to phases: 22
- Unmapped: 0 ✓

---
*Requirements defined: 2026-04-03*
*Last updated: 2026-04-03 after roadmap creation*
