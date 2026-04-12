# Observability

Este documento complementa [turn-resolution.md](./turn-resolution.md) ao definir a evidencia textual minima que o duelo 1x1 precisa expor para testes, harnesses e leitura humana. O objetivo nao e fechar o formato final de replay, e sim garantir que cada turno deixe rastros suficientes para diagnostico futuro sem depender de UI, engine ou interpretacao implita.

## Minimum Combat Log

Todo `Combat Log` do slice inicial precisa registrar, por turno resolvido ou rejeitado, pelo menos estes campos:

| Field | Purpose |
|-------|---------|
| `turn_number` | Numero sequencial do turno observado. |
| `acting_actor` | Identidade do ator que tentou agir naquele turno. |
| `action_id` | Acao selecionada, como `basic_attack` ou uma habilidade do catalogo. |
| `resource_cost` | Custo cobrado ou custo que teria sido cobrado antes da rejeicao. |
| `damage_or_effect` | Resultado resumido da acao: dano aplicado, efeito aplicado ou rejeicao. |
| `hp_snapshot` | Estado resumido de vida apos o evento do turno. |
| `stamina_snapshot` | Estado resumido de stamina apos o evento do turno. |
| `mana_snapshot` | Estado resumido de mana apos o evento do turno. |

Esses campos sao o minimo necessario para relacionar a ordem de turno, o custo tentado, o efeito observado e o estado resultante dos tres recursos canonicos do combate.

## Event List

Os eventos minimos do slice sao:

- `turn_started`
- `action_selected`
- `action_rejected_insufficient_resource`
- `action_resolved`
- `damage_applied`
- `effect_applied`
- `combat_ended`

Essa lista cobre o fluxo descrito em [turn-resolution.md](./turn-resolution.md): abertura do turno, escolha da acao, rejeicao por recurso insuficiente quando aplicavel, resolucao valida, impactos observaveis e encerramento do duelo.

## Replay Boundary

O `replay completo` e adiado para a milestone `v1.1`, mas os eventos desta lista sao o minimo necessario para diagnostico. Nesta phase, o compromisso canonico e manter um log textual legivel e consistente o bastante para explicar o que aconteceu em cada turno sem ainda padronizar schema, serializacao ou reexecucao deterministica de replay fim a fim.

## Verification Notes

Todo turno precisa deixar estado resumido observavel por texto. Isso significa que uma leitura simples do log precisa permitir identificar quem agiu, o que tentou fazer, se houve custo, se houve dano ou efeito, e como ficaram `vida`, `stamina` e `mana` apos a resolucao ou rejeicao.
