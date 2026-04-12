# Turn Resolution

Este documento descreve como o `CombatState` do duelo 1x1 avanca de uma vez para a outra. Ele usa os termos do [glossary.md](./glossary.md) e depende do contrato de atores, recursos e encerramento definido em [combat-domain.md](./combat-domain.md).

## Initiative Rule

A ordem de turno e sempre calculada pela mesma regra de desempate:

1. `AGI` em ordem decrescente.
2. `player` antes de `enemy` quando a `AGI` empata.
3. `actor_id` em ordem crescente quando `AGI` e `side` ainda empatarem.

Essa regra precisa produzir a mesma `Turn Order` sempre que o estado de entrada for igual. Nenhum adapter externo pode sobrescrever essa prioridade com UI, rede, persistencia ou interpretacao manual.

## Turn Sequence

Cada resolucao de vez segue esta sequencia fixa:

1. determinar ator ativo
2. validar acao
3. aplicar custo
4. resolver efeito
5. registrar evento
6. checar encerramento

O `Action Command` selecionado pelo ator entra na etapa de validacao e so avanca para custo e efeito quando respeita o contrato da habilidade ou do `basic_attack`. Depois da resolucao, o combate registra o evento produzido e um estado resumido do turno com recursos, efeitos ativos relevantes e `battle_status`.

## Invalid Actions

Se a acao selecionada exigir mais recurso do que o ator possui, a resolucao gera o evento `action_rejected_insufficient_resource`.

Quando isso acontece:

- nenhum recurso e consumido
- nenhum efeito e aplicado
- o evento rejeitado ainda entra no `Combat Log`
- a vez do ator termina imediatamente apos o registro do evento

Uma acao rejeitada por recurso insuficiente nao abre rodada extra, nao reexecuta validacao e nao transfere a decisao para UI, rede ou persistencia. `fuga/desistencia` continua fora do fluxo normal e pode existir apenas como comando de debug/harness.

## Enemy Priority Logic

O `enemy` inicial usa prioridade fixa e observavel:

1. tenta sua habilidade unica se houver recurso suficiente para pagar o custo
2. caso contrario usa `basic_attack`

Nao existe arvore tatica, comportamento adaptativo ou dependencia de adapter externo neste slice. A decisao do inimigo precisa ser derivada apenas do estado observavel atual.

## Observable Invariants

- Toda resolucao gera ao menos um evento observavel e um estado resumido por turno.
- O resumo do turno preserva a identidade do ator ativo, a acao resolvida ou rejeitada, os custos aplicados e o `battle_status` resultante.
- `action_rejected_insufficient_resource` nunca consome `vida`, `stamina` ou `mana`.
- `vida zerada encerra o combate` sem rodada extra.
- O combate continua com um unico ator ativo por resolucao, em conformidade com `combat-domain.md`.
