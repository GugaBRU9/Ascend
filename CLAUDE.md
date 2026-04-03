<!-- GSD:project-start source:PROJECT.md -->
## Project

**Ascend**

Ascend e um projeto para implementar um RPG tatico com base agnostica de midia, validado primeiro pelas mecanicas e pela experiencia de mesa. O ciclo atual nao busca um produto final de web, app, mobile ou terminal; ele busca transformar a documentacao canonica em um nucleo implementavel, testavel e pronto para playtest de mecanicas.

O produto inicial deve priorizar um core de regras fiel aos documentos canonicos, com suporte a prototipagem jogavel e verificacao rapida de balanceamento antes de qualquer investimento pesado em interface final.

**Core Value:** As mecanicas centrais de Ascend precisam ser interessantes, legiveis e testaveis independentemente da midia em que forem apresentadas.

### Constraints

- **Produto**: Validacao de mecanicas primeiro — o projeto deve provar o loop base antes de considerar adaptacao para uma midia final.
- **Canon**: `docs/` e a fonte de verdade — a implementacao deve seguir a documentacao canonica, nao o arquivo legado.
- **Arquitetura**: Base agnostica de midia — regras, dados e validacao nao podem depender de UI especifica.
- **Escopo**: Ciclo 1 enxuto — foco em regras, conteudo inicial, encontro, progressao curta e playtest.
- **Qualidade**: Regras precisam ser verificaveis — o projeto precisa permitir testes automatizados e validacao manual estruturada.
<!-- GSD:project-end -->

<!-- GSD:stack-start source:research/STACK.md -->
## Technology Stack

## Recommendation
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
## Why this fits Ascend
- The canonical docs define a rules engine first, not a visual product shell.
- The system needs one rules spine for combat, exploration, investigation and social scenes.
- Deterministic damage, explicit costs and zone-based combat benefit from automated tests and replayable simulations.
- Data-driven content keeps iteration fast while preserving media agnosticism.
- A CLI is enough to validate mechanics without locking the project into a UI stack too early.
## Alternatives considered
### `node:test`
- multi-project test organization
- snapshots for event logs
- better TypeScript ergonomics
- easier bench/regression workflow
### `boardgame.io`
- solves multiplayer/session infrastructure more than rules validation
- introduces abstractions that do not reduce the current project risk
### `Rust core + JS adapters`
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
<!-- GSD:stack-end -->

<!-- GSD:conventions-start source:CONVENTIONS.md -->
## Conventions

Conventions not yet established. Will populate as patterns emerge during development.
<!-- GSD:conventions-end -->

<!-- GSD:architecture-start source:ARCHITECTURE.md -->
## Architecture

Architecture not yet mapped. Follow existing patterns found in the codebase.
<!-- GSD:architecture-end -->

<!-- GSD:workflow-start source:GSD defaults -->
## GSD Workflow Enforcement

Before using Edit, Write, or other file-changing tools, start work through a GSD command so planning artifacts and execution context stay in sync.

Use these entry points:
- `/gsd:quick` for small fixes, doc updates, and ad-hoc tasks
- `/gsd:debug` for investigation and bug fixing
- `/gsd:execute-phase` for planned phase work

Do not make direct repo edits outside a GSD workflow unless the user explicitly asks to bypass it.
<!-- GSD:workflow-end -->



<!-- GSD:profile-start -->
## Developer Profile

> Profile not yet configured. Run `/gsd:profile-user` to generate your developer profile.
> This section is managed by `generate-claude-profile` -- do not edit manually.
<!-- GSD:profile-end -->
