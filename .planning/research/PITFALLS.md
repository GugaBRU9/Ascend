# Pitfalls Research

**Domain:** projeto educacional de combate por turnos em C++
**Researched:** 2026-04-12
**Confidence:** MEDIUM

## Critical Pitfalls

### Pitfall 1: Tentar implementar o RPG inteiro desde o primeiro slice

**What goes wrong:**
O projeto vira um amontoado de sistemas incompletos e o estudante deixa de aprender o essencial.

**Why it happens:**
`Estruturação.md` tem muitos subsistemas e todos parecem importantes.

**How to avoid:**
Congelar o recorte em combate 1x1, atributos e habilidades ate que esse nucleo esteja documentado, implementado e validado.

**Warning signs:**
Roadmap incluindo party, exploracao, economia ou save antes de existir um duelo reproduzivel.

**Phase to address:**
Phase 1

---

### Pitfall 2: Misturar conteudo com estado de runtime

**What goes wrong:**
Fica dificil entender o que e definicao fixa e o que mudou durante o combate.

**Why it happens:**
Projetos pequenos tentam "ser praticos" e colocam tudo no mesmo objeto.

**How to avoid:**
Separar catalogos de atributos/habilidades/inimigos do `CombatState` e dos eventos de turno.

**Warning signs:**
Mesma estrutura guardando base stats, HP atual, cooldown, descricao de skill e resultado de turno.

**Phase to address:**
Phase 1

---

### Pitfall 3: Regras pouco observaveis

**What goes wrong:**
O estudante nao consegue dizer por que um ataque causou determinado resultado.

**Why it happens:**
Logs e replay sao tratados como detalhe posterior.

**How to avoid:**
Exigir desde ja entradas, saidas e invariantes visiveis para cada regra central.

**Warning signs:**
Documentos descrevendo apenas "sistema de combate" sem eventos, snapshots ou criterios de verificacao.

**Phase to address:**
Phase 1

---

### Pitfall 4: Overengineering arquitetural cedo demais

**What goes wrong:**
Abstracoes genericas escondem o dominio real e tornam o estudo mais confuso.

**Why it happens:**
C++ convida a desenhar frameworks proprios antes de existir um caso real.

**How to avoid:**
Modelar primeiro o vocabulario do dominio e usar composicao simples.

**Warning signs:**
Framework de ECS, event bus generico ou hierarquia profunda aparecendo antes do primeiro turno 1x1.

**Phase to address:**
Phase 1

## Technical Debt Patterns

| Shortcut | Immediate Benefit | Long-term Cost | When Acceptable |
|----------|-------------------|----------------|-----------------|
| Colocar toda regra em uma funcao unica de combate | Implementa rapido no primeiro dia | Dificulta evolucao, teste e replay | Apenas em rascunhos descartaveis fora do repositorio principal |
| Usar numeros magicos em habilidades | Menos estrutura inicial | Fica impossivel explicar balanceamento e UAT | Nunca no contrato canonico |
| Pular UAT ate "ter algo visual" | Menos trabalho no curto prazo | O estudante perde feedback continuo | Nunca, porque conflita com o objetivo do projeto |

## Integration Gotchas

| Integration | Common Mistake | Correct Approach |
|-------------|----------------|------------------|
| CLI futura | Acoplar parser direto nas regras | Criar comandos simples e adapter fino |
| Replay | Registrar texto insuficiente para reexecucao | Definir eventos com dados minimos e ordenacao clara |
| Bibliotecas de terceiros | Introduzir dependencia antes de haver dor real | Adicionar apenas com criterio e justificativa escrita |

## Performance Traps

| Trap | Symptoms | Prevention | When It Breaks |
|------|----------|------------|----------------|
| Otimizar microperformance cedo | Codigo obscuro sem ganho real | Priorizar clareza e testes antes de benchmark | Quase sempre antes do primeiro slice |
| Serializar demais em toda chamada | Logs gigantes e lentos | Registrar somente eventos de fronteira relevantes | Quando o replay crescer alem do necessario |
| Copiar estado inteiro sem criterio | API fica verbosa e lenta | Usar snapshots pequenos e value objects claros | Quando mais sistemas forem adicionados |

## Security Mistakes

| Mistake | Risk | Prevention |
|---------|------|------------|
| Confiar em dados externos sem validacao | Fixtures ou catalogos inconsistentes contaminam o core | Validar entrada de conteudo e comandos |
| Rodar sanitizers como se fossem runtime de producao | Dependencia indevida em instrumentacao de debug | Limitar sanitizers ao fluxo de teste |
| Expor caminhos internos em mensagens futuras de adapter | Vazamento de detalhe de infraestrutura | Normalizar erros na borda do sistema |

## UX Pitfalls

| Pitfall | User Impact | Better Approach |
|---------|-------------|-----------------|
| Documentacao abstrata demais | O estudante nao consegue imaginar o combate | Usar exemplos concretos de turno e efeito |
| Muitas mecanicas ao mesmo tempo | A aprendizagem vira confusa | Introduzir poucas regras observaveis e evoluir depois |
| UAT sem roteiro | Feedback vira opiniatico e pouco acionavel | Definir perguntas e checks por phase |

## "Looks Done But Isn't" Checklist

- [ ] **Slice 1x1:** ainda falta declarar condicoes de vitoria, derrota e encerramento
- [ ] **Atributos:** ainda falta explicar onde cada atributo influencia o combate
- [ ] **Habilidades:** ainda falta registrar custo, alvo, efeito e restricoes
- [ ] **Replay/UAT:** ainda falta definir quais eventos precisam ser observados

## Recovery Strategies

| Pitfall | Recovery Cost | Recovery Steps |
|---------|---------------|----------------|
| Escopo explodiu | HIGH | Cortar sistemas nao essenciais, atualizar requisitos e roadmap |
| Conteudo misturado ao runtime | MEDIUM | Separar definicoes estaticas, revisar contratos e ajustar exemplos |
| Regra pouco observavel | MEDIUM | Adicionar eventos, logs e casos de teste/replay antes de seguir |

## Pitfall-to-Phase Mapping

| Pitfall | Prevention Phase | Verification |
|---------|------------------|--------------|
| Escopo explodido | Phase 1 | Out of Scope e roadmap permanecem centrados em 1x1 |
| Conteudo misturado ao runtime | Phase 1 | Arquitetura separa `content` de `domain` |
| Regras pouco observaveis | Phase 1 | Estrategia de replay/UAT aparece nos artefatos |
| Overengineering | Phase 1 | Stack e arquitetura privilegiam composicao e regras claras |

## Sources

- `Estruturação.md` - lista de sistemas futuros que precisam ser recortados
- `PROJECT.md` - direcao arquitetural e restricoes do milestone
- Experiencia conhecida de projetos pequenos que escalam escopo cedo demais

---
*Pitfalls research for: projeto educacional de combate por turnos em C++*
*Researched: 2026-04-12*
