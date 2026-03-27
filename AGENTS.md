# AGENTS.md

Guia especifico do projeto Ascend.
Use este arquivo junto de `.planning/PROJECT.md`, `.planning/REQUIREMENTS.md` e `.planning/ROADMAP.md`.

## Projeto

- Ascend e um RPG tatico mobile por turnos, com sessoes curtas, protagonista altamente customizavel e 4 companheiros automatizados.
- O valor central do projeto e: combate por turnos legivel e profundo no mobile, com build rica e frame-time estavel mesmo em hardware antigo.
- O v1 atual e um **vertical slice validavel**, nao o jogo completo.

## Stack

- **Engine**: manter a linha `Unity 6000.3.x` salvo validacao explicita de mudanca.
- **Codigo**: C# + Unity; regras de combate/build/IA devem ficar em C# puro sempre que possivel, com `MonoBehaviour` apenas na integracao/apresentacao.
- **UI runtime**: `uGUI` como baseline do slice; evitar misturar `uGUI` e `UI Toolkit` cedo demais.
- **Render**: `URP` apenas no modo mais simples possivel e sempre sob benchmark real em device.
- **Input**: `Input System` touch-first.

## Regras Tecnicas

- Perfilar em device real, nao apenas no Editor.
- Tratar GC, draw calls, overdraw e memoria como requisitos de produto.
- Preferir dados authored fora de cena (`ScriptableObject` + runtime state separado).
- Usar testes de regra para hot paths de combate/IA/save.
- Pooling e reutilizacao sao obrigatorios em caminhos quentes quando houver spawn/despawn repetido.

## Evitar

- Logica de combate espalhada em `MonoBehaviour`, animacoes e callbacks de cena.
- `Resources/` como pipeline principal de conteudo.
- Visual Scripting, DOTS/ECS, multiplayer/live-service e frameworks pesados de DI neste slice.
- Post-process, shaders caros, VFX pesados e complexidade visual sem benchmark.
- Expandir escopo para campanha longa, meta, monetizacao ou controle manual completo da party antes de validar o slice.

## Q&A Obrigatorio Antes de Travar Implementacao

- Device alvo de benchmark low-end
- Modelo do campo tatico
- Numero de skills ativas (3 vs 4)
- Granularidade de save/resume
- Escopo exato da primeira sequencia jogavel

## Workflow

- Comece trabalho estruturado por um comando GSD (`$gsd-discuss-phase`, `$gsd-plan-phase`, `$gsd-execute-phase`, `$gsd-quick`, etc.).
- Mantenha `.planning/` como fonte de verdade para escopo, fases e decisoes.
- Se um ponto de design indefinido bloquear a implementacao, transforme isso em Q&A explicito antes de inventar uma resposta no codigo.
