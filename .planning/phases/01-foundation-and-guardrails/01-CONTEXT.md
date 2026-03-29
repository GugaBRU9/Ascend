# Phase 1: Foundation and Guardrails - Context

**Gathered:** 2026-03-29
**Status:** Ready for planning

<domain>
## Phase Boundary

Estabelecer o baseline validado do projeto Unity para o vertical slice mobile: identidade e settings do projeto, device/budget de referencia, arquitetura inicial de dados/runtime, guardrails de profiling/testes e um shell jogavel minimo para bootstrap. Esta fase nao implementa o combate completo nem sistemas de progressao; ela fixa as decisoes que esses sistemas vao herdar.

</domain>

<decisions>
## Implementation Decisions

### Benchmark Device and Performance Budget
- **D-01:** O baseline principal de desenvolvimento e performance da Fase 1 sera o **Samsung Galaxy A15**.
- **D-02:** O **Samsung Galaxy A10** fica como alvo secundario de compatibilidade e smoke test, nao como device que dita o budget principal desta fase.
- **D-03:** O budget oficial do slice para o baseline principal e **30 FPS estaveis**, priorizando consistencia e legibilidade sobre ambicao visual precoce.

### Tactical Field Model
- **D-04:** O slice usara **frente/retaguarda fixa** como modelo tatico base; nao havera grid, hex ou movimentacao livre por tiles no MVP.
- **D-05:** O posicionamento deve afetar **alvo, alcance e protecao**; frente protege retaguarda e as regras de combate devem respeitar essa estrutura desde o inicio.

### Combat Readability Guardrails
- **D-06:** O protagonista tera **3 habilidades ativas equipadas** no MVP.
- **D-07:** O planejamento da HUD e do fluxo de turno deve assumir um turno enxuto e legivel no mobile; expandir para 4 ativas fica fora do escopo desta fase.

### Save/Resume and First Playable Slice
- **D-08:** O save/resume do vertical slice sera permitido **entre nos e combates**, nao durante um combate ativo.
- **D-09:** A primeira sequencia jogavel validavel deve ser **tutorial curto + 2 combates + 1 no de descanso/evento**.
- **D-10:** A arquitetura de sessao e persistencia desta fase deve preparar checkpoints nesse formato de fluxo curto, sem abrir escopo para save granular dentro da batalha.

### the agent's Discretion
Sem decisoes explicitamente delegadas pelo usuario nesta conversa. O planner pode escolher a implementacao concreta de bootstrap, estrutura de pastas, harness de profiling e representacao de runtime desde que preserve as decisoes D-01 a D-10 e os limites ja travados em `AGENTS.md` e nos docs de planejamento.

</decisions>

<canonical_refs>
## Canonical References

**Downstream agents MUST read these before planning or implementing.**

### Product and Phase Scope
- `AGENTS.md` — guardrails globais da sessao e regras especificas do projeto Ascend, incluindo stack, workflow GSD e Q&A obrigatorio antes de endurecer implementacao.
- `.planning/PROJECT.md` — visao do produto, constraints mobile/performance e lista dos pontos criticos ainda abertos que a Fase 1 precisa comecar a fechar.
- `.planning/REQUIREMENTS.md` — requisitos `TECH-01`, `TECH-02` e `TECH-03`, alem do contexto de `SESS-02` e `UX-02` que influenciam budget e persistencia.
- `.planning/ROADMAP.md` — meta, sucesso esperado e planos previstos para a Fase 1.

### Design Source and Research
- `Estruturação.md` — documento base de design do jogo; inclui fluxo de combate, party, skills e o desenho amplo do save system.
- `.planning/research/SUMMARY.md` — sintese da direcao recomendada para o vertical slice, com enfase em mobile-first, ScriptableObject + runtime state e profiling em device.
- `.planning/research/STACK.md` — baseline tecnico recomendado para Unity 6000.3, Input System, uGUI e uso contido de URP.
- `.planning/research/ARCHITECTURE.md` — estrutura sugerida por camadas, separando presentation/application/domain/infrastructure.
- `.planning/research/PITFALLS.md` — riscos prioritarios da Fase 1, especialmente GC, UI cara, scene-owned logic e design edges indefinidos.
- `.planning/research/FEATURES.md` — definicao do envelope do vertical slice e perguntas abertas sobre save/resume e forma da primeira sequencia jogavel.

### Current Unity Baseline
- `Unity/ProjectSettings/ProjectVersion.txt` — trava a linha atual em `6000.3.2f1`.
- `Unity/Packages/manifest.json` — baseline atual de packages; confirma `Input System`, `uGUI`, `URP` e mostra pacotes a podar/validar.
- `Unity/ProjectSettings/EditorBuildSettings.asset` — mostra a cena unica atual no build e o `InputSystem_Actions` ja conectado no projeto.
- `Unity/ProjectSettings/ProjectSettings.asset` — baseline atual de Player Settings mobile/template; precisa ser normalizado para identidade e budgets do projeto.

</canonical_refs>

<code_context>
## Existing Code Insights

### Reusable Assets
- `Unity/Assets/InputSystem_Actions.inputactions`: asset de input ja presente e referenciado no build settings; serve como base touch-first inicial ou como ponto de migracao para um mapa de input proprio do projeto.
- `Unity/Assets/Settings/UniversalRP.asset` e `Unity/Assets/Settings/Renderer2D.asset`: baseline de URP 2D ja configurado; a Fase 1 deve simplificar e validar esse setup em vez de expandi-lo.
- `Unity/Assets/Scenes/SampleScene.unity`: shell temporario que pode servir de smoke boot inicial enquanto a cena/bootstrap real do projeto nao existe.

### Established Patterns
- O repositorio atual esta muito proximo de um template Unity 2D/URP; nao ha runtime/domain code proprio preservado no baseline atual.
- `Unity/ProjectSettings/EditorBuildSettings.asset` usa uma unica cena e ja aponta para o Input System, sugerindo um ponto simples de entrada para um app shell minimo.
- `Unity/ProjectSettings/ProjectSettings.asset` ainda carrega identidade de template (`DefaultCompany`, `Unity`, `com.DefaultCompany.2D-URP`), entao a normalizacao de projeto faz parte da Fase 1.

### Integration Points
- `Unity/Assets/_Project/` pode ser introduzido sem alto custo porque a arvore atual de `Assets/` e enxuta.
- Os dados authored da Fase 1 devem nascer fora de cena, em assets dedicados, para preparar a separacao `authored data -> runtime state`.
- Os primeiros guardrails de profiling e testes devem se conectar ao bootstrap, ao build settings e a uma pasta de testes desde o inicio, porque ainda nao existe automacao local consolidada.

</code_context>

<specifics>
## Specific Ideas

- O usuario considerou **Galaxy A10** e **Galaxy A15**, mas travou o **Galaxy A15** como referencia principal "para rodar bem" e deixou o **A10** como compatibilidade secundaria.
- O combate do slice deve privilegiar legibilidade e custo baixo: **frente/retaguarda fixa** com impacto em alvo, alcance e protecao.
- O MVP deve assumir **3 habilidades ativas** para manter HUD e decisao de turno enxutos.
- A primeira experiencia validavel deve ser curta: **tutorial curto + 2 combates + 1 no de descanso/evento**, com **checkpoints apenas entre nos e combates**.

</specifics>

<deferred>
## Deferred Ideas

Nenhuma — a discussao ficou dentro do escopo da fase.

</deferred>

---

*Phase: 01-foundation-and-guardrails*
*Context gathered: 2026-03-29*
