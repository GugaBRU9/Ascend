# Phase 1: Base Documental do Combate 1x1 - Discussion Log

> **Audit trail only.** Do not use as input to planning, research, or execution agents.
> Decisions are captured in CONTEXT.md - this log preserves the alternatives considered.

**Date:** 2026-04-12
**Phase:** 01-base-documental-do-combate-1x1
**Areas discussed:** Recorte mecanico do duelo, Modelo inicial de atributos, Kit inicial de habilidades, Validacao observavel

---

## Recorte mecanico do duelo

### Estrutura minima do turno

| Option | Description | Selected |
|--------|-------------|----------|
| 1 | Jogador age -> inimigo age -> resolver efeitos de fim de rodada | |
| 2 | Ordem por velocidade/iniciativa desde o primeiro slice | yes |
| 3 | Jogador escolhe acao, depois sistema resolve uma fila simples por prioridade | |
| 4 | Outro | |

**User's choice:** Ordem por velocidade/iniciativa desde o primeiro slice.
**Notes:** A iniciativa deve existir como parte real do recorte inicial, nao como simplificacao posterior.

### Recursos minimos do duelo

| Option | Description | Selected |
|--------|-------------|----------|
| 1 | So vida; habilidades sem custo separado | |
| 2 | Vida + energia/esforco simples | |
| 3 | Vida + mana/stamina separados | |
| 4 | Outro | yes |

**User's choice:** Vida + stamina + mana.
**Notes:** O usuario preferiu um modelo customizado com tres recursos distintos em vez de usar uma energia unica.

### Encerramento do combate

| Option | Description | Selected |
|--------|-------------|----------|
| 1 | So derrota por vida zerada | |
| 2 | Vida zerada + incapacidade por falta de recursos | |
| 3 | Vida zerada + fuga/desistencia | yes |
| 4 | Outro | |

**User's choice:** Vida zerada + fuga/desistencia.
**Notes:** Depois o usuario esclareceu que fuga/desistencia deve existir como funcao de debug/harness para encerrar simulacao, nao como mecanica normal do combate.

### Papel da fuga/desistencia

| Option | Description | Selected |
|--------|-------------|----------|
| 1 | Comando de debug/harness fora das regras normais do combate | yes |
| 2 | Acao especial do jogador dentro do combate | |
| 3 | Ambos | |
| 4 | Outro | |

**User's choice:** Comando de debug/harness fora das regras normais do combate.
**Notes:** Isso remove a necessidade de balancear ou inserir essa acao no fluxo canonico de turno.

### Comportamento do inimigo

| Option | Description | Selected |
|--------|-------------|----------|
| 1 | IA fixa por prioridade | yes |
| 2 | Sequencia roteirizada | |
| 3 | Escolha por recursos e estado | |
| 4 | Outro | |

**User's choice:** IA fixa por prioridade.
**Notes:** A prioridade fixa foi escolhida para preservar simplicidade e previsibilidade no primeiro slice.

---

## Modelo inicial de atributos

### Presenca dos atributos no primeiro slice

| Option | Description | Selected |
|--------|-------------|----------|
| 1 | Usar os 6 atributos do rascunho desde ja | yes |
| 2 | Usar um subconjunto pequeno agora e registrar os demais para depois | |
| 3 | Usar atributos totalmente novos so para o slice inicial | |
| 4 | Outro | |

**User's choice:** Usar os 6 atributos do rascunho desde ja.
**Notes:** O usuario quer continuidade com a ideia-base, nao um conjunto alternativo de atributos.

### Profundidade dos atributos no combate inicial

| Option | Description | Selected |
|--------|-------------|----------|
| 1 | Todos existem, mas so alguns afetam combate diretamente; os demais ficam declarados para expansao futura | |
| 2 | Todos os 6 ja afetam o combate diretamente desde o primeiro slice | |
| 3 | Todos os 6 existem e podem aparecer em formulas, mas de forma bem leve | |
| 4 | Outro | yes |

**User's choice:** `STR`, `AGI`, `STA`, `INT` e `WIS` podem afetar o combate; `CHA` precisa existir no modelo, mas nao precisa ter uso mecanico obrigatorio agora.
**Notes:** O usuario tambem detalhou a fantasia esperada para cada atributo, inclusive `CHA` como relacoes/taunt, mas preferiu segurar seu uso obrigatorio no primeiro duelo.

### Papel de CHA no slice inicial

| Option | Description | Selected |
|--------|-------------|----------|
| 1 | CHA existe no modelo, mas nao tem efeito mecanico obrigatorio no primeiro slice | yes |
| 2 | CHA existe no modelo e ja entra no combate via taunt | |
| 3 | CHA existe no modelo e pode afetar combate de outro jeito | |
| 4 | Outro | |

**User's choice:** CHA existe no modelo, mas nao tem efeito mecanico obrigatorio no primeiro slice.
**Notes:** Essa decisao preserva continuidade sem empurrar uma regra social/taunt para dentro do primeiro combate.

---

## Kit inicial de habilidades

### Quantidade de ativas do jogador

| Option | Description | Selected |
|--------|-------------|----------|
| 1 | 1 habilidade | |
| 2 | 2 habilidades | |
| 3 | 3 habilidades | yes |
| 4 | Outro | |

**User's choice:** 3 habilidades alem do ataque basico.
**Notes:** O usuario considera 3 um bom limite de ativas para o primeiro slice.

### Kit do inimigo

| Option | Description | Selected |
|--------|-------------|----------|
| 1 | So ataque basico | |
| 2 | Ataque basico + 1 habilidade | yes |
| 3 | Ataque basico + 2 ou mais habilidades | |
| 4 | Outro | |

**User's choice:** Ataque basico + 1 habilidade.
**Notes:** O objetivo e manter o inimigo legivel sem deixá-lo trivial.

### Ativas e passivas

| Option | Description | Selected |
|--------|-------------|----------|
| 1 | So habilidades ativas agora | |
| 2 | Ativas jogaveis + passivas implementadas no modelo, mas sem foco | |
| 3 | Ativas e passivas ja relevantes no combate desde o inicio | yes |
| 4 | Outro | |

**User's choice:** Ativas e passivas relevantes desde o inicio.
**Notes:** O usuario reforcou que o foco deve incluir a construcao de passivas; tres ativas e o limite desejado, e seria bom ter pelo menos cinco passivas.

### Escopo das passivas iniciais

| Option | Description | Selected |
|--------|-------------|----------|
| 1 | 5 passivas no catalogo inicial do jogador | yes |
| 2 | 5 passivas somando jogador + inimigo + catalogo base | |
| 3 | 5 passivas ja equipaveis/ativas em runtime no primeiro slice | |
| 4 | Outro | |

**User's choice:** 5 passivas no catalogo inicial do jogador.
**Notes:** O alvo minimo foi travado no catalogo do jogador, o que ajuda a orientar o planejamento de conteudo e build.

### Contrato minimo de habilidade

| Option | Description | Selected |
|--------|-------------|----------|
| 1 | Nome + custo + alvo + efeito | |
| 2 | Nome + custo + alvo + efeito + tipo de recurso + regra de uso | yes |
| 3 | Nome + custo + alvo + efeito + escalonamento por atributo + tags + regra de uso | |
| 4 | Outro | |

**User's choice:** Nome + custo + alvo + efeito + tipo de recurso + regra de uso.
**Notes:** O usuario quis um contrato mais claro que o minimo absoluto, mas ainda sem forcar um schema detalhado demais agora.

---

## Validacao observavel

### Evidencia minima de corretude

| Option | Description | Selected |
|--------|-------------|----------|
| 1 | So testes automatizados | |
| 2 | Testes automatizados + log textual do combate | yes |
| 3 | Testes automatizados + log textual + replay reproduzivel | |
| 4 | Outro | |

**User's choice:** Testes automatizados + log textual do combate.
**Notes:** O replay completo foi conscientemente segurado para depois.

### Tratamento do replay nesta fase documental

| Option | Description | Selected |
|--------|-------------|----------|
| 1 | Replay completo fica para a proxima milestone; agora so documentamos a necessidade | yes |
| 2 | Ja definir o formato minimo de replay nesta fase | |
| 3 | Ja definir formato e exemplos de replay nesta fase | |
| 4 | Outro | |

**User's choice:** Replay completo fica para a proxima milestone; agora so documentamos a necessidade.
**Notes:** A fase atual continua enxuta e focada no contrato essencial.

### UAT do estudante

| Option | Description | Selected |
|--------|-------------|----------|
| 1 | Checklist curto por phase, com observacoes livres | yes |
| 2 | Roteiro passo a passo fixo, com resultado esperado em cada passo | |
| 3 | Feedback totalmente livre apos cada entrega | |
| 4 | Outro | |

**User's choice:** Checklist curto por phase, com observacoes livres.
**Notes:** Isso preserva comparabilidade sem burocratizar demais a validacao humana.

### Conteudo minimo do log textual

| Option | Description | Selected |
|--------|-------------|----------|
| 1 | Acoes e resultado final | |
| 2 | Acoes, custos, dano/efeitos e estado resumido por turno | yes |
| 3 | Tudo detalhado, incluindo calculos internos completos | |
| 4 | Outro | |

**User's choice:** Acoes, custos, dano/efeitos e estado resumido por turno.
**Notes:** O usuario quer log suficientemente observavel para aprendizado e diagnostico, sem exigir ainda rastreamento total de calculos internos.

---

## the agent's Discretion

- Formula exata de iniciativa e tie-break.
- Politica inicial de regeneracao/consumo de stamina e mana.
- Nomes concretos das habilidades ativas e passivas, desde que respeitem as quantidades travadas.
- Formato final do checklist de UAT e do log textual.

## Deferred Ideas

- Formato completo de replay e exemplos de replay - proxima milestone de implementacao.
