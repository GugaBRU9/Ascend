# Phase 1: Guia Canonico de Implementacao - Research

**Researched:** 2026-04-03
**Domain:** fase documental para fechar base de implementacao C++ agnostica de plataforma
**Confidence:** HIGH

<user_constraints>
## User Constraints (from CONTEXT.md)

### Locked Decisions
### Core Scope
- **D-01:** O primeiro backend implementavel deve comecar com um nucleo minimo: atributos, recursos, efeitos/status, personagens, habilidades, resolucao deterministica e combate basico.
- **D-02:** Equipamentos e progressao ficam fora do primeiro milestone de codigo. A primeira expansao natural depois do core minimo deve ser customizacao de personagem.
- **D-03:** O combate inicial deve comecar com protagonista unico contra inimigos. Party, companheiros e IA tatica ficam para fases posteriores.

### Guide Concreteness
- **D-04:** O guia da fase 1 deve definir modulos, responsabilidades e exemplos representativos de tipos, sem tentar listar exaustivamente todas as classes do projeto.
- **D-05:** O guia deve descrever operacoes esperadas e responsabilidades por tipo ou modulo, mas sem travar assinaturas detalhadas de metodos.
- **D-06:** O formato principal do guia deve ser Markdown textual com tabelas, priorizando leitura simples e manutencao facil.
- **D-07:** O guia deve ter uma secao explicita de decisoes em aberto para mostrar o que esta definido, o que esta recomendado e o que o estudante ainda precisa fechar.

### Content vs Runtime
- **D-08:** O projeto deve tratar definicoes de jogo como orientadas a dados, mas manter a logica central de regras no codigo.
- **D-09:** A autoria do catalogo deve acontecer de forma progressiva, conforme o estudante precisar criar conteudo real.
- **D-10:** O sistema de cadastro deve ter um metodo ou fluxo de cadastro separado para cada tipo de entidade, para evitar mistura de responsabilidades e confusao conceitual.
- **D-11:** Cadastro e persistencia de conteudo devem ficar em um servico de aplicacao/autoria separado do core de runtime.
- **D-12:** Criacao do personagem do jogador continua sendo parte essencial do core. O runtime deve conseguir montar e validar o personagem a partir das definicoes cadastradas.

### First Implementation Milestone
- **D-13:** A primeira milestone de implementacao deve focar fundacao do dominio mais um caminho minimo de personagem jogavel.
- **D-14:** A ordem didatica recomendada e: tipos -> regras -> criacao de personagem -> combate minimo.
- **D-15:** A saida validavel principal desse primeiro recorte deve ser uma CLI estruturada, apoiada por testes mais leves.
- **D-16:** Essa CLI deve servir como ferramenta de estudo e inspecao: cadastrar conteudo, criar personagem, disparar acoes e inspecionar estado e resultados, sem tentar parecer o jogo final.

### Claude's Discretion
- Nome exato de modulos, namespaces e tipos representativos, desde que respeitem o recorte acima.
- Nivel de detalhe dos exemplos no guia, desde que nao elimine as decisoes que o estudante ainda precisa tomar.
- Granularidade dos testes iniciais, desde que eles continuem subordinados ao papel didatico principal da CLI.
- Forma exata de registrar as decisoes em aberto, desde que fiquem visiveis e acionaveis para a proxima milestone.

### Deferred Ideas (OUT OF SCOPE)
- Equipamentos, progressao, requisitos de build e customizacao profunda ficam para a primeira expansao depois do core minimo.
- Party, companheiros e IA tatica ficam para fases posteriores ao combate inicial de protagonista unico.
- Quests, NPCs, mundo, exploracao, economia, crafting, save e persistencia de mundo nao entram na primeira milestone de implementacao do core.
- A fase especifica para discutir e expandir muitos dados de catalogo fica para uma etapa futura, depois que a base do core e do fluxo de cadastro estiver clara.
</user_constraints>

<phase_requirements>
## Phase Requirements

| ID | Description | Research Support |
|----|-------------|------------------|
| FRAM-01 | Reader can understand in one pass what Ascend is, why this milestone is documental, and who this material is for. | Resumo, framing do milestone, publico-alvo e restricoes de escopo devem abrir o guia principal. |
| FRAM-02 | Reader can identify which ideas from `Estruturação.md` are core candidates, deferred systems, or platform concerns. | Matriz obrigatoria de classificacao `core minimo / primeira expansao / deferred / concern de plataforma`. |
| DOMN-01 | Reader can map the selected core systems to bounded modules or namespaces for a future C++ backend. | Tabela de modulos/namespaces por dominio com fronteiras, ownership e dependencias permitidas. |
| DOMN-02 | Reader can identify the main classes, value objects, and service families needed for characters, combat, attributes, skills, items, quests, NPCs, and progression. | Tipos representativos para core minimo e mapas rasos de extensao para items, quests, NPCs e progressao. |
| DOMN-03 | Reader can distinguish runtime state from content definitions and know which mechanics should remain data-driven. | Separacao obrigatoria entre `Definition`, `State`, `Session`, `AuthoringService` e regras em codigo. |
| DOMN-04 | Reader can identify which rules must be deterministic and therefore testable through stable inputs and outputs. | Inventario de regras deterministicas e padrao de `input -> resolve -> output/events`. |
| ARCH-01 | Reader can understand the boundary between core rules, content/catalog, session/application services, and platform adapters. | Secao de arquitetura com camadas, dependencias permitidas e anti-acoplamentos. |
| ARCH-02 | Reader can understand the recommended build, test, and static-analysis workflow for the future C++ implementation. | Stack prescritiva com C++20, CMake Presets, CTest, GoogleTest, compile_commands e analise estatica. |
| ARCH-03 | Reader can see how replay, logs, and scenario tests will validate the implementation without depending on a final UI. | Estrategia de validacao baseada em testes, cenarios, eventos, logs estruturados e CLI de estudo. |
| EDUC-01 | Student can follow a clear learning path that starts from simpler modules before orchestration-heavy systems. | Ordem didatica travada: tipos -> regras -> criacao de personagem -> combate minimo. |
| EDUC-02 | Student can identify which abstractions should stay intentionally simple in the first implementation milestone. | Secoes de `nao complicar agora`, `nao hand-roll` e limites do primeiro milestone. |
| EDUC-03 | Documentation is direct enough to become a technical backlog without requiring hidden assumptions from the original author. | Guia principal unico, tabelas de responsabilidade, IDs de requisito/decisao e handoff explicito. |
| HNDF-01 | Reader can list the open decisions that must be closed before or during the next implementation milestone. | `01-HANDOFF.md` com decisoes abertas, defaults recomendados e gatilhos de replanejamento. |
| HNDF-02 | Reader can start the next milestone with a recommended phase split for the first real implementation work. | Secao com faseamento prescritivo da primeira milestone de codigo. |
</phase_requirements>

## Summary

Phase 01 deve produzir um artefato canonico unico, curto o suficiente para ser lido de ponta a ponta e forte o suficiente para virar backlog tecnico sem reabrir as decisoes D-01 a D-16. O erro principal a evitar e transformar esta fase em uma enciclopedia do RPG: para planejar bem, o guia precisa aprofundar apenas o `core minimo` e tratar os demais sistemas como fronteiras futuras, nao como backlog implementavel imediato.

Os documentos locais ja travam a direcao pedagogica e arquitetural: milestone documental, backend C++ core-first, separacao entre dominio, catalogo, sessao e adapters, e uma futura CLI de estudo como principal artefato validavel do primeiro recorte de codigo. A pesquisa externa confirma que a combinacao mais simples e atual para suportar isso continua sendo `C++20 + CMake Presets + CTest + GoogleTest + compile_commands + clang-tidy + ASan/UBSan`, mas o ambiente local ainda nao tem `cmake`, `ctest`, `clang++`, `clang-tidy` nem `ninja`; portanto, a validacao desta fase deve ser de rastreabilidade e consistencia documental, nao de execucao de C++.

**Primary recommendation:** planeje a fase em torno de um `01-GUIA-CANONICO.md` principal, com `01-HANDOFF.md` separado, e faca os 4 planos escreverem secoes complementares desse guia em ordem estrita: framing/scope -> mapa de dominio -> arquitetura/validacao -> handoff e proxima milestone.

## Project Constraints (from AGENTS.md)

- O milestone atual e documental; nao deve implementar gameplay, shell de produto, UI, rendering, audio, multiplayer, save system nem pipelines de deploy.
- O objetivo imediato e transformar a ideia ampla de RPG em uma base documental para um backend C++ educacional, testavel e agnostico de plataforma.
- O core deve permanecer desacoplado de UI, engine, framework, rede, banco e persistencia de produto.
- Arquitetura deve preferir composicao, value objects e servicos de regra a heranca profunda.
- Definicao de conteudo deve ficar separada do estado em runtime.
- Toda regra central precisa ser explicavel por entradas, saidas e invariantes visiveis.
- Enquanto o projeto for documental, a validacao principal e coerencia entre artefatos, rastreabilidade e consistencia arquitetural.
- Phase 01 precisa terminar com recomendacao explicita para abrir a proxima milestone de implementacao.

## What Planner Must Preserve from CONTEXT.md

| Preserve | Why it is locked | Planning implication |
|---------|-------------------|----------------------|
| `core minimo` restrito a atributos, recursos, status/efeitos, personagens, habilidades, resolucao deterministica e combate basico | D-01 | O plano nao pode puxar equipamentos, progressao, quests, NPCs ou mundo para a profundidade do core inicial. |
| protagonista unico vs inimigos no primeiro combate | D-03 | Party, companheiros e IA tatica podem aparecer apenas como extensao futura e fronteira arquitetural. |
| guia com modulos, responsabilidades e tipos representativos, sem catalogo exaustivo de classes | D-04 | Planos devem produzir tabelas de exemplos e familias de tipos, nao diagramas completos nem APIs congeladas. |
| operacoes esperadas sem assinaturas fechadas | D-05 | O planner deve pedir `familias de metodos` e contratos sem virar especificacao de header file. |
| Markdown textual com tabelas | D-06 | O artefato principal deve ser texto simples, revisavel em git; diagramas sao opcionais e secundarios. |
| secao explicita de decisoes em aberto | D-07 | Handoff precisa separar `definido`, `recomendado` e `a fechar`, com dono e impacto. |
| definicoes orientadas a dados, regras no codigo | D-08 | O guia deve separar `Definition` de `State` e proibir DSL de regra cedo demais. |
| autoria progressiva com servico separado por tipo de entidade | D-09, D-10, D-11 | O planner deve nomear um `Authoring/Content Application Service`, sem fundi-lo ao runtime ou ao combate. |
| criacao de personagem continua no core | D-12 | O mapa de modulos precisa deixar claro que `CharacterCreation` consome definicoes, mas vive no core/session, nao no servico de autoria. |
| proxima milestone: fundacao de dominio + personagem jogavel minimo | D-13 | O handoff tem que sair com faseamento implementavel do primeiro recorte de codigo. |
| ordem didatica travada | D-14 | Os planos e o handoff devem refletir `tipos -> regras -> criacao de personagem -> combate minimo`. |
| CLI estruturada como artefato principal da primeira milestone de codigo | D-15, D-16 | Phase 01 deve definir o papel da CLI, mas nao implementa-la agora nem trata-la como jogo final. |

## Scope Cuts From `Estruturação.md`

| Bucket | Systems | Planner handling |
|--------|---------|------------------|
| Core minimo | protagonista, atributos, habilidades, recursos, status, dano, inimigos, fluxo de combate deterministico | detalhar em modulos, tipos representativos, invariantes e exemplos de fluxo |
| Primeira expansao apos o core | equipamentos, itens equipaveis, requisitos, progressao, build basica | documentar como expansao natural e fronteira de modulo, sem puxar para a primeira milestone |
| Deferred, mas com fronteira nomeada | quests, NPCs, crafting, economia, mapa, mundo, travel, exploration energy, rest nodes, save, codex, lore archive | mapear superficialmente para satisfazer DOMN-02 e FRAM-02, marcando explicitamente que nao entram no primeiro recorte de codigo |
| Platform concerns / produto | UI, rendering, audio, app shell, online persistence, multiplayer, deploy | manter fora do guia de implementacao do core; citar apenas como adapters futuros |

## Recommended Document Outputs

| Output | Priority | Purpose | Must contain |
|--------|----------|---------|--------------|
| `01-GUIA-CANONICO.md` | P0 | fonte primaria para reader/planner/implementer | framing do milestone, matriz de escopo, modulo por modulo, fronteiras runtime vs conteudo, stack, validacao, ordem didatica e exemplos representativos |
| `01-HANDOFF.md` | P0 | registrar riscos, decisoes abertas e a primeira milestone de codigo | decisoes abertas com impacto, riscos/anti-patterns, definicao de pronto para milestone 2 e faseamento recomendado da implementacao |
| `01-VALIDATION.md` | P1 | artefato derivado do planner/orchestrator para checks da fase | comandos de rastreabilidade, checklist manual, gates por plano e validacao final |

**Recommendation:** evite quatro documentos pares separados por plano. Os planos 01-01, 01-02 e 01-03 devem preencher secoes do mesmo `01-GUIA-CANONICO.md`; o plano 01-04 escreve o `01-HANDOFF.md` e fecha a transicao.

## Recommended Breakdown of the 4 Roadmap Plans

| Plan | Core deliverable | Must answer | Must not do | Completion gate |
|------|------------------|-------------|-------------|-----------------|
| 01-01 | abertura do `01-GUIA-CANONICO.md` | o que o projeto e, por que este milestone e documental, para quem e, e como cada bloco de `Estruturação.md` cai em `core minimo`, `primeira expansao`, `deferred` ou `platform concern` | discutir detalhes de API, parser, persistencia final ou CLI concreta | todos os blocos principais do rascunho estao classificados sem ambiguidades e FRAM-01/FRAM-02 ficam cobertos |
| 01-02 | secao de mapa de dominio | quais modulos/namespaces existem, quais tipos representativos e families de servico cada um precisa, e como runtime se separa de definicoes | listar todas as classes do projeto ou aprofundar quests/NPCs/progressao no mesmo nivel do core minimo | DOMN-01..DOMN-04 cobertos com tabelas e exemplos representativos |
| 01-03 | secao de arquitetura, stack e validacao | como o futuro backend vai separar domain/content/session/adapters, qual baseline C++ usar, como build/teste/analise estatica entram, e como logs/replay/CLI validam sem UI final | criar stubs de codigo, escolher parser definitivo, ou transformar validacao em dependencia de UI | ARCH-01..ARCH-03 e EDUC-01..EDUC-02 cobertos; ambiente ausente documentado como risco controlado |
| 01-04 | `01-HANDOFF.md` | quais decisoes continuam abertas, quais riscos merecem protecao, e como quebrar a primeira milestone de codigo em fases | reabrir D-01..D-16 ou empurrar implementacao para esta fase | HNDF-01/HNDF-02 cobertos com proxima milestone faseada e criterios de pronto claros |

### Recommended next milestone split

1. `02-01 Fundacao de tipos e invariantes` - IDs, value objects, atributos, recursos, status, tipos de dano, personagens base.
2. `02-02 Regras deterministicas e resolutores` - dano, custos, aplicacao/tick de efeitos, resultados estruturados, eventos e logs.
3. `02-03 Criacao de personagem e catalogo minimo` - definicoes minimas, servico de autoria separado, criacao/validacao do protagonista.
4. `02-04 Combate minimo + CLI de estudo` - fluxo de turno protagonista vs inimigos, comandos de inspecao, cenario smoke e testes leves.

## Standard Stack

### Core

| Library / Tool | Version | Purpose | Why Standard |
|----------------|---------|---------|--------------|
| C++ language mode | C++20 baseline | modelar dominio, regras e estado | Alinha com a direcao do projeto e continua simples o bastante para um backend educacional; evitar modules/coroutines como requisito. |
| CMake | 3.28+ recommended baseline; current official release 4.3.1 (2026-03-27) | configuracao, build, presets e compile database | A documentacao oficial confirma `configure/build/test presets`; schema v8 em 3.28 adiciona `$schema`, o que melhora DX sem exigir CMake 4.x. |
| CTest | bundled with CMake 3.28+ | execucao de testes e cenarios | `ctest --preset` liga o fluxo de teste ao mesmo arquivo de presets do build. |
| GoogleTest | 1.17.0 latest official release (`/releases/latest` redireciona para `v1.17.0`) | testes unitarios e integracao leve | Continua padrao de fato em C++; a release atual exige pelo menos C++17, entao encaixa no baseline C++20. |

### Supporting

| Library / Tool | Version | Purpose | When to Use |
|----------------|---------|---------|-------------|
| `CMAKE_EXPORT_COMPILE_COMMANDS=ON` | builtin CMake variable | gerar `compile_commands.json` | Ative em todo preset de desenvolvimento para suportar `clang-tidy` e tooling. |
| `clang-tidy` | use the installed stable LLVM/Clang toolchain | analise estatica | Quando `clang-tidy` estiver disponivel; use compile command database em vez de flags manuais espalhadas. |
| AddressSanitizer | use the installed stable LLVM/Clang toolchain | detectar erros de memoria | Preset/debug build dedicado; nunca como dependencia da documentacao desta fase. |
| UndefinedBehaviorSanitizer | use the installed stable LLVM/Clang toolchain | detectar UB em runtime | Preset/debug build dedicado; especialmente util para overflow, null e bounds no milestone de codigo. |
| Ninja | optional | build rapido | Use se instalado; se nao, `Unix Makefiles` continua aceitavel com `compile_commands.json`. |

### Alternatives Considered

| Instead of | Could Use | Tradeoff |
|------------|-----------|----------|
| CMake Presets + CTest | comandos shell ad-hoc | mais rapido no dia 1, pior rastreabilidade e reprodutibilidade |
| GoogleTest | Catch2 | funciona, mas nao reduz risco o suficiente para justificar troca no milestone atual |
| Ninja | Unix Makefiles | fallback viavel quando `ninja` nao estiver instalado |
| clang-tidy + Clang sanitizers | GCC warnings only | fallback temporario aceitavel, mas com menos feedback estrutural |

**Tool acquisition policy:** Phase 01 deve documentar a stack, nao acoplar o plano a `apt`, `brew`, `vcpkg` ou `conan`. O primeiro milestone de codigo deve abrir com prerequisito explicito de toolchain instalada.

```bash
# Ferramentas que precisam existir antes da primeira milestone de codigo
cmake --version
ctest --version
g++ --version
clang-tidy --version
```

**Version verification:** CMake `releases/latest` oficial redireciona para `v4.3.1` publicada em 2026-03-27. GoogleTest `releases/latest` oficial redireciona para `v1.17.0`; a data exibida pela pagina e `30 Apr 17:07`, que eu interpreto como 2025-04-30. O ambiente local desta pesquisa so confirmou `g++ 13.3.0`; `cmake`, `ctest`, `clang++`, `clang-tidy` e `ninja` nao estao instalados.

## Architecture Patterns

### Recommended Documentation Structure

```text
.planning/phases/01-guia-canonico-de-implementacao/
|-- 01-GUIA-CANONICO.md   # artefato principal
|-- 01-HANDOFF.md         # riscos, decisoes abertas e proxima milestone
`-- 01-VALIDATION.md      # comandos/checklists gerados pelo planner
```

### Recommended Future Code Structure

```text
include/ascend/
|-- domain/        # state types, invariants, ids, value objects
|-- rules/         # deterministic resolvers and result DTOs
|-- content/       # definitions, schemas, loaders/contracts
|-- session/       # character creation and use-case orchestration
|-- adapters/      # CLI and future platform ports
`-- validation/    # replay/event/log contracts

src/
|-- domain/
|-- rules/
|-- content/
|-- session/
|-- adapters/
`-- validation/

tests/
|-- unit/
|-- integration/
`-- scenarios/

apps/
`-- cli/           # first study/inspection shell in milestone 2
```

### Pattern 1: Single Canonical Guide
**What:** um documento principal concentra framing, escopo, mapa de modulos, arquitetura e validacao.
**When to use:** nesta fase documental.
**Example:**

```markdown
# Guia Canonico de Implementacao

## O Que Este Milestone Faz
## Matriz de Escopo
## Mapa de Modulos
## Fronteiras de Arquitetura
## Estrategia de Validacao
## Decisoes em Aberto
```

### Pattern 2: Tiered Module Detail
**What:** dar profundidade alta ao `core minimo`, media a `primeira expansao` e baixa aos sistemas `deferred`.
**When to use:** para satisfazer DOMN-02 sem inflar o primeiro recorte de codigo.
**Example:**

```markdown
| Module | Detail level | Why |
|--------|--------------|-----|
| combat | high | entra no primeiro milestone |
| progression | medium | primeira expansao apos o core |
| quests | low | fronteira futura, sem backlog imediato |
```

### Pattern 3: Definitions Are Not Runtime State
**What:** `SkillDefinition` e diferente de `LearnedSkill`; `EnemyArchetype` e diferente de `EnemyState`.
**When to use:** sempre que houver autoria de conteudo, persistencia ou instanciacao de runtime.
**Example:**

```cpp
// Source: internal architecture guidance + locked D-08..D-12
struct SkillDefinition {
  SkillId id;
  ResourceCost cost;
  DamageProfile damage;
};

struct LearnedSkill {
  SkillId definition_id;
  SlotIndex slot;
};
```

### Pattern 4: Deterministic Rule Services
**What:** regras centrais recebem input explicito e devolvem resultado observavel.
**When to use:** dano, custo, aplicacao de efeito, ordem de turno e validacao de acao.
**Example:**

```cpp
// Source: internal architecture guidance + DOMN-04
struct ResolveActionInput {
  CharacterState actor;
  CharacterState target;
  SkillDefinition skill;
};

struct ResolveActionOutput {
  CharacterState actor_after;
  CharacterState target_after;
  std::vector<CombatEvent> events;
};
```

### Pattern 5: Validation Without Final UI
**What:** logs estruturados, replay e CLI de estudo validam o core sem shell final.
**When to use:** desde o primeiro milestone de codigo.
**Example:**

```text
CLI command
  -> session service
    -> deterministic rule resolver
      -> updated state + emitted events
        -> textual inspection output
```

### Anti-Patterns to Avoid
- **Doc sprawl:** um arquivo por subtema logo na fase 1 dilui o guia e dificulta rastreabilidade.
- **API freeze cedo demais:** detalhar assinaturas agora conflita com D-05 e empurra o estudante para implementacao por copia.
- **Todos os sistemas com a mesma profundidade:** quests, NPCs e save nao podem consumir o mesmo espaco do core minimo.
- **Adapter-led domain design:** modelar a arquitetura a partir da futura CLI ou de uma UI imaginada reintroduz acoplamento cedo.
- **Superclasse universal de jogo:** uma arvore `Entity -> Character -> NPC -> Enemy -> Boss` so mascara responsabilidades distintas.

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| build/test orchestration | scripts shell soltos por etapa | CMake Presets + CTest | presets centralizam configuracao, build e teste com menos divergencia |
| test registration | `add_test()` manual para cada caso do GoogleTest | `gtest_discover_tests()` ou `gtest_add_tests()` | a integracao oficial com CMake reduz manutencao e melhora granularidade |
| static analysis invocation | flags manuais por arquivo | `compile_commands.json` + `clang-tidy` | tooling consistente e reaproveitavel |
| gameplay object taxonomy | heranca profunda para tudo | value objects, composicao e servicos de regra | casa melhor com mecanicas compostas e com o objetivo didatico |
| rules-as-data engine | mini DSL de regras no milestone atual | regras em C++ + definicoes de conteudo orientadas a dados | reduz infraestrutura prematura e preserva testabilidade |
| document validation framework | harness complexo dedicado | `rg`/checklists/script leve | esta fase precisa de verificacao barata e rastreavel, nao de framework novo |

**Key insight:** o planner deve economizar complexidade para onde ela gera clareza pedagogica: fronteiras, invariantes e faseamento. Tudo o que vira infraestrutura cedo demais volta como ruido na milestone de codigo.

## Ordering Constraints

1. Classifique todos os blocos principais de `Estruturação.md` antes de nomear modulos ou tipos.
2. Feche primeiro a fronteira entre `core minimo`, `primeira expansao` e `deferred`; so depois escreva o mapa de dominio.
3. Defina `Definition` vs `State` vs `AuthoringService` antes de detalhar criacao de personagem.
4. Registre regras deterministicas e observabilidade antes de falar de replay, logs e CLI.
5. So escreva o handoff da proxima milestone depois que o guia principal estiver estavel; caso contrario o faseamento nasce em cima de lacunas.

## Common Pitfalls

### Pitfall 1: Transformar DOMN-02 em licenca para inflar o core
**What goes wrong:** items, quests, NPCs e progressao entram com profundidade equivalente a combate e personagem.
**Why it happens:** o requisito pede que o leitor identifique essas familias, mas isso nao significa implementa-las cedo.
**How to avoid:** documente fronteiras futuras com tipos representativos e marque-as como `deferred`.
**Warning signs:** tabelas gigantes, backlog do milestone 2 com mundo, economia ou save.

### Pitfall 2: Escrever o guia como contrato de headers
**What goes wrong:** a fase documental congela assinaturas, retorno e ownership sem feedback de implementacao.
**Why it happens:** tentativa de ser "preciso" cedo demais.
**How to avoid:** descreva responsabilidades e operacoes esperadas, nao APIs finais.
**Warning signs:** exemplos com listas enormes de parametros e poucos invariantes.

### Pitfall 3: Misturar autoria de conteudo com runtime
**What goes wrong:** cadastro de conteudo vira parte do combate, da criacao de personagem ou do proprio estado de runtime.
**Why it happens:** o projeto quer dados orientados a conteudo, mas o fluxo de autoria ainda esta em aberto.
**How to avoid:** deixe explicito que `AuthoringService` e separado, enquanto `CharacterCreation` continua no core/session.
**Warning signs:** mesmo modulo "cadastre skill e resolva dano".

### Pitfall 4: Tratar a futura CLI como prototipo de jogo
**What goes wrong:** a CLI passa a ser descrita como experiencia jogavel e contamina o design do core.
**Why it happens:** e facil confundir "saida validavel" com "produto".
**How to avoid:** definir a CLI como ferramenta de estudo, inspecao, cadastro e replay.
**Warning signs:** preocupacoes com UX final, menu bonito, narrativa ou loops de produto.

### Pitfall 5: Ficar sem criterio objetivo de validacao
**What goes wrong:** o guia parece coerente, mas nao ha prova de cobertura dos requisitos nem das decisoes D-xx.
**Why it happens:** fases documentais costumam pular verificacao por parecerem "so texto".
**How to avoid:** embutir IDs de requisito e decisao nos documentos, e validar por `rg` + checklist manual.
**Warning signs:** frases vagas como "cobre tudo" sem matriz de rastreabilidade.

## Code Examples

Verified patterns from official sources:

### Minimal CMake Presets For Milestone 2

```json
// Source: https://cmake.org/cmake/help/latest/manual/cmake-presets.7.html
{
  "$schema": "https://cmake.org/cmake/help/v4.3/manual/cmake-presets.7.json",
  "version": 8,
  "cmakeMinimumRequired": { "major": 3, "minor": 28, "patch": 0 },
  "configurePresets": [
    {
      "name": "dev-gcc",
      "generator": "Unix Makefiles",
      "binaryDir": "${sourceDir}/build/dev-gcc",
      "cacheVariables": {
        "CMAKE_CXX_STANDARD": "20",
        "BUILD_TESTING": "ON",
        "CMAKE_EXPORT_COMPILE_COMMANDS": "ON"
      }
    }
  ],
  "buildPresets": [
    { "name": "build-dev-gcc", "configurePreset": "dev-gcc" }
  ],
  "testPresets": [
    { "name": "test-dev-gcc", "configurePreset": "dev-gcc" }
  ]
}
```

### Minimal CTest + GoogleTest Wiring

```cmake
# Source: https://cmake.org/cmake/help/latest/module/CTest.html
# Source: https://cmake.org/cmake/help/latest/module/GoogleTest.html
include(CTest)

if(BUILD_TESTING)
  include(GoogleTest)
  add_executable(ascend_unit_tests tests/example_test.cpp)
  target_link_libraries(ascend_unit_tests PRIVATE ascend_core GTest::gtest_main)
  gtest_discover_tests(ascend_unit_tests)
endif()
```

### Rule Result Shape For A Deterministic Core

```cpp
// Source: project architecture direction
struct CombatEvent {
  EventType type;
  EntityId source;
  EntityId target;
};

struct ResolveActionOutput {
  CharacterState actor_after;
  CharacterState target_after;
  std::vector<CombatEvent> events;
};
```

## State of the Art

| Old Approach | Current Approach | When Changed | Impact |
|--------------|------------------|--------------|--------|
| shell scripts for configure/build/test | CMake Presets + `ctest --preset` | presets added in CMake 3.19/3.20; current docs 4.3.1 | fluxo mais reproduzivel e documentavel |
| manual `add_test()` mapping for every case | CMake `GoogleTest` module with `gtest_discover_tests()` | module available since 3.9; discovery function since 3.10 | melhor granularidade e menos manutencao |
| domain led by product shell | core-first domain + session + adapters | locked project direction in 2026-04-03 docs | protege multiplataforma e testabilidade |
| mixed content/template/runtime structs | `Definition` vs `State` split | locked D-08..D-12 | facilita autoria progressiva e replay |
| "test later after UI" | logs, replay, scenario tests and CLI from the start | locked ARCH-03 / D-15 / D-16 | valida o core sem depender do produto final |

**Deprecated/outdated:**
- Engine-first or UI-first planning for this milestone: contradiz o milestone documental e reabre acoplamentos proibidos.
- Escolher parser/catalogo final na Phase 01: o formato de persistencia continua em aberto por decisao do projeto.
- Usar C++20 modules como base do plano: GCC documenta suporte experimental; isso nao reduz risco agora.

## Open Questions

1. **Qual sera o formato inicial de persistencia/autoria do catalogo?**
   - What we know: o projeto travou autoria progressiva com persistencia, mas nao travou arquivo, banco ou representacao.
   - What's unclear: qual formato minimiza friccao pedagogica sem contaminar o core.
   - Recommendation: manter aberto no handoff; a milestone 2 deve escolher so depois que `Definition`/`State`/`AuthoringService` estiverem claros.

2. **Qual convencao final de namespaces e IDs o projeto vai usar?**
   - What we know: isso esta em area de discricao.
   - What's unclear: `ascend::domain::combat` vs `ascend::combat`, IDs fortes vs strings tipadas, etc.
   - Recommendation: fechar no plano 01-02 e repetir em todos os docs para reduzir ambiguidade.

3. **Qual a superficie minima da futura CLI?**
   - What we know: cadastrar conteudo, criar personagem, disparar acoes e inspecionar estado/resultados.
   - What's unclear: se isso vira comandos separados por modulo, sessao interativa ou scripts de cenario.
   - Recommendation: definir familias de comando no handoff, sem desenhar UX final.

4. **Quanto detalhe dar aos sistemas deferred para satisfazer DOMN-02 sem inflar escopo?**
   - What we know: items, quests, NPCs e progressao precisam ser reconheciveis pelo leitor.
   - What's unclear: o ponto em que uma fronteira bem nomeada vira pseudo-backlog excessivo.
   - Recommendation: usar regra de profundidade em tres niveis: `high` para core minimo, `medium` para primeira expansao, `low` para deferred.

## Environment Availability

| Dependency | Required By | Available | Version | Fallback |
|------------|------------|-----------|---------|----------|
| `python3` | checks de rastreabilidade e apoio ao workflow | yes | 3.12.3 | — |
| `node` | tooling GSD atual | yes | v20.19.5 | — |
| `rg` | validacao textual rapida | yes | 15.1.0 | `grep` se necessario |
| `jq` | inspecao de JSON/config | yes | 1.7 | `python3 -m json.tool` |
| `g++` | referencia minima de compilador disponivel | yes | 13.3.0 | — |
| `cmake` | futura milestone de codigo | no | — | documentar comandos agora; instalar antes da milestone 2 |
| `ctest` | futura milestone de codigo | no | — | sem fallback real; depende de CMake instalado |
| `clang++` | sanitizers/Clang workflow | no | — | usar `g++` para compilacao basica ate instalar Clang |
| `clang-tidy` | analise estatica planejada | no | — | warnings do compilador como fallback temporario |
| `ninja` | build mais rapido | no | — | `Unix Makefiles` quando CMake estiver instalado |

**Missing dependencies with no fallback:**
- `cmake` e `ctest` para a primeira milestone de codigo.

**Missing dependencies with fallback:**
- `clang++` e `clang-tidy` podem ficar para depois, desde que o plano registre essa diferenca.
- `ninja` pode ser trocado por `Unix Makefiles`.

## Validation Architecture

### Test Framework

| Property | Value |
|----------|-------|
| Framework | `rg` + checklist manual de rastreabilidade documental |
| Config file | none |
| Quick run command | `rg -n -e 'FRAM-0[12]' -e 'DOMN-0[1-4]' -e 'ARCH-0[1-3]' -e 'EDUC-0[1-3]' -e 'HNDF-0[1-2]' -e 'D-0[1-9]' -e 'D-1[0-6]' .planning/phases/01-guia-canonico-de-implementacao/01-GUIA-CANONICO.md .planning/phases/01-guia-canonico-de-implementacao/01-HANDOFF.md` |
| Full suite command | `rg -n -e 'FRAM-0[12]' -e 'DOMN-0[1-4]' -e 'ARCH-0[1-3]' -e 'EDUC-0[1-3]' -e 'HNDF-0[1-2]' -e 'D-0[1-9]' -e 'D-1[0-6]' .planning/phases/01-guia-canonico-de-implementacao/01-GUIA-CANONICO.md .planning/phases/01-guia-canonico-de-implementacao/01-HANDOFF.md && rg -n -e 'core minimo' -e 'primeira expansao' -e 'deferred' -e 'platform concern' -e 'Definition' -e 'State' -e 'AuthoringService' -e 'CLI' .planning/phases/01-guia-canonico-de-implementacao/01-GUIA-CANONICO.md .planning/phases/01-guia-canonico-de-implementacao/01-HANDOFF.md` |

**Validation recommendation:** o planner deve exigir que `01-GUIA-CANONICO.md` e `01-HANDOFF.md` mencionem explicitamente os IDs de requisito e de decisao (`FRAM-*`, `DOMN-*`, `ARCH-*`, `EDUC-*`, `HNDF-*`, `D-*`). Sem isso, a fase vira revisao subjetiva.

### Phase Requirements -> Test Map

| Req ID | Behavior | Test Type | Automated Command | File Exists? |
|--------|----------|-----------|-------------------|-------------|
| FRAM-01 | introducao explica o que Ascend e, por que o milestone e documental e para quem o guia serve | docs/manual | `rg -n -e 'FRAM-01' -e 'milestone documental' -e 'para quem e' -e 'o que este milestone faz' .planning/phases/01-guia-canonico-de-implementacao/01-GUIA-CANONICO.md` | no - Wave 0 |
| FRAM-02 | matriz classifica sistemas do rascunho por bucket de escopo | docs/manual | `rg -n -e 'FRAM-02' -e 'core minimo' -e 'primeira expansao' -e 'deferred' -e 'platform concern' .planning/phases/01-guia-canonico-de-implementacao/01-GUIA-CANONICO.md` | no - Wave 0 |
| DOMN-01 | modulos/namespaces futuros estao mapeados | docs/manual | `rg -n -e 'DOMN-01' -e 'module' -e 'namespace' -e 'domain' -e 'rules' -e 'content' -e 'session' -e 'adapters' .planning/phases/01-guia-canonico-de-implementacao/01-GUIA-CANONICO.md` | no - Wave 0 |
| DOMN-02 | familias de tipos/servicos para core e sistemas deferred nomeados | docs/manual | `rg -n -e 'DOMN-02' -e 'character' -e 'combat' -e 'attributes' -e 'skills' -e 'items' -e 'quests' -e 'NPC' -e 'progression' .planning/phases/01-guia-canonico-de-implementacao/01-GUIA-CANONICO.md` | no - Wave 0 |
| DOMN-03 | runtime e definicoes estao separados com mecanicas data-driven nomeadas | docs/manual | `rg -n -e 'DOMN-03' -e 'Definition' -e 'State' -e 'data-driven' -e 'AuthoringService' .planning/phases/01-guia-canonico-de-implementacao/01-GUIA-CANONICO.md` | no - Wave 0 |
| DOMN-04 | regras deterministicas e observaveis estao listadas | docs/manual | `rg -n -e 'DOMN-04' -e 'deterministic' -e 'seed' -e 'events' -e 'resolve' .planning/phases/01-guia-canonico-de-implementacao/01-GUIA-CANONICO.md` | no - Wave 0 |
| ARCH-01 | fronteiras entre core/content/session/adapters estao explicitas | docs/manual | `rg -n -e 'ARCH-01' -e 'content' -e 'session' -e 'adapters' -e 'dependency' .planning/phases/01-guia-canonico-de-implementacao/01-GUIA-CANONICO.md` | no - Wave 0 |
| ARCH-02 | workflow de build/teste/analise estatica esta documentado | docs/manual | `rg -n -e 'ARCH-02' -e 'CMake' -e 'CTest' -e 'GoogleTest' -e 'clang-tidy' -e 'sanitizer' .planning/phases/01-guia-canonico-de-implementacao/01-GUIA-CANONICO.md` | no - Wave 0 |
| ARCH-03 | replay, logs e cenarios validam sem UI final | docs/manual | `rg -n -e 'ARCH-03' -e 'replay' -e 'logs' -e 'scenario' -e 'CLI' .planning/phases/01-guia-canonico-de-implementacao/01-GUIA-CANONICO.md` | no - Wave 0 |
| EDUC-01 | ordem de aprendizado esta explicita | docs/manual | `rg -n -e 'EDUC-01' -e 'tipos -> regras -> criacao de personagem -> combate minimo' .planning/phases/01-guia-canonico-de-implementacao/01-GUIA-CANONICO.md` | no - Wave 0 |
| EDUC-02 | simplificacoes intencionais do primeiro milestone estao registradas | docs/manual | `rg -n -e 'EDUC-02' -e 'nao complicar agora' -e 'nao hand-roll' -e 'simplificar' .planning/phases/01-guia-canonico-de-implementacao/01-GUIA-CANONICO.md` | no - Wave 0 |
| EDUC-03 | o guia pode virar backlog tecnico sem contexto oculto | docs/manual | `rg -n -e 'EDUC-03' -e 'requisito' -e 'decisao' -e 'traceability' -e 'backlog' .planning/phases/01-guia-canonico-de-implementacao/01-GUIA-CANONICO.md .planning/phases/01-guia-canonico-de-implementacao/01-HANDOFF.md` | no - Wave 0 |
| HNDF-01 | decisoes abertas e riscos estao listados | docs/manual | `rg -n -e 'HNDF-01' -e 'decisoes em aberto' -e 'risks' -e 'open questions' .planning/phases/01-guia-canonico-de-implementacao/01-HANDOFF.md` | no - Wave 0 |
| HNDF-02 | primeira milestone de codigo esta faseada | docs/manual | `rg -n -e 'HNDF-02' -e '02-01' -e '02-02' -e '02-03' -e '02-04' -e 'proxima milestone' .planning/phases/01-guia-canonico-de-implementacao/01-HANDOFF.md` | no - Wave 0 |

### Sampling Rate

- **Per task commit:** quick `rg` de IDs de requisito e decisao nos docs da fase.
- **Per wave merge:** quick `rg` + checklist manual de coerencia entre `01-GUIA-CANONICO.md`, `01-HANDOFF.md`, `.planning/REQUIREMENTS.md` e `01-CONTEXT.md`.
- **Phase gate:** full `rg` green e leitura manual final conferindo que nenhum item `deferred` vazou para o backlog imediato.

### Wave 0 Gaps

- [ ] `01-GUIA-CANONICO.md` ainda nao existe.
- [ ] `01-HANDOFF.md` ainda nao existe.
- [ ] `01-VALIDATION.md` ainda nao existe.
- [ ] Nao ha lint/test framework de documentos; a validacao depende de convencao de IDs no texto.

## Sources

### Primary (HIGH confidence)
- Internal canonical docs: `01-CONTEXT.md`, `.planning/PROJECT.md`, `.planning/REQUIREMENTS.md`, `.planning/ROADMAP.md`, `.planning/STATE.md`, `.planning/research/{SUMMARY,ARCHITECTURE,STACK,PITFALLS,FEATURES}.md`, `AGENTS.md`, `Estruturação.md`
- CMake release page - https://github.com/Kitware/CMake/releases/latest
- CMake Presets manual - https://cmake.org/cmake/help/latest/manual/cmake-presets.7.html
- CTest manual - https://cmake.org/cmake/help/latest/manual/ctest.1.html
- CTest module docs - https://cmake.org/cmake/help/latest/module/CTest.html
- CMake GoogleTest module docs - https://cmake.org/cmake/help/latest/module/GoogleTest.html
- `CMAKE_EXPORT_COMPILE_COMMANDS` docs - https://cmake.org/cmake/help/latest/variable/CMAKE_EXPORT_COMPILE_COMMANDS.html
- GoogleTest latest release - https://github.com/google/googletest/releases/latest
- GoogleTest primer - https://google.github.io/googletest/primer.html
- GCC C++ standards support - https://gcc.gnu.org/projects/cxx-status.html
- clang-tidy docs - https://clang.llvm.org/extra/clang-tidy/index.html
- AddressSanitizer docs - https://clang.llvm.org/docs/AddressSanitizer.html
- UndefinedBehaviorSanitizer docs - https://clang.llvm.org/docs/UndefinedBehaviorSanitizer.html

### Secondary (MEDIUM confidence)
- Nenhuma necessaria.

### Tertiary (LOW confidence)
- Nenhuma utilizada.

## Metadata

**Confidence breakdown:**
- Standard stack: MEDIUM - a direcao esta bem suportada por docs oficiais, mas a toolchain ainda nao existe neste ambiente e LLVM docs consultadas sao `git/in-progress`.
- Architecture: HIGH - quase toda a arquitetura vem de fontes canonicas locais ja travadas pelo projeto.
- Pitfalls: HIGH - os riscos principais sao de escopo, acoplamento e didatica, todos corroborados pelos artefatos locais e pelo estado do ambiente.

**Research date:** 2026-04-03
**Valid until:** 2026-05-03
