# Phase 2: Core Foundation - Context

**Gathered:** 2026-04-05
**Status:** Ready for planning
**Source:** Roadmap + handoff synthesis

<domain>
## Phase Boundary

Esta fase entrega o primeiro milestone de codigo do Ascend como backend C++ educacional, testavel e agnostico de plataforma. O recorte completo da fase 2 e o caminho `tipos -> regras -> criacao de personagem -> combate minimo`, executado pelos planos `02-01` a `02-04` sem reabrir framing, escopo base ou o papel da `CLI estruturada`.

A fase deve sair com modulos reais de `domain`, `rules`, `content`, `session`, `validation` e `adapters::cli`, mas continua fora de escopo qualquer shell de produto, UI final, multiplayer, save system, party, IA tatica, parser definitivo, balanceamento profundo ou volume grande de conteudo.

</domain>

<decisions>
## Implementation Decisions

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

</decisions>

<canonical_refs>
## Canonical References

**Downstream agents MUST read these before planning or implementing.**

### Current milestone contract
- `.planning/PROJECT.md` - valor central, restricoes e objetivo oficial do milestone `v1.1`
- `.planning/REQUIREMENTS.md` - requisitos `CORE-*`, `RULE-*`, `CONT-*` e `FLOW-*` que a fase 2 precisa cobrir
- `.planning/ROADMAP.md` - objetivo oficial da `Phase 2`, criterios de sucesso e ordem dos planos `02-01..02-04`
- `.planning/STATE.md` - estado atual do projeto, bloqueios e foco operacional

### Canonical implementation guidance
- `.planning/phases/01-guia-canonico-de-implementacao/01-HANDOFF.md` - fonte principal do recorte do milestone 02, defaults recomendados e guardrails
- `.planning/phases/01-guia-canonico-de-implementacao/01-GUIA-CANONICO.md` - mapa de namespaces, fronteiras `Definition`/`State`, baseline tecnico e estrategia de validacao
- `.planning/phases/01-guia-canonico-de-implementacao/01-RESEARCH.md` - baseline tecnico e referencias de stack usadas para fechar a documentacao da fase 1

### Source ideation
- `Estruturação.md` - materia-prima original; continua sendo fonte bruta, nao backlog literal

</canonical_refs>

<code_context>
## Existing Code Insights

### Reusable Assets
- Nao existe ainda uma implementacao C++ ativa do core para reaproveitar. O trabalho desta fase deve assumir abertura de codigo praticamente greenfield para `domain`, `rules`, `content`, `session`, `validation` e `adapters::cli`.

### Established Patterns
- O padrao realmente consolidado ate aqui e documental: core-first, media-agnostic, separacao explicita entre dominio, catalogo de conteudo, servicos de sessao e adapters.
- `Definition` e `State` ja estao tratados como fronteiras formais; o planejamento nao deve voltar a misturar essas responsabilidades.
- Replay, logs estruturados e testes fazem parte da arquitetura desde o primeiro recorte, nao so da verificacao final.

### Integration Points
- `ascend::domain::{attributes,resources,effects,characters,skills,combat,enemy}` sustentam os tipos e estados base.
- `ascend::rules::{damage,effects,combat_resolution}` fecham custo, dano, efeitos e ordem de resolucao.
- `ascend::content::definitions` publica o catalogo minimo e o loader inicial.
- `ascend::session::character_creation` monta e valida o protagonista a partir do catalogo.
- `ascend::validation` concentra replay, snapshots, eventos e logs estruturados.
- `ascend::adapters::cli` consome o core como ferramenta de estudo, sem virar shell final do jogo.

</code_context>

<specifics>
## Specific Ideas

- Baseline tecnico aceito para abertura do codigo: `C++20`, `CMake`, `CTest`, `GoogleTest`, `clang-tidy`, `AddressSanitizer`, `UndefinedBehaviorSanitizer` e `compile_commands.json`, com `Ninja` opcional.
- O primeiro plano deve fechar IDs, value objects, invariantes e a separacao `Definition`/`State` antes de qualquer adapter.
- O segundo plano deve fechar observabilidade suficiente para que a mesma entrada produza a mesma saida e um log/replay explicavel.
- O terceiro plano deve usar o default de `JSON` simples e loader minimo, mas sem travar parser definitivo.
- O quarto plano deve provar o fluxo completo com combate minimo e `CLI estruturada`, preservando a CLI como ferramenta de inspecao.

</specifics>

<deferred>
## Deferred Ideas

- `party`, companions, IA tatica, `items`, `progression`, `quests`, `npcs` e `world systems` continuam fora do backlog executavel desta fase, exceto como fronteiras nomeadas.
- UI final, rendering, audio, engine integration, networking, persistencia final e save system continuam fora de escopo.
- Parser definitivo, DSL e pipeline sofisticado de autoria ficam para depois que o fluxo minimo estiver verde.
- Aleatoriedade real com `seed` explicita continua adiada ate que replay e logs tenham contrato estavel.

</deferred>

---

*Phase: 02-core-foundation*
*Context gathered: 2026-04-05 via roadmap + handoff synthesis*
