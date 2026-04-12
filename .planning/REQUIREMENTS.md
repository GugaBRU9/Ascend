# Requirements: Ascend

**Defined:** 2026-04-12
**Core Value:** O primeiro slice de combate 1x1 precisa ser simples o bastante para um estudante entender, testar, reproduzir e corrigir sem depender de UI, engine ou infraestrutura pesada.

## v1 Requirements

### Scope & Vision

- [x] **SCOPE-01**: Documento define o milestone atual como base documental para um backend C++ educacional, nao como implementacao jogavel completa.
- [x] **SCOPE-02**: Documento delimita o primeiro slice futuro como combate 1x1 por turnos entre um jogador e um inimigo.
- [x] **SCOPE-03**: Documento registra atributos e habilidades como foco mecanico inicial do slice.
- [x] **SCOPE-04**: Documento explicita os principais sistemas fora de escopo do milestone atual e do primeiro slice jogavel.

### Combat Domain

- [x] **COMBAT-01**: O projeto descreve os atores minimos do duelo e o estado de runtime necessario para um combate 1x1.
- [x] **COMBAT-02**: O projeto define a ordem de turno, resolucao de acao e condicoes de encerramento de forma deterministica.
- [x] **COMBAT-03**: O projeto explicita entradas, saidas e invariantes observaveis das regras centrais do combate.
- [ ] **COMBAT-04**: O projeto define os eventos/logs minimos necessarios para replay e diagnostico futuro.

### Attributes & Skills

- [ ] **ATTR-01**: O projeto define um conjunto inicial de atributos com efeito claro no combate 1x1.
- [ ] **ATTR-02**: O projeto descreve habilidades com pelo menos custo, alvo, efeito e restricoes suficientes para o slice inicial.
- [ ] **ATTR-03**: O projeto especifica como atributos e habilidades se relacionam sem exigir balanceamento completo do RPG.
- [ ] **ATTR-04**: O projeto registra simplificacoes assumidas para manter a curva de aprendizado controlada.

### Architecture & Stack

- [ ] **ARCH-01**: A arquitetura alvo separa dominio, catalogos de conteudo, servicos de sessao e adapters.
- [ ] **ARCH-02**: O projeto define stack de build, teste e analise estatica adequada a C++ moderno e portavel.
- [ ] **ARCH-03**: O projeto define estrategia de testes com enfase em determinismo, unit tests e validacao incremental.
- [ ] **ARCH-04**: O projeto documenta criterios para introducao ou rejeicao de dependencias externas.

### Validation & Continuity

- [ ] **VAL-01**: O projeto define como UAT sera conduzido pelo estudante ao final de cada phase relevante.
- [x] **VAL-02**: O roadmap atual cobre 100% dos requisitos v1 sem depender de UI, engine ou infraestrutura online.
- [ ] **VAL-03**: O estado do projeto registra fase atual, foco, riscos e proximo passo de trabalho.
- [ ] **VAL-04**: A Phase 1 termina com recomendacao explicita de abrir a proxima milestone de implementacao.

## v2 Requirements

### Implementation Slice

- **IMPL-01**: O estudante consegue executar um combate 1x1 jogavel em interface textual ou harness equivalente.
- **IMPL-02**: O jogador consegue escolher entre ataque basico e um conjunto minimo de habilidades.
- **IMPL-03**: O inimigo possui comportamento simples e previsivel o bastante para testes e UAT.
- **IMPL-04**: O combate produz replay/log suficiente para reproduzir resultados.

### Expanded Systems

- **EXP-01**: O projeto introduz progressao simples sem depender de sistema completo de party.
- **EXP-02**: O projeto adiciona mais tipos de habilidade, inimigos ou efeitos apos o slice 1x1 estabilizar.
- **EXP-03**: O projeto avalia status adicionais, recursos extras e catalogos externos depois da validacao do core.

## Out of Scope

| Feature | Reason |
|---------|--------|
| Party completa e companheiros | Escopo excessivo para um slice educacional inicial |
| Exploracao, quests, crafting, economia e mundo | Nao contribuem diretamente para validar o combate base 1x1 |
| UI final, audio, rendering e assets | O milestone atual e documental e core-first |
| Multiplayer, networking e persistencia online | Complexidade alta e fora do objetivo de aprendizado atual |
| Balanceamento completo do RPG descrito em `Estruturação.md` | O recorte atual prioriza contratos e compreensao, nao volume de conteudo |

## Traceability

| Requirement | Phase | Status |
|-------------|-------|--------|
| SCOPE-01 | Phase 1 | Complete |
| SCOPE-02 | Phase 1 | Complete |
| SCOPE-03 | Phase 1 | Complete |
| SCOPE-04 | Phase 1 | Complete |
| COMBAT-01 | Phase 1 | Complete |
| COMBAT-02 | Phase 1 | Complete |
| COMBAT-03 | Phase 1 | Complete |
| COMBAT-04 | Phase 1 | Pending |
| ATTR-01 | Phase 1 | Pending |
| ATTR-02 | Phase 1 | Pending |
| ATTR-03 | Phase 1 | Pending |
| ATTR-04 | Phase 1 | Pending |
| ARCH-01 | Phase 1 | Pending |
| ARCH-02 | Phase 1 | Pending |
| ARCH-03 | Phase 1 | Pending |
| ARCH-04 | Phase 1 | Pending |
| VAL-01 | Phase 1 | Pending |
| VAL-02 | Phase 1 | Complete |
| VAL-03 | Phase 1 | Pending |
| VAL-04 | Phase 1 | Pending |

**Coverage:**
- v1 requirements: 20 total
- Mapped to phases: 20
- Unmapped: 0 yes

---
*Requirements defined: 2026-04-12*
*Last updated: 2026-04-12 after initial definition*
