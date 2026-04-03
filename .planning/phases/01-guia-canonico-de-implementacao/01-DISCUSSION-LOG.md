# Phase 1: Guia Canonico de Implementacao - Discussion Log

> **Audit trail only.** Do not use as input to planning, research, or execution agents.
> Decisions are captured in CONTEXT.md - this log preserves the alternatives considered.

**Date:** 2026-04-03
**Phase:** 1-guia-canonico-de-implementacao
**Areas discussed:** Recorte do core inicial, Nivel de concretude do guia, Fronteira entre conteudo e runtime, Primeira milestone de implementacao

---

## Recorte do core inicial

### Pergunta 1: Qual deve ser o nucleo obrigatorio do primeiro backend implementavel?

| Option | Description | Selected |
|--------|-------------|----------|
| Nucleo minimo | Atributos, recursos, efeitos/status, personagens, habilidades, resolucao deterministica e combate basico | ✓ |
| Nucleo intermediario | Tudo do nucleo minimo, mais equipamentos/itens e progressao inicial | |
| Nucleo amplo | Tudo do intermediario, mais quests, NPCs e fluxo basico fora de combate | |
| Outro | Resposta livre | |

**User's choice:** Nucleo minimo
**Notes:** Definiu o menor recorte implementavel do core inicial.

### Pergunta 2: Como tratar equipamentos e progressao no primeiro milestone de codigo?

| Option | Description | Selected |
|--------|-------------|----------|
| Adiar ambos | Primeiro codigo cobre atributos, recursos, efeitos, habilidades, personagens basicos e combate | ✓ |
| Equipamentos entram, progressao nao | Permite customizacao sem abrir level-up ainda | |
| Equipamentos e progressao inicial entram | O primeiro milestone ja suporta evolucao basica | |
| Outro | Resposta livre | |

**User's choice:** Adiar ambos
**Notes:** O usuario inicialmente marcou a opcao 3 e depois corrigiu explicitamente para a opcao 1.

### Pergunta 3: Como tratar a estrutura de combate no primeiro milestone?

| Option | Description | Selected |
|--------|-------------|----------|
| Protagonista unico vs inimigos | Comeca com 1 personagem controlado e inimigos | ✓ |
| Party reduzida sem IA complexa | Suporta mais de um aliado com comportamento simplificado | |
| Party completa desde o inicio | Protagonista + companheiros + base para IA tatica | |
| Outro | Resposta livre | |

**User's choice:** Protagonista unico vs inimigos
**Notes:** O usuario confirmou essa resposta junto com a correcao da pergunta anterior.

### Pergunta 4: Qual grupo deve ser a primeira expansao natural depois do core minimo?

| Option | Description | Selected |
|--------|-------------|----------|
| Customizacao de personagem | Equipamentos, progressao, requisitos e build basica | ✓ |
| Combate expandido | Party, companheiros, IA tatica e papeis de combate | |
| Mundo e conteudo | Quests, NPCs, eventos, mapa, exploracao e consequencias | |
| Outro | Resposta livre | |

**User's choice:** Customizacao de personagem
**Notes:** Isso define a direcao da milestone imediatamente posterior ao core minimo.

---

## Nivel de concretude do guia

### Pergunta 1: Quao concreto o guia da fase 1 deve ser?

| Option | Description | Selected |
|--------|-------------|----------|
| Arquitetura + exemplos de tipos | Modulos, responsabilidades e alguns tipos representativos | ✓ |
| Mapa completo de tipos | Lista praticamente todas as classes, structs, enums e servicos esperados | |
| Mais alto nivel | Fica em modulos, camadas e principios | |
| Outro | Resposta livre | |

**User's choice:** Arquitetura + exemplos de tipos
**Notes:** O guia deve ser acionavel, mas sem virar desenho completo de toda a base.

### Pergunta 2: Como tratar os metodos no guia?

| Option | Description | Selected |
|--------|-------------|----------|
| Familias de metodos por responsabilidade | Ex.: `applyDamage`, `resolveAction`, `tickEffects` | |
| Assinaturas preliminares ja sugeridas | Propoe parametros e retornos aproximados | |
| Sem metodos ainda | So modulos e tipos; metodos ficam para o planejamento | |
| Outro | Resposta livre | ✓ |

**User's choice:** Resposta intermediaria entre as opcoes 1 e 3
**Notes:** O usuario quer que o guia indique operacoes esperadas e responsabilidades, mas sem fechar assinaturas detalhadas nem resolver tudo pelo estudante.

### Pergunta 3: Qual deve ser o formato principal do guia?

| Option | Description | Selected |
|--------|-------------|----------|
| Markdown textual com tabelas | Simples, direto e facil de manter | ✓ |
| Markdown + diagramas leves | Inclui diagramas simples de modulos/fluxos | |
| Mais proximo de especificacao tecnica | Estrutura mais rigida, quase mini-ADR por secao | |
| Outro | Resposta livre | |

**User's choice:** Markdown textual com tabelas
**Notes:** O formato deve priorizar legibilidade e manutencao.

### Pergunta 4: Como tratar os pontos que o estudante ainda precisa decidir?

| Option | Description | Selected |
|--------|-------------|----------|
| Secao explicita de decisoes em aberto | Marca o que esta definido, recomendado e ainda em aberto | ✓ |
| Deixar implicito no texto | O leitor percebe pelas lacunas e observacoes | |
| Separar em arquivo proprio de pendencias | O guia principal fica limpo e as pendencias vao para outro documento | |
| Outro | Resposta livre | |

**User's choice:** Secao explicita de decisoes em aberto
**Notes:** Pendencias precisam ficar visiveis como parte do handoff da fase.

---

## Fronteira entre conteudo e runtime

### Pergunta 1: O que deve ser dirigido por dados logo de cara?

| Option | Description | Selected |
|--------|-------------|----------|
| So definicoes de jogo | Atributos configuraveis, habilidades, efeitos, inimigos e similares como conteudo; logica continua no codigo | ✓ |
| Definicoes + formulas parametrizaveis | Parte das formulas e regras tambem podem ser configuradas por dados | |
| Quase tudo orientado a dados | Codigo vira um executor generico de regras externas | |
| Outro | Resposta livre | |

**User's choice:** So definicoes de jogo
**Notes:** A logica central deve continuar implementada em codigo.

### Pergunta 2: Como tratar o catalogo inicial no primeiro recorte implementavel?

| Option | Description | Selected |
|--------|-------------|----------|
| Catalogo minimo embutido no codigo | Core com alguns dados definidos internamente, formato externo depois | |
| Catalogo externo desde o inicio | Primeiro milestone ja le arquivos externos de conteudo | |
| Hibrido | Alguns dados fixos no codigo, outros externos | |
| Outro | Resposta livre | ✓ |

**User's choice:** Sistema de cadastro progressivo com persistencia
**Notes:** O usuario rejeitou as opcoes prontas e pediu autoria progressiva de dados pelo estudante, com possibilidade de uma fase futura dedicada a discutir e criar muitos dados.

### Pergunta 3: Esse sistema de cadastro com persistencia deve ser tratado como o que?

| Option | Description | Selected |
|--------|-------------|----------|
| Servico de aplicacao/autoria separado do core | O core fica focado em regras e estado | ✓ |
| Parte do modulo de conteudo/catalog diretamente | Cadastro e catalogo ficam mais juntos | |
| Parte do proprio runtime inicial | Runtime ja nasce responsavel por cadastrar e persistir definicoes | |
| Outro | Resposta livre | |

**User's choice:** Servico de aplicacao/autoria separado do core
**Notes:** O usuario registrou a ressalva de que criar o personagem do jogador continua sendo parte essencial do core.

### Pergunta 4: Como separar cadastro de conteudo e criacao de personagem no guia?

| Option | Description | Selected |
|--------|-------------|----------|
| Cadastro de conteudo separado + criacao de personagem no core | Runtime ja suporta montar e validar o personagem a partir das definicoes | ✓ |
| Mesmo modulo inicial, mas com responsabilidades separadas | Mantem tudo mais proximo no comeco | |
| Cadastro primeiro, criacao de personagem depois | Personagem entra so com a base de conteudo mais madura | |
| Outro | Resposta livre | |

**User's choice:** Cadastro de conteudo separado + criacao de personagem no core
**Notes:** Essa decisao amarra o papel do core inicial e do servico de autoria.

---

## Primeira milestone de implementacao

### Pergunta 1: Qual deve ser o foco central do primeiro recorte de codigo?

| Option | Description | Selected |
|--------|-------------|----------|
| Fundacao do dominio + personagem jogavel minimo | Tipos base, regras deterministicas essenciais, criacao/validacao de personagem e combate minimo | ✓ |
| Fundacao de dominio pura | So tipos, regras, testes e infraestrutura de validacao | |
| Vertical slice de combate | Prioriza um loop jogavel minimo o quanto antes | |
| Outro | Resposta livre | |

**User's choice:** Fundacao do dominio + personagem jogavel minimo
**Notes:** Define o centro da proxima milestone depois desta fase documental.

### Pergunta 2: Qual ordem didatica voce quer dentro desse primeiro recorte?

| Option | Description | Selected |
|--------|-------------|----------|
| Tipos -> regras -> criacao de personagem -> combate minimo | Evolucao pedagogica por camadas | ✓ |
| Tipos -> criacao de personagem -> regras -> combate | Mostra algo mais concreto antes | |
| Combate primeiro -> abstracoes depois | Valida pratica cedo com mais risco de retrabalho | |
| Outro | Resposta livre | |

**User's choice:** Tipos -> regras -> criacao de personagem -> combate minimo
**Notes:** A progressao de aprendizado deve ser gradual.

### Pergunta 3: Qual deve ser a saida validavel desse primeiro recorte de codigo?

| Option | Description | Selected |
|--------|-------------|----------|
| Testes + simulacao minima em texto | Criacao de personagem, algumas acoes e validacao por testes e saida textual simples | |
| So testes automatizados | Sem interface/simulacao ainda | |
| Mini CLI ja um pouco mais estruturada | Interface de linha de comando mais formal para interagir | ✓ |
| Outro | Resposta livre | |

**User's choice:** Mini CLI ja um pouco mais estruturada
**Notes:** O usuario registrou a ressalva de que os testes continuam necessarios, mas com peso menor do que a CLI para a percepcao do estudante.

### Pergunta 4: Qual deve ser o papel dessa CLI estruturada?

| Option | Description | Selected |
|--------|-------------|----------|
| Ferramenta de estudo e inspecao | Cadastra conteudo, cria personagem, dispara acoes e inspeciona estado/resultados | ✓ |
| Prototipo jogavel simples | Tenta parecer uma experiencia de jogo | |
| Ferramenta tecnica interna | Focada mais em debug e manutencao do core | |
| Outro | Resposta livre | |

**User's choice:** Ferramenta de estudo e inspecao
**Notes:** A CLI nao deve parecer o jogo final.

## the agent's Discretion

- Nome exato de modulos, namespaces, tabelas e exemplos do guia
- Grau de detalhamento dos exemplos de tipos, desde que nao travem as decisoes do estudante
- Granularidade dos testes iniciais

## Deferred Ideas

- Fase futura dedicada a discutir e criar um volume maior de dados de catalogo
- Expansao para equipamentos, progressao e customizacao depois do core minimo
- Party, companheiros e IA tatica em fase posterior
- Quests, NPCs, mundo, exploracao, crafting, economia e persistencia de mundo em fases posteriores
