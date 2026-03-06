using System;
using System.Collections.Generic;
using Ascend.Core;
using Ascend.Components;
using UnityEngine;

namespace Ascend.Systems
{
    public class CombatSystem
    {
        public void Attack(Entity attacker, Entity defender)
        {
            if (!IsValidCombat(attacker) || !IsValidCombat(defender))
            {
                Debug.Log("Both entities must have Health and Attack components to perform an attack.");
                return;
            }
            
            var attackComponent = attacker.GetComponent<Attack>();
            var healthComponent = defender.GetComponent<Health>();

            int damage = attackComponent.TotalDamage;
            healthComponent.TakeDamage(damage);

            Debug.Log($"{attacker.Name} attacks {defender.Name} for {damage} damage. {defender.Name} has {healthComponent.HP}/{healthComponent.TotalMaxHP} HP left.");

            if (!healthComponent.IsAlive())
            {
                Debug.Log($"{defender.Name} has been defeated!");
            }
        }
        public bool IsValidCombat(Entity entity) => entity.HasComponent<Health>() && entity.HasComponent<Attack>();
    }
}