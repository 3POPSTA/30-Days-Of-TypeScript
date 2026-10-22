# 30 Days Of TypeScript: Day 05 - Tuples, Labeled Tuples & as const

<div align="center">
  <p><a href="../04_Day_Arrays/04_day_arrays.md">&lt;&lt; Day 4</a> | <a href="../README.md">30 Days of TypeScript</a> | <a href="../06_Day_Objects/06_day_objects.md">Day 6 &gt;&gt;</a></p>
</div>

---

- [30 Days Of TypeScript: Day 05 - Tuples, Labeled Tuples & as const](#30-days-of-typescript-day-05---tuples-labeled-tuples-as-const)
  - [📖 Overview](#-overview)
  - [🎯 Learning Objectives](#-learning-objectives)
  - [💡 Core Concepts & Deep Dive](#-core-concepts--deep-dive)
    - [1. What is a Tuple?](#1-what-is-a-tuple-)
    - [2. Labeled Tuple Elements](#2-labeled-tuple-elements)
    - [3. as const Assertions](#3-as-const-assertions)
  - [💻 Runnable Lesson Demonstration](#-runnable-lesson-demonstration)
  - [⚠️ Common Pitfalls & Pro Tips](#️-common-pitfalls--pro-tips)
  - [🏋️ Day 05: Exercises](#️-day-05-exercises)
    - [Exercise: Level 1](#exercise-level-1)
    - [Exercise: Level 2](#exercise-level-2)
    - [Exercise: Level 3](#exercise-level-3)
  - [🎉 Congratulations](#-congratulations)

---

## 📖 Overview

Master fixed-length ordered collections with tuples, labeled tuples for readable IDE tooltips, and immutable 'as const' assertions.

---

## 🎯 Learning Objectives

By the end of today, you will be able to:
- [ ] Master **What is a Tuple?**
- [ ] Master **Labeled Tuple Elements**
- [ ] Master **as const Assertions**
- [ ] Complete all Level 1, Level 2, and Level 3 exercises with automated tests passing (`npm test`).

---

## 💡 Core Concepts & Deep Dive


### 1. What is a Tuple?

A tuple is an array with a fixed number of elements whose individual types are known at specific indices.


### 2. Labeled Tuple Elements

TypeScript allows labels like '[latitude: number, longitude: number]' to produce crystal-clear IDE hints.


### 3. as const Assertions

'as const' narrows an array into a deeply read-only tuple of literal types.


---

## 💻 Runnable Lesson Demonstration

Execute today's live code in your terminal:
```bash
npm run day:05
```

Here is the source code for today's lesson:
```typescript
// Day 05: Tuples, Labeled Tuples & as const
// 1. Basic & Labeled Tuple
type GeoPoint = [latitude: number, longitude: number, label?: string];
const office: GeoPoint = [60.1699, 24.9384, "Helsinki Office"];
console.log("Latitude:", office[0], "Longitude:", office[1]);

// 2. HTTP Status Tuple
type HttpResponse = [status: number, message: string];
const successResponse: HttpResponse = [200, "OK"];
console.log(`Status: ${successResponse[0]} (${successResponse[1]})`);

// 3. as const immutability
const directions = ["NORTH", "SOUTH", "EAST", "WEST"] as const;
// directions[0] = "UP"; // Compile Error!

```

---

## ⚠️ Common Pitfalls & Pro Tips

> [!TIP]
> **Pro Tip**: In TypeScript, the compiler is your pair-programmer. Pay close attention to compiler diagnostic messages—they describe the exact shape mismatch.

> [!WARNING]
> **Common Pitfall**: Do not fall into the trap of using `any` to silence compiler warnings. Use `unknown` with type guards or write proper generic constraints!

---

## 🏋️ Day 05: Exercises

### Exercise: Level 1
1. Calculate Euclidean distance between two 2D points [x, y]

### Exercise: Level 2
1. Parse a key-value string 'key=value' into a labeled tuple [key: string, value: string]

### Exercise: Level 3
1. Zip two equal-length arrays of type T and U into a tuple array [T, U][]

---

## 🧪 Verifying Your Work
Run the automated test for Day 05:
```bash
npx tsx 05_Day_Tuples/exercise.ts
```

Or verify all 30 days:
```bash
npm test
```

---

## 🎉 Congratulations

🌕 **You are amazing!** You have conquered **Day 05** of 30 Days of TypeScript. Keep the momentum going!

<div align="center">
  <p><a href="../04_Day_Arrays/04_day_arrays.md">&lt;&lt; Day 4</a> | <a href="../README.md">30 Days of TypeScript</a> | <a href="../06_Day_Objects/06_day_objects.md">Day 6 &gt;&gt;</a></p>
</div>
