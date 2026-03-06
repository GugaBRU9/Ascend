using System;
using UnityEngine;
using System.IO;

namespace Ascend.Core
{
    [Serializable]
    public class IdData
    {
        public int CurrentId;
    }
    public static class IdManager
    {
        private static IdData data = new IdData { CurrentId = 0 };

        public static int GetNextId()
        {
            data.CurrentId++;
            return data.CurrentId; // Return default data if there's an error
        }
    }
}