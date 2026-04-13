# Phase 2 Research: Bootstrap da Fundacao C++ 1x1

**Phase:** 2
**Date:** 2026-04-13
**Confidence:** HIGH
**Question answered:** O que preciso saber para planejar bem esta phase?

## Executive Summary

Esta phase deve abrir um workspace C++20 compilavel, pequeno e didatico, sem antecipar o runtime real do duelo. O melhor recorte continua sendo sequencial em 3 planos: primeiro fechar o bootstrap de build e o entrypoint publico do repositorio, depois materializar os quatro modulos como targets independentes, e por fim provar a baseline de validacao com um teste real pequeno rodando em `CTest` tambem no preset `asan-ubsan`.

O repositorio hoje tem documentacao canonica suficiente para evitar pesquisa de ecossistema pesada. O ponto principal de planejamento nao e "qual tecnologia usar", porque isso ja esta travado; e "como transformar essas decisoes em um bootstrap claro para um estudante sem cair em CMake excessivamente abstrato ou em pseudo-modularizacao vazia".

## Planning Implications

### 1. O bootstrap precisa ser simples, mas nao monolitico

O contexto ja travou a divisao `domain` / `content` / `session` / `adapters`. O plano deve refletir isso em diretorios e targets reais logo na `Phase 2`, mesmo que o conteudo inicial de cada modulo ainda seja so um placeholder compilavel.

**Implication for planning:** usar quatro targets nomeados de forma explicita e uma camada publica de headers sob `include/ascend/...`, evitando um target unico que esconda as fronteiras do projeto.

### 2. O root build deve preferir legibilidade a "magic CMake"

O estudante precisa conseguir abrir o `CMakeLists.txt` e entender o fluxo principal. Um pouco de encapsulamento pode ser aceitavel para warnings/sanitizers, mas a base nao deve depender de varios modulos CMake customizados para um projeto ainda pequeno.

**Implication for planning:** concentrar a fundacao em `CMakeLists.txt`, `CMakePresets.json`, `src/CMakeLists.txt` e `tests/CMakeLists.txt`, com o minimo de helper extra.

### 3. Presets devem traduzir diretamente as decisoes da discussao

Os presets ja foram escolhidos: `dev`, `asan-ubsan`, `release`. Eles precisam existir com nomes identicos no `CMakePresets.json`, usar builds out-of-source e expor comandos copiavies para README e verificacao automatizada.

**Implication for planning:** o plano deve fixar `build/dev`, `build/asan-ubsan` e `build/release` como `binaryDir`, com presets de configure/build/test coerentes entre si.

### 4. O README esta defasado em relacao ao milestone ativo

O `README.md` atual ainda descreve o milestone "atual" como a base documental da `v1.0`. Depois do arquivamento da `v1.0` e da abertura da `v1.1`, isso virou drift de onboarding.

**Implication for planning:** o primeiro plano deve atualizar o framing publico para a `v1.1 Slice de Implementacao 1x1`, preservando os limites de escopo e adicionando os comandos exatos de bootstrap.

### 5. A separacao de dependencias internas precisa aparecer cedo

Os documentos canonicos sugerem a seguinte direcao:

- `domain`: sem dependencia interna em outros modulos.
- `content`: sem dependencia em `session` ou `adapters`.
- `session`: pode consumir `domain` e `content`.
- `adapters`: pode consumir `session` e reservar a borda textual futura.

**Implication for planning:** a `Phase 2` deve registrar essa direcao nos `target_link_libraries`, nao apenas na documentacao.

### 6. O primeiro teste real pode ser pequeno e ainda assim util

Como a `Phase 2` nao implementa `CombatState` nem `TurnResolver`, o teste nao precisa simular combate. O valor do teste aqui e provar que os quatro modulos compilam, expem headers publicos e conseguem ser linkados por um executavel de `CTest`.

**Implication for planning:** usar um smoke test simples com `assert`, `std::string_view` e funcoes placeholder com retornos exatos e verificaveis.

### 7. A baseline de diagnostico precisa evitar falha silenciosa

Warnings fortes sem `-Werror` combinam com o perfil do usuario, mas o preset `asan-ubsan` nao pode parecer ativo quando o compilador nao suporta a instrumentacao definida.

**Implication for planning:** quando `ASCEND_ENABLE_SANITIZERS=ON`, o CMake deve habilitar `-fsanitize=address,undefined -fno-omit-frame-pointer` em GNU/Clang e falhar com mensagem clara fora desse caso, em vez de seguir sem protecao.

## Recommended Artifact Set

| Roadmap Plan | Recommended Output | Why |
|--------------|--------------------|-----|
| 02-01 | `README.md`, `.gitignore`, `CMakeLists.txt`, `CMakePresets.json`, `.clang-format`, `.clang-tidy`, `src/CMakeLists.txt`, `tests/CMakeLists.txt` | Fecha o entrypoint publico, o bootstrap de build e as configuracoes basicas |
| 02-02 | `src/domain/*`, `src/content/*`, `src/session/*`, `src/adapters/*` | Materializa a arquitetura em targets e diretorios reais |
| 02-03 | `tests/CMakeLists.txt`, `tests/bootstrap_smoke.cpp` | Prova `CTest`, link entre modulos e preset instrumentado |

## Requirement Coverage Strategy

### ARCH-05

Cobrir com:

- `README.md` contendo comandos exatos de configure/build/test;
- `CMakeLists.txt` com `C++20`, `CTest` e bootstrap legivel;
- `CMakePresets.json` contendo `dev`, `asan-ubsan` e `release`.

### ARCH-06

Cobrir com:

- diretorios e headers publicos separados por modulo;
- um target por modulo;
- dependencias internas unidirecionais `domain/content -> session -> adapters`.

### VAL-05

Cobrir com:

- pelo menos um executavel de teste registrado em `CTest`;
- comando rapido de build;
- suite completa passando em `dev` e `asan-ubsan`.

## Risks To Address During Planning

### R-01: README e bootstrap publico ficarem atras do milestone ativo

Se o README continuar falando em milestone documental como "atual", o estudante abre o repositorio e recebe framing incorreto logo no primeiro arquivo.

**Mitigation for planner:** incluir update de README no primeiro plano, com nome do milestone e comandos reais.

### R-02: Modularizacao cosmetica

Criar pastas `domain`, `content`, `session` e `adapters` sem targets, includes ou dependencia explicita entre elas nao resolve `ARCH-06`.

**Mitigation for planner:** cada modulo precisa ter `CMakeLists.txt`, header publico e source proprio, mais dependency direction verificavel.

### R-03: CMake overengineered cedo demais

Uma fase didatica pode se perder em funcoes genricas, macros e modulos auxiliares antes de o dominio existir.

**Mitigation for planner:** manter o bootstrap enxuto e colocavel em poucos arquivos centrais.

### R-04: Validacao fraca por ausencia de teste real

Configurar `CTest` sem nenhum executavel de teste nao prova que o loop funciona.

**Mitigation for planner:** fechar a phase com um smoke test compilando e rodando em `dev` e `asan-ubsan`.

## Validation Architecture

### Validation Posture

Esta phase deixa de ser puramente documental. A verificacao principal passa a ser configure/build/test de um bootstrap pequeno, mais leitura manual do entrypoint publico e da separacao entre modulos.

### Evidence Artifacts

Antes de encerrar a phase, estes grupos precisam existir com conteudo util:

- `README.md`
- `.gitignore`
- `CMakeLists.txt`
- `CMakePresets.json`
- `.clang-format`
- `.clang-tidy`
- `src/domain/*`
- `src/content/*`
- `src/session/*`
- `src/adapters/*`
- `tests/CMakeLists.txt`
- `tests/bootstrap_smoke.cpp`

### Fast Checks During Execution

Use checks baratos e repetiveis a cada task:

- `cmake --preset dev`
- `cmake --build --preset dev`
- `rg -n "v1\\.1 Slice de Implementacao 1x1|cmake --preset dev|ctest --preset asan-ubsan" README.md`
- `rg -n "add_library\\(ascend_domain|add_library\\(ascend_content|add_library\\(ascend_session|add_library\\(ascend_adapters" src/*/CMakeLists.txt`

### Full Gate Before Phase Close

Rodar no fim da phase:

- `cmake --preset dev`
- `cmake --build --preset dev`
- `ctest --preset dev --output-on-failure`
- `cmake --preset asan-ubsan`
- `cmake --build --preset asan-ubsan`
- `ctest --preset asan-ubsan --output-on-failure`
- `cmake --preset release`
- `cmake --build --preset release`

### Manual Review Points

Mesmo com build verde, dois pontos ainda precisam de leitura humana:

- o `README.md` passou a refletir a `v1.1` sem sugerir jogo completo ou UI final;
- a direcao de dependencias entre `domain`, `content`, `session` e `adapters` esta legivel para um estudante pela leitura dos headers e `CMakeLists.txt`.

## Suggested Planning Defaults

Para evitar ambiguidade no plano, o planner pode assumir:

- `cmake_minimum_required(VERSION 3.28)`;
- `project(Ascend LANGUAGES CXX)`;
- targets `ascend_domain`, `ascend_content`, `ascend_session`, `ascend_adapters`;
- headers publicos sob `include/ascend/...`;
- warnings GCC/Clang em `-Wall -Wextra -Wpedantic`;
- warnings MSVC em `/W4 /permissive-`;
- smoke test usando apenas `<cassert>` e `std::string_view`;
- placeholder textual do adapter exposto por `ascend::adapters::text_adapter_name()`.

## Research Conclusion

O melhor plano para a `Phase 2` e um bootstrap pequeno, verificavel e explicitamente modular. O valor principal aqui nao vem de profundidade funcional; vem de deixar o estudante compilar, navegar e testar uma espinha dorsal clara sobre a qual `CombatState`, `TurnResolver` e replay observavel vao ser construidos nas phases seguintes.

---
*Ready for planning: yes*
