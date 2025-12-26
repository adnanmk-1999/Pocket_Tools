<p align="center">
  <img src="docs/pocket-tools-icon.png" alt="Pocket Tools App Icon" width="140"/>
</p>

<h1 align="center">Pocket Tools</h1>

<p align="center">
  <b>Smart tools for everyday needs.</b>
</p>

<p>
  Pocket Tools is a lightweight mobile application built with <b>React Native</b>, 
  offering a collection of essential utilities such as calculators, converters, timers, and simulators — all in one place.
  <br/><br/>
  The app is designed to work <b>entirely offline</b>, ensuring speed, privacy, and reliability without requiring any backend services or user accounts.
</p>

<p align="center">
  <img src="docs/ui-overview.gif" alt="Pocket Tools UI Demo" width="800"/>
</p>

## 📦 APK Download

Pocket Tools is currently distributed as a **manual APK** for demonstration and testing purposes.


### 📱 Platform Support

- ✅ **Android** — Supported  
- ❌ **iOS** — Not supported yet  
- ❌ **Web** — Not supported  


### ⬇️ Download APK

You can download the latest Android APK from the link below:

👉 **Google Drive APK Link**  
`[PLACEHOLDER – ADD YOUR GOOGLE DRIVE LINK HERE]`

# 📚 Table of Contents

1. [📱 About the Application](#-about-the-application)
2. [🧩 Application Architecture](#-application-architecture)
3. [✨ Features](#-features)
4. [🚀 Getting Started with the development](#-getting-started-with-the-app-development-only)
5. [🧭 How to Use the App](#-how-to-use-the-app)
6. [🔮 Future Enhancements](#-future-enhancements)
7. [📄 Author](#-author)


# 📱 About the Application

**Pocket Tools** is a lightweight, offline-first mobile application that brings together a collection of essential everyday utilities in one clean, modern interface. The app is designed for users who want **quick access to practical tools without relying on an internet connection**, user accounts, or background services. All computations and interactions happen directly on the device, ensuring speed, privacy, and reliability.

The application includes tools such as:
- Calculator  
- Unit Converter  
- Timer & Stopwatch  
- BMI Calculator  
- Discount Calculator  
- Currency Converter (with offline fallback rates)  
- World Time  
- Investment Return Simulator  

# 📐 Application Architecture

**Pocket Tools** is a **frontend-only mobile application** built with **React Native**, focusing on simplicity, performance, and offline usability. Unlike traditional client–server systems, Pocket Tools does **not rely on a backend service**. All functionality runs locally on the device, making the app fast, reliable, and usable even without an internet connection.

## 🧱 High-Level Architecture

The application follows a **component-based architecture**:

- **React Native (JavaScript)** for cross-platform mobile development
- **Functional components + Hooks** for state and lifecycle management
- **Local state management** using `useState` and `useEffect`
- **Centralized theming system** for consistent UI/UX
- **React Navigation** for screen-based navigation

```
App Entry
 ├── Navigation (Stack / Tabs)
 │    ├── Home Screen
 │    ├── Calculator
 │    ├── Unit Converter
 │    ├── Timer & Stopwatch
 │    ├── BMI Calculator
 │    ├── Discount Calculator
 │    ├── Currency Converter
 │    └── World Clock
 ├── Shared Components
 │    ├── Background
 │    ├── Buttons / Tiles
 │    └── UI Utilities
 └── Theme & Styles
```

## 🔌 Offline-First Design

Pocket Tools is intentionally built to work **without a backend**:

- Calculations (BMI, discount, investment simulation) run locally
- Timers, stopwatches, and clocks use the device system clock
- Currency conversion:
  - Uses **daily exchange rates** when internet is available
  - Falls back to **embedded default rates** when offline

This design ensures:
- No account creation
- No data tracking
- No network dependency for core features


## 🚀 Extensibility

Although Pocket Tools is currently frontend-only, the architecture allows future enhancements such as:

- Cloud sync for user preferences
- Optional authentication
- Persistent storage using local databases
- Backend APIs for real-time financial data

The modular design ensures these features can be added **without major refactoring**.

# ✨ Features

**Pocket Tools** bundles essential everyday tools into a single, clean, and modern mobile experience. Each tool is designed with simplicity, speed, and usability in mind.


## 🧮 Calculator
A fast and intuitive calculator for daily arithmetic operations.

**Key capabilities:**
- Basic arithmetic operations (+, −, ×, ÷)
- Clean keypad optimized for one-hand usage
- Calculation history stacked above the keypad
- Clear (C) and delete (DEL) actions
- Visual feedback with neon press effects

<p align="center">
  <!-- Screenshot placeholder -->
  <img src="docs/screenshots/calculator.png" alt="Calculator Screen" width="300"/>
</p>


## 🔄 Unit Converter
Convert between common units quickly and accurately.

**Supported categories:**
- Length (meters, kilometers, centimeters)
- Temperature (Celsius, Fahrenheit)

**Features:**
- Segmented tabs for unit categories
- Bubble-style selectable units
- Instant conversion results
- Offline operation

<p align="center">
  <!-- Screenshot placeholder -->
  <img src="docs/screenshots/unit-converter.png" alt="Unit Converter Screen" width="300"/>
</p>


## ⏱️ Timer & Stopwatch
Track time precisely for workouts, cooking, or productivity.

**Stopwatch mode:**
- Start, pause, reset
- Lap tracking with history

**Timer mode:**
- Minute & second input
- Countdown with visual clarity
- Reset functionality

<p align="center">
  <!-- Screenshot placeholder -->
  <img src="docs/screenshots/timer-stopwatch.png" alt="Timer & Stopwatch Screen" width="300"/>
</p>


## ⚖️ BMI Calculator
Calculate Body Mass Index quickly using height and weight.

**Features:**
- Height (cm) and weight (kg) input
- Instant BMI calculation
- Automatic BMI category classification:
  - Underweight
  - Normal
  - Overweight
  - Obese

<p align="center">
  <!-- Screenshot placeholder -->
  <img src="docs/screenshots/bmi.png" alt="BMI Calculator Screen" width="300"/>
</p>


## 💸 Discount Calculator
Find out how much you save when discounts are applied.

**Features:**
- Original price input
- Discount percentage input
- Displays:
  - Amount saved
  - Final price after discount

<p align="center">
  <!-- Screenshot placeholder -->
  <img src="docs/screenshots/discount.png" alt="Discount Calculator Screen" width="300"/>
</p>


## 💱 Currency Converter
Convert currencies using daily reference rates.

**Highlights:**
- Uses European Central Bank daily exchange rates
- Offline fallback with cached default rates
- Clear offline warning when internet is unavailable
- Supports multiple international currencies

<p align="center">
  <!-- Screenshot placeholder -->
  <img src="docs/screenshots/currency.png" alt="Currency Converter Screen" width="300"/>
</p>


## 🌍 World Time
Check the current time across major global regions.

**Features:**
- Local time and multiple international timezones
- Fixed UTC offsets for reliability across devices
- Updates every second
- Clean bubble-based timezone selection

<p align="center">
  <!-- Screenshot placeholder -->
  <img src="docs/screenshots/world-time.png" alt="World Time Screen" width="300"/>
</p>


## 📈 Investment Return Simulator
Simulate long-term investment growth.

**Capabilities:**
- Initial investment input
- Monthly contribution
- Annual return rate
- Investment duration
- Final value estimation

<p align="center">
  <!-- Screenshot placeholder -->
  <img src="docs/screenshots/investment.png" alt="Investment Simulator Screen" width="300"/>
</p>


# 🚀 Getting Started with the App (Development Only)

Follow **all steps in order**. This project is based on an **older React Native version**, so strict version alignment is critical.


## ✅ 1. Verified Working Environment

The following setup is **tested and confirmed** to work:

- **OS**: Ubuntu 22.04
- **Node.js**: 14.x
- **Java (JDK)**: 11
- **React Native**: 0.67.x
- **Android SDK**: API 31
- **Device**: Physical Android device (recommended)

## 🧰 2. System Prerequisites

Update system and install required packages:

```bash
sudo apt update && sudo apt upgrade -y
sudo apt install -y curl git unzip zip openjdk-11-jdk
```

Verify Java:
```bash
java -version
```
Expected: **Java 11.x**


## 🟢 3. Install Node.js (Node 14)

This project **requires Node.js 14**.

```bash
curl -fsSL https://deb.nodesource.com/setup_14.x | sudo -E bash -
sudo apt install -y nodejs
```

Verify:
```bash
node -v
npm -v
```


## 🤖 4. Install Android Studio

Download Android Studio for Linux from snap store:

Install:
```bash
sudo snap install android-studio --classic
```

Launch once:
```bash
android-studio
```

Choose **Standard Installation**.


## 📦 5. Install Required Android SDK Components

Open Android Studio → **More Actions → SDK Manager**

#### SDK Platforms
- ✅ Android **12 (API Level 31)**

#### SDK Tools
- ✅ Android SDK Platform-Tools
- ✅ Android SDK Build-Tools **31.0.0**
- ✅ Android SDK Tools

> Enable **Show Package Details** to select Build-Tools 31.0.0


## 🔧 6. Set Android Environment Variables

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

## 📱 7. Connect an Android Device

1. Enable **Developer Options**
2. Enable **USB Debugging**
3. Connect device via USB

Verify:
```bash
adb devices
```

## 📥 8. Install Project Dependencies

From project root:

```bash
npm install
```

## 🧹 9. Clean Android Build

```bash
cd android
./gradlew clean
cd ..
```

## ▶️ 11. Run the Application

### Terminal 1 — Start Metro

```bash
npx react-native start
```

### Terminal 2 — Build & Install

```bash
adb reverse tcp:8081 tcp:8081
npx react-native run-android
```


## ✅ 12. Expected Result

- App builds successfully
- APK installs on device
- App launches without native errors

# 🧭 How to Use the App

Pocket Tools is designed to be intuitive, fast, and usable completely offline. Each tool is accessible from the home screen as a bubble-style tile.

## 🧮 Calculator

A simple, fast calculator for everyday arithmetic.

**How to use:**
1. Tap numbers and operators on the keypad
2. Press **=** to evaluate
3. Use **DEL** to delete the last character
4. History appears above the keypad for quick reference

## 📏 Unit Converter

Convert between common units without internet access.

**Supported categories:**
- Length (meters, kilometers, centimeters)
- Temperature (Celsius, Fahrenheit)

**How to use:**
1. Select a category tab
2. Enter a value
3. Choose source and target units
4. Tap **Convert**

## ⏱️ Timer & Stopwatch

Track time precisely for workouts, tasks, or reminders.

**Stopwatch mode:**
- Start, pause, and reset
- Record lap times

**Timer mode:**
- Set minutes and seconds
- Countdown until zero

## ⚖️ BMI Calculator

Calculate Body Mass Index using height and weight.

**How to use:**
1. Enter height (cm)
2. Enter weight (kg)
3. Tap **Calculate**
4. View BMI value and category

## 💸 Discount Calculator

Quickly determine savings and final price.

**How to use:**
1. Enter original price
2. Enter discount percentage
3. Tap **Calculate**
4. View savings and final price

## 💱 Currency Converter

Convert currencies using daily reference rates.

**Notes:**
- Uses ECB daily rates
- Works offline with fallback rates
- Shows warning when offline

**How to use:**
1. Enter amount
2. Select base currency
3. Select target currency
4. Tap **Convert**

## 🌍 World Clock

View current time across multiple regions.

**How to use:**
1. Select a timezone bubble
2. Time updates every second
3. Uses device clock with fixed offsets

## 📈 Investment Return Simulator

Estimate long-term investment growth.

**How to use:**
1. Enter initial investment
2. Enter annual return rate
3. Enter duration (years)
4. View projected returns

# 🔮 Future Enhancements

Pocket Tools is designed as a **scalable and extensible utility platform**.  
While the current version focuses on essential everyday tools, several enhancements are planned or envisioned to improve functionality, usability, and reach — without compromising simplicity.

## 📊 Advanced Calculators
- Scientific calculator mode
- Loan / EMI calculator
- Savings & compound interest planner
- Tax and salary breakdown tools

## 🌍 Enhanced World Time
- True timezone support using IANA identifiers
- Automatic daylight saving detection
- Favorite locations pinning
- Map-based timezone selection

## 💱 Smarter Currency Converter
- Historical exchange rate view
- Percentage change indicators
- Favorite currency pairs
- Optional manual rate override for offline scenarios

## 🌈 Theming
- Optional light theme
- High-contrast accessibility theme
- User-selectable accent colors


## 🌐 Platform Expansion

- iOS build and testing
- Tablet-optimized layouts
- Desktop support via React Native Web

## 📦 Distribution & Release

- Play Store release
- App icon and splash polish
- Versioned release notes
- Automated CI builds

Pocket Tools will continue to evolve **only where it adds real value** —  
keeping the app lightweight, respectful of user privacy, and genuinely useful.

# 👤 Author  
Developed by **Adnan**  
Software Developer & Robotics Engineer