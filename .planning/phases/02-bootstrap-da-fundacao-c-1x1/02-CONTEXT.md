# Phase 2: Bootstrap da Fundacao C++ 1x1 - Context

**Gathered:** 2026-04-13
**Status:** Ready for planning

<domain>
## Phase Boundary

Esta phase entrega a fundacao compilavel do slice 1x1 em `C++20`, com `CMake`, `CTest`, sanitizers e separacao inicial entre `domain`, `content`, `session` e `adapters`. Ela nao implementa ainda o duelo completo, o catalogo final ou o harness textual completo; o foco e abrir o workspace e a baseline de validacao sem reabrir escopo.

</domain>

<decisions>
## Implementation Decisions

### Layout do Workspace
- **D-01:** O projeto comeca como um workspace CMake unico, com diretorios explicitos para `src/domain`, `src/content`, `src/session` e `src/adapters`.
- **D-02:** Mesmo dentro do projeto unico, cada modulo deve nascer com seu proprio target desde a `Phase 2`, evitando um target monolitico que esconda fronteiras cedo demais.
- **D-03:** Cada modulo usa organizacao com `include/` + `src/` desde o inicio, para deixar responsabilidades e API publica mais legiveis para um estudante.
- **D-04:** O adapter textual deve ter lugar reservado ja nesta phase, mesmo sem harness final concluido.

### Build e Diagnostico
- **D-05:** A baseline de presets deve ser simples e didatica: `dev`, `asan-ubsan` e `release`.
- **D-06:** `AddressSanitizer` e `UBSan` ficam combinados no mesmo preset de diagnostico, para reduzir complexidade operacional.
- **D-07:** O bootstrap usa warnings fortes, mas sem `-Werror`, para nao transformar aprendizado inicial em bloqueio excessivo.
- **D-08:** `clang-format` e `clang-tidy` entram ja preparados nesta phase, ainda de forma leve.

### Validacao Inicial
- **D-09:** A phase nao fecha apenas com wiring de `CTest`; ela deve incluir pelo menos um teste pequeno real para provar que o pipeline de validacao funciona.

### Dependencias
- **D-10:** O bootstrap segue postura `std`-first: nada de `Catch2`, `fmt` ou outras bibliotecas externas nesta phase, salvo se surgir dor concreta e justificada depois.

### the agent's Discretion
- Nomes exatos dos targets, desde que preservem a separacao entre `domain`, `content`, `session` e `adapters`.
- Nome final do preset de diagnostico, desde que comunique claramente o uso conjunto de `ASan` e `UBSan`.
- Escolha dos warning flags e da integracao inicial de `clang-tidy`, desde que mantenham o fluxo amigavel para estudo.

</decisions>

<canonical_refs>
## Canonical References

**Downstream agents MUST read these before planning or implementing.**

### Milestone ativo
- `.planning/PROJECT.md` — objetivo atual da `v1.1`, limites de escopo e postura educacional do slice.
- `.planning/REQUIREMENTS.md` — requisitos ativos `ARCH-05`, `ARCH-06` e `VAL-05`, alem do mapa completo da milestone.
- `.planning/ROADMAP.md` — goal, dependencias e criterios de sucesso da `Phase 2`.

### Fundacao tecnica
- `docs/engineering/backend-cpp-foundation.md` — baseline de stack, separacao modular, politica de dependencias e estrategia de validacao.
- `docs/roadmap/v1.1-slice-de-implementacao-1x1.md` — definicao do milestone implementavel, passos iniciais e criterio de sucesso.
- `docs/roadmap/phase-1-risk-register.md` — limites de escopo e riscos como `content/runtime mixing` e `premature overengineering`.

### Contratos que a fundacao precisa respeitar
- `docs/combat-1x1/combat-domain.md` — campos minimos de `CombatState` e invariantes que a fundacao deve conseguir sustentar.
- `docs/combat-1x1/turn-resolution.md` — regra de iniciativa e invariantes de resolucao que influenciam a separacao entre `domain` e `session`.
- `docs/combat-1x1/observability.md` — baseline de log textual e eventos que a arquitetura precisa acomodar.
- `docs/combat-1x1/attributes-and-skills.md` — contrato do catalogo inicial que justifica a separacao entre `content` e runtime.

</canonical_refs>

<code_context>
## Existing Code Insights

### Reusable Assets
- Nenhum asset de codigo reutilizavel encontrado: o repositorio ainda nao tem workspace C++ ativo, `CMakeLists.txt` ou fontes `.cpp/.hpp` desta milestone.

### Established Patterns
- O repositorio hoje estabelece contratos principalmente por documentacao publica (`README.md`, `docs/`) e artefatos de planning.
- A arquitetura conceitual ja esta fixada em `domain`, `content`, `session` e `adapters`; a `Phase 2` deve materializar essa separacao no filesystem e no build.
- A postura do projeto continua `std`-first, core-first e media-agnostic.

### Integration Points
- A raiz do repositorio vai receber o bootstrap de build (`CMakeLists.txt`, presets e configuracoes auxiliares).
- A `Phase 2` deve criar a espinha dorsal consumida pelas `Phases 3-5`, que depois materializam `CombatState`, `TurnResolver`, harness textual e testes do slice.

</code_context>

<specifics>
## Specific Ideas

- O usuario explicitou que ainda esta aprendendo e prefere uma base simples, legivel e progressiva.
- As decisoes desta phase devem reduzir carga cognitiva: poucos presets, poucas dependencias e separacao estrutural clara desde o inicio.

</specifics>

<deferred>
## Deferred Ideas

None — discussion stayed within phase scope.

</deferred>

---

*Phase: 02-bootstrap-da-fundacao-c-1x1*
*Context gathered: 2026-04-13*
