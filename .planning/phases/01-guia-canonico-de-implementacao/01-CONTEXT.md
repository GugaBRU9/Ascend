# Phase 1: Guia Canonico de Implementacao - Context

**Gathered:** 2026-04-03
**Status:** Ready for planning

<domain>
## Phase Boundary

Esta fase entrega um guia documental direto e didatico para transformar `Estruturação.md` em base de implementacao de um backend C++ agnostico de plataforma. O foco e fechar recorte de core, fronteiras entre dominio e autoria de conteudo, nivel de concretude da documentacao, estrategia de validacao e a forma recomendada da primeira milestone de codigo.

Esta fase nao implementa gameplay, nao cria adaptadores finais de produto e nao tenta resolver todos os sistemas do rascunho. Ela define como o estudante deve entrar na implementacao sem adivinhacao sobre arquitetura, prioridade ou escopo.

</domain>

<decisions>
## Implementation Decisions

### Core Scope
- **D-01:** O primeiro backend implementavel deve comecar com um nucleo minimo: atributos, recursos, efeitos/status, personagens, habilidades, resolucao deterministica e combate basico.
- **D-02:** Equipamentos e progressao ficam fora do primeiro milestone de codigo. A primeira expansao natural depois do core minimo deve ser customizacao de personagem.
- **D-03:** O combate inicial deve comecar com protagonista unico contra inimigos. Party, companheiros e IA tatica ficam para fases posteriores.

### Guide Concreteness
- **D-04:** O guia da fase 1 deve definir modulos, responsabilidades e exemplos representativos de tipos, sem tentar listar exaustivamente todas as classes do projeto.
- **D-05:** O guia deve descrever operacoes esperadas e responsabilidades por tipo ou modulo, mas sem travar assinaturas detalhadas de metodos.
- **D-06:** O formato principal do guia deve ser Markdown textual com tabelas, priorizando leitura simples e manutencao facil.
- **D-07:** O guia deve ter uma secao explicita de decisoes em aberto para mostrar o que esta definido, o que esta recomendado e o que o estudante ainda precisa fechar.

### Content vs Runtime
- **D-08:** O projeto deve tratar definicoes de jogo como orientadas a dados, mas manter a logica central de regras no codigo.
- **D-09:** A autoria do catalogo deve acontecer de forma progressiva, conforme o estudante precisar criar conteudo real.
- **D-10:** O sistema de cadastro deve ter um metodo ou fluxo de cadastro separado para cada tipo de entidade, para evitar mistura de responsabilidades e confusao conceitual.
- **D-11:** Cadastro e persistencia de conteudo devem ficar em um servico de aplicacao/autoria separado do core de runtime.
- **D-12:** Criacao do personagem do jogador continua sendo parte essencial do core. O runtime deve conseguir montar e validar o personagem a partir das definicoes cadastradas.

### First Implementation Milestone
- **D-13:** A primeira milestone de implementacao deve focar fundacao do dominio mais um caminho minimo de personagem jogavel.
- **D-14:** A ordem didatica recomendada e: tipos -> regras -> criacao de personagem -> combate minimo.
- **D-15:** A saida validavel principal desse primeiro recorte deve ser uma CLI estruturada, apoiada por testes mais leves.
- **D-16:** Essa CLI deve servir como ferramenta de estudo e inspecao: cadastrar conteudo, criar personagem, disparar acoes e inspecionar estado e resultados, sem tentar parecer o jogo final.

### the agent's Discretion
- Nome exato de modulos, namespaces e tipos representativos, desde que respeitem o recorte acima.
- Nivel de detalhe dos exemplos no guia, desde que nao elimine as decisoes que o estudante ainda precisa tomar.
- Granularidade dos testes iniciais, desde que eles continuem subordinados ao papel didatico principal da CLI.
- Forma exata de registrar as decisoes em aberto, desde que fiquem visiveis e acionaveis para a proxima milestone.

</decisions>

<canonical_refs>
## Canonical References

**Downstream agents MUST read these before planning or implementing.**

### Project framing and scope
- `.planning/PROJECT.md` - visao do projeto, restricoes, valor central e decisoes ja travadas
- `.planning/REQUIREMENTS.md` - requisitos de v1 que a fase 1 precisa cobrir documentalmente
- `.planning/ROADMAP.md` - fronteira oficial da fase 1, objetivo, criterios de sucesso e planos previstos
- `.planning/STATE.md` - estado atual do milestone, bloqueios e posicao da fase no fluxo do projeto

### Source ideation
- `Estruturação.md` - materia-prima com os sistemas de RPG que precisam ser normalizados em arquitetura e backlog

### Research guidance
- `.planning/research/SUMMARY.md` - sintese das recomendacoes de stack, arquitetura e riscos
- `.planning/research/ARCHITECTURE.md` - separacao sugerida entre domain, rules, content, session e adapters
- `.planning/research/FEATURES.md` - definicao do que e table stake, diferencial e anti-feature neste milestone
- `.planning/research/PITFALLS.md` - riscos de escopo, acoplamento, heranca profunda e infraestrutura prematura
- `.planning/research/STACK.md` - direcionamento tecnico inicial para C++, CMake, GoogleTest, clang-tidy e sanitizers

</canonical_refs>

<code_context>
## Existing Code Insights

### Reusable Assets
- Nenhum asset de codigo ativo foi encontrado. O repositorio atual, para este recorte, esta efetivamente greenfield do ponto de vista de implementacao.

### Established Patterns
- A unica padronizacao realmente estabelecida neste momento e documental: core-first, media-agnostic, separacao entre dominio, catalogo de conteudo, servicos de sessao e adapters.
- O planejamento ja assume que runtime e autoria de conteudo nao devem nascer misturados.

### Integration Points
- A primeira implementacao devera criar os modulos-base do zero, especialmente dominio, regras, criacao de personagem, CLI estruturada e testes iniciais.
- O servico de cadastro com persistencia deve ser desenhado para alimentar o core sem virar parte do runtime de combate ou resolucao.

</code_context>

<specifics>
## Specific Ideas

- O estudante ainda deve tomar algumas decisoes e escrever partes-chave; o guia nao deve resolver tudo por ele.
- O cadastro de conteudo deve ser progressivo e ter um metodo de cadastro para cada tipo de entidade, para evitar confusao.
- Criacao do personagem do jogador foi explicitamente tratada como parte essencial do core, mesmo com o cadastro/persistencia ficando em servico separado.
- A CLI estruturada foi escolhida porque ajuda mais a percepcao didatica do estudante do que depender apenas de testes automatizados.

</specifics>

<deferred>
## Deferred Ideas

- Equipamentos, progressao, requisitos de build e customizacao profunda ficam para a primeira expansao depois do core minimo.
- Party, companheiros e IA tatica ficam para fases posteriores ao combate inicial de protagonista unico.
- Quests, NPCs, mundo, exploracao, economia, crafting, save e persistencia de mundo nao entram na primeira milestone de implementacao do core.
- A fase especifica para discutir e expandir muitos dados de catalogo fica para uma etapa futura, depois que a base do core e do fluxo de cadastro estiver clara.

</deferred>

---

*Phase: 01-guia-canonico-de-implementacao*
*Context gathered: 2026-04-03*
