# Architecture Research: Ascend

**Date:** 2026-04-03
**Context:** core-first implementation for media-agnostic mechanics validation

## Recommended architecture

Ascend should start as a modular monolith with hexagonal boundaries around a deterministic simulation kernel.

Primary flow:

`canonical content -> session orchestrator -> rules kernel -> domain events/projections -> adapter`

The first release should explicitly separate:

- pure rules logic
- declarative content
- presentation and input handling

## Component boundaries

### `content`

Defines canonical origins, trails, skills, items, enemies, scenes and starter adventure data.

Must not know:

- UI details
- mutable session state

### `content-validation`

Validates schemas, references, tiers, costs, targets and cross-catalog consistency.

Must not know:

- rendering or adapter concerns

### `rules-kernel`

Resolves tests, outcomes, damage, PE, conditions, movement, turns and scene clocks.

Must not know:

- CLI details
- future web/mobile adapters
- persistence implementation

### `effect-registry`

Hosts reusable primitives such as:

- deal damage
- apply condition
- move actor
- heal actor
- spend PE
- advance scene clocks

Must not become:

- a free-form scripting escape hatch too early

### `session-orchestrator`

Controls:

- turn flow
- scene transitions
- encounter setup
- reward application
- campaign consequence updates

Must not own:

- rendering
- core rules math

### `observability`

Records:

- commands
- RNG seeds
- modifiers
- domain events
- per-turn and per-scene metrics

This is required for replay and balance analysis.

### `projections`

Builds read models for:

- character sheets
- combat state views
- scene summaries
- playtest reports

Must not mutate canonical state.

### `adapters`

Translate user or system inputs into commands and render projections back out.

Cycle 1 adapter:

- CLI first

Future adapters:

- web
- mobile
- terminal UX variants

## Data flow

1. Load and validate canonical content catalogs.
2. Initialize a session with fixed seed, party, scene and initial campaign state.
3. Collect an intent from player, GM or system.
4. Validate the intent against current permissions and context.
5. Resolve the intent through the kernel using current state, content and deterministic RNG.
6. Emit structured domain events.
7. Apply state updates.
8. Rebuild projections and metrics.
9. Render the new view or produce a replay/report artifact.

Combat and non-combat scenes should use the same architecture. The command set changes, not the structural model.

## Suggested build order

1. Canonical domain models and stable IDs
2. Deterministic kernel foundations
3. Event log and replay support
4. Zone-based combat loop
5. Generic non-combat scene engine
6. Data-driven starter content
7. Session and campaign orchestration
8. Telemetry and balance reporting
9. Minimal CLI adapter

## Architectural risks

- coupling UI and rules forces mechanic rewrites when adapters change
- putting too much bespoke logic in content reduces auditability and replay clarity
- splitting combat and non-combat into unrelated engines breaks the project's core design promise
- skipping structured event logs weakens balancing and regression debugging
- over-automating the GM role inflates scope without solving the current risk

## Confidence

- High: separation of core, content and adapters
- High: deterministic event-oriented kernel
- High: observability as a first-class requirement
- Medium: how declarative complex skill behaviors can be in cycle 1
- Medium: how formal GM choices must be in non-combat orchestration

## Sources

- Project docs: `README.md`, `docs/00-visao-do-sistema.md`, `docs/01-nucleo-de-regras.md`, `docs/03-guia-do-mestre-e-campanha.md`, `docs/05-playtest.md`, `.planning/PROJECT.md`
