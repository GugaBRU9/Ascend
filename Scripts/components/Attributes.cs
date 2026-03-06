using System;
using Ascend.Core;

namespace Ascend.Components
{
    public class Attributes
    {
        public int Strength { get; private set; }
        public int Agility { get; private set; }
        public int Intelligence { get; private set; }
        public int Vitality { get; private set; }

        public Attributes(int str, int agi, int intel, int vit)
        {
            if (str < 0 || agi < 0 || intel < 0 || vit < 0)
            {
                throw new ArgumentException("Attribute values must be non-negative.");
            }
            Strength = str;
            Agility = agi;
            Intelligence = intel;
            Vitality = vit;
        }

        public void UpdateAttributes(int str, int agi, int intel, int vit)
        {
            if (str < 0 || agi < 0 || intel < 0 || vit < 0)
            {
                throw new ArgumentException("Attribute values must be non-negative.");
            }
            Strength = str;
            Agility = agi;
            Intelligence = intel;
            Vitality = vit;
        }

        public void IncreaseStrength(int amount) => Strength += amount;
        public void IncreaseAgility(int amount) => Agility += amount;
        public void IncreaseIntelligence(int amount) => Intelligence += amount;
        public void IncreaseVitality(int amount) => Vitality += amount;
    }
}