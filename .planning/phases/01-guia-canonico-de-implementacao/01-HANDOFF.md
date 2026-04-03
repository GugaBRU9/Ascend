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
