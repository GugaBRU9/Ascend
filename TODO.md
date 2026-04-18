# TODO

Este arquivo contem apenas pendencias ativas do slice atual.
Itens concluidos saem daqui e vao para um arquivo de historico separado.
A ordem de cima para baixo representa a prioridade atual.

## Agora

- [ ] Alinhar o contrato de `Entidade` com o duelo 1x1: `actor_id`, `side`, vida/stamina/mana atuais e maximos, atributos base, habilidades/passivas e acao selecionada.
- [ ] Definir `Player` e `Inimigo` como especializacoes minimas de `Entidade`.
- [ ] Alinhar `Atributos` com a nomenclatura canonica do duelo: `STR`, `AGI`, `STA`, `INT`, `CHA` e `WIS`.
- [ ] Criar `CombatState` com exatamente `player` e `enemy`, `turn_index` e `battle_status`.
- [ ] Separar catalogo estatico de runtime mutavel para ator inicial, `basic_attack`, habilidades e passivas.

## Proximo bloco

- [ ] Montar o bootstrap do duelo inicial a partir do catalogo.
- [ ] Implementar ordem de turno deterministica por `AGI`, depois `player`, depois `actor_id`.
- [ ] Implementar validacao de acao e rejeicao por recurso insuficiente.
- [ ] Implementar `basic_attack` e a primeira habilidade ativa/passiva canonica.
- [ ] Expor um `main` ou harness textual minimo para inspecionar o estado inicial e os primeiros turnos.

## Depois

- [ ] Registrar `Combat Log` minimo por turno com snapshots de vida, stamina e mana.
- [ ] Fechar os eventos observaveis minimos: `turn_started`, `action_selected`, `action_rejected_insufficient_resource`, `action_resolved`, `damage_applied`, `effect_applied` e `combat_ended`.
- [ ] Adicionar testes para inicializacao, iniciativa, acao invalida por recurso insuficiente e encerramento do combate.
- [ ] Preparar o envelope inicial para replay observavel sem serializacao completa.

## Travas / decisoes abertas

- [ ] Confirmar se a working tree atual substitui de vez a estrutura antiga baseada em CMake/modulos ou se isso ainda e uma transicao.
- [ ] Decidir onde o catalogo inicial vai morar dentro da estrutura simplificada atual.
- [ ] Revisar o blocker herdado do `TODO.md` anterior: validar se a dependencia de device Android para o smoke `boot-shell` ainda pertence ao projeto atual ou se deve ir para o historico.
