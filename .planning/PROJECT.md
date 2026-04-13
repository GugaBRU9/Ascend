# Ascend

## What This Is

Ascend e um backend C++ educacional, agnostico de plataforma, pensado para estudar modelagem de regras de RPG por turnos com foco em clareza e testabilidade.

Com o milestone `v1.0 Base Documental` arquivado, o projeto entra na `v1.1 Slice de Implementacao 1x1`: transformar os contratos ja publicados em um duelo textual/testavel entre `player` e `enemy`, preservando o foco em atributos, habilidades, observabilidade e reproducibilidade.

## Core Value

O primeiro slice de combate 1x1 precisa ser simples o bastante para um estudante entender, testar, reproduzir e corrigir sem depender de UI, engine ou infraestrutura pesada.

## Current Milestone: v1.1 Slice de Implementacao 1x1

**Goal:** Implementar o primeiro duelo 1x1 textual/testavel em C++ a partir dos contratos fechados na base documental, sem reabrir escopo para sistemas paralelos.

**Target features:**
- `CombatState` com estado minimo observavel para `player` e `enemy`.
- `TurnResolver` deterministico cobrindo iniciativa, custo, efeito e encerramento.
- catalogo inicial separado de runtime com atributos, habilidades e passivas canonicas.
- harness textual, log minimo e base de replay observavel suficiente para inspecionar um duelo simples.
- testes basicos cobrindo inicializacao, iniciativa, acao invalida e fim de combate.

## Requirements

### Validated

- [x] Phase 01 validou o milestone inicial como base documental para um backend C++ educacional, nao como implementacao jogavel - `v1.0`.
- [x] Phase 01 fechou o slice futuro como combate 1x1 entre `player` e `enemy`, com foco em atributos, habilidades e observabilidade - `v1.0`.
- [x] Phase 01 documentou contratos de runtime, turno, atributos, habilidades, log textual e fronteira de replay observavel - `v1.0`.
- [x] Phase 01 fixou a fundacao tecnica da `v1.1` em `C++20`, `CMake`, `CTest`, `clang-format`, `clang-tidy`, `AddressSanitizer` e `UBSan` - `v1.0`.
- [x] Phase 01 terminou com riscos, decisoes adiadas e recomendacao explicita da milestone `v1.1 Slice de Implementacao 1x1` - `v1.0`.
- [x] Phase 02 abriu um workspace compilavel em `C++20` com `CMake`, `CTest`, presets `dev` / `asan-ubsan` / `release` e tooling leve - `v1.1`.
- [x] Phase 02 materializou a separacao `domain` / `content` / `session` / `adapters` em targets, headers publicos e linkagem unidirecional - `v1.1`.
- [x] Phase 02 fechou a baseline automatizada com `CTest` e smoke test executado com sucesso em `dev` e `asan-ubsan` - `v1.1`.

### Active

- [ ] Implementar `CombatState` e o bootstrap minimo do duelo 1x1 usando os contratos documentados.
- [ ] Materializar o catalogo inicial separado de runtime com atributos, habilidades, passivas e prioridades canonicas.
- [ ] Implementar `TurnResolver`, harness textual, log minimo e base de replay observavel sem reabrir party, multiplayer ou UI final.
- [ ] Expandir a suite com testes basicos e saidas deterministicas para estudo, depuracao e reproducao do slice.

### Out of Scope

- Party com companheiros, IA tatica e controle multipersonagem - aumenta a superficie antes de o combate base estar estavel.
- Exploracao, mapa, quests, NPCs, crafting, economia e mundo persistente - sao sistemas do RPG amplo, nao do slice inicial.
- UI de produto, audio, rendering, assets ou integracao com engine - a `v1.1` continua core-first e media-agnostic.
- Multiplayer, networking, backend online e persistencia de produto - complexidade incompativel com o objetivo educacional atual.
- Balanceamento completo, dezenas de tipos de dano, status extensivos e buildcraft profundo - devem vir depois que os contratos basicos estiverem executaveis e validados.

## Context

- `Estruturação.md` registra uma visao ampla de RPG de turnos com muitos sistemas, mas nao deve ser tratado como backlog executavel.
- O projeto acabou de arquivar o milestone documental e agora parte dos contratos publicados em `README.md` e `docs/`.
- A implementacao atual deve respeitar os limites de `docs/combat-1x1/*.md`, `docs/engineering/backend-cpp-foundation.md` e `docs/roadmap/v1.1-slice-de-implementacao-1x1.md`.
- A arquitetura alvo continua core-first, com separacao explicita entre dominio, catalogos de conteudo, servicos de sessao e adapters.
- Replay, logs e testes fazem parte da arquitetura desde o inicio, porque o objetivo principal e aprendizado com feedback observavel.

## Constraints

- **Tech stack**: `C++20`, `CMake`, `CTest`, `clang-format`, `clang-tidy`, `AddressSanitizer` e `UBSan` - baseline pequena, portavel e alinhada ao contrato documental.
- **Scope**: milestone atual implementa apenas o slice 1x1 textual/testavel - protege o foco e impede reabrir sistemas nao validados.
- **Architecture**: core desacoplado de UI, engine, rede, banco e persistencia de produto - preserva testabilidade e independencia de plataforma.
- **Validation**: regras centrais precisam ser deterministicas e observaveis por testes e saida textual - sem isso, UAT e replay perdem valor.
- **Learning**: solucoes simples e explicaveis tem prioridade sobre simulacao completa - o projeto e um metodo de aprendizado, nao uma producao comercial.

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Tratar `Estruturação.md` como fonte bruta de ideacao, nao como backlog executavel | O documento descreve um RPG muito maior que o recorte atual | Validated in Phase 01 |
| Reduzir o futuro slice implementavel para combate 1x1 por turnos | Permite aprender modelagem e validacao sem explodir o escopo | Validated in Phase 01 |
| Manter atributos e habilidades como foco mecanico inicial | O usuario marcou esses fatores como prioritarios para o primeiro combate | Validated in Phase 01 |
| Fechar contratos de dominio antes de qualquer adapter de UI ou engine | O projeto precisa nascer testavel e explicavel | Validated in Phase 01 |
| Tornar testes, logs e replay parte da arquitetura desde o inicio | O objetivo e que o estudante consiga verificar e diagnosticar o sistema constantemente | Validated in Phase 01 |
| Continuar a numeracao de phases no novo milestone a partir da phase 2 | Preserva rastreabilidade historica entre milestones sem reiniciar indices | Validated in Phase 02 |
| Usar um workspace CMake unico com targets separados por modulo | Reduz carga cognitiva sem esconder fronteiras arquiteturais cedo demais | Validated in Phase 02 |
| Manter presets `dev`, `asan-ubsan` e `release` com postura `std`-first | Preserva um bootstrap didatico, portavel e facil de reproduzir | Validated in Phase 02 |
| Fechar a baseline inicial de teste com `CTest` e `assert` sem framework externo | Garante feedback real cedo sem adicionar dependencia prematura | Validated in Phase 02 |

## Current State

A `Phase 02` fechou o bootstrap da `v1.1 Slice de Implementacao 1x1` com workspace compilavel em `C++20`, presets `dev` / `asan-ubsan` / `release`, quatro modulos reais (`domain`, `content`, `session`, `adapters`) e um smoke test registrado em `CTest`. A proxima etapa passa a ser a `Phase 03`, que implementa `CombatState` e o catalogo inicial sobre essa base executavel.

O debt remanescente carregado do fechamento anterior continua processual: `01-VALIDATION.md` permaneceu em `status: draft` e `nyquist_compliant: false`, embora `01-REVIEW.md`, `01-VERIFICATION.md`, `01-UAT.md` e `01-SECURITY.md` tenham fechado a phase documental com review limpo, verificacao aprovada, `8 passed, 0 issues` e `threats_open: 0`.

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
*Last updated: 2026-04-13 after phase 2 completion*
