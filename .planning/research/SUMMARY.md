# Research Summary: Ascend

**Date:** 2026-04-03

## Core recommendation

Ascend should begin as a mechanics-validation prototype, not a consumer-facing product shell.

Recommended direction:

- TypeScript monorepo
- deterministic rules kernel
- canonical content validated by schema
- event log plus seed-based replay
- minimal CLI adapter for play and debugging

The correct order is:

1. model canonical domain and content
2. execute rules reproducibly
3. prove combat and non-combat loops on the same engine
4. add telemetry and ergonomics
5. only then consider richer adapters

## v1 must-haves

- faithful execution of the canonical rules
- playable tactical combat loop
- real `Progress x Pressure` scene loop
- support for level 1 pregens and level 1 character creation
- loadable starter content package
- end-to-end starter session support
- repeatable playtest instrumentation

Explicitly outside v1:

- polished UI
- save and journal systems
- deep economy and crafting
- companion AI
- broad content expansion

## Architectural shape

Recommended structure:

- `content`
- `content-validation`
- `rules-kernel`
- `effect-registry`
- `session-orchestrator`
- `observability`
- `projections`
- `adapter`

Primary flow:

`canonical content -> session orchestrator -> rules kernel -> events/projections -> adapter`

Combat and non-combat should share the same backbone. The command vocabulary changes, not the architecture.

## Biggest risks to avoid

- coupling rules to the delivery medium
- inflating scope before the loop is proven
- validating only combat
- relying on the GM to patch rule gaps
- balancing by intuition instead of evidence
- letting deterministic combat become repetitive and solved

## Roadmap implications

1. Foundation of domain, content validation, RNG, replay and logs
2. Tactical combat loop
3. Unified non-combat scene loop
4. End-to-end starter session with starter content
5. Telemetry and playtest-driven iteration

## Sources

- `.planning/research/STACK.md`
- `.planning/research/FEATURES.md`
- `.planning/research/ARCHITECTURE.md`
- `.planning/research/PITFALLS.md`
- `.planning/PROJECT.md`
