# Phase 1: Foundation and Guardrails - Discussion Log

> **Audit trail only.** Do not use as input to planning, research, or execution agents.
> Decisions are captured in CONTEXT.md — this log preserves the alternatives considered.

**Date:** 2026-03-29T12:00:34-03:00
**Phase:** 01-foundation-and-guardrails
**Areas discussed:** Dispositivo-alvo e orcamento base, Modelo do campo tatico, Densidade do turno do protagonista, Persistencia e sequencia jogavel inicial

---

## Dispositivo-alvo e orcamento base

| Option | Description | Selected |
|--------|-------------|----------|
| Android low-end real e especifico | Escolher um aparelho concreto como referencia principal de benchmark e budget. | |
| Android low-end por classe, sem modelo fechado ainda | Definir uma faixa provisoria de hardware e travar o modelo exato depois. | |
| Dual target: Android low-end principal + desktop/editor so para produtividade | Android dita orcamento, desktop ajuda no fluxo de trabalho. | |
| Galaxy A10 como benchmark obrigatorio; Galaxy A15 como meta de rodar bem | O A10 dita o gate duro e o A15 indica folga. | |
| Galaxy A15 como baseline principal; Galaxy A10 como compatibilidade secundaria | O A15 guia a fase e o A10 vira smoke/compatibilidade. | ✓ |
| 60 FPS alvo, com quedas pequenas toleraveis fora de combate | Meta mais agressiva para o baseline principal. | |
| 30 FPS estaveis como orcamento oficial do slice | Meta mais segura para o slice mobile inicial. | ✓ |

**User's choice:** Galaxy A15 como baseline principal; Galaxy A10 como compatibilidade secundaria; 30 FPS estaveis como orcamento oficial do slice.
**Notes:** O usuario mencionou inicialmente "Galaxy A10" ou "Galaxy A15 (esse seria para rodar bem)". A decisao final prioriza o A15 como referencia principal de desenvolvimento/performance e deixa o A10 como compatibilidade secundaria.

---

## Modelo do campo tatico

| Option | Description | Selected |
|--------|-------------|----------|
| Frente / retaguarda fixa | Linhas abstratas, sem grid ou movimentacao livre. | ✓ |
| Lanes | 2-3 faixas com troca limitada entre elas. | |
| Grid / hex | Posicionamento completo com movimento por celula. | |
| So alvo, alcance e protecao | Frente protege retaguarda; regras de alvo/alcance respeitam a linha. | ✓ |
| Tambem permitir troca de linha durante combate | Reposicionamento vira acao/efeito do combate. | |
| Quase so visual | A formacao existe como leitura, mas impacta pouco as regras. | |

**User's choice:** Frente/retaguarda fixa com impacto em alvo, alcance e protecao.
**Notes:** A decisao favorece leitura mobile e custo tecnico menor no slice, sem abrir escopo para grid, hex ou reposicionamento livre.

---

## Densidade do turno do protagonista

| Option | Description | Selected |
|--------|-------------|----------|
| 3 habilidades ativas | HUD menor e decisao mais enxuta no mobile. | ✓ |
| 4 habilidades ativas | Mais combinacao imediata, com custo maior de HUD e pacing. | |
| 3 no MVP, com espaco arquitetural para 4 depois | Produto trava em 3 agora, mas a arquitetura se prepara para 4. | |

**User's choice:** 3 habilidades ativas.
**Notes:** A escolha reforca legibilidade e velocidade do turno como regra de produto.

---

## Persistencia e sequencia jogavel inicial

| Option | Description | Selected |
|--------|-------------|----------|
| So entre nos / combates | Checkpoints fora do combate ativo. | ✓ |
| Tambem dentro do combate | Salvar durante batalha ativa. | |
| So retorno a base / tela principal | Persistencia mais restrita e simples. | |
| Tutorial curto + 1 combate principal | Shell minimo, com validacao limitada do loop. | |
| Tutorial curto + 2 combates + 1 no de descanso/evento | Melhor equilibrio para validar ritmo, checkpoint e fluxo. | ✓ |
| Sequencia maior com mini-boss/boss | Valida mais, mas expande conteudo cedo. | |

**User's choice:** Save/resume so entre nos/combat e primeira sequencia jogavel com tutorial curto + 2 combates + 1 no de descanso/evento.
**Notes:** A decisao empurra checkpoints para o fluxo macro e evita o custo de serializar estado de combate no comeco do projeto.

---

## the agent's Discretion

Nenhuma area foi explicitamente delegada ao agente durante esta discussao.

## Deferred Ideas

Nenhuma ideia fora de escopo foi registrada nesta discussao.
