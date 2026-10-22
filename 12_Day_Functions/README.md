# 30 Days Of TypeScript: Day 12 - Functions, Parameters, Rest & Optional

<div align="center">
  <p><a href="../11_Day_Discriminated_unions/11_day_discriminated_unions.md">&lt;&lt; Day 11</a> | <a href="../README.md">30 Days of TypeScript</a> | <a href="../13_Day_Function_overloading/13_day_function_overloading.md">Day 13 &gt;&gt;</a></p>
</div>

---

- [30 Days Of TypeScript: Day 12 - Functions, Parameters, Rest & Optional](#30-days-of-typescript-day-12---functions-parameters-rest-optional)
  - [📖 Overview](#-overview)
  - [🎯 Learning Objectives](#-learning-objectives)
  - [💡 Core Concepts & Deep Dive](#-core-concepts--deep-dive)
    - [1. Function Signatures](#1-function-signatures)
    - [2. Rest Parameters](#2-rest-parameters)
    - [3. Callback Typing](#3-callback-typing)
  - [💻 Runnable Lesson Demonstration](#-runnable-lesson-demonstration)
  - [⚠️ Common Pitfalls & Pro Tips](#️-common-pitfalls--pro-tips)
  - [🏋️ Day 12: Exercises](#️-day-12-exercises)
    - [Exercise: Level 1](#exercise-level-1)
    - [Exercise: Level 2](#exercise-level-2)
    - [Exercise: Level 3](#exercise-level-3)
  - [🎉 Congratulations](#-congratulations)

---

## 📖 Overview

Write robust functions with typed parameters, optional arguments, default values, rest parameters, and typed callback handlers.

---

## 🎯 Learning Objectives

By the end of today, you will be able to:
- [ ] Master **Function Signatures**
- [ ] Master **Rest Parameters**
- [ ] Master **Callback Typing**
- [ ] Complete all Level 1, Level 2, and Level 3 exercises with automated tests passing (`npm test`).

---

## 💡 Core Concepts & Deep Dive


### 1. Function Signatures

Explicitly annotating parameters and return types prevents unintended returns and invalid callers.


### 2. Rest Parameters

Gather any number of trailing arguments into a typed array: '...nums: number[]'.


### 3. Callback Typing

Type higher-order callbacks: '(item: T, index: number) => boolean'.


---

## 💻 Runnable Lesson Demonstration

Execute today's live code in your terminal:
```bash
npm run day:12
```

Here is the source code for today's lesson:
```typescript
// Day 12: Functions, Parameters, Rest & Optional
function createGreeting(name: string, title: string = "Developer", salutation?: string): string {
  const prefix = salutation ? `${salutation} ` : "";
  return `${prefix}${title} ${name}`;
}

console.log(createGreeting("Ada", "Architect", "Welcome"));

// Variadic rest parameter
function sumAll(...numbers: number[]): number {
  return numbers.reduce((a, b) => a + b, 0);
}
console.log("Sum all:", sumAll(1, 2, 3, 4, 5));

```

---

## ⚠️ Common Pitfalls & Pro Tips

> [!TIP]
> **Pro Tip**: In TypeScript, the compiler is your pair-programmer. Pay close attention to compiler diagnostic messages—they describe the exact shape mismatch.

> [!WARNING]
> **Common Pitfall**: Do not fall into the trap of using `any` to silence compiler warnings. Use `unknown` with type guards or write proper generic constraints!

---

## 🏋️ Day 12: Exercises

### Exercise: Level 1
1. Write a greeting function with optional prefix and default role 'User'

### Exercise: Level 2
1. Calculate average of variadic rest numbers: avgAll(...nums: number[]): number

### Exercise: Level 3
1. Higher-order pipe utility: pipe(x: number, ...fns: ((n: number) => number)[]): number

---

## 🧪 Verifying Your Work
Run the automated test for Day 12:
```bash
npx tsx 12_Day_Functions/exercise.ts
```

Or verify all 30 days:
```bash
npm test
```

---

## 🎉 Congratulations

🌕 **You are amazing!** You have conquered **Day 12** of 30 Days of TypeScript. Keep the momentum going!

<div align="center">
  <p><a href="../11_Day_Discriminated_unions/11_day_discriminated_unions.md">&lt;&lt; Day 11</a> | <a href="../README.md">30 Days of TypeScript</a> | <a href="../13_Day_Function_overloading/13_day_function_overloading.md">Day 13 &gt;&gt;</a></p>
</div>
