# AGENTS.md

## Padrão default para criação de classes C++

- Usar `include/` para `.hpp` e `src/` para `.cpp`.
- Quando o pedido for apenas estrutura, esqueleto, scaffold ou protótipos, não gerar implementação.
- O `.hpp` deve conter declaração da classe, atributos e assinaturas de construtores, destrutor e métodos.
- O `.cpp` deve conter apenas os includes necessários e a estrutura inicial do arquivo.
- Não adicionar corpos de função, stubs vazios, `TODO`, `throw`, `return` fake ou lógica placeholder por padrão.
- Só implementar métodos no `.cpp` quando isso for pedido explicitamente.
