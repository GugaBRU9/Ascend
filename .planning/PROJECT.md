# Ascend

## What This Is

Ascend entrou no milestone `v1.1 Core Foundation`, o primeiro ciclo de implementacao do backend de RPG em C++ focado em estudo, testes e reuso entre plataformas. `v1.0` segue arquivado como fundacao documental em `.planning/milestones/`, enquanto o trabalho atual transforma esse material em codigo executavel sem acoplar o core a concerns de produto.

O produto ainda nao e um jogo final. O recorte ativo continua sendo um backend educacional, testavel e agnostico de plataforma, agora seguindo a trilha `tipos -> regras -> criacao de personagem -> combate minimo`, com `CLI estruturada` apenas para estudo e inspecao.

## Current Milestone: v1.1 Core Foundation

**Goal:** Abrir o primeiro caminho implementado do core C++ com invariantes explicitas, regras deterministicas observaveis, catalogo minimo e `CLI estruturada` de estudo.

**Target features:**
- Tipos base, IDs, value objects e invariantes para atributos, recursos, efeitos, personagens e inimigos.
- Resolutores deterministicos com eventos, logs estruturados e replay inicial para explicar entrada, saida e invariantes.
- Catalogo minimo externo, loader explicito, criacao de personagem e combate minimo acessiveis por uma `CLI estruturada` de estudo.

## Core Value

O nucleo de regras precisa ser compreensivel, testavel e adaptavel como classes, metodos e contratos C++ independentes de plataforma.

## Requirements

### Validated

- [x] Phase 01 validou Ascend como um backend C++ educacional e agnostico de plataforma, com milestone inicial puramente documental.
- [x] Phase 01 traduziu o rascunho em um guia canonico com modulos, tipos, fronteiras arquiteturais e contratos de regra rastreaveis.
- [x] Phase 01 fechou stack, estrategia de validacao, UAT e handoff para abrir a milestone 02 sem reabrir as decisoes de framing.

### Active

- [ ] Entregar `02-01 Fundacao de Tipos e Invariantes` como primeiro recorte executavel do core C++.
- [ ] Fechar `02-02 Regras Deterministicas e Resolutores` com observabilidade suficiente para replay/logs e scenario tests.
- [ ] Fechar `02-03 Criacao de Personagem e Catalogo Minimo` com loader simples, erros explicitos e fronteira clara entre autoria e runtime.
- [ ] Fechar `02-04 Combate Minimo e CLI de Estudo` provando o caminho `tipos -> regras -> criacao de personagem -> combate minimo`.
- [ ] Decidir apenas as aberturas legitimas do handoff: formato inicial do catalogo, loader minimo e granularidade inicial de replay/logs.

### Out of Scope

- UI de produto, rendering, audio, engine integration ou qualquer shell final de entrega no proximo recorte inicial.
- Save system, multiplayer, networking, persistencia online ou infraestrutura de deploy antes de estabilizar o core.
- Party, companions e IA tatica antes de validar protagonista unico, regras deterministicas e combate minimo.
- Balanceamento profundo ou volume amplo de conteudo antes de provar a arquitetura e o fluxo basico de estudo.

## Context

- `Estruturação.md` continua sendo materia-prima de ideacao. Ele nao deve voltar a ser tratado como backlog literal.
- `v1.0` entregou `01-GUIA-CANONICO.md`, `01-HANDOFF.md`, verificacao formal da fase e UAT `5/5` para o milestone documental.
- A toolchain local agora esta disponivel para o ciclo de implementacao: `gcc`, `g++`, `make`, `cmake`, `ctest`, `clang++`, `clang-tidy` e `ninja` foram confirmados no ambiente.
- `01-HANDOFF.md` e a fonte operacional para `v1.1`: ele trava a ordem `02-01` a `02-04`, explicita guardrails e limita as decisoes ainda abertas ao catalogo inicial, loader minimo e granularidade inicial de replay/logs.
- O milestone atual nao precisa reabrir escopo, dominios base, papel da `CLI estruturada` ou as decisoes `D-01` a `D-16`.
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

`v1.1 Core Foundation` foi aberto em `2026-04-05` como o primeiro milestone de codigo do projeto. Os artefatos canonicos de `v1.0` seguem preservados em `.planning/milestones/v1.0-ROADMAP.md` e `.planning/milestones/v1.0-REQUIREMENTS.md`, enquanto o historico bruto da fase documental continua em `.planning/phases/01-guia-canonico-de-implementacao/`.

## Current Milestone Goals

- Abrir os modulos base de `domain`, `rules`, `content`, `session`, `validation` e `adapters::cli` sem quebrar a fronteira core-first.
- Validar o caminho minimo com regras deterministicas, replay/logs iniciais, criacao de personagem e combate minimo.
- Encerrar o milestone com uma base executavel e estudavel, ainda pequena o bastante para nao puxar `party`, balanceamento profundo, parser definitivo ou shell de produto.

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
*Last updated: 2026-04-05 after starting v1.1 Core Foundation*
