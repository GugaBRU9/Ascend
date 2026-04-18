#pragma once

#include "Entidade.hpp"

class Inimigo : public Entidade
{
public:
    Inimigo(
        const std::string& id,
        const std::string& nome,
        const std::string& descricao = ""
    );
};
