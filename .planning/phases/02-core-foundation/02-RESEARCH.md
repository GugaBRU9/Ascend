# Phase 2: Core Foundation - Research

**Researched:** 2026-04-05
**Domain:** primeira fase de codigo do backend C++ core-first do Ascend
**Confidence:** HIGH

<user_constraints>
## User Constraints (from CONTEXT.md)

### Locked Scope
- O milestone continua em C++ moderno, core-first e desacoplado de concerns de produto.
- O caminho minimo obrigatorio cobre atributos, recursos, efeitos/status, personagens, habilidades, resolucao deterministica, protagonista unico contra inimigos e combate basico.
- `CharacterCreation` permanece dentro de `session/core`; autoria de conteudo continua separada do runtime.
- `Definition` e `State` nao podem ser o mesmo objeto nem a mesma responsabilidade.
- A `CLI estruturada` existe apenas para estudo, cadastro minimo, execucao controlada e inspecao de estado.

### Locked Sequencing
- A ordem oficial e literal: `02-01 Fundacao de Tipos e Invariantes` -> `02-02 Regras Deterministicas e Resolutores` -> `02-03 Criacao de Personagem e Catalogo Minimo` -> `02-04 Combate Minimo e CLI de Estudo`.
- O planejamento nao deve puxar loader, catalogo ou CLI para antes do fechamento de tipos e regras.
- Cada plano precisa deixar saidas estaveis para o proximo sem exigir parser definitivo, UI ou concerns de produto.

### Defaults Accepted for Planning
- Formato inicial do catalogo externo: arquivos `JSON` simples, pequenos e versionados no repositorio.
- Loader inicial: loader minimo de desenvolvimento, separado do runtime, com falha explicita e validacao basica de schema por tipo de entidade.
- Granularidade inicial de replay/logs: eventos e snapshots suficientes para custo, dano, aplicacao/expiracao de efeito, validacao de criacao de personagem e encerramento de turno.
- Pacote inicial de conteudo: um template de protagonista, poucas skills, poucos efeitos e um conjunto pequeno de inimigos.
- Aleatoriedade: fora desta fase; se surgir no futuro, `seed` entra como input explicito do resolver e do replay.

### Guardrails
- Nao misturar autoria com runtime.
- Nao puxar `party`, companions ou IA tatica antes de validar protagonista unico e combate minimo.
- Nao aprofundar `items`, `progression`, `quests`, `npcs` ou `world systems` como se fossem backlog concorrente do core minimo.
- Nao introduzir parser definitivo, DSL ou pipeline sofisticado de autoria antes de provar o fluxo basico.
- Nao acoplar `domain`, `rules`, `content`, `session` ou `validation` a UI, engine, rede, banco ou persistencia final.

### the agent's Discretion
- Layout exato de arquivos e targets CMake, desde que a separacao entre `domain`, `rules`, `content`, `session`, `validation` e `adapters::cli` fique visivel.
- Nomes concretos de classes, DTOs e value objects, desde que respeitem os namespaces e fronteiras canonicas.
- Granularidade das waves e dos planos, desde que a ordem `02-01` a `02-04` e as dependencias fiquem explicitas.
- Forma exata dos testes iniciais, desde que haja validacao rapida para invariantes, resolucao deterministica e smoke do fluxo completo.

### Deferred Ideas (OUT OF SCOPE)
- `party`, companions, IA tatica, `items`, `progression`, `quests`, `npcs` e `world systems` continuam fora do backlog executavel desta fase, exceto como fronteiras nomeadas.
- UI final, rendering, audio, engine integration, networking, persistencia final e save system continuam fora de escopo.
- Parser definitivo, DSL e pipeline sofisticado de autoria ficam para depois que o fluxo minimo estiver verde.
- Aleatoriedade real com `seed` explicita continua adiada ate que replay e logs tenham contrato estavel.
</user_constraints>

<phase_requirements>
## Phase Requirements

| ID | Description | Research Support |
|----|-------------|------------------|
| CORE-01 | Developer can build the initial `domain` modules with explicit IDs and value objects for attributes, resource pools, effects/status, characters, enemies, and combat-relevant types without platform dependencies. | Estrutura inicial com targets `domain`/`rules`/`content`/`session`/`validation`, value objects com smart constructors e dependencia zero de adapters. |
| CORE-02 | Developer can observe invalid domain construction as explicit validation failures instead of silent defaults. | Padrao de factories com `ValidationIssue`/`ValidationReport`, sem defaults silenciosos e sem usar excecao para erro de entrada esperado. |
| CORE-03 | Student can verify the main invariants of the base types through unit tests that run without CLI, parser, or product adapters. | Labels `domain` e `rules`, GoogleTest para invariantes pequenas e sem depender de JSON/CLI. |
| CORE-04 | Developer can distinguish `Definition` from `State` in the initial C++ modules and data contracts. | Separacao prescritiva `content::*Definition` vs `domain::*State` e `session::character_creation` como ponte. |
| RULE-01 | Developer can execute deterministic resolution for cost, damage, and effect application or expiration and get the same outputs from the same inputs. | Resolveres side-effect free por snapshot/comando, sem RNG, sem clock e com resultado estruturado. |
| RULE-02 | Student can inspect structured events and replay/log artifacts that explain `input -> resolution -> output` for the initial rules. | Eventos tipados, snapshots em marcos estaveis e replay derivado do resultado do resolver, nao da CLI. |
| RULE-03 | Developer can diagnose invalid rule execution through explicit validation or domain errors. | Separacao entre `validation failure`, `domain error` e `programmer error`, com erros carregando contexto suficiente para teste. |
| RULE-04 | Scenario tests can cover the minimal rule flow for cost, damage, and effects without depending on a final UI. | `tests/scenarios/` validando sequencia de eventos e snapshot final, com uma camada de fixtures pequena. |
| CONT-01 | Author can define the initial starter content in simple versioned `JSON` files stored in the repository. | Diretoria `content/catalog/v1/` com arquivos fixos por familia e `version` no topo de cada arquivo. |
| CONT-02 | Developer can load the minimal catalog through a dedicated content loader separated from runtime rules and receive explicit validation failures for malformed definitions. | Loader confinado a `content`, parser JSON isolado em `.cpp`, duas fases de validacao: shape basico e referencias cruzadas. |
| CONT-03 | Student can build a valid protagonist through `CharacterCreation` from catalog definitions without coupling authoring code to runtime state. | `session::character_creation` consome `Catalog` e produz `CharacterState`, sem carregar JSON nem manter blobs de definicao em runtime. |
| CONT-04 | Developer can keep the starter content intentionally small: one protagonist template, a few skills and effects, and a small enemy set. | Recomendacao de pacote minimo e guardrail explicito contra crescimento de conteudo antes de validar arquitetura. |
| FLOW-01 | Student can use a structured CLI to inspect catalog content, create a character, start a minimal encounter, and execute controlled actions. | CLI por subcomandos explicitos e stateless, com inputs completos por comando e sem REPL/shell persistente. |
| FLOW-02 | Developer can run a minimal protagonist-versus-enemies combat flow and inspect the resulting state, logs, and replay artifacts. | `combat run` controlado por lista de acoes, imprimindo resumo e trace estruturado. |
| FLOW-03 | End-to-end smoke or scenario tests can validate the path `tipos -> regras -> criacao de personagem -> combate minimo`. | Smoke minimo da CLI + cenarios diretos do core, usando labels `flow` e `cli`. |
| FLOW-04 | The CLI remains a study and inspection tool rather than a final game shell. | Recomendacao explicita: sem loop persistente, sem UX de produto, sem estado salvo entre processos e sem menu interativo como verdade do sistema. |
</phase_requirements>

## Summary

Para planejar bem a fase 2, o ponto principal nao e escolher mais tecnologia; e manter o recorte do milestone visivel no proprio esqueleto do codigo. O planner deve abrir poucos targets CMake, com fronteiras claras entre `domain`, `rules`, `content`, `session`, `validation` e `adapters::cli`, e fazer cada plano entregar um degrau valido para o seguinte sem depender de parser definitivo, shell persistente nem volume grande de conteudo.

As decisoes que mais reduzem risco nesta fase sao: usar value objects com validacao explicita desde `02-01`; modelar resolutores deterministicos como funcoes/servicos que devolvem `snapshot_after + events + diagnostics`; tratar replay/log como derivado de eventos estruturados, nao de texto da CLI; manter o parser JSON confinado ao loader de `content`; e desenhar a CLI como executor de casos de estudo por subcomandos completos, nao como jogo final.

**Primary recommendation:** planeje a fase em quatro degraus tecnicos estritos: `targets + value objects` -> `resolutores + traces` -> `catalogo JSON + CharacterCreation` -> `combat run + CLI smoke`, com validacao por labels de CTest em cada degrau.

## Standard Stack

### Core

| Library / Tool | Version Verified | Purpose | Why Standard |
|----------------|------------------|---------|--------------|
| C++ language mode | `C++20` | dominio, value objects, regras e testes | Ja esta travado pelo projeto e e suficiente sem puxar modules/coroutines. |
| CMake | `3.28.3` local | targets, presets, compile database e graph de build | A documentacao oficial de presets e do modulo GoogleTest cobre exatamente o fluxo que a fase precisa. |
| CTest | `3.28.3` local | execucao de unit, integration, scenario e smoke tests | Permite labels por subarea e integra direto com `--preset`. |
| GoogleTest | `1.17.0` oficial latest | testes unitarios, integracao leve e cenarios | Continua o baseline mais simples e suficiente para o papel educacional do core. |

### Supporting

| Library / Tool | Version Verified | Purpose | When to Use |
|----------------|------------------|---------|-------------|
| `compile_commands.json` | builtin CMake | alimentar `clang-tidy` e tooling | Ativar em todos os presets de desenvolvimento. |
| `clang++` | `18.1.3` local | compilador principal de desenvolvimento | Preferir em `dev/asan/ubsan` para alinhar com `clang-tidy` e sanitizers. |
| `clang-tidy` | `18.1.3` local | analise estatica | Rodar por target alterado e no gate da fase. |
| AddressSanitizer | via `clang++ 18.1.3` local | detectar erro de memoria | Preset separado para cenarios e smoke final. |
| UndefinedBehaviorSanitizer | via `clang++ 18.1.3` local | detectar UB | Preset separado para reforcar os resolutores. |
| Ninja | `1.11.1` local | generator mais rapido | Usar como default dos presets enquanto o ambiente local o suportar. |
| `g++` | `13.3.0` local | lane de compatibilidade do compilador | Fallback util; nao deve dirigir o design da fase. |
| nlohmann/json | `3.12.0` latest, release date `2025-04-11` | parser JSON minimo do `content::loader` | Ganho claro: integracao simples, conversao para tipos arbitrarios e erros de parse detalhados. Mantenha a dependencia confinada a `content`. |

### Alternatives Considered

| Instead of | Could Use | Tradeoff |
|------------|-----------|----------|
| Presets CMake + CTest labels | comandos shell soltos por plano | mais rapido para improvisar, pior para repetibilidade e `02-VALIDATION.md` |
| `gtest_discover_tests()` | `add_test()` manual ou `gtest_add_tests()` | discovery via executavel e melhor para testes parametrizados; so perde se houver cross-compiling, o que nao e o caso desta fase |
| `nlohmann/json` no loader | parser JSON proprio | custo alto para um problema fora do foco do milestone |
| subcomandos `argv` finos | framework de CLI ou REPL | nova dependencia e risco de virar shell de produto cedo demais |
| eventos tipados + snapshots | log textual como artefato primario | texto sozinho dificulta asserts estaveis e replay rastreavel |

**Version verification**

- `cmake --version` confirmou `3.28.3`.
- `ctest --version` confirmou `3.28.3`.
- `clang++ --version` confirmou `18.1.3`.
- `clang-tidy --version` confirmou `18.1.3`.
- `ninja --version` confirmou `1.11.1`.
- `g++ --version` confirmou `13.3.0`.
- O modulo oficial `GoogleTest` do CMake documenta `gtest_discover_tests()` desde CMake `3.10`.
- O release oficial do GoogleTest marca `v1.17.0` como `Latest`; a visualizacao fetchada do GitHub mostra `30 Apr 17:07`, mas nao expoe o ano no trecho retornado.
- O release oficial `nlohmann/json v3.12.0` expõe `Release date: 2025-04-11`.

## Architecture Patterns

### Recommended Project Structure

```text
.
|-- CMakeLists.txt
|-- CMakePresets.json
|-- cmake/
|   |-- clang_tidy.cmake
|   |-- sanitizers.cmake
|   `-- warnings.cmake
|-- apps/
|   `-- cli/
|-- content/
|   `-- catalog/
|       `-- v1/
|           |-- character_templates.json
|           |-- skills.json
|           |-- effects.json
|           `-- enemies.json
|-- include/ascend/
|   |-- domain/
|   |-- rules/
|   |-- content/
|   |-- session/
|   `-- validation/
|-- src/
|   |-- domain/
|   |-- rules/
|   |-- content/
|   |-- session/
|   |-- validation/
|   `-- adapters/cli/
`-- tests/
    |-- unit/
    |   |-- domain/
    |   `-- rules/
    |-- integration/
    |   |-- content/
    |   `-- session/
    |-- scenarios/
    `-- smoke/
```

### Pattern 1: Poucos Targets, Fronteiras Visiveis

**What:** abrir um target por modulo de topo e um executavel de CLI, sem microbibliotecas prematuras.

**When to use:** desde `02-01`.

**Recommended dependency graph**

```text
ascend_domain
ascend_rules       -> ascend_domain
ascend_content     -> ascend_domain
ascend_session     -> ascend_domain + ascend_rules + ascend_content
ascend_validation  -> ascend_domain + ascend_rules + ascend_session
ascend_cli         -> ascend_session + ascend_validation + ascend_content
```

**Planning implication:** `validation` observa e serializa; ele nao deve virar dependencia de `rules`. Se um resolver precisa devolver eventos, esses tipos devem morar em `domain::combat` ou `rules`, nao em `validation`.

### Pattern 2: Value Objects Primeiro, Structs Mutaveis Depois

**What:** IDs, valores limitados e enums fechados entram como tipos pequenos com construcao validada; agregados maiores (`CharacterState`, `CombatSnapshot`) so aparecem depois que esses tijolos estiverem estaveis.

**When to use:** `02-01`.

**Use**

- `SkillId`, `EffectId`, `EnemyId`, `TemplateId` como wrappers fortes, nao `std::string` espalhada.
- `AttributeScore`, `ResourceAmount`, `TurnCounter`, `DurationTurns` como tipos com faixa valida.
- `DamageType`, `ResourceKind`, `EffectStackPolicy` como enums fechados.

**Do not use**

- setters publicos que permitam violar invariantes.
- `int` cru como lingua franca do dominio.
- heranca para diferenciar protagonista, inimigo e efeito.

### Pattern 3: `Definition` / `State` / `Session` Sao Três Responsabilidades

**What:** `Definition` e imutavel e orientado a dados; `State` e mutavel e orientado a runtime; `session` faz a ponte entre ambos.

**When to use:** `02-01` e `02-03`.

**Recommended split**

- `content::definitions::*Definition`: IDs, custos base, duracoes base, referencias entre definicoes.
- `domain::*State`: HP atual, recursos atuais, efeitos ativos, cooldowns, ordem do turno.
- `session::character_creation`: consome `Catalog` + escolhas, produz `CharacterState`.

**Rule:** `State` referencia definicoes por ID; ele nao deve carregar blobs completos de definicao nem depender do parser JSON.

### Pattern 4: Resolver Deterministico com Trace Estruturado

**What:** cada operacao de regra recebe um snapshot de entrada e devolve `snapshot_after`, `events` e `diagnostics`.

**When to use:** `02-02` e `02-04`.

**Minimal contract**

```text
input snapshot + command + catalog view
-> validate preconditions
-> resolve cost/damage/effects/end-turn
-> return snapshot_after + ordered events + diagnostics
```

**Planner rule:** o texto do log deve ser derivado desses eventos. Nao use stdout da CLI como artefato de verdade.

### Pattern 5: Loader em Duas Etapas

**What:** parse simples do documento JSON, depois conversao/validacao para tipos internos.

**When to use:** `02-03`.

**Recommended pipeline**

1. Ler arquivo fixo por familia.
2. Fazer parse do documento JSON.
3. Validar shape minimo por caminho (`definitions[2].cost.mana`).
4. Converter para `Raw*Definition`.
5. Converter `Raw*Definition` -> `*Definition` tipado.
6. Validar referencias cruzadas e IDs duplicados.
7. Publicar `Catalog`.

**Planner rule:** nao deserializar direto em `CharacterState`, `EnemyState` ou outros tipos de runtime.

### Pattern 6: CLI Stateless de Estudo

**What:** CLI por subcomandos completos, cada um executando um caso de estudo do inicio ao fim.

**When to use:** `02-04`.

**Good command families**

- `catalog list <skills|effects|enemies|templates>`
- `catalog show <id>`
- `character create --template hero.apprentice --attr str=4 --attr vit=3`
- `combat run --template hero.apprentice --enemy enemy.slime --actions strike,guard,strike`

**Why this shape:** entrega inspecao, criacao e combate minimo sem exigir save, shell persistente, REPL ou UX de produto.

### Anti-Patterns to Avoid

- **`validation` virando dependencia de `rules`:** cria ciclo de modulo e embaralha a fronteira entre regra e observabilidade.
- **`Definition` carregando estado atual:** destrói a separacao entre autoria e runtime e complica troca futura do pipeline de conteudo.
- **CLI como lugar da regra:** qualquer logica de custo, dano, duracao ou ordem de turno na CLI e um bug arquitetural.
- **JSON direto no dominio:** incluir `nlohmann::json` em headers do core espalha a preocupacao errada por todo o projeto.
- **microtargets cedo demais:** separar cada subpasta em uma library diferente custa mais que ajuda nesta fase.

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| parser JSON | parser caseiro | `nlohmann/json` restrito ao loader | o milestone precisa validar dominio, nao sintaxe JSON |
| sistema de validacao generico enorme | framework de erro customizado com DSL e metaprogramacao | `ValidationIssue`/`ValidationReport` pequenos e explicitos | erros esperados precisam ser claros, nao sofisticados |
| registro manual de testes | listas de `add_test()` por arquivo | `include(GoogleTest)` + `gtest_discover_tests()` | menos manutencao e melhor granularidade no CTest |
| event sourcing completo | infra de persistencia/replay com store, versionamento e consultas | vetor de eventos tipados + snapshots pontuais + serializer simples | suficiente para o recorte sem puxar sistema de produto |
| shell interativo de jogo | REPL, menus, estado salvo entre comandos | subcomandos `argv` finos e stateless | preserva a CLI como ferramenta de estudo |
| objetos de gameplay por heranca | `Entity -> Unit -> Character -> Enemy -> Boss` | composicao, enums fechados e services de regra | mais simples para invariantes e extensao futura |

**Key insight:** o custo real desta fase nao esta em compilar C++; esta em manter o core explicavel. Tudo o que introduz um mini-framework antes do fluxo minimo prejudica o planejamento.

## Common Pitfalls

### Pitfall 1: Tratar erro esperado como excecao de controle de fluxo

**What goes wrong:** criacao invalida de personagem, custo insuficiente ou JSON malformado passam a depender de `throw/catch` espalhado.

**Why it happens:** em C++, excecao parece o caminho mais curto.

**How to avoid:** reserve excecoes para falha de I/O ou bug impossivel de recuperar; para entrada invalida, retorne diagnostico explicito.

**Warning signs:** testes verificando apenas `EXPECT_THROW`, sem checar codigo/caminho/mensagem do erro.

### Pitfall 2: Acoplar trace e replay ao texto da CLI

**What goes wrong:** a unica forma de validar regra passa a ser comparar stdout.

**Why it happens:** a CLI e a primeira interface visivel.

**How to avoid:** gere `CombatEvent`, `CreationEvent` e snapshots estruturados no core; a CLI so renderiza isso.

**Warning signs:** mudanca cosmética de texto quebrando testes de regra.

### Pitfall 3: Deixar `Definition` virar um espelho de `State`

**What goes wrong:** `CharacterTemplate` ganha HP atual, cooldown atual e flags de sessao; depois `CharacterState` vira duplicata mal definida.

**Why it happens:** parece economizar tipos no inicio.

**How to avoid:** force perguntas simples: "isso muda durante uma sessao?" Se sim, e `State`. Se nao, e `Definition`.

**Warning signs:** objetos carregados do JSON sendo mutados durante combate.

### Pitfall 4: Fazer a CLI pedir persistencia antes da hora

**What goes wrong:** o planejamento tenta manter combate em varias chamadas de processo e puxa save/session store informalmente.

**Why it happens:** intuicao de "comando por turno".

**How to avoid:** cada comando deve receber input completo do caso de estudo e rodar inteiro no mesmo processo.

**Warning signs:** necessidade de arquivo temporario, cache global ou "ultima sessao" para testar combate minimo.

### Pitfall 5: Crescer o catalogo antes de provar o loader

**What goes wrong:** a fase passa a discutir dezenas de skills e inimigos em vez de validar shape, referencias e criacao.

**Why it happens:** conteudo parece progresso rapido.

**How to avoid:** fixe um pacote minimo e trate qualquer expansao como fora de escopo ate `02-04` ficar verde.

**Warning signs:** mais tempo ajustando JSON do que escrevendo testes de invariantes, loader e combate.

## Code Examples

Verified patterns from official docs and the canonical project guidance:

### Minimal CMake Target Layout

```cmake
# Source: https://cmake.org/cmake/help/latest/module/GoogleTest.html
cmake_minimum_required(VERSION 3.28)
project(ascend LANGUAGES CXX)

include(CTest)

add_library(ascend_domain STATIC)
add_library(ascend_rules STATIC)
target_link_libraries(ascend_rules PUBLIC ascend_domain)

add_library(ascend_content STATIC)
target_link_libraries(ascend_content PUBLIC ascend_domain)

add_library(ascend_session STATIC)
target_link_libraries(ascend_session
  PUBLIC ascend_domain ascend_rules ascend_content)

add_library(ascend_validation STATIC)
target_link_libraries(ascend_validation
  PUBLIC ascend_domain ascend_rules ascend_session)

add_executable(ascend_cli)
target_link_libraries(ascend_cli
  PRIVATE ascend_session ascend_validation ascend_content)

if(BUILD_TESTING)
  include(GoogleTest)
  add_executable(ascend_domain_tests tests/unit/domain/attribute_score_test.cpp)
  target_link_libraries(ascend_domain_tests
    PRIVATE ascend_domain GTest::gtest_main)
  gtest_discover_tests(ascend_domain_tests TEST_PREFIX "domain.")
endif()
```

### Smart Constructor for a Value Object

```cpp
// Source: project canon + phase constraints
struct ValidationIssue {
  std::string code;
  std::string path;
  std::string message;
};

class AttributeScore {
public:
  static auto create(int raw) -> std::pair<std::optional<AttributeScore>, std::vector<ValidationIssue>> {
    if (raw < 0 || raw > 100) {
      return {std::nullopt, {{"attribute.out_of_range", "attribute_score", "expected 0..100"}}};
    }
    return {AttributeScore(raw), {}};
  }

  auto value() const -> int { return value_; }

private:
  explicit AttributeScore(int value) : value_(value) {}
  int value_;
};
```

### Deterministic Resolver Contract

```cpp
// Source: project canon + phase constraints
struct CombatEvent {
  enum class Kind {
    ResourceSpent,
    DamageApplied,
    EffectApplied,
    EffectExpired,
    TurnEnded
  };

  Kind kind;
  std::string subject_id;
  int primary_value;
};

struct ResolutionResult {
  CombatSnapshot snapshot_after;
  std::vector<CombatEvent> events;
  std::vector<ValidationIssue> diagnostics;
};

auto resolve_action(
  const CombatSnapshot& before,
  const ActionCommand& command,
  const CatalogView& catalog
) -> ResolutionResult;
```

### JSON Loader Boundary

```cpp
// Source: https://json.nlohmann.me/features/arbitrary_types/
// and https://json.nlohmann.me/home/exceptions/
struct RawSkillDefinition {
  std::string id;
  int mana_cost;
  int base_damage;
  std::string effect_id;
};

auto load_skill_file(const std::filesystem::path& path)
  -> std::pair<std::vector<SkillDefinition>, std::vector<ValidationIssue>> {
  std::ifstream input(path);
  nlohmann::json doc = nlohmann::json::parse(input);

  std::vector<SkillDefinition> out;
  std::vector<ValidationIssue> issues;

  for (std::size_t i = 0; i < doc["definitions"].size(); ++i) {
    const auto& node = doc["definitions"][i];
    RawSkillDefinition raw{
      .id = node.value("id", ""),
      .mana_cost = node.value("mana_cost", -1),
      .base_damage = node.value("base_damage", -1),
      .effect_id = node.value("effect_id", "")
    };

    auto [typed, typed_issues] = make_skill_definition(raw, "definitions[" + std::to_string(i) + "]");
    if (typed) {
      out.push_back(*typed);
    }
    issues.insert(issues.end(), typed_issues.begin(), typed_issues.end());
  }

  return {out, issues};
}
```

### CLI Command Stays Thin

```cpp
// Source: project canon + FLOW-01..FLOW-04
auto run_combat_command(const CliArgs& args, const Catalog& catalog) -> int {
  auto creation = create_character(catalog, args.template_id, args.attribute_allocations);
  if (!creation.character) {
    return print_validation(creation.issues);
  }

  auto result = run_minimal_encounter(
    catalog,
    *creation.character,
    args.enemy_id,
    args.action_sequence
  );

  print_summary(result.snapshot_after, result.events);
  return print_validation(result.diagnostics);
}
```

## State of the Art

| Old Approach | Current Approach | When Changed | Impact |
|--------------|------------------|--------------|--------|
| `add_test()` manual por caso | `gtest_discover_tests()` via modulo oficial `GoogleTest` | CMake `3.10` | descoberta melhor para testes parametrizados e menos manutencao |
| structs misturando conteudo e runtime | `Definition`/`State` separados e `session` como ponte | decisao fechada na Phase 1 | loader e runtime ficam desacoplados |
| log textual como artefato primario | eventos tipados + snapshots + renderizacao derivada | contrato da Phase 2 | scenario tests ficam estaveis e explicaveis |
| shell interativo cedo | subcomandos stateless de estudo | guardrail da Phase 2 | evita puxar save/product shell antes da hora |

**Deprecated/outdated**

- Parser proprio para JSON do catalogo: custo alto e fora do foco do milestone.
- CLI como mini-jogo: contradiz `FLOW-04` e aumenta acoplamento do core ao adapter.

## Open Questions

1. **Como pinar dependencias de teste e JSON no build sem reabrir package manager?**
   - What we know: `GoogleTest` e `nlohmann/json` sao os encaixes tecnicos mais simples para esta fase.
   - What's unclear: se o projeto vai preferir `FetchContent`, submodule ou vendor local.
   - Recommendation: fechar isso na Wave 0 de `02-01` para `GoogleTest` e na Wave 0 de `02-03` para `nlohmann/json`, sem expor o metodo escolhido fora do CMake/loader.

2. **A CLI precisa de uma flag de saida estruturada (`--json`/`--trace-out`) ja em `02-04`?**
   - What we know: testes de regra e cenario nao devem depender da CLI.
   - What's unclear: se a ferramenta de estudo vai precisar persistir trace em arquivo ou se stdout resumido basta.
   - Recommendation: planejar a CLI primeiro com resumo humano; adicionar dump estruturado apenas se o smoke ou a UAT mostrar necessidade real.

## Environment Availability

| Dependency | Required By | Available | Version | Fallback |
|------------|------------|-----------|---------|----------|
| `cmake` | configuracao, build graph, presets | ✓ | `3.28.3` | — |
| `ctest` | execucao de testes | ✓ | `3.28.3` | — |
| `clang++` | compilador principal de desenvolvimento | ✓ | `18.1.3` | `g++ 13.3.0` |
| `clang-tidy` | analise estatica | ✓ | `18.1.3` | warnings estritos do compilador |
| `ninja` | generator rapido dos presets | ✓ | `1.11.1` | `Unix Makefiles` |
| `g++` | lane secundaria de compilacao | ✓ | `13.3.0` | `clang++ 18.1.3` |

**Missing dependencies with no fallback:**
- None.

**Missing dependencies with fallback:**
- None.

## Validation Architecture

### Test Framework

| Property | Value |
|----------|-------|
| Framework | `GoogleTest 1.17.0` + `CTest 3.28.3` |
| Config file | `CMakeLists.txt` + `CMakePresets.json` (a criar na Wave 0 de `02-01`) |
| Quick run command | `ctest --preset dev --output-on-failure -L <label>` |
| Full suite command | `ctest --preset dev --output-on-failure && ctest --preset asan --output-on-failure && ctest --preset ubsan --output-on-failure` |

### Recommended Label Strategy

- `domain`: invariantes, IDs e value objects.
- `rules`: custo, dano, efeitos, expiracao e ordem de turno.
- `content`: parsing, validacao de shape e referencias cruzadas do catalogo.
- `creation`: `CharacterCreation` e validacao de build inicial.
- `flow`: cenarios completos do core sem CLI.
- `cli`: smoke dos subcomandos da CLI.

### Phase Requirements -> Test Map

| Req ID | Behavior | Test Type | Automated Command | File Exists? |
|--------|----------|-----------|-------------------|-------------|
| CORE-01 | tipos base compilam e preservam fronteira sem adapters | unit | `ctest --preset dev -L domain` | ❌ Wave 0 |
| CORE-02 | construcao invalida falha de forma explicita | unit | `ctest --preset dev -L domain` | ❌ Wave 0 |
| CORE-03 | invariantes dos tipos rodam sem CLI/parser | unit | `ctest --preset dev -L domain` | ❌ Wave 0 |
| CORE-04 | `Definition` e `State` seguem separados | unit/integration | `ctest --preset dev -L domain && ctest --preset dev -L creation` | ❌ Wave 0 |
| RULE-01 | mesma entrada produz mesma saida | unit/scenario | `ctest --preset dev -L rules` | ❌ Wave 0 |
| RULE-02 | eventos e replay explicam a resolucao | scenario | `ctest --preset dev -L rules && ctest --preset dev -L flow` | ❌ Wave 0 |
| RULE-03 | execucao invalida expõe erro de regra/validacao | unit | `ctest --preset dev -L rules` | ❌ Wave 0 |
| RULE-04 | fluxo minimo de custo/dano/efeito coberto sem UI final | scenario | `ctest --preset dev -L flow` | ❌ Wave 0 |
| CONT-01 | catalogo JSON versionado e pequeno | integration | `ctest --preset dev -L content` | ❌ Wave 0 |
| CONT-02 | loader separado do runtime falha explicitamente | integration | `ctest --preset dev -L content` | ❌ Wave 0 |
| CONT-03 | `CharacterCreation` monta protagonista valido | integration/scenario | `ctest --preset dev -L creation` | ❌ Wave 0 |
| CONT-04 | pacote inicial permanece pequeno e suficiente | integration/manual spot-check | `ctest --preset dev -L content` | ❌ Wave 0 |
| FLOW-01 | CLI inspeciona catalogo, cria personagem e executa encontro | smoke | `ctest --preset dev -L cli` | ❌ Wave 0 |
| FLOW-02 | combate minimo expõe estado, logs e replay | scenario/smoke | `ctest --preset dev -L flow && ctest --preset dev -L cli` | ❌ Wave 0 |
| FLOW-03 | caminho `tipos -> regras -> criacao -> combate` fica verde | scenario/smoke | `ctest --preset dev -L flow` | ❌ Wave 0 |
| FLOW-04 | CLI continua ferramenta de estudo, nao shell final | smoke/manual review | `ctest --preset dev -L cli` | ❌ Wave 0 |

### Sampling Rate

- **Durante `02-01`:** build do target alterado + `ctest --preset dev -L domain`.
- **Durante `02-02`:** `ctest --preset dev -L rules` a cada mudanca de resolver; `-L flow` quando um novo cenario for fechado.
- **Durante `02-03`:** `ctest --preset dev -L content && ctest --preset dev -L creation` a cada mudanca de schema, loader ou `CharacterCreation`.
- **Durante `02-04`:** `ctest --preset dev -L flow && ctest --preset dev -L cli` a cada mudanca de combate ou CLI.
- **Per plan completion:** rerodar todas as labels acumuladas ate o plano atual.
- **Phase gate:** full suite em `dev`, `asan` e `ubsan` verde antes de `02-VALIDATION.md`.

### Wave 0 Gaps

- [ ] `CMakePresets.json` com presets `dev`, `asan` e `ubsan`.
- [ ] `CMakeLists.txt` raiz com `include(CTest)` e integracao `GoogleTest`.
- [ ] Labels CTest padronizadas (`domain`, `rules`, `content`, `creation`, `flow`, `cli`).
- [ ] Estrutura de testes em `tests/unit`, `tests/integration`, `tests/scenarios`, `tests/smoke`.
- [ ] Um pequeno `tests/support/` para builders de snapshot/catalogo, sem virar framework.
- [ ] Um smoke test da CLI que invoque o binario com um caso fechado de combate.

## Sources

### Primary (HIGH confidence)

- Local project contract:
  - `.planning/PROJECT.md`
  - `.planning/REQUIREMENTS.md`
  - `.planning/ROADMAP.md`
  - `.planning/STATE.md`
  - `.planning/phases/02-core-foundation/02-CONTEXT.md`
  - `.planning/phases/01-guia-canonico-de-implementacao/01-HANDOFF.md`
  - `.planning/phases/01-guia-canonico-de-implementacao/01-GUIA-CANONICO.md`
  - `.planning/phases/01-guia-canonico-de-implementacao/01-RESEARCH.md`
- CMake presets manual: https://cmake.org/cmake/help/latest/manual/cmake-presets.7.html
- CMake GoogleTest module: https://cmake.org/cmake/help/latest/module/GoogleTest.html
- `CMAKE_EXPORT_COMPILE_COMMANDS`: https://cmake.org/cmake/help/latest/variable/CMAKE_EXPORT_COMPILE_COMMANDS.html
- GoogleTest primer: https://google.github.io/googletest/primer.html
- GoogleTest latest release page: https://github.com/google/googletest/releases/tag/v1.17.0
- nlohmann/json design goals: https://json.nlohmann.me/home/design_goals/
- nlohmann/json arbitrary type conversions: https://json.nlohmann.me/features/arbitrary_types/
- nlohmann/json exceptions: https://json.nlohmann.me/home/exceptions/
- nlohmann/json CMake integration: https://json.nlohmann.me/integration/cmake/
- nlohmann/json latest release: https://github.com/nlohmann/json/releases/tag/v3.12.0

### Secondary (MEDIUM confidence)

- None.

### Tertiary (LOW confidence)

- None.

## Metadata

**Confidence breakdown**

- Standard stack: HIGH - toolchain local confirmada e referencias externas vieram de docs oficiais/releases.
- Architecture: HIGH - a maior parte do desenho ja estava travada pelos artefatos canonicos; a pesquisa apenas fechou as formas mais seguras de materializar isso em codigo.
- Pitfalls: HIGH - alinhadas com guardrails locais e com as limitacoes tecnicas do recorte.

**Research date:** 2026-04-05
**Valid until:** 2026-05-05
