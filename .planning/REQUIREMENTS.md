# Requirements: Ascend

**Defined:** 2026-04-05
**Core Value:** O nucleo de regras precisa ser compreensivel, testavel e adaptavel como classes, metodos e contratos C++ independentes de plataforma.

## v1 Requirements

### Core Types

- [ ] **CORE-01**: Developer can build the initial `domain` modules with explicit IDs and value objects for attributes, resource pools, effects/status, characters, enemies, and combat-relevant types without platform dependencies.
- [ ] **CORE-02**: Developer can observe invalid domain construction as explicit validation failures instead of silent defaults.
- [ ] **CORE-03**: Student can verify the main invariants of the base types through unit tests that run without CLI, parser, or product adapters.
- [ ] **CORE-04**: Developer can distinguish `Definition` from `State` in the initial C++ modules and data contracts.

### Deterministic Rules

- [ ] **RULE-01**: Developer can execute deterministic resolution for cost, damage, and effect application or expiration and get the same outputs from the same inputs.
- [ ] **RULE-02**: Student can inspect structured events and replay/log artifacts that explain `input -> resolution -> output` for the initial rules.
- [ ] **RULE-03**: Developer can diagnose invalid rule execution through explicit validation or domain errors.
- [ ] **RULE-04**: Scenario tests can cover the minimal rule flow for cost, damage, and effects without depending on a final UI.

### Content and Character Creation

- [ ] **CONT-01**: Author can define the initial starter content in simple versioned `JSON` files stored in the repository.
- [ ] **CONT-02**: Developer can load the minimal catalog through a dedicated content loader separated from runtime rules and receive explicit validation failures for malformed definitions.
- [ ] **CONT-03**: Student can build a valid protagonist through `CharacterCreation` from catalog definitions without coupling authoring code to runtime state.
- [ ] **CONT-04**: Developer can keep the starter content intentionally small: one protagonist template, a few skills and effects, and a small enemy set.

### Study CLI and Minimal Combat

- [ ] **FLOW-01**: Student can use a structured CLI to inspect catalog content, create a character, start a minimal encounter, and execute controlled actions.
- [ ] **FLOW-02**: Developer can run a minimal protagonist-versus-enemies combat flow and inspect the resulting state, logs, and replay artifacts.
- [ ] **FLOW-03**: End-to-end smoke or scenario tests can validate the path `tipos -> regras -> criacao de personagem -> combate minimo`.
- [ ] **FLOW-04**: The CLI remains a study and inspection tool rather than a final game shell.

## v2 Requirements

### Expansion

- **EXPN-01**: Team can add `party`, companions, or tactical AI after the minimal combat loop is stable.
- **EXPN-02**: Team can replace the initial `JSON` catalog and loader with a richer authoring pipeline without rewriting the core rules.
- **EXPN-03**: Team can add real randomness with explicit `seed` input once replay and log contracts are stable.
- **EXPN-04**: Team can add save systems, networking, persistence, or platform adapters after the core path is validated.

## Out of Scope

| Feature | Reason |
|---------|--------|
| `party`, companions, or tactical AI in this milestone | The current goal is to validate protagonist-only deterministic combat first |
| UI, rendering, audio, engine integration, or product shell | These are platform concerns and would distort the core-first implementation path |
| Definitive parser, DSL, or sophisticated authoring pipeline | The milestone only needs a minimal catalog and loader to validate the domain flow |
| Broad content volume or deep balancing | The starter package must stay small enough to validate architecture rather than content scale |
| Real randomness before replay contracts stabilize | Reproducibility must remain explicit and debuggable |

## Traceability

Which phases cover which requirements. Updated during roadmap creation.

| Requirement | Phase | Status |
|-------------|-------|--------|
| CORE-01 | - | Pending |
| CORE-02 | - | Pending |
| CORE-03 | - | Pending |
| CORE-04 | - | Pending |
| RULE-01 | - | Pending |
| RULE-02 | - | Pending |
| RULE-03 | - | Pending |
| RULE-04 | - | Pending |
| CONT-01 | - | Pending |
| CONT-02 | - | Pending |
| CONT-03 | - | Pending |
| CONT-04 | - | Pending |
| FLOW-01 | - | Pending |
| FLOW-02 | - | Pending |
| FLOW-03 | - | Pending |
| FLOW-04 | - | Pending |

**Coverage:**
- v1 requirements: 16 total
- Mapped to phases: 0
- Unmapped: 16

---
*Requirements defined: 2026-04-05*
*Last updated: 2026-04-05 after initializing v1.1 Core Foundation*
