# Roadmap: Ascend

## Overview

O roadmap ativo saiu da base documental e passa a guiar a `v1.1 Slice de Implementacao 1x1`. O foco agora e materializar um duelo textual/testavel em C++ com observabilidade suficiente para estudo, depuracao e reproducao, sem reabrir escopo para sistemas paralelos do RPG amplo.

## Milestones

- [SHIPPED] **v1.0 Base Documental** - 1 phase, 4 plans, 11 tasks, arquivado em 2026-04-13 ([roadmap](./milestones/v1.0-ROADMAP.md), [requirements](./milestones/v1.0-REQUIREMENTS.md), [audit](./milestones/v1.0-MILESTONE-AUDIT.md))
- [ACTIVE] **v1.1 Slice de Implementacao 1x1** - implementar o primeiro duelo 1x1 textual/testavel em C++

## v1.1 Slice de Implementacao 1x1

## Phases

**Phase Numbering:**
- Integer phases continuam a contagem historica do projeto.
- O milestone `v1.1` comeca na `Phase 2` porque `v1.0` terminou na `Phase 1`.
- Decimal phases continuam reservadas para insercoes urgentes entre fases inteiras.

- [x] **Phase 2: Bootstrap da Fundacao C++ 1x1** - abrir o workspace compilavel com toolchain, modulos e baseline de validacao (complete 2026-04-13)
- [ ] **Phase 3: CombatState e Catalogo Inicial** - materializar runtime minimo e conteudo canonico separados entre si
- [ ] **Phase 4: TurnResolver e Harness Textual** - fazer o duelo rodar com ordem deterministica, rejeicao de acao invalida e log minimo
- [ ] **Phase 5: Replay Observavel e Testes Basicos** - fechar evidencias textuais, suite basica de testes e reproducao do duelo simples

## Phase Details

### Phase 2: Bootstrap da Fundacao C++ 1x1
**Goal**: Criar a fundacao compilavel do slice 1x1 em `C++20`, com `CMake`, `CTest`, sanitizers e separacao inicial entre `domain`, `content`, `session` e `adapters`.
**Depends on**: Phase 1
**Requirements**: [ARCH-05, ARCH-06, VAL-05]
**UI hint**: no
**Success Criteria** (what must be TRUE):
  1. O estudante consegue configurar e compilar o workspace do slice 1x1 com `CMake`.
  2. A estrutura do codigo explicita a separacao `domain` / `content` / `session` / `adapters`.
  3. Existe uma baseline de verificacao acionavel com `CTest` e configuracoes de debug/teste com sanitizers.
**Plans**: 3 plans

Plans:
- [x] 02-01: Bootstrap de build, presets e alvos basicos em C++20
- [x] 02-02: Estruturar modulos `domain`, `content`, `session` e `adapters`
- [x] 02-03: Fechar baseline de testes e configuracoes instrumentadas

### Phase 3: CombatState e Catalogo Inicial
**Goal**: Implementar o estado minimo do duelo 1x1 e o catalogo inicial de jogador/inimigo sem misturar conteudo estatico com runtime mutavel.
**Depends on**: Phase 2
**Requirements**: [COMBAT-05, COMBAT-06, ATTR-05]
**UI hint**: no
**Success Criteria** (what must be TRUE):
  1. `CombatState` expone os campos minimos de runtime documentados para `player` e `enemy`.
  2. O duelo inicial pode ser montado a partir de um catalogo separado contendo atributos, habilidades e passivas canonicas.
  3. O estado inicial do combate e observavel por testes ou harness antes da primeira resolucao de turno.
**Plans**: 3 plans

Plans:
- [ ] 03-01: Implementar tipos de runtime do duelo e invariantes basicas
- [ ] 03-02: Materializar catalogo inicial de atores, habilidades e passivas
- [ ] 03-03: Implementar bootstrap do duelo com `player` e `enemy`

### Phase 4: TurnResolver e Harness Textual
**Goal**: Fazer o combate avancar de forma deterministica, observavel e textual, cobrindo iniciativa, validacao de acao, efeitos minimos e encerramento.
**Depends on**: Phase 3
**Requirements**: [COMBAT-07, COMBAT-08, COMBAT-09, VAL-06, VAL-07]
**UI hint**: no
**Success Criteria** (what must be TRUE):
  1. `TurnResolver` respeita a ordem por `AGI`, `player` e `actor_id`.
  2. Acao com recurso insuficiente gera `action_rejected_insufficient_resource`, nao consome recurso e encerra a vez.
  3. O harness textual executa um duelo simples ate o fim e registra eventos/logs minimos coerentes com o contrato documental.
**Plans**: 3 plans

Plans:
- [ ] 04-01: Implementar ordem de turno e resolucao deterministica
- [ ] 04-02: Cobrir rejeicao de acao invalida, prioridades do inimigo e fim de combate
- [ ] 04-03: Expor harness textual e `Combat Log` minimo do duelo

### Phase 5: Replay Observavel e Testes Basicos
**Goal**: Fechar o envelope minimo de observabilidade do slice e uma suite basica de verificacao que sustente reproducao e depuracao.
**Depends on**: Phase 4
**Requirements**: [VAL-08, VAL-09]
**UI hint**: no
**Success Criteria** (what must be TRUE):
  1. Um duelo simples pode ser inspecionado ou reconstituido a partir dos eventos e logs produzidos.
  2. A suite automatizada cobre inicializacao, iniciativa, acao invalida por recurso insuficiente e encerramento do combate.
  3. O estudante consegue usar harness e testes como referencia para reproduzir e corrigir o comportamento do slice.
**Plans**: 2 plans

Plans:
- [ ] 05-01: Fechar envelope minimo de replay observavel e snapshots do duelo
- [ ] 05-02: Adicionar testes basicos e checks de reproducao do slice

## Progress

**Execution Order:**
Phases execute in numeric order: 2 -> 3 -> 4 -> 5

| Phase | Plans Complete | Status | Completed |
|-------|----------------|--------|-----------|
| 2. Bootstrap da Fundacao C++ 1x1 | 3/3 | Complete | 2026-04-13 |
| 3. CombatState e Catalogo Inicial | 0/3 | Not started | - |
| 4. TurnResolver e Harness Textual | 0/3 | Not started | - |
| 5. Replay Observavel e Testes Basicos | 0/2 | Not started | - |

## Archived Details

<details>
<summary>[SHIPPED] v1.0 Base Documental - detalhes arquivados</summary>

- [x] **Phase 1: Base Documental do Combate 1x1** - 4/4 plans completos, com artifacts executados movidos para `./milestones/v1.0-phases/`.
- Debt carregado no arquivamento: `01-VALIDATION.md` permanece parcial e ainda nao foi promovido para `nyquist_compliant: true`.

</details>
