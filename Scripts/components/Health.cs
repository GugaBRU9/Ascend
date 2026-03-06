using System;
using Ascend.Core;

namespace Ascend.Components
{
    public class Health
    {
        public int HP { get; private set; }
        public int BaseMaxHP { get; private set; }
        public int BonusMaxHP { get; private set; }
        public int TotalMaxHP => BaseMaxHP + BonusMaxHP;
        public Health(int hp, int maxHPBase, int maxHPBonus = 0)
        {
            if (!(hp >= 0 && maxHPBase >= 0 && maxHPBonus >= 0 && hp <= maxHPBase + maxHPBonus))
            {
                throw new ArgumentException("Invalid health values. HP and MaxHP must be non-negative, and HP cannot exceed MaxHP.");
            }
            HP = hp;
            BaseMaxHP = maxHPBase;
            BonusMaxHP = maxHPBonus;
        }
        public void TakeDamage(int damage)
        {
            if (damage < 0)
            {
                throw new ArgumentException("Damage must be non-negative.");
            }
            HP = Math.Max(HP - damage, 0);
        }
        public bool IsAlive() => HP > 0;

        public void UpdateMaxHP(int newMaxHPBase, int newMaxHPBonus = 0)
        {
            if (newMaxHPBase < 0 || newMaxHPBonus < 0)
            {
                throw new ArgumentException("New BaseMaxHP and BonusMaxHP values must be non-negative.");
            }
            BaseMaxHP = newMaxHPBase;
            BonusMaxHP = newMaxHPBonus;
            HP = Math.Min(HP, TotalMaxHP); // Ensure HP does not exceed TotalMaxHP 
        }
    }
}