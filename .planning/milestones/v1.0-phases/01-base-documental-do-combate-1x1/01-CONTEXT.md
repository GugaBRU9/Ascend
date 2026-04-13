# Phase 1: Base Documental do Combate 1x1 - Context

**Gathered:** 2026-04-12
**Status:** Ready for planning

<domain>
## Phase Boundary

Esta fase entrega o contexto canonico que vai guiar a futura implementacao do primeiro combate 1x1 de `Ascend`. O foco e travar o recorte mecanico do duelo, o papel inicial dos atributos, o kit inicial de habilidades e a expectativa minima de validacao observavel, sem transformar a fase atual em implementacao jogavel ou puxar sistemas fora de escopo.

</domain>

<decisions>
## Implementation Decisions

### Combate 1x1
- **D-01:** O primeiro slice futuro usara ordem de turno por velocidade/iniciativa desde o inicio.
- **D-02:** O duelo usara tres recursos distintos no runtime: vida, stamina e mana.
- **D-03:** O encerramento canonico do combate continua centrado em vida zerada; fuga/desistencia nao entra como mecanica normal do duelo neste recorte.
- **D-04:** Fuga/desistencia sera tratada apenas como comando de debug/harness para encerrar simulacoes.
- **D-05:** O inimigo inicial usara IA fixa por prioridade.

### Atributos
- **D-06:** Os seis atributos do rascunho entram no modelo inicial do projeto: `STR`, `AGI`, `STA`, `INT`, `CHA`, `WIS`.
- **D-07:** No primeiro slice, `STR`, `AGI`, `STA`, `INT` e `WIS` podem afetar o combate diretamente.
- **D-08:** `CHA` precisa existir no contrato inicial, mas nao tem efeito mecanico obrigatorio no primeiro slice 1x1.

### Habilidades
- **D-09:** O jogador tera ataque basico mais tres habilidades ativas no primeiro slice.
- **D-10:** O inimigo tera ataque basico mais uma habilidade no primeiro slice.
- **D-11:** O limite inicial de habilidades ativas e tres.
- **D-12:** O foco estrutural do sistema deve incluir passivas ja no primeiro slice.
- **D-13:** O catalogo inicial do jogador deve prever pelo menos cinco habilidades passivas.
- **D-14:** O contrato minimo de uma habilidade sera: nome, custo, alvo, efeito, tipo de recurso e regra de uso.

### Validacao observavel
- **D-15:** A evidencia minima do slice futuro deve incluir testes automatizados e log textual do combate.
- **D-16:** Replay completo nao precisa ser fechado nesta fase; por enquanto, a fase so documenta essa necessidade para a proxima milestone.
- **D-17:** O UAT do estudante sera um checklist curto por phase com espaco para observacoes livres.
- **D-18:** O log textual minimo do combate precisa registrar acoes, custos, dano/efeitos e estado resumido por turno.

### the agent's Discretion
- A formula exata de iniciativa/velocidade e o tie-break inicial podem ser decididos no planejamento, desde que preservem a decisao de ordem por velocidade/iniciativa.
- A forma exata de consumo, regeneracao e interacao entre stamina e mana pode ser definida no planejamento, desde que os tres recursos existam no contrato.
- Os nomes, tags, efeitos concretos e distribuicao entre ataque basico, ativas e passivas podem ser refinados no planejamento, desde que respeitem as quantidades e o contrato minimo travados acima.
- O formato exato do log textual e do checklist de UAT pode ser definido no planejamento, desde que contenham os campos obrigatorios ja decididos.

</decisions>

<canonical_refs>
## Canonical References

**Downstream agents MUST read these before planning or implementing.**

### Escopo, requisitos e estado
- `.planning/PROJECT.md` - framing do milestone, valor central, restricoes e fora de escopo.
- `.planning/REQUIREMENTS.md` - requisitos `SCOPE-*`, `COMBAT-*`, `ATTR-*`, `ARCH-*` e `VAL-*` que esta fase precisa suportar.
- `.planning/ROADMAP.md` - objetivo, sucesso esperado e planos da `Phase 1: Base Documental do Combate 1x1`.
- `.planning/STATE.md` - posicao atual do projeto e alerta sobre o worktree com delecoes pre-existentes.

### Ideia-base e recorte
- `Estruturação.md` - fonte de ideacao para atributos, habilidades, recursos e combate; deve ser lida como materia-prima, nao como backlog literal.

### Pesquisa de suporte
- `.planning/research/FEATURES.md` - definicao de MVP, anti-features e priorizacao do slice 1x1.
- `.planning/research/ARCHITECTURE.md` - separacao alvo entre dominio, sessao, conteudo e adapters.
- `.planning/research/STACK.md` - direcao de stack C++/CMake/CTest e ferramentas de validacao.
- `.planning/research/PITFALLS.md` - riscos de escopo, acoplamento e falta de observabilidade que esta fase precisa prevenir.
- `.planning/research/SUMMARY.md` - sintese da pesquisa e implicacoes para o roadmap atual.

</canonical_refs>

<code_context>
## Existing Code Insights

### Reusable Assets
- Nenhum asset de codigo ainda - o repositorio atualmente contem apenas artefatos documentais e de planejamento.

### Established Patterns
- O projeto ja esta travado como `core-first`, `media-agnostic` e orientado a determinismo/observabilidade desde os artefatos em `.planning/`.
- O fluxo GSD e a fonte operacional principal; a fase precisa produzir contexto claro para `research` e `plan-phase`, nao implementacao.

### Integration Points
- A proxima milestone deve abrir uma base C++ nova que respeite as fronteiras descritas em `.planning/research/ARCHITECTURE.md`.
- Os primeiros pontos de integracao futuros serao dominio de combate, catalogos de conteudo, sessao de combate e adapters de teste/CLI.

</code_context>

<specifics>
## Specific Ideas

- O usuario definiu a fantasia inicial dos atributos assim:
  - `STR` -> forca, dano, forca muscular
  - `AGI` -> destreza, mobilidade, velocidade
  - `STA` -> resistencia fisica, vigor, stamina
  - `INT` -> dano magico, descobertas, aprendizado, criatividade, inventividade
  - `CHA` -> relacoes interpessoais, comunicacao, negociacao, `taunt`
  - `WIS` -> capacidade de mana, percepcao, insight, intuicao, descobertas
- O usuario explicitou que nem tudo acima precisa afetar o combate agora, mas tudo precisa existir no modelo, inclusive `CHA`.
- O usuario esclareceu que `fuga/desistencia` e mais uma funcao de debug para encerrar simulacao do que uma acao canonica do duelo.
- O usuario quer que a construcao de passivas seja parte importante do primeiro slice; o sistema nao deve nascer focado apenas em ativas.

</specifics>

<deferred>
## Deferred Ideas

- Definir formato completo de replay, schema e exemplos concretos - proxima milestone de implementacao.
- Decidir formulas exatas, tags detalhadas e valores numericos de atributos/habilidades - planejamento da implementacao.

</deferred>

---
*Phase: 01-base-documental-do-combate-1x1*
*Context gathered: 2026-04-12*
