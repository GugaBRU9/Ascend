---
phase: 01-base-canonica-reproduzivel
plan: 02
subsystem: core-content
tags: [validation, zod, vitest, rng, deterministic-tests]
requires: [01-01]
provides:
  - pipeline de carga agregada do catalogo canonico com erros acionaveis
  - PRNG seedavel com rolagem d20 deterministica
  - resolvedor canonico de testes base com vantagem, desvantagem e graus de sucesso
affects: [phase-01-validation, phase-01-replay, phase-02-characters, phase-03-combat]
tech-stack:
  added: []
  patterns:
    - validacao de schema e referencias cruzadas sem fail-fast
    - wrapper de PRNG isolado do resolvedor de testes
    - testes automatizados cobrindo reproducibilidade e ajuste por natural
key-files:
  created:
    - packages/content/src/schema/catalog-schemas.ts
    - packages/content/src/validation/validation-issue.ts
    - packages/content/src/loaders/load-catalog.ts
    - packages/content/src/loaders/reference-checks.ts
    - packages/core/src/rng/prng.ts
    - packages/core/src/tests/degree-of-success.ts
    - packages/core/src/tests/resolve-test.ts
    - vitest.workspace.ts
  modified:
    - packages/content/src/index.ts
    - packages/content/src/__tests__/catalog-loader.test.ts
    - packages/core/src/index.ts
    - packages/core/src/__tests__/resolve-test.test.ts
    - packages/core/src/__tests__/reproducibility.test.ts
key-decisions:
  - "O loader retorna catalogo e lista completa de issues na mesma execucao, em vez de interromper na primeira falha."
  - "O resolvedor de testes produz breakdown de modificadores e eventos de dominio desde a fase 1 para destravar replay e inspeção no plano 03."
  - "A reproducibilidade foi validada tanto por exemplo fixo quanto por propriedade gerada, para reduzir risco de regressao no motor seedado."
patterns-established:
  - "Schemas Zod e checagens referenciais vivem no pacote de content; regras de dado nao vazam para adapters."
  - "O core trata aleatoriedade como dependencia explicita e serializavel."
requirements-completed: [ENGN-01, ENGN-02, CONT-01]
duration: 5min
completed: 2026-04-03
---

# Phase 01: Base Canonica Reproduzivel Summary

**Catalogo canonico validavel e motor deterministico minimo de testes implementados e cobertos por testes automatizados**

## Performance

- **Duration:** 5 min
- **Started:** 2026-04-03T17:09:50-03:00
- **Completed:** 2026-04-03T17:14:16-03:00
- **Tasks:** 3
- **Files modified:** 13

## Accomplishments
- Implementei schemas Zod para todos os dominios do catalogo base e um loader agregador com `ValidationIssue` acionavel.
- Adicionei checagens de referencias cruzadas entre trilhas, habilidades e aventura inicial sem depender de runtime de combate.
- Implementei PRNG seedavel, resolvedor de testes `1d20 + modificadores` e calculo de graus de sucesso com `20` e `1` naturais.
- Cobri a fase com testes para catalogo valido/invalido, vantagem, desvantagem, reproducibilidade e ajustes por naturais.

## Task Commits

Each task was committed atomically:

1. **Task 1: Implementar schemas e carga agregada do catalogo canonico** - `39c94f9` (`feat`)
2. **Task 2: Implementar RNG seedavel e resolucao canonica de testes base** - `8b2cebf` (`feat`)
3. **Task 3: Cobrir carga e resolucao com testes automatizados de fase 1** - `8bddbc1` (`test`)

## Files Created/Modified
- `packages/content/src/loaders/load-catalog.ts` - pipeline de carga do catalogo com agregacao de issues e normalizacao dos dominios
- `packages/content/src/validation/validation-issue.ts` - shape de erro acionavel com `file`, `entryId`, `field`, `message` e `severity`
- `packages/core/src/rng/prng.ts` - wrapper de PRNG seedavel com operacao `d20`
- `packages/core/src/tests/resolve-test.ts` - resolucao canonica de testes base com breakdown de modificadores e eventos
- `packages/core/src/__tests__/reproducibility.test.ts` - prova automatizada de reproducao para comandos repetidos

## Decisions Made
- Mantive a validacao em duas camadas: schema estrutural primeiro, referencias cruzadas depois, sempre acumulando todos os erros.
- O resultado de `resolveTest` ja inclui `natural`, `total`, `degree`, `passed`, `rolls` e `modifierBreakdown`, porque isso e requisito real de auditoria do sistema.
- Reforcei a suite com `fast-check` para garantir reprodutibilidade em seeds e listas de modificadores arbitrarias, nao so em fixtures fixas.

## Deviations from Plan

### Auto-fixed Issues

**1. [Rule 2 - Missing Critical] Adiantei a infraestrutura minima de testes do plano para viabilizar a verificacao**
- **Found during:** Task 1 (Implementar schemas e carga agregada do catalogo canonico)
- **Issue:** O plano listava cobertura automatizada no task 3, mas sem `vitest.workspace.ts` e um teste inicial no pacote `content` nao havia como validar o task 1 de forma isolada.
- **Fix:** Criei `vitest.workspace.ts` e já acoplei o pacote `content` ao fluxo de testes desde o primeiro commit funcional do plano.
- **Files modified:** `vitest.workspace.ts`, `packages/content/src/__tests__/catalog-loader.test.ts`
- **Verification:** `pnpm vitest run packages/content/src/__tests__/catalog-loader.test.ts`
- **Committed in:** `39c94f9`

---

**Total deviations:** 1 auto-fixed (1 missing critical)
**Impact on plan:** Ajuste pequeno e contido, sem ampliar o escopo funcional do plano.

## Issues Encountered
- O utilitario `state update-progress` continuou derivando o total de planos concluidos apenas pelos summaries presentes. O estado final deste plano precisou ser sincronizado manualmente depois da criacao deste arquivo.

## User Setup Required

None - no external service configuration required.

## Next Phase Readiness
- A Wave 3 ja pode consumir o resultado de `resolveTest` para gerar logs, envelopes de replay e um harness/CLI minimo.
- O contrato de erro acionavel e o shape do resultado de teste nao devem ser quebrados no plano 03, porque sao a base para inspeção e replay.

## Self-Check: PASSED

---
*Phase: 01-base-canonica-reproduzivel*
*Completed: 2026-04-03*
