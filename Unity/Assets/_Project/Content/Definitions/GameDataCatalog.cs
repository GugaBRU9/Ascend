using UnityEngine;

namespace Ascend.Content.Definitions
{
    [CreateAssetMenu(fileName = "GameDataCatalog", menuName = "Ascend/Definitions/Game Data Catalog")]
    public sealed class GameDataCatalog : ScriptableObject
    {
        [SerializeField] private CombatPrototypeConfig combatPrototype;
        [SerializeField] private SessionFlowConfig sessionFlow;

        public CombatPrototypeConfig CombatPrototype => combatPrototype;
        public SessionFlowConfig SessionFlow => sessionFlow;
    }
}
