# Phase 2: Bootstrap da Fundacao C++ 1x1 - Discussion Log

> **Audit trail only.** Do not use as input to planning, research, or execution agents.
> Decisions are captured in CONTEXT.md — this log preserves the alternatives considered.

**Date:** 2026-04-13
**Phase:** 02-bootstrap-da-fundacao-c-1x1
**Areas discussed:** Layout do workspace, Build e presets, Baseline de testes, Dependencias

---

## Estrutura de diretorios

| Option | Description | Selected |
|--------|-------------|----------|
| `src/domain`, `src/content`, `src/session`, `src/adapters` | Projeto CMake unico com modulos explicitos no mesmo workspace | ✓ |
| `libs/domain`, `libs/content`, `libs/session`, `apps/cli` | Separacao mais forte entre libs e app textual desde o inicio | |
| Outra estrutura | O usuario define outro layout | |

**User's choice:** Projeto unico com `src/domain`, `src/content`, `src/session` e `src/adapters`.
**Notes:** O usuario preferiu o layout mais direto e facil de entender.

---

## Granularidade de targets

| Option | Description | Selected |
|--------|-------------|----------|
| Um target por modulo | `ascend_domain`, `ascend_content`, `ascend_session`, `ascend_cli` ou equivalente | ✓ |
| Um target unico agora | Tudo junto no inicio, modularizando depois | |
| Outro arranjo | O usuario define outro modelo | |

**User's choice:** Um target por modulo desde ja.
**Notes:** A separacao conceitual deve aparecer cedo no build, nao apenas na documentacao.

---

## Headers e implementacoes

| Option | Description | Selected |
|--------|-------------|----------|
| `include/` + `src/` por modulo | API publica e implementacao separadas por modulo | ✓ |
| Tudo em `src/` por enquanto | Estrutura minima, sem fronteira de include ainda | |
| Outro padrao | O usuario define outro layout | |

**User's choice:** `include/` + `src/` desde o inicio.
**Notes:** O usuario preferiu uma estrutura mais legivel para estudo.

---

## Reserva do adapter textual

| Option | Description | Selected |
|--------|-------------|----------|
| Reservar adapter textual ja na Phase 2 | Criar lugar explicito para CLI/harness desde o bootstrap | ✓ |
| Deixar adapter para a Phase 4 | Focar apenas nas libs agora | |
| Outra preferencia | O usuario define outro momento | |

**User's choice:** Reservar adapter textual desde a `Phase 2`.
**Notes:** A phase nao implementa o harness completo, mas ja deixa a borda prevista na estrutura.

---

## Presets iniciais

| Option | Description | Selected |
|--------|-------------|----------|
| `dev`, `asan`, `release` | Trio simples, com um preset de diagnostico sem UBSan | |
| `dev`, `asan-ubsan`, `release` | Trio simples com ambos os sanitizers juntos | ✓ |
| `dev`, `debug`, `release`, `asan` | Mais modos desde o inicio | |
| Outra combinacao | O usuario define outro conjunto | |

**User's choice:** `dev`, `asan-ubsan`, `release`.
**Notes:** O usuario pediu explicacao simples e aceitou a recomendacao de manter poucos modos.

---

## Estrategia de sanitizers

| Option | Description | Selected |
|--------|-------------|----------|
| Preset unico com `ASan` + `UBSan` | Menos complexidade operacional para um estudante | ✓ |
| Presets separados | Mais controle, mais complexidade | |
| So `ASan` agora | UBSan fica para depois | |
| Outra preferencia | O usuario define outro arranjo | |

**User's choice:** Preset unico combinando `AddressSanitizer` e `UBSan`.
**Notes:** A recomendacao foi aceita pelo usuario.

---

## Politica de warnings

| Option | Description | Selected |
|--------|-------------|----------|
| Warnings fortes sem `-Werror` | Ajuda a aprender sem travar o bootstrap cedo demais | ✓ |
| Warnings fortes com `-Werror` | Mais rigido desde o primeiro commit | |
| Warnings minimos | Menos ruido, menos protecao | |
| Outra preferencia | O usuario define outro comportamento | |

**User's choice:** Warnings fortes, sem `-Werror`.
**Notes:** O usuario nao entendeu as opcoes de primeira; depois de explicacao simples, aceitou a recomendacao.

---

## Ferramentas clang

| Option | Description | Selected |
|--------|-------------|----------|
| Preparar `clang-format` e `clang-tidy` desde ja | Ja deixar o bootstrap pronto para formatacao e analise | ✓ |
| So documentar agora, integrar depois | Menos trabalho inicial, menos enforcement | |
| Outra abordagem | O usuario define outro caminho | |

**User's choice:** Preparar `clang-format` e `clang-tidy` nesta phase.
**Notes:** Integracao deve ser leve e didatica.

---

## Baseline de testes

| Option | Description | Selected |
|--------|-------------|----------|
| So configurar `CTest` | Pipeline sem teste real ainda | |
| Configurar `CTest` + um teste pequeno real | Provar o pipeline sem inflar a phase | ✓ |
| Criar varios testes desde o inicio | Cobertura maior ja no bootstrap | |

**User's choice:** `CTest` com pelo menos um teste real pequeno.
**Notes:** O usuario gostou da recomendacao apresentada em linguagem simples.

---

## Dependencias no bootstrap

| Option | Description | Selected |
|--------|-------------|----------|
| `std` + `CMake` + `CTest` apenas | Dependencias externas so quando a dor aparecer | ✓ |
| Ja trazer `Catch2` | Melhor ergonomia de teste cedo, mais uma dependencia | |
| Ja trazer `Catch2` e `fmt` | Mais ferramentas desde o primeiro bootstrap | |

**User's choice:** Comecar `std`-first, sem bibliotecas extras nesta phase.
**Notes:** A resposta do usuario veio como `3:@ 4:!`; foi interpretada pelo contexto como aceitacao de `3:2 4:1`, equivalente as recomendacoes explicadas logo antes.

---

## the agent's Discretion

- Nome final dos targets.
- Nome final do preset de diagnostico.
- Flags especificas de warning e integracao minima de `clang-tidy`.

## Deferred Ideas

Nenhuma.
