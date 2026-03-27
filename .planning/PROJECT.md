# Ascend

## What This Is

Ascend e um RPG tatico mobile por turnos, inspirado em RPGs de mesa, com foco em sessoes curtas de aproximadamente 10 minutos. O loop principal combina um protagonista altamente customizavel com quatro companheiros automatizados para manter profundidade de build sem exigir microgerenciamento constante. O projeto prioriza UI simples, leitura rapida de combate e desempenho consistente mesmo em celulares mais antigos.

## Core Value

Entregar combate por turnos legivel e profundo no mobile, com build rica e frame-time estavel mesmo em hardware antigo.

## Requirements

### Validated

(None yet — ship to validate)

### Active

- [ ] Combate por turnos rapido e legivel, com decisoes do protagonista em 5-10 segundos por turno.
- [ ] Progressao profunda do protagonista via atributos, equipamentos, habilidades e multiplas trilhas simultaneas.
- [ ] Companheiros relevantes em combate com IA tatica configuravel, sem microgerenciamento obrigatorio.
- [ ] Vertical slice mobile com UI simples, save/resume curto e validacao de performance em device antigo.
- [ ] Sistema coeso de recurso, status, resistencias e tipos de dano suportando builds hibridas.
- [ ] Fechar pontos criticos ainda indefinidos via Q&A direcionado quando bloquearem design ou execucao.

### Out of Scope

- Multiplayer, PvP e features sociais online — nao ajudam a validar o nucleo combate + build no primeiro ciclo.
- Campanha longa, monetizacao e live ops — ainda nao definidos e ampliam demais o escopo inicial.
- Microgerenciamento obrigatorio de todos os 5 membros da party — conflita com sessoes curtas, UI simples e foco mobile.
- Fidelidade visual pesada, shaders caros e efeitos que prejudiquem hardware antigo — conflita diretamente com a meta principal de performance.

## Context

- Projeto greenfield guiado por `Estruturacao.md`, com alguns pontos de design ainda em aberto.
- Stack definida pelo usuario: C# + Unity, com foco em mobile.
- O repositorio possui um projeto Unity inicial em `Unity/` usando Unity `6000.3.2f1`, mas a arvore git tambem contem alteracoes nao consolidadas; isso nao foi tratado como baseline validado do jogo.
- A party e formada por 1 protagonista com customizacao completa e 4 companheiros de arquotipo simples com progressao automatica.
- O combate previsto e por turnos: protagonista age manualmente, aliados executam automaticamente por padrao, inimigos respondem e efeitos resolvem ao final do fluxo.
- O jogo usa 6 atributos principais, um sistema hibrido de trilhas de habilidade, energia/esforco como recurso de combate, status temporarios e 11 tipos de dano com resistencias e vulnerabilidades.
- Habilidades devem ser obtidas por exploracao, NPCs e reflexao do personagem, reforcando estilos diferentes de progressao.
- Pontos ainda indefinidos e que devem virar Q&A quando necessario: escopo de conteudo do vertical slice, plataforma alvo primaria para benchmark, direcao artistica final, modelo de save/meta progressao, onboarding inicial, economia e calibracao exata de algumas regras (por exemplo 3 vs 4 habilidades ativas).

## Constraints

- **Tech stack**: C# + Unity — definido pelo usuario e alinhado ao projeto Unity ja iniciado no repositorio.
- **Platform**: Mobile-first — o jogo precisa nascer para touch, sessoes curtas e restricoes reais de hardware.
- **Performance**: Suporte forte a celulares antigos — requer baixo GC, pouca sobrecarga de UI, controle de draw calls e perfilagem em device.
- **UX**: UI simples e legivel — combate e build precisam ser compreensiveis sem menus densos ou excesso de passos.
- **Session design**: Turnos decididos em 5-10 segundos e sessoes de ~10 minutos — o jogo nao pode depender de loops longos ou interfaces lentas.
- **Design maturity**: Ha lacunas no design — decisoes criticas devem ser fechadas via Q&A antes de virar implementacao irreversivel.

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Unity + C# como stack principal | Definido explicitamente pelo usuario e coerente com o ecossistema mobile desejado | — Pending |
| Mobile-first com prioridade absoluta para performance | E um objetivo central do produto e um filtro de todas as decisoes tecnicas | — Pending |
| Party de 5 com 1 protagonista customizavel + 4 companheiros simplificados | Mantem profundidade de build sem transformar cada sessao em manutencao de 5 builds completas | — Pending |
| Controle manual completo da party sera opcional, nao obrigatorio | Preserva fluidez de combate e reduz carga de interface no mobile | — Pending |
| O primeiro roadmap vai perseguir um vertical slice validavel antes de expansao de conteudo | Reduz risco num projeto com varias lacunas de design ainda abertas | ⚠️ Revisit |
| Pontos criticos indefinidos serao resolvidos por Q&A direcionado em vez de improviso | Evita cristalizar decisoes ruins cedo demais | — Pending |

## Evolution

This document evolves at phase transitions and milestone boundaries.

**After each phase transition** (via `$gsd-transition`):
1. Requirements invalidated? -> Move to Out of Scope with reason
2. Requirements validated? -> Move to Validated with phase reference
3. New requirements emerged? -> Add to Active
4. Decisions to log? -> Add to Key Decisions
5. "What This Is" still accurate? -> Update if drifted

**After each milestone** (via `$gsd-complete-milestone`):
1. Full review of all sections
2. Core Value check -> still the right priority?
3. Audit Out of Scope -> reasons still valid?
4. Update Context with current state

---
*Last updated: 2026-03-27 after initialization*
