# Ascend

## What This Is

Ascend e um backend C++ educacional, agnostico de plataforma, pensado para estudar modelagem de regras de RPG por turnos com foco em clareza e testabilidade.

O milestone `v1.0 Base Documental`, arquivado em 2026-04-13, nao implementou o jogo amplo descrito em `Estruturação.md`. Ele transformou essa ideia-base em uma fundacao documental para o primeiro slice futuro de combate 1x1 entre jogador e inimigo, com enfase em atributos, habilidades e observabilidade.

## Core Value

O primeiro slice de combate 1x1 precisa ser simples o bastante para um estudante entender, testar, reproduzir e corrigir sem depender de UI, engine ou infraestrutura pesada.

## Requirements

### Validated

- [x] Phase 01 validou o milestone atual como base documental para um backend C++ educacional, nao como implementacao jogavel - `v1.0`.
- [x] Phase 01 fechou o slice futuro como combate 1x1 entre `player` e `enemy`, com foco em atributos, habilidades e observabilidade - `v1.0`.
- [x] Phase 01 documentou contratos de runtime, turno, atributos, habilidades, log textual e fronteira de replay observavel - `v1.0`.
- [x] Phase 01 fixou a fundacao tecnica da `v1.1` em `C++20`, `CMake`, `CTest`, `clang-format`, `clang-tidy`, `AddressSanitizer` e `UBSan` - `v1.0`.
- [x] Phase 01 terminou com riscos, decisoes adiadas e recomendacao explicita da milestone `v1.1 Slice de Implementacao 1x1` - `v1.0`.

### Active

- [ ] Recriar `.planning/REQUIREMENTS.md` para a `v1.1 Slice de Implementacao 1x1`, usando `docs/roadmap/v1.1-slice-de-implementacao-1x1.md` como contrato inicial.
- [ ] Implementar o primeiro slice C++ com `CombatState`, `TurnResolver`, catalogo inicial, harness textual e testes basicos.
- [ ] Materializar o log textual e a base minima de replay observavel sem reabrir o escopo documental da phase 1.

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
| Tratar `Estruturação.md` como fonte bruta de ideacao, nao como backlog executavel | O documento descreve um RPG muito maior que o recorte atual | Validated in Phase 01 |
| Reduzir o futuro slice implementavel para combate 1x1 por turnos | Permite aprender modelagem e validacao sem explodir o escopo | Validated in Phase 01 |
| Manter atributos e habilidades como foco mecanico inicial | O usuario marcou esses fatores como prioritarios para o primeiro combate | Validated in Phase 01 |
| Fechar contratos de dominio antes de qualquer adapter de UI ou engine | O projeto precisa nascer testavel e explicavel | Validated in Phase 01 |
| Tornar testes, logs e replay parte da arquitetura desde o inicio | O objetivo e que o estudante consiga verificar e diagnosticar o sistema constantemente | Validated in Phase 01 |
| Encerrar a Phase 1 com recomendacao explicita da proxima milestone | O milestone atual prepara implementacao futura, nao tenta entrega-la inteira | Validated in Phase 01 |

## Current State

O milestone `v1.0 Base Documental` foi arquivado. O repositorio agora tem uma base documental publica em `README.md` e `docs/`, cobrindo framing, contratos de combate 1x1, atributos, habilidades, observabilidade, stack C++ e a ponte para a milestone `v1.1 Slice de Implementacao 1x1`.

O debt remanescente aceito neste fechamento e processual: `01-VALIDATION.md` continua em `status: draft` e `nyquist_compliant: false`, embora `01-REVIEW.md`, `01-VERIFICATION.md`, `01-UAT.md` e `01-SECURITY.md` tenham fechado a phase com review limpo, verificacao aprovada, `8 passed, 0 issues` e `threats_open: 0`.

## Next Milestone Goals

- Reabrir os artifacts ativos de planejamento para a `v1.1` com requirements fresh e a primeira phase implementavel.
- Materializar `CombatState`, `TurnResolver`, catalogo inicial, harness textual e testes basicos sem reabrir multiplayer, party, UI final ou persistencia online.
- Preservar a fronteira de observabilidade definida em `docs/combat-1x1/observability.md` enquanto o slice passa de documental para executavel.

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
*Last updated: 2026-04-13 after v1.0 milestone archival*
