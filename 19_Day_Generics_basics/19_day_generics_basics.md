# 30 Days Of TypeScript: Day 19 - Generics: Functions, Interfaces & Types

<div align="center">
  <p>[<< Day 18](../18_Day_Enums/18_day_enums.md) | [30 Days of TypeScript](../readMe.md) | [Day 20 >>](../20_Day_Generics_constraints/20_day_generics_constraints.md)</p>
</div>

---

- [30 Days Of TypeScript: Day 19 - Generics: Functions, Interfaces & Types](#30-days-of-typescript-day-19---generics-functions-interfaces-types)
  - [📖 Overview](#-overview)
  - [🎯 Learning Objectives](#-learning-objectives)
  - [💡 Core Concepts & Deep Dive](#-core-concepts--deep-dive)
    - [1. What is a Generic?](#1-what-is-a-generic-)
    - [2. Generic Functions](#2-generic-functions)
    - [3. Generic Interfaces & Envelope Types](#3-generic-interfaces-envelope-types)
  - [💻 Runnable Lesson Demonstration](#-runnable-lesson-demonstration)
  - [⚠️ Common Pitfalls & Pro Tips](#️-common-pitfalls--pro-tips)
  - [🏋️ Day 19: Exercises](#️-day-19-exercises)
    - [Exercise: Level 1](#exercise-level-1)
    - [Exercise: Level 2](#exercise-level-2)
    - [Exercise: Level 3](#exercise-level-3)
  - [🎉 Congratulations](#-congratulations)

---

## 📖 Overview

Unlock TypeScript's superpower: Generics. Write flexible, reusable code while retaining full static type safety.

---

## 🎯 Learning Objectives

By the end of today, you will be able to:
- [ ] Master **What is a Generic?**
- [ ] Master **Generic Functions**
- [ ] Master **Generic Interfaces & Envelope Types**
- [ ] Complete all Level 1, Level 2, and Level 3 exercises with automated tests passing (`npm test`).

---

## 💡 Core Concepts & Deep Dive


### 1. What is a Generic?

A type variable (e.g. <T>) that acts as a placeholder for types provided by callers.


### 2. Generic Functions

Functions that accept type arguments: 'function identity<T>(arg: T): T'.


### 3. Generic Interfaces & Envelope Types

Commonly used for API envelopes: 'interface ApiResponse<T> { data: T; status: number }'.


---

## 💻 Runnable Lesson Demonstration

Execute today's live code in your terminal:
```bash
npm run day:19
```

Here is the source code for today's lesson:
```typescript
// Day 19: Generics: Functions, Interfaces & Types
function identity<T>(value: T): T {
  return value;
}

const str = identity("TypeScript"); // Inferred as string
const num = identity(42);           // Inferred as number

interface Box<T> {
  content: T;
}
const numBox: Box<number> = { content: 100 };
console.log("Box:", numBox);

```

---

## ⚠️ Common Pitfalls & Pro Tips

> [!TIP]
> **Pro Tip**: In TypeScript, the compiler is your pair-programmer. Pay close attention to compiler diagnostic messages—they describe the exact shape mismatch.

> [!WARNING]
> **Common Pitfall**: Do not fall into the trap of using `any` to silence compiler warnings. Use `unknown` with type guards or write proper generic constraints!

---

## 🏋️ Day 19: Exercises

### Exercise: Level 1
1. Generic wrapInArray<T>(item: T): T[]

### Exercise: Level 2
1. Generic ApiResponse<T> envelope constructor returning { success: true, data: T }

### Exercise: Level 3
1. Generic Stack<T> class with push, pop, peek, and size methods

---

## 🧪 Verifying Your Work
Run the automated test for Day 19:
```bash
npx tsx 19_Day_Generics_basics/exercise.ts
```

Or verify all 30 days:
```bash
npm test
```

---

## 🎉 Congratulations

🌕 **You are amazing!** You have conquered **Day 19** of 30 Days of TypeScript. Keep the momentum going!

<div align="center">
  <p>[<< Day 18](../18_Day_Enums/18_day_enums.md) | [30 Days of TypeScript](../readMe.md) | [Day 20 >>](../20_Day_Generics_constraints/20_day_generics_constraints.md)</p>
</div>
