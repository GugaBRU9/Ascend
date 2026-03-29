using UnityEngine;

namespace Ascend.Content.Definitions
{
    [CreateAssetMenu(fileName = "AppBootstrapConfig", menuName = "Ascend/Definitions/App Bootstrap Config")]
    public sealed class AppBootstrapConfig : ScriptableObject
    {
        [SerializeField] private BenchmarkDeviceProfile benchmarkDeviceProfile;
        [SerializeField] private GameDataCatalog gameDataCatalog;

        public BenchmarkDeviceProfile BenchmarkDeviceProfile => benchmarkDeviceProfile;
        public GameDataCatalog GameDataCatalog => gameDataCatalog;
    }
}
