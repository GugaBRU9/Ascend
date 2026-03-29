using Ascend.Content.Definitions;
using NUnit.Framework;
using UnityEditor;

namespace Ascend.Tests.EditMode
{
    public sealed class AppBootstrapConfigTests
    {
        private const string AppBootstrapConfigPath = "Assets/_Project/Content/Definitions/Assets/AppBootstrapConfig.asset";

        [Test]
        [Category("Smoke")]
        public void AppBootstrapConfig_links_benchmark_profile_and_game_data_catalog()
        {
            AppBootstrapConfig config = AssetDatabase.LoadAssetAtPath<AppBootstrapConfig>(AppBootstrapConfigPath);

            Assert.That(config, Is.Not.Null, $"Expected a bootstrap config asset at '{AppBootstrapConfigPath}'.");
            Assert.That(config.BenchmarkDeviceProfile, Is.Not.Null, "Bootstrap config must reference a benchmark profile.");
            Assert.That(config.GameDataCatalog, Is.Not.Null, "Bootstrap config must reference the root game data catalog.");
        }
    }
}
