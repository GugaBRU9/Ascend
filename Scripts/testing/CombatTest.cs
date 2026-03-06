using UnityEngine;
using Ascend.Core;
using Ascend.Systems;
using Ascend.Components;
using Ascend.Flow;

namespace Ascend.Testing
{
    public class CombatTest : MonoBehaviour
    {
        void Start()
        {
            // Create entities
            Debug.Log("COMBAT TEST STARTED");

            Debug.Log("Creating Player");
            var player = new Entity("Player");

            player.AddComponent(new Health(100, 100));
            player.AddComponent(new Attack(20));

            Debug.Log("Creating Enemy");
            var enemy = new Entity("Enemy");

            enemy.AddComponent(new Health(50, 50));
            enemy.AddComponent(new Attack(10));

            // Create combat system
            Debug.Log("Creating Combat & Battle System");
            var combatSystem = new CombatSystem();
            var battleSystem = new BattleLoop(combatSystem);

            // Simulate combat
            Debug.Log("Starting Battle");
            battleSystem.StartBattle(player, enemy);
        }
    }
}