---
phase: 02-bootstrap-da-fundacao-c-1x1
plan: 02
subsystem: infra
tags: [cmake, modules, domain, content, session, adapters]
requires: [02-01]
provides:
  - quatro targets C++ separados para domain, content, session e adapters
  - headers publicos sob include/ascend/*
  - direcao de dependencias visivel no CMake
affects: [02-03, 03-01, 03-02, architecture]
tech-stack:
  added: []
  patterns: [module-per-target, public-header-layout, one-way-linking]
key-files:
  created: [src/domain/CMakeLists.txt, src/domain/include/ascend/domain/module_name.hpp, src/domain/src/module_name.cpp, src/content/CMakeLists.txt, src/content/include/ascend/content/module_name.hpp, src/content/src/module_name.cpp, src/session/CMakeLists.txt, src/session/include/ascend/session/module_name.hpp, src/session/src/module_name.cpp, src/adapters/CMakeLists.txt, src/adapters/include/ascend/adapters/text_adapter_name.hpp, src/adapters/src/text_adapter_name.cpp, .planning/phases/02-bootstrap-da-fundacao-c-1x1/02-02-SUMMARY.md]
  modified: [.planning/STATE.md, .planning/ROADMAP.md, .planning/REQUIREMENTS.md]
key-decisions:
  - "Cada modulo nasce como target proprio, sem biblioteca unica provisoria."
  - "Os placeholders expostos por string_view provam a estrutura sem antecipar CombatState ou catalogo real."
  - "Session depende de domain/content e adapters depende de session, sem links reversos."
patterns-established:
  - "Headers publicos ficam em include/ascend/<modulo>/ e a implementacao correspondente em src/."
  - "A direcao das dependencias do slice fica expressa no CMake antes de a logica de combate existir."
requirements-completed: [ARCH-06]
duration: 2min
completed: 2026-04-13
---

# Phase 02 Plan 02: Estruturar modulos `domain`, `content`, `session` e `adapters` Summary

**Quatro modulos C++ separados em domain/content/session/adapters com headers publicos e direcao de dependencias visivel no CMake**

## Performance

- **Duration:** 2 min
- **Started:** 2026-04-13T12:23:03Z
- **Completed:** 2026-04-13T12:25:32Z
- **Tasks:** 2
- **Files modified:** 16

## Accomplishments

- Materializou a estrutura de filesystem discutida para `domain`, `content`, `session` e `adapters`, com um target por modulo.
- Criou headers publicos navegaveis sob `include/ascend/...` e translation units reais para todos os quatro modulos.
- Tornou a arquitetura visivel no build: `session` consome `domain` e `content`, enquanto `adapters` reserva a borda textual sobre `session`.

## Task Commits

Each task was committed atomically:

1. **Task 1: Criar modulos domain e content com API publica minima** - `5b1ec7b` (feat)
2. **Task 2: Criar modulos session e adapters com direcao de dependencias explicita** - `227ae15` (feat)

## Files Created/Modified

- `src/domain/CMakeLists.txt` - declara o target `ascend_domain` e seu include path publico.
- `src/domain/include/ascend/domain/module_name.hpp` - expoe a API minima do modulo `domain`.
- `src/domain/src/module_name.cpp` - entrega o translation unit real que retorna `domain`.
- `src/content/CMakeLists.txt` - declara o target `ascend_content`.
- `src/content/include/ascend/content/module_name.hpp` - expoe a API minima do modulo `content`.
- `src/content/src/module_name.cpp` - entrega o translation unit real que retorna `content`.
- `src/session/CMakeLists.txt` - declara o target `ascend_session` com dependencias explicitas de `domain` e `content`.
- `src/session/include/ascend/session/module_name.hpp` - expoe a API minima do modulo `session`.
- `src/session/src/module_name.cpp` - entrega o translation unit real que retorna `session`.
- `src/adapters/CMakeLists.txt` - declara o target `ascend_adapters` dependente de `session`.
- `src/adapters/include/ascend/adapters/text_adapter_name.hpp` - reserva a borda textual do slice.
- `src/adapters/src/text_adapter_name.cpp` - entrega o translation unit real que retorna `text-adapter`.
- `.planning/phases/02-bootstrap-da-fundacao-c-1x1/02-02-SUMMARY.md` - registra a execucao e a validacao deste plano.
- `.planning/STATE.md` - acompanha o avanco do plano dentro da phase.
- `.planning/ROADMAP.md` - marca o progresso do plano 02-02.
- `.planning/REQUIREMENTS.md` - registra `ARCH-06` como atendido por este plano.

## Decisions Made

- A separacao em quatro targets foi mantida desde o primeiro codigo compilavel para evitar uma refatoracao estrutural logo na phase seguinte.
- Os simbolos publicos ficaram propositalmente minimos, usando `std::string_view`, para provar o contrato do modulo sem criar logica de combate prematura.
- O adapter textual foi reservado agora, mas sem puxar regras de dominio para fora do core.

## Deviations from Plan

### Auto-fixed Issues

**1. [Rule 1 - Bug] Normalizada a forma das link lines para bater com o contrato de verificacao**
- **Found during:** Finalizacao do plano 02-02
- **Issue:** As verificacoes planejadas usavam `rg` para procurar as chamadas de `target_link_libraries(...)` em linha unica, mas os arquivos CMake haviam sido escritos em formato multiline.
- **Fix:** Reescrevi as declaracoes de link de `ascend_domain`, `ascend_content`, `ascend_session` e `ascend_adapters` em linha unica, sem alterar a arquitetura nem a semantica da linkagem.
- **Files modified:** `src/domain/CMakeLists.txt`, `src/content/CMakeLists.txt`, `src/session/CMakeLists.txt`, `src/adapters/CMakeLists.txt`
- **Verification:** `rg` dos contratos de link passou e `cmake --build --preset dev --target ascend_domain ascend_content ascend_session ascend_adapters` continuou verde.
- **Committed in:** `e578809`

---

**Total deviations:** 1 auto-fixed (1 bug)
**Impact on plan:** Correcao pequena e necessaria para alinhar implementacao e criterio automatizado de verificacao. Sem scope creep.

## Issues Encountered

- O repositorio ja tinha mudancas e delecoes antigas fora de escopo; os commits deste plano ficaram limitados ao subtree `src/` e aos artefatos da `.planning`.

## User Setup Required

None - no external service configuration required.

## Next Phase Readiness

- O smoke test do plano 02-03 ja pode linkar os quatro targets publicos e validar a estrutura completa do bootstrap.
- A phase agora tem uma base de codigo navegavel o bastante para receber `CombatState` e catalogo real nas proximas fases sem refazer o layout.

## Self-Check

PASSED

- FOUND: `.planning/phases/02-bootstrap-da-fundacao-c-1x1/02-02-SUMMARY.md`
- FOUND: `5b1ec7b`
- FOUND: `227ae15`
- FOUND: `e578809`

---
*Phase: 02-bootstrap-da-fundacao-c-1x1*
*Completed: 2026-04-13*
