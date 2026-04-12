# Attributes and Skills

Este documento complementa [combat-domain.md](./combat-domain.md) ao congelar o papel dos atributos e o contrato minimo do catalogo de habilidades para o slice futuro de combate 1x1. O objetivo aqui e fechar nomes, responsabilidades e exemplos canonicos sem transformar esta phase em balanceamento completo ou implementacao numerica.

## Attribute Set

O `Attribute Profile` do slice inicial contem exatamente seis atributos:

| Attribute | Meaning | Slice role |
|-----------|---------|------------|
| `STR` | Forca e impacto fisico basico. | Sustenta dano fisico e identidade de ataques corporais. |
| `AGI` | Destreza, mobilidade e velocidade. | Alimenta a regra de iniciativa do duelo. |
| `STA` | Vigor, resistencia fisica e folego. | Sustenta reserva fisica e tolerancia do ator no runtime. |
| `INT` | Raciocinio magico e potencia arcana. | Escala habilidades magicas no primeiro slice. |
| `CHA` | Presenca, comunicacao e pressao social. | Permanece no modelo desde o inicio, mesmo sem formula obrigatoria agora. |
| `WIS` | Percepcao, intuicao e afinidade com mana. | Sustenta capacidade magica total do ator. |

Todos os seis atributos existem no contrato minimo do projeto, inclusive quando algum deles ainda nao participa de formula fechada no duelo inicial.

## Combat Impact

No primeiro slice, os atributos afetam o combate da seguinte forma:

- `STR` afeta dano fisico basico.
- `AGI` afeta iniciativa, em conformidade com [turn-resolution.md](./turn-resolution.md).
- `STA` afeta `hp_max` e `stamina_max`.
- `INT` afeta potencia de habilidades magicas.
- `WIS` afeta `mana_max`.
- `CHA` permanece no modelo sem efeito obrigatorio no primeiro slice.

Essa distribuicao privilegia clareza didatica: cada atributo tem um papel legivel no contrato, mas o sistema ainda nao fecha formulas finais, escalonamento detalhado ou balanceamento completo.

## Skill Contract

Toda `Skill Definition` do catalogo inicial precisa expor exatamente estes campos:

| Field | Purpose |
|-------|---------|
| `name` | Nome canonico da habilidade no catalogo. |
| `cost` | Custo declarado para uso da habilidade. |
| `target` | Alvo esperado da execucao, como `self` ou `enemy`. |
| `effect` | Efeito observado quando a habilidade resolve. |
| `resource_type` | Recurso consumido pela habilidade, como `stamina`, `mana` ou nenhum custo para `basic_attack`. |
| `usage_rule` | Restricao minima de uso, validada antes da resolucao. |

O contrato acima separa conteudo de runtime: o catalogo so precisa declarar o que a habilidade e e o que ela exige, enquanto a futura implementacao decide como validar, cobrar custo e registrar efeitos no `Combat Log`.

## Starter Kits

O catalogo inicial do `player` contem as seguintes acoes ativas:

| Actor | Skill | Role |
|-------|-------|------|
| `player` | `basic_attack` | Ataque fisico padrao sempre disponivel. |
| `player` | `Golpe Poderoso` | Ataque fisico de impacto maior, com custo fisico. |
| `player` | `Rajada Arcana` | Habilidade magica ofensiva com custo de mana. |
| `player` | `Postura Defensiva` | Acao defensiva focada em mitigacao ou preparacao observavel. |

O catalogo inicial do `enemy` contem:

| Actor | Skill | Role |
|-------|-------|------|
| `enemy` | `basic_attack` | Ataque ofensivo padrao do duelo. |
| `enemy` | `Mordida Brutal` | Habilidade unica priorizada quando houver recurso suficiente. |

O `player` tambem nasce com cinco passivas canonicas:

- `Foco Marcial`
- `Pulmao de Aco`
- `Mente Clara`
- `Instinto de Duelo`
- `Presenca Latente`

Esses nomes funcionam como kit inicial de referencia para a proxima milestone. Eles travam a existencia de passivas no slice sem obrigar, nesta phase, a fechar formulas detalhadas ou valores numericos.

## Simplifications

- Nao ha balanceamento completo neste milestone.
- `CHA` nao entra em formula obrigatoria ainda, mesmo permanecendo no modelo.
- O catalogo inicial e deliberadamente pequeno para manter o slice legivel e testavel.
- Os nomes acima sao contratos canonicos do slice, mas custos numericos, multiplicadores e tuning fino ficam para a milestone de implementacao.
