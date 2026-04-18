#include "HabilidadeAtiva.hpp"

HabilidadeAtiva::HabilidadeAtiva(
    const std::string& id,
    const std::string& nome,
    const std::string& descricao,
    TipoAlvoHabilidade tipoAlvo,
    OrigemHabilidade origem,
    TipoEfeitoHabilidade tipoEfeito,
    RecursoHabilidade recurso,
    int custoBase
)
    : Habilidades(
          id,
          nome,
          descricao,
          GatilhoHabilidade::Manual,
          tipoAlvo,
          origem,
          tipoEfeito
      ),
      recurso(recurso),
      custoBase(custoBase)
{
}

RecursoHabilidade HabilidadeAtiva::getRecurso() const
{
    return recurso;
}

int HabilidadeAtiva::getCustoBase() const
{
    return custoBase;
}
