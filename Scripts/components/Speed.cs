using System;
using Ascend.Core;

namespace Ascend.Components
{
    public class Speed
    {
        public float BaseSpeed { get; private set; }
        public float BonusSpeed { get; private set; }
        public float TotalSpeed => BaseSpeed + BonusSpeed;
        public Speed(float baseSpeed, float bonusSpeed = 0)
        {
            if (baseSpeed < 0 || bonusSpeed < 0)
            {
                throw new ArgumentException("Speed values must be non-negative.");
            }
            BaseSpeed = baseSpeed;
            BonusSpeed = bonusSpeed;
        }
        public void UpdateSpeed(float newBaseSpeed, float newBonusSpeed = 0)
        {
            if (newBaseSpeed < 0 || newBonusSpeed < 0)
            {
                throw new ArgumentException("New base speed and bonus speed values must be non-negative.");
            }
            BaseSpeed = newBaseSpeed;
            BonusSpeed = newBonusSpeed;
        }
    }
}