# Roadmap: Ascend

## Milestones

- [x] **v1.0 Documentation Foundation** - Milestone documental concluido em 2026-04-04 com a `Phase 1` arquivada em `.planning/milestones/v1.0-ROADMAP.md`.
- [ ] **v1.1 Core Foundation** - Milestone atual que abre o primeiro caminho de codigo do core C++ como uma unica `Phase 2`.

<details>
<summary>✅ v1.0 Documentation Foundation (Phase 1) - SHIPPED 2026-04-04</summary>

- [x] **Phase 1: Guia Canonico de Implementacao** - Fechou framing, arquitetura, validacao e handoff do milestone documental.

### Phase 1: Guia Canonico de Implementacao
**Goal**: Fechar um guia completo, direto e didatico que transforme o rascunho atual em base de implementacao C++ agnostica de plataforma.
**Depends on**: Nothing (first phase)
**Requirements**: FRAM-01, FRAM-02, DOMN-01, DOMN-02, DOMN-03, DOMN-04, ARCH-01, ARCH-02, ARCH-03, EDUC-01, EDUC-02, EDUC-03, HNDF-01, HNDF-02
**Success Criteria** (what must be TRUE):
  1. O projeto define claramente o que este milestone faz e o que nao faz.
  2. Os sistemas centrais do rascunho sao reorganizados em modulos, classes, value objects, servicos e contratos de regra.
  3. O leitor entende como o futuro backend vai separar dominio, catalogo de conteudo, sessao e adaptadores.
  4. O estudante recebe uma orientacao objetiva de stack, validacao e ordem de aprendizado para a implementacao.
  5. As pendencias e cortes para a proxima milestone ficam registradas sem ambiguidades.
**Plans**:
- [x] 01-01: Consolidar visao, publico, cortes de escopo e linguagem do milestone
- [x] 01-02: Mapear sistemas core para modulos, classes e contratos agnosticos de plataforma
- [x] 01-03: Definir arquitetura C++, fluxo de build/teste e estrategia de validacao educativa
- [x] 01-04: Registrar pendencias, riscos e proposta da proxima milestone de implementacao

</details>

## 🚧 v1.1 Core Foundation

**Milestone Goal:** Abrir o primeiro caminho implementado e estudavel do backend C++ sem reabrir framing, escopo ou o papel da `CLI estruturada`.

- [ ] **Phase 2: Core Foundation** - Implementa o caminho `tipos -> regras -> criacao de personagem -> combate minimo`, com `CLI estruturada` apenas para estudo e inspecao.

### Phase 2: Core Foundation
**Goal**: Abrir um caminho implementado e estudavel do backend C++ com tipos e invariantes explicitos, resolutores deterministicos observaveis, catalogo minimo, criacao de personagem e combate minimo acessiveis por uma `CLI estruturada` de estudo.
**Depends on**: Phase 1
**Requirements**: CORE-01, CORE-02, CORE-03, CORE-04, RULE-01, RULE-02, RULE-03, RULE-04, CONT-01, CONT-02, CONT-03, CONT-04, FLOW-01, FLOW-02, FLOW-03, FLOW-04
**Success Criteria** (what must be TRUE):
  1. Desenvolvedor consegue compilar e testar tipos base do core com IDs explicitos, value objects, separacao `Definition`/`State` e falhas de validacao rastreaveis para construcoes invalidas.
  2. Estudante consegue repetir o mesmo cenario de custo, dano e efeitos e obter a mesma saida, com eventos, logs e replay suficientes para explicar `input -> resolution -> output`.
  3. Autor consegue definir um catalogo inicial pequeno em arquivos `JSON` versionados no repositorio, e o loader dedicado falha de forma explicita quando encontra definicoes invalidas.
  4. Estudante consegue criar um protagonista valido a partir do catalogo minimo e usa-lo em um encontro simples contra inimigos, inspecionando o estado resultante do fluxo `tipos -> regras -> criacao de personagem -> combate minimo`.
  5. Estudante consegue usar a `CLI estruturada` para inspecionar catalogo, criar personagem, iniciar encontro e consultar logs/replay como ferramenta de estudo, sem que ela precise funcionar como shell de jogo final.
**Plans**:
- [ ] 02-01: Fundacao de Tipos e Invariantes
- [ ] 02-02: Regras Deterministicas e Resolutores
- [ ] 02-03: Criacao de Personagem e Catalogo Minimo
- [ ] 02-04: Combate Minimo e CLI de Estudo

## Progress

| Phase | Plans Complete | Status | Completed |
|-------|----------------|--------|-----------|
| 1. Guia Canonico de Implementacao | 4/4 | Completed | 2026-04-04 |
| 2. Core Foundation | 0/4 | Not started | - |

---
*Last updated: 2026-04-05 after creating roadmap for v1.1 Core Foundation*
