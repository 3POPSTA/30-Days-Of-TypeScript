# 30 Days Of TypeScript: Day 29 - Async, Promises, and Robust Error Handling

<div align="center">
  <p><a href="../28_Day_Utility_types_part_2/28_day_utility_types_part_2.md">&lt;&lt; Day 28</a> | <a href="../README.md">30 Days of TypeScript</a> | <a href="../30_Day_Final_capstone_project/30_day_final_capstone_project.md">Day 30 &gt;&gt;</a></p>
</div>

---

- [30 Days Of TypeScript: Day 29 - Async, Promises, and Robust Error Handling](#30-days-of-typescript-day-29---async-promises-and-robust-error-handling)
  - [📖 Overview](#-overview)
  - [🎯 Learning Objectives](#-learning-objectives)
  - [💡 Core Concepts & Deep Dive](#-core-concepts--deep-dive)
    - [1. Typed Promises & Async/Await](#1-typed-promises-async-await)
    - [2. The Result Pattern](#2-the-result-pattern)
  - [💻 Runnable Lesson Demonstration](#-runnable-lesson-demonstration)
  - [⚠️ Common Pitfalls & Pro Tips](#️-common-pitfalls--pro-tips)
  - [🏋️ Day 29: Exercises](#️-day-29-exercises)
    - [Exercise: Level 1](#exercise-level-1)
    - [Exercise: Level 2](#exercise-level-2)
    - [Exercise: Level 3](#exercise-level-3)
  - [🎉 Congratulations](#-congratulations)

---

## 📖 Overview

Build reliable async pipelines with Promise<T>, async/await, and the functional Result<T, E> pattern to banish unhandled runtime exceptions.

---

## 🎯 Learning Objectives

By the end of today, you will be able to:
- [ ] Master **Typed Promises & Async/Await**
- [ ] Master **The Result Pattern**
- [ ] Complete all Level 1, Level 2, and Level 3 exercises with automated tests passing (`npm test`).

---

## 💡 Core Concepts & Deep Dive


### 1. Typed Promises & Async/Await

Typing async operations: 'async function fetchUser(id: string): Promise<User>'.


### 2. The Result Pattern

Represent outcomes as values (Result<T, E> = Ok<T> | Err<E>) instead of relying on unpredictable exceptions.


---

## 💻 Runnable Lesson Demonstration

Execute today's live code in your terminal:
```bash
npm run day:29
```

Here is the source code for today's lesson:
```typescript
// Day 29: Async, Promises, and Robust Error Handling
type Result<T, E = Error> =
  | { ok: true; value: T }
  | { ok: false; error: E };

function ok<T>(value: T): Result<T, never> {
  return { ok: true, value };
}

function err<E>(error: E): Result<never, E> {
  return { ok: false, error };
}

async function safeDivision(a: number, b: number): Promise<Result<number, string>> {
  if (b === 0) return err("Division by zero");
  return ok(a / b);
}

const outcome = await safeDivision(10, 2);
if (outcome.ok) {
  console.log("Division success:", outcome.value);
}

```

---

## ⚠️ Common Pitfalls & Pro Tips

> [!TIP]
> **Pro Tip**: In TypeScript, the compiler is your pair-programmer. Pay close attention to compiler diagnostic messages—they describe the exact shape mismatch.

> [!WARNING]
> **Common Pitfall**: Do not fall into the trap of using `any` to silence compiler warnings. Use `unknown` with type guards or write proper generic constraints!

---

## 🏋️ Day 29: Exercises

### Exercise: Level 1
1. Typed async delay function: delay(ms: number): Promise<string>

### Exercise: Level 2
1. Implement safeJsonParseResult(json: string): Result<unknown, string>

### Exercise: Level 3
1. Retry engine: retryOperation<T>(fn: () => Promise<T>, retries: number): Promise<T>

---

## 🧪 Verifying Your Work
Run the automated test for Day 29:
```bash
npx tsx 29_Day_Async_and_error_handling/exercise.ts
```

Or verify all 30 days:
```bash
npm test
```

---

## 🎉 Congratulations

🌕 **You are amazing!** You have conquered **Day 29** of 30 Days of TypeScript. Keep the momentum going!

<div align="center">
  <p><a href="../28_Day_Utility_types_part_2/28_day_utility_types_part_2.md">&lt;&lt; Day 28</a> | <a href="../README.md">30 Days of TypeScript</a> | <a href="../30_Day_Final_capstone_project/30_day_final_capstone_project.md">Day 30 &gt;&gt;</a></p>
</div>
