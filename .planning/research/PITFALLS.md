# Pitfalls Research: Ascend

**Date:** 2026-04-03
**Context:** avoid building product surface area before proving the mechanics loop

## Top pitfalls

### 1. Coupling the prototype to the delivery medium

Starting with UI, persistence or product shell concerns turns every rule change into interface rework.

### 2. Inflating scope before proving the loop

Adding crafting, economy, node maps, companions, saves or broad content expansion too early hides the main risk: whether the core system actually works.

### 3. Letting deterministic combat become solved and repetitive

If positioning, PE pressure, reactions, cover and enemy roles are weak, fixed damage can collapse into one dominant pattern.

### 4. Claiming one unified engine but only validating combat

If social, investigative and exploratory scenes remain improvised or trivial, the project only validates half of the design.

### 5. Pushing missing rigor onto the GM

Unclear timing, triggers, condition semantics and exception handling turn the GM into a live patch layer instead of a user of the system.

### 6. Balancing from intuition instead of evidence

Without structured logs, seed replay and playtest metrics, balance discussions stay subjective.

### 7. Using starter content that does not stress the hypotheses

If the starter adventure does not force PE spending, positioning, condition play and meaningful non-combat resolution, a passing playtest says little.

## Warning signs

- rule changes require UI or persistence changes
- roadmap conversations drift toward deferred modules before one full session works
- players hoard PE and repeat the same optimal action
- non-combat scenes resolve in one roll or do not alter the group's state
- the GM keeps inventing rule clarifications every few minutes
- balance tweaks happen without logs, timing or usage data
- pregens look different on paper but occupy the same role in play

## Prevention strategies

### Core first

Start with canonical rule models, deterministic execution and a harness for testing/playtesting.

### Explicit scope gates

Do not pull deferred modules into scope until cycle 1 validation criteria pass.

### Tactical sandbox before content breadth

Validate combat in focused encounters before expanding adventure breadth.

### Make `Progress x Pressure` genuinely playable

Implement social, investigative and exploratory scene templates with real cost and consequence.

### Formalize rule semantics early

Every skill and condition should have explicit fields for trigger, target, cost, duration and resolution behavior.

### Instrument playtests

Track turn time, skill usage, PE spending, confusion points and structural GM interventions.

### Use content as a hypothesis vehicle

Every starter scene should exist to test a mechanic, a role or a pacing assumption.

## Phase mapping

| Pitfall | Primary Phase | Reinforcement |
|---------|---------------|---------------|
| Medium coupling | Phase 1 | Phase 5 |
| Scope inflation | Phase 1 | Phase 5 |
| Solved combat loop | Phase 2 | Phase 5 |
| Non-unified engine | Phase 3 | Phase 4 |
| GM carrying the system | Phase 1 | Phase 4 |
| Evidence-free balancing | Phase 4 | Phase 5 |
| Weak starter content | Phase 3 | Phase 5 |

## Confidence

- High: pitfalls tied to Ascend's documented strategy
- Medium: external generalization from game design practice

## Sources

- Project docs: `README.md`, `docs/00-visao-do-sistema.md`, `docs/01-nucleo-de-regras.md`, `docs/05-playtest.md`, `docs/07-modulos-adiados.md`, `.planning/PROJECT.md`
- Supplemental reading used by research agent:
  - `https://www.gamedeveloper.com/design/howto-develop-a-prototyping-mindset`
  - `https://www.gamedeveloper.com/design/building-an-rpg-battle-system---part-2`
  - `https://www.gamedeveloper.com/design/criteria-for-strategy-game-design`
  - `https://www.gamedeveloper.com/design/developing-a-tabletop-game`
  - `https://www.gamedeveloper.com/game-platforms/reflections-on-playtesting-and-puzzledorf`
  - `https://www.gamedeveloper.com/design/the-logic-behind-violence-a-primer-on-combat-system-design`
  - `https://thealexandrian.net/wordpress/1118/roleplaying-games/three-clue-rule`
