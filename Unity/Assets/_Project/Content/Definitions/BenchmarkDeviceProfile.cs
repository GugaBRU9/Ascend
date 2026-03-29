using UnityEngine;

namespace Ascend.Content.Definitions
{
    [CreateAssetMenu(fileName = "BenchmarkDeviceProfile", menuName = "Ascend/Definitions/Benchmark Device Profile")]
    public sealed class BenchmarkDeviceProfile : ScriptableObject
    {
        [SerializeField] private string primaryDeviceName = "Samsung Galaxy A15";
        [SerializeField] private string secondarySmokeDeviceName = "Samsung Galaxy A10";
        [SerializeField] private int targetFrameRate = 30;
        [SerializeField] private string[] profilingScenarios = { "boot-shell", "hud-idle", "combat-smoke" };

        public string PrimaryDeviceName => primaryDeviceName;
        public string SecondarySmokeDeviceName => secondarySmokeDeviceName;
        public int TargetFrameRate => targetFrameRate;
        public string[] ProfilingScenarios => profilingScenarios;
    }
}
