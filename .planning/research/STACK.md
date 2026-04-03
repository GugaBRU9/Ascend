# Stack Research: Ascend

**Date:** 2026-04-03
**Context:** greenfield, mechanics-validation-first, media-agnostic core

## Recommendation

Use a TypeScript monorepo optimized for deterministic simulation and content iteration:

- `Node.js 24 LTS`
- `TypeScript 5.9` in strict mode
- `pnpm` workspaces with TypeScript project references
- `Zod 4` for schema validation at the content boundary
- `Vitest 4` for unit, integration and regression tests
- `fast-check` for property-based tests
- `pure-rand` or equivalent seedable PRNG
- minimal `CLI` surface first, using `Commander`
- `tsx` for local script execution

## Recommended workspace shape

```text
packages/
  core/      # deterministic rules engine, domain state, commands, events, RNG
  content/   # schemas, loaders, normalization, canonical catalogs
  sim/       # encounter runner, golden logs, batch simulation, balance tooling
apps/
  cli/       # minimal playable shell for local interaction and debugging
```

## Why this fits Ascend

- The canonical docs define a rules engine first, not a visual product shell.
- The system needs one rules spine for combat, exploration, investigation and social scenes.
- Deterministic damage, explicit costs and zone-based combat benefit from automated tests and replayable simulations.
- Data-driven content keeps iteration fast while preserving media agnosticism.
- A CLI is enough to validate mechanics without locking the project into a UI stack too early.

## Alternatives considered

### `node:test`

Viable, but weaker fit than `Vitest` for this project because Ascend benefits from:

- multi-project test organization
- snapshots for event logs
- better TypeScript ergonomics
- easier bench/regression workflow

### `boardgame.io`

Rejected for cycle 1.

Reason:

- solves multiplayer/session infrastructure more than rules validation
- introduces abstractions that do not reduce the current project risk

### `Rust core + JS adapters`

Technically valid, but premature.

Reason:

- higher integration cost
- slower content iteration
- no current evidence that performance is the bottleneck

## What to avoid early

- Unity, Godot, Phaser or rich web UI as the first implementation target
- ECS before concrete composition/performance pain exists
- database or CMS-backed content management
- a custom rules DSL before the shape of the core is stable
- networking, multiplayer sync or persistent service architecture
- TUI/React terminal frameworks before a plain CLI proves insufficient

## Open questions

- Will content be edited mostly by developers or by designers/writers too
- Should the first adapter be only CLI + automated harness, or CLI + interactive session runner
- How much scripted scenario behavior belongs in data versus code handlers

## Confidence

- High: runtime, typing, testing, seedable simulation, package separation
- Medium: YAML vs JSONC for authored content
- Medium: how interactive the first adapter should be

## Sources

- Project docs: `README.md`, `docs/00-visao-do-sistema.md`, `docs/01-nucleo-de-regras.md`, `docs/02-personagens-e-progressao.md`, `.planning/PROJECT.md`
- Node.js releases: `https://nodejs.org/en/about/previous-releases`
- TypeScript 5.9 notes: `https://www.typescriptlang.org/docs/handbook/release-notes/typescript-5-9.html`
- Project references: `https://www.typescriptlang.org/docs/handbook/project-references`
- pnpm workspaces: `https://pnpm.io/workspaces`
- Zod: `https://zod.dev/`
- Vitest: `https://vitest.dev/guide/features`
- fast-check: `https://fast-check.dev/docs/introduction/why-property-based/`
- Commander: `https://github.com/tj/commander.js`
- tsx: `https://tsx.is/`
