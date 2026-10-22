# 30 Days Of TypeScript: Day 28 - Utility Types Masterclass (Part 2)

<div align="center">
  <p>[<< Day 27](../27_Day_Utility_types_part_1/27_day_utility_types_part_1.md) | [30 Days of TypeScript](../readMe.md) | [Day 29 >>](../29_Day_Async_and_error_handling/29_day_async_and_error_handling.md)</p>
</div>

---

- [30 Days Of TypeScript: Day 28 - Utility Types Masterclass (Part 2)](#30-days-of-typescript-day-28---utility-types-masterclass-part-2-)
  - [📖 Overview](#-overview)
  - [🎯 Learning Objectives](#-learning-objectives)
  - [💡 Core Concepts & Deep Dive](#-core-concepts--deep-dive)
    - [1. Exclude & Extract](#1-exclude-extract)
    - [2. NonNullable](#2-nonnullable)
    - [3. Parameters & ReturnType](#3-parameters-returntype)
  - [💻 Runnable Lesson Demonstration](#-runnable-lesson-demonstration)
  - [⚠️ Common Pitfalls & Pro Tips](#️-common-pitfalls--pro-tips)
  - [🏋️ Day 28: Exercises](#️-day-28-exercises)
    - [Exercise: Level 1](#exercise-level-1)
    - [Exercise: Level 2](#exercise-level-2)
    - [Exercise: Level 3](#exercise-level-3)
  - [🎉 Congratulations](#-congratulations)

---

## 📖 Overview

Master built-in union and function utility types: Exclude, Extract, NonNullable, ReturnType, Parameters, and InstanceType.

---

## 🎯 Learning Objectives

By the end of today, you will be able to:
- [ ] Master **Exclude & Extract**
- [ ] Master **NonNullable**
- [ ] Master **Parameters & ReturnType**
- [ ] Complete all Level 1, Level 2, and Level 3 exercises with automated tests passing (`npm test`).

---

## 💡 Core Concepts & Deep Dive


### 1. Exclude & Extract

'Exclude<T, U>' removes members from T that are assignable to U; 'Extract<T, U>' retains only matching members.


### 2. NonNullable

Strips 'null' and 'undefined' from a union type.


### 3. Parameters & ReturnType

Extract the tuple of argument types or the return type of any function.


---

## 💻 Runnable Lesson Demonstration

Execute today's live code in your terminal:
```bash
npm run day:28
```

Here is the source code for today's lesson:
```typescript
// Day 28: Utility Types Masterclass (Part 2)
type Status = "idle" | "loading" | "success" | "error";
type ActiveStatus = Exclude<Status, "idle">; // "loading" | "success" | "error"
type FinalStatus = Extract<Status, "success" | "error">; // "success" | "error"

type RawString = string | null | undefined;
type CleanString = NonNullable<RawString>; // string

console.log("Utility types (part 2) compiled successfully");

```

---

## ⚠️ Common Pitfalls & Pro Tips

> [!TIP]
> **Pro Tip**: In TypeScript, the compiler is your pair-programmer. Pay close attention to compiler diagnostic messages—they describe the exact shape mismatch.

> [!WARNING]
> **Common Pitfall**: Do not fall into the trap of using `any` to silence compiler warnings. Use `unknown` with type guards or write proper generic constraints!

---

## 🏋️ Day 28: Exercises

### Exercise: Level 1
1. Filter string | number union extracting only number using Extract

### Exercise: Level 2
1. Remove null/undefined using NonNullable array cleaner

### Exercise: Level 3
1. Higher-order wrapper using Parameters<F> and ReturnType<F> that measures execution time

---

## 🧪 Verifying Your Work
Run the automated test for Day 28:
```bash
npx tsx 28_Day_Utility_types_part_2/exercise.ts
```

Or verify all 30 days:
```bash
npm test
```

---

## 🎉 Congratulations

🌕 **You are amazing!** You have conquered **Day 28** of 30 Days of TypeScript. Keep the momentum going!

<div align="center">
  <p>[<< Day 27](../27_Day_Utility_types_part_1/27_day_utility_types_part_1.md) | [30 Days of TypeScript](../readMe.md) | [Day 29 >>](../29_Day_Async_and_error_handling/29_day_async_and_error_handling.md)</p>
</div>
