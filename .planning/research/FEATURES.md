# Feature Research

**Domain:** slice inicial de RPG por turnos 1x1
**Researched:** 2026-04-12
**Confidence:** MEDIUM

## Feature Landscape

### Table Stakes (Users Expect These)

| Feature | Why Expected | Complexity | Notes |
|---------|--------------|------------|-------|
| Turnos claros com ordem de acao previsivel | Sem isso o combate nao e legivel nem ensinavel | LOW | Deve priorizar determinismo e texto observavel |
| Atributos com impacto real nas regras | O usuario explicitou atributos como foco do primeiro combate | LOW | Melhor com poucos efeitos bem definidos do que muitos modificadores |
| Habilidades com custo e efeito distinguiveis | Habilidades sem identidade viram apenas ataques com nomes diferentes | MEDIUM | O slice inicial precisa poucas habilidades, mas cada uma com papel claro |
| Vida, derrota e fim de combate | O combate precisa ter condicao de sucesso/falha observavel | LOW | Importante para testes, UAT e replay |

### Differentiators (Competitive Advantage)

| Feature | Value Proposition | Complexity | Notes |
|---------|-------------------|------------|-------|
| Replay textual deterministico do combate | Excelente para aprendizado e depuracao | MEDIUM | Diferencia o projeto como ferramenta didatica |
| UAT guiado pelo estudante ao fim de cada phase | Fecha o loop de aprendizado com evidencia do proprio usuario | LOW | Deve estar no workflow, nao so na implementacao |
| Separacao nitida entre conteudo e regra | Facilita evolucao futura sem reescrever o core | MEDIUM | Importante para a futura milestone de implementacao |

### Anti-Features (Commonly Requested, Often Problematic)

| Feature | Why Requested | Why Problematic | Alternative |
|---------|---------------|-----------------|-------------|
| Party completa com companheiros | Parece "mais RPG" desde o inicio | Multiplica IA, alvo, ordem de turno e gerenciamento cedo demais | Fechar 1x1 primeiro e usar NPCs/party apenas depois |
| Sistema completo de 11 tipos de dano e dezenas de status | Passa sensacao de profundidade imediata | Dificulta explicar e validar contratos basicos | Comecar com dano fisico e um subconjunto minimo de efeitos |
| Arvores de habilidade extensas logo no primeiro slice | Parece essencial para personalizacao | Introduz balanceamento e UI mental cedo demais | Usar poucas habilidades ativas/passivas com progressao futura registrada |

## Feature Dependencies

```text
Combate 1x1
    |-requires-> ordem de turno
    |-requires-> vida/derrota
    |-requires-> atributos
    `-requires-> habilidades

Replay/UAT
    `-requires-> resolucao deterministica

Evolucao futura de buildcraft
    `-enhances-> atributos + habilidades

Party completa
    --conflicts with early simplicity--> slice didatico inicial
```

### Dependency Notes

- **Combate 1x1 requires ordem de turno:** sem sequenciamento claro nao existe regra verificavel.
- **Replay/UAT requires resolucao deterministica:** logs so sao confiaveis quando a mesma entrada gera a mesma saida.
- **Buildcraft futuro enhances atributos + habilidades:** aprofundamento so faz sentido depois de os contratos basicos existirem.
- **Party completa conflicts with early simplicity:** quebra o principal objetivo do milestone atual.

## MVP Definition

### Launch With (v1)

- [ ] Combate 1x1 por turnos com jogador e inimigo - e o menor corte que valida a ideia
- [ ] Atributos com efeitos visiveis em ataque, defesa ou iniciativa - entrega aprendizado real de modelagem
- [ ] Habilidades minimas com custo e efeito - diferencia escolhas de turno
- [ ] UAT e logs/replay definidos - garantem observabilidade do comportamento

### Add After Validation (v1.x)

- [ ] Mais habilidades e variacoes de inimigo - quando o loop 1x1 estiver estavel
- [ ] Status simples e recursos adicionais - quando o modelo base estiver claro para o estudante

### Future Consideration (v2+)

- [ ] Party, companheiros e funcoes taticas - somente depois do core 1x1
- [ ] Exploracao, quests, crafting, economia e mapa - dependem de um combate base solido
- [ ] Save, persistencia, multiplayer e infraestrutura online - fora do objetivo educacional inicial

## Feature Prioritization Matrix

| Feature | User Value | Implementation Cost | Priority |
|---------|------------|---------------------|----------|
| Recorte 1x1 claro | HIGH | LOW | P1 |
| Atributos com impacto | HIGH | LOW | P1 |
| Habilidades minimas | HIGH | MEDIUM | P1 |
| Replay/UAT observavel | HIGH | MEDIUM | P1 |
| Status adicionais | MEDIUM | MEDIUM | P2 |
| Party completa | LOW para o milestone atual | HIGH | P3 |

**Priority key:**
- P1: Must have for launch
- P2: Should have, add when possible
- P3: Nice to have, future consideration

## Competitor Feature Analysis

| Feature | Competitor A | Competitor B | Our Approach |
|---------|--------------|--------------|--------------|
| Progressao/build | Costuma crescer com varias classes e arvore extensa | Costuma usar muitas skills e status cedo | Adiar profundidade e priorizar compreensao |
| Combate tatico | Muitas vezes envolve party inteira | Muitas vezes mistura UI, feedback visual e balanceamento desde cedo | Separar o core documental do resto |
| Feedback ao jogador | Normalmente UX forte e tutoriais | Normalmente logs escondidos | Expor logs/replay como ferramenta de aprendizado |

## Sources

- `Estruturação.md` - fonte primaria para a ideia ampla e os sistemas futuros
- Contexto do usuario no pedido de inicializacao - recorte explicito para combate 1x1, atributos e habilidades
- `PROJECT.md` - objetivo atual, limites e valor central do projeto

---
*Feature research for: slice inicial de RPG por turnos 1x1*
*Researched: 2026-04-12*
