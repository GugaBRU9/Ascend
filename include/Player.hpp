#pragma once

#include "Entidade.hpp"

class Player : public Entidade
{
public:
    Player(
        const std::string& id,
        const std::string& nome,
        const std::string& descricao = ""
    );
};
