#include "entidade.hpp"

unsigned long Entidade::proximoId = 1;

Entidade::Entidade() = default;

Entidade::~Entidade() = default;

unsigned long Entidade::Id() const
{
    return _id;
}

const std::string& Entidade::Nome() const
{
    return nome;
}
