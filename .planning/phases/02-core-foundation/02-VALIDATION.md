---
phase: 02
slug: core-foundation
status: draft
nyquist_compliant: false
wave_0_complete: false
created: 2026-04-05
---

# Phase 02 — Validation Strategy

> Per-phase validation contract for feedback sampling during execution.

---

## Test Infrastructure

| Property | Value |
|----------|-------|
| **Framework** | `GoogleTest 1.17.0` + `CTest 3.28.3` |
| **Config file** | `CMakeLists.txt` + `CMakePresets.json` |
| **Quick run command** | `ctest --preset dev --output-on-failure -L <label>` |
| **Full suite command** | `ctest --preset dev --output-on-failure && ctest --preset asan --output-on-failure && ctest --preset ubsan --output-on-failure` |
| **Estimated runtime** | ~60 seconds |

---

## Sampling Rate

- **After every task commit:** Run `ctest --preset dev --output-on-failure -L <label>` for the label affected by the task.
- **After every plan wave:** Run `ctest --preset dev --output-on-failure` for all labels unlocked so far.
- **Before `$gsd-verify-work`:** `ctest --preset dev --output-on-failure && ctest --preset asan --output-on-failure && ctest --preset ubsan --output-on-failure` must be green.
- **Max feedback latency:** 60 seconds

---

## Per-Task Verification Map

| Task ID | Plan | Wave | Requirement | Test Type | Automated Command | File Exists | Status |
|---------|------|------|-------------|-----------|-------------------|-------------|--------|
| 02-01-01 | 01 | 1 | CORE-01 | unit | `ctest --preset dev -L domain` | ❌ W0 | ⬜ pending |
| 02-01-02 | 01 | 1 | CORE-02 | unit | `ctest --preset dev -L domain` | ❌ W0 | ⬜ pending |
| 02-02-01 | 02 | 2 | RULE-01 | unit/scenario | `ctest --preset dev -L rules` | ❌ W0 | ⬜ pending |
| 02-02-02 | 02 | 2 | RULE-02 | scenario | `ctest --preset dev -L rules && ctest --preset dev -L flow` | ❌ W0 | ⬜ pending |
| 02-03-01 | 03 | 3 | CONT-01 | integration | `ctest --preset dev -L content` | ❌ W0 | ⬜ pending |
| 02-03-02 | 03 | 3 | CONT-03 | integration/scenario | `ctest --preset dev -L creation` | ❌ W0 | ⬜ pending |
| 02-04-01 | 04 | 4 | FLOW-01 | smoke | `ctest --preset dev -L cli` | ❌ W0 | ⬜ pending |
| 02-04-02 | 04 | 4 | FLOW-03 | scenario/smoke | `ctest --preset dev -L flow && ctest --preset dev -L cli` | ❌ W0 | ⬜ pending |

*Status: ⬜ pending · ✅ green · ❌ red · ⚠️ flaky*

---

## Wave 0 Requirements

- [ ] `CMakePresets.json` — presets `dev`, `asan` e `ubsan`
- [ ] `CMakeLists.txt` — `include(CTest)` e integracao `GoogleTest`
- [ ] `tests/unit/` — labels `domain` e `rules`
- [ ] `tests/integration/` — labels `content` e `creation`
- [ ] `tests/scenarios/` — label `flow`
- [ ] `tests/smoke/` — label `cli`
- [ ] `tests/support/` — builders pequenos para snapshot/catalogo

---

## Manual-Only Verifications

| Behavior | Requirement | Why Manual | Test Instructions |
|----------|-------------|------------|-------------------|
| Pacote inicial de conteudo permanece pequeno e suficiente | CONT-04 | O tamanho do catalogo e a aderencia ao recorte exigem julgamento de escopo, nao so execucao de teste | Revisar `content/catalog/v1/*.json` e confirmar que existe apenas um template de protagonista, poucas skills/efeitos e um conjunto pequeno de inimigos |
| CLI continua ferramenta de estudo, nao shell final | FLOW-04 | O desvio aqui e principalmente de UX e escopo, dificil de reduzir a um assert unico | Ler os comandos expostos pela CLI e confirmar ausencia de REPL, save implicito, menu persistente ou fluxo de produto final |

---

## Validation Sign-Off

- [ ] All tasks have `<automated>` verify or Wave 0 dependencies
- [ ] Sampling continuity: no 3 consecutive tasks without automated verify
- [ ] Wave 0 covers all MISSING references
- [ ] No watch-mode flags
- [ ] Feedback latency < 60s
- [ ] `nyquist_compliant: true` set in frontmatter

**Approval:** pending
