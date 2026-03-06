using System;
using Ascend.Core;
using Ascend.Config;

namespace Ascend.Components
{
    public class Progression
    {
        public int Level { get; private set; }
        public long Experience { get; private set; }
        public Progression()
        {
            Level = 1;
            Experience = 0;
        }
        public int GainExperience(int exp)
        {
            if (exp < 0)
            {
                throw new ArgumentException("Experience gained must be non-negative.");
            }
            Experience += exp;
            return CheckLevelUp();
        }
        private int CheckLevelUp()
        {
            long expToNextLevel = BalanceConfig.GetExperienceForNextLevel(Level);
            int LevelUps = 0;
            while (Experience >= expToNextLevel)
            {
                Experience -= expToNextLevel;
                LevelUps++;
                Level++;
                expToNextLevel = BalanceConfig.GetExperienceForNextLevel(Level);
            }
            return LevelUps;
        }
        
        public void SetLevel(int level)
        {
            if (level < 1)
            {
                throw new ArgumentException("Level must be at least 1.");
            }
            Level = level;
            Experience = 0; // Reset experience when setting level directly
        }
    }
}