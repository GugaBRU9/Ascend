# AGENTS.md

Instruções específicas do repositório `Ascend`.

## Idioma e comunicação

- Responder em português do Brasil.
- Manter respostas diretas, curtas e técnicas.
- Ao concluir uma alteração, informar:
  - o que foi feito
  - o que foi validado
  - o que não foi validado
  - riscos ou pendências

## Estrutura de C++

- Usar `include/` para headers e `src/` para implementações.
- Declarar interfaces no `.hpp` e implementar no `.cpp`.
- Preferir `#pragma once` nos headers.
- Manter chaves em bloco próprio:
  - abrir `{` em nova linha para classes, structs, enums e funções
  - exceção: listas de inicialização podem permanecer no formato multi-linha antes da chave de abertura

## Convenções do projeto

- Getters podem ter implementação real no `.cpp`.
- Construtores podem ter implementação real no `.cpp`.
- Métodos que não sejam getters/setters não devem receber lógica pronta por padrão quando o objetivo for só estruturar a classe.
- Nesses casos, deixar apenas um `TODO` no `.cpp` para implementação manual posterior.
- Quando a classe for abstrata, preferir métodos virtuais puros para comportamentos específicos das subclasses.

## Escopo atual

- O projeto está em fase de modelagem de classes base.
- Priorizar contratos limpos, nomes claros e baixo acoplamento.
- Evitar adicionar regra de negócio sem pedido explícito.

## Validação

- Após cada mudança de estrutura, rodar ao menos `make`.
- Não afirmar integração funcional sem compilar o projeto.
