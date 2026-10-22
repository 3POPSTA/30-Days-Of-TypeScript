# 30 Days Of TypeScript: Day 15 - Interface vs Type & Declaration Merging

<div align="center">
  <p><a href="../14_Day_Interfaces/14_day_interfaces.md">&lt;&lt; Day 14</a> | <a href="../README.md">30 Days of TypeScript</a> | <a href="../16_Day_Classes/16_day_classes.md">Day 16 &gt;&gt;</a></p>
</div>

---

- [30 Days Of TypeScript: Day 15 - Interface vs Type & Declaration Merging](#30-days-of-typescript-day-15---interface-vs-type-declaration-merging)
  - [📖 Overview](#-overview)
  - [🎯 Learning Objectives](#-learning-objectives)
  - [💡 Core Concepts & Deep Dive](#-core-concepts--deep-dive)
    - [1. When to use Interface](#1-when-to-use-interface)
    - [2. When to use Type](#2-when-to-use-type)
    - [3. Declaration Merging](#3-declaration-merging)
  - [💻 Runnable Lesson Demonstration](#-runnable-lesson-demonstration)
  - [⚠️ Common Pitfalls & Pro Tips](#️-common-pitfalls--pro-tips)
  - [🏋️ Day 15: Exercises](#️-day-15-exercises)
    - [Exercise: Level 1](#exercise-level-1)
    - [Exercise: Level 2](#exercise-level-2)
    - [Exercise: Level 3](#exercise-level-3)
  - [🎉 Congratulations](#-congratulations)

---

## 📖 Overview

Understand the key architectural differences between interface and type alias, and leverage declaration merging.

---

## 🎯 Learning Objectives

By the end of today, you will be able to:
- [ ] Master **When to use Interface**
- [ ] Master **When to use Type**
- [ ] Master **Declaration Merging**
- [ ] Complete all Level 1, Level 2, and Level 3 exercises with automated tests passing (`npm test`).

---

## 💡 Core Concepts & Deep Dive


### 1. When to use Interface

Best for public APIs, OOP hierarchies, and extensible libraries due to declaration merging.


### 2. When to use Type

Best for unions, primitives, tuples, function signatures, and complex type gymnastics.


### 3. Declaration Merging

Two interfaces with the same name automatically combine their fields.


---

## 💻 Runnable Lesson Demonstration

Execute today's live code in your terminal:
```bash
npm run day:15
```

Here is the source code for today's lesson:
```typescript
// Day 15: Interface vs Type & Declaration Merging
// Declaration merging on interface
interface AppSettings {
  appName: string;
}
interface AppSettings {
  version: string; // Merged into AppSettings
}

const config: AppSettings = {
  appName: "Typescript Tutor",
  version: "1.0.0"
};
console.log("Merged Config:", config);

```

---

## ⚠️ Common Pitfalls & Pro Tips

> [!TIP]
> **Pro Tip**: In TypeScript, the compiler is your pair-programmer. Pay close attention to compiler diagnostic messages—they describe the exact shape mismatch.

> [!WARNING]
> **Common Pitfall**: Do not fall into the trap of using `any` to silence compiler warnings. Use `unknown` with type guards or write proper generic constraints!

---

## 🏋️ Day 15: Exercises

### Exercise: Level 1
1. Declare merged interface Customer and verify combined properties

### Exercise: Level 2
1. Compare union capability: create union type that cannot be expressed as an interface

### Exercise: Level 3
1. Augment express-like request payload interface with custom user session

---

## 🧪 Verifying Your Work
Run the automated test for Day 15:
```bash
npx tsx 15_Day_Interface_vs_type/exercise.ts
```

Or verify all 30 days:
```bash
npm test
```

---

## 🎉 Congratulations

🌕 **You are amazing!** You have conquered **Day 15** of 30 Days of TypeScript. Keep the momentum going!

<div align="center">
  <p><a href="../14_Day_Interfaces/14_day_interfaces.md">&lt;&lt; Day 14</a> | <a href="../README.md">30 Days of TypeScript</a> | <a href="../16_Day_Classes/16_day_classes.md">Day 16 &gt;&gt;</a></p>
</div>
