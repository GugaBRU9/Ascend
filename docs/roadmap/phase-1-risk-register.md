# Phase 1 Risk Register

Este registro fecha a leitura de risco da fase documental e prepara a transicao para [v1.1 Slice de Implementacao 1x1](./v1.1-slice-de-implementacao-1x1.md). O objetivo nao e reabrir o escopo do projeto, e sim deixar visivel o que precisa ser preservado enquanto o backend C++ sair do papel.

## Active Risks

| Risk | Why it matters in this milestone |
|------|----------------------------------|
| `scope creep` | O projeto ainda nasce de uma ideia ampla de RPG; sem disciplina, a v1.1 pode tentar absorver sistemas alem do duelo 1x1. |
| `content/runtime mixing` | Misturar catalogos estaticos com estado mutavel quebraria a separacao entre conteudo e runtime que sustenta a arquitetura core-first. |
| `weak observability` | Sem logs textuais coerentes, o estudante nao consegue reproduzir, diagnosticar ou corrigir a resolucao do combate. |
| `premature overengineering` | Introduzir camadas, dependencias ou abstrações cedo demais enfraquece o objetivo educacional e torna o slice menos explicavel. |

## Deferred Decisions

As seguintes decisoes continuam adiadas para a milestone implementavel:

- `replay format`
- `final numeric formulas`
- `fixture schema`
- `real build scaffolding`

Esses itens sao intencionalmente futuros. O milestone atual precisa apenas deixar claro que eles existem, sem deixar que virem bloqueio para a abertura da v1.1.

## Entry Criteria For v1.1

A `v1.1` so deve comecar quando estas condicoes estiverem verdadeiras:

- docs canonicos consolidados para dominio, atributos, observabilidade e fundacao tecnica;
- recorte 1x1 travado, sem reabrir party, exploracao ou sistemas paralelos;
- stack C++ aceita como baseline do slice implementavel;
- riscos ativos entendidos e usados como limite de implementacao, nao como convite para expandir o milestone.

## Non-Goals Preserved

Os seguintes itens continuam fora de escopo e nao devem reaparecer como objetivo da `v1.1`:

- `party`
- `exploracao`
- `UI final`
- `multiplayer`
- `persistencia online`

Esses nao-objetivos preservam o carater didatico do slice: um duelo simples, textual e testavel antes de qualquer sistema maior do RPG.
