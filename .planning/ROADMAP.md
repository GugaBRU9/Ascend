# Roadmap: Ascend

## Overview

This roadmap treats v1 as a validation slice for Ascend's core promise: deep but readable turn-based combat on mobile, with a heavily customizable protagonist, low-friction companions and strong low-end performance. The journey deliberately builds the slice from the inside out: technical guardrails first, then combat rules, then party/build systems, then mobile session flow, and only then final hardening on a real benchmark device.

## Phases

**Phase Numbering:**
- Integer phases (1, 2, 3): Planned milestone work
- Decimal phases (2.1, 2.2): Urgent insertions (marked with INSERTED)

Decimal phases appear between their surrounding integers in numeric order.

- [ ] **Phase 1: Foundation and Guardrails** - Stabilize the Unity baseline, data boundaries and mobile performance/test guardrails.
- [ ] **Phase 2: Combat Core** - Build the deterministic turn flow, action resolution and energy pacing.
- [ ] **Phase 3: Party Roles and AI** - Add the protagonist + four companions structure and reliable tactical automation.
- [ ] **Phase 4: Progression and Derived Stats** - Implement leveling, six attributes, equipment and stat propagation.
- [ ] **Phase 5: Skills and Acquisition Hooks** - Add multi-track skills, loadouts and initial acquisition paths.
- [ ] **Phase 6: Tactical Systems Matrix** - Implement statuses, cleanse rules and the damage/resistance matrix.
- [ ] **Phase 7: Mobile UX and Session Flow** - Wrap the systems in a short mobile session with readable UI and save/resume.
- [ ] **Phase 8: Vertical Slice Hardening** - Validate performance, balance and regression quality on the benchmark device.

## Phase Details

### Phase 1: Foundation and Guardrails
**Goal**: Establish a clean Unity baseline, benchmark-device target, data backbone and profiling/test guardrails for the mobile slice.
**Depends on**: Nothing (first phase)
**Requirements**: [TECH-01, TECH-02, TECH-03]
**Canonical refs**: [Estruturacao.md, .planning/PROJECT.md, .planning/REQUIREMENTS.md, .planning/research/SUMMARY.md, Unity/ProjectSettings/ProjectVersion.txt, Unity/Packages/manifest.json]
**UI hint**: yes
**Success Criteria** (what must be TRUE):
  1. A development build boots into a stable shell on the chosen benchmark device.
  2. Combat, progression and content data are authored outside scene-only values and load into runtime systems cleanly.
  3. The team can capture on-device CPU, memory and rendering baselines for the slice.
  4. Blocking Q&A topics are explicit before hot-path code spreads.
**Plans**: 3 plans

Plans:
- [x] 01-01: Normalize Unity baseline, packages and benchmark-device assumptions
- [ ] 01-02: Create runtime architecture, assemblies and authored-data catalog
- [ ] 01-03: Add profiling, test and Q&A guardrails

### Phase 2: Combat Core
**Goal**: Implement deterministic turn flow, turn ordering, action resolution and energy pacing for the battle loop.
**Depends on**: Phase 1
**Requirements**: [COMB-01, COMB-02, COMB-03]
**Canonical refs**: [Estruturacao.md, .planning/REQUIREMENTS.md, .planning/research/ARCHITECTURE.md, .planning/research/PITFALLS.md]
**UI hint**: yes
**Success Criteria** (what must be TRUE):
  1. Speed determines turn order and the player can read that order during combat.
  2. Battle resolution follows protagonist -> allies -> enemies -> end-of-turn effects without hidden ordering bugs.
  3. Energy/effort costs and regeneration shape decisions without enabling degenerate skill spam.
  4. Core combat rules can be exercised by automated tests outside scene dependencies.
**Plans**: 3 plans

Plans:
- [ ] 02-01: Build the battle state machine and speed-based turn queue
- [ ] 02-02: Implement action resolution, energy flow and combat events
- [ ] 02-03: Connect combat feedback hooks and rule-level tests

### Phase 3: Party Roles and AI
**Goal**: Add the protagonist + four companions structure, pre-battle role selection and reliable ally automation.
**Depends on**: Phase 2
**Requirements**: [PART-01, PART-02, PART-03]
**Canonical refs**: [Estruturacao.md, .planning/REQUIREMENTS.md, .planning/research/FEATURES.md, .planning/research/PITFALLS.md]
**UI hint**: yes
**Success Criteria** (what must be TRUE):
  1. Battles support one player-controlled protagonist and four companions.
  2. The player can assign tactical roles before battle using a mobile-friendly flow.
  3. Companion AI follows focus-target and fallback rules predictably.
  4. Ally decisions are inspectable enough to debug and tune.
**Plans**: 3 plans

Plans:
- [ ] 03-01: Add party composition state and companion archetype definitions
- [ ] 03-02: Implement tactical role selection and target-priority rules
- [ ] 03-03: Build ally AI policies, traces and combat integration tests

### Phase 4: Progression and Derived Stats
**Goal**: Implement protagonist leveling, six attributes, equipment and the propagation of derived combat stats.
**Depends on**: Phase 3
**Requirements**: [PROG-01, PROG-02]
**Canonical refs**: [Estruturacao.md, .planning/REQUIREMENTS.md, .planning/research/ARCHITECTURE.md]
**UI hint**: yes
**Success Criteria** (what must be TRUE):
  1. Leveling grants +3 distributable attribute points across the six core attributes.
  2. Equipment, level and attribute changes update derived combat values immediately.
  3. Progression state persists cleanly into the active slice flow.
**Plans**: 3 plans

Plans:
- [ ] 04-01: Implement attribute, level and derived-stat rules
- [ ] 04-02: Add equipment application and stat recalculation flow
- [ ] 04-03: Wire progression state into persistence and combat entry points

### Phase 5: Skills and Acquisition Hooks
**Goal**: Add multi-track skill builds, active/passive loadouts and the first working acquisition paths.
**Depends on**: Phase 4
**Requirements**: [SKIL-01, SKIL-02, SKIL-03]
**Canonical refs**: [Estruturacao.md, .planning/REQUIREMENTS.md, .planning/research/FEATURES.md, .planning/research/SUMMARY.md]
**UI hint**: yes
**Success Criteria** (what must be TRUE):
  1. The protagonist can invest in multiple skill tracks at the same time.
  2. Combat enforces a small active slot set while passives remain always-on.
  3. The slice exercises at least two skill acquisition paths from the designed system.
  4. Unlock rules are explicit enough to test and tune.
**Plans**: 3 plans

Plans:
- [ ] 05-01: Add skill tracks, loadout rules and slot enforcement
- [ ] 05-02: Integrate skills into combat resolution and progression
- [ ] 05-03: Implement the first acquisition hooks and unlock validation

### Phase 6: Tactical Systems Matrix
**Goal**: Implement statuses, cleanse behavior and the authored damage/resistance model for the first slice.
**Depends on**: Phase 5
**Requirements**: [SYST-01, SYST-02, SYST-03]
**Canonical refs**: [Estruturacao.md, .planning/REQUIREMENTS.md, .planning/research/SUMMARY.md]
**UI hint**: yes
**Success Criteria** (what must be TRUE):
  1. Buffs, debuffs and crowd-control effects apply, refresh and respect stacking rules.
  2. Cleanse behavior removes the right effect groups without corrupting runtime state.
  3. The slice exercises a curated subset of damage types, resistances and vulnerabilities from the authored 11-type model.
  4. Combat feedback exposes the tactical impact of statuses and resistances clearly enough to tune.
**Plans**: 3 plans

Plans:
- [ ] 06-01: Implement status lifecycle, refresh and stacking rules
- [ ] 06-02: Add cleanse handling and effect-group validation
- [ ] 06-03: Build the damage-type, resistance and vulnerability matrix for slice encounters

### Phase 7: Mobile UX and Session Flow
**Goal**: Wrap the combat/build systems in a short mobile session with readable UI, checkpoints and resume flow.
**Depends on**: Phase 6
**Requirements**: [SESS-01, SESS-02, UX-01]
**Canonical refs**: [Estruturacao.md, .planning/REQUIREMENTS.md, .planning/research/FEATURES.md, .planning/research/PITFALLS.md]
**UI hint**: yes
**Success Criteria** (what must be TRUE):
  1. The player can complete a short encounter sequence that fits the intended session length.
  2. Save/resume works safely at the chosen checkpoints in the slice.
  3. Combat and build screens are readable on phone screens with shallow touch-first flows.
  4. A first-time player reaches the first meaningful combat/build decision quickly.
**Plans**: 3 plans

Plans:
- [ ] 07-01: Implement slice shell, checkpoint and resume flow
- [ ] 07-02: Build the combat/build UI pass for phone readability
- [ ] 07-03: Assemble the short-session content path and lightweight onboarding

### Phase 8: Vertical Slice Hardening
**Goal**: Validate the integrated slice for performance, balance and regression quality on the chosen low-end device profile.
**Depends on**: Phase 7
**Requirements**: [UX-02]
**Canonical refs**: [.planning/PROJECT.md, .planning/REQUIREMENTS.md, .planning/research/SUMMARY.md, .planning/research/PITFALLS.md]
**UI hint**: yes
**Success Criteria** (what must be TRUE):
  1. The full slice runs responsively on the benchmark device without noticeable hitching during normal combat.
  2. CPU, memory and rendering budgets are recorded and compared against the baseline.
  3. Critical combat, AI and save/resume regression paths are covered by automated checks or repeatable smoke tests.
  4. Deferred scope remains outside the MVP exit criteria.
**Plans**: 3 plans

Plans:
- [ ] 08-01: Integrate and tune the end-to-end slice
- [ ] 08-02: Run device profiling passes and remove major hotspots
- [ ] 08-03: Lock balance, regression checks and MVP exit criteria

## Progress

**Execution Order:**
Phases execute in numeric order: 1 -> 2 -> 2.1 -> 2.2 -> 3 -> 3.1 -> 4

| Phase | Plans Complete | Status | Completed |
|-------|----------------|--------|-----------|
| 1. Foundation and Guardrails | 1/3 | In Progress | - |
| 2. Combat Core | 0/3 | Not started | - |
| 3. Party Roles and AI | 0/3 | Not started | - |
| 4. Progression and Derived Stats | 0/3 | Not started | - |
| 5. Skills and Acquisition Hooks | 0/3 | Not started | - |
| 6. Tactical Systems Matrix | 0/3 | Not started | - |
| 7. Mobile UX and Session Flow | 0/3 | Not started | - |
| 8. Vertical Slice Hardening | 0/3 | Not started | - |
