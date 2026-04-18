#pragma once

class Atributos {
private:
    int strength;
    int agility;
    int stamina;
    int intelligence;
    int wisdom;
    int charisma;

public:
    Atributos();
    Atributos(int valorInicial);
    Atributos(int strength, int agility, int stamina, int intelligence, int wisdom, int charisma);

    int getStrength() const;
    int getAgility() const;
    int getStamina() const;
    int getIntelligence() const;
    int getWisdom() const;
    int getCharisma() const;

    void addStrength(int valor = 1);
    void addAgility(int valor = 1);
    void addStamina(int valor = 1);
    void addIntelligence(int valor = 1);
    void addWisdom(int valor = 1);
    void addCharisma(int valor = 1);
};
