# Phase 1: Foundation and Guardrails - Research

**Researched:** 2026-03-29
**Domain:** Unity baseline normalization, mobile bootstrap architecture, authored-data boundaries, profiling and test guardrails
**Confidence:** HIGH

## User Constraints

### Locked Decisions from CONTEXT.md
- **D-01:** O baseline principal de desenvolvimento e performance da Fase 1 sera o **Samsung Galaxy A15**.
- **D-02:** O **Samsung Galaxy A10** fica como alvo secundario de compatibilidade e smoke test, nao como device que dita o budget principal desta fase.
- **D-03:** O budget oficial do slice para o baseline principal e **30 FPS estaveis**, priorizando consistencia e legibilidade sobre ambicao visual precoce.
- **D-04:** O slice usara **frente/retaguarda fixa** como modelo tatico base; nao havera grid, hex ou movimentacao livre por tiles no MVP.
- **D-05:** O posicionamento deve afetar **alvo, alcance e protecao**; frente protege retaguarda e as regras de combate devem respeitar essa estrutura desde o inicio.
- **D-06:** O protagonista tera **3 habilidades ativas equipadas** no MVP.
- **D-07:** O planejamento da HUD e do fluxo de turno deve assumir um turno enxuto e legivel no mobile; expandir para 4 ativas fica fora do escopo desta fase.
- **D-08:** O save/resume do vertical slice sera permitido **entre nos e combates**, nao durante um combate ativo.
- **D-09:** A primeira sequencia jogavel validavel deve ser **tutorial curto + 2 combates + 1 no de descanso/evento**.
- **D-10:** A arquitetura de sessao e persistencia desta fase deve preparar checkpoints nesse formato de fluxo curto, sem abrir escopo para save granular dentro da batalha.

### the agent's Discretion
- O planner pode escolher a implementacao concreta de bootstrap, estrutura de pastas, harness de profiling e representacao de runtime desde que preserve D-01 a D-10.

### Deferred Ideas
- Nenhuma — a discussao ficou dentro do escopo da fase.

## Project Constraints (from AGENTS.md)

- Responder e documentar em portugues do Brasil, com tom direto e objetivo.
- Explorar contexto antes de editar e preferir mudancas pequenas, coesas e revisaveis.
- Preservar o comportamento existente por padrao e nao reverter alteracoes do usuario.
- Validar o que for alterado com checks proporcionais ao escopo; nao afirmar validacoes sem evidencia.
- Unity deve permanecer na linha `6000.3.x` salvo validacao explicita.
- Regras de combate/build/IA devem ficar em C# puro sempre que possivel; `MonoBehaviour` fica na integracao/apresentacao.
- `uGUI` e o baseline de UI runtime deste slice; evitar misturar `uGUI` e `UI Toolkit` cedo.
- `Input System` deve ser touch-first.
- `URP` so no modo mais simples possivel e sempre sob benchmark real.
- Perfilar em device real; tratar GC, draw calls, overdraw e memoria como requisitos de produto.
- Preferir `ScriptableObject` para authored data com runtime state separado.
- Usar testes de regra para hot paths de combate/IA/save.
- Evitar `Resources/`, Visual Scripting, DOTS/ECS, multiplayer/live-service e DI pesado neste slice.

## Summary

O repositorio atual esta mais proximo de um template Unity 2D/URP do que de um baseline do jogo: o projeto ainda usa `DefaultCompany`, `Unity` e `com.DefaultCompany.2D-URP`, a cena unica do build e `SampleScene.unity`, e o manifesto traz pacotes que conflitam com as restricoes do projeto, em especial `com.unity.visualscripting` e `com.unity.multiplayer.center`. A Fase 1 precisa primeiro transformar esse template em um baseline de produto: identidade do app, bootstrap shell, pipeline de dados authored e guardrails de medicao em device.

A melhor estrategia para planejar bem esta fase e separar o trabalho em tres frentes: (1) normalizar o baseline Unity e documentar o benchmark profile do slice em torno de `Galaxy A15 @ 30 FPS`, preservando o `Galaxy A10` como smoke target; (2) criar a primeira espinha dorsal de runtime em `Assets/_Project/` com assemblies por camada e um catalogo de dados authored que remova dependencia de valores enterrados em cena; (3) instalar guardrails de teste/perfilagem e um registro explicito dos Q&As ainda em aberto, de modo que as proximas fases nao improvisem regras fundamentais.

**Primary recommendation:** Planejar a Fase 1 como tres planos curtos e complementares: baseline/projeto Unity, arquitetura + dados authored, e guardrails de teste/profiling/Q&A.

## Standard Stack

### Core

| Library / System | Version | Purpose | Why Standard |
|------------------|---------|---------|--------------|
| Unity Editor | 6000.3.2f1 | Baseline do projeto e tooling | Ja e a versao observada no repositorio e respeita a linha `6000.3.x` travada pelo projeto. |
| C# runtime assemblies | Built into Unity 6000.3 | Regras, bootstrap e orchestration | Mantem dominio testavel e evita scene-owned logic. |
| Unity Input System | 1.17.0 | Touch/input abstraction | Ja esta presente e e o caminho moderno alinhado ao projeto. |
| uGUI + TextMeshPro | 2.0.0 | Shell, HUD basico e menus do slice | E o baseline recomendado pelo projeto para runtime UI. |
| URP 17.3.0 (lean) | From local manifest | Renderer do projeto | Pode ser mantido se ficar minimalista e sem features caras. |

### Supporting

| Tool / Package | Version | Purpose | When to Use |
|----------------|---------|---------|-------------|
| Unity Test Framework | 1.6.0 | EditMode tests para regras e smoke infra | Deve entrar desde a Fase 1 para cobrir bootstrap e bases de runtime. |
| Sprite Atlas / built-in atlas strategy | Built-in | Reduzir batch breaks de UI/sprites | Assim que houver mais de uma tela/HUD relevante. |
| Unity Profiler + Frame Debugger | Built-in | CPU, memoria, GC, batches e overdraw | Sempre em device real para o baseline do slice. |
| Memory Profiler workflow | Built-in / package tooling | Validar heap growth e churn | Quando bootstrap e loop minimo estiverem rodando no device. |

### Alternatives Considered

| Instead of | Could Use | Tradeoff |
|------------|-----------|----------|
| Lean URP | Built-in Render Pipeline | So valeria se URP se mostrar caro demais no benchmark real; ainda nao ha evidencia para trocar agora. |
| uGUI runtime baseline | UI Toolkit runtime | Misturar cedo adiciona custo de input/eventos sem resolver o problema central desta fase. |
| ScriptableObject + runtime state | MonoBehaviour-heavy scene data | E mais rapido no prototipo, mas pior para testes, tuning e performance no slice. |

## Existing Baseline Findings

- `Unity/ProjectSettings/ProjectVersion.txt` trava o projeto em `6000.3.2f1`.
- `Unity/ProjectSettings/EditorBuildSettings.asset` ainda aponta apenas para `Assets/Scenes/SampleScene.unity`.
- `Unity/ProjectSettings/ProjectSettings.asset` ainda carrega identidade de template: `companyName: DefaultCompany`, `productName: Unity`, `applicationIdentifier: com.DefaultCompany.2D-URP`.
- `Unity/Packages/manifest.json` tem o minimo necessario para Input System, URP, uGUI e tests, mas tambem inclui pacotes fora do escopo do slice como `com.unity.visualscripting` e `com.unity.multiplayer.center`.
- `Unity/Assets/` ainda nao contem uma arvore `_Project/` nem codigo/runtime proprio preservado; isso favorece uma reorganizacao limpa agora, antes do dominio existir.

## Architecture Patterns

### 1. Bootstrap Scene + Composition Root

Use uma cena de bootstrap propria do projeto em `Unity/Assets/_Project/Scenes/Bootstrap.unity`, substituindo a dependencia de `SampleScene.unity` como entrada do build. O bootstrap deve:
- carregar um asset de configuracao authored
- inicializar servicos de infraestrutura basicos
- abrir um shell minimo de app
- evitar qualquer regra de combate real nesta fase

### 2. Layered Assemblies Early

Crie assemblies separadas desde o inicio para evitar scene-owned logic:
- `Unity/Assets/_Project/Bootstrap/Ascend.Bootstrap.asmdef`
- `Unity/Assets/_Project/Runtime/Domain/Ascend.Domain.asmdef`
- `Unity/Assets/_Project/Runtime/Application/Ascend.Application.asmdef`
- `Unity/Assets/_Project/Runtime/Presentation/Ascend.Presentation.asmdef`
- `Unity/Assets/_Project/Runtime/Infrastructure/Ascend.Infrastructure.asmdef`
- `Unity/Assets/_Project/Tests/EditMode/Ascend.Tests.EditMode.asmdef`

Isto e suficiente para a Fase 1 sem cair em overengineering de dezenas de assemblies.

### 3. Authored Data Catalog Before Real Rules

Para cumprir `TECH-02`, a Fase 1 nao precisa implementar o sistema de combate inteiro; ela precisa provar que os futuros sistemas vao ler dados authored fora de cena. O catalogo minimo recomendado e:
- `AppBootstrapConfig` — cena shell, perfil de benchmark e toggles de bootstrap
- `BenchmarkDeviceProfile` — device principal/secundario, target FPS, notas de smoke profiling
- `GameDataCatalog` — referencia raiz para os grupos de dados do slice
- `CombatPrototypeConfig` — placeholders para limite de ativas, formacao frente/retaguarda e hooks da futura fila de combate
- `SessionFlowConfig` — estrutura da primeira sequencia jogavel e checkpoint entre nos/combat

### 4. ScriptableObject Authored Data + Plain Runtime State

Use `ScriptableObject` apenas para authored data e um runtime state em C# puro para o que muda em execucao. Nesta fase isso pode aparecer como:
- configs/authored data em `Unity/Assets/_Project/Content/Definitions/`
- classes de runtime simples em `Unity/Assets/_Project/Runtime/...`
- presenters/MonoBehaviours apenas lendo view models/configs

## Don’t Hand-Roll

- Nao construir uma camada custom de input quando o `Input System` ja cobre o baseline touch-first.
- Nao misturar `uGUI` e `UI Toolkit` na Fase 1.
- Nao criar DI framework, service locator reflexivo ou bootstrap magico; um composition root explicito basta.
- Nao inventar um pipeline de conteudo via `Resources/`; usar referencias explicitas e catalogos authored.
- Nao adiar profiling para fases posteriores; o baseline precisa nascer medivel.
- Nao carregar o projeto com features de template que o slice explicitamente evita: Visual Scripting, multiplayer center, integracoes que nao ajudam a validar o core loop.

## Common Pitfalls

### Template Drift
- Manter `SampleScene`, identidade de template e pacotes sobrando deixa o projeto parecer configurado quando ainda nao esta.
- Efeito no plano: `01-01` precisa tratar explicitamente identidade, cena de entrada e manifesto.

### Scene-Owned Data Sneak-In
- Se o shell minimo nascer com valores hardcoded na cena, `TECH-02` ja sai comprometido.
- Efeito no plano: `01-02` precisa criar pelo menos um catalogo authored real e conectá-lo ao bootstrap.

### Profiling Without a Stable Profile
- Sem device principal, target FPS e rotina minima de captura, qualquer numero de profiler vira opiniao.
- Efeito no plano: `01-03` precisa amarrar as capturas ao `Galaxy A15 @ 30 FPS` e registrar o `Galaxy A10` como smoke target.

### Overbuilding Phase 1
- Tentar implementar combate real, save real ou content pipeline completo aqui atrasa a fase e rouba foco do baseline.
- Efeito no plano: a Fase 1 deve construir apenas scaffolding que desbloqueia Fases 2-7, nao o jogo completo.

## Code Examples

### Recommended Assets Layout

```text
Unity/Assets/_Project/
├── Bootstrap/
│   ├── Ascend.Bootstrap.asmdef
│   ├── AppBootstrap.cs
│   └── AppBootstrapConfig.asset
├── Scenes/
│   └── Bootstrap.unity
├── Runtime/
│   ├── Domain/
│   ├── Application/
│   ├── Presentation/
│   └── Infrastructure/
├── Content/
│   └── Definitions/
│       ├── BenchmarkDeviceProfile.asset
│       ├── GameDataCatalog.asset
│       ├── CombatPrototypeConfig.asset
│       └── SessionFlowConfig.asset
└── Tests/
    └── EditMode/
```

### Recommended Package Trim for Phase 1

- Remover do manifesto: `com.unity.visualscripting`, `com.unity.multiplayer.center`, `com.unity.collab-proxy`
- Manter: `com.unity.inputsystem`, `com.unity.render-pipelines.universal`, `com.unity.ugui`, `com.unity.test-framework`
- Manter por ora os pacotes 2D/importers do template; reavaliar so quando houver direcao artistica e pipeline de assets mais concretos

### Benchmark Profile Fields

Um perfil minimo authored deve explicitar:
- `primaryDeviceName = "Samsung Galaxy A15"`
- `secondarySmokeDeviceName = "Samsung Galaxy A10"`
- `targetFrameRate = 30`
- `profilingScenarios = ["boot-shell", "hud-idle", "combat-smoke"]`

## Validation Architecture

Planejar a Fase 1 com validacao em duas camadas:

1. **Smoke infra check** para toda mudanca que toca baseline:
   - abrir/inspecionar os assets/settings editados
   - validar strings-chave em `manifest.json`, `ProjectSettings.asset` e `EditorBuildSettings.asset`
   - garantir que a arvore `_Project/` e os asmdefs existam

2. **Unity EditMode test lane** criada na propria Fase 1:
   - um asmdef de testes em `Unity/Assets/_Project/Tests/EditMode/`
   - um runner script versionado, por exemplo `scripts/test-editmode.sh`
   - uma smoke suite curta para bootstrap/config/catalogos

**Quick command (target):** `bash scripts/test-editmode.sh --suite smoke`

**Full command (target):** `bash scripts/test-editmode.sh --suite full`

Esses scripts podem nascer nesta fase; enquanto isso nao existe, os planos devem usar verificacoes por arquivo/config e deixar claro quando a infraestrutura de teste esta sendo criada.

## Planning Implications

- **Plan 01-01** deve normalizar identidade do projeto, manifesto e cena de entrada, alem de registrar o benchmark profile do slice.
- **Plan 01-02** deve criar a arvore `_Project/`, asmdefs por camada e o primeiro catalogo authored de bootstrap/combat/session para cumprir `TECH-02`.
- **Plan 01-03** deve criar a lane minima de testes, scripts/harness de profiling e um registro explicito dos Q&As ainda abertos para nao vazar ambiguidade para as proximas fases.

## Sources

### Local Primary Sources
- `AGENTS.md`
- `.planning/phases/01-foundation-and-guardrails/01-CONTEXT.md`
- `.planning/PROJECT.md`
- `.planning/REQUIREMENTS.md`
- `.planning/ROADMAP.md`
- `.planning/STATE.md`
- `.planning/research/SUMMARY.md`
- `.planning/research/STACK.md`
- `.planning/research/ARCHITECTURE.md`
- `.planning/research/PITFALLS.md`
- `.planning/research/FEATURES.md`
- `Unity/ProjectSettings/ProjectVersion.txt`
- `Unity/Packages/manifest.json`
- `Unity/Packages/packages-lock.json`
- `Unity/ProjectSettings/ProjectSettings.asset`
- `Unity/ProjectSettings/EditorBuildSettings.asset`
- `Unity/ProjectSettings/QualitySettings.asset`
- `Unity/ProjectSettings/GraphicsSettings.asset`

### Official References Already Curated in Project Research
- Unity Manual, Comparison of UI systems
- Unity Input System manual
- Unity uGUI package manual
- Unity ScriptableObject API
- Unity Manual, Garbage collector overview
- Unity Manual, Collecting performance data

