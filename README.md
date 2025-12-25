<p align="center">
  <img src="docs/pocket-tools-icon.png" alt="Pocket Tools App Icon" width="140"/>
</p>

<h1 align="center">Pocket Tools</h1>

<p align="center">
  <b>Smart tools for everyday needs.</b>
</p>

<p>
  Pocket Tools is a lightweight, offline-first mobile application built with <b>React Native</b>, 
  offering a collection of essential utilities such as calculators, converters, timers, and simulators — all in one place.
  <br/><br/>
  The app is designed to work <b>entirely offline</b>, ensuring speed, privacy, and reliability without requiring any backend services or user accounts.
</p>

<p align="center">
  <img src="docs/ui-overview.gif" alt="Pocket Tools UI Demo" width="800"/>
</p>

## 📦 APK Download

Pocket Tools is currently distributed as a **manual APK** for demonstration and testing purposes.

---

### 📱 Platform Support

- ✅ **Android** — Supported  
- ❌ **iOS** — Not supported yet  
- ❌ **Web** — Not supported  

> This application is built and tested **only on Android devices**.

---

### ⬇️ Download APK

You can download the latest Android APK from the link below:

👉 **Google Drive APK Link**  
`[PLACEHOLDER – ADD YOUR GOOGLE DRIVE LINK HERE]`

# 📚 Table of Contents

1. [📱 About the Application](#-about-the-application)
2. [🧩 Application Architecture](#-application-architecture)
3. [✨ Features](#-features)
4. [🚀 Getting Started](#-getting-started-with-the-app)
5. [🧭 How to Use the App](#-how-to-use-the-app)
6. [🎨 Design Philosophy](#-design-philosophy)
7. [🔮 Future Enhancements](#-future-enhancements)
8. [📄 Author](#-author)


# 📱 About the Application

**Pocket Tools** is a lightweight, offline-first mobile application that brings together a collection of essential everyday utilities in one clean, modern interface.

The app is designed for users who want **quick access to practical tools without relying on an internet connection**, user accounts, or background services. All computations and interactions happen directly on the device, ensuring speed, privacy, and reliability.

Pocket Tools focuses on:
- Providing commonly used utilities in a single app
- Offline functionality with zero backend dependency
- Fast, distraction-free user experience
- Clean and consistent modern UI design

The application includes tools such as:
- Calculator  
- Unit Converter  
- Timer & Stopwatch  
- BMI Calculator  
- Discount Calculator  
- Currency Converter (with offline fallback rates)  
- World Time  
- Investment Return Simulator  

## Design Philosophy

Pocket Tools follows a **minimal, abstract, and modern design language** with:
- A consistent color palette across all screens
- Soft “bubble” components for interactive elements
- Subtle neon-inspired accents for visual depth
- Clear separation between functionality and presentation

The goal is to make everyday tasks feel **simple, fast, and pleasant**, while keeping the app lightweight and easy to extend with new tools in the future.

<p align="center">
  <img src="docs/about.png" alt="Pocket Tools About Screen" width="400"/>
</p>

# 📐 Application Architecture

**Pocket Tools** is designed as a lightweight, **frontend-only mobile application** built with **React Native**, focusing on simplicity, performance, and offline usability.

Unlike traditional client–server systems, Pocket Tools does **not rely on a backend service**. All functionality runs locally on the device, making the app fast, reliable, and usable even without an internet connection.

---

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

---

## 🎨 UI & Theming Architecture

- A **global theme configuration** defines:
  - Primary and secondary colors
  - Neon accent colors
  - Typography and spacing rules
- All screens import styles from the theme to ensure **visual consistency**
- A reusable **Background component** provides the abstract geometric design across the app

---

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

---

## 🔄 State Management

- State is managed **locally per screen**
- No global state library (Redux, MobX) is used to keep complexity low
- This approach improves:
  - Maintainability
  - Debugging
  - Performance on low-end devices

---

## 🚀 Extensibility

Although Pocket Tools is currently frontend-only, the architecture allows future enhancements such as:

- Cloud sync for user preferences
- Optional authentication
- Persistent storage using local databases
- Backend APIs for real-time financial data

The modular design ensures these features can be added **without major refactoring**.

---

Pocket Tools prioritizes **clarity, usability, and reliability**, making it an ideal everyday utility app with a clean and scalable architecture.

# ✨ Features

**Pocket Tools** is a lightweight, offline-first utility application that bundles essential everyday tools into a single, clean, and modern mobile experience.  
Each tool is designed with simplicity, speed, and usability in mind.

---

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

---

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

---

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

---

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

---

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

---

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

---

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

---

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

---

## 🎨 Unified Design System
All tools share a consistent design language:
- Abstract geometric background
- Neon-accented press interactions
- Bubble-style cards and buttons
- Dark, eye-friendly color palette

---

Pocket Tools focuses on **speed, privacy, and usability** — delivering essential functionality without unnecessary complexity.

# 🚀 Getting Started with the App (Development Only)

> ⚠️ **Important**  
> This project is intended **for development and local testing purposes only**.  
> The app is **not production-ready**, **not published**, and **not optimized for store deployment**.

Follow **all steps in order**. This project is based on an **older React Native version**, so strict version alignment is critical.

---

## ✅ 1. Verified Working Environment

The following setup is **tested and confirmed** to work:

- **OS**: Ubuntu 22.04
- **Node.js**: 14.x
- **Java (JDK)**: 11
- **React Native**: 0.67.x
- **Android SDK**: API 31
- **Device**: Physical Android device (recommended)

---

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

---

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

---

## 🤖 4. Install Android Studio

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

## 📦 5. Install Required Android SDK Components

Open Android Studio → **More Actions → SDK Manager**

#### SDK Platforms
- ✅ Android **12 (API Level 31)**

#### SDK Tools
- ✅ Android SDK Platform-Tools
- ✅ Android SDK Build-Tools **31.0.0**
- ✅ Android SDK Tools

> Enable **Show Package Details** to select Build-Tools 31.0.0

---

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

---

## 📱 7. Connect an Android Device

1. Enable **Developer Options**
2. Enable **USB Debugging**
3. Connect device via USB

Verify:
```bash
adb devices
```

---

## 📥 8. Install Project Dependencies

From project root:

```bash
npm install
```

---

## 🛠️ 9. Mandatory Compatibility Fixes (Already Applied)

The following fixes are **already included in this repository**:

- `compileSdkVersion` / `targetSdkVersion` → **31**
- `android:exported="true"` added to `MainActivity`
- `react-native-screens` pinned to **3.13.1**
- `react-native-safe-area-context` pinned to **3.3.2**

⚠️ Do **not** upgrade these without careful planning.

---

## 🧹 10. Clean Android Build

```bash
cd android
./gradlew clean
cd ..
```

---

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

---

## ✅ 12. Expected Result

- App builds successfully
- APK installs on device
- App launches without native errors

---

## 🧪 13. Troubleshooting

**Native module error**
```bash
npx react-native run-android
```

**Gradle build issues**
```bash
cd android
./gradlew clean
./gradlew assembleDebug
```

**Metro connection issues**
```bash
adb reverse tcp:8081 tcp:8081
```

---

## 📌 Notes

- React Native **CLI** project (not Expo)
- Docker is **not suitable** for Android builds
- Physical device strongly recommended
- Emulator optional

---

## 📦 Project Status

- Development & testing only
- Android-only support
- Not published
- Actively evolving

---

Happy hacking 🚀

# 🧭 How to Use the App

Pocket Tools is designed to be intuitive, fast, and usable completely offline. Each tool is accessible from the home screen as a bubble-style tile.

<p align="center">
  <img src="docs/screenshots/home.png" alt="Pocket Tools Home Screen" width="300"/>
</p>

---

## 🧮 Calculator

A simple, fast calculator for everyday arithmetic.

**How to use:**
1. Tap numbers and operators on the keypad
2. Press **=** to evaluate
3. Use **DEL** to delete the last character
4. History appears above the keypad for quick reference

<p align="center">
  <img src="docs/screenshots/calculator.png" alt="Calculator" width="300"/>
</p>

---

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

<p align="center">
  <img src="docs/screenshots/unit_converter.png" alt="Unit Converter" width="300"/>
</p>

---

## ⏱️ Timer & Stopwatch

Track time precisely for workouts, tasks, or reminders.

**Stopwatch mode:**
- Start, pause, and reset
- Record lap times

**Timer mode:**
- Set minutes and seconds
- Countdown until zero

<p align="center">
  <img src="docs/screenshots/timer.png" alt="Timer & Stopwatch" width="300"/>
</p>

---

## ⚖️ BMI Calculator

Calculate Body Mass Index using height and weight.

**How to use:**
1. Enter height (cm)
2. Enter weight (kg)
3. Tap **Calculate**
4. View BMI value and category

<p align="center">
  <img src="docs/screenshots/bmi.png" alt="BMI Calculator" width="300"/>
</p>

---

## 💸 Discount Calculator

Quickly determine savings and final price.

**How to use:**
1. Enter original price
2. Enter discount percentage
3. Tap **Calculate**
4. View savings and final price

<p align="center">
  <img src="docs/screenshots/discount.png" alt="Discount Calculator" width="300"/>
</p>

---

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

<p align="center">
  <img src="docs/screenshots/currency.png" alt="Currency Converter" width="300"/>
</p>

---

## 🌍 World Clock

View current time across multiple regions.

**How to use:**
1. Select a timezone bubble
2. Time updates every second
3. Uses device clock with fixed offsets

<p align="center">
  <img src="docs/screenshots/world_clock.png" alt="World Clock" width="300"/>
</p>

---

## 📈 Investment Return Simulator

Estimate long-term investment growth.

**How to use:**
1. Enter initial investment
2. Enter annual return rate
3. Enter duration (years)
4. View projected returns

<p align="center">
  <img src="docs/screenshots/investment.png" alt="Investment Simulator" width="300"/>
</p>

---

## 🏠 Navigation Tips

- Use the **Home screen** to switch tools
- All tools are independent
- No login or internet required
- Designed for quick, one-hand usage

---

Pocket Tools prioritizes **clarity, speed, and offline reliability** for everyday scenarios.

# 🎨 Design Philosophy

Pocket Tools is designed with a clear focus on **clarity, consistency, and usability**, while maintaining a modern and abstract visual identity.  
The goal is not to overwhelm users with visuals, but to provide a calm, intuitive experience that makes everyday tools pleasant to use.

---

## 🧠 Core Principles

### 1. Simplicity First
- Each tool solves **one problem well**
- No unnecessary settings or configuration screens
- Minimal text, clear actions, predictable layouts

> The app should feel obvious to use — even without instructions.

---

### 2. Offline‑First Mindset
- Most tools work **without internet access**
- Where online data is used (e.g. Currency Converter), the app:
  - Clearly communicates limitations
  - Falls back to safe default values
- No login, no tracking, no hidden network dependencies

---

### 3. Consistent Interaction Patterns
Across the entire app:
- Bubble-style buttons and tiles
- Uniform press feedback (scale + glow)
- Consistent spacing, typography, and motion
- Shared color palette and component styles

This ensures users don’t need to “relearn” interactions between tools.

---

## 🎨 Visual Language

### Abstract & Modern
- Dark background to reduce eye strain
- Abstract geometric accents instead of literal illustrations
- Neon-inspired highlights to guide attention — not distract

### Glass / Bubble UI
- Semi-transparent surfaces
- Soft shadows and subtle depth
- Rounded shapes for a friendly, tactile feel

---

## 🎯 Color Philosophy

The color palette follows a **functional hierarchy**:

- **Primary Color**  
  Used for main actions (e.g. Calculate, Convert, Equals)

- **Secondary / Accent Colors**  
  Used for selection states, highlights, and emphasis

- **Muted Reds**  
  Reserved for destructive or reset actions (e.g. Clear, Reset, Delete)

- **Neutral Grays**  
  Backgrounds, separators, and secondary text

This makes actions easy to identify at a glance.

---

## 📐 Layout Decisions

- Content is kept within comfortable reach on mobile screens
- Frequently used controls are placed near the bottom
- Scroll is avoided where possible
- Large screens remain balanced using centered content and flexible spacing

---

## 🧩 Component Reuse

To maintain consistency:
- Shared theme configuration (`themes/`)
- Reusable background wrapper
- Common button and card styles
- Centralized color and spacing definitions

This also makes future expansion easier and safer.

---

## 🌱 Design for Growth

Pocket Tools is intentionally designed to scale:
- New tools can be added without redesigning the app
- Existing tools can evolve without breaking visual consistency
- The design system supports future animations, themes, and accessibility improvements

---

<p align="center">
  <img src="docs/screenshots/design-overview.png" alt="Design Overview" width="600"/>
</p>

---

**Pocket Tools aims to feel calm, capable, and reliable — a quiet companion for everyday tasks.**

# 🔮 Future Enhancements

Pocket Tools is designed as a **scalable and extensible utility platform**.  
While the current version focuses on essential everyday tools, several enhancements are planned or envisioned to improve functionality, usability, and reach — without compromising simplicity.

---

## 🧰 Feature Expansion

### 📊 Advanced Calculators
- Scientific calculator mode
- Loan / EMI calculator
- Savings & compound interest planner
- Tax and salary breakdown tools

---

### 🌍 Enhanced World Time
- True timezone support using IANA identifiers
- Automatic daylight saving detection
- Favorite locations pinning
- Map-based timezone selection

---

### 💱 Smarter Currency Converter
- Historical exchange rate view
- Percentage change indicators
- Favorite currency pairs
- Optional manual rate override for offline scenarios

---

## 🎨 Design & UX Improvements

### 🌈 Theming
- Optional light theme
- High-contrast accessibility theme
- User-selectable accent colors

### ✨ Motion & Feedback
- Micro-animations for transitions
- Smooth number roll animations
- Subtle haptic feedback for key actions

---

## ⚙️ Technical Improvements

### 🧩 Modular Architecture
- Better isolation of tools as independent modules
- Shared component library for buttons, cards, and inputs

### 🧪 Testing & Quality
- Unit tests for calculation logic
- UI snapshot testing
- Edge-case validation for numeric inputs

---

## ☁️ Optional Cloud Features (Opt-in)

> These features are **not planned for the core app**, but may be explored as optional additions.

- Cloud sync for preferences
- Cross-device state persistence
- User profiles (strictly optional, privacy-first)

---

## 🌐 Platform Expansion

- iOS build and testing
- Tablet-optimized layouts
- Desktop support via React Native Web

---

## 📦 Distribution & Release

- Play Store release
- App icon and splash polish
- Versioned release notes
- Automated CI builds

---

<p align="center">
  <img src="docs/screenshots/future-roadmap.png" alt="Future Roadmap" width="600"/>
</p>

---

Pocket Tools will continue to evolve **only where it adds real value** —  
keeping the app lightweight, respectful of user privacy, and genuinely useful.

# 👤 Author  
Developed by **Adnan**  
Software Developer & Robotics Engineer