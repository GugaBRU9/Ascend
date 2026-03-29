using UnityEngine;

namespace Ascend.Content.Definitions
{
    public enum CombatFormationModel
    {
        FrontBackline = 0
    }

    [CreateAssetMenu(fileName = "CombatPrototypeConfig", menuName = "Ascend/Definitions/Combat Prototype Config")]
    public sealed class CombatPrototypeConfig : ScriptableObject
    {
        [SerializeField] private CombatFormationModel formationModel = CombatFormationModel.FrontBackline;
        [SerializeField] private int activeSkillSlots = 3;

        public CombatFormationModel FormationModel => formationModel;
        public int ActiveSkillSlots => activeSkillSlots;
    }
}
