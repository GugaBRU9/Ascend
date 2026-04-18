#pragma once

#include "Habilidades.hpp"

class HabilidadePassiva : public Habilidades
{
protected:
    HabilidadePassiva(
        const std::string& id,
        const std::string& nome,
        const std::string& descricao,
        OrigemHabilidade origem,
        TipoEfeitoHabilidade tipoEfeito,
        TipoAlvoHabilidade tipoAlvo = TipoAlvoHabilidade::Nenhum
    );
};
