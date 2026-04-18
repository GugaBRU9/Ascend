#include "Player.hpp"

Player::Player(
    const std::string& id,
    const std::string& nome,
    const std::string& descricao
)
    : Entidade(id, nome, descricao)
{
}
