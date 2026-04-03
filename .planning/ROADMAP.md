# Roadmap: Ascend

## Overview

Ascend vai de documentacao canonica para um prototipo executavel de validacao de mecanicas. O roadmap prioriza um core deterministico, conteudo canonico carregavel, combate e cenas nao-combate no mesmo backbone, e uma sessao inicial jogavel com telemetria suficiente para decidir se o ciclo 1 passou naquilo que realmente importa: qualidade e clareza do loop base.

## Phases

**Phase Numbering:**
- Integer phases (1, 2, 3): Planned milestone work
- Decimal phases (2.1, 2.2): Urgent insertions (marked with INSERTED)

- [x] **Phase 1: Base Canonica Reproduzivel** - carregar, validar e reexecutar o nucleo canonico com seed, logs e harness minimo
- [ ] **Phase 2: Personagens Jogaveis de Nivel 1** - criar e executar fichas canonicas validas sem remendos manuais
- [ ] **Phase 3: Loop Tatico de Combate** - entregar combate por zonas completo com encontros canonicamente jogaveis
- [ ] **Phase 4: Loop Unificado de Cenas Nao-Combate** - provar `Progress x Pressure` como motor real de social, investigacao e exploracao
- [ ] **Phase 5: Sessao Inicial Validavel de Ponta a Ponta** - rodar a miniaventura inicial com consequencias leves, telemetria e relatorio de validacao

## Phase Details

### Phase 1: Base Canonica Reproduzivel
**Goal**: Tornar o conteudo canonico carregavel, validavel e reexecutavel em um nucleo deterministico ja exposto por um CLI ou harness minimo.
**Depends on**: Nothing (first phase)
**Requirements**: ENGN-01, ENGN-02, ENGN-04, CONT-01, PLYT-02
**Canonical refs**: README.md, docs/00-visao-do-sistema.md, docs/01-nucleo-de-regras.md, docs/04-conteudo-inicial.md
**UI hint**: no
**Success Criteria** (what must be TRUE):
  1. Conteudo invalido gera erros acionaveis e localizaveis ao carregar origens, trilhas, equipamentos, inimigos e aventura inicial.
  2. Um teste seedado resolve `1d20 + modificadores`, vantagem/desvantagem e graus de sucesso conforme as regras canonicas.
  3. A mesma sequencia de comandos e eventos com a mesma seed reproduz exatamente o mesmo resultado mecanico.
  4. O time consegue inspecionar logs de comandos, seeds e eventos pelo adapter minimo, sem depender de UI final.
**Plans**: 3 plans

Plans:
- [x] 01-01: Modelar dominio canonico, IDs estaveis e catalogos de conteudo
- [x] 01-02: Implementar validacao de conteudo, RNG seedavel e resolucao base de testes
- [x] 01-03: Expor event log, replay e harness minimo para inspecao

### Phase 2: Personagens Jogaveis de Nivel 1
**Goal**: Permitir que jogadores e testadores instanciem personagens canonicos validos sem remendo manual de regra.
**Depends on**: Phase 1
**Requirements**: CHAR-01, CHAR-02, CHAR-03, CHAR-04
**Canonical refs**: docs/01-nucleo-de-regras.md, docs/02-personagens-e-progressao.md, docs/04-conteudo-inicial.md, docs/05-playtest.md
**UI hint**: no
**Success Criteria** (what must be TRUE):
  1. Um jogador consegue criar um personagem de nivel 1 com origem, atributos, pericias, trilha primaria, trilha secundaria, habilidades iniciais e equipamento inicial.
  2. Os pregens documentados de nivel 1 carregam e executam sem ajustes manuais de regra.
  3. Vida, PE, Defesa, Fortitude, Reflexos e Vontade sao derivados automaticamente pelas formulas canonicas.
  4. Builds invalidas sao bloqueadas com feedback explicito sobre tiers, habilidades ativas e restricoes de carga inicial.
**Plans**: 3 plans

Plans:
- [ ] 02-01: Implementar modelos de ficha e derivacoes canonicas
- [ ] 02-02: Construir criacao e validacao de personagens de nivel 1
- [ ] 02-03: Carregar pregens e regras de restricao de build

### Phase 3: Loop Tatico de Combate
**Goal**: Permitir combate por zonas completo, com encontros canonicos executaveis pelo GM e pelos jogadores no CLI ou harness.
**Depends on**: Phase 2
**Requirements**: ENGN-03, COMB-01, COMB-02, COMB-03, COMB-04, CONT-02
**Canonical refs**: docs/01-nucleo-de-regras.md, docs/03-guia-do-mestre-e-campanha.md, docs/04-conteudo-inicial.md, docs/05-playtest.md
**UI hint**: no
**Success Criteria** (what must be TRUE):
  1. O GM consegue iniciar um combate e ver iniciativa e ordem completa de rodadas para todos os atores.
  2. Durante o turno, o jogador consegue usar acao, movimento, reacao e ataque de pressao conforme as regras de combate por zonas.
  3. Ataques, cobertura, deslocamento, habilidades, condicoes e recuperacao de caido resolvem sem patch manual do GM.
  4. Dano fixo, PE, defesas, resistencias, vulnerabilidades e efeitos de condicao seguem as formulas canonicas.
  5. O GM consegue montar e rodar encontros comum, elite e boss a partir de `Valor de Ameaca` e tamanho do grupo.
**Plans**: 3 plans

Plans:
- [ ] 03-01: Implementar loop de combate por zonas e economia de turno
- [ ] 03-02: Integrar habilidades, condicoes, inimigos e formulas de combate
- [ ] 03-03: Suportar preparacao e execucao de encontros por `Valor de Ameaca`

### Phase 4: Loop Unificado de Cenas Nao-Combate
**Goal**: Provar que social, investigacao e exploracao usam o mesmo backbone mecanico do resto do sistema.
**Depends on**: Phase 3
**Requirements**: SCEN-01, SCEN-02, SCEN-03
**Canonical refs**: docs/01-nucleo-de-regras.md, docs/03-guia-do-mestre-e-campanha.md, docs/05-playtest.md
**UI hint**: no
**Success Criteria** (what must be TRUE):
  1. O GM consegue configurar uma cena nao-combate com objetivo, risco, ND, meta de progresso e limite de pressao.
  2. O jogador consegue resolver acoes sociais, investigativas e exploratorias pelo mesmo motor de testes usado no restante do sistema.
  3. Cada acao atualiza `Progress x Pressure` e aplica consequencias visiveis de sucesso ou falha no estado da cena.
**Plans**: 2 plans

Plans:
- [ ] 04-01: Implementar motor generico de `Progress x Pressure`
- [ ] 04-02: Integrar templates sociais, investigativos e exploratorios com consequencias

### Phase 5: Sessao Inicial Validavel de Ponta a Ponta
**Goal**: Executar a miniaventura inicial inteira no adapter minimo e produzir evidencia suficiente para decisao de validacao do ciclo.
**Depends on**: Phase 4
**Requirements**: CONT-03, PLYT-01, PLYT-03, PLYT-04
**Canonical refs**: docs/03-guia-do-mestre-e-campanha.md, docs/04-conteudo-inicial.md, docs/05-playtest.md, docs/06-lore-base.md
**UI hint**: no
**Success Criteria** (what must be TRUE):
  1. O time consegue rodar a aventura inicial do começo ao fim via CLI minimo e harness automatizado, sem depender de UI final.
  2. Consequencias leves entre cenas persistem, de modo que escolhas anteriores alterem cenas posteriores da aventura inicial.
  3. A sessao registra sinais centrais de playtest, incluindo duracao de turnos, uso de PE, frequencia de habilidades, padroes dominantes e pontos de confusao.
  4. Ao final, o sistema gera um relatorio pos-sessao que indica se os criterios de validacao do ciclo 1 passaram ou falharam, com base em evidencia.
**Plans**: 3 plans

Plans:
- [ ] 05-01: Integrar miniaventura inicial e persistencia leve entre cenas
- [ ] 05-02: Instrumentar metricas, logs de sessao e sinais de balanceamento
- [ ] 05-03: Gerar relatorio final e fechar execucao ponta a ponta

## Progress

**Execution Order:**
Phases execute in numeric order: 1 → 2 → 3 → 4 → 5

| Phase | Plans Complete | Status | Completed |
|-------|----------------|--------|-----------|
| 1. Base Canonica Reproduzivel | 3/3 | Completed | 2026-04-03 |
| 2. Personagens Jogaveis de Nivel 1 | 0/3 | Not started | - |
| 3. Loop Tatico de Combate | 0/3 | Not started | - |
| 4. Loop Unificado de Cenas Nao-Combate | 0/2 | Not started | - |
| 5. Sessao Inicial Validavel de Ponta a Ponta | 0/3 | Not started | - |
