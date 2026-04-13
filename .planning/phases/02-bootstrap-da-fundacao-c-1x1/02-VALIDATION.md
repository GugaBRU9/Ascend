---
phase: 02
slug: bootstrap-da-fundacao-c-1x1
status: draft
nyquist_compliant: false
wave_0_complete: false
created: 2026-04-13
---

# Phase 02 - Validation Strategy

> Per-phase validation contract for feedback sampling during execution.

---

## Test Infrastructure

| Property | Value |
|----------|-------|
| **Framework** | other (`CMake` + `CTest` + smoke test em C++) |
| **Config file** | `CMakeLists.txt`, `CMakePresets.json`, `tests/CMakeLists.txt` |
| **Quick run command** | `cmake --preset dev && cmake --build --preset dev` |
| **Full suite command** | `cmake --preset dev && cmake --build --preset dev && ctest --preset dev --output-on-failure && cmake --preset asan-ubsan && cmake --build --preset asan-ubsan && ctest --preset asan-ubsan --output-on-failure && cmake --preset release && cmake --build --preset release` |
| **Estimated runtime** | ~60 seconds |

---

## Sampling Rate

- **After every task commit:** Run `cmake --preset dev && cmake --build --preset dev`
- **After every plan wave:** Run `cmake --preset dev && cmake --build --preset dev && ctest --preset dev --output-on-failure`
- **Before `/gsd-verify-work`:** Full suite must be green and a manual read-through must confirm que o `README.md` reflete a `v1.1`
- **Max feedback latency:** 90 seconds

---

## Per-Task Verification Map

| Task ID | Plan | Wave | Requirement | Threat Ref | Secure Behavior | Test Type | Automated Command | File Exists | Status |
|---------|------|------|-------------|------------|-----------------|-----------|-------------------|-------------|--------|
| 02-01-01 | 01 | 1 | ARCH-05 | T-02-01, T-02-02 | O entrypoint publico mostra comandos reais e nao deixa o milestone parecer documental ou jogo completo | doc-grep | `rg -n "v1\\.1 Slice de Implementacao 1x1|cmake --preset dev|ctest --preset asan-ubsan|UI final|multiplayer" README.md` | ❌ W0 | ⬜ pending |
| 02-01-02 | 01 | 1 | ARCH-05 | T-02-03 | Root build nasce configuravel em `C++20`, com presets e tooling sem falha silenciosa | configure | `cmake --preset dev && cmake --preset release` | ❌ W0 | ⬜ pending |
| 02-02-01 | 02 | 2 | ARCH-06 | T-02-04 | `domain` e `content` existem como targets independentes com headers publicos sob `include/ascend/...` | build-grep | `rg -n "add_library\\(ascend_domain|add_library\\(ascend_content" src/domain/CMakeLists.txt src/content/CMakeLists.txt && cmake --preset dev && cmake --build --preset dev --target ascend_domain ascend_content` | ❌ W0 | ⬜ pending |
| 02-02-02 | 02 | 2 | ARCH-06 | T-02-05 | `session` depende de `domain` e `content`, e `adapters` reserva a borda textual sem inverter dependencias | build-grep | `rg -n "target_link_libraries\\(ascend_session.*ascend_domain.*ascend_content|target_link_libraries\\(ascend_adapters.*ascend_session" src/session/CMakeLists.txt src/adapters/CMakeLists.txt && cmake --preset dev && cmake --build --preset dev --target ascend_session ascend_adapters` | ❌ W0 | ⬜ pending |
| 02-03-01 | 03 | 3 | VAL-05 | T-02-06 | Existe ao menos um teste real registrado em `CTest` cobrindo o bootstrap dos modulos | ctest | `rg -n "add_test\\(NAME bootstrap_smoke" tests/CMakeLists.txt && cmake --preset dev && cmake --build --preset dev && ctest --preset dev --output-on-failure` | ❌ W0 | ⬜ pending |
| 02-03-02 | 03 | 3 | VAL-05 | T-02-07 | O preset instrumentado roda o mesmo smoke test com `AddressSanitizer` + `UBSan` | asan-ctest | `cmake --preset asan-ubsan && cmake --build --preset asan-ubsan && ctest --preset asan-ubsan --output-on-failure` | ❌ W0 | ⬜ pending |

*Status: ⬜ pending · ✅ green · ❌ red · ⚠ flaky*

---

## Wave 0 Requirements

- [ ] `CMakeLists.txt` - root build scaffold para `C++20`, presets e `CTest`
- [ ] `CMakePresets.json` - comandos canonicos `dev`, `asan-ubsan`, `release`
- [ ] `src/CMakeLists.txt` - ponto de entrada para os modulos
- [ ] `tests/CMakeLists.txt` - wiring de `CTest` para o smoke test

---

## Manual-Only Verifications

| Behavior | Requirement | Why Manual | Test Instructions |
|----------|-------------|------------|-------------------|
| O `README.md` reflete o milestone ativo sem reabrir o escopo do RPG amplo | ARCH-05 | `rg` confirma strings, mas nao garante framing correto | Ler `README.md`; confirmar que o milestone atual e `v1.1 Slice de Implementacao 1x1`, que o repositorio continua sem UI final/jogo completo e que os comandos `cmake --preset dev` / `ctest --preset dev` aparecem com contexto |
| A separacao entre `domain`, `content`, `session` e `adapters` esta didatica para um estudante | ARCH-06 | O build pode passar mesmo com fronteiras pouco legiveis | Ler `src/*/CMakeLists.txt` e os headers publicos; confirmar que `domain` nao depende de `session`/`adapters`, que `session` consome `domain` e `content`, e que `adapters` fica na borda textual |

---

## Validation Sign-Off

- [x] All tasks have `<automated>` verify or Wave 0 dependencies
- [x] Sampling continuity: no 3 consecutive tasks without automated verify
- [x] Wave 0 covers all missing references
- [x] No watch-mode flags
- [x] Feedback latency < 90s
- [ ] `nyquist_compliant: true` set in frontmatter

**Approval:** pending
