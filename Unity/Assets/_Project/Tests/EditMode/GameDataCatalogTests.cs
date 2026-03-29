using Ascend.Content.Definitions;
using NUnit.Framework;
using UnityEditor;

namespace Ascend.Tests.EditMode
{
    public sealed class GameDataCatalogTests
    {
        private const string GameDataCatalogPath = "Assets/_Project/Content/Definitions/Assets/GameDataCatalog.asset";

        [Test]
        [Category("Smoke")]
        public void GameDataCatalog_references_combat_and_session_configs()
        {
            GameDataCatalog catalog = AssetDatabase.LoadAssetAtPath<GameDataCatalog>(GameDataCatalogPath);

            Assert.That(catalog, Is.Not.Null, $"Expected a game data catalog asset at '{GameDataCatalogPath}'.");
            Assert.That(catalog.CombatPrototype, Is.Not.Null, $"{nameof(GameDataCatalog)} must reference a {nameof(CombatPrototypeConfig)} asset.");
            Assert.That(catalog.SessionFlow, Is.Not.Null, $"{nameof(GameDataCatalog)} must reference a {nameof(SessionFlowConfig)} asset.");
        }
    }
}
