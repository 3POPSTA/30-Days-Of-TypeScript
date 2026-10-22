# 30 Days Of TypeScript: Day 26 - The infer Keyword & Type Extraction

<div align="center">
  <p>[<< Day 25](../25_Day_Conditional_types/25_day_conditional_types.md) | [30 Days of TypeScript](../readMe.md) | [Day 27 >>](../27_Day_Utility_types_part_1/27_day_utility_types_part_1.md)</p>
</div>

---

- [30 Days Of TypeScript: Day 26 - The infer Keyword & Type Extraction](#30-days-of-typescript-day-26---the-infer-keyword-type-extraction)
  - [📖 Overview](#-overview)
  - [🎯 Learning Objectives](#-learning-objectives)
  - [💡 Core Concepts & Deep Dive](#-core-concepts--deep-dive)
    - [1. The infer Keyword](#1-the-infer-keyword)
    - [2. Unwrapping Promises & Functions](#2-unwrapping-promises-functions)
  - [💻 Runnable Lesson Demonstration](#-runnable-lesson-demonstration)
  - [⚠️ Common Pitfalls & Pro Tips](#️-common-pitfalls--pro-tips)
  - [🏋️ Day 26: Exercises](#️-day-26-exercises)
    - [Exercise: Level 1](#exercise-level-1)
    - [Exercise: Level 2](#exercise-level-2)
    - [Exercise: Level 3](#exercise-level-3)
  - [🎉 Congratulations](#-congratulations)

---

## 📖 Overview

Extract inner types using pattern matching and the 'infer' keyword inside conditional types.

---

## 🎯 Learning Objectives

By the end of today, you will be able to:
- [ ] Master **The infer Keyword**
- [ ] Master **Unwrapping Promises & Functions**
- [ ] Complete all Level 1, Level 2, and Level 3 exercises with automated tests passing (`npm test`).

---

## 💡 Core Concepts & Deep Dive


### 1. The infer Keyword

Declares a type variable to be extracted within the 'extends' clause of a conditional type.


### 2. Unwrapping Promises & Functions

Extract return types ('MyReturnType<T>'), resolved values ('Awaited<T>'), and constructor arguments.


---

## 💻 Runnable Lesson Demonstration

Execute today's live code in your terminal:
```bash
npm run day:26
```

Here is the source code for today's lesson:
```typescript
// Day 26: The infer Keyword & Type Extraction
type ReturnOf<T> = T extends (...args: any[]) => infer R ? R : never;

function computeArea(radius: number): number {
  return Math.PI * radius * radius;
}
type AreaType = ReturnOf<typeof computeArea>; // number

type UnpackPromise<T> = T extends Promise<infer U> ? U : T;
type Resolved = UnpackPromise<Promise<string>>; // string
console.log("infer patterns compiled successfully");

```

---

## ⚠️ Common Pitfalls & Pro Tips

> [!TIP]
> **Pro Tip**: In TypeScript, the compiler is your pair-programmer. Pay close attention to compiler diagnostic messages—they describe the exact shape mismatch.

> [!WARNING]
> **Common Pitfall**: Do not fall into the trap of using `any` to silence compiler warnings. Use `unknown` with type guards or write proper generic constraints!

---

## 🏋️ Day 26: Exercises

### Exercise: Level 1
1. Extract return type of arbitrary function using infer

### Exercise: Level 2
1. Unwrap Promise inner type using infer

### Exercise: Level 3
1. Extract first argument type of a function using infer

---

## 🧪 Verifying Your Work
Run the automated test for Day 26:
```bash
npx tsx 26_Day_The_infer_keyword/exercise.ts
```

Or verify all 30 days:
```bash
npm test
```

---

## 🎉 Congratulations

🌕 **You are amazing!** You have conquered **Day 26** of 30 Days of TypeScript. Keep the momentum going!

<div align="center">
  <p>[<< Day 25](../25_Day_Conditional_types/25_day_conditional_types.md) | [30 Days of TypeScript](../readMe.md) | [Day 27 >>](../27_Day_Utility_types_part_1/27_day_utility_types_part_1.md)</p>
</div>
