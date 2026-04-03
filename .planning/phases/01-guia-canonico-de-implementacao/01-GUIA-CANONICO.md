# 01 Guia Canonico de Implementacao

Rastreabilidade inicial: `FRAM-01`, `FRAM-02`, `D-01`, `D-06`, `D-16`.

Este guia abre o milestone documental do Ascend e organiza a leitura do projeto como backend C++ educacional e agnostico de plataforma.

## 1. O Que Este Milestone Faz

`FRAM-01`. Ascend, neste milestone documental, nao entrega um jogo jogavel nem um shell de produto. O que esta fase entrega e um guia canonico para transformar `Estruturacao.md` em base de implementacao de um backend C++ educacional e agnostico de plataforma, com linguagem suficiente para virar backlog tecnico sem depender de memoria do autor original.

O foco deste plano e eliminar ambiguidade antes do aprofundamento de dominio e arquitetura. Por isso, as secoes 1-5 definem qual parte do rascunho vira `core minimo`, qual parte vira `primeira expansao`, qual parte fica `deferred` e qual parte deve ser tratada como `platform concern`.

Este milestone nao implementa gameplay, UI, engine, adaptadores de produto, multiplayer ou save system. Ele tambem nao tenta balancear todos os sistemas do rascunho. O objetivo imediato e fechar um recorte estudavel, testavel e coerente para a primeira milestone de codigo.

## 2. Para Quem Este Guia Foi Escrito

`FRAM-01`. Este guia foi escrito para o estudante que vai implementar um backend C++ educacional e testavel e precisa entender, em uma leitura direta, o que pertence ao core, o que depende de conteudo, o que fica para depois e o que nao deve contaminar a primeira implementacao.

O leitor esperado nao e um time de produto escolhendo UX final. E alguem que precisa sair deste documento com criterio para abrir modulos, nomear responsabilidades, organizar contratos de regra e planejar uma CLI de estudo sem reabrir o milestone como se fosse um pitch de jogo.

Secundariamente, o guia tambem serve para planners, revisores e futuras fases da documentacao porque fixa o vocabulario oficial do milestone e evita que `Estruturacao.md` volte a ser tratado como backlog literal.

## 3. Cortes de Escopo do Milestone

`FRAM-01`. Os cortes abaixo sao obrigatorios e consomem as decisoes travadas no contexto da fase.

- `D-01`: o primeiro recorte implementavel parte de atributos, recursos, efeitos/status, personagens, habilidades, resolucao deterministica e combate basico.
- `D-02`: equipamentos e progressao ficam fora do primeiro milestone de codigo e entram apenas como `primeira expansao`.
- `D-03`: party, companheiros e IA tatica nao entram no primeiro recorte implementavel.
- `D-13`: a primeira milestone de implementacao deve focar fundacao do dominio mais um caminho minimo de personagem jogavel.
- `D-14`: a ordem didatica oficial e `tipos -> regras -> criacao de personagem -> combate minimo`.
- `D-15`: a saida validavel principal do primeiro recorte sera uma CLI estruturada.
- `D-16`: essa CLI existe para estudo, inspecao e validacao; ela nao deve tentar parecer o jogo final.

Como consequencia desses cortes, este milestone documental nao abre implementacao de UI, engine, networking, persistencia de produto, multiplayer, save system, mapa exploravel completo ou loop final de missao.

## 4. Matriz de Normalizacao de Estruturacao.md

| Bloco de Estruturacao | Bucket | Tratamento nesta fase | Justificativa |
| --- | --- | --- | --- |
| Player Character | core minimo | Traduzir para criacao de personagem, atributos base, recursos e validacao de estado inicial. | `D-01` e `D-12` tratam o protagonista customizavel como parte essencial do core. |
| Party System | deferred | Registrar como extensao posterior ao combate inicial. | `D-03` remove party completa do primeiro recorte implementavel. |
| Attribute System | core minimo | Virar contrato central de value objects, escalonamento e verificacoes de regra. | Atributos sustentam dano, resistencia, recursos e criacao de personagem no `core minimo`. |
| Skill System | core minimo | Virar definicoes de habilidade, regras de uso e limites do combate basico. | Habilidades fazem parte do `core minimo` e precisam existir antes da CLI validar acoes. |
| Skill Acquisition | primeira expansao | Registrar como fluxo posterior de desbloqueio por NPC, exploracao ou comportamento. | O core precisa consumir habilidades definidas antes de modelar os canais completos de aquisicao. |
| Combat System | core minimo | Traduzir para resolucao por turnos com protagonista unico e inimigos. | `D-01` e `D-03` fecham combate basico sem party controlavel. |
| Companion AI System | deferred | Manter apenas como referencia futura de automacao de aliados. | Depende de party e IA tatica, ambos adiados por `D-03`. |
| Resource System | core minimo | Modelar custos, regeneracao e limites observaveis de recurso em combate. | Recursos controlam o uso de habilidades e mantem a resolucao do combate minima, mas completa. |
| Status Effect System | core minimo | Virar inventario de efeitos, duracao, reaplicacao e limpeza deterministica. | Status afetam estado de combate e precisam ser testaveis no primeiro recorte. |
| Damage System | core minimo | Definir tipos de dano, resistencias, vulnerabilidades e calculo deterministico. | O rascunho ja trava que dano nao tem variancia aleatoria e deve ser observavel. |
| Enemy System | core minimo | Representar inimigos por arquetipo, tier e pacote de comportamento minimo. | O combate basico precisa de oponentes modelados mesmo sem mundo completo. |
| Item System | primeira expansao | Registrar como modulo posterior para equipamentos, consumiveis e requisitos. | `D-02` remove equipamentos do primeiro milestone de codigo. |
| Progression System | primeira expansao | Tratar como extensao depois que o caminho minimo de personagem estiver estavel. | `D-02` adia progressao profunda para nao contaminar o fundamento do core. |
| Quest System | deferred | Manter como dominio futuro de orquestracao e estado de mundo. | Quests dependem de NPCs, mundo, recompensas e persistencia que nao entram agora. |
| NPC System | deferred | Registrar interfaces futuras de interacao, treino, comercio e lore. | NPCs puxam narrativa, quests e economia, todos fora do primeiro recorte. |
| Crafting System | deferred | Marcar como expansao tardia do catalogo e de economia. | Crafting amplia conteudo e combinatoria sem reduzir o risco atual do core. |
| Economy System | deferred | Deixar fora do backlog imediato e citar apenas como dependencia futura de NPC/item. | Economia e suporte de produto, nao fundacao do dominio minimo. |
| Map Structure | deferred | Registrar como sistema de exploracao e progressao espacial para milestones futuras. | O primeiro recorte valida personagem e combate sem mundo navegavel. |
| World Structure | deferred | Tratar apenas como contexto de expansao futura do projeto. | Regioes, hubs e segredos exigem recortes de conteudo e estado de mundo ainda nao priorizados. |
| Travel System | deferred | Deixar fora do core inicial e da CLI minima. | Viagem depende do mapa, energia de exploracao e fluxo de missao completos. |
| Exploration Energy | deferred | Manter como mecanica futura acoplada a exploracao. | O recorte atual nao inclui loop de mapa nem gestao de jornada. |
| Rest Nodes | deferred | Registrar como parte de exploracao e recuperacao fora do combate minimo. | Nos de descanso dependem de mapa, viagem e estado persistente de sessao. |
| Rewards | primeira expansao | Reservar para a etapa seguinte de fechamento de progressao e economia minima. | O core inicial pode validar combate e estado sem fechar ainda o sistema amplo de recompensas. |
| Save System | platform concern | Declarar explicitamente fora do milestone documental e da primeira implementacao. | Persistencia de produto nao deve acoplar o core antes dos contratos basicos. |
| Gameplay Loop | platform concern | Tratar como combinacao de sistemas para um shell futuro, nao como requisito do core atual. | O loop completo pressupoe missao, exploracao, descanso, recompensa e apresentacao ao usuario. |

## 5. Como Ler Este Guia

`FRAM-02`. Leia este arquivo como contrato de recorte, nao como brainstorm aberto. As secoes 1-5 cobrem framing e normalizacao do recorte. As secoes 6-9 cobrem dominio. As secoes 10-12 cobrem arquitetura, validacao e handoff. Se uma decisao operacional contradizer essas secoes iniciais, o backlog tecnico deve seguir o guia, nao o rascunho bruto.

Use a matriz da secao 4 para derivar backlog por prioridade. Tudo que estiver em `core minimo` pode virar trabalho da primeira milestone de codigo. Tudo que estiver em `primeira expansao` entra apenas depois que o caminho minimo de personagem e combate estiver validado. Tudo que estiver em `deferred` ou `platform concern` deve ficar fora do backlog imediato.

As decisoes `D-01`, `D-02`, `D-03`, `D-04`, `D-05`, `D-06`, `D-07`, `D-08`, `D-09`, `D-10`, `D-11`, `D-12`, `D-13`, `D-14`, `D-15` e `D-16` sao entradas consumidas por este guia. Isso significa que o leitor deve detalhar implementacao sem reabrir essas escolhas de framing, granularidade, separacao entre conteudo e runtime ou papel didatico da CLI.

O artefato principal permanece em Markdown textual com tabelas, per `D-06`, sem converter a matriz para diagramas ou anexos externos. Esse formato existe para manter leitura linear, rastreabilidade de requisitos e manutencao simples ao longo dos proximos planos.

## 6. Mapa de Modulos e Namespaces

`DOMN-01`. Esta secao consome `D-01`, `D-02`, `D-03` e `D-12` para transformar o `core minimo` em namespaces rastreaveis, sem dar a `items`, `progression`, `quests`, `npcs` e `world systems` a mesma profundidade do primeiro milestone de codigo.

| Modulo/namespace | Responsabilidade | Entra no milestone 02? | Pode depender de | Nao pode depender de |
| --- | --- | --- | --- | --- |
| `ascend::domain::attributes` | IDs, `AttributeSet`, distribuicao inicial, escalonamento observavel e invariantes dos atributos fisicos/mentais. | Sim, como base do core. | tipos base e IDs compartilhados | `ascend::rules::*`, `ascend::content::*`, `ascend::session::*`, `ascend::adapters::*` |
| `ascend::domain::resources` | `ResourcePool`, custos, limites, regeneracao e consumo de energia/mana/stamina. | Sim, como base do core. | `ascend::domain::attributes` | `ascend::rules::*`, `ascend::content::*`, `ascend::session::*`, `ascend::adapters::*` |
| `ascend::domain::effects` | Estado aplicavel de buffs, debuffs e crowd control, incluindo duracao, stacks e regras de limpeza observaveis. | Sim, como base do core. | `ascend::domain::attributes`, `ascend::domain::resources` | `ascend::content::*`, `ascend::session::*`, `ascend::adapters::*` |
| `ascend::domain::characters` | Identidade e estado do protagonista, pontos distribuidos, slots essenciais e snapshot jogavel do personagem. | Sim, porque `D-12` mantem criacao de personagem no core. | `ascend::domain::attributes`, `ascend::domain::resources`, `ascend::domain::effects` | `ascend::adapters::*`, `ascend::content::definitions`, `ascend::domain::quests`, `ascend::domain::world_systems` |
| `ascend::domain::skills` | Vinculo entre habilidades aprendidas/equipadas, custos, restricoes de uso e referencias para efeitos e dano. | Sim, como parte do `core minimo` de `D-01`. | `ascend::domain::attributes`, `ascend::domain::resources`, `ascend::domain::effects` | `ascend::adapters::*`, `ascend::domain::quests`, `ascend::domain::npcs`, `ascend::domain::world_systems` |
| `ascend::domain::combat` | DTOs de turno, comandos de acao, snapshots de combate e invariantes do fluxo protagonista vs inimigo. | Sim, com profundidade alta. | `ascend::domain::characters`, `ascend::domain::skills`, `ascend::domain::effects`, `ascend::domain::resources`, `ascend::domain::enemy` | `ascend::adapters::*`, `ascend::content::definitions`, `ascend::domain::party`, `ascend::domain::quests` |
| `ascend::domain::enemy` | Estado de runtime dos inimigos, tier, papel de combate e referencias ao arquetipo de origem. | Sim, limitado ao combate inicial de `D-03`. | `ascend::domain::attributes`, `ascend::domain::resources`, `ascend::domain::effects`, `ascend::domain::skills` | `ascend::adapters::*`, `ascend::domain::npcs`, `ascend::domain::world_systems`, `ascend::domain::quests` |
| `ascend::rules::damage` | Resolver deterministico de dano, mitigacao, vulnerabilidade, penetracao e custos associados ao golpe. | Sim, porque dano e observavel e sem variancia aleatoria. | `ascend::domain::attributes`, `ascend::domain::resources`, `ascend::domain::effects`, `ascend::domain::characters`, `ascend::domain::enemy` | `ascend::adapters::*`, `ascend::session::*`, `ascend::content::*` |
| `ascend::rules::effects` | Aplicacao, renovacao, tick, expiracao e cleanse de efeitos com saida observavel. | Sim, porque status entra no `core minimo`. | `ascend::domain::effects`, `ascend::domain::characters`, `ascend::domain::enemy`, `ascend::domain::resources` | `ascend::adapters::*`, `ascend::session::*`, `ascend::content::*` |
| `ascend::rules::combat_resolution` | Orquestracao deterministica de turno: validar acao, aplicar custo, resolver dano/efeitos e emitir eventos. | Sim, como fechamento do combate basico. | `ascend::domain::combat`, `ascend::rules::damage`, `ascend::rules::effects`, `ascend::domain::characters`, `ascend::domain::skills`, `ascend::domain::enemy` | `ascend::adapters::*`, `ascend::content::*`, `ascend::session::character_creation` |
| `ascend::content::definitions` | `Definition` data-driven de skills, status, inimigos e templates de personagem, mais contratos de carregamento/catalogo. | Sim, mas sem exigir catalogo exaustivo upfront. | IDs e value objects do `ascend::domain::*` estritamente necessarios para referenciar conteudo | `ascend::domain::combat`, `ascend::rules::*`, `ascend::session::*`, `ascend::adapters::*` |
| `ascend::session::character_creation` | Casos de uso para montar e validar o protagonista a partir das definicoes cadastradas, aplicando `D-12`. | Sim, porque criacao de personagem e caminho minimo do milestone 02. | `ascend::content::definitions`, `ascend::domain::attributes`, `ascend::domain::resources`, `ascend::domain::characters`, `ascend::domain::skills`, `ascend::domain::effects` | `ascend::adapters::*`, `ascend::domain::quests`, `ascend::domain::world_systems` |
| `ascend::adapters::cli` | Shell de estudo para cadastrar conteudo minimo, criar personagem, disparar acoes e inspecionar saida. | Sim, como saida validavel do primeiro recorte. | `ascend::session::character_creation`, `ascend::content::definitions`, `ascend::validation` | qualquer UI final, engine, rede, banco de produto |
| `ascend::validation` | Contratos de replay, eventos, snapshots e logs estruturados para provar reproducibilidade do core. | Sim, desde o inicio. | `ascend::domain::*`, `ascend::rules::*`, `ascend::session::*` | `ascend::adapters::*` concretos, concerns de produto |
| `ascend::domain::items` | Extensao nomeada para consumiveis, equipamento e requisitos de atributo. | Nao; `D-02` coloca na primeira expansao. | `ascend::domain::attributes`, `ascend::domain::effects`, `ascend::content::definitions` | `ascend::domain::combat` como dependencia estrutural obrigatoria, `ascend::adapters::*` |
| `ascend::domain::progression` | Extensao nomeada para XP, nivel, pontos e proficiencia de habilidade. | Nao; primeira expansao depois do core. | `ascend::domain::attributes`, `ascend::domain::characters`, `ascend::domain::skills` | `ascend::adapters::*`, `ascend::domain::quests`, `ascend::domain::world_systems` |
| `ascend::domain::quests` | Extensao nomeada, de detalhe baixo, para trigger, task, recompensa e consequencias. | Nao; permanece fora do backlog imediato. | `ascend::domain::characters`, `ascend::domain::enemy`, `ascend::domain::items`, `ascend::domain::npcs`, `ascend::domain::world_systems` | `ascend::rules::combat_resolution` como dependencia de orquestracao obrigatoria, `ascend::adapters::*` |
| `ascend::domain::npcs` | Extensao nomeada, de detalhe baixo, para quest giver, trainer, merchant e lore. | Nao; fronteira futura apenas. | `ascend::domain::items`, `ascend::domain::skills`, `ascend::domain::quests`, `ascend::domain::world_systems` | `ascend::rules::combat_resolution`, `ascend::session::character_creation`, `ascend::adapters::*` |
| `ascend::domain::world_systems` | Extensao nomeada para mapa em nos, travel, exploration energy, rest nodes, rewards e estado espacial. | Nao; baixa profundidade nesta fase. | `ascend::domain::quests`, `ascend::domain::npcs`, `ascend::domain::enemy`, `ascend::domain::items` | `ascend::rules::*` do combate como dependencia central, `ascend::adapters::*`, save/persistencia de produto |

Leitura operacional: o milestone 02 aprofunda tudo que esta marcado como `Sim`, mas trata os namespaces de extensao apenas como fronteiras nomeadas. Isso preserva `D-01` e `D-03` no centro do design e evita que `items`, `progression`, `quests`, `npcs` ou `world systems` virem backlog concorrente do caminho minimo de personagem + combate.

## 7. Tipos Representativos e Familias de Servico

`DOMN-02`. Per `D-04` e `D-05`, os nomes abaixo sao exemplos representativos para guiar design, teste e backlog. Eles descrevem familias de tipos e operacoes esperadas, nao um contrato definitivo de headers ou assinaturas.

| Sistema | Tipos representativos | Familias de servico | Nivel de detalhe nesta fase | Observacoes |
| --- | --- | --- | --- | --- |
| atributos | `AttributeId`, `AttributeSet`, `AttributeModifier`, `AttributeAllocation` | `AttributeAllocationService`, `AttributeScalingService`, `AttributeInvariantChecker` | alto | Base do `core minimo`; precisa sustentar criacao do protagonista e escalonamento do dano sem ainda modelar progressao completa. |
| recursos | `ResourceId`, `ResourcePool`, `ResourceCost`, `ResourceRegenProfile` | `ResourceCostService`, `ResourceRegenService`, `ResourceCapValidator` | alto | Energia, mana ou stamina entram como pools observaveis para custo, recuperacao e limite. |
| efeitos/status | `StatusEffectDefinition`, `StatusEffectState`, `AppliedStatusEffect`, `EffectDuration` | `EffectApplicationService`, `EffectTickService`, `EffectExpirationService`, `CleanseService` | alto | Reaplicacao renova duracao por padrao; stacking permanece excepcional e explicito. |
| personagens | `CharacterId`, `CharacterTemplate`, `CharacterState`, `CharacterLoadout` | `CharacterAssemblyService`, `CharacterValidationService`, `StartingStateFactory` | alto | O foco e o protagonista de `D-12`; party e companheiros continuam fora do primeiro aprofundamento. |
| habilidades | `SkillDefinition`, `LearnedSkill`, `EquippedSkillSlot`, `SkillCostProfile` | `SkillEligibilityService`, `SkillLoadoutService`, `SkillCostPreviewService` | alto | Aquisicao profunda por mundo/NPC/comportamento continua futura, mas uso e validacao em runtime entram agora. |
| combate | `CombatSnapshot`, `ActionCommand`, `TurnOrder`, `DamagePacket`, `CombatEvent` | `ActionValidationService`, `TurnOrderService`, `CombatResolutionService` | alto | O fluxo precisa cobrir protagonista unico vs inimigos, sem party controlavel e sem UX de jogo final. |
| inimigos | `EnemyArchetype`, `EnemyState`, `EnemyTier`, `EnemyIntent` | `EnemyAssemblyService`, `EnemyStateFactory`, `EnemyCombatProfileService` | alto | `EnemyArchetype` nomeia o conteudo; `EnemyState` existe para o encontro atual. IA tatica fica fora. |
| itens | `InventoryItemDefinition`, `InventoryItemState`, `EquipmentRequirement`, `ConsumableEffectRef` | `InventoryValidationService`, `EquipmentEligibilityService`, `ConsumableUseService` | baixo | Extensao nomeada apenas. Itens nao competem com combate/personagem neste milestone de codigo. |
| quests | `QuestDefinition`, `QuestState`, `QuestTaskDefinition`, `QuestRewardDefinition` | `QuestTriggerService`, `QuestProgressService`, `QuestRewardService` | baixo | Necessario apenas para o leitor reconhecer a fronteira futura do sistema; sem backlog imediato. |
| NPCs | `NpcDefinition`, `NpcState`, `InteractionOption`, `TrainerOffer` | `NpcInteractionService`, `NpcOfferResolutionService`, `NpcRelationshipService` | baixo | Trainer, merchant e quest giver aparecem como papeis futuros, nao como parte do caminho minimo. |
| progression | `ProgressionTrackDefinition`, `LevelState`, `XpLedger`, `SkillProficiencyState` | `XpAwardService`, `LevelUpService`, `ProgressionGateService` | medio-baixo | Primeira expansao apos o core. Deve existir como extensao nomeada, mas sem o mesmo nivel de concretude de atributos, combate ou criacao de personagem. |

Leitura operacional: o leitor deve usar os tipos de detalhe `alto` para abrir backlog do milestone 02 e os tipos `baixo` ou `medio-baixo` apenas para manter a arquitetura preparada para extensao. Isso satisfaz `DOMN-02` sem transformar `itens`, `quests`, `NPCs` ou `progression` em pseudo-escopo do `core minimo`.

## 8. Runtime vs Content Definitions

Os planos seguintes detalham esta secao com as fronteiras entre definicoes, estado e autoria.

## 9. Inventario de Regras Deterministicas

Os planos seguintes detalham esta secao com as regras que precisam permanecer observaveis e testaveis.

## 10. Fronteiras de Arquitetura e Dependencias Permitidas

Os planos seguintes detalham esta secao com camadas, limites e dependencias permitidas.

## 11. Baseline Tecnico e Workflow de Build/Teste

Os planos seguintes detalham esta secao com stack, validacao e fluxo tecnico recomendado.

## 12. Estrategia de Validacao, Ordem Didatica e Decisoes em Aberto

Os planos seguintes detalham esta secao com validacao, ordem didatica e handoff para a proxima milestone.
