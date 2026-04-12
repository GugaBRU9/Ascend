# Ascend

## What This Is

Ascend e um backend C++ educacional, agnostico de plataforma, pensado para estudar modelagem de regras de RPG por turnos com foco em clareza e testabilidade.

O repositorio nao implementa o jogo amplo nesta fase. O milestone atual existe para consolidar uma base documental que congele o recorte do primeiro slice futuro antes de qualquer runtime jogavel.

## Current Milestone

O milestone atual e uma base documental para o combate 1x1. O objetivo e transformar a ideia ampla do RPG em uma fundacao clara, revisavel e rastreavel para um slice futuro centrado em atributos e habilidades.

## Current Scope

- Definir o framing do projeto como backend C++ educacional e core-first.
- Travar o primeiro slice futuro como combate 1x1 por turnos entre jogador e inimigo.
- Registrar atributos e habilidades como foco mecanico inicial do slice.
- Publicar documentos canonicos fora de `.planning` para leitura rapida do milestone atual.

## Out of Scope

- Implementacao jogavel completa do RPG amplo.
- UI de produto, audio, rendering, assets ou integracao com engine.
- Multiplayer, networking, persistencia online e save system.
- Exploracao, quests, crafting, economia, party e balanceamento completo.

## Repository Map

- `README.md`: visao geral canonica do milestone atual.
- `docs/combat-1x1/overview.md`: recorte oficial do slice de combate 1x1, incluindo escopo e fora de escopo.
- `docs/combat-1x1/glossary.md`: glossario compartilhado dos termos centrais usados pelos proximos documentos.
- `.planning/`: fonte de verdade operacional do roadmap, requisitos, estado e pesquisa da fase.

## Next Milestone

A proxima milestone recomendada e `v1.1 Slice de Implementacao 1x1`, dedicada a implementar o primeiro combate 1x1 com atributos e habilidades sem abandonar o foco educacional, observavel e agnostico de plataforma.
