# 30 Days Of TypeScript: Day 11 - Discriminated Unions & Pattern Matching

<div align="center">
  <p><a href="../10_Day_Type_predicates/10_day_type_predicates.md">&lt;&lt; Day 10</a> | <a href="../README.md">30 Days of TypeScript</a> | <a href="../12_Day_Functions/12_day_functions.md">Day 12 &gt;&gt;</a></p>
</div>

---

- [30 Days Of TypeScript: Day 11 - Discriminated Unions & Pattern Matching](#30-days-of-typescript-day-11---discriminated-unions-pattern-matching)
  - [📖 Overview](#-overview)
  - [🎯 Learning Objectives](#-learning-objectives)
  - [💡 Core Concepts & Deep Dive](#-core-concepts--deep-dive)
    - [1. Discriminated (Tagged) Unions](#1-discriminated-tagged-unions)
    - [2. Exhaustiveness with never](#2-exhaustiveness-with-never)
  - [💻 Runnable Lesson Demonstration](#-runnable-lesson-demonstration)
  - [⚠️ Common Pitfalls & Pro Tips](#️-common-pitfalls--pro-tips)
  - [🏋️ Day 11: Exercises](#️-day-11-exercises)
    - [Exercise: Level 1](#exercise-level-1)
    - [Exercise: Level 2](#exercise-level-2)
    - [Exercise: Level 3](#exercise-level-3)
  - [🎉 Congratulations](#-congratulations)

---

## 📖 Overview

Model complex domain states with discriminated (tagged) unions and achieve 100% exhaustive compile-time safety.

---

## 🎯 Learning Objectives

By the end of today, you will be able to:
- [ ] Master **Discriminated (Tagged) Unions**
- [ ] Master **Exhaustiveness with never**
- [ ] Complete all Level 1, Level 2, and Level 3 exercises with automated tests passing (`npm test`).

---

## 💡 Core Concepts & Deep Dive


### 1. Discriminated (Tagged) Unions

A union of object types that share a common literal discriminant property (like 'kind', 'type', or 'status').


### 2. Exhaustiveness with never

Assigning unhandled variants to type 'never' in default switch branches guarantees a compile error if a variant is forgotten.


---

## 💻 Runnable Lesson Demonstration

Execute today's live code in your terminal:
```bash
npm run day:11
```

Here is the source code for today's lesson:
```typescript
// Day 11: Discriminated Unions & Pattern Matching
type Shape =
  | { kind: "circle"; radius: number }
  | { kind: "square"; size: number }
  | { kind: "rectangle"; width: number; height: number };

function getArea(s: Shape): number {
  switch (s.kind) {
    case "circle": return Math.PI * s.radius * s.radius;
    case "square": return s.size * s.size;
    case "rectangle": return s.width * s.height;
    default: {
      const _unreachable: never = s;
      throw new Error("Unhandled shape: " + _unreachable);
    }
  }
}

console.log("Square area:", getArea({ kind: "square", size: 4 }));

```

---

## ⚠️ Common Pitfalls & Pro Tips

> [!TIP]
> **Pro Tip**: In TypeScript, the compiler is your pair-programmer. Pay close attention to compiler diagnostic messages—they describe the exact shape mismatch.

> [!WARNING]
> **Common Pitfall**: Do not fall into the trap of using `any` to silence compiler warnings. Use `unknown` with type guards or write proper generic constraints!

---

## 🏋️ Day 11: Exercises

### Exercise: Level 1
1. Calculate perimeter of Circle ({ kind: 'circle', radius }) and Rectangle ({ kind: 'rect', w, h })

### Exercise: Level 2
1. State reducer handling Action { type: 'INCREMENT'; amount: number } | { type: 'DECREMENT'; amount: number } | { type: 'RESET' }

### Exercise: Level 3
1. Render AsyncData<T> state: { status: 'loading' } | { status: 'success'; data: T } | { status: 'error'; error: string }

---

## 🧪 Verifying Your Work
Run the automated test for Day 11:
```bash
npx tsx 11_Day_Discriminated_unions/exercise.ts
```

Or verify all 30 days:
```bash
npm test
```

---

## 🎉 Congratulations

🌕 **You are amazing!** You have conquered **Day 11** of 30 Days of TypeScript. Keep the momentum going!

<div align="center">
  <p><a href="../10_Day_Type_predicates/10_day_type_predicates.md">&lt;&lt; Day 10</a> | <a href="../README.md">30 Days of TypeScript</a> | <a href="../12_Day_Functions/12_day_functions.md">Day 12 &gt;&gt;</a></p>
</div>
