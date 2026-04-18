#include "Habilidades.hpp"

Habilidades::Habilidades(
    const std::string& id,
    const std::string& nome,
    const std::string& descricao,
    GatilhoHabilidade gatilho,
    TipoAlvoHabilidade tipoAlvo,
    OrigemHabilidade origem,
    TipoEfeitoHabilidade tipoEfeito
)
    : id(id),
      nome(nome),
      descricao(descricao),
      gatilho(gatilho),
      tipoAlvo(tipoAlvo),
      origem(origem),
      tipoEfeito(tipoEfeito)
{
}

Habilidades::~Habilidades() = default;

const std::string& Habilidades::getId() const
{
    return id;
}

const std::string& Habilidades::getNome() const
{
    return nome;
}

const std::string& Habilidades::getDescricao() const
{
    return descricao;
}

GatilhoHabilidade Habilidades::getGatilho() const
{
    return gatilho;
}

TipoAlvoHabilidade Habilidades::getTipoAlvo() const
{
    return tipoAlvo;
}

OrigemHabilidade Habilidades::getOrigem() const
{
    return origem;
}

TipoEfeitoHabilidade Habilidades::getTipoEfeito() const
{
    return tipoEfeito;
}
