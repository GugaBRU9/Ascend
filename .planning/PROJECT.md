# Ascend

## What This Is

Ascend agora tem o milestone `v1.0` encerrado e arquivado como uma fundacao documental para um backend de RPG em C++ focado em estudo, testes e reuso entre plataformas. O repositorio esta entre milestones: os artefatos de `v1.0` foram preservados em `.planning/milestones/`, e o proximo passo e abrir o primeiro milestone de implementacao seguindo `01-HANDOFF.md`.

O produto entregue ate aqui nao e um jogo executavel. O que existe agora e uma base canonica que define escopo, dominio, arquitetura, validacao e handoff suficientes para transformar a ideia bruta em backlog tecnico executavel.

## Core Value

O nucleo de regras precisa ser compreensivel, testavel e adaptavel como classes, metodos e contratos C++ independentes de plataforma.

## Requirements

### Validated

- [x] Phase 01 validou Ascend como um backend C++ educacional e agnostico de plataforma, com milestone inicial puramente documental.
- [x] Phase 01 traduziu o rascunho em um guia canonico com modulos, tipos, fronteiras arquiteturais e contratos de regra rastreaveis.
- [x] Phase 01 fechou stack, estrategia de validacao, UAT e handoff para abrir a milestone 02 sem reabrir as decisoes de framing.

### Active

- [ ] Abrir o proximo milestone com `02-01 Fundacao de Tipos e Invariantes` como primeiro recorte executavel.
- [ ] Fechar o formato inicial do catalogo externo, o loader minimo e a granularidade inicial de replay/logs sem desviar para parser definitivo cedo demais.
- [ ] Entregar a trilha `tipos -> regras -> criacao de personagem -> combate minimo` via `CLI estruturada` de estudo e inspecao.

### Out of Scope

- UI de produto, rendering, audio, engine integration ou qualquer shell final de entrega no proximo recorte inicial.
- Save system, multiplayer, networking, persistencia online ou infraestrutura de deploy antes de estabilizar o core.
- Party, companions e IA tatica antes de validar protagonista unico, regras deterministicas e combate minimo.
- Balanceamento profundo ou volume amplo de conteudo antes de provar a arquitetura e o fluxo basico de estudo.

## Context

- `Estruturação.md` continua sendo materia-prima de ideacao. Ele nao deve voltar a ser tratado como backlog literal.
- `v1.0` entregou `01-GUIA-CANONICO.md`, `01-HANDOFF.md`, verificacao formal da fase e UAT `5/5` para o milestone documental.
- A toolchain local agora esta disponivel para o proximo ciclo: `gcc`, `g++`, `make`, `cmake`, `ctest`, `clang++`, `clang-tidy` e `ninja` foram confirmados no ambiente.
- O proximo milestone ainda precisa decidir o formato inicial do catalogo, o loader minimo e a granularidade inicial de replay/logs, mas nao precisa reabrir escopo, dominios base ou ordem didatica.
- O trabalho continua voltado a estudo de Ciencia da Computacao. Isso preserva a prioridade em arquitetura explicita, invariantes visiveis, fluxo deterministico e validacao rastreavel.

## Constraints

- **Linguagem**: O proximo milestone continua em C++ moderno, com implementacao estudavel e testavel.
- **Arquitetura**: O core deve permanecer agnostico de plataforma e desacoplado de concerns de produto.
- **Sequenciamento**: A ordem oficial segue `tipos -> regras -> criacao de personagem -> combate minimo`.
- **Didatica**: A `CLI estruturada` continua sendo ferramenta de estudo e inspecao, nao produto final.
- **Qualidade**: Falhas de conteudo, validacao e regra devem ser explicitas e rastreaveis desde o primeiro commit de codigo.

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| O milestone atual seria documental, nao implementacional | Era necessario fechar vocabulario, recorte e arquitetura antes de qualquer codigo | ✓ Validated in v1.0 |
| O core seria modelado como backend C++ agnostico de plataforma | A mesma base deve poder sustentar CLI, mesa e futuros adapters sem contaminar o dominio | ✓ Validated in v1.0 |
| `Estruturação.md` seria tratado como materia-prima, nao como contrato direto de implementacao | O arquivo mistura core, expansoes e concerns de plataforma | ✓ Validated in v1.0 |
| A primeira fase encerraria com handoff e milestone seguinte sugerida | O projeto precisava sair de ideia ampla para trilha concreta de implementacao | ✓ Validated in v1.0 |
| Sistemas de produto e adaptadores ficariam explicitamente adiados | Isso reduz risco arquitetural e evita acoplamento prematuro | ✓ Validated in v1.0 |

## Current State

`v1.0 Documentation Foundation` foi arquivado em `2026-04-04`. Os artefatos canonicos do milestone estao em `.planning/milestones/v1.0-ROADMAP.md` e `.planning/milestones/v1.0-REQUIREMENTS.md`, enquanto o historico bruto de execucao continua em `.planning/phases/01-guia-canonico-de-implementacao/`.

## Next Milestone Goals

- Definir requisitos frescos para o primeiro milestone de implementacao usando `01-HANDOFF.md` como referencia.
- Abrir os modulos base de tipos e invariantes antes de qualquer loader sofisticado ou shell de produto.
- Validar o caminho minimo via regras deterministicas, criacao de personagem e combate minimo com observabilidade suficiente para replay/logs.

## Evolution

This document evolves at phase transitions and milestone boundaries.

**After each phase transition** (via `$gsd-transition`):
1. Requirements invalidated? -> Move to Out of Scope with reason
2. Requirements validated? -> Move to Validated with phase reference
3. New requirements emerged? -> Add to Active
4. Decisions to log? -> Add to Key Decisions
5. "What This Is" still accurate? -> Update if drifted

**After each milestone** (via `$gsd-complete-milestone`):
1. Full review of all sections
2. Core Value check - still the right priority?
3. Audit Out of Scope - reasons still valid?
4. Update Context with current state

---
*Last updated: 2026-04-04 after v1.0 milestone archival*
