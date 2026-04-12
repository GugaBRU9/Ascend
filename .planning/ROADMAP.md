# Roadmap: Ascend

## Overview

O milestone atual nao implementa o jogo. Ele fecha a base documental que permitira, no milestone seguinte, implementar um combate 1x1 simples em C++ com jogador, inimigo, atributos e habilidades sob validacao constante.

## Milestones

- [IN PROGRESS] **v1.0 Base Documental** - Phase 1 (milestone atual)
- [PLANNED] **v1.1 Slice de Implementacao 1x1** - proxima milestone recomendada apos a conclusao da fase documental

## v1.0 Base Documental

## Phases

**Phase Numbering:**
- Integer phases (1, 2, 3): Planned milestone work
- Decimal phases (2.1, 2.2): Urgent insertions (marked with INSERTED)

Decimal phases appear between their surrounding integers in numeric order.

- [ ] **Phase 1: Base Documental do Combate 1x1** - Fechar recorte, contratos, stack, validacao e ponte para a proxima milestone

## Phase Details

### Phase 1: Base Documental do Combate 1x1
**Goal**: Transformar a ideia ampla do RPG em uma base documental coerente para um backend C++ educacional que possa, no milestone seguinte, implementar um primeiro combate 1x1 com atributos e habilidades.
**Depends on**: Nothing (first phase)
**Requirements**: [SCOPE-01, SCOPE-02, SCOPE-03, SCOPE-04, COMBAT-01, COMBAT-02, COMBAT-03, COMBAT-04, ATTR-01, ATTR-02, ATTR-03, ATTR-04, ARCH-01, ARCH-02, ARCH-03, ARCH-04, VAL-01, VAL-02, VAL-03, VAL-04]
**UI hint**: no
**Success Criteria** (what must be TRUE):
  1. O repositorio descreve com clareza o recorte atual e o slice futuro de combate 1x1 sem confundir milestone documental com implementacao.
  2. Os contratos de turno, atributos, habilidades, logs/replay e estado de runtime estao explicados por entradas, saidas e invariantes observaveis.
  3. A arquitetura alvo separa dominio, conteudo, sessao e adapters sem acoplamento a UI, engine, rede ou persistencia.
  4. A estrategia de stack, testes, sanitizers e UAT foi definida de forma compativel com um projeto C++ educacional simples.
  5. A fase termina com riscos, pendencias e recomendacao explicita da milestone `v1.1 Slice de Implementacao 1x1`.
**Plans**: 4 plans

Plans:
- [x] 01-01: Consolidar visao, recortes e glossario do slice 1x1
- [ ] 01-02: Definir dominio do combate, fluxo de turno e invariantes
- [ ] 01-03: Fechar contratos de atributos, habilidades, replay e UAT
- [ ] 01-04: Fechar stack, validacao, riscos e recomendacao do proximo milestone

## Progress

**Execution Order:**
Phases execute in numeric order: 1

| Phase | Plans Complete | Status | Completed |
|-------|----------------|--------|-----------|
| 1. Base Documental do Combate 1x1 | 1/4 | In Progress | - |
