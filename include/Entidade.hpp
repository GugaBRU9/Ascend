#pragma once

#include <string>

class Entidade
{
private:
    std::string id;
    std::string nome;
    std::string descricao;

protected:
    Entidade(
        const std::string& id,
        const std::string& nome,
        const std::string& descricao
    );

public:
    virtual ~Entidade();

    const std::string& getId() const;
    const std::string& getNome() const;
    const std::string& getDescricao() const;
};
