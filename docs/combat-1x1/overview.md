# Combat 1x1 Overview

## Goal

Este documento congela o slice futuro de combate 1x1 de Ascend. O objetivo e descrever um duelo simples, observavel e didatico entre jogador e inimigo sem confundir este milestone documental com uma implementacao jogavel.

## In Scope

- duelo jogador vs inimigo
- ordem por iniciativa/velocidade
- vida, stamina e mana
- atributos
- habilidades
- log textual
- UAT

## Out of Scope

- party
- exploracao
- quests
- crafting
- economia
- UI final
- audio
- rendering
- multiplayer
- save system
- balanceamento completo

## Canonical Decisions

- O encerramento canonico do duelo continua centrado em vida zerada.
- fuga/desistencia e apenas comando de debug/harness para encerrar simulacoes, nao uma mecanica normal do duelo.
- O inimigo inicial deve permanecer simples o bastante para seguir prioridade fixa.
- replay completo fica para a proxima milestone; nesta fase, a documentacao so registra a necessidade futura de replay observavel.

## Document Map

- `README.md`: framing do milestone atual e ponte para a proxima milestone.
- `docs/combat-1x1/glossary.md`: termos centrais compartilhados entre os documentos do slice.
- `.planning/phases/01-base-documental-do-combate-1x1/01-CONTEXT.md`: contexto detalhado que sustenta estas decisoes.
