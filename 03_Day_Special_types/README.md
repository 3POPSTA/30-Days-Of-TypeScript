# 30 Days Of TypeScript: Day 03 - Special Types: any, unknown, never, void

<div align="center">
  <p>[<< Day 2](../02_Day_Primitive_types/02_day_primitive_types.md) | [30 Days of TypeScript](../readMe.md) | [Day 4 >>](../04_Day_Arrays/04_day_arrays.md)</p>
</div>

---

- [30 Days Of TypeScript: Day 03 - Special Types: any, unknown, never, void](#30-days-of-typescript-day-03---special-types-any-unknown-never-void)
  - [📖 Overview](#-overview)
  - [🎯 Learning Objectives](#-learning-objectives)
  - [💡 Core Concepts & Deep Dive](#-core-concepts--deep-dive)
    - [1. The Danger of any](#1-the-danger-of-any)
    - [2. The Safety of unknown](#2-the-safety-of-unknown)
    - [3. void vs never](#3-void-vs-never)
  - [💻 Runnable Lesson Demonstration](#-runnable-lesson-demonstration)
  - [⚠️ Common Pitfalls & Pro Tips](#️-common-pitfalls--pro-tips)
  - [🏋️ Day 03: Exercises](#️-day-03-exercises)
    - [Exercise: Level 1](#exercise-level-1)
    - [Exercise: Level 2](#exercise-level-2)
    - [Exercise: Level 3](#exercise-level-3)
  - [🎉 Congratulations](#-congratulations)

---

## 📖 Overview

Explore TypeScript's special types: why any is the ultimate anti-pattern, why unknown is the type-safe champion, how void handles side effects, and how never guarantees unreachability.

---

## 🎯 Learning Objectives

By the end of today, you will be able to:
- [ ] Master **The Danger of any**
- [ ] Master **The Safety of unknown**
- [ ] Master **void vs never**
- [ ] Complete all Level 1, Level 2, and Level 3 exercises with automated tests passing (`npm test`).

---

## 💡 Core Concepts & Deep Dive


### 1. The Danger of any

'any' completely disables the compiler, removing all safety guarantees and reintroducing runtime bugs.


### 2. The Safety of unknown

'unknown' is the type-safe counterpart of 'any'. Any value can be assigned to unknown, but you MUST narrow it before operating.


### 3. void vs never

'void' indicates a function returns nothing (returns undefined). 'never' indicates a function never returns (throws error or infinite loop).


---

## 💻 Runnable Lesson Demonstration

Execute today's live code in your terminal:
```bash
npm run day:03
```

Here is the source code for today's lesson:
```typescript
// Day 03: Special Types: any, unknown, never, void
// 1. any: avoid in production!
const loose: any = "hello";
// loose.nonExistentMethod(); // No compile error, but will crash at runtime!

// 2. unknown: safe and requiring type narrowing
const rawPayload: unknown = JSON.parse('{"id": 1, "name": "TypeScript"}');
if (typeof rawPayload === "object" && rawPayload !== null && "name" in rawPayload) {
  console.log("Safely extracted name:", (rawPayload as { name: string }).name);
}

// 3. void: functions that perform side-effects
function logAlert(message: string): void {
  console.log("[ALERT]:", message);
}
logAlert("System running smoothly");

// 4. never: unreachable code and exhaustiveness
function fail(errorMsg: string): never {
  throw new Error(errorMsg);
}

```

---

## ⚠️ Common Pitfalls & Pro Tips

> [!TIP]
> **Pro Tip**: In TypeScript, the compiler is your pair-programmer. Pay close attention to compiler diagnostic messages—they describe the exact shape mismatch.

> [!WARNING]
> **Common Pitfall**: Do not fall into the trap of using `any` to silence compiler warnings. Use `unknown` with type guards or write proper generic constraints!

---

## 🏋️ Day 03: Exercises

### Exercise: Level 1
1. Safely convert an unknown value into an uppercase string if it is a string, or return 'FALLBACK'

### Exercise: Level 2
1. Parse a JSON string safely returning unknown, or return null if parsing throws

### Exercise: Level 3
1. Implement exhaustiveness assertion function assertNever(x: never): never

---

## 🧪 Verifying Your Work
Run the automated test for Day 03:
```bash
npx tsx 03_Day_Special_types/exercise.ts
```

Or verify all 30 days:
```bash
npm test
```

---

## 🎉 Congratulations

🌕 **You are amazing!** You have conquered **Day 03** of 30 Days of TypeScript. Keep the momentum going!

<div align="center">
  <p>[<< Day 2](../02_Day_Primitive_types/02_day_primitive_types.md) | [30 Days of TypeScript](../readMe.md) | [Day 4 >>](../04_Day_Arrays/04_day_arrays.md)</p>
</div>
