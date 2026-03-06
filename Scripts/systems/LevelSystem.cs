using System;
using Ascend.Core;
using Ascend.Components;

namespace Ascend.Systems
{
    public class LevelSystem
    {
        public void LevelUp(Entity entity, int levelsGained)
        {
            var levelComponent = entity.GetComponent<Progression>();
            if (levelComponent == null)
                throw new InvalidOperationException("Entity does not have a LevelComponent.");
            var attributePointsComponent = entity.GetComponent<AttributePoints>();
            if (attributePointsComponent == null)
                throw new InvalidOperationException("Entity does not have an AttributePoints component.");
            var attributesComponent = entity.GetComponent<Attributes>();
            if (attributesComponent == null)
                throw new InvalidOperationException("Entity does not have an Attributes component.");
            int pointsGained = levelsGained * 2; // Example: 5 attribute points per level
            attributePointsComponent.Gain(pointsGained);
        }
    }
}