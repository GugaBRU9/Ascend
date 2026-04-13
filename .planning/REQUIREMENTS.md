# Requirements: Ascend

**Defined:** 2026-04-13
**Core Value:** O primeiro slice de combate 1x1 precisa ser simples o bastante para um estudante entender, testar, reproduzir e corrigir sem depender de UI, engine ou infraestrutura pesada.

## v1.1 Requirements

### Foundation

- [x] **ARCH-05**: O estudante consegue configurar e compilar o projeto do slice 1x1 com `CMake` em uma estrutura C++20 minima e portavel.
- [x] **ARCH-06**: O codigo do slice nasce separado entre `domain`, `content`, `session` e `adapters`, sem acoplamento do core a UI, engine, rede, banco ou persistencia de produto.
- [x] **VAL-05**: O estudante consegue executar uma baseline de verificacao com `CTest` e configuracoes de debug/teste instrumentadas com sanitizers.

### Combat Runtime

- [ ] **COMBAT-05**: O projeto implementa `CombatState` com os campos minimos de runtime documentados para `player` e `enemy`.
- [ ] **COMBAT-06**: O projeto inicializa um duelo simples com `player` e `enemy` a partir de conteudo canonico, sem hardcode de regra no adapter textual.
- [ ] **COMBAT-07**: O projeto implementa `TurnResolver` com ordem deterministica por `AGI`, `player` e `actor_id`.
- [ ] **COMBAT-08**: O projeto rejeita acao por recurso insuficiente com o evento `action_rejected_insufficient_resource`, sem consumir recurso e encerrando a vez.
- [ ] **COMBAT-09**: O projeto encerra o combate imediatamente quando `hp_current` chega a `0`, sem rodada extra.

### Content

- [ ] **ATTR-05**: O projeto materializa o catalogo inicial com os atributos, habilidades, passivas e prioridades canonicas do `player` e do `enemy`, separado do estado mutavel de runtime.

### Harness & Observability

- [ ] **VAL-06**: O estudante consegue executar um duelo simples por harness textual, sem UI final.
- [ ] **VAL-07**: O `Combat Log` produzido pelo slice inclui os campos minimos e os eventos obrigatorios definidos em `observability.md`.
- [ ] **VAL-08**: O duelo produzido pelo harness deixa evidencias textuais e eventos suficientes para inspecionar ou reconstituir uma execucao simples.

### Verification

- [ ] **VAL-09**: O projeto inclui testes basicos cobrindo inicializacao, iniciativa, acao invalida por recurso insuficiente e encerramento do combate.

## Future Requirements

### Replay & Tooling

- **VAL-10**: O projeto serializa replay em schema versionado para reexecucao automatizada fim a fim.
- **ARCH-07**: O projeto adiciona CI ou presets mais completos depois que o slice 1x1 estiver estavel.

### Combat Depth

- **COMBAT-10**: O projeto amplia o duelo com efeitos persistentes, status adicionais ou regras mais sofisticadas apos estabilizar o loop base.
- **ATTR-06**: O projeto fecha formulas numericas detalhadas, tuning fino e papel obrigatorio de `CHA` depois que o slice estiver validado.

## Out of Scope

| Feature | Reason |
|---------|--------|
| Party completa e companheiros | Reabre o escopo antes de o duelo base 1x1 estar executavel |
| Exploracao, quests, crafting, economia e mundo | Nao contribuem diretamente para validar o combate base |
| UI final, audio, rendering e assets | A `v1.1` continua textual, core-first e media-agnostic |
| Multiplayer, networking e persistencia online | Complexidade alta e sem valor imediato para o objetivo educacional |
| Balanceamento completo e formulas finais do RPG amplo | O milestone atual precisa primeiro provar o loop minimo, nao o tuning final |

## Traceability

| Requirement | Phase | Status |
|-------------|-------|--------|
| ARCH-05 | Phase 2 | Complete |
| ARCH-06 | Phase 2 | Complete |
| VAL-05 | Phase 2 | Complete |
| COMBAT-05 | Phase 3 | Pending |
| COMBAT-06 | Phase 3 | Pending |
| ATTR-05 | Phase 3 | Pending |
| COMBAT-07 | Phase 4 | Pending |
| COMBAT-08 | Phase 4 | Pending |
| COMBAT-09 | Phase 4 | Pending |
| VAL-06 | Phase 4 | Pending |
| VAL-07 | Phase 4 | Pending |
| VAL-08 | Phase 5 | Pending |
| VAL-09 | Phase 5 | Pending |

**Coverage:**
- v1.1 requirements: 13 total
- Mapped to phases: 13
- Unmapped: 0

---
*Requirements defined: 2026-04-13*
*Last updated: 2026-04-13 after phase 2 completion*
