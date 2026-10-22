# 30 Days Of TypeScript: Day 04 - Arrays, Readonly Arrays & Matrices

<div align="center">
  <p>[<< Day 3](../03_Day_Special_types/03_day_special_types.md) | [30 Days of TypeScript](../readMe.md) | [Day 5 >>](../05_Day_Tuples/05_day_tuples.md)</p>
</div>

---

- [30 Days Of TypeScript: Day 04 - Arrays, Readonly Arrays & Matrices](#30-days-of-typescript-day-04---arrays-readonly-arrays-matrices)
  - [📖 Overview](#-overview)
  - [🎯 Learning Objectives](#-learning-objectives)
  - [💡 Core Concepts & Deep Dive](#-core-concepts--deep-dive)
    - [1. Typed Array Syntaxes](#1-typed-array-syntaxes)
    - [2. Readonly Arrays](#2-readonly-arrays)
    - [3. Multidimensional Matrices](#3-multidimensional-matrices)
  - [💻 Runnable Lesson Demonstration](#-runnable-lesson-demonstration)
  - [⚠️ Common Pitfalls & Pro Tips](#️-common-pitfalls--pro-tips)
  - [🏋️ Day 04: Exercises](#️-day-04-exercises)
    - [Exercise: Level 1](#exercise-level-1)
    - [Exercise: Level 2](#exercise-level-2)
    - [Exercise: Level 3](#exercise-level-3)
  - [🎉 Congratulations](#-congratulations)

---

## 📖 Overview

Master typed arrays, generic Array<T> syntax, multidimensional arrays (matrices), and immutable readonly arrays.

---

## 🎯 Learning Objectives

By the end of today, you will be able to:
- [ ] Master **Typed Array Syntaxes**
- [ ] Master **Readonly Arrays**
- [ ] Master **Multidimensional Matrices**
- [ ] Complete all Level 1, Level 2, and Level 3 exercises with automated tests passing (`npm test`).

---

## 💡 Core Concepts & Deep Dive


### 1. Typed Array Syntaxes

Two equivalent ways: 'T[]' and 'Array<T>'. Both provide full static checking over elements.


### 2. Readonly Arrays

'readonly T[]' and 'ReadonlyArray<T>' prohibit mutation methods like .push(), .pop(), or index reassignment.


### 3. Multidimensional Matrices

'number[][]' represents a 2D matrix of numbers, ideal for grids, spreadsheets, and game boards.


---

## 💻 Runnable Lesson Demonstration

Execute today's live code in your terminal:
```bash
npm run day:04
```

Here is the source code for today's lesson:
```typescript
// Day 04: Arrays, Readonly Arrays & Matrices
const fruits: string[] = ["Apple", "Banana", "Cherry"];
const scores: Array<number> = [98, 85, 92, 100];

// Immutability with readonly
const immutableNumbers: readonly number[] = [1, 2, 3];
// immutableNumbers.push(4); // Compile error: property push does not exist!

// Matrix 2D
const matrix: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
console.log("Matrix diagonal element [1][1] =", matrix[1][1]);

```

---

## ⚠️ Common Pitfalls & Pro Tips

> [!TIP]
> **Pro Tip**: In TypeScript, the compiler is your pair-programmer. Pay close attention to compiler diagnostic messages—they describe the exact shape mismatch.

> [!WARNING]
> **Common Pitfall**: Do not fall into the trap of using `any` to silence compiler warnings. Use `unknown` with type guards or write proper generic constraints!

---

## 🏋️ Day 04: Exercises

### Exercise: Level 1
1. Sum all numbers in an array

### Exercise: Level 2
1. Filter an array of strings by minimum length and return new array

### Exercise: Level 3
1. Transpose a 2D matrix of numbers (swap rows and columns)

---

## 🧪 Verifying Your Work
Run the automated test for Day 04:
```bash
npx tsx 04_Day_Arrays/exercise.ts
```

Or verify all 30 days:
```bash
npm test
```

---

## 🎉 Congratulations

🌕 **You are amazing!** You have conquered **Day 04** of 30 Days of TypeScript. Keep the momentum going!

<div align="center">
  <p>[<< Day 3](../03_Day_Special_types/03_day_special_types.md) | [30 Days of TypeScript](../readMe.md) | [Day 5 >>](../05_Day_Tuples/05_day_tuples.md)</p>
</div>
