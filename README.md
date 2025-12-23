# My First Mobile App (React Native)

This repository contains a **React Native CLI** application.

The app is **not published yet**. The instructions below explain **exactly how to set up the environment and run the app locally**, based on a fully verified working setup.

---

## 🚀 Getting Started with the App

Follow **all steps in order**. This project is based on an **older React Native version**, so version alignment is critical.

---

### ✅ 1. Verified Working Environment

This setup is confirmed to work:

- **OS**: Ubuntu 22.04
- **Node.js**: 14.x
- **Java (JDK)**: 11
- **React Native**: 0.67.x
- **Android SDK**: API 31
- **Device**: Physical Android device (recommended)

---

### 🧰 2. System Prerequisites

Update system and install required packages:

```bash
sudo apt update && sudo apt upgrade -y
sudo apt install -y curl git unzip zip openjdk-11-jdk
```

Verify Java:
```bash
java -version
```
You should see **Java 11.x**.

---

### 🟢 3. Install Node.js (Node 14)

This project **requires Node 14**.

```bash
curl -fsSL https://deb.nodesource.com/setup_14.x | sudo -E bash -
sudo apt install -y nodejs
```

Verify:
```bash
node -v
npm -v
```

---

### 🤖 4. Install Android Studio

Download Android Studio for Linux from:
https://developer.android.com/studio

Install:
```bash
sudo dpkg -i android-studio-*.deb
sudo apt --fix-broken install
```

Launch once:
```bash
android-studio
```

Choose **Standard Installation**.

---

### 📦 5. Install Required Android SDK Components

Open Android Studio → **More Actions → SDK Manager**

#### SDK Platforms
- ✅ Android **12 (API Level 31)**

#### SDK Tools
- ✅ Android SDK Platform-Tools
- ✅ Android SDK Build-Tools **31.0.0**
- ✅ Android SDK Tools

> Enable **Show Package Details** to see Build-Tools 31.0.0

---

### 🔧 6. Set Android Environment Variables

Add to `~/.bashrc`:

```bash
export ANDROID_HOME=$HOME/Android/Sdk
export PATH=$PATH:$ANDROID_HOME/platform-tools
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/tools/bin
```

Reload:
```bash
source ~/.bashrc
```

Verify:
```bash
adb version
```

---

### 📱 7. Connect an Android Device

1. Enable **Developer Options** on the phone
2. Enable **USB Debugging**
3. Connect the device via USB

Verify:
```bash
adb devices
```

The device should appear as `device`.

---

### 📥 8. Install Project Dependencies

From the project root:

```bash
npm install
```

---

### 🛠️ 9. Mandatory Compatibility Fixes (Already Applied)

The following fixes are **already included in this repository** and are required for Android 12 compatibility:

- `compileSdkVersion` and `targetSdkVersion` set to **31**
- `android:exported="true"` added to `MainActivity`
- `react-native-screens` pinned to **3.13.1**
- `react-native-safe-area-context` pinned to **3.3.2**

Do **not** upgrade these versions unless planned carefully.

---

### 🧹 10. Clean the Android Build

```bash
cd android
./gradlew clean
cd ..
```

---

### ▶️ 11. Run the Application Locally

#### Terminal 1 — Start Metro Bundler

```bash
npx react-native start
```

Leave this running.

---

#### Terminal 2 — Build & Install App on Device

```bash
adb reverse tcp:8081 tcp:8081
npx react-native run-android
```

---

### ✅ 12. Expected Result

- App builds successfully
- APK installs on the connected device
- App launches without native errors

---

### 🧪 13. Troubleshooting

**Native module error** → Rebuild the app:
```bash
npx react-native run-android
```

**Gradle errors after changes**:
```bash
cd android
./gradlew clean
./gradlew assembleDebug
```

**Metro connection issues**:
```bash
adb reverse tcp:8081 tcp:8081
```

---

### 📌 Notes

- This app uses **React Native CLI**, not Expo
- Docker is **not suitable** for Android device builds
- Physical Android device is recommended
- Emulator is optional but not required

---

### 📦 Project Status

- Runs locally on Android
- Not published yet
- Ready for feature testing and authentication validation

---

Happy hacking 🚀
