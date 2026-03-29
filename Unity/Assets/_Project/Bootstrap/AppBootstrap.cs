using UnityEngine;

namespace Ascend.Bootstrap
{
    public sealed class AppBootstrap : MonoBehaviour
    {
        private const string AppBootstrapConfigTypeName = "AppBootstrapConfig";
        private const string GameDataCatalogTypeName = "GameDataCatalog";

        [Header("Authored Config Assets")]
        [SerializeField] private ScriptableObject bootstrapConfigAsset;

        private void Awake()
        {
            if (bootstrapConfigAsset == null)
            {
                Debug.LogWarning(
                    $"{nameof(AppBootstrap)} is waiting for an authored {AppBootstrapConfigTypeName} asset that resolves the root {GameDataCatalogTypeName}.",
                    this);
            }
        }
    }
}
