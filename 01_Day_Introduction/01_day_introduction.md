# 30 Days Of TypeScript: Day 01 - Introduction & Getting Started

<div align="center">
  <p>[Home](../readMe.md) | [30 Days of TypeScript](../readMe.md) | [Day 2 >>](../02_Day_Primitive_types/02_day_primitive_types.md)</p>
</div>

---

- [30 Days Of TypeScript: Day 01 - Introduction & Getting Started](#30-days-of-typescript-day-01---introduction-getting-started)
  - [📖 Overview](#-overview)
  - [🎯 Learning Objectives](#-learning-objectives)
  - [💡 Core Concepts & Deep Dive](#-core-concepts--deep-dive)
    - [1. What is TypeScript?](#1-what-is-typescript-)
    - [2. The Transpilation Pipeline](#2-the-transpilation-pipeline)
    - [3. First Program & Tooling](#3-first-program-tooling)
  - [💻 Runnable Lesson Demonstration](#-runnable-lesson-demonstration)
  - [⚠️ Common Pitfalls & Pro Tips](#️-common-pitfalls--pro-tips)
  - [🏋️ Day 01: Exercises](#️-day-01-exercises)
    - [Exercise: Level 1](#exercise-level-1)
    - [Exercise: Level 2](#exercise-level-2)
    - [Exercise: Level 3](#exercise-level-3)
  - [🎉 Congratulations](#-congratulations)

---

## 📖 Overview

Welcome to 30 Days of TypeScript! Today we cover what TypeScript is, compiler architecture, installing tools, static vs dynamic typing, and writing your first strongly-typed code.

---

## 🎯 Learning Objectives

By the end of today, you will be able to:
- [ ] Master **What is TypeScript?**
- [ ] Master **The Transpilation Pipeline**
- [ ] Master **First Program & Tooling**
- [ ] Complete all Level 1, Level 2, and Level 3 exercises with automated tests passing (`npm test`).

---

## 💡 Core Concepts & Deep Dive


### 1. What is TypeScript?

TypeScript is a strongly typed superset of JavaScript developed by Microsoft. It adds compile-time types to prevent bugs before code ever reaches production.


### 2. The Transpilation Pipeline

The TypeScript compiler (`tsc`) parses TS code into an Abstract Syntax Tree (AST), validates types, and strips type annotations to emit clean, standard ECMAScript.


### 3. First Program & Tooling

Using `tsx` or `ts-node`, we execute TypeScript directly in the terminal without manual bundling steps.


---

## 💻 Runnable Lesson Demonstration

Execute today's live code in your terminal:
```bash
npm run day:01
```

Here is the source code for today's lesson:
```typescript
// Day 01: Introduction & Getting Started
console.log("Welcome to 30 Days of TypeScript!");

// 1. Static Typing vs JavaScript Dynamic Coercion
const language: string = "TypeScript";
const version: number = 5.7;
const isAwesome: boolean = true;

console.log(`Learning ${language} v${version}. Is it awesome? ${isAwesome}`);

// 2. Transpilation & Compiler Protection
function greet(learner: string, day: number): string {
  return `Hello, ${learner}! Welcome to Day ${day.toString().padStart(2, "0")} of 30 Days of TypeScript.`;
}

console.log(greet("Developer", 1));

// 3. Catching Bugs at Compile-Time
// In plain JavaScript, "5" - 3 is 2, but "5" + 3 is "53".
// TypeScript ensures parameters are strictly typed:
function addNumbers(a: number, b: number): number {
  return a + b;
}

console.log("Sum 15 + 27 =", addNumbers(15, 27));

```

---

## ⚠️ Common Pitfalls & Pro Tips

> [!TIP]
> **Pro Tip**: In TypeScript, the compiler is your pair-programmer. Pay close attention to compiler diagnostic messages—they describe the exact shape mismatch.

> [!WARNING]
> **Common Pitfall**: Do not fall into the trap of using `any` to silence compiler warnings. Use `unknown` with type guards or write proper generic constraints!

---

## 🏋️ Day 01: Exercises

### Exercise: Level 1
1. Declare a string variable 'learner' and return greeting 'Hello, <learner>!'

### Exercise: Level 2
1. Calculate rectangle area given width and height as positive numbers

### Exercise: Level 3
1. Generate an environment system report object { platform: string, isTypeScript: boolean, day: number }

---

## 🧪 Verifying Your Work
Run the automated test for Day 01:
```bash
npx tsx 01_Day_Introduction/exercise.ts
```

Or verify all 30 days:
```bash
npm test
```

---

## 🎉 Congratulations

🌕 **You are amazing!** You have conquered **Day 01** of 30 Days of TypeScript. Keep the momentum going!

<div align="center">
  <p>[Home](../readMe.md) | [30 Days of TypeScript](../readMe.md) | [Day 2 >>](../02_Day_Primitive_types/02_day_primitive_types.md)</p>
</div>
