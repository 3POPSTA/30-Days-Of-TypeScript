# 30 Days Of TypeScript: Day 13 - Function Overloading & Signatures

<div align="center">
  <p>[<< Day 12](../12_Day_Functions/12_day_functions.md) | [30 Days of TypeScript](../readMe.md) | [Day 14 >>](../14_Day_Interfaces/14_day_interfaces.md)</p>
</div>

---

- [30 Days Of TypeScript: Day 13 - Function Overloading & Signatures](#30-days-of-typescript-day-13---function-overloading-signatures)
  - [📖 Overview](#-overview)
  - [🎯 Learning Objectives](#-learning-objectives)
  - [💡 Core Concepts & Deep Dive](#-core-concepts--deep-dive)
    - [1. Overload Signatures](#1-overload-signatures)
    - [2. Implementation Signature](#2-implementation-signature)
  - [💻 Runnable Lesson Demonstration](#-runnable-lesson-demonstration)
  - [⚠️ Common Pitfalls & Pro Tips](#️-common-pitfalls--pro-tips)
  - [🏋️ Day 13: Exercises](#️-day-13-exercises)
    - [Exercise: Level 1](#exercise-level-1)
    - [Exercise: Level 2](#exercise-level-2)
    - [Exercise: Level 3](#exercise-level-3)
  - [🎉 Congratulations](#-congratulations)

---

## 📖 Overview

Implement functions that return different types depending on their input arguments using overload signatures.

---

## 🎯 Learning Objectives

By the end of today, you will be able to:
- [ ] Master **Overload Signatures**
- [ ] Master **Implementation Signature**
- [ ] Complete all Level 1, Level 2, and Level 3 exercises with automated tests passing (`npm test`).

---

## 💡 Core Concepts & Deep Dive


### 1. Overload Signatures

List multiple caller-facing headers before the implementation to define allowable parameter combinations.


### 2. Implementation Signature

The single function body that implements all overloads using union types and narrowing.


---

## 💻 Runnable Lesson Demonstration

Execute today's live code in your terminal:
```bash
npm run day:13
```

Here is the source code for today's lesson:
```typescript
// Day 13: Function Overloading & Signatures
function parseValue(val: string): number;
function parseValue(val: number): string;
function parseValue(val: string | number): string | number {
  if (typeof val === "string") return parseFloat(val);
  return val.toString();
}

const num = parseValue("42.5"); // Inferred strictly as number
const str = parseValue(100);    // Inferred strictly as string
console.log("Parsed:", num, typeof num, str, typeof str);

```

---

## ⚠️ Common Pitfalls & Pro Tips

> [!TIP]
> **Pro Tip**: In TypeScript, the compiler is your pair-programmer. Pay close attention to compiler diagnostic messages—they describe the exact shape mismatch.

> [!WARNING]
> **Common Pitfall**: Do not fall into the trap of using `any` to silence compiler warnings. Use `unknown` with type guards or write proper generic constraints!

---

## 🏋️ Day 13: Exercises

### Exercise: Level 1
1. Overload function duplicate: duplicate(val: string): string; duplicate(val: number): number

### Exercise: Level 2
1. Overload makeDate: makeDate(timestamp: number): Date; makeDate(y: number, m: number, d: number): Date

### Exercise: Level 3
1. Overload query: query(selector: string): string; query(selector: string, all: true): string[]

---

## 🧪 Verifying Your Work
Run the automated test for Day 13:
```bash
npx tsx 13_Day_Function_overloading/exercise.ts
```

Or verify all 30 days:
```bash
npm test
```

---

## 🎉 Congratulations

🌕 **You are amazing!** You have conquered **Day 13** of 30 Days of TypeScript. Keep the momentum going!

<div align="center">
  <p>[<< Day 12](../12_Day_Functions/12_day_functions.md) | [30 Days of TypeScript](../readMe.md) | [Day 14 >>](../14_Day_Interfaces/14_day_interfaces.md)</p>
</div>
