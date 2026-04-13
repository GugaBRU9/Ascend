---
phase: 01
slug: base-documental-do-combate-1x1
status: verified
threats_open: 0
asvs_level: 1
created: 2026-04-13
---

# Phase 01 — Security

> Per-phase security contract: threat register, accepted risks, and audit trail.

---

## Trust Boundaries

| Boundary | Description | Data Crossing |
|----------|-------------|---------------|
| Planning source of truth | `.planning/*.md` prevalece sobre `Estruturação.md` e outros rascunhos antigos. | Escopo do milestone, requisitos e recorte operacional do slice |
| Public canonical docs | `README.md` e `docs/combat-1x1/*.md` traduzem a phase para leitura publica sem contradizer `.planning`. | Framing do projeto, nomenclatura, contratos do duelo e links de onboarding |
| Core/runtime boundary | O futuro core do combate permanece desacoplado de UI, engine, rede, banco e persistencia de produto. | Entradas de acao, ordem de turno, invariantes e eventos observaveis |
| Observability boundary | A phase fecha log textual e eventos minimos sem prometer replay completo antes da `v1.1`. | Campos de log, snapshots de recursos e envelope minimo de eventos |
| Architecture/dependency boundary | A fundacao tecnica aceita apenas a baseline C++ educacional e posterga dependencias maiores para necessidade justificada. | Modulos alvo, stack de build/teste e politica de dependencias |

## Summary Threat Flags

Nenhuma secao `## Threat Flags` foi encontrada em `01-01-SUMMARY.md`, `01-02-SUMMARY.md`, `01-03-SUMMARY.md` ou `01-04-SUMMARY.md`. Esta auditoria usou o threat register dos `PLAN.md` como fonte primaria e validou as mitigacoes diretamente nos artefatos finais da phase.

## Threat Register

| Threat ID | Category | Component | Disposition | Mitigation | Status |
|-----------|----------|-----------|-------------|------------|--------|
| `T-01-01` | Tampering | Scope framing docs | mitigate | `README.md` fixa o milestone como `base documental`, trava o slice futuro em `combate 1x1` com `atributos e habilidades` e aponta a `v1.1 Slice de Implementacao 1x1`; `docs/combat-1x1/overview.md` reforca o recorte e o fora de escopo. | closed |
| `T-01-02` | Repudiation | Glossary and overview | mitigate | `README.md` referencia `overview.md` e `glossary.md`; `docs/combat-1x1/glossary.md` estabiliza termos como `CombatState`, `Turn Order`, `Combat Log` e `Adapter`, coerentes com `overview.md` e os demais docs do slice. | closed |
| `T-01-03` | Denial of Service | Phase onboarding docs | mitigate | O onboarding publico ficou centralizado em `README.md`, com links diretos para `docs/combat-1x1/overview.md` e `docs/combat-1x1/glossary.md`; `overview.md` tambem encaminha o leitor ao glossario e ao contexto detalhado. | closed |
| `T-01-04` | Tampering | Combat domain contract | mitigate | `docs/combat-1x1/combat-domain.md` declara `Actors`, `Runtime State`, `Resources`, `End Conditions` e `Core Invariants`, incluindo os campos minimos de runtime e o encerramento por `hp_current == 0`. | closed |
| `T-01-05` | Repudiation | Turn resolution rules | mitigate | `docs/combat-1x1/turn-resolution.md` fixa a ordem `AGI` -> `player/enemy` -> `actor_id`, define `action_rejected_insufficient_resource` e registra que a rejeicao nao consome recurso e encerra a vez. | closed |
| `T-01-06` | Elevation of Privilege | Adapter boundary | mitigate | `docs/combat-1x1/combat-domain.md`, `docs/combat-1x1/turn-resolution.md` e `docs/combat-1x1/overview.md` mantem `fuga/desistencia` como comando de debug/harness e excluem UI, rede e persistencia da fonte de verdade do contrato. | closed |
| `T-01-07` | Tampering | Attribute and skill contract | mitigate | `docs/combat-1x1/attributes-and-skills.md` fixa `STR`, `AGI`, `STA`, `INT`, `CHA`, `WIS`, o papel de `CHA`, os campos do `Skill Contract`, os kits iniciais e as cinco passivas canonicas do jogador. | closed |
| `T-01-08` | Repudiation | Combat observability | mitigate | `docs/combat-1x1/observability.md` define os campos minimos do `Combat Log`, os eventos obrigatorios do slice e a fronteira que adia `replay completo` para a `v1.1`. | closed |
| `T-01-09` | Denial of Service | Student UAT | mitigate | `docs/combat-1x1/uat-checklist.md` mantem o UAT curto, por leitura, e explicita que o estudante nao depende de UI, harness executavel ou consulta adicional a `Estruturação.md`. | closed |
| `T-01-10` | Tampering | Architecture and stack doc | mitigate | `docs/engineering/backend-cpp-foundation.md` fixa a separacao `domain`, `content`, `session` e `adapters`, junto com `C++20`, `CMake`, `CTest`, `clang-format`, `clang-tidy`, `AddressSanitizer` e `UBSan`. | closed |
| `T-01-11` | Information Disclosure | Dependency policy | mitigate | `docs/engineering/backend-cpp-foundation.md` registra quando `Catch2`, `fmt` e `nlohmann/json` entram e rejeita engine, ECS generico e dependencias grandes neste recorte. | closed |
| `T-01-12` | Denial of Service | Next milestone recommendation | mitigate | `docs/roadmap/phase-1-risk-register.md` preserva riscos e nao-objetivos; `docs/roadmap/v1.1-slice-de-implementacao-1x1.md` define objetivo, fora de escopo e primeiros passos com `CombatState`, `TurnResolver`, harness textual, testes basicos e base minima de replay observavel. | closed |

*Status: open · closed*
*Disposition: mitigate (implementation required) · accept (documented risk) · transfer (third-party)*

## Accepted Risks Log

No accepted risks.

*Accepted risks do not resurface in future audit runs.*

## Security Audit Trail

| Audit Date | Threats Total | Closed | Open | Run By |
|------------|---------------|--------|------|--------|
| 2026-04-13 | 12 | 12 | 0 | Codex inline security audit |

## Sign-Off

- [x] All threats have a disposition (mitigate / accept / transfer)
- [x] Accepted risks documented in Accepted Risks Log
- [x] `threats_open: 0` confirmed
- [x] `status: verified` set in frontmatter

**Approval:** verified 2026-04-13
