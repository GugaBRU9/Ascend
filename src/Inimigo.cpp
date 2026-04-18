#include "Inimigo.hpp"

Inimigo::Inimigo(
    const std::string& id,
    const std::string& nome,
    const std::string& descricao
)
    : Entidade(id, nome, descricao)
{
}
