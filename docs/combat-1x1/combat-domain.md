# Combat Domain

Este documento define o contrato minimo de runtime para o duelo 1x1 de Ascend. Ele complementa [turn-resolution.md](./turn-resolution.md) ao congelar quem participa do combate, quais campos existem no estado observavel e quais invariantes precisam permanecer verdadeiras durante toda a resolucao.

## Actors

O duelo inicial e limitado a exatamente dois atores:

- `player`
- `enemy`

Cada ator participa do combate com um identificador estavel (`actor_id`) e um lado canonico (`side`). Nao existe terceiro participante, invocacao, party, observador interativo ou dependencia de UI, engine, rede ou persistencia neste contrato.

## Runtime State

O `CombatState` minimo do slice 1x1 precisa expor, para cada ator, os seguintes campos de runtime:

| Field | Meaning |
|-------|---------|
| `actor_id` | Identificador estavel usado em desempates, logs e correlacao de eventos. |
| `side` | Lado canonico do ator no duelo: `player` ou `enemy`. |
| `hp_current` | Vida atual do ator. |
| `hp_max` | Limite maximo de vida do ator. |
| `stamina_current` | Stamina atual disponivel para custo de acoes. |
| `stamina_max` | Limite maximo de stamina do ator. |
| `mana_current` | Mana atual disponivel para custo de acoes. |
| `mana_max` | Limite maximo de mana do ator. |
| `base_attributes` | Perfil base de atributos do ator, incluindo `STR`, `AGI`, `STA`, `INT`, `CHA` e `WIS`. |
| `passive_modifiers` | Modificadores passivos aplicados ao ator antes ou durante a resolucao. |
| `active_effects` | Efeitos ativos com impacto observavel no turno atual ou nos turnos seguintes. |
| `selected_action` | Comando de acao selecionado para a vez corrente do ator. |
| `turn_index` | Indice numerico da resolucao atual para facilitar replay futuro e verificacao textual. |
| `battle_status` | Estado agregado do duelo, suficiente para distinguir preparacao, resolucao e encerramento. |

O estado agregado do combate pode conter metadados adicionais no futuro, mas estes campos formam o contrato minimo que logs, testes e harnesses precisam conseguir observar sem inferencia subjetiva.

## Resources

O runtime do duelo usa exatamente tres recursos canonicos:

- `vida`: representa a sobrevivencia do ator e governa o encerramento canonico do combate.
- `stamina`: representa esforco fisico e custos de acoes fisicas.
- `mana`: representa capacidade magica e custos de acoes magicas.

Os tres recursos existem no contrato desde o primeiro slice, mesmo quando uma acao especifica consome apenas um deles. Custos, validacao de uso e efeitos sobre esses recursos precisam ser visiveis na resolucao de turno.

## End Conditions

O encerramento canonico do combate ocorre quando `hp_current` de qualquer ator chega a `0`. Ao detectar esse estado, o duelo muda para `battle_status` de encerrado e nao aceita rodada extra.

`fuga/desistencia` nao faz parte do fluxo normal do duelo. Ela pode existir apenas como comando de debug/harness para encerrar simulacoes de teste ou inspecao, sem alterar a regra canonica de vitoria por vida zerada.

## Core Invariants

- Nenhum recurso observavel fica negativo: `hp_current`, `stamina_current` e `mana_current` permanecem `>= 0`.
- Nenhum recurso observavel ultrapassa seu limite maximo correspondente sem um evento explicito que atualize o maximo.
- Existe um unico ator ativo por resolucao de vez.
- O combate para imediatamente ao detectar `hp_current == 0`, sem rodada extra e sem reinterpretacao por adapter externo.
- `side` continua restrito a `player` e `enemy` durante todo o duelo.
- O contrato do dominio permanece core-first e media-agnostic: UI, engine, rede, banco e persistencia de produto ficam fora do core deste documento.
