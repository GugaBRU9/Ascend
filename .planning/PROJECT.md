# Ascend

## What This Is

Ascend agora e um projeto de definicao de um backend de RPG em C++ focado em estudo, testes e reuso entre plataformas. Neste ciclo, o objetivo nao e entregar um jogo executavel nem escolher uma midia final; o objetivo e transformar os topicos centrais de `Estruturação.md` em uma base de arquitetura, dominio e mecanicas que possa depois ser implementada para mesa, mobile, web, app ou console.

O produto imediato deste milestone e documental. Ao final, o estudante deve ter um guia claro para saber o que implementar, como separar responsabilidades e quais decisoes ainda precisam ser fechadas antes da proxima milestone de implementacao.

## Core Value

O nucleo de regras precisa ser compreensivel, testavel e adaptavel como classes, metodos e contratos C++ independentes de plataforma.

## Requirements

### Validated

- [x] Phase 01 validou Ascend como um backend C++ educacional e agnostico de plataforma, com milestone inicial puramente documental.
- [x] Phase 01 traduziu o rascunho em um guia canonico com modulos, tipos, fronteiras arquiteturais e contratos de regra rastreaveis.
- [x] Phase 01 fechou stack, estrategia de validacao e handoff para abrir a milestone 02 sem reabrir as decisoes de framing.

### Active

- [ ] Abrir a milestone 02 seguindo `01-HANDOFF.md` e a ordem `tipos -> regras -> criacao de personagem -> combate minimo`.
- [ ] Instalar a toolchain minima (`cmake`, `ctest`, `clang++`, `clang-tidy` e `ninja`) para sair da validacao puramente documental.
- [ ] Fechar o formato inicial do catalogo, o loader minimo e a granularidade inicial de replay/logs sem reabrir o recorte da fase 01.

### Out of Scope

- Implementar gameplay, interface, renderizacao ou qualquer shell de produto neste milestone - o foco atual e documentacao e decisao.
- Escolher plataforma final, engine, framework de UI ou formato de entrega ao usuario - o core deve nascer desacoplado dessas decisoes.
- Fechar todos os detalhes de conteudo, balanceamento e escala do mundo agora - primeiro precisamos de um modelo consistente do sistema.
- Comecar por save system, multiplayer, networking, economia profunda ou pipelines de deploy - esses temas nao reduzem o risco principal deste ciclo.

## Context

- `Estruturação.md` concentra uma ideia ampla de RPG com combate em turnos, progressao profunda, party, atributos, habilidades, itens, quests, NPCs, crafting, economia, mapa em nos e persistencia.
- A intencao atual mudou: em vez de desenhar um jogo preso a uma plataforma, o projeto quer extrair o que e core e reescrever isso como um backend C++ adaptavel a multiplas midias.
- O trabalho precisa servir de estudo para um estudante de Ciencia da Computacao. Isso favorece arquitetura explicita, nomes claros, invariantes documentadas, fluxo deterministico e validacao cedo.
- A primeira fase deve ser uma fase de decisoes. Ela precisa produzir arquivos simples e diretos que definam tanto o que implementar quanto como implementar.
- Ao fim da fase 1, o esperado nao e iniciar codigo sem criterio; o esperado e sair com uma proposta madura para abrir a proxima milestone, dedicada ao recorte da implementacao.
- Nem todo topico de `Estruturação.md` precisa entrar no primeiro recorte de implementacao. O milestone atual deve separar core, extensoes futuras e dependencias de plataforma.

## Constraints

- **Linguagem**: Backend em C++ - a documentacao precisa preparar um projeto estudavel nessa stack.
- **Arquitetura**: Base agnostica de plataforma - regras, estado e catalogos nao podem depender de UI, engine ou ambiente de execucao especifico.
- **Produto**: Milestone atual documental - a entrega e um guia operacional, nao um jogo funcional.
- **Didatica**: Material voltado a estudo - o design deve privilegiar clareza, modularidade e testabilidade sobre sofisticacao prematura.
- **Escopo**: Phase 1 orientada a decisoes - pendencias, cortes e principios de implementacao precisam ficar explicitos.
- **Qualidade**: A documentacao precisa ser rastreavel - um leitor deve conseguir converter o plano em backlog tecnico sem adivinhar lacunas centrais.

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| O milestone atual sera documental, nao implementacional | O usuario pediu uma base que instrua a criacao futura do projeto antes de qualquer codigo | Validated in Phase 01 (`01-GUIA-CANONICO.md`) |
| O core sera modelado como backend C++ agnostico de plataforma | A mesma base deve poder sustentar mesa, mobile, web, app e console depois | Validated in Phase 01 (`01-GUIA-CANONICO.md`) |
| `Estruturação.md` sera tratada como materia-prima, nao como contrato direto de implementacao | O arquivo mistura mecanicas centrais, extensoes e decisoes ainda abertas | Validated in Phase 01 (`01-GUIA-CANONICO.md`) |
| A primeira fase deve encerrar com pendencias e proxima milestone sugerida | O usuario quer uma fase 1 mais reflexiva, que alinhe expectativa pedagogica e tecnica | Validated in Phase 01 (`01-HANDOFF.md`) |
| Sistemas de produto e adaptadores ficam explicitamente adiados | Sem esse corte, o projeto corre o risco de confundir arquitetura de dominio com arquitetura de entrega | Validated in Phase 01 (`01-GUIA-CANONICO.md`) |

## Current State

Phase 01 foi concluida e verificada. O repositorio agora tem um guia canonico fechado em `01-GUIA-CANONICO.md` e um handoff executavel em `01-HANDOFF.md` para abrir a milestone 02 com escopo, ordem didatica e guardrails explicitos.

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
*Last updated: 2026-04-03 after phase 01 completion*
