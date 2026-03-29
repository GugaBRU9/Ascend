---
phase: 01
slug: foundation-and-guardrails
status: draft
nyquist_compliant: false
wave_0_complete: false
created: 2026-03-29
---

# Phase 01 — Validation Strategy

> Per-phase validation contract for feedback sampling during execution.

---

## Test Infrastructure

| Property | Value |
|----------|-------|
| **Framework** | Unity Test Framework 1.6.0 (EditMode) |
| **Config file** | `Unity/Packages/manifest.json` now; `scripts/test-editmode.sh` after Wave 3 Task 1 |
| **Quick run command** | `bash scripts/test-editmode.sh --suite smoke` |
| **Full suite command** | `bash scripts/test-editmode.sh --suite full` |
| **Estimated runtime** | ~30 seconds smoke / ~90 seconds full after Wave 3 lands |

---

## Sampling Rate

- **After every task commit:** Run `bash scripts/test-editmode.sh --suite smoke` when the script exists; before that, run the task-level grep/file verification listed in the plan.
- **After every plan wave:** Run `bash scripts/test-editmode.sh --suite full` once Wave 3 Task 1 creates the runner; before then, execute all plan `<verification>` checks.
- **Before `$gsd-verify-work`:** Full suite must be green and device checkpoint approved.
- **Max feedback latency:** 90 seconds once the EditMode lane exists.

---

## Per-Task Verification Map

| Task ID | Plan | Wave | Requirement | Test Type | Automated Command | File Exists | Status |
|---------|------|------|-------------|-----------|-------------------|-------------|--------|
| 01-01-01 | 01 | 1 | TECH-01 | config grep | `rg -n "com\\.unity\\.(visualscripting|multiplayer\\.center|collab-proxy)" Unity/Packages/manifest.json && exit 1 || true` | ✅ | ⬜ pending |
| 01-01-02 | 01 | 1 | TECH-01 | config/doc grep | `rg -n "companyName: Ascend|productName: Ascend|com\\.ascend\\.slice" Unity/ProjectSettings/ProjectSettings.asset && rg -n "Samsung Galaxy A15|Samsung Galaxy A10|target_frame_rate = 30" .planning/phases/01-foundation-and-guardrails/01-BENCHMARK-ASSUMPTIONS.md` | ✅ | ⬜ pending |
| 01-01-03 | 01 | 1 | TECH-01 | file + settings check | `test -f Unity/Assets/_Project/Scenes/Bootstrap.unity && rg -n "Assets/_Project/Scenes/Bootstrap\\.unity" Unity/ProjectSettings/EditorBuildSettings.asset` | ✅ | ⬜ pending |
| 01-02-01 | 02 | 2 | TECH-02 | file grep | `rg -n "\"name\": \"Ascend\\.(Bootstrap|Domain|Application|Presentation|Infrastructure)\"" Unity/Assets/_Project/**/*.asmdef && rg -n "class AppBootstrap|AppBootstrapConfig|GameDataCatalog" Unity/Assets/_Project/Bootstrap/AppBootstrap.cs` | ❌ W0 | ⬜ pending |
| 01-02-02 | 02 | 2 | TECH-02 | code + asset existence | `rg -n "Samsung Galaxy A15|Samsung Galaxy A10|targetFrameRate|activeSkillSlots|FrontBackline|BetweenNodesAndCombats|rest-event-01" Unity/Assets/_Project/Content/Definitions && test -f Unity/Assets/_Project/Content/Definitions/Assets/GameDataCatalog.asset` | ❌ W0 | ⬜ pending |
| 01-02-03 | 02 | 2 | TECH-02 | wiring grep | `rg -n "AppBootstrapConfig|GameDataCatalog|Debug\\.Log(Error|Warning)" Unity/Assets/_Project/Bootstrap/AppBootstrap.cs && test -f Unity/Assets/_Project/Scenes/Bootstrap.unity` | ❌ W0 | ⬜ pending |
| 01-03-01 | 03 | 3 | TECH-01 | EditMode tests | `bash scripts/test-editmode.sh --suite smoke` | ❌ W0 | ⬜ pending |
| 01-03-02 | 03 | 3 | TECH-03 | script grep | `rg -n "BuildOptions\\.Development|Build/Android/Ascend-dev\\.apk" scripts/build-android-dev.sh && rg -n "boot-shell|hud-idle|combat-smoke|adb shell am start" scripts/profile-android-smoke.sh` | ❌ W0 | ⬜ pending |
| 01-03-03 | 03 | 3 | TECH-01, TECH-03 | manual device verify | `approved checkpoint for Galaxy A15 boot-shell + profiler attach` | ❌ W0 | ⬜ pending |

*Status: ⬜ pending · ✅ green · ❌ red · ⚠️ flaky*

---

## Wave 0 Requirements

- [ ] `Unity/Assets/_Project/Tests/EditMode/Ascend.Tests.EditMode.asmdef` — create the EditMode test assembly in Plan 03
- [ ] `Unity/Assets/_Project/Tests/EditMode/AppBootstrapConfigTests.cs` — bootstrap smoke assertions
- [ ] `Unity/Assets/_Project/Tests/EditMode/GameDataCatalogTests.cs` — catalog/reference smoke assertions
- [ ] `Unity/Assets/_Project/Tests/EditMode/SessionFlowConfigTests.cs` — sequence/checkpoint smoke assertions
- [ ] `scripts/test-editmode.sh` — Unity batch EditMode runner with `smoke` and `full`
- [ ] `scripts/build-android-dev.sh` — deterministic Android dev build wrapper
- [ ] `scripts/profile-android-smoke.sh` — profiling/install/launch helper for A15/A10 scenarios

---

## Manual-Only Verifications

| Behavior | Requirement | Why Manual | Test Instructions |
|----------|-------------|------------|-------------------|
| Shell boot on Galaxy A15 | TECH-01 | Precisa confirmar abertura real do app no device alvo | Conectar o A15, produzir `Ascend-dev.apk`, instalar, abrir o shell e confirmar que a app entra em `Bootstrap.unity` sem crash nem conteudo de template |
| Profiler capture on Galaxy A15 | TECH-03 | CPU/Memory/Rendering no device dependem de hardware real | Com o A15 conectado, rodar o cenario `boot-shell`, anexar profiler e confirmar captura de CPU, Memory e Rendering |
| Smoke compatibility on Galaxy A10 | TECH-01 | Device secundario serve como guardrail de compatibilidade, nao como budget owner | Se o A10 estiver disponivel, repetir pelo menos o smoke boot e registrar se o shell abre com comportamento aceitavel |

---

## Validation Sign-Off

- [ ] All tasks have `<automated>` verify or Wave 0 dependencies
- [ ] Sampling continuity: no 3 consecutive tasks without automated verify
- [ ] Wave 0 covers all MISSING references
- [ ] No watch-mode flags
- [ ] Feedback latency < 90s
- [ ] `nyquist_compliant: true` set in frontmatter

**Approval:** pending
