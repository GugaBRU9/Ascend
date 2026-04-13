---
phase: 02-bootstrap-da-fundacao-c-1x1
plan: 03
subsystem: testing
tags: [ctest, smoke-test, asan, ubsan, cpp20]
requires: [02-02]
provides:
  - executavel bootstrap_smoke registrado no CTest
  - smoke test pequeno cobrindo os quatro modulos publicos
  - baseline validada em dev e asan-ubsan
affects: [phase-completion, 03-01, regression-baseline]
tech-stack:
  added: [bootstrap_smoke]
  patterns: [single-smoke-ctest-baseline, same-test-across-presets]
key-files:
  created: [tests/bootstrap_smoke.cpp, .planning/phases/02-bootstrap-da-fundacao-c-1x1/02-03-SUMMARY.md]
  modified: [tests/CMakeLists.txt, .planning/STATE.md, .planning/ROADMAP.md, .planning/REQUIREMENTS.md]
key-decisions:
  - "A baseline inicial de teste fica framework-free, usando assert e std::string_view."
  - "O mesmo executavel bootstrap_smoke roda em dev e asan-ubsan para evitar coberturas divergentes."
patterns-established:
  - "CTest registra um executavel explicito por responsabilidade, sem descoberta automatica nesta fase."
  - "Contratos publicos minimos dos modulos sao validados por saidas observaveis antes da logica de combate."
requirements-completed: [ARCH-05, VAL-05]
duration: 1min
completed: 2026-04-13
---

# Phase 02 Plan 03: Fechar baseline de testes e configuracoes instrumentadas Summary

**Smoke test em CTest cobrindo os quatro modulos e validado nos presets dev e asan-ubsan**

## Performance

- **Duration:** 1 min
- **Started:** 2026-04-13T12:25:33Z
- **Completed:** 2026-04-13T12:26:30Z
- **Tasks:** 2
- **Files modified:** 6

## Accomplishments

- Trocou o placeholder de `tests/CMakeLists.txt` por um executavel real registrado no `CTest`.
- Criou um smoke test curto que inclui os headers publicos de `domain`, `content`, `session` e `adapters`.
- Provou a baseline de validacao da phase com execucao nos presets `dev` e `asan-ubsan`, mantendo `release` compilavel.

## Task Commits

Each task was committed atomically:

1. **Task 1: Registrar um teste real no CTest do bootstrap** - `f80d60e` (test)
2. **Task 2: Criar smoke test pequeno e provar os presets dev e asan-ubsan** - `b37558e` (test)

## Files Created/Modified

- `tests/CMakeLists.txt` - registra o executavel `ascend_bootstrap_smoke` e o teste `bootstrap_smoke`.
- `tests/bootstrap_smoke.cpp` - valida com `assert` os retornos observaveis dos quatro modulos publicos.
- `.planning/phases/02-bootstrap-da-fundacao-c-1x1/02-03-SUMMARY.md` - registra a execucao e a validacao deste plano.
- `.planning/STATE.md` - acompanha o encerramento dos planos da phase.
- `.planning/ROADMAP.md` - marca o progresso do plano 02-03.
- `.planning/REQUIREMENTS.md` - registra `VAL-05` como atendido e reforca a baseline de verificacao da phase.

## Decisions Made

- O primeiro teste ficou sem framework externo para manter o bootstrap didatico e sem dependencias desnecessarias.
- O smoke test reutiliza diretamente as APIs publicas dos quatro modulos, o que transforma a propria estrutura do bootstrap em alvo verificavel.
- O preset `release` continuou no loop de build, mas a execucao de testes automatizados ficou concentrada em `dev` e `asan-ubsan`.

## Deviations from Plan

None - plan executed exactly as written.

## Issues Encountered

- A primeira reexecucao incremental em `dev` emitiu `ninja: warning: premature end of file; recovering`; repeti `cmake --build --preset dev && ctest --preset dev --output-on-failure`, o warning nao voltou e o smoke test permaneceu verde.

## User Setup Required

None - no external service configuration required.

## Next Phase Readiness

- A phase 2 termina com configure/build/test acionaveis, o que libera a fase 3 para introduzir `CombatState` e catalogo inicial sobre uma baseline real.
- O projeto ja tem uma referencia pequena e compilavel para detectar regressao estrutural nas proximas implementacoes.

## Self-Check

PASSED

- FOUND: `.planning/phases/02-bootstrap-da-fundacao-c-1x1/02-03-SUMMARY.md`
- FOUND: `f80d60e`
- FOUND: `b37558e`

---
*Phase: 02-bootstrap-da-fundacao-c-1x1*
*Completed: 2026-04-13*
