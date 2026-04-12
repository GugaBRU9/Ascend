# Combat 1x1 Glossary

| Term | Meaning | Why It Matters |
|------|---------|----------------|
| CombatState | Estado de runtime que resume atores, recursos, turno atual e condicoes de encerramento do duelo. | Centraliza a leitura do combate sem depender de UI, engine ou infraestrutura externa. |
| Turn Order | Regra que define quem age primeiro e como a vez alterna ao longo do duelo. | Garante um fluxo deterministico para iniciativa/velocidade e testes reprodutiveis. |
| Action Command | Comando escolhido para executar ataque basico, habilidade ou acao de harness durante a resolucao. | Mantem as entradas do combate explicitas e observaveis no log textual. |
| Attribute Profile | Conjunto de atributos do ator, incluindo STR, AGI, STA, INT, CHA e WIS. | Separa a definicao numerica do ator das regras que consomem esses valores. |
| Skill Definition | Contrato de conteudo que descreve nome, custo, alvo, efeito, tipo de recurso e regra de uso de uma habilidade. | Evita ambiguidade entre o catalogo de conteudo e a execucao em runtime. |
| Basic Attack | Acao ofensiva padrao disponivel desde o primeiro slice para jogador e inimigo. | Fornece uma opcao minima sempre presente para validar o fluxo de turno. |
| Active Skill | Habilidade acionada pelo ator durante a propria vez, sujeita a custo e restricoes de uso. | Representa a parte mais visivel do kit inicial baseado em atributos e habilidades. |
| Passive Skill | Habilidade que altera comportamento ou regras sem exigir comando manual a cada turno. | Garante que o slice inicial nao nasca limitado apenas a acoes ativas. |
| Combat Log | Registro textual das acoes, custos, dano/efeitos e estado resumido por turno. | Sustenta diagnostico, UAT e futura evolucao para replay observavel. |
| Replay | Reconstrucao reproduzivel de uma luta a partir de eventos e estado observavel. | O formato completo e futuro, mas a necessidade ja precisa aparecer no contrato desta fase. |
| UAT | Checklist curto por phase usado pelo estudante para verificar comportamento, clareza e observabilidade. | Mantem a validacao humana leve e frequente durante a evolucao do projeto. |
| Adapter | Camada que conecta o core documental ou futuro runtime a CLI, testes, harnesses ou outras bordas. | Preserva o core media-agnostic e permite trocar interfaces sem reescrever regras centrais. |
