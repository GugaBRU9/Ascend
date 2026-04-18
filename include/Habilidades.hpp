#pragma once

#include "Entidade.hpp"

#include <string>
#include <vector>

enum class GatilhoHabilidade
{
    Manual,
    Passiva,
    Reacao,
    Evento,
    Aura
};

enum class TipoAlvoHabilidade
{
    Nenhum,
    SiMesmo,
    UmAlvo,
    MultiplosAlvos,
    Area
};

enum class OrigemHabilidade
{
    Marcial,
    Magica,
    Hibrida
};

enum class RecursoHabilidade
{
    Nenhum,
    Energia,
    Mana
};

enum class TipoEfeitoHabilidade
{
    Dano,
    Buff,
    Debuff
};

struct ContextoHabilidade
{
    Entidade* usuario = nullptr;
    std::vector<Entidade*> alvos;
};

class Habilidades
{
private:
    std::string id;
    std::string nome;
    std::string descricao;
    GatilhoHabilidade gatilho;
    TipoAlvoHabilidade tipoAlvo;
    OrigemHabilidade origem;
    TipoEfeitoHabilidade tipoEfeito;

protected:
    Habilidades(
        const std::string& id,
        const std::string& nome,
        const std::string& descricao,
        GatilhoHabilidade gatilho,
        TipoAlvoHabilidade tipoAlvo,
        OrigemHabilidade origem,
        TipoEfeitoHabilidade tipoEfeito
    );

    virtual void aplicarEfeito(ContextoHabilidade& contexto) = 0;

public:
    virtual ~Habilidades();

    const std::string& getId() const;
    const std::string& getNome() const;
    const std::string& getDescricao() const;
    GatilhoHabilidade getGatilho() const;
    TipoAlvoHabilidade getTipoAlvo() const;
    OrigemHabilidade getOrigem() const;
    TipoEfeitoHabilidade getTipoEfeito() const;

    virtual bool podeUsar(const ContextoHabilidade& contexto) const = 0;
    virtual void usar(ContextoHabilidade& contexto) = 0;
};
