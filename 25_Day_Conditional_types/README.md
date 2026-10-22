# 30 Days Of TypeScript: Day 25 - Conditional Types & Distributive Conditionals

<div align="center">
  <p>[<< Day 24](../24_Day_Template_literal_types/24_day_template_literal_types.md) | [30 Days of TypeScript](../readMe.md) | [Day 26 >>](../26_Day_The_infer_keyword/26_day_the_infer_keyword.md)</p>
</div>

---

- [30 Days Of TypeScript: Day 25 - Conditional Types & Distributive Conditionals](#30-days-of-typescript-day-25---conditional-types-distributive-conditionals)
  - [📖 Overview](#-overview)
  - [🎯 Learning Objectives](#-learning-objectives)
  - [💡 Core Concepts & Deep Dive](#-core-concepts--deep-dive)
    - [1. Conditional Types (T extends U ? X : Y)](#1-conditional-types-t-extends-u-x-y-)
    - [2. Distributive Conditionals](#2-distributive-conditionals)
  - [💻 Runnable Lesson Demonstration](#-runnable-lesson-demonstration)
  - [⚠️ Common Pitfalls & Pro Tips](#️-common-pitfalls--pro-tips)
  - [🏋️ Day 25: Exercises](#️-day-25-exercises)
    - [Exercise: Level 1](#exercise-level-1)
    - [Exercise: Level 2](#exercise-level-2)
    - [Exercise: Level 3](#exercise-level-3)
  - [🎉 Congratulations](#-congratulations)

---

## 📖 Overview

Write conditional type branching using 'T extends U ? X : Y' and understand distributive conditional types over unions.

---

## 🎯 Learning Objectives

By the end of today, you will be able to:
- [ ] Master **Conditional Types (T extends U ? X : Y)**
- [ ] Master **Distributive Conditionals**
- [ ] Complete all Level 1, Level 2, and Level 3 exercises with automated tests passing (`npm test`).

---

## 💡 Core Concepts & Deep Dive


### 1. Conditional Types (T extends U ? X : Y)

Branching type logic that selects one type or another based on a subtype relationship.


### 2. Distributive Conditionals

When checking a naked type parameter 'T', unions automatically distribute: '(A | B) extends U' becomes '(A extends U) | (B extends U)'.


---

## 💻 Runnable Lesson Demonstration

Execute today's live code in your terminal:
```bash
npm run day:25
```

Here is the source code for today's lesson:
```typescript
// Day 25: Conditional Types & Distributive Conditionals
type IsString<T> = T extends string ? true : false;

type A = IsString<string>; // true
type B = IsString<number>; // false

// Distributive union filtering
type NonNull<T> = T extends null | undefined ? never : T;
type Clean = NonNull<string | null | number>; // string | number
console.log("Conditional types compiled successfully");

```

---

## ⚠️ Common Pitfalls & Pro Tips

> [!TIP]
> **Pro Tip**: In TypeScript, the compiler is your pair-programmer. Pay close attention to compiler diagnostic messages—they describe the exact shape mismatch.

> [!WARNING]
> **Common Pitfall**: Do not fall into the trap of using `any` to silence compiler warnings. Use `unknown` with type guards or write proper generic constraints!

---

## 🏋️ Day 25: Exercises

### Exercise: Level 1
1. Custom IsNumber<T> type returning boolean type

### Exercise: Level 2
1. Custom Diff<T, U> excluding types in U from T

### Exercise: Level 3
1. Custom Flatten<T> returning element type if array, or T if not

---

## 🧪 Verifying Your Work
Run the automated test for Day 25:
```bash
npx tsx 25_Day_Conditional_types/exercise.ts
```

Or verify all 30 days:
```bash
npm test
```

---

## 🎉 Congratulations

🌕 **You are amazing!** You have conquered **Day 25** of 30 Days of TypeScript. Keep the momentum going!

<div align="center">
  <p>[<< Day 24](../24_Day_Template_literal_types/24_day_template_literal_types.md) | [30 Days of TypeScript](../readMe.md) | [Day 26 >>](../26_Day_The_infer_keyword/26_day_the_infer_keyword.md)</p>
</div>
