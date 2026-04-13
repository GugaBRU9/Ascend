# Phase 1 Research: Base Documental do Combate 1x1

**Phase:** 1
**Date:** 2026-04-12
**Confidence:** MEDIUM
**Question answered:** O que preciso saber para planejar bem esta fase?

## Executive Summary

Esta fase deve produzir uma base documental canonica para o slice futuro de combate 1x1, sem cair em duas armadilhas: tratar `Estruturação.md` como backlog literal ou transformar o milestone atual em implementacao prematura. O plano precisa sair com artefatos pequenos, legiveis e suficientemente concretos para guiar a proxima milestone de implementacao em C++.

O melhor recorte para execucao continua sendo sequencial em 4 planos, porque cada grupo de documentos depende do anterior: primeiro congelar visao e vocabulário, depois travar dominio do combate, depois detalhar atributos/habilidades/observabilidade e, por fim, fechar stack, validacao, riscos e recomendacao explicita da milestone `v1.1 Slice de Implementacao 1x1`.

## Planning Implications

### 1. A fase precisa escrever documentos canonicos fora de `.planning`

Os artefatos de `.planning` ja descrevem objetivo, requisitos e contexto operacional. A execucao da fase deve transformar isso em documentacao de produto/engenharia revisavel dentro do repositorio, preferencialmente em `README.md` e em um pequeno conjunto de arquivos sob `docs/`.

### 2. O plano deve preservar a natureza documental do milestone

Nenhum plano deve abrir implementacao de runtime, CMake, testes ou harness real. O papel da fase e fechar contratos, exemplos e criterios de verificacao. Se um plano pedir codigo C++ nesta fase, ele saiu do recorte.

### 3. O combate 1x1 precisa ser documentado com valores concretos o bastante para guiar implementacao

O contexto ja trava decisoes suficientes para evitar ambiguidade:

- ordem de turno por velocidade/iniciativa
- tres recursos de runtime: vida, stamina e mana
- encerramento canonico por vida zerada
- fuga/desistencia apenas como comando de debug/harness
- inimigo inicial com IA fixa por prioridade
- seis atributos presentes no modelo, com `CHA` sem efeito obrigatorio no slice inicial
- jogador com ataque basico + 3 ativas
- inimigo com ataque basico + 1 habilidade
- catalogo inicial do jogador prevendo 5 passivas

O plano deve transformar isso em contratos de dominio, nao em texto aspiracional.

### 4. Observabilidade precisa entrar como contrato, nao como nota futura

Os documentos da fase devem declarar explicitamente:

- quais eventos entram no log textual
- quais invariantes sao observaveis por leitura de log/documento
- o que fica documentado como replay futuro
- como o estudante faz UAT por checklist curto

Sem isso, os requisitos `COMBAT-04` e `VAL-01` ficam soltos.

### 5. Paralelismo baixo e dependencia alta sao aceitaveis aqui

Com `parallelization: false` e forte dependencia conceitual entre os entregaveis, a melhor estrategia e usar 4 waves sequenciais. Forcar paralelismo nesta fase so aumenta risco de drift entre documentos.

## Recommended Artifact Set

| Roadmap Plan | Recommended Output | Why |
|--------------|--------------------|-----|
| 01-01 | `README.md`, `docs/combat-1x1/overview.md`, `docs/combat-1x1/glossary.md` | Congela framing, escopo e vocabulario |
| 01-02 | `docs/combat-1x1/combat-domain.md`, `docs/combat-1x1/turn-resolution.md` | Fecha atores, estado de runtime, fluxo de turno e invariantes |
| 01-03 | `docs/combat-1x1/attributes-and-skills.md`, `docs/combat-1x1/observability.md`, `docs/combat-1x1/uat-checklist.md` | Fecha contratos mecanicos e validacao observavel |
| 01-04 | `docs/engineering/backend-cpp-foundation.md`, `docs/roadmap/phase-1-risk-register.md`, `docs/roadmap/v1.1-slice-de-implementacao-1x1.md` | Fecha stack, risco, criterio para dependencias e proximo milestone |

## Requirement Coverage Strategy

### Scope & Vision

- `SCOPE-01` a `SCOPE-04` devem aparecer principalmente em `README.md` e `docs/combat-1x1/overview.md`.
- O plano inicial precisa exigir secoes explicitas de `In Scope` e `Out of Scope`.

### Combat Domain

- `COMBAT-01` a `COMBAT-03` devem ser cobertos por `combat-domain.md` e `turn-resolution.md`.
- `COMBAT-04` depende de `observability.md`, mas o plano de dominio deve deixar gancho para os eventos do log.

### Attributes & Skills

- `ATTR-01` a `ATTR-04` exigem um documento unico que explique:
  - papel de cada atributo
  - contrato minimo de habilidade
  - relacao entre atributos e habilidades
  - simplificacoes assumidas para manter o slice didatico

### Architecture & Stack

- `ARCH-01` a `ARCH-04` devem aparecer em um documento de fundacao C++ com secoes para estrutura alvo, stack e criterio de dependencias externas.

### Validation & Continuity

- `VAL-01` pede um checklist curto de UAT para estudante.
- `VAL-02` depende de rastreabilidade clara dos requisitos nos planos.
- `VAL-03` pede riscos e proximo passo visiveis.
- `VAL-04` exige uma recomendacao explicita da milestone `v1.1`.

## Risks To Address During Planning

### R-01: Drift entre documentacao canonica e artefatos de `.planning`

Se o plano criar docs com linguagem diferente de `PROJECT.md`, `ROADMAP.md` e `REQUIREMENTS.md`, a fase vira duplicacao inconsistente.

**Mitigation for planner:** cada tarefa precisa ler os arquivos de verdade em `.planning` antes de escrever qualquer documento novo.

### R-02: Excesso de profundidade mecanica cedo demais

Tentar fechar formulas completas, balanceamento ou dezenas de habilidades nesta fase quebra o objetivo educacional.

**Mitigation for planner:** pedir exemplos concretos suficientes para orientar a proxima milestone, nao uma biblia de sistema completo.

### R-03: Contratos vagos de observabilidade

Falar em log ou replay sem listar campos observaveis nao ajuda a implementacao futura.

**Mitigation for planner:** exigir listas concretas de campos e checklist de UAT com perguntas objetivas.

### R-04: Recomendacao da proxima milestone sem criterio de entrada

Falar "abrir v1.1" sem dizer o que ela implementa ou o que fica fora mantem ambiguidade.

**Mitigation for planner:** o ultimo plano deve terminar com scope, objetivos, nao-objetivos e criterio de sucesso da proxima milestone.

## Validation Architecture

### Validation Posture

Esta fase e documental. A verificacao nao depende de build/teste de codigo; depende de existencia, coerencia e rastreabilidade dos artefatos escritos.

### Evidence Artifacts

Antes de encerrar a fase, estes grupos precisam existir com conteudo util:

- `README.md`
- `docs/combat-1x1/*.md`
- `docs/engineering/backend-cpp-foundation.md`
- `docs/roadmap/phase-1-risk-register.md`
- `docs/roadmap/v1.1-slice-de-implementacao-1x1.md`

### Fast Checks During Execution

Use checks baratos e repetiveis a cada task:

- `test -f README.md`
- `rg -n "backend C\\+\\+ educacional|combate 1x1|atributos e habilidades" README.md docs`
- `rg -n "^## " docs/combat-1x1/*.md docs/engineering/*.md docs/roadmap/*.md`

### Full Gate Before Phase Close

Rodar no fim da phase:

- `rg -n "v1\\.1 Slice de Implementacao 1x1" README.md docs/roadmap/*.md`
- `rg -n "vida|stamina|mana|iniciativa|fuga/desistencia" docs/combat-1x1/combat-domain.md docs/combat-1x1/turn-resolution.md`
- `rg -n "STR|AGI|STA|INT|CHA|WIS|passiv|habilidade" docs/combat-1x1/attributes-and-skills.md`
- `rg -n "log textual|replay|UAT" docs/combat-1x1/observability.md docs/combat-1x1/uat-checklist.md`
- `rg -n "C\\+\\+20|CMake|CTest|sanitizer|dependenc" docs/engineering/backend-cpp-foundation.md`

### Manual Review Points

Mesmo numa fase documental, dois pontos precisam de leitura humana:

- o texto realmente separa milestone documental de milestone implementavel
- a recomendacao da `v1.1` e especifica o bastante para abrir um novo roadmap sem reabrir a discussao inteira

## Suggested Planning Defaults

Para evitar vaguidade no plano, o planner pode assumir:

- tie-break de iniciativa documentado como `maior AGI`, depois `player` antes de `enemy`, depois `actor_id` crescente
- custo de habilidade deduzido no momento da resolucao; acao invalida por recurso insuficiente nao consome recurso
- kit inicial documentado por exemplos concretos, nao por placeholders genericos
- `CHA` mantido no modelo e na tabela de atributos, mas marcado explicitamente como sem efeito obrigatorio no primeiro slice

## Open Questions Deferred To v1.1

Devem permanecer como futuros, nao como bloqueio desta fase:

- formato serializavel definitivo de replay
- formulas numericas finais de dano e escalonamento
- formato exato de fixtures externas
- implementacao real de CMake, CTest e sanitizers

## Research Conclusion

O plano ideal para a fase 1 nao e "mais documentacao"; e um conjunto curto de documentos canonicos, rastreaveis e concretos que congelem o slice 1x1 e deixem uma ponte limpa para a milestone `v1.1 Slice de Implementacao 1x1`. O foco do planner deve ser especificidade verificavel, nao volume.

---
*Ready for planning: yes*
