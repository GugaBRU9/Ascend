using Ascend.Content.Definitions;
using UnityEngine;

namespace Ascend.Bootstrap
{
    public sealed class AppBootstrap : MonoBehaviour
    {
        [Header("Authored Config Assets")]
        [SerializeField] private AppBootstrapConfig bootstrapConfig;

        private void Awake()
        {
            if (bootstrapConfig == null)
            {
                Fail($"{nameof(AppBootstrap)} requires an assigned {nameof(AppBootstrapConfig)} asset.");
                return;
            }

            if (bootstrapConfig.BenchmarkDeviceProfile == null)
            {
                Fail($"{nameof(AppBootstrapConfig)} '{bootstrapConfig.name}' is missing a {nameof(BenchmarkDeviceProfile)} reference.");
                return;
            }

            GameDataCatalog gameDataCatalog = bootstrapConfig.GameDataCatalog;
            if (gameDataCatalog == null)
            {
                Fail($"{nameof(AppBootstrapConfig)} '{bootstrapConfig.name}' is missing a {nameof(GameDataCatalog)} reference.");
                return;
            }

            if (gameDataCatalog.CombatPrototype == null)
            {
                Fail($"{nameof(GameDataCatalog)} '{gameDataCatalog.name}' is missing a {nameof(CombatPrototypeConfig)} reference.");
                return;
            }

            if (gameDataCatalog.SessionFlow == null)
            {
                Fail($"{nameof(GameDataCatalog)} '{gameDataCatalog.name}' is missing a {nameof(SessionFlowConfig)} reference.");
                return;
            }

            int targetFrameRate = bootstrapConfig.BenchmarkDeviceProfile.TargetFrameRate;
            if (targetFrameRate <= 0)
            {
                Fail($"{nameof(BenchmarkDeviceProfile)} '{bootstrapConfig.BenchmarkDeviceProfile.name}' must define a positive targetFrameRate.");
                return;
            }

            Application.targetFrameRate = targetFrameRate;
        }

        private void Fail(string message)
        {
            Debug.LogError(message, this);
            enabled = false;
        }
    }
}
