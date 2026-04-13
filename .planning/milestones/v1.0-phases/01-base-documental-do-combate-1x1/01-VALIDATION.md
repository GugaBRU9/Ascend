---
phase: 01
slug: base-documental-do-combate-1x1
status: draft
nyquist_compliant: false
wave_0_complete: true
created: 2026-04-12
---

# Phase 01 - Validation Strategy

> Per-phase validation contract for feedback sampling during execution.

---

## Test Infrastructure

| Property | Value |
|----------|-------|
| **Framework** | other (shell file checks + `rg`) |
| **Config file** | none - documental |
| **Quick run command** | `test -f README.md && rg -n "combate 1x1|backend C\\+\\+ educacional|v1\\.1 Slice de Implementacao 1x1" README.md docs` |
| **Full suite command** | `rg -n "^## " README.md docs/combat-1x1/*.md docs/engineering/*.md docs/roadmap/*.md && rg -n "C\\+\\+20|CMake|CTest|sanitizer|log textual|replay|UAT" README.md docs/combat-1x1/*.md docs/engineering/*.md docs/roadmap/*.md` |
| **Estimated runtime** | ~5 seconds |

---

## Sampling Rate

- **After every task commit:** Run `test -f README.md && rg -n "combate 1x1|backend C\\+\\+ educacional|v1\\.1 Slice de Implementacao 1x1" README.md docs`
- **After every plan wave:** Run `rg -n "^## " README.md docs/combat-1x1/*.md docs/engineering/*.md docs/roadmap/*.md && rg -n "C\\+\\+20|CMake|CTest|sanitizer|log textual|replay|UAT" README.md docs/combat-1x1/*.md docs/engineering/*.md docs/roadmap/*.md`
- **Before `/gsd-verify-work`:** Full suite must be green and a manual read-through must confirm framing and next-step clarity
- **Max feedback latency:** 10 seconds

---

## Per-Task Verification Map

| Task ID | Plan | Wave | Requirement | Threat Ref | Secure Behavior | Test Type | Automated Command | File Exists | Status |
|---------|------|------|-------------|------------|-----------------|-----------|-------------------|-------------|--------|
| 01-01-01 | 01 | 1 | SCOPE-01, SCOPE-02, SCOPE-04 | T-01-01 | README e overview nao deixam o milestone parecer implementacao jogavel | doc-grep | `rg -n "base documental|combate 1x1|fora de escopo" README.md docs/combat-1x1/overview.md` | ❌ W0 | ⬜ pending |
| 01-02-01 | 02 | 2 | COMBAT-01, COMBAT-02, COMBAT-03 | T-01-02 | Dominio e fluxo de turno ficam deterministas e observaveis | doc-grep | `rg -n "vida|stamina|mana|iniciativa|invariante|vida zerada" docs/combat-1x1/combat-domain.md docs/combat-1x1/turn-resolution.md` | ❌ W0 | ⬜ pending |
| 01-03-01 | 03 | 3 | ATTR-01, ATTR-02, ATTR-03, ATTR-04, COMBAT-04, VAL-01 | T-01-03 | Contratos de atributos, habilidades, log e UAT ficam explicitos | doc-grep | `rg -n "STR|AGI|STA|INT|CHA|WIS|passiv|habilidade|log textual|UAT" docs/combat-1x1/attributes-and-skills.md docs/combat-1x1/observability.md docs/combat-1x1/uat-checklist.md` | ❌ W0 | ⬜ pending |
| 01-04-01 | 04 | 4 | ARCH-01, ARCH-02, ARCH-03, ARCH-04, VAL-03, VAL-04 | T-01-04 | Stack, criterio de dependencias, riscos e v1.1 ficam rastreaveis | doc-grep | `rg -n "C\\+\\+20|CMake|CTest|sanitizer|dependenc|risco|v1\\.1 Slice de Implementacao 1x1" docs/engineering/backend-cpp-foundation.md docs/roadmap/phase-1-risk-register.md docs/roadmap/v1.1-slice-de-implementacao-1x1.md` | ❌ W0 | ⬜ pending |

*Status: ⬜ pending · ✅ green · ❌ red · ⚠️ flaky*

---

## Wave 0 Requirements

Existing shell checks cover this phase. No framework install or fixture bootstrap is required before execution.

---

## Manual-Only Verifications

| Behavior | Requirement | Why Manual | Test Instructions |
|----------|-------------|------------|-------------------|
| O repositorio diferencia milestone documental de milestone implementavel | SCOPE-01, VAL-04 | Texto pode passar no grep e ainda continuar ambiguo | Ler `README.md` e `docs/roadmap/v1.1-slice-de-implementacao-1x1.md`; confirmar que a fase atual nao promete runtime jogavel e que a proxima milestone tem recorte claro |
| A recomendacao da `v1.1` e acionavel sem reabrir toda a discussao | VAL-03, VAL-04 | Exige julgamento sobre clareza e continuidade | Ler `docs/roadmap/phase-1-risk-register.md` e `docs/roadmap/v1.1-slice-de-implementacao-1x1.md`; confirmar objetivo, nao-objetivos e riscos de entrada |

---

## Validation Sign-Off

- [x] All tasks have `<automated>` verify or doc-check equivalents
- [x] Sampling continuity: no 3 consecutive tasks without automated verify
- [x] Wave 0 covers all missing references
- [x] No watch-mode flags
- [x] Feedback latency < 10s
- [ ] `nyquist_compliant: true` set in frontmatter

**Approval:** pending
