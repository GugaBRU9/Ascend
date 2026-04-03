# Features Research: Ascend

**Date:** 2026-04-03
**Context:** v1 is a mechanics-validation prototype, not a polished player-facing product

## Table stakes for v1

### Rules execution

- faithful execution of tests, modifiers, advantage/disadvantage and degrees of success
- static defenses, resource handling, fixed damage, resistances and conditions
- death/downed and recovery flows

### Tactical combat

- initiative and turn order
- action, movement and reaction economy
- zones, pressure attacks, cover and positioning
- skill usage by players and enemies
- support for common, elite and boss encounters

### Non-combat scenes

- playable `Progress x Pressure` loop
- visible objective, risk, ND and consequence
- support for social, investigative and exploratory scene templates

### Character and content support

- load and run level 1 pregens
- create or edit level 1 characters from canonical docs
- load origins, trails, equipment, enemies and the starter adventure from canonical content

### GM and playtest support

- prepare scenes and encounters without inventing missing system rules
- run the starter package repeatedly
- record signals needed for balance iteration: PE use, turn duration, skill frequency, confusion points and dominant patterns

### Light persistence

- carry consequences between scenes inside the session
- allow preparation choices to affect the boss encounter

## Differentiators to keep in sight

- truly data-driven unified engine for combat and non-combat scenes
- campaign consequence tracking for factions, NPCs and world state
- richer telemetry for balancing and build comparison
- short progression loop beyond level 1 after the first validation round
- optional recurring ally module for small groups
- later adapters beyond CLI, if derived from the same core

## Anti-features for v1

- polished final product UI
- save system, codex, journal or lore archive
- deep economy, shops and advanced crafting
- solo mode with full companion management
- tactical AI for companions
- mandatory node map progression
- mobile-session pacing constraints
- exploration energy system
- large-scale content expansion before the core loop is stable

## Dependencies

- rules core before any UI, analytics or automation layer
- character model before builder and balance testing
- combat runner depends on zones, actions, conditions, enemies and skills
- non-combat runner depends on tests plus the `Progress x Pressure` protocol
- starter adventure depends on both combat and non-combat execution plus light consequence tracking
- deeper instrumentation only matters after the base loop runs end to end

## Practical assumptions for roadmap input

- v1 should support both pregens and level 1 custom character creation
- first playable surface should be CLI plus automated simulation/test harness
- first delivery should validate one end-to-end starter session, not the full 3-5 session campaign arc

## Confidence

- High: mandatory v1 scope and exclusions
- Medium: how much creator UX is needed in the first playable build
- Medium: how much campaign progression enters before post-playtest iteration

## Sources

- Project docs: `README.md`, `docs/00-visao-do-sistema.md`, `docs/03-guia-do-mestre-e-campanha.md`, `docs/04-conteudo-inicial.md`, `docs/05-playtest.md`, `.planning/PROJECT.md`
