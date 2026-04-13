# Ascend

## What This Is

Ascend e um backend C++ educacional, agnostico de plataforma, pensado para estudar modelagem de regras de RPG por turnos com foco em clareza e testabilidade.

O repositorio nao implementa o RPG amplo nem uma UI final. O foco atual e um slice pequeno, textual e verificavel, para que um estudante consiga compilar, inspecionar e corrigir o comportamento sem depender de engine, rede ou persistencia de produto.

## Current Milestone

O milestone ativo e a `v1.1 Slice de Implementacao 1x1`.

Nesta etapa, o projeto sai da base documental e abre a fundacao executavel do duelo 1x1 entre `player` e `enemy`. O objetivo e construir um workspace C++20 simples, com `CMake`, `CTest`, sanitizers e separacao clara entre `domain`, `content`, `session` e `adapters`.

## Build and Test

Com a fase de bootstrap concluida, o loop minimo de build e verificacao fica:

```bash
cmake --preset dev
cmake --build --preset dev
ctest --preset dev --output-on-failure

cmake --preset asan-ubsan
cmake --build --preset asan-ubsan
ctest --preset asan-ubsan --output-on-failure

cmake --preset release
cmake --build --preset release
```

`dev` e o preset de desenvolvimento normal. `asan-ubsan` ativa `AddressSanitizer` e `UBSan` no mesmo preset para diagnostico rapido. `release` valida que o bootstrap tambem compila no modo otimizado.

## Current Scope

- Abrir a fundacao compilavel do slice 1x1 em `C++20`.
- Materializar a separacao `domain` / `content` / `session` / `adapters`.
- Preservar o projeto como core-first, media-agnostic e didatico.
- Fechar uma baseline de verificacao com `CTest` e presets instrumentados.

## Out of Scope

- Implementacao jogavel completa do RPG amplo.
- Party, exploracao, quests, crafting, economia e mundo persistente.
- UI final, audio, rendering, assets ou integracao com engine.
- Multiplayer, networking, persistencia online e save system.
- Balanceamento completo e tuning final do sistema amplo.

## Repository Map

- `README.md`: framing publico do milestone ativo e comandos principais.
- `docs/combat-1x1/`: contratos canonicos do duelo 1x1.
- `docs/engineering/backend-cpp-foundation.md`: baseline tecnica da fundacao C++.
- `src/`: modulos do slice (`domain`, `content`, `session`, `adapters`).
- `tests/`: smoke tests e verificacao automatizada do bootstrap.
- `.planning/`: roadmap, requisitos, estado e artefatos do workflow GSD.

## Next Milestones

Depois do bootstrap da `Phase 2`, as proximas etapas da `v1.1 Slice de Implementacao 1x1` sao:

- `CombatState` e catalogo inicial separados entre runtime e conteudo.
- `TurnResolver` deterministico com rejeicao de acao invalida.
- Harness textual, log minimo e replay observavel.
- Testes basicos cobrindo inicializacao, iniciativa, recurso insuficiente e fim de combate.
