---
phase: 01
slug: guia-canonico-de-implementacao
status: draft
nyquist_compliant: false
wave_0_complete: false
created: 2026-04-03
---

# Phase 01 - Validation Strategy

> Per-phase validation contract for feedback sampling during execution.

---

## Test Infrastructure

| Property | Value |
|----------|-------|
| **Framework** | `rg` + checklist manual de rastreabilidade documental |
| **Config file** | `none` |
| **Quick run command** | `rg -n -e 'FRAM-0[12]' -e 'DOMN-0[1-4]' -e 'ARCH-0[1-3]' -e 'EDUC-0[1-3]' -e 'D-0[1-9]' -e 'D-1[0-6]' .planning/phases/01-guia-canonico-de-implementacao/01-GUIA-CANONICO.md && (test ! -f .planning/phases/01-guia-canonico-de-implementacao/01-HANDOFF.md || rg -n -e 'HNDF-0[1-2]' -e 'D-13' -e 'D-14' -e 'D-15' -e 'D-16' .planning/phases/01-guia-canonico-de-implementacao/01-HANDOFF.md)` |
| **Full suite command** | `rg -n -e 'FRAM-0[12]' -e 'DOMN-0[1-4]' -e 'ARCH-0[1-3]' -e 'EDUC-0[1-3]' -e 'D-0[1-9]' -e 'D-1[0-6]' .planning/phases/01-guia-canonico-de-implementacao/01-GUIA-CANONICO.md && rg -n -e 'core minimo' -e 'primeira expansao' -e 'deferred' -e 'platform concern' -e 'Definition' -e 'State' -e 'AuthoringService' -e 'CLI' .planning/phases/01-guia-canonico-de-implementacao/01-GUIA-CANONICO.md && (test ! -f .planning/phases/01-guia-canonico-de-implementacao/01-HANDOFF.md || (rg -n -e 'HNDF-0[1-2]' -e 'D-13' -e 'D-14' -e 'D-15' -e 'D-16' .planning/phases/01-guia-canonico-de-implementacao/01-HANDOFF.md && rg -n -e '02-01' -e '02-02' -e '02-03' -e '02-04' -e 'Definition of Ready' .planning/phases/01-guia-canonico-de-implementacao/01-HANDOFF.md))` |
| **Estimated runtime** | ~5 seconds |

---

## Sampling Rate

- **After every task commit:** Run the quick `rg` command above
- **After every plan wave:** Run the full suite command above
- **Before `$gsd-verify-work`:** Full suite must be green and docs must pass manual coherence review
- **Max feedback latency:** 10 seconds

---

## Per-Task Verification Map

| Task ID | Plan | Wave | Requirement | Test Type | Automated Command | File Exists | Status |
|---------|------|------|-------------|-----------|-------------------|-------------|--------|
| 01-01-01 | 01 | 1 | FRAM-01 | docs/manual | `rg -n -e 'FRAM-01' -e 'milestone documental' -e 'para quem e' -e 'o que este milestone faz' .planning/phases/01-guia-canonico-de-implementacao/01-GUIA-CANONICO.md` | ❌ W0 | ⬜ pending |
| 01-01-02 | 01 | 1 | FRAM-02 | docs/manual | `rg -n -e 'FRAM-02' -e 'core minimo' -e 'primeira expansao' -e 'deferred' -e 'platform concern' .planning/phases/01-guia-canonico-de-implementacao/01-GUIA-CANONICO.md` | ❌ W0 | ⬜ pending |
| 01-02-01 | 02 | 2 | DOMN-01 | docs/manual | `rg -n -e 'DOMN-01' -e 'module' -e 'namespace' -e 'domain' -e 'rules' -e 'content' -e 'session' -e 'adapters' .planning/phases/01-guia-canonico-de-implementacao/01-GUIA-CANONICO.md` | ❌ W0 | ⬜ pending |
| 01-02-02 | 02 | 2 | DOMN-02 | docs/manual | `rg -n -e 'DOMN-02' -e 'character' -e 'combat' -e 'attributes' -e 'skills' -e 'items' -e 'quests' -e 'NPC' -e 'progression' .planning/phases/01-guia-canonico-de-implementacao/01-GUIA-CANONICO.md` | ❌ W0 | ⬜ pending |
| 01-02-03 | 02 | 2 | DOMN-03 | docs/manual | `rg -n -e 'DOMN-03' -e 'Definition' -e 'State' -e 'data-driven' -e 'AuthoringService' .planning/phases/01-guia-canonico-de-implementacao/01-GUIA-CANONICO.md` | ❌ W0 | ⬜ pending |
| 01-02-04 | 02 | 2 | DOMN-04 | docs/manual | `rg -n -e 'DOMN-04' -e 'deterministic' -e 'seed' -e 'events' -e 'resolve' .planning/phases/01-guia-canonico-de-implementacao/01-GUIA-CANONICO.md` | ❌ W0 | ⬜ pending |
| 01-03-01 | 03 | 3 | ARCH-01 | docs/manual | `rg -n -e 'ARCH-01' -e 'content' -e 'session' -e 'adapters' -e 'dependency' .planning/phases/01-guia-canonico-de-implementacao/01-GUIA-CANONICO.md` | ❌ W0 | ⬜ pending |
| 01-03-02 | 03 | 3 | ARCH-02 | docs/manual | `rg -n -e 'ARCH-02' -e 'CMake' -e 'CTest' -e 'GoogleTest' -e 'clang-tidy' -e 'sanitizer' .planning/phases/01-guia-canonico-de-implementacao/01-GUIA-CANONICO.md` | ❌ W0 | ⬜ pending |
| 01-03-03 | 03 | 3 | ARCH-03 | docs/manual | `rg -n -e 'ARCH-03' -e 'replay' -e 'logs' -e 'scenario' -e 'CLI' .planning/phases/01-guia-canonico-de-implementacao/01-GUIA-CANONICO.md` | ❌ W0 | ⬜ pending |
| 01-03-04 | 03 | 3 | EDUC-01 | docs/manual | `rg -n -e 'EDUC-01' -e 'tipos -> regras -> criacao de personagem -> combate minimo' .planning/phases/01-guia-canonico-de-implementacao/01-GUIA-CANONICO.md` | ❌ W0 | ⬜ pending |
| 01-03-05 | 03 | 3 | EDUC-02 | docs/manual | `rg -n -e 'EDUC-02' -e 'nao complicar agora' -e 'nao hand-roll' -e 'simplificar' .planning/phases/01-guia-canonico-de-implementacao/01-GUIA-CANONICO.md` | ❌ W0 | ⬜ pending |
| 01-03-06 | 03 | 3 | EDUC-03 | docs/manual | `rg -n -e 'EDUC-03' -e 'requisito' -e 'decisao' -e 'traceability' -e 'backlog' .planning/phases/01-guia-canonico-de-implementacao/01-GUIA-CANONICO.md .planning/phases/01-guia-canonico-de-implementacao/01-HANDOFF.md` | ❌ W0 | ⬜ pending |
| 01-04-01 | 04 | 4 | HNDF-01 | docs/manual | `rg -n -e 'HNDF-01' -e 'decisoes em aberto' -e 'risks' -e 'open questions' .planning/phases/01-guia-canonico-de-implementacao/01-HANDOFF.md` | ❌ W0 | ⬜ pending |
| 01-04-02 | 04 | 4 | HNDF-02 | docs/manual | `rg -n -e 'HNDF-02' -e '02-01' -e '02-02' -e '02-03' -e '02-04' -e 'proxima milestone' .planning/phases/01-guia-canonico-de-implementacao/01-HANDOFF.md` | ❌ W0 | ⬜ pending |

*Status: ⬜ pending · ✅ green · ❌ red · ⚠️ flaky*

---

## Wave 0 Requirements

- [ ] `.planning/phases/01-guia-canonico-de-implementacao/01-GUIA-CANONICO.md` - artefato principal com framing, escopo, modulos, arquitetura e validacao
- [ ] `.planning/phases/01-guia-canonico-de-implementacao/01-HANDOFF.md` - riscos, decisoes abertas e faseamento da primeira milestone de codigo
- [ ] `.planning/phases/01-guia-canonico-de-implementacao/01-VALIDATION.md` - estrategia de verificacao da fase
- [ ] IDs `FRAM-*`, `DOMN-*`, `ARCH-*`, `EDUC-*`, `HNDF-*` e `D-*` citados explicitamente nos docs da fase

*If none: "Existing infrastructure covers all phase requirements."*

---

## Manual-Only Verifications

| Behavior | Requirement | Why Manual | Test Instructions |
|----------|-------------|------------|-------------------|
| O guia principal nao reabre decisoes travadas no CONTEXT.md | FRAM-01, DOMN-03, HNDF-01 | `rg` encontra termos, mas nao garante que o texto respeita o corte conceitual | Ler `01-GUIA-CANONICO.md` e conferir que D-01 a D-16 aparecem como decisoes consumidas, nao como perguntas em aberto |
| O handoff propõe uma milestone 2 coerente com a ordem didática e com os cortes de escopo | HNDF-01, HNDF-02, EDUC-01 | O comando textual nao garante coerencia arquitetural | Ler `01-HANDOFF.md`, comparar com `01-CONTEXT.md` e verificar que a fase 2 segue `tipos -> regras -> criacao de personagem -> combate minimo` sem puxar party, quests ou produto |

---

## Validation Sign-Off

- [ ] All tasks have `<automated>` verify or Wave 0 dependencies
- [ ] Sampling continuity: no 3 consecutive tasks without automated verify
- [ ] Wave 0 covers all MISSING references
- [ ] No watch-mode flags
- [ ] Feedback latency < 10s
- [ ] `nyquist_compliant: true` set in frontmatter

**Approval:** pending
