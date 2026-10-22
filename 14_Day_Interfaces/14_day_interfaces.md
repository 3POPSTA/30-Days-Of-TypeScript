# 30 Days Of TypeScript: Day 14 - Interfaces & Inheritance

<div align="center">
  <p>[<< Day 13](../13_Day_Function_overloading/13_day_function_overloading.md) | [30 Days of TypeScript](../readMe.md) | [Day 15 >>](../15_Day_Interface_vs_type/15_day_interface_vs_type.md)</p>
</div>

---

- [30 Days Of TypeScript: Day 14 - Interfaces & Inheritance](#30-days-of-typescript-day-14---interfaces-inheritance)
  - [📖 Overview](#-overview)
  - [🎯 Learning Objectives](#-learning-objectives)
  - [💡 Core Concepts & Deep Dive](#-core-concepts--deep-dive)
    - [1. Interface Contracts](#1-interface-contracts)
    - [2. Extending Multiple Interfaces](#2-extending-multiple-interfaces)
  - [💻 Runnable Lesson Demonstration](#-runnable-lesson-demonstration)
  - [⚠️ Common Pitfalls & Pro Tips](#️-common-pitfalls--pro-tips)
  - [🏋️ Day 14: Exercises](#️-day-14-exercises)
    - [Exercise: Level 1](#exercise-level-1)
    - [Exercise: Level 2](#exercise-level-2)
    - [Exercise: Level 3](#exercise-level-3)
  - [🎉 Congratulations](#-congratulations)

---

## 📖 Overview

Define object and method contracts using interfaces, extend interfaces hierarchically, and compose multiple interfaces.

---

## 🎯 Learning Objectives

By the end of today, you will be able to:
- [ ] Master **Interface Contracts**
- [ ] Master **Extending Multiple Interfaces**
- [ ] Complete all Level 1, Level 2, and Level 3 exercises with automated tests passing (`npm test`).

---

## 💡 Core Concepts & Deep Dive


### 1. Interface Contracts

Interfaces specify the structural contract an object must satisfy without prescribing implementation.


### 2. Extending Multiple Interfaces

An interface can extend multiple parent interfaces simultaneously, assembling complex domain models.


---

## 💻 Runnable Lesson Demonstration

Execute today's live code in your terminal:
```bash
npm run day:14
```

Here is the source code for today's lesson:
```typescript
// Day 14: Interfaces & Inheritance
interface Vehicle {
  make: string;
  model: string;
}

interface ElectricVehicle extends Vehicle {
  batteryCapacityKWh: number;
  charge: () => void;
}

const tesla: ElectricVehicle = {
  make: "Tesla",
  model: "Model 3",
  batteryCapacityKWh: 75,
  charge: () => console.log("Charging...")
};
console.log("EV:", tesla);

```

---

## ⚠️ Common Pitfalls & Pro Tips

> [!TIP]
> **Pro Tip**: In TypeScript, the compiler is your pair-programmer. Pay close attention to compiler diagnostic messages—they describe the exact shape mismatch.

> [!WARNING]
> **Common Pitfall**: Do not fall into the trap of using `any` to silence compiler warnings. Use `unknown` with type guards or write proper generic constraints!

---

## 🏋️ Day 14: Exercises

### Exercise: Level 1
1. Define User & AdminUser interfaces using extends, check admin privilege

### Exercise: Level 2
1. Compose SmartPhone extending Phone ({ dial }), Camera ({ snap }), and Computer ({ compute })

### Exercise: Level 3
1. Define a Plugin interface with lifecycle methods { init, run, destroy }

---

## 🧪 Verifying Your Work
Run the automated test for Day 14:
```bash
npx tsx 14_Day_Interfaces/exercise.ts
```

Or verify all 30 days:
```bash
npm test
```

---

## 🎉 Congratulations

🌕 **You are amazing!** You have conquered **Day 14** of 30 Days of TypeScript. Keep the momentum going!

<div align="center">
  <p>[<< Day 13](../13_Day_Function_overloading/13_day_function_overloading.md) | [30 Days of TypeScript](../readMe.md) | [Day 15 >>](../15_Day_Interface_vs_type/15_day_interface_vs_type.md)</p>
</div>
