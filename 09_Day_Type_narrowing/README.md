# 30 Days Of TypeScript: Day 09 - Type Narrowing & Control Flow Analysis

<div align="center">
  <p>[<< Day 8](../08_Day_Unions_and_literals/08_day_unions_and_literals.md) | [30 Days of TypeScript](../readMe.md) | [Day 10 >>](../10_Day_Type_predicates/10_day_type_predicates.md)</p>
</div>

---

- [30 Days Of TypeScript: Day 09 - Type Narrowing & Control Flow Analysis](#30-days-of-typescript-day-09---type-narrowing-control-flow-analysis)
  - [📖 Overview](#-overview)
  - [🎯 Learning Objectives](#-learning-objectives)
  - [💡 Core Concepts & Deep Dive](#-core-concepts--deep-dive)
    - [1. Control Flow Analysis (CFA)](#1-control-flow-analysis-cfa-)
    - [2. typeof and instanceof](#2-typeof-and-instanceof)
    - [3. in Operator](#3-in-operator)
  - [💻 Runnable Lesson Demonstration](#-runnable-lesson-demonstration)
  - [⚠️ Common Pitfalls & Pro Tips](#️-common-pitfalls--pro-tips)
  - [🏋️ Day 09: Exercises](#️-day-09-exercises)
    - [Exercise: Level 1](#exercise-level-1)
    - [Exercise: Level 2](#exercise-level-2)
    - [Exercise: Level 3](#exercise-level-3)
  - [🎉 Congratulations](#-congratulations)

---

## 📖 Overview

Discover how TypeScript's Control Flow Analysis (CFA) tracks conditionals (typeof, instanceof, in, truthiness) to narrow broader types into specific types.

---

## 🎯 Learning Objectives

By the end of today, you will be able to:
- [ ] Master **Control Flow Analysis (CFA)**
- [ ] Master **typeof and instanceof**
- [ ] Master **in Operator**
- [ ] Complete all Level 1, Level 2, and Level 3 exercises with automated tests passing (`npm test`).

---

## 💡 Core Concepts & Deep Dive


### 1. Control Flow Analysis (CFA)

TypeScript analyzes the execution path and eliminates types inside conditional blocks.


### 2. typeof and instanceof

'typeof' narrows primitives; 'instanceof' narrows class instances like Error, Date, or RegExp.


### 3. in Operator

'"prop" in obj' narrows unions of object shapes by testing property existence.


---

## 💻 Runnable Lesson Demonstration

Execute today's live code in your terminal:
```bash
npm run day:09
```

Here is the source code for today's lesson:
```typescript
// Day 09: Type Narrowing & Control Flow Analysis
function formatInput(val: string | number | Date): string {
  if (typeof val === "string") {
    return val.trim();
  }
  if (typeof val === "number") {
    return val.toFixed(2);
  }
  if (val instanceof Date) {
    return val.toISOString();
  }
  return "Unknown";
}

console.log(formatInput(123.456));
console.log(formatInput("   TypeScript   "));

```

---

## ⚠️ Common Pitfalls & Pro Tips

> [!TIP]
> **Pro Tip**: In TypeScript, the compiler is your pair-programmer. Pay close attention to compiler diagnostic messages—they describe the exact shape mismatch.

> [!WARNING]
> **Common Pitfall**: Do not fall into the trap of using `any` to silence compiler warnings. Use `unknown` with type guards or write proper generic constraints!

---

## 🏋️ Day 09: Exercises

### Exercise: Level 1
1. Safely get string length or number value: string -> length, number -> itself

### Exercise: Level 2
1. Format Date | string | number into a timestamp in milliseconds

### Exercise: Level 3
1. Distinguish Fish ({ swim: () => void }) vs Bird ({ fly: () => void }) using 'in' operator

---

## 🧪 Verifying Your Work
Run the automated test for Day 09:
```bash
npx tsx 09_Day_Type_narrowing/exercise.ts
```

Or verify all 30 days:
```bash
npm test
```

---

## 🎉 Congratulations

🌕 **You are amazing!** You have conquered **Day 09** of 30 Days of TypeScript. Keep the momentum going!

<div align="center">
  <p>[<< Day 8](../08_Day_Unions_and_literals/08_day_unions_and_literals.md) | [30 Days of TypeScript](../readMe.md) | [Day 10 >>](../10_Day_Type_predicates/10_day_type_predicates.md)</p>
</div>
