# Roadmap: Ascend

## Overview

Ascend vai usar este milestone para sair de uma ideia ampla de RPG e chegar a uma base documental acionavel para um backend C++ agnostico de plataforma. O foco aqui nao e implementar combate, quests ou adaptadores reais; e fechar visao, arquitetura, recorte do core e pendencias de modo que a proxima milestone consiga definir implementacao com muito menos ambiguidade.

## Phases

**Phase Numbering:**
- Integer phases (1, 2, 3): Planned milestone work
- Decimal phases (2.1, 2.2): Urgent insertions (marked with INSERTED)

- [ ] **Phase 1: Guia Canonico de Implementacao** - definir escopo, modulos, contratos, validacao e pendencias para abrir a milestone de implementacao

## Phase Details

### Phase 1: Guia Canonico de Implementacao
**Goal**: Fechar um guia completo, direto e didatico que transforme o rascunho atual em base de implementacao C++ agnostica de plataforma.
**Depends on**: Nothing (first phase)
**Requirements**: FRAM-01, FRAM-02, DOMN-01, DOMN-02, DOMN-03, DOMN-04, ARCH-01, ARCH-02, ARCH-03, EDUC-01, EDUC-02, EDUC-03, HNDF-01, HNDF-02
**Canonical refs**: Estruturação.md, .planning/PROJECT.md, .planning/REQUIREMENTS.md, .planning/research/SUMMARY.md
**UI hint**: no
**Success Criteria** (what must be TRUE):
  1. O projeto define claramente o que este milestone faz e o que nao faz.
  2. Os sistemas centrais do rascunho sao reorganizados em modulos, classes, value objects, servicos e contratos de regra.
  3. O leitor entende como o futuro backend vai separar dominio, catalogo de conteudo, sessao e adaptadores.
  4. O estudante recebe uma orientacao objetiva de stack, validacao e ordem de aprendizado para a implementacao.
  5. As pendencias e cortes para a proxima milestone ficam registradas sem ambiguidades.
**Plans**: 4 plans

Plans:
- [x] 01-01: Consolidar visao, publico, cortes de escopo e linguagem do milestone
- [x] 01-02: Mapear sistemas core para modulos, classes e contratos agnosticos de plataforma
- [x] 01-03: Definir arquitetura C++, fluxo de build/teste e estrategia de validacao educativa
- [ ] 01-04: Registrar pendencias, riscos e proposta da proxima milestone de implementacao

## Progress

**Execution Order:**
Phases execute in numeric order: 1

| Phase | Plans Complete | Status | Completed |
|-------|----------------|--------|-----------|
| 1. Guia Canonico de Implementacao | 3/4 | In Progress|  |
