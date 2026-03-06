using System;
using Ascend.Core;

namespace Ascend.Components
{
    public class AttributePoints
    {
        public int Unspent { get; set; }

        public AttributePoints()
        {
            Unspent = 0;
        }
        public void Spend(int points)
        {
            if (points > Unspent)
                throw new InvalidOperationException("Not enough attribute points to spend.");

            Unspent -= points;
        }
        public void Gain(int points)
        {
            Unspent += points;
        }
    }
}