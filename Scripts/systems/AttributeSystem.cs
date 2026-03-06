using System;
using Ascend.Core;
using Ascend.Components;
using Ascend.Config;
using UnityEngine;

namespace Ascend.Systems
{
    public class AttributeSystem
    {
        public void Update(Entity entity)
        {
            if (!entity.HasComponent<Attributes>())
            {
                Debug.Log("Entity must have Attributes component to update.");
                return;
            }
            AttackDamage(entity);
            HealthPoints(entity);
            ManaPoints(entity);
            TurnSpeed(entity);
        }
        public void AttackDamage(Entity entity)
        {
            var attributesComponent = entity.GetComponent<Attributes>();
            int damage = BalanceConfig.CalculateDamage(attributesComponent.Strength);
            
            if (entity.HasComponent<Attack>())
            {
                var attackComponent = entity.GetComponent<Attack>();
                attackComponent.UpdateDamage(damage);
                Debug.Log($"{entity.Name}'s attack damage updated to {damage}.");
                return;
            }

            entity.AddComponent(new Attack(damage));
            Debug.Log($"{entity.Name} has an attack damage of {damage}.");
        }
        public void HealthPoints(Entity entity)
        {
            var attributesComponent = entity.GetComponent<Attributes>();
            int hp = BalanceConfig.CalculateHP(attributesComponent.Vitality);

            if (entity.HasComponent<Health>())
            {
                var healthComponent = entity.GetComponent<Health>();
                healthComponent.UpdateMaxHP(hp);
                Debug.Log($"{entity.Name}'s health points updated to {hp}.");
                return;
            }
            
            entity.AddComponent(new Health(hp, hp));
            Debug.Log($"{entity.Name} has {hp} health points.");
        }
        public void ManaPoints(Entity entity)
        {
            var attributesComponent = entity.GetComponent<Attributes>();
            int mp = BalanceConfig.CalculateMP(attributesComponent.Intelligence);

            if (entity.HasComponent<Mana>())
            {
                var manaComponent = entity.GetComponent<Mana>();
                manaComponent.UpdateMaxMP(mp);
                Debug.Log($"{entity.Name}'s mana points updated to {mp}.");
                return;
            }
            
            entity.AddComponent(new Mana(mp, mp));
            Debug.Log($"{entity.Name} has {mp} mana points.");
        }
        public void TurnSpeed(Entity entity)
        {
            var attributesComponent = entity.GetComponent<Attributes>();
            int turnSpeed = BalanceConfig.CalculateTurnSpeed(attributesComponent.Agility);

            if (entity.HasComponent<Speed>())
            {
                var speedComponent = entity.GetComponent<Speed>();
                speedComponent.UpdateSpeed(turnSpeed);
                Debug.Log($"{entity.Name}'s turn speed updated to {turnSpeed}.");
                return;
            }
            
            entity.AddComponent(new Speed(turnSpeed));
            Debug.Log($"{entity.Name} has a turn speed of {turnSpeed}.");
        }
    }
}