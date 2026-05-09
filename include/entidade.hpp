#pragma once

#include <string>

class Entidade
{
private:
    static unsigned long proximoId;
    unsigned long _id{proximoId++};

protected:
    std::string _nome{};

    Entidade();

public:
    virtual ~Entidade();

    unsigned long Id() const;
    const std::string& Nome() const;
};
