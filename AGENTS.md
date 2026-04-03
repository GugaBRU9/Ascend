# AGENTS.md

Instrucoes especificas do projeto Ascend.

## Fonte de verdade

- `README.md` e `docs/` sao a definicao canonica atual do projeto.
- `Estruturação.md` e legado consultivo. Nao deve redefinir escopo, regra ou arquitetura.
- `.planning/PROJECT.md`, `.planning/REQUIREMENTS.md`, `.planning/ROADMAP.md` e `.planning/STATE.md` sao a camada operacional do GSD para executar o projeto.

## Objetivo atual

Implementar Ascend com foco principal em validacao de mecanicas.

Neste ciclo, o objetivo nao e entregar um produto final com UI. O objetivo e construir um core executavel, verificavel e reproduzivel que prove:

- combate tatico legivel
- cenas nao-combate com custo e consequencia reais
- personagens nivel 1 jogaveis
- miniaventura inicial executavel
- telemetria suficiente para decidir se o loop base funciona

## Direcao tecnica atual

- Base agnostica de midia.
- Core-first: regras, conteudo e validacao antes de qualquer shell de produto.
- Primeira superficie jogavel: `CLI` minimo + harness de testes/simulacao.
- Stack recomendada no momento:
  - `Node.js 24 LTS`
  - `TypeScript 5.9`
  - `pnpm` workspaces
  - `Zod 4`
  - `Vitest 4`
  - `fast-check`
  - PRNG seedavel

## Regras de arquitetura

- Separar explicitamente:
  - `core` de regras deterministicas
  - `content` canonico dirigido por dados
  - `adapters` de entrada e saida
- Toda mecanica central precisa ser reexecutavel por seed e observavel por logs/eventos.
- Combate e nao-combate devem compartilhar o mesmo backbone de resolucao.
- Nao acoplar regra a UI, persistencia de produto, multiplayer ou infraestrutura prematura.

## Fora de escopo por padrao

Nao puxar para o ciclo atual sem atualizar requisitos/roadmap:

- UI polida de produto
- save system, codex, journal, lore archive
- economia profunda e crafting avancado
- companions com IA
- modo solo com protagonista unico
- mapa em nos obrigatorio
- energia de exploracao
- expansao grande de conteudo antes do primeiro playtest validado

## Workflow

- Antes de editar codigo, alinhar a mudanca com a fase atual em `.planning/ROADMAP.md`.
- Para trabalho planejado, seguir o fluxo GSD em vez de editar fora de contexto.
- Sempre que uma mudanca alterar comportamento canonico, atualizar tambem a documentacao relevante em `docs/` e, se necessario, os artefatos de `.planning/`.
- Em caso de duvida entre velocidade de produto e validacao de mecanica, priorizar validacao de mecanica.
