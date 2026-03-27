# Architecture Research

**Domain:** Mobile turn-based RPG in Unity
**Researched:** 2026-03-27
**Confidence:** HIGH

## Standard Architecture

### System Overview

```text
┌─────────────────────────────────────────────────────────────┐
│                    Presentation Layer                       │
├─────────────────────────────────────────────────────────────┤
│ Boot Scene │ Screens │ Combat HUD │ Input Adapters │ FX    │
├─────────────────────────────────────────────────────────────┤
│                    Application Layer                        │
├─────────────────────────────────────────────────────────────┤
│ Session Flow │ Battle Flow │ Save/Load │ Progression Sync   │
├─────────────────────────────────────────────────────────────┤
│                      Domain Layer                           │
├─────────────────────────────────────────────────────────────┤
│ BattleState │ TurnQueue │ ActionResolver │ AI Planner       │
│ StatusEngine │ DamageEngine │ ProgressionRules │ SkillRules  │
├─────────────────────────────────────────────────────────────┤
│                 Data / Infrastructure Layer                 │
├─────────────────────────────────────────────────────────────┤
│ ScriptableObjects │ Persistence │ Addressables │ Profiling  │
└─────────────────────────────────────────────────────────────┘
```

### Component Responsibilities

| Component | Responsibility | Typical Implementation |
|-----------|----------------|------------------------|
| Presentation | Render state and capture player input | Unity scenes, UI Toolkit/UGUI views, presenter scripts |
| Application | Orchestrate use cases and scene/domain boundaries | C# services or controllers with explicit dependencies |
| Domain | Own combat rules, AI, progression and deterministic state changes | Pure C# classes with minimal Unity API usage |
| Data authoring | Store tunable content and static definitions | ScriptableObject assets and data tables |
| Infrastructure | Persistence, loading, profiling and platform concerns | Thin adapters around Unity APIs and packages |

## Recommended Project Structure

```text
Unity/Assets/_Project/
├── Bootstrap/                 # App entry, scene bootstrap, dependency wiring
├── Runtime/
│   ├── Domain/                # Pure C# combat/progression/AI rules
│   │   ├── Combat/
│   │   ├── Party/
│   │   ├── Progression/
│   │   └── Common/
│   ├── Application/           # Use cases and orchestration
│   │   ├── Battle/
│   │   ├── Session/
│   │   └── Save/
│   ├── Presentation/          # Views, presenters, HUD, menus
│   │   ├── UI/
│   │   ├── Combat/
│   │   └── World/
│   └── Infrastructure/        # Persistence, asset loading, diagnostics
├── Content/
│   ├── Definitions/           # Skills, archetypes, enemies, encounters
│   ├── UI/
│   └── Audio/
├── Tests/
│   ├── EditMode/
│   └── PlayMode/
└── Settings/                  # Shared project settings assets
```

### Structure Rationale

- **Runtime/Domain:** keeps combat math and rule interactions out of scene lifecycles, which improves tests and lowers hidden allocations.
- **Runtime/Application:** isolates orchestration from both UI and raw data assets.
- **Content/Definitions:** supports a data-driven balancing loop without burying numbers in prefabs or MonoBehaviours.
- **Tests/**: gives the project a clear home for rule regression tests from the start.

## Architectural Patterns

### Pattern 1: ScriptableObject auth + pure runtime state

**What:** ScriptableObjects hold authored data, while runtime combat state lives in plain C# objects.
**When to use:** For skills, archetypes, encounters, status definitions and balance values.
**Trade-offs:** Great for tuning and reuse; requires discipline to avoid mutating asset data at runtime.

**Example:**
```csharp
public sealed class SkillRuntimeState
{
    public SkillDefinition Definition { get; }
    public int CooldownRemaining { get; private set; }
}
```

### Pattern 2: Battle flow state machine

**What:** Explicit combat phases (`PlayerTurn`, `AllyTurn`, `EnemyTurn`, `ResolveEffects`) drive the loop.
**When to use:** Always, because the combat order is a core product rule.
**Trade-offs:** Slight upfront ceremony, but far easier to debug than hidden `Update()` chains.

**Example:**
```csharp
public enum BattlePhase
{
    PlayerTurn,
    AllyTurn,
    EnemyTurn,
    ResolveEffects
}
```

### Pattern 3: Command-based action resolution

**What:** Actions become immutable inputs resolved by domain systems.
**When to use:** Skills, attacks, cleanses and AI-selected actions.
**Trade-offs:** More objects and structs to define, but much better for logs, tests and replay-style debugging.

## Data Flow

### Request Flow

```text
[Touch Input]
    ↓
[HUD / Screen]
    ↓
[Presenter / Controller]
    ↓
[Use Case]
    ↓
[Domain Resolver]
    ↓
[Updated BattleState]
    ↓
[View Models / UI Refresh]
```

### State Management

```text
[Authored Data Assets]
    ↓ create / seed
[Runtime State]
    ↓ mutated by
[Rules + Resolvers]
    ↓ observed by
[Presenters / Views]
```

### Key Data Flows

1. **Turn execution:** player or AI selects an action, the domain resolves cost/target/effects, then presentation redraws the result.
2. **Progression update:** battle rewards or level changes update runtime state, then persistence snapshots the safe-point state.
3. **Reflection unlocks:** player behavior events feed a lightweight tracker that checks unlock conditions outside the combat renderer.

## Scaling Considerations

| Scale | Architecture Adjustments |
|-------|--------------------------|
| Single vertical slice | Direct scene bootstrap + local save is fine |
| Multiple encounter packs | Add Addressables and content validation tooling |
| Ongoing content expansion | Separate authored definitions from runtime state more aggressively and add import validation |

### Scaling Priorities

1. **First bottleneck:** scene-owned combat logic becomes untestable — solve by keeping rules in pure C#.
2. **Second bottleneck:** asset and UI memory churn grows with content — solve by explicit loading strategy and batching discipline.

## Anti-Patterns

### Anti-Pattern 1: Combat rules inside MonoBehaviour lifecycles

**What people do:** Split turn logic across `Update()`, animation callbacks and scene object state.
**Why it's wrong:** Creates hidden ordering bugs and makes rule validation painful.
**Do this instead:** Keep combat resolution in explicit domain systems driven by a phase controller.

### Anti-Pattern 2: Global singleton soup

**What people do:** Expose every service through static globals for speed.
**Why it's wrong:** Coupling grows fast and tests become brittle.
**Do this instead:** Build a small composition root at bootstrap and pass explicit dependencies.

## Integration Points

### External Services

| Service | Integration Pattern | Notes |
|---------|---------------------|-------|
| Local persistence | Thin adapter around Unity save IO | Keep save schema versioned from the first slice |
| Addressables (optional) | Asset loading boundary in infrastructure layer | Add only when content volume justifies it |

### Internal Boundaries

| Boundary | Communication | Notes |
|----------|---------------|-------|
| Presentation ↔ Application | Explicit method calls / view models | Keep Unity objects from leaking into domain |
| Application ↔ Domain | Commands + DTOs | Prefer immutable action requests |
| Domain ↔ Infrastructure | Interfaces at save/load and content loading edges | Avoid direct API calls from rules |

## Sources

- Internal design source: `Estruturacao.md`
- Project context: `.planning/PROJECT.md`
- Unity ScriptableObject API: https://docs.unity3d.com/ScriptReference/ScriptableObject.html
- Unity Manual, Garbage collector overview: https://docs.unity3d.com/Manual/performance-garbage-collector.html
- Unity Manual, Collecting performance data: https://docs.unity3d.com/Manual/profiler-profiling-applications.html
- Unity Learn, Object pooling: https://learn.unity.com/course/design-patterns-unity-6/tutorial/use-object-pooling-to-boost-performance-of-c-scripts-in-unity

---
*Architecture research for: mobile turn-based RPG in Unity*
*Researched: 2026-03-27*
