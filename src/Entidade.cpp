#include "Entidade.hpp"

Entidade::Entidade(
    const std::string& id,
    const std::string& nome,
    const std::string& descricao
)
    : id(id),
      nome(nome),
      descricao(descricao)
{
}

Entidade::~Entidade() = default;

const std::string& Entidade::getId() const
{
    return id;
}

const std::string& Entidade::getNome() const
{
    return nome;
}

const std::string& Entidade::getDescricao() const
{
    return descricao;
}
