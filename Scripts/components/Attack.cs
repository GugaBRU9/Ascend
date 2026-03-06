using System;
using Ascend.Core;

namespace Ascend.Components
{
    public class Attack
    {
        
        public int BaseDamage { get; private set; }
        public int BonusDamage { get; private set; }
        public int TotalDamage => BaseDamage + BonusDamage;
        
        public Attack(int baseDamage, int bonusDamage = 0)
        {
            if (baseDamage < 0)
            {
                throw new ArgumentException("Base damage must be non-negative.");
            }
            if (bonusDamage < 0)
            {
                throw new ArgumentException("Bonus damage must be non-negative.");
            }
            BaseDamage = baseDamage;
            BonusDamage = bonusDamage;
        }
        public void UpdateDamage(int newBaseDamage, int newBonusDamage = 0)
        {
            if (newBaseDamage < 0)
            {
                throw new ArgumentException("New base damage value must be non-negative.");
            }
            if (newBonusDamage < 0)
            {
                throw new ArgumentException("New bonus damage value must be non-negative.");
            }
            BaseDamage = newBaseDamage;
            BonusDamage = newBonusDamage;
        }
    }
}