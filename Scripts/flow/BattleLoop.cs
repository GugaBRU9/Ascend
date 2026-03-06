using System;
using Ascend.Core;
using Ascend.Systems;
using Ascend.Components;
using UnityEngine;

namespace Ascend.Flow
{
    public class BattleLoop
    {
        private readonly CombatSystem _combatSystem;

        public BattleLoop(CombatSystem combatSystem)
        {
            _combatSystem = combatSystem;
        }
        public bool IsValidBattle(Entity player, Entity enemy) => _combatSystem.IsValidCombat(player) && _combatSystem.IsValidCombat(enemy);
        public void StartBattle(Entity player, Entity enemy)
        {
            if (!IsValidBattle(player, enemy))
            {
                Debug.Log("Both entities must have Health and Attack components to start the battle.");
                return;
            }

            Health playerHealth = player.GetComponent<Health>();
            Health enemyHealth = enemy.GetComponent<Health>();

            int turn = 1;
            Debug.Log("Battle Start!");
            while (playerHealth.IsAlive() && enemyHealth.IsAlive())
            {
                Debug.Log($"\nTurn {turn++}:");
                _combatSystem.Attack(player, enemy);
                if (!enemyHealth.IsAlive())
                {
                    Debug.Log("Player wins!");
                    break;
                }
                _combatSystem.Attack(enemy, player);
                if (!playerHealth.IsAlive())
                {
                    Debug.Log("Enemy wins!");
                    break;
                }
            }
            Debug.Log("Battle End!");
        }
    }
}