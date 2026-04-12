## Project-Specific Rules

### Fonte de verdade

- `.planning/PROJECT.md`, `.planning/REQUIREMENTS.md`, `.planning/ROADMAP.md` e `.planning/STATE.md` definem o recorte operacional atual.
- `.planning/research/` guarda as recomendacoes tecnicas que sustentam a futura implementacao.
- `Estruturação.md` e fonte bruta de ideacao. Nao deve ser seguida literalmente como backlog.

### Objetivo atual

- O milestone atual nao implementa o jogo.
- O objetivo atual e transformar a ideia ampla do RPG em uma base documental para um backend C++ educacional, testavel e agnostico de plataforma.
- A Phase 1 deve terminar com recomendacao explicita para abrir a proxima milestone de implementacao do combate 1x1.

### Direcao tecnica

- Backend C++ moderno, com foco em clareza e testabilidade.
- Core-first e media-agnostic.
- Separacao explicita entre dominio, catalogos de conteudo, servicos de sessao e adapters.
- Replay, logs e testes fazem parte da arquitetura, nao apenas da etapa de QA.

### Regras de arquitetura

- Nao acoplar o core a UI, engine, framework, rede, banco ou persistencia de produto.
- Preferir composicao, value objects e servicos de regra a hierarquias profundas de heranca.
- Separar definicao de conteudo de estado em runtime.
- Toda regra central deve ser explicavel por entradas, saidas e invariantes visiveis.
- Primeiro fechar contratos e recortes; so depois aprofundar otimizacao ou infraestrutura.

### Fora de escopo por padrao

- Implementacao jogavel completa.
- UI de produto, audio, rendering ou assets.
- Multiplayer, networking e online persistence.
- Save system e pipelines de deploy.
- Balanceamento completo de todos os sistemas do rascunho.

### Workflow

- Antes de editar, alinhar a mudanca com a fase atual em `.planning/ROADMAP.md`.
- Quando a mudanca afetar escopo ou cortes do milestone, atualizar tambem `.planning/PROJECT.md` e `.planning/REQUIREMENTS.md`.
- Enquanto o projeto permanecer documental, validar por consistencia entre artefatos, rastreabilidade e coerencia arquitetural.

<!-- GSD:project-start source:PROJECT.md -->
## Project

**Ascend**

Ascend e um backend C++ educacional, agnostico de plataforma, pensado para estudar modelagem de regras de RPG por turnos com foco em clareza e testabilidade.

Neste milestone inicial, o projeto nao implementa o jogo amplo descrito em `Estruturação.md`. O objetivo atual e transformar essa ideia-base em uma fundacao documental para um primeiro slice futuro de combate 1x1 entre jogador e inimigo, com enfase em atributos e habilidades.

**Core Value:** O primeiro slice de combate 1x1 precisa ser simples o bastante para um estudante entender, testar, reproduzir e corrigir sem depender de UI, engine ou infraestrutura pesada.

### Constraints

- **Tech stack**: Backend em C++ moderno com toolchain simples e portavel - alinha com o objetivo educacional e com o pedido explicito do usuario.
- **Scope**: Milestone atual documental, nao jogavel - protege o foco e evita implementar sistemas demais cedo demais.
- **Architecture**: Core desacoplado de UI, engine, rede, banco e persistencia de produto - preserva testabilidade e independencia de plataforma.
- **Validation**: Regras centrais precisam ser deterministicas e observaveis - sem isso, UAT e replay perdem valor.
- **Learning**: Solucoes simples e explicaveis tem prioridade sobre simulacao completa - o projeto e um metodo de aprendizado, nao uma producao comercial.
<!-- GSD:project-end -->

<!-- GSD:stack-start source:research/STACK.md -->
## Technology Stack

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
- Use apenas `std`, CMake, CTest e sanitizers
- Porque reduz atrito e facilita enxergar a regra antes da ferramenta
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
<!-- GSD:stack-end -->

<!-- GSD:conventions-start source:CONVENTIONS.md -->
## Conventions

Conventions not yet established. Will populate as patterns emerge during development.
<!-- GSD:conventions-end -->

<!-- GSD:architecture-start source:ARCHITECTURE.md -->
## Architecture

Architecture not yet mapped. Follow existing patterns found in the codebase.
<!-- GSD:architecture-end -->

<!-- GSD:skills-start source:skills/ -->
## Project Skills

No project skills found. Add skills to any of: `.claude/skills/`, `.agents/skills/`, `.cursor/skills/`, or `.github/skills/` with a `SKILL.md` index file.
<!-- GSD:skills-end -->

<!-- GSD:workflow-start source:GSD defaults -->
## GSD Workflow Enforcement

Before using Edit, Write, or other file-changing tools, start work through a GSD command so planning artifacts and execution context stay in sync.

Use these entry points:
- `/gsd-quick` for small fixes, doc updates, and ad-hoc tasks
- `/gsd-debug` for investigation and bug fixing
- `/gsd-execute-phase` for planned phase work

Do not make direct repo edits outside a GSD workflow unless the user explicitly asks to bypass it.
<!-- GSD:workflow-end -->



<!-- GSD:profile-start -->
## Developer Profile

> Profile not yet configured. Run `/gsd-profile-user` to generate your developer profile.
> This section is managed by `generate-claude-profile` -- do not edit manually.
<!-- GSD:profile-end -->
