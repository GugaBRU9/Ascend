# UAT Checklist

Este checklist existe para validar, por leitura, se os contratos fechados em [attributes-and-skills.md](./attributes-and-skills.md) e [observability.md](./observability.md) estao claros o bastante para abrir a proxima milestone de implementacao sem regras escondidas.

## When To Use

Use este checklist ao fim da leitura dos artefatos canonicos do combate 1x1. Ele serve para um estudante confirmar se o recorte atual esta compreensivel sem depender de UI, harness executavel ou consultas extras a `Estruturação.md`.

## Checklist

- [ ] O recorte 1x1 entre `player` e `enemy` esta explicito e sem abrir escopo para party, summons ou multiplayer?
- [ ] A presenca de `vida/stamina/mana` no runtime esta clara, incluindo o papel de cada recurso no duelo?
- [ ] O papel de `CHA` esta claro como parte do modelo, mas sem efeito obrigatorio no primeiro slice?
- [ ] O kit inicial de habilidades do jogador e do inimigo esta nomeado de forma objetiva, incluindo `basic_attack`, as ativas do jogador e `Mordida Brutal`?
- [ ] As cinco passivas iniciais do jogador estao visiveis e tratadas como parte do contrato do slice?
- [ ] Os campos minimos do `log textual` estao claros o bastante para explicar quem agiu, qual acao foi tentada e como ficaram os recursos?
- [ ] O limite do `replay` nesta phase esta claro, incluindo o fato de que `replay completo` ficou para `v1.1`?

## Freeform Notes

- O que ainda parece implicito ou depende de interpretacao?
- Ha algum termo, atributo, habilidade ou evento que precise de exemplo melhor?
- A leitura destes documentos seria suficiente para voce implementar um primeiro harness simples sem consultar outra fonte?

## Exit Criteria

A phase passa quando o estudante consegue responder o checklist sem precisar inferir regras escondidas ou abrir `Estruturação.md` para completar o entendimento. Se alguma resposta depender de suposicao externa, o contrato documental ainda nao esta pronto para sustentar a proxima milestone.
