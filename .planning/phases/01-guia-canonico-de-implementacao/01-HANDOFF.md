# 01 Handoff para a Milestone 02

Rastreabilidade inicial: `HNDF-01`, `D-07`, `D-13`, `D-16`.

Este handoff fecha a fase 01 sem reabrir o que ja foi consumido no guia canonico. O objetivo daqui em diante e entrar na milestone 02 com um recorte `definido`, defaults `recomendado` para o que ainda falta decidir e poucos temas `a fechar` no momento certo.

## 1. O Que Ja Esta Fechado

As decisoes `D-01` a `D-16` estao consumidas pela fase 01 e nao sao reabriveis neste handoff. O papel desta secao e registrar o que ja esta `definido` para que a proxima milestone nao volte a discutir framing, escopo base ou o papel da CLI.

| Bloco | Decisoes consumidas | Status | Implicacao operacional |
| --- | --- | --- | --- |
| Core minimo | `D-01`, `D-02`, `D-03` | `definido` | O primeiro caminho de codigo cobre atributos, recursos, efeitos/status, personagens, habilidades, resolucao deterministica e combate basico com protagonista unico contra inimigos. |
| Concretude do guia | `D-04`, `D-05`, `D-06`, `D-07` | `definido` | O material da fase 01 fecha modulos, responsabilidades e decisoes em aberto sem congelar APIs detalhadas nem trocar Markdown por artefato mais pesado. |
| Conteudo vs runtime | `D-08`, `D-09`, `D-10`, `D-11`, `D-12` | `definido` | `Definition`, `State`, `AuthoringService` e `CharacterCreation` ja tem fronteiras claras; autoria nao entra no runtime e criacao de personagem continua no core/session. |
| Primeira milestone de codigo | `D-13`, `D-14`, `D-15`, `D-16` | `definido` | A milestone 02 vai seguir `tipos -> regras -> criacao de personagem -> combate minimo`, com `CLI` estruturada de estudo e inspecao, nao com shell de jogo final. |

Leitura operacional:

- `D-01` ate `D-16` viraram premissas de execucao, nao backlog de discussao.
- `HNDF-01` exige apenas listar aberturas legitimas remanescentes, nao reabrir cortes ja travados.
- O que estiver fora dessas premissas so pode entrar como extensao futura, nunca como ajuste casual de escopo na milestone 02.

## 2. Decisoes em Aberto que Continuam Legitimas

`HNDF-01`. As decisoes abaixo continuam legitimas porque afetam implementacao, observabilidade e setup inicial da milestone 02 sem contradizer o recorte travado pela fase 01. Elas existem para mostrar o que esta `recomendado` versus o que ainda fica `a fechar`.

| Tema | Status | Default recomendado | Impacto se adiar | Quando fechar |
| --- | --- | --- | --- | --- |
| formato inicial do catalogo externo | `a fechar` | Comecar com arquivos `JSON` simples, pequenos e versionados no repo para manter leitura direta e evitar parser/DSL prematuros. | Atrasa a montagem do catalogo minimo da criacao de personagem e pode contaminar `02-03` com discussao de formato em vez de fluxo de dominio. | Fechar no inicio de `02-03`, antes do primeiro pacote de conteudo real. |
| loader de conteudo | `a fechar` | Implementar um loader minimo de desenvolvimento, separado do runtime, com falha explicita e validacao basica de schema por tipo de entidade. | Sem isso, `AuthoringService` e `CharacterCreation` ficam acoplados a mock manual demais ou a parser definitivo cedo demais. | Fechar entre o fim de `02-02` e o inicio de `02-03`. |
| granularidade inicial do replay e logs | `a fechar` | Comecar com eventos e snapshots suficientes para custo, dano, aplicacao/expiracao de efeito, validacao de criacao de personagem e encerramento de turno. | Se adiar demais, a CLI perde valor didatico e os scenario tests ficam pouco observaveis. | Fechar durante `02-02`, antes de abrir o primeiro cenario de combate. |
| pacote inicial de conteudo de habilidades e inimigos | `a fechar` | Subir so o minimo para validar a trilha `D-13` a `D-16`: um template de protagonista, poucas skills, poucos efeitos e um conjunto pequeno de inimigos. | Escopo cresce rapido e o milestone passa a discutir volume de conteudo em vez de estabilidade do core. | Fechar no planejamento de `02-03` e revisar ao abrir `02-04`. |
| seed de reproducibilidade para aleatoriedade futura | `a fechar` | Manter o milestone 02 sem aleatoriedade; se algum experimento futuro exigir sorte controlada, a `seed` entra como input explicito do resolver e do replay. | Se isso ficar implicito, quebra a promessa de reproducibilidade e dificulta depurar diferencas entre runs. | Nao bloquear a milestone 02; fechar so quando houver regra realmente aleatoria. |

Observacoes de uso:

- O que ja esta `definido` pelo guia nao entra nesta tabela.
- O que esta `recomendado` aqui serve como default para reduzir ambiguidade no planejamento da milestone 02.
- O que segue `a fechar` tem janela de decisao explicita para nao virar debate permanente durante a implementacao.

## 3. Riscos e Anti-Patterns que Nao Podem Voltar

Esta secao protege o proximo milestone dos mesmos desvios que a fase 01 acabou de remover. Os itens abaixo sao proibicoes praticas, alinhadas com `HNDF-01`, `D-07`, `D-13` e `D-16`.

| Anti-pattern | Por que quebra o recorte | Guardrail |
| --- | --- | --- |
| misturar autoria com runtime | Viola `D-08`, `D-10` e `D-11`; transforma cadastro de conteudo em regra de combate e obscurece invariantes. | `AuthoringService` continua separado, com fluxo por tipo de entidade e falha explicita ao carregar definicoes. |
| puxar party cedo | Contradiz `D-03` e desloca o foco do milestone 02 para orquestracao prematura. | O primeiro combate continua protagonista unico contra inimigos; party so volta depois do combate minimo estar validado. |
| aprofundar items/progression antes do core | Contradiz `D-02` e `D-13`; troca fundacao do dominio por primeira expansao. | `items` e `progression` permanecem extensoes nomeadas, sem profundidade equivalente a atributos, regras, criacao de personagem e combate minimo. |
| travar parser definitivo cedo | Reintroduz acoplamento e infra prematura; o projeto ainda nao precisa decidir solucao final de authoring. | Adotar loader minimo e formato simples primeiro; parser mais sofisticado so depois que o fluxo de dominio estiver verde. |
| acoplar core a produto | Quebra a fronteira central da fase 01 e contamina o backend com preocupacoes de UI, engine, rede ou persistencia final. | `domain`, `rules`, `content`, `session` e `validation` permanecem independentes de shell final e adapters concretos. |
| tentar fazer a CLI parecer jogo final | Contradiz `D-15` e `D-16`; desloca a CLI de estudo para um pseudo-produto e reduz clareza didatica. | A `CLI` continua estruturada para inspecao, cadastro minimo, execucao controlada e leitura de estado, sem UX de jogo final. |

Riscos operacionais a vigiar desde o primeiro plano da milestone 02:

- deixar o milestone 02 discutir infra, parser ou UX antes de fechar tipos e regras;
- crescer o pacote inicial de conteudo ate virar problema de balanceamento e nao de arquitetura;
- criar logs insuficientes para explicar diferencas entre um replay esperado e um replay real;
- esconder estados invalidos atras de defaults silenciosos em vez de falhar com mensagens rastreaveis.

## 4. Milestone 02 Recomendada

`HNDF-02`. O faseamento abaixo materializa `D-13`, `D-14`, `D-15` e `D-16` sem alterar o recorte ja travado. A ordem oficial continua literal: `tipos -> regras -> criacao de personagem -> combate minimo`.

### 02-01 Fundacao de Tipos e Invariantes

`objetivo`: abrir o core com IDs, value objects e estados minimos que sustentam a trilha inteira sem depender de adaptadores ou parser definitivo.

`escopo`: tipos base de atributos, pools de recurso, status/efeitos aplicados, personagem base, inimigo base e invariantes de dominio visiveis.

`entradas`: `01-GUIA-CANONICO.md`, este handoff, decisoes `D-13` e `D-14`, naming inicial de namespaces e baseline tecnico recomendado.

`saidas`: modulos `domain` criados, testes unitarios simples para invariantes, fronteira clara entre `Definition` e `State` e DTOs minimos estaveis para a etapa seguinte.

`gate de validacao`: compilar o nucleo de tipos, provar invariantes basicas via testes e manter dependencia zero do core em `CLI estruturada`, parser definitivo ou concerns de produto.

### 02-02 Regras Deterministicas e Resolutores

`objetivo`: transformar o nucleo de tipos em regras executaveis e observaveis, com foco em custo, dano, aplicacao de efeito e ordem de resolucao.

`escopo`: resolvers deterministicos, DTOs de resultado, eventos, logs estruturados e replay inicial suficiente para explicar `input -> resolve -> output/events`.

`entradas`: saidas de `02-01`, inventario de regras do guia, decisao `a fechar` sobre granularidade inicial do replay e logs e recorte de combate basico definido por `D-13`.

`saidas`: modulo `rules` funcional, contratos de `validation`, scenario tests basicos de resolucao e base de replay/log pronta para os fluxos seguintes.

`gate de validacao`: repetir a mesma entrada e obter a mesma saida, com eventos suficientes para diagnosticar falha de custo, dano ou efeito sem depender de interface final.

### 02-03 Criacao de Personagem e Catalogo Minimo

`objetivo`: conectar definicoes externas minimas ao core e validar o caminho de montagem do protagonista sem misturar autoria com runtime.

`escopo`: formato inicial do catalogo externo, loader de conteudo, `AuthoringService` por tipo de entidade, `CharacterCreation` e pacote minimo de skills, efeitos, templates e inimigos.

`entradas`: saidas de `02-01` e `02-02`, default `recomendado` para formato inicial do catalogo, decisao `a fechar` sobre loader de conteudo e recorte minimo de conteudo definido neste handoff.

`saidas`: protagonista montado a partir de definicoes cadastradas, validacoes rastreaveis de criacao de personagem, erros explicitos de conteudo e catalogo minimo versionado no repo.

`gate de validacao`: conseguir cadastrar conteudo minimo, criar um personagem valido e explicar qualquer falha de definicao ou restricao sem introduzir parser definitivo complexo.

### 02-04 Combate Minimo e CLI de Estudo

`objetivo`: fechar o primeiro caminho jogavel de estudo com combate basico protagonista versus inimigos e uma `CLI estruturada` de inspecao.

`escopo`: montagem de encontro simples, execucao de turno, comandos controlados de CLI, leitura de estado, exibicao de logs/replay e scenario smoke do fluxo completo.

`entradas`: saidas das fases anteriores, recorte de conteudo minimo, regras deterministicas verdes e papel da `CLI estruturada` travado por `D-15` e `D-16`.

`saidas`: combate minimo funcional, replay/log consultavel, comandos da CLI para cadastrar conteudo minimo, criar personagem, iniciar encontro e disparar acoes, mais testes leves de ponta a ponta.

`gate de validacao`: executar a trilha completa `tipos -> regras -> criacao de personagem -> combate minimo`, com `CLI estruturada` usada como ferramenta de estudo e inspecao, nao como jogo final.

## 5. Definition of Ready para Abrir Codigo

`Definition of Ready`. A milestone 02 so deve abrir implementacao quando todos os itens abaixo estiverem claros e aceitos:

- [ ] `01-GUIA-CANONICO.md` e `01-HANDOFF.md` continuam coerentes entre si e sem reabrir `D-01` a `D-16`.
- [ ] O time aceita a ordem `tipos -> regras -> criacao de personagem -> combate minimo` como trilha oficial do milestone 02.
- [ ] O baseline tecnico minimo para C++20, CMake, CTest, GoogleTest, `clang-tidy` e sanitizers esta entendido como prerequisito, mesmo que o ambiente ainda precise instalacao.
- [ ] As decisoes `a fechar` deste handoff tem janela de fechamento clara e nao vao contaminar `02-01` com discussao de parser, UI ou produto.
- [ ] O recorte de `CLI estruturada` esta entendido como ferramenta de estudo, cadastro minimo, execucao controlada e inspecao de estado.
- [ ] O primeiro pacote de conteudo foi aceito como pequeno o bastante para validar o core sem puxar balanceamento, party, items ou progression.
- [ ] O time aceita que falhas de conteudo, validacao e regra devem ser explicitas e rastreaveis desde o primeiro commit de codigo.

### Gatilhos de replanejamento

A milestone 02 deve pausar e replanejar se algum destes gatilhos aparecer:

- necessidade de introduzir `party`, companheiros ou IA tatica antes de `02-04`;
- pressao para transformar a `CLI estruturada` em shell de jogo final, UI rica ou fluxo de produto;
- necessidade de parser definitivo, DSL de regras ou pipeline de autoria sofisticado antes de provar o core minimo;
- descoberta de que o pacote minimo de conteudo precisa crescer tanto que o milestone deixa de validar arquitetura e passa a validar balanceamento;
- qualquer tentativa de mover `CharacterCreation` para fora do core/session ou de misturar `AuthoringService` com runtime;
- exigencia de aleatoriedade real antes de o replay e os logs terem contrato estavel para aceitar `seed` como input explicito.
