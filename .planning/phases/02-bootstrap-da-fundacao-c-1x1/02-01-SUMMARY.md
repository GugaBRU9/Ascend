---
phase: 02-bootstrap-da-fundacao-c-1x1
plan: 01
subsystem: infra
tags: [cpp20, cmake, ctest, presets, clang-format, clang-tidy]
requires: []
provides:
  - workspace raiz em C++20 com CMake e CTest
  - presets dev, asan-ubsan e release
  - README alinhado ao bootstrap da v1.1
affects: [02-02, 02-03, onboarding, build]
tech-stack:
  added: [CMake, CTest, CMakePresets, clang-format, clang-tidy]
  patterns: [single-root-workspace, preset-driven-builds, std-first-bootstrap]
key-files:
  created: [.gitignore, CMakeLists.txt, CMakePresets.json, .clang-format, .clang-tidy, src/CMakeLists.txt, tests/CMakeLists.txt, .planning/phases/02-bootstrap-da-fundacao-c-1x1/02-01-SUMMARY.md]
  modified: [README.md, .planning/STATE.md, .planning/ROADMAP.md, .planning/REQUIREMENTS.md]
key-decisions:
  - "README.md passa a refletir a milestone ativa v1.1 e os comandos reais do bootstrap."
  - "O bootstrap fica std-first, sem dependencias externas adicionais nesta phase."
  - "Sanitizers ficam isolados no preset asan-ubsan e falham explicitamente fora de GCC/Clang."
patterns-established:
  - "Workspace raiz concentra padroes de build e warnings em targets INTERFACE compartilhados."
  - "README e CMakePresets.json usam os mesmos nomes de preset para evitar drift operacional."
requirements-completed: [ARCH-05]
duration: 3min
completed: 2026-04-13
---

# Phase 02 Plan 01: Bootstrap de build, presets e alvos basicos em C++20 Summary

**Workspace raiz em C++20 com presets dev/asan-ubsan/release, tooling leve e README alinhado ao bootstrap da v1.1**

## Performance

- **Duration:** 3 min
- **Started:** 2026-04-13T12:20:02Z
- **Completed:** 2026-04-13T12:23:02Z
- **Tasks:** 2
- **Files modified:** 12

## Accomplishments

- Realinhou o `README.md` com a `v1.1 Slice de Implementacao 1x1`, preservando o framing de backend educacional e fora de escopo.
- Abriu o build raiz com `CMake`, `CTest`, presets legiveis e scaffolds para `src/` e `tests/`.
- Preparou warnings, sanitizers e tooling leve sem introduzir dependencias externas nem complexidade acidental.

## Task Commits

Each task was committed atomically:

1. **Task 1: Realinhar README ao milestone ativo e aos comandos do bootstrap** - `21a04e6` (docs)
2. **Task 2: Criar scaffold raiz de build, presets e tooling leve** - `8ab6d02` (chore)

## Files Created/Modified

- `README.md` - atualiza o framing publico do milestone ativo e documenta os comandos reais de build/test.
- `.gitignore` - ignora build outputs, `compile_commands.json` e cache local.
- `CMakeLists.txt` - define o workspace raiz em `C++20`, targets de opcoes/warnings e gate explicito para sanitizers.
- `CMakePresets.json` - registra os presets `dev`, `asan-ubsan` e `release` com binarios separados.
- `.clang-format` - fixa um baseline simples de estilo com base LLVM.
- `.clang-tidy` - habilita um conjunto pequeno de checks de analise estatica para a base nascente.
- `src/CMakeLists.txt` - prepara o roteamento dos modulos `domain`, `content`, `session` e `adapters`.
- `tests/CMakeLists.txt` - deixa o ponto de entrada do `CTest` pronto para receber o smoke test do plano seguinte.
- `.planning/phases/02-bootstrap-da-fundacao-c-1x1/02-01-SUMMARY.md` - registra a execucao e a validacao deste plano.
- `.planning/STATE.md` - avanca o tracking do plano executado.
- `.planning/ROADMAP.md` - marca o progresso do plano 02-01 dentro da phase 2.
- `.planning/REQUIREMENTS.md` - registra `ARCH-05` como atendido por este plano.

## Decisions Made

- O entrypoint publico do repositorio passou a expor a `v1.1` como estado atual, para nao deixar o estudante preso ao milestone documental ja arquivado.
- Os presets ficaram reduzidos a `dev`, `asan-ubsan` e `release`, mantendo o bootstrap pequeno e facil de memorizar.
- O build raiz centralizou warnings e options em targets `INTERFACE`, reduzindo repeticao antes da criacao dos modulos reais.

## Deviations from Plan

None - plan executed exactly as written.

## Issues Encountered

- Havia delecoes e mudancas antigas fora de escopo no worktree; o plano foi executado com staging seletivo para nao misturar historicos.

## User Setup Required

None - no external service configuration required.

## Next Phase Readiness

- O plano 02-02 ja pode materializar os modulos `domain`, `content`, `session` e `adapters` sobre um workspace compilavel.
- Os presets e comandos documentados no `README.md` agora sao suficientes para validar rapidamente os proximos alvos C++.

## Self-Check

PASSED

- FOUND: `.planning/phases/02-bootstrap-da-fundacao-c-1x1/02-01-SUMMARY.md`
- FOUND: `21a04e6`
- FOUND: `8ab6d02`

---
*Phase: 02-bootstrap-da-fundacao-c-1x1*
*Completed: 2026-04-13*
