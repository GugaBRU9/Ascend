# Task 01-03 / Task 3 blocker

- Blocker: nenhum device Android esta conectado para o smoke `boot-shell` no device primario.
- Evidence:
  - `adb devices` retornou apenas `List of devices attached`.
  - `ADB_BIN=/home/gugabru9/Unity/Hub/Editor/6000.3.2f1/Editor/Data/PlaybackEngines/AndroidPlayer/SDK/platform-tools/adb bash scripts/profile-android-smoke.sh --scenario boot-shell` falhou com `No connected Android device detected in adb devices output.`
  - O build Android agora passa do erro anterior do script gerado e entra no pipeline IL2CPP/Bee; a tentativa foi interrompida sem APK final porque a validacao em device continuou bloqueada fisicamente.
- Next step:
  1. Conectar o `Samsung Galaxy A15` com depuracao USB liberada.
  2. Confirmar conectividade: `/home/gugabru9/Unity/Hub/Editor/6000.3.2f1/Editor/Data/PlaybackEngines/AndroidPlayer/SDK/platform-tools/adb devices`
  3. Rerodar:
     - `UNITY_EDITOR=/home/gugabru9/Unity/Hub/Editor/6000.3.2f1/Editor/Unity bash scripts/build-android-dev.sh`
     - `ADB_BIN=/home/gugabru9/Unity/Hub/Editor/6000.3.2f1/Editor/Data/PlaybackEngines/AndroidPlayer/SDK/platform-tools/adb bash scripts/profile-android-smoke.sh --scenario boot-shell --install`
