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

Os planos seguintes detalham esta secao com o recorte de dominio do core.

## 7. Tipos Representativos e Familias de Servico

Os planos seguintes detalham esta secao com tipos representativos e familias de servico.

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
