# Project Research Summary

**Project:** Ascend
**Domain:** backend C++ educacional para RPG por turnos
**Researched:** 2026-04-12
**Confidence:** MEDIUM

## Executive Summary

A pesquisa confirma que o projeto precisa nascer pequeno para preservar o valor educacional. O caminho mais seguro e tratar `Ascend` como um core C++ portavel com regras deterministicas, testes frequentes e bordas descartaveis, em vez de tentar montar um jogo completo desde o primeiro milestone.

Para o recorte atual, o elemento mais importante nao e "quantidade de sistemas", mas sim qualidade do contrato. O milestone presente deve produzir um documento canonico suficiente para viabilizar uma proxima milestone de implementacao do combate 1x1 com jogador, inimigo, atributos e habilidades, incluindo stack, estrategia de replay/UAT e limites claros de escopo.

## Key Findings

### Recommended Stack

O stack recomendado minimiza atrito: C++20 para o core, CMake + CTest para build/teste e sanitizers para feedback rapido. Bibliotecas adicionais devem entrar apenas quando houver dor real de ergonomia ou serializacao.

**Core technologies:**
- C++20: modelar dominio e regras com linguagem moderna, sem sofisticacao desnecessaria
- CMake + CTest: manter o loop de build e validacao simples e portavel
- Sanitizers: detectar falhas de memoria e comportamento indefinido cedo

### Expected Features

O que realmente precisa existir no slice inicial e pouco: turno legivel, atributos com impacto, habilidades com identidade minima e condicoes claras de inicio/fim de combate.

**Must have (table stakes):**
- Combate 1x1 por turnos - users expect this
- Atributos com impacto observavel - users expect this
- Habilidades com custo e efeito - users expect this
- Encerramento de combate e log observavel - users expect this

**Should have (competitive):**
- Replay textual deterministico - differentiator
- UAT guiado pelo estudante - differentiator

**Defer (v2+):**
- Party completa, exploracao, crafting, economia e demais sistemas amplos - nao essenciais para o milestone atual

### Architecture Approach

A arquitetura mais coerente e separar dominio, aplicacao/sessao, catalogos de conteudo e adapters. O primeiro contrato forte deve existir entre `CombatState`, regras de resolucao, definicoes de atributos/habilidades e eventos de replay.

**Major components:**
1. `CombatState` - guarda o estado minimo do duelo
2. `RuleServices` / `TurnResolver` - aplicam regras e invariantes
3. `Content Definitions` - definem jogador, inimigo e habilidades fora do runtime
4. `Replay/UAT Harness` - torna comportamento auditavel

### Critical Pitfalls

1. **Escopo explodido** - manter party, mapa e sistemas amplos fora do milestone
2. **Conteudo misturado com runtime** - separar catalogos de definicao do estado do combate
3. **Regras pouco observaveis** - exigir logs, replay e criterios de verificacao desde o inicio
4. **Overengineering** - preferir composicao e servicos de regra a frameworks proprios

## Implications for Roadmap

Based on research, suggested phase structure:

### Phase 1: Base documental do combate 1x1
**Rationale:** o repositorio ainda nao precisa de implementacao ampla; primeiro deve cristalizar recorte, contratos e criterios de validacao.
**Delivers:** visao, limites, contratos do dominio, stack, validacao e recomendacao da proxima milestone
**Addresses:** recorte 1x1, atributos, habilidades, replay/UAT
**Avoids:** escopo explosivo, overengineering e ambiguidade arquitetural

### Phase Ordering Rationale

- O projeto esta em milestone documental, entao a prioridade e fechar linguagem e contrato antes de codigo jogavel.
- Todos os requisitos v1 atuais cabem na mesma phase porque pertencem ao mesmo objetivo: preparar implementacao, nao dividir entrega funcional ao usuario final.
- O proximo milestone deve abrir a implementacao do vertical slice 1x1 sobre esse contrato congelado.

### Research Flags

Phases likely needing deeper research during planning:
- **Phase 1:** definicao do formato de replay/UAT se o time quiser fixtures externas ja no milestone atual

Phases with standard patterns (skip research-phase):
- **Phase 1:** modelagem basica de dominio, separacao de camadas e recorte de escopo

## Confidence Assessment

| Area | Confidence | Notes |
|------|------------|-------|
| Stack | MEDIUM | Ferramentas sao bem estabelecidas, mas algumas bibliotecas de apoio ainda sao opcionais |
| Features | HIGH | O proprio usuario definiu o recorte essencial |
| Architecture | MEDIUM | A direcao e clara, mas detalhes de implementacao ficam para a proxima milestone |
| Pitfalls | HIGH | Riscos de escopo e acoplamento sao evidentes no material atual |

**Overall confidence:** MEDIUM

### Gaps to Address

- Formato definitivo de replay/log - decidir durante o planejamento da proxima milestone de implementacao
- Quantos atributos entram efetivamente no primeiro slice jogavel - hoje o vocabulario existe, mas o subconjunto inicial ainda sera consolidado em planejamento

## Sources

### Primary (HIGH confidence)
- `Estruturação.md` - recorte da ideia ampla e sistemas candidatos
- Pedido do usuario nesta inicializacao - foco explicito em simplicidade, C++ e combate 1x1 com atributos/habilidades

### Secondary (MEDIUM confidence)
- `https://cmake.org/cmake/help/v3.30/guide/user-interaction/index.html` - stack de build/presets
- `https://cmake.org/cmake/help/v3.30/manual/ctest.1.html` - estrategia de execucao de testes
- `https://clang.llvm.org/docs/AddressSanitizer.html` - validacao por sanitizers

---
*Research completed: 2026-04-12*
*Ready for roadmap: yes*
