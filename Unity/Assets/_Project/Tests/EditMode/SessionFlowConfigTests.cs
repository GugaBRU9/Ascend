using System.Linq;
using Ascend.Content.Definitions;
using NUnit.Framework;
using UnityEditor;

namespace Ascend.Tests.EditMode
{
    public sealed class SessionFlowConfigTests
    {
        private const string SessionFlowConfigPath = "Assets/_Project/Content/Definitions/Assets/SessionFlowConfig.asset";

        [Test]
        [Category("Smoke")]
        public void SessionFlowConfig_matches_the_locked_slice_sequence()
        {
            SessionFlowConfig config = AssetDatabase.LoadAssetAtPath<SessionFlowConfig>(SessionFlowConfigPath);

            Assert.That(config, Is.Not.Null, $"Expected a session flow config asset at '{SessionFlowConfigPath}'.");
            Assert.That(config.CheckpointMode, Is.EqualTo(SessionCheckpointMode.BetweenNodesAndCombats));

            string[] nodeIds = config.FirstPlayableSequence.Select(node => node.NodeId).ToArray();

            CollectionAssert.AreEqual(
                new[]
                {
                    "tutorial-short",
                    "combat-01",
                    "combat-02",
                    "rest-event-01"
                },
                nodeIds);
        }
    }
}
