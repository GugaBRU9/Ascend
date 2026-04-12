# Ascend

## What This Is

Ascend e um backend C++ educacional, agnostico de plataforma, pensado para estudar modelagem de regras de RPG por turnos com foco em clareza e testabilidade.

Neste milestone inicial, o projeto nao implementa o jogo amplo descrito em `Estruturação.md`. O objetivo atual e transformar essa ideia-base em uma fundacao documental para um primeiro slice futuro de combate 1x1 entre jogador e inimigo, com enfase em atributos e habilidades.

## Core Value

O primeiro slice de combate 1x1 precisa ser simples o bastante para um estudante entender, testar, reproduzir e corrigir sem depender de UI, engine ou infraestrutura pesada.

## Requirements

### Validated

(None yet - ship to validate)

### Active

- [ ] Delimitar com clareza o slice alvo como combate 1x1 por turnos entre jogador e inimigo.
- [ ] Mapear contratos de dominio para atributos, habilidades, turno, resolucao e estado de runtime.
- [ ] Definir uma direcao de stack C++ moderna, portavel e apropriada para estudo.
- [ ] Especificar estrategia de testes, replay/log e UAT continuo orientado pelo proprio estudante.
- [ ] Registrar recortes, riscos e recomendacao explicita da proxima milestone de implementacao.

### Out of Scope

- Party com companheiros, IA tatica e controle multipersonagem - aumenta a superficie antes de o combate base estar estavel.
- Exploracao, mapa, quests, NPCs, crafting, economia e mundo persistente - sao sistemas do RPG amplo, nao do slice inicial.
- UI de produto, audio, rendering, assets ou integracao com engine - o milestone atual e core-first e media-agnostic.
- Multiplayer, networking, backend online e persistencia de produto - complexidade incompativel com o objetivo educacional atual.
- Balanceamento completo, dezenas de tipos de dano, status extensivos e buildcraft profundo - devem vir depois que os contratos basicos estiverem fechados.

## Context

- `Estruturação.md` registra uma visao ampla de RPG de turnos com muitos sistemas, mas o proprio usuario deixou explicito que o documento nao deve ser tratado como guia definitivo.
- O usuario quer implementar o projeto aos poucos, em phases, com UAT frequente para que o estudante consiga apontar problemas de estrutura e comportamento.
- O milestone atual e documental: antes de escrever o jogo, o repositorio precisa fechar visao, limites, modulos, contratos de mecanica, stack, validacao e proximo passo.
- A arquitetura alvo deve ser core-first, com separacao explicita entre dominio, catalogos de conteudo, servicos de sessao e adapters.
- Replay, logs e testes fazem parte da arquitetura desde o inicio, porque o objetivo principal e aprendizado com feedback observavel.

## Constraints

- **Tech stack**: Backend em C++ moderno com toolchain simples e portavel - alinha com o objetivo educacional e com o pedido explicito do usuario.
- **Scope**: Milestone atual documental, nao jogavel - protege o foco e evita implementar sistemas demais cedo demais.
- **Architecture**: Core desacoplado de UI, engine, rede, banco e persistencia de produto - preserva testabilidade e independencia de plataforma.
- **Validation**: Regras centrais precisam ser deterministicas e observaveis - sem isso, UAT e replay perdem valor.
- **Learning**: Solucoes simples e explicaveis tem prioridade sobre simulacao completa - o projeto e um metodo de aprendizado, nao uma producao comercial.

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Tratar `Estruturação.md` como fonte bruta de ideacao, nao como backlog executavel | O documento descreve um RPG muito maior que o recorte atual | - Pending |
| Reduzir o futuro slice implementavel para combate 1x1 por turnos | Permite aprender modelagem e validacao sem explodir o escopo | - Pending |
| Manter atributos e habilidades como foco mecanico inicial | O usuario marcou esses fatores como prioritarios para o primeiro combate | - Pending |
| Fechar contratos de dominio antes de qualquer adapter de UI ou engine | O projeto precisa nascer testavel e explicavel | - Pending |
| Tornar testes, logs e replay parte da arquitetura desde o inicio | O objetivo e que o estudante consiga verificar e diagnosticar o sistema constantemente | - Pending |
| Encerrar a Phase 1 com recomendacao explicita da proxima milestone | O milestone atual prepara implementacao futura, nao tenta entrega-la inteira | - Pending |

## Evolution

This document evolves at phase transitions and milestone boundaries.

**After each phase transition** (via `/gsd-transition`):
1. Requirements invalidated? -> Move to Out of Scope with reason
2. Requirements validated? -> Move to Validated with phase reference
3. New requirements emerged? -> Add to Active
4. Decisions to log? -> Add to Key Decisions
5. "What This Is" still accurate? -> Update if drifted

**After each milestone** (via `/gsd-complete-milestone`):
1. Full review of all sections
2. Core Value check -> still the right priority?
3. Audit Out of Scope -> reasons still valid?
4. Update Context with current state

---
*Last updated: 2026-04-12 after initialization*
