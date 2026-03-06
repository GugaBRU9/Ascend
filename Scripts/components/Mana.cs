using System;
using Ascend.Core;

namespace Ascend.Components
{
    public class Mana
    {
        public int MP { get; private set; }
        public int BaseMaxMP { get; private set; }
        public int BonusMaxMP { get; private set; }
        public int TotalMaxMP => BaseMaxMP + BonusMaxMP;
        public Mana(int mp, int maxMPBase, int maxMPBonus = 0)
        {
            if (!(mp >= 0 && maxMPBase >= 0 && maxMPBonus >= 0 && mp <= maxMPBase + maxMPBonus))
            {
                throw new ArgumentException("Invalid mana values. MP and MaxMP must be non-negative, and MP cannot exceed MaxMP.");
            }
            MP = mp;
            BaseMaxMP = maxMPBase;
            BonusMaxMP = maxMPBonus;
        }
        public void SpendMana(int amount)
        {
            if (amount < 0)
            {
                throw new ArgumentException("Mana spent must be non-negative.");
            }
            MP = Math.Max(MP - amount, 0);
        }
        public bool IsOutOfMana() => MP == 0;
        public void UpdateMaxMP(int newMaxMPBase, int newMaxMPBonus = 0)
        {
            if (newMaxMPBase < 0 || newMaxMPBonus < 0)
            {
                throw new ArgumentException("New MaxMPBase and MaxMPBonus values must be non-negative.");
            }
            BaseMaxMP = newMaxMPBase;
            BonusMaxMP = newMaxMPBonus;
            MP = Math.Min(MP, TotalMaxMP); // Ensure MP does not exceed TotalMaxMP 
        }
    }
}