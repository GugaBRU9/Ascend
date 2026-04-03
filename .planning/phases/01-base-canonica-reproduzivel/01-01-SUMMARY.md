---
phase: 01-base-canonica-reproduzivel
plan: 01
subsystem: infra
tags: [typescript, pnpm, yaml, catalog, domain-model]
requires: []
provides:
  - monorepo TypeScript inicial para packages e apps
  - contratos canonicos de IDs e catalogo da fase 1
  - catalogo YAML inicial para origens, trilhas, habilidades, equipamentos, inimigos e miniaventura
affects: [phase-01-validation, phase-02-characters, phase-03-combat]
tech-stack:
  added: [pnpm, typescript, vitest, fast-check, yaml, zod, pure-rand]
  patterns:
    - workspace monorepo com project references
    - IDs canonicos estaveis com tipos dedicados
    - catalogo autorado em YAML separado por dominio
key-files:
  created:
    - package.json
    - tsconfig.base.json
    - packages/core/src/domain/ids.ts
    - packages/content/src/catalog-types.ts
    - content/canon/origins.yaml
    - content/canon/starter-adventure.yaml
  modified:
    - .planning/STATE.md
    - .planning/ROADMAP.md
key-decisions:
  - "Mantive o workspace compatível com Node 20/24 porque o ambiente local está em Node 20.19.5, apesar do alvo documental continuar sendo Node 24 LTS."
  - "Modelei IDs canônicos como tipos dedicados e não como labels derivadas, para reduzir quebra de referência futura."
  - "Encodei o pacote inicial inteiro em YAML já na fundação para destravar validação referencial nos próximos planos."
patterns-established:
  - "Workspace root controla build, typecheck e test; cada pacote tem tsconfig próprio para participar do tsc -b."
  - "Domínio e conteúdo ficam separados: @ascend/core define identidade/eventos e @ascend/content define contratos de catálogo."
requirements-completed: [ENGN-01, CONT-01]
duration: 15min
completed: 2026-04-03
---

# Phase 01: Base Canonica Reproduzivel Summary

**Monorepo TypeScript com IDs canonicos estaveis e catalogo YAML inicial cobrindo o pacote base de Ascend**

## Performance

- **Duration:** 15 min
- **Started:** 2026-04-03T20:01:26Z
- **Completed:** 2026-04-03T20:02:21Z
- **Tasks:** 3
- **Files modified:** 22

## Accomplishments
- Estruturei o workspace inicial com `pnpm`, `tsc -b` e pacotes `@ascend/core` e `@ascend/content`.
- Defini contratos canônicos para IDs, catálogo e evento de domínio da fase 1.
- Autoriei o catálogo YAML inicial com origens, trilhas, habilidades, equipamentos, inimigos e a miniaventura `O Sinal sob o Obelisco`.

## Task Commits

Each task was committed atomically:

1. **Task 1: Inicializar o monorepo TypeScript da fase 1** - `486a782` (`chore`)
2. **Task 2: Definir tipos canonicos, IDs estaveis e eventos de dominio base** - `1bb4de0` (`feat`)
3. **Task 3: Criar o layout canonico do catalogo YAML da fase 1** - `de01386` (`feat`)

## Files Created/Modified
- `package.json` - scripts raiz e dependencias de desenvolvimento do workspace
- `pnpm-workspace.yaml` - declaracao dos workspaces `packages/*` e `apps/*`
- `tsconfig.base.json` - baseline strict do TypeScript para o monorepo
- `packages/core/src/domain/ids.ts` - IDs canonicos estaveis da fase 1
- `packages/content/src/catalog-types.ts` - contratos publicos de catalogo
- `content/canon/starter-adventure.yaml` - metadados da miniaventura inicial com referencias para cenas e inimigos

## Decisions Made
- Mantive a base compilando em Node 20 sem usar recursos exclusivos de Node 24, porque o ambiente local nao oferece Node 24.
- Inclui o pacote inicial inteiro de conteudo em vez de um stub minimo para evitar retrabalho nas validacoes referenciais do proximo plano.
- Usei `workspace:*` entre `@ascend/content` e `@ascend/core` para manter a fronteira de dominio explicita desde o inicio.

## Deviations from Plan

### Auto-fixed Issues

**1. [Rule 2 - Missing Critical] Adicionei `.gitignore` e `pnpm-lock.yaml` ao bootstrap**
- **Found during:** Task 1 (Inicializar o monorepo TypeScript da fase 1)
- **Issue:** O plano nao listava arquivos para lidar com `node_modules`, artefatos de build e instalacao deterministica do workspace.
- **Fix:** Criei `.gitignore` e registrei `pnpm-lock.yaml` como artefato versionado do bootstrap.
- **Files modified:** `.gitignore`, `pnpm-lock.yaml`
- **Verification:** `pnpm install` concluiu e o workspace nao ficou com artefatos gerados para commitar fora do lockfile
- **Committed in:** `486a782`

**2. [Rule 3 - Blocking] Adicionei `tsconfig.json` por pacote para o `tsc -b` funcionar**
- **Found during:** Task 1 (Inicializar o monorepo TypeScript da fase 1)
- **Issue:** O plano citava apenas `tsconfig` raiz, mas o build por project references exige `tsconfig.json` em cada pacote participante.
- **Fix:** Criei `packages/core/tsconfig.json` e `packages/content/tsconfig.json`.
- **Files modified:** `packages/core/tsconfig.json`, `packages/content/tsconfig.json`
- **Verification:** `pnpm exec tsc -b --pretty false` passou
- **Committed in:** `486a782`

---

**Total deviations:** 2 auto-fixed (1 missing critical, 1 blocking)
**Impact on plan:** Ambos os ajustes foram estruturais e contidos. Nao houve aumento de escopo funcional.

## Issues Encountered
- O ambiente local esta em Node `20.19.5`, nao Node `24 LTS`. Resolvi mantendo o workspace e os arquivos iniciais compatíveis com Node 20/24, sem alterar a direcao arquitetural definida no plano.

## User Setup Required

None - no external service configuration required.

## Next Phase Readiness
- A Wave 2 ja pode implementar schemas, loader, validacao agregada e RNG seedavel sobre uma base compilavel.
- O proximo passo precisa preservar os IDs e o formato YAML criados aqui; qualquer mudanca nesses contratos impacta validacao, replay e fases posteriores.

## Self-Check: PASSED

---
*Phase: 01-base-canonica-reproduzivel*
*Completed: 2026-04-03*
