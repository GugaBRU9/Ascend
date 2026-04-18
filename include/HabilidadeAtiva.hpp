#pragma once

#include "Habilidades.hpp"

class HabilidadeAtiva : public Habilidades
{
private:
    RecursoHabilidade recurso;
    int custoBase;

protected:
    HabilidadeAtiva(
        const std::string& id,
        const std::string& nome,
        const std::string& descricao,
        TipoAlvoHabilidade tipoAlvo,
        OrigemHabilidade origem,
        TipoEfeitoHabilidade tipoEfeito,
        RecursoHabilidade recurso,
        int custoBase
    );

public:
    RecursoHabilidade getRecurso() const;
    int getCustoBase() const;
};
