#include "HabilidadePassiva.hpp"

HabilidadePassiva::HabilidadePassiva(
    const std::string& id,
    const std::string& nome,
    const std::string& descricao,
    OrigemHabilidade origem,
    TipoEfeitoHabilidade tipoEfeito,
    TipoAlvoHabilidade tipoAlvo
)
    : Habilidades(
          id,
          nome,
          descricao,
          GatilhoHabilidade::Passiva,
          tipoAlvo,
          origem,
          tipoEfeito
      )
{
}
