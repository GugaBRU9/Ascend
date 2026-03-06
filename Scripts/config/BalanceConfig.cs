using System;
using System.Collections.Generic;


namespace Ascend.Config
{
    public static class BalanceConfig
    {
        public static readonly int BaseHPPerVitality = 20;
        public static readonly int BaseMPPerIntelligence = 5;
        public static readonly int BaseDamagePerStrength = 10;
        public static readonly int BaseTurnSpeedPerAgility = 2;

        public static int CalculateHP(int vitality) =>vitality * BaseHPPerVitality;
        public static int CalculateMP(int intelligence) => intelligence * BaseMPPerIntelligence;
        public static int CalculateDamage(int strength) => strength * BaseDamagePerStrength;
        public static int CalculateTurnSpeed(int agility) => agility * BaseTurnSpeedPerAgility;

        public static long GetExperienceForNextLevel(int Level) => (long)(100 * Math.Pow(1.5, Level - 1));
    }
}