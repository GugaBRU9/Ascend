# Architecture Research

**Domain:** backend C++ core-first para combate tatico simples
**Researched:** 2026-04-12
**Confidence:** MEDIUM

## Standard Architecture

### System Overview

```text
+-----------------------------------------------------------+
| Session / Use Cases                                      |
+-----------------------------------------------------------+
| CombatSession | UATHarness | ReplayRecorder | Loader      |
+-----------------------------------------------------------+
| Domain Core                                               |
+-----------------------------------------------------------+
| CombatState | RuleServices | TurnResolver | EffectResolver|
+-----------------------------------------------------------+
| Content + Adapter Layer                                   |
| CharacterDefs | SkillDefs | CLI/Test Fixtures | Persist.  |
+-----------------------------------------------------------+
```

### Component Responsibilities

| Component | Responsibility | Typical Implementation |
|-----------|----------------|------------------------|
| `CombatState` | Guardar estado de runtime do duelo | Structs/objects pequenos e serializaveis |
| `RuleServices` | Calcular iniciativa, custo, dano, efeitos e validacoes | Funcoes puras ou servicos sem estado oculto |
| `TurnResolver` | Orquestrar a sequencia do turno | Caso de uso que aplica regras sobre estado + comando |
| `Content Definitions` | Definir atributos, habilidades e inimigos em formato estatico | Catalogos de dados separados do runtime |
| `Replay/UAT Harness` | Registrar entradas/saidas e suportar verificacao | Adaptadores de texto ou serializacao simples |

## Recommended Project Structure

```text
src/
|-- domain/
|   |-- combat/          # Estado, comandos e regras centrais
|   |-- attributes/      # Contratos dos atributos e escalonamento
|   `-- skills/          # Definicoes e resolucao de habilidades
|-- application/
|   |-- session/         # Orquestracao de combate e casos de uso
|   `-- replay/          # Gravacao e leitura de eventos
|-- content/             # Catalogos estaticos de jogador, inimigo e skills
`-- adapters/
    |-- cli/             # Entradas/saidas textuais futuras
    `-- tests/           # Fixtures e harnesses de validacao
```

### Structure Rationale

- **`domain/`**: concentra invariantes e evita vazamento de decisoes de infraestrutura.
- **`application/`**: organiza fluxos de sessao sem poluir o core com concerns de orquestracao.
- **`content/`**: separa definicao de dados de runtime, alinhando com a regra do projeto.
- **`adapters/`**: preserva independencia de plataforma e deixa claro o que pode ser trocado depois.

## Architectural Patterns

### Pattern 1: Value Objects + Stateless Rule Services

**What:** representar estado e parametros como objetos pequenos e usar servicos de regra sem estado oculto.
**When to use:** no calculo de dano, ordem de turno, custos e validacao de comandos.
**Trade-offs:** muito claro e testavel; exige disciplina para nao espalhar logica ad hoc.

**Example:**
```cpp
DamageResolution resolve_basic_attack(const CombatSnapshot& snapshot,
                                      const ActionCommand& command);
```

### Pattern 2: Content Definitions Separate From Runtime State

**What:** manter atributos base, habilidades e perfis de inimigo em catalogos separados do estado mutavel.
**When to use:** sempre que uma regra depender de definicao fixa e de estado momentaneo ao mesmo tempo.
**Trade-offs:** aumenta a clareza de autoria; exige contratos bons entre id de conteudo e instancia em runtime.

### Pattern 3: Deterministic Replay Boundary

**What:** toda acao relevante gera evento suficiente para reconstruir o combate.
**When to use:** desde o primeiro slice implementavel.
**Trade-offs:** adiciona disciplina de modelagem; reduz ambiguidade em teste e UAT.

## Data Flow

### Request Flow

```text
[Escolha do jogador]
    |
    v
[ActionCommand] -> [TurnResolver] -> [RuleServices] -> [CombatState]
    |                                     |                 |
    v                                     v                 v
[CombatEventLog] <- [Resolution] <- [AppliedEffects] <- [State mutation]
```

### State Management

```text
[Content Definitions]
        |
        v
[CombatSession bootstrap]
        |
        v
[CombatState] <-> [Commands] -> [RuleServices] -> [Events/Replay]
```

### Key Data Flows

1. **Inicializacao do duelo:** catalogos de jogador/inimigo geram um `CombatState` inicial validado.
2. **Resolucao do turno:** um comando do jogador e processado, efeitos sao aplicados e um log deterministico e emitido.
3. **UAT/replay:** o log e relido para comparar resultado esperado e resultado observado.

## Scaling Considerations

| Scale | Architecture Adjustments |
|-------|--------------------------|
| 0-1 slice jogavel | Monolito modular com `domain/application/content/adapters` |
| 2-5 slices jogaveis | Introduzir serializacao e catalogos externos com versionamento simples |
| Projeto maior | Extrair ferramentas auxiliares, nunca o core primeiro |

### Scaling Priorities

1. **First bottleneck:** contratos mal definidos entre conteudo e runtime - corrigir antes de adicionar sistemas novos.
2. **Second bottleneck:** crescimento desordenado de habilidades/efeitos - responder com tipagem clara e suites de replay.

## Anti-Patterns

### Anti-Pattern 1: UI-Driven Core

**What people do:** modelam o combate em volta de tela, anima, input ou engine.
**Why it's wrong:** esconde regras e dificulta testes.
**Do this instead:** definir comandos, estado e eventos independentes de qualquer UI.

### Anti-Pattern 2: Generic Entity/Component Soup

**What people do:** criam uma camada generica demais antes de saber quais regras existem.
**Why it's wrong:** a nomenclatura fica vaga e o estudante nao aprende o dominio real.
**Do this instead:** nomear diretamente `CombatState`, `SkillEffect`, `TurnOrder`, `AttributeProfile` e similares.

## Integration Points

### External Services

| Service | Integration Pattern | Notes |
|---------|---------------------|-------|
| CLI futura | Adapter fino sobre casos de uso | Boa primeira interface para depuracao |
| Persistencia futura | Serializer sobre replay/snapshots | Nao pertence ao milestone atual |

### Internal Boundaries

| Boundary | Communication | Notes |
|----------|---------------|-------|
| `content <-> domain` | IDs + structs validadas | Nunca permitir conteudo incompleto em runtime |
| `application <-> domain` | Chamadas diretas e eventos | Orquestracao pode conhecer fluxo, nao invariantes internas |
| `adapters <-> application` | Commands / DTOs simples | Mantem a borda descartavel |

## Sources

- `Estruturação.md` - referencia para entidades e sistemas futuros que precisam ser recortados
- `PROJECT.md` - direcao core-first e separacao obrigatoria de camadas
- Pedido do usuario - 1x1, atributos e habilidades como primeiro slice real

---
*Architecture research for: backend C++ core-first para combate tatico simples*
*Researched: 2026-04-12*
