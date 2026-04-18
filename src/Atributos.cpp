#include "Atributos.hpp"

Atributos::Atributos()
    : Atributos(5)
{
}

Atributos::Atributos(int valorInicial)
    : strength(valorInicial),
      agility(valorInicial),
      stamina(valorInicial),
      intelligence(valorInicial),
      wisdom(valorInicial),
      charisma(valorInicial)
{
}

Atributos::Atributos(int strength, int agility, int stamina, int intelligence, int wisdom, int charisma)
    : strength(strength),
      agility(agility),
      stamina(stamina),
      intelligence(intelligence),
      wisdom(wisdom),
      charisma(charisma)
{
}

int Atributos::getStrength() const
{
    return strength;
}

int Atributos::getAgility() const
{
    return agility;
}

int Atributos::getStamina() const
{
    return stamina;
}

int Atributos::getIntelligence() const
{
    return intelligence;
}

int Atributos::getWisdom() const
{
    return wisdom;
}

int Atributos::getCharisma() const
{
    return charisma;
}

void Atributos::addStrength(int valor)
{
    (void)valor;

    strength += valor;
}

void Atributos::addAgility(int valor)
{
    (void)valor;

    agility += valor;
}

void Atributos::addStamina(int valor)
{
    (void)valor;

    stamina += valor;
}

void Atributos::addIntelligence(int valor)
{
    (void)valor;

    intelligence += valor;
}

void Atributos::addWisdom(int valor)
{
    (void)valor;

    wisdom += valor;
}

void Atributos::addCharisma(int valor)
{
    (void)valor;

    charisma += valor;
}
