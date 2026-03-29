# Phase 1 QA Guardrails

## Device Contract

- Primary benchmark device: `Samsung Galaxy A15`
- Secondary smoke device: `Samsung Galaxy A10`
- Slice performance target: target FPS `30`

## Required Profiling Outputs

- `CPU`: Unity Profiler timeline capture for every Phase 1 smoke scenario.
- `Memory`: Unity Profiler memory module or equivalent snapshot captured during the same pass.
- `Rendering`: Unity Profiler rendering module plus any supporting `gfxinfo` output when validating device smoke.

## Smoke Scenarios

| Scenario | Goal | Minimum evidence |
| --- | --- | --- |
| `boot-shell` | Confirm the app boots into the Ascend shell without crashing or falling back to template content. | Launch log, `CPU`, `Memory`, `Rendering` capture. |
| `hud-idle` | Observe the shell/HUD idle cost after boot, before real combat systems expand the frame budget. | Idle log window, `CPU`, `Memory`, `Rendering` capture. |
| `combat-smoke` | Reserve a repeatable profiling slot for the first combat-ready slice path once combat scaffolding lands. | Launch log, combat smoke notes, `CPU`, `Memory`, `Rendering` capture. |

## Phase Gates

- Run `boot-shell` on `Samsung Galaxy A15` before Phase 1 is closed.
- Repeat at least the `boot-shell` scenario on `Samsung Galaxy A10` whenever a baseline Android build exists, even if the device is still treated as compatibility smoke only.
- Keep the shell baseline minimal during these captures: no template gameplay, no real combat loop, and no art-heavy effects that were not benchmarked yet.

## Open Questions and Triggers

| Topic | Why it stays open | Trigger to resolve |
| --- | --- | --- |
| `art direction` | Visual targets still risk pushing UI, overdraw and URP cost before the combat slice exists. | Resolve before Phase 7 starts locking visual presentation or adding expensive effects. |
| `onboarding` | The first-time-player flow still needs concrete UX steps and copy scope. | Resolve before Phase 7 implements the first playable shell and tutorial path. |
| `economy` | Rewards, upgrade pacing and resource sinks remain undefined for the slice. | Resolve before Phase 4 or Phase 5 start wiring progression rewards that would be painful to reauthor. |
| `skill acquisition subset` | The slice still needs a curated subset of acquisition sources to implement first. | Resolve before Phase 5 defines skill content hooks and unlock paths. |
| `A10 compatibility threshold` | The exact minimum acceptable experience on the weaker device is still not quantified. | Resolve before Phase 8 hardens performance exit criteria and signs off the vertical slice. |
