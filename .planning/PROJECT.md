# Ascend

## What This Is

Ascend e um projeto para implementar um RPG tatico com base agnostica de midia, validado primeiro pelas mecanicas e pela experiencia de mesa. O ciclo atual nao busca um produto final de web, app, mobile ou terminal; ele busca transformar a documentacao canonica em um nucleo implementavel, testavel e pronto para playtest de mecanicas.

O produto inicial deve priorizar um core de regras fiel aos documentos canonicos, com suporte a prototipagem jogavel e verificacao rapida de balanceamento antes de qualquer investimento pesado em interface final.

## Core Value

As mecanicas centrais de Ascend precisam ser interessantes, legiveis e testaveis independentemente da midia em que forem apresentadas.

## Requirements

### Validated

(None yet — ship to validate)

### Active

- [ ] Implementar um nucleo de regras que codifique com fidelidade os sistemas canonicos de testes, combate, condicoes, recursos e resolucao de cenas.
- [ ] Disponibilizar uma forma jogavel de validacao de mecanicas que permita executar personagens, inimigos, cenas e a miniaventura inicial sem depender de uma interface final de produto.
- [ ] Estruturar conteudo inicial e fluxos de verificacao para iterar balanceamento, clareza de regras e qualidade de playtest de forma repetivel.

### Out of Scope

- Produto digital final para web, app, mobile ou terminal neste primeiro ciclo — a prioridade atual e validar mecanicas antes de investir em camada de entrega.
- Features herdadas do rascunho legacy como energia de exploracao, save, codex digital, economia detalhada, crafting profundo e companions com IA — esses modulos foram explicitamente adiados nos docs canonicos.
- Polimento de UX, onboarding visual, progressao expandida e conteudo de escala ampla antes da aprovacao do loop base — aumentam escopo sem reduzir o risco principal do projeto.

## Context

- A fonte canonica do projeto esta em `README.md` e nos arquivos em `docs/`.
- `Estruturação.md` existe apenas como legado consultivo. Ele pode inspirar modulos futuros, mas nao define o escopo atual.
- O ciclo 1 define Ascend como um sistema de mesa com 1 personagem por jogador, 3 a 5 jogadores por grupo, 1 mestre e campanha curta inicial de 3 a 5 sessoes.
- A documentacao ja fixa o motor central de jogo: `1d20 + atributo + treinamento + modificadores`, dano deterministico, combate por zonas, PE como recurso de habilidades e cenas fora de combate baseadas em `Progresso x Pressao`.
- O pacote inicial documentado ja inclui atributos, pericias, trilhas, equipamentos, inimigos, boss, miniaventura e roteiro de playtest.
- O risco principal do projeto nao e "como apresentar o jogo", e sim "como provar que o sistema e divertido, coerente e implementavel".
- O repositorio esta efetivamente greenfield do ponto de vista de implementacao ativa: no estado atual, a fonte de verdade e documental.

## Constraints

- **Produto**: Validacao de mecanicas primeiro — o projeto deve provar o loop base antes de considerar adaptacao para uma midia final.
- **Canon**: `docs/` e a fonte de verdade — a implementacao deve seguir a documentacao canonica, nao o arquivo legado.
- **Arquitetura**: Base agnostica de midia — regras, dados e validacao nao podem depender de UI especifica.
- **Escopo**: Ciclo 1 enxuto — foco em regras, conteudo inicial, encontro, progressao curta e playtest.
- **Qualidade**: Regras precisam ser verificaveis — o projeto precisa permitir testes automatizados e validacao manual estruturada.

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Documentacao canonica em `docs/` e a fonte de verdade | O repositorio ja separa claramente o que e canonico e o que e legado | — Pending |
| O primeiro objetivo implementavel e um prototipo de validacao de mecanicas, nao um produto final | Reduz risco e evita travar decisao de interface cedo demais | — Pending |
| O core deve ser agnostico de midia | O projeto explicitamente quer adaptar o sistema para qualquer midia depois | — Pending |
| O modelo jogavel de referencia e mesa em grupo com 1 personagem por jogador | Essa e a forma canonica do ciclo 1 definida na documentacao | — Pending |
| Modulos de produto digital e sistemas profundos secundarios ficam fora do primeiro roadmap | Crafting profundo, economia detalhada, saves e similares nao ajudam a responder o risco principal agora | — Pending |

## Evolution

This document evolves at phase transitions and milestone boundaries.

**After each phase transition** (via `$gsd-transition`):
1. Requirements invalidated? → Move to Out of Scope with reason
2. Requirements validated? → Move to Validated with phase reference
3. New requirements emerged? → Add to Active
4. Decisions to log? → Add to Key Decisions
5. "What This Is" still accurate? → Update if drifted

**After each milestone** (via `$gsd-complete-milestone`):
1. Full review of all sections
2. Core Value check — still the right priority?
3. Audit Out of Scope — reasons still valid?
4. Update Context with current state

---
*Last updated: 2026-04-03 after initialization*
