---
phase: 01-base-documental-do-combate-1x1
plan: 02
subsystem: documentation
tags: [cpp, docs, combat-1x1, runtime-state, turn-order]
requires:
  - phase: 01-01
    provides: README canonico, overview do slice e glossario compartilhado
provides:
  - contrato documental de atores, estado minimo e recursos do duelo 1x1
  - regra deterministica de iniciativa, turno e acao invalida
  - invariantes observaveis para log, teste e harness futuro
affects: [01-03, 01-04, v1.1-slice-de-implementacao-1x1]
tech-stack:
  added: []
  patterns: [explicit-runtime-contracts, deterministic-turn-resolution]
key-files:
  created: [docs/combat-1x1/combat-domain.md, docs/combat-1x1/turn-resolution.md, .planning/phases/01-base-documental-do-combate-1x1/01-02-SUMMARY.md]
  modified: [.planning/STATE.md, .planning/ROADMAP.md, .planning/REQUIREMENTS.md]
key-decisions:
  - "O runtime minimo do duelo expone campos nomeados e observaveis para cada ator, sem placeholders vagos."
  - "A iniciativa usa desempate fixo por AGI decrescente, depois player, depois actor_id."
  - "Acao com recurso insuficiente gera action_rejected_insufficient_resource, nao consome recurso e encerra a vez."
patterns-established:
  - "Combat docs descrevem entradas, saidas e invariantes em secoes nomeadas para guiar implementacao futura."
  - "Regras de turno e encerramento sao escritas de forma deterministica e observavel, sem dependencia de adapters."
requirements-completed: [COMBAT-01, COMBAT-02, COMBAT-03, VAL-02]
duration: 2min
completed: 2026-04-12
---

# Phase 01 Plan 02: Dominio do Combate, Fluxo de Turno e Invariantes Summary

**Contrato documental para atores, estado de runtime e resolucao deterministica do turno no combate 1x1**

## Performance

- **Duration:** 2 min
- **Started:** 2026-04-12T22:12:53Z
- **Completed:** 2026-04-12T22:14:54Z
- **Tasks:** 2
- **Files modified:** 6

## Accomplishments

- Publicou `docs/combat-1x1/combat-domain.md` com os atores canonicos do duelo, os campos minimos de runtime e os recursos `vida`, `stamina` e `mana`.
- Fixou em `docs/combat-1x1/turn-resolution.md` a regra de iniciativa, a sequencia imutavel da vez e o comportamento observavel de acao invalida.
- Deixou explicitas as invariantes que logs, testes e harnesses futuros devem conseguir verificar sem depender de UI, engine, rede ou persistencia.

## Task Commits

Each task was committed atomically:

1. **Task 1: Documentar atores, estado de runtime e recursos do duelo** - `2a6a27c` (feat)
2. **Task 2: Documentar ordem de turno e resolucao deterministica** - `4502482` (feat)

## Files Created/Modified

- `docs/combat-1x1/combat-domain.md` - define os atores, o estado minimo de runtime, os recursos do duelo e as invariantes basicas do combate.
- `docs/combat-1x1/turn-resolution.md` - documenta a iniciativa, a sequencia fixa da vez, a regra de acao invalida e a prioridade do inimigo.
- `.planning/phases/01-base-documental-do-combate-1x1/01-02-SUMMARY.md` - registra a execucao, validacao e decisoes deste plano.
- `.planning/STATE.md` - avanca a posicao do projeto apos a conclusao do plano 01-02.
- `.planning/ROADMAP.md` - marca o progresso de 01-02 dentro da fase 01.
- `.planning/REQUIREMENTS.md` - marca os requisitos cobertos por este plano como concluidos.

## Decisions Made

- O `CombatState` minimo do slice foi congelado com campos nomeados por ator, suficiente para logs e testes futuros correlacionarem estado e eventos sem inferencia.
- A ordem de turno foi travada como `AGI` decrescente, depois `player`, depois `actor_id`, eliminando ambiguidade de desempate.
- `fuga/desistencia` permaneceu fora do fluxo normal do duelo e apareceu apenas como comando de debug/harness.
- A rejeicao por recurso insuficiente foi especificada como evento observavel que nao consome recurso e encerra a vez do ator.

## Deviations from Plan

### Auto-fixed Issues

**1. [Rule 1 - Bug] Corrigida dessincronizacao do tracking apos `gsd-tools`**
- **Found during:** Finalizacao do plano e atualizacao de metadata
- **Issue:** `STATE.md` e `ROADMAP.md` ficaram com corpo textual divergente do frontmatter e do progresso real apos os comandos automatizados, mantendo barra de progresso, contadores e tabela de planos desatualizados.
- **Fix:** Ajustei manualmente o corpo de `STATE.md` e a tabela de progresso de `ROADMAP.md` para refletir `01-02` concluido, `3/4` como proximo plano e `50%` de progresso da fase.
- **Files modified:** `.planning/STATE.md`, `.planning/ROADMAP.md`
- **Verification:** Revisao direta dos diffs apos o patch manual, confirmando coerencia entre frontmatter, secoes textuais e tabela de progresso.
- **Committed in:** final docs metadata commit for plan 01-02

---

**Total deviations:** 1 auto-fixed (1 bug)
**Impact on plan:** Correcao necessaria para manter o tracking coerente. Sem scope creep.

## Issues Encountered

- `docs/combat-1x1/combat-domain.md` e `docs/combat-1x1/turn-resolution.md` nao existiam no worktree atual; os arquivos foram criados diretamente sem restaurar delecoes pre-existentes e fora de escopo.

## User Setup Required

None - no external service configuration required.

## Next Phase Readiness

- O plano 01-03 ja pode detalhar atributos, habilidades e observabilidade partindo de contratos de runtime e de turno estabilizados.
- O worktree continua com delecoes pre-existentes e fora de escopo; os proximos commits devem manter o mesmo isolamento de staging usado aqui.

## Self-Check

PASSED

- FOUND: `.planning/phases/01-base-documental-do-combate-1x1/01-02-SUMMARY.md`
- FOUND: `2a6a27c`
- FOUND: `4502482`

---
*Phase: 01-base-documental-do-combate-1x1*
*Completed: 2026-04-12*
