# 30 Days Of TypeScript: Day 20 - Generics Constraints & keyof Operator

<div align="center">
  <p>[<< Day 19](../19_Day_Generics_basics/19_day_generics_basics.md) | [30 Days of TypeScript](../readMe.md) | [Day 21 >>](../21_Day_Generic_classes/21_day_generic_classes.md)</p>
</div>

---

- [30 Days Of TypeScript: Day 20 - Generics Constraints & keyof Operator](#30-days-of-typescript-day-20---generics-constraints-keyof-operator)
  - [📖 Overview](#-overview)
  - [🎯 Learning Objectives](#-learning-objectives)
  - [💡 Core Concepts & Deep Dive](#-core-concepts--deep-dive)
    - [1. Generic Constraints (T extends U)](#1-generic-constraints-t-extends-u-)
    - [2. Using keyof with Constraints](#2-using-keyof-with-constraints)
  - [💻 Runnable Lesson Demonstration](#-runnable-lesson-demonstration)
  - [⚠️ Common Pitfalls & Pro Tips](#️-common-pitfalls--pro-tips)
  - [🏋️ Day 20: Exercises](#️-day-20-exercises)
    - [Exercise: Level 1](#exercise-level-1)
    - [Exercise: Level 2](#exercise-level-2)
    - [Exercise: Level 3](#exercise-level-3)
  - [🎉 Congratulations](#-congratulations)

---

## 📖 Overview

Constrain type parameters using 'extends', combine constraints with the 'keyof' operator, and guarantee property existence safely.

---

## 🎯 Learning Objectives

By the end of today, you will be able to:
- [ ] Master **Generic Constraints (T extends U)**
- [ ] Master **Using keyof with Constraints**
- [ ] Complete all Level 1, Level 2, and Level 3 exercises with automated tests passing (`npm test`).

---

## 💡 Core Concepts & Deep Dive


### 1. Generic Constraints (T extends U)

Restricts what types can be passed to a generic parameter (e.g. 'T extends { length: number }').


### 2. Using keyof with Constraints

'K extends keyof T' ensures K is guaranteed to be a valid key of object T.


---

## 💻 Runnable Lesson Demonstration

Execute today's live code in your terminal:
```bash
npm run day:20
```

Here is the source code for today's lesson:
```typescript
// Day 20: Generics Constraints & keyof Operator
function getLength<T extends { length: number }>(item: T): number {
  return item.length;
}

console.log("String length:", getLength("hello"));
console.log("Array length:", getLength([1, 2, 3, 4]));

// Type-safe property getter
function getProp<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}
const user = { name: "Grace", score: 95 };
console.log("User name:", getProp(user, "name"));

```

---

## ⚠️ Common Pitfalls & Pro Tips

> [!TIP]
> **Pro Tip**: In TypeScript, the compiler is your pair-programmer. Pay close attention to compiler diagnostic messages—they describe the exact shape mismatch.

> [!WARNING]
> **Common Pitfall**: Do not fall into the trap of using `any` to silence compiler warnings. Use `unknown` with type guards or write proper generic constraints!

---

## 🏋️ Day 20: Exercises

### Exercise: Level 1
1. Function logLength<T extends { length: number }>(x: T): number returning length

### Exercise: Level 2
1. Type-safe pluck<T, K extends keyof T>(array: T[], key: K): T[K][]

### Exercise: Level 3
1. Generic object patcher patchObject<T extends object>(target: T, patch: Partial<T>): T

---

## 🧪 Verifying Your Work
Run the automated test for Day 20:
```bash
npx tsx 20_Day_Generics_constraints/exercise.ts
```

Or verify all 30 days:
```bash
npm test
```

---

## 🎉 Congratulations

🌕 **You are amazing!** You have conquered **Day 20** of 30 Days of TypeScript. Keep the momentum going!

<div align="center">
  <p>[<< Day 19](../19_Day_Generics_basics/19_day_generics_basics.md) | [30 Days of TypeScript](../readMe.md) | [Day 21 >>](../21_Day_Generic_classes/21_day_generic_classes.md)</p>
</div>
