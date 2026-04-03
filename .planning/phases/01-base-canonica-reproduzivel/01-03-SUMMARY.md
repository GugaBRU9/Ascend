---
phase: 01-base-canonica-reproduzivel
plan: 03
subsystem: replay-cli
tags: [replay, cli, harness, commander, golden-test]
requires: [01-01, 01-02]
provides:
  - envelope JSON canonico de replay para testes seedados
  - harness reutilizavel para gerar e reexecutar replays da fase 1
  - adapter minimo em CLI para validar catalogo, resolver teste, reexecutar replay e inspecionar conteudo
affects: [phase-02-characters, phase-03-combat, phase-05-playtest]
tech-stack:
  added: [commander]
  patterns:
    - envelope JSON versionado como artefato canonico de observabilidade
    - harness separado do CLI para manter adapter fino e reusavel
    - golden tests para fixar replay e resumo humano observavel
key-files:
  created:
    - packages/core/src/replay/replay-envelope.ts
    - packages/core/src/replay/replay-json.ts
    - packages/sim/src/harness/resolve-test-runner.ts
    - apps/cli/src/main.ts
    - apps/cli/src/commands/replay-log.ts
    - packages/sim/src/__tests__/golden-replay.test.ts
    - apps/cli/src/__tests__/cli-replay.test.ts
  modified:
    - packages/core/src/index.ts
    - tsconfig.base.json
    - tsconfig.json
    - pnpm-lock.yaml
key-decisions:
  - "O replay canonico da fase 1 e um JSON versionado, serializado de forma estavel e sem depender de snapshot opaco."
  - "O CLI expoe exatamente quatro comandos explicitos e nao entra em fluxo interativo, para preservar o foco em validacao mecanica."
  - "A reexecucao do replay compara o envelope inteiro serializado, nao apenas o resultado final, para detectar divergencias de log e de observabilidade."
patterns-established:
  - "packages/core define contrato e serializacao; packages/sim executa o runner; apps/cli apenas adapta entrada e saida."
  - "Cada caso seedado importante pode virar golden test ou fixture de playtest sem acoplamento a UI."
requirements-completed: [ENGN-04, PLYT-02]
duration: 6min
completed: 2026-04-03
---

# Phase 01: Base Canonica Reproduzivel Summary

**Replay canonico, harness reutilizavel e CLI minimo entregues para fechar a reproducao auditavel da fase 1**

## Performance

- **Duration:** 6 min
- **Started:** 2026-04-03T17:20:17-03:00
- **Completed:** 2026-04-03T17:25:58-03:00
- **Tasks:** 3
- **Files modified:** 20

## Accomplishments
- Formalizei o envelope JSON canonico de replay com `version`, `seed`, `command`, `rolls`, `modifierBreakdown`, `result` e `events`.
- Criei o pacote `@ascend/sim` com runner para gerar e reexecutar replays seedados a partir do `resolveTest`.
- Implementei o adapter `@ascend/cli` com os comandos `validate-content`, `resolve-test`, `replay-log` e `inspect-catalog`.
- Fixei a observabilidade com um golden test do replay JSON e um teste de CLI validando o resumo humano emitido a partir do mesmo artefato.

## Task Commits

Each task was committed atomically:

1. **Task 1: Formalizar o envelope de replay e o runner seedado da fase 1** - `8c187a8` (`feat`)
2. **Task 2: Expor o adapter minimo em CLI para validacao, resolucao, replay e inspecao** - `e73d1a0` (`feat`)
3. **Task 3: Fixar reproducao e resumo do adapter com testes de golden replay** - `7e99a96` (`test`)

## Files Created/Modified
- `packages/core/src/replay/replay-envelope.ts` - contrato canonico do envelope JSON de replay
- `packages/core/src/replay/replay-json.ts` - serializacao, desserializacao e reexecucao a partir do artefato JSON
- `packages/sim/src/harness/resolve-test-runner.ts` - runner reutilizavel para gerar e reexecutar comandos seedados
- `apps/cli/src/main.ts` - entrypoint do adapter minimo com os quatro subcomandos da fase 1
- `apps/cli/src/formatters/replay-summary.ts` - resumo humano observavel de seed, modificadores, grau e eventos

## Decisions Made
- O replay JSON foi mantido pequeno e explicito, com campos de dominio e sem metadados de produto ou sessao.
- O CLI escreve JSON bruto em `resolve-test` e resumo humano em `replay-log`, para separar claramente artefato canonico e visao de inspeção.
- O golden test trava o envelope completo do replay; a CLI prova que esse mesmo artefato continua legivel para debug sem UI final.

## Deviations from Plan

### Auto-fixed Issues

**1. [Rule 3 - Blocking] Adicionei `tsconfig` e referencias de projeto para o novo adapter**
- **Found during:** Task 2 (Expor o adapter minimo em CLI para validacao, resolucao, replay e inspecao)
- **Issue:** O plano listava apenas `package.json` e arquivos-fonte do adapter, mas `tsc -b` nao incluiria o app sem `apps/cli/tsconfig.json` e sem atualizar o `tsconfig.json` raiz.
- **Fix:** Criei `apps/cli/tsconfig.json` e atualizei as project references do workspace.
- **Files modified:** `apps/cli/tsconfig.json`, `tsconfig.json`
- **Verification:** `pnpm exec tsc -b --pretty false`
- **Committed in:** `e73d1a0`

**2. [Rule 2 - Missing Critical] Registrei o lockfile ao introduzir `commander`**
- **Found during:** Task 2 (Expor o adapter minimo em CLI para validacao, resolucao, replay e inspecao)
- **Issue:** O plano nao citava `pnpm-lock.yaml`, mas a nova dependencia do CLI precisava ficar pinada para manter reproducibilidade do workspace.
- **Fix:** Rodei `pnpm install` e inclui a atualizacao do lockfile junto do adapter.
- **Files modified:** `pnpm-lock.yaml`
- **Verification:** `pnpm exec tsx apps/cli/src/main.ts inspect-catalog`
- **Committed in:** `e73d1a0`

---

**Total deviations:** 2 auto-fixed (1 blocking, 1 missing critical)
**Impact on plan:** Ajustes estruturais e de reproducibilidade; o escopo funcional permaneceu o mesmo.

## Issues Encountered
- `pnpm install` avisou sobre `Ignored build scripts: esbuild@0.27.7`. O warning nao bloqueou instalacao, build nem execucao do adapter nesta fase.

## User Setup Required

None - no external service configuration required.

## Next Phase Readiness
- A fase 2 ja pode usar o catalogo carregavel, o motor deterministico e o replay canonico para validar criacao de personagem e derivacoes sem depender de UI.
- O contrato do replay e os comandos do CLI passam a ser a superficie minima de depuracao para as proximas fases e nao devem ser quebrados sem migracao explicita.

## Self-Check: PASSED

---
*Phase: 01-base-canonica-reproduzivel*
*Completed: 2026-04-03*
