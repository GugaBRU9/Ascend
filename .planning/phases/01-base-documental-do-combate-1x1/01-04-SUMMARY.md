---
phase: 01-base-documental-do-combate-1x1
plan: 04
subsystem: docs
tags: [cpp, cmake, ctest, roadmap, documentation]
requires:
  - phase: 01-03
    provides:
      - Attribute and skill contracts for the 1x1 slice
      - Minimum observability contract and textual UAT posture
provides:
  - Backend C++ foundation for the future implementation milestone
  - Phase 1 risk register with deferred decisions and entry criteria
  - Explicit recommendation for the v1.1 1x1 implementation slice
affects: [v1.1-slice-de-implementacao-1x1, implementation-milestone, roadmap]
tech-stack:
  added: []
  patterns:
    - Std-first C++ foundation with optional dependencies admitted only by justified need
    - Roadmap documents link technical foundation, risks and next milestone scope directly
key-files:
  created:
    - docs/engineering/backend-cpp-foundation.md
    - docs/roadmap/phase-1-risk-register.md
    - docs/roadmap/v1.1-slice-de-implementacao-1x1.md
    - .planning/phases/01-base-documental-do-combate-1x1/01-04-SUMMARY.md
  modified:
    - .planning/STATE.md
    - .planning/ROADMAP.md
    - .planning/REQUIREMENTS.md
key-decisions:
  - "A baseline da v1.1 fica travada em C++20, CMake, CTest, clang-format, clang-tidy, AddressSanitizer e UBSan."
  - "Replay format, formulas finais, fixture schema e scaffolding real continuam adiados para a milestone implementavel."
  - "A v1.1 fica limitada a CombatState, TurnResolver, catalogo inicial, harness textual e testes basicos."
patterns-established:
  - "Documentos de engenharia e roadmap fecham a ponte entre contratos canonicos e proxima milestone."
  - "Nao-objetivos do slice precisam ser repetidos no roadmap para evitar reabertura de escopo."
requirements-completed: [ARCH-01, ARCH-02, ARCH-03, ARCH-04, VAL-03, VAL-04]
duration: 2min
completed: 2026-04-12
---

# Phase 1 Plan 4: C++ Foundation, Risks and v1.1 Recommendation Summary

**C++ foundation, milestone risk register, and explicit v1.1 scope for a textual and testable 1x1 combat implementation**

## Performance

- **Duration:** 2 min
- **Started:** 2026-04-12T22:27:42Z
- **Completed:** 2026-04-12T22:29:59Z
- **Tasks:** 3
- **Files modified:** 7

## Accomplishments

- Fechei a fundacao tecnica da futura implementacao em C++ com modulos-alvo, stack de build/teste, postura de validacao e criterio de dependencias.
- Registrei os riscos ativos que ainda podem distorcer a v1.1, junto das decisoes conscientemente adiadas e dos nao-objetivos preservados.
- Transformei a proxima milestone em um recorte acionavel com objetivo, escopo, primeiros passos e criterio de sucesso para o estudante.

## Task Commits

Each task was committed atomically:

1. **Task 1: Documentar fundacao tecnica do backend C++** - `a2ffd1d` (feat)
2. **Task 2: Registrar riscos restantes e limites do milestone documental** - `a8cfdd4` (feat)
3. **Task 3: Recomendar explicitamente a milestone v1.1** - `2568afb` (feat)

**Plan metadata:** sera registrado no commit final de docs apos atualizar `STATE.md`, `ROADMAP.md` e `REQUIREMENTS.md`.

## Files Created/Modified

- `docs/engineering/backend-cpp-foundation.md` - Congela a arquitetura modular alvo, a stack recomendada e a politica de dependencias do slice em C++.
- `docs/roadmap/phase-1-risk-register.md` - Lista riscos ativos, decisoes adiadas, criterios de entrada da v1.1 e nao-objetivos preservados.
- `docs/roadmap/v1.1-slice-de-implementacao-1x1.md` - Traduz a proxima milestone em um recorte implementavel com passos iniciais concretos.
- `.planning/phases/01-base-documental-do-combate-1x1/01-04-SUMMARY.md` - Registra a execucao do plano e consolida as decisoes para o proximo milestone.
- `.planning/STATE.md` - Sera atualizado para avancar o plano atual, progresso e decisoes acumuladas.
- `.planning/ROADMAP.md` - Sera atualizado para refletir a conclusao do plano 01-04 e da phase 1.
- `.planning/REQUIREMENTS.md` - Sera atualizado para marcar os requisitos arquiteturais e de continuidade cobertos neste plano.

## Decisions Made

- A fundacao da v1.1 fica oficialmente travada em uma stack pequena e portavel: `C++20`, `CMake`, `CTest`, `clang-format`, `clang-tidy`, `AddressSanitizer` e `UBSan`.
- Dependencias externas passam a obedecer um criterio de entrada explicito: `Catch2`, `fmt` e `nlohmann/json` so entram sob necessidade justificada; engine, ECS generico e dependencias grandes continuam rejeitados.
- A recomendacao da `v1.1` fica congelada como um duelo 1x1 textual/testavel com `CombatState`, `TurnResolver`, catalogo inicial, harness textual e testes basicos.

## Deviations from Plan

### Auto-fixed Issues

**1. [Rule 3 - Blocking] Reconcile stale textual progress after `gsd-tools` update**
- **Found during:** Plan closure and state update
- **Issue:** `gsd-tools` atualizou frontmatter e alguns contadores, mas deixou `STATE.md` e `ROADMAP.md` com trechos textuais stale, ainda mostrando `50%`, `2/4` e status em progresso.
- **Fix:** Corrigi manualmente os resumos textuais para alinhar os artefatos ao estado real do plano concluido.
- **Files modified:** `.planning/STATE.md`, `.planning/ROADMAP.md`
- **Verification:** Diff restrito aos artefatos GSD mostra progresso em `100%`, phase `4/4` e milestone documental concluida.
- **Committed in:** commit final de metadados deste plano

---

**Total deviations:** 1 auto-fixed (1 blocking)
**Impact on plan:** Nenhum impacto de escopo; ajuste necessario para manter consistencia entre artefatos de tracking apos o workflow.

## Issues Encountered

- `gsd-tools` nao sincronizou todas as secoes textuais de `STATE.md` e `ROADMAP.md` durante o fechamento do plano; corrigi esses trechos manualmente para evitar rastreabilidade inconsistente.

## User Setup Required

None - no external service configuration required.

## Next Phase Readiness

- A phase documental termina com uma ponte objetiva para abrir a milestone `v1.1 Slice de Implementacao 1x1` sem reabrir contratos de dominio, observabilidade ou stack.
- Nao ha bloqueios funcionais novos; o cuidado operacional continua sendo manter fora dos commits as delecoes pre-existentes e fora de escopo do worktree.

## Self-Check: PASSED

- Arquivos declarados como criados existem em disco.
- Os commits `a2ffd1d`, `a8cfdd4` e `2568afb` foram encontrados no historico do repositorio.
