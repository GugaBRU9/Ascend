# Backend C++ Foundation

Este documento fixa a base tecnica para a futura milestone de implementacao do duelo 1x1. Ele traduz o recorte documental atual em uma arquitetura C++ simples, testavel e alinhada aos contratos ja definidos em [combat-domain.md](../combat-1x1/combat-domain.md) e [observability.md](../combat-1x1/observability.md).

## Target Modules

O primeiro slice implementavel deve nascer com separacao explicita entre quatro modulos conceituais:

| Module | Responsibility | Notes |
|--------|----------------|-------|
| `domain` | Representar `CombatState`, regras centrais, comandos e invariantes do duelo. | Nao pode depender de UI, engine, rede, banco ou persistencia de produto. |
| `content` | Declarar catalogos estaticos de atributos, habilidades, jogador e inimigo inicial. | Conteudo fica separado do estado mutavel de runtime. |
| `session` | Orquestrar bootstrap do duelo, resolucao de turno e casos de uso textuais. | Consome `domain` e `content` sem absorver logica de regra por conveniencia. |
| `adapters` | Conectar CLI futura, harness textual, fixtures e integracoes de teste. | E a borda descartavel do sistema, nunca a fonte de verdade das regras. |

Essa separacao preserva o objetivo educacional do projeto: o estudante deve conseguir localizar a regra central no `domain`, entender como o conteudo e carregado via `content`, acompanhar o fluxo pelo `session` e trocar interfaces externas dentro de `adapters` sem reabrir a arquitetura.

## Build And Test Stack

O baseline tecnico recomendado para a milestone `v1.1` e:

- `C++20` como linguagem do core e dos value objects.
- `CMake` como sistema de build e configuracao portavel.
- `CTest` como executor baseline para testes unitarios, checks de integracao pequenos e harnesses.
- `clang-format` para manter estilo consistente e diffs pequenos.
- `clang-tidy` com um conjunto inicial pequeno de checks para detectar problemas cedo.
- `AddressSanitizer` em configuracoes de debug/teste para capturar erros de memoria.
- `UBSan` em configuracoes de debug/teste para expor comportamento indefinido.

Essa stack fecha o minimo necessario para um backend C++ didatico: toolchain moderna, build reproduzivel, validacao automatizada e instrumentacao suficiente para diagnosticar erros sem introduzir infraestrutura pesada.

## Validation Strategy

O primeiro slice implementavel nao deve nascer apenas com codigo compilando. A fundacao minima de validacao precisa incluir:

- testes unitarios para regras centrais como iniciativa, custo de acao, resolucao de turno e encerramento do combate;
- um harness textual capaz de inicializar um duelo simples e produzir uma sequencia legivel de eventos;
- logs observaveis alinhados ao contrato de [observability.md](../combat-1x1/observability.md), com snapshots claros de vida, stamina e mana;
- comandos e saidas suficientemente deterministicas para o estudante reproduzir um duelo simples, comparar resultados e investigar divergencias.

Em termos arquiteturais, isso significa que `domain` e `session` devem expor entradas, saidas e invariantes visiveis desde o inicio. Replay completo continua futuro, mas a borda textual e os testes precisam nascer junto do slice para evitar uma implementacao opaca.

## Dependency Policy

O baseline preferido continua sendo `std` + stack de build/teste. Dependencias externas entram apenas quando removerem atrito real sem esconder o dominio:

| Dependency | Status | Entry Criterion |
|------------|--------|-----------------|
| `Catch2` | Opcional | Introduzir somente se `CTest` com executaveis simples deixar de ser ergonomico para testes unitarios. |
| `fmt` | Opcional | Introduzir apenas se `std::format` nao for consistente no toolchain alvo ou se a formatacao textual do log exigir ganho claro de legibilidade. |
| `nlohmann/json` | Opcional | Introduzir apenas quando fixtures, snapshots ou replay precisarem de serializacao versionada e o schema estiver mais estavel. |

Continuam explicitamente rejeitados neste recorte:

- engine de jogo como base do core;
- ECS generico, event bus generico ou arquitetura ultra-abstrata antes de existir necessidade concreta;
- dependencias grandes usadas apenas para antecipar infraestrutura futura;
- qualquer acoplamento do core a UI, rendering, rede, banco ou persistencia online.

A regra pratica e simples: se uma dependencia nao melhora diretamente clareza, testabilidade ou observabilidade do duelo 1x1, ela nao entra na fundacao da `v1.1`.
