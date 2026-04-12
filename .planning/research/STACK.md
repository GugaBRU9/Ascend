# Stack Research

**Domain:** backend C++ educacional para combate por turnos
**Researched:** 2026-04-12
**Confidence:** MEDIUM

## Recommended Stack

### Core Technologies

| Technology | Version | Purpose | Why Recommended |
|------------|---------|---------|-----------------|
| C++ | 20 | Modelar dominio, regras e value objects | Entrega recursos modernos suficientes sem aumentar a carga cognitiva de um projeto didatico |
| CMake | 3.30.x ou baseline equivalente 3.28+ | Configurar build, testes e presets | E o caminho mais portavel e documentado para projetos C++ pequenos e multiplataforma |
| CTest | Bundled with CMake | Rodar suites unitarias, integracoes pequenas e harnesses de UAT | Evita empilhar ferramentas cedo demais e mantem o loop de validacao perto do build system |

### Supporting Libraries

| Library | Version | Purpose | When to Use |
|---------|---------|---------|-------------|
| Catch2 | v3.x | Framework de testes com boas mensagens e baixo atrito | Se os testes ultrapassarem o conforto de executaveis simples gerenciados por CTest |
| fmt | v11.x | Formatacao consistente para logs e mensagens de replay | So quando `std::format` nao for uniforme no toolchain alvo |
| nlohmann/json | v3.x | Serializacao opcional de fixtures, snapshots e replay | Introduzir apenas quando o formato de replay estiver estabilizado |

### Development Tools

| Tool | Purpose | Notes |
|------|---------|-------|
| `clang-format` | Padronizar estilo | Mantem diffs pequenos e leitura consistente |
| `clang-tidy` | Encontrar erros e code smells cedo | Configurar um conjunto pequeno de checks no inicio |
| AddressSanitizer + UBSan | Detectar problemas de memoria e comportamento indefinido | Devem rodar em configuracoes de debug/teste, nao em binarios de distribuicao |

## Installation

```bash
cmake -S . -B build -DCMAKE_BUILD_TYPE=Debug
cmake --build build
ctest --test-dir build --output-on-failure
```

## Alternatives Considered

| Recommended | Alternative | When to Use Alternative |
|-------------|-------------|-------------------------|
| CMake | Meson | Faz sentido se o projeto priorizar ergonomia de build acima de compatibilidade com o ecossistema C++ mais comum |
| CTest com testes simples | GoogleTest | Vale a pena quando o projeto crescer e precisar de fixtures mais pesados ou ecossistema maior |
| Catch2 opcional | doctest | Boa opcao se o projeto quiser manter o custo de integracao minimo e permanecer header-only |

## What NOT to Use

| Avoid | Why | Use Instead |
|-------|-----|-------------|
| Unity, Unreal, Godot ou outra engine como base deste milestone | O objetivo atual e fechar contratos do core, nao escolher camada de apresentacao | Core C++ puro com adapters futuros |
| ECS, event bus generico ou arquitetura ultra-abstrata no inicio | Aumenta o custo mental antes de o dominio basico existir | Objetos de valor, servicos de regra e composicao |
| Dependencias externas para tudo desde o dia zero | Esconde regras simples atras de infraestrutura desnecessaria | `std` + poucas bibliotecas justificadas por dor real |

## Stack Patterns by Variant

**If o projeto permanecer estritamente didatico no proximo milestone:**
- Use apenas `std`, CMake, CTest e sanitizers
- Porque reduz atrito e facilita enxergar a regra antes da ferramenta

**If replay e fixtures externos virarem prioridade ja no slice jogavel:**
- Adicione uma biblioteca pequena de serializacao e mantenha schema versionado
- Porque logs manuais deixam de ser suficientes quando a matriz de UAT crescer

## Version Compatibility

| Package A | Compatible With | Notes |
|-----------|-----------------|-------|
| C++20 toolchain | CMake 3.28+ | Baseline segura para compilers modernos em Linux, macOS e Windows |
| CTest | CMake 3.x | Faz parte do mesmo ecossistema, sem integracao extra |
| Catch2 v3.x | CMake FetchContent ou package manager | Adicionar so quando o projeto realmente precisar |

## Sources

- `Estruturação.md` - recorte funcional e limites de escopo do projeto
- `https://cmake.org/cmake/help/v3.30/guide/user-interaction/index.html` - presets e fluxo oficial do CMake
- `https://cmake.org/cmake/help/v3.30/manual/ctest.1.html` - papel do CTest no loop de testes
- `https://clang.llvm.org/docs/AddressSanitizer.html` - uso oficial de sanitizers para feedback rapido
- `https://catch2.org/how-do-i-install-catch2-in-my-project/` - integracao opcional de framework de testes

---
*Stack research for: backend C++ educacional para combate por turnos*
*Researched: 2026-04-12*
