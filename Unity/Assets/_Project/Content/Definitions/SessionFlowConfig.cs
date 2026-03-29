using System;
using UnityEngine;

namespace Ascend.Content.Definitions
{
    public enum SessionCheckpointMode
    {
        BetweenNodesAndCombats = 0
    }

    public enum SessionSequenceNodeType
    {
        Tutorial = 0,
        Combat = 1,
        RestEvent = 2
    }

    [Serializable]
    public struct SessionSequenceNode
    {
        [SerializeField] private string nodeId;
        [SerializeField] private SessionSequenceNodeType nodeType;

        public SessionSequenceNode(string nodeId, SessionSequenceNodeType nodeType)
        {
            this.nodeId = nodeId;
            this.nodeType = nodeType;
        }

        public string NodeId => nodeId;
        public SessionSequenceNodeType NodeType => nodeType;
    }

    [CreateAssetMenu(fileName = "SessionFlowConfig", menuName = "Ascend/Definitions/Session Flow Config")]
    public sealed class SessionFlowConfig : ScriptableObject
    {
        [SerializeField] private SessionCheckpointMode checkpointMode = SessionCheckpointMode.BetweenNodesAndCombats;
        [SerializeField] private SessionSequenceNode[] firstPlayableSequence =
        {
            new SessionSequenceNode("tutorial-short", SessionSequenceNodeType.Tutorial),
            new SessionSequenceNode("combat-01", SessionSequenceNodeType.Combat),
            new SessionSequenceNode("combat-02", SessionSequenceNodeType.Combat),
            new SessionSequenceNode("rest-event-01", SessionSequenceNodeType.RestEvent)
        };

        public SessionCheckpointMode CheckpointMode => checkpointMode;
        public SessionSequenceNode[] FirstPlayableSequence => firstPlayableSequence;
    }
}
