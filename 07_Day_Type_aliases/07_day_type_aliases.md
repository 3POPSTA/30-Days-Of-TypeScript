# 30 Days Of TypeScript: Day 07 - Type Aliases & Intersection Types

<div align="center">
  <p>[<< Day 6](../06_Day_Objects/06_day_objects.md) | [30 Days of TypeScript](../readMe.md) | [Day 8 >>](../08_Day_Unions_and_literals/08_day_unions_and_literals.md)</p>
</div>

---

- [30 Days Of TypeScript: Day 07 - Type Aliases & Intersection Types](#30-days-of-typescript-day-07---type-aliases-intersection-types)
  - [📖 Overview](#-overview)
  - [🎯 Learning Objectives](#-learning-objectives)
  - [💡 Core Concepts & Deep Dive](#-core-concepts--deep-dive)
    - [1. Type Aliases](#1-type-aliases)
    - [2. Intersection Types (&)](#2-intersection-types-)
  - [💻 Runnable Lesson Demonstration](#-runnable-lesson-demonstration)
  - [⚠️ Common Pitfalls & Pro Tips](#️-common-pitfalls--pro-tips)
  - [🏋️ Day 07: Exercises](#️-day-07-exercises)
    - [Exercise: Level 1](#exercise-level-1)
    - [Exercise: Level 2](#exercise-level-2)
    - [Exercise: Level 3](#exercise-level-3)
  - [🎉 Congratulations](#-congratulations)

---

## 📖 Overview

Define reusable type definitions with the type keyword and combine multiple types using intersection (&).

---

## 🎯 Learning Objectives

By the end of today, you will be able to:
- [ ] Master **Type Aliases**
- [ ] Master **Intersection Types (&)**
- [ ] Complete all Level 1, Level 2, and Level 3 exercises with automated tests passing (`npm test`).

---

## 💡 Core Concepts & Deep Dive


### 1. Type Aliases

A type alias creates a new name for any type: primitives, unions, tuples, or object shapes.


### 2. Intersection Types (&)

Intersection combines multiple types into one. The resulting type must satisfy ALL constituent types.


---

## 💻 Runnable Lesson Demonstration

Execute today's live code in your terminal:
```bash
npm run day:07
```

Here is the source code for today's lesson:
```typescript
// Day 07: Type Aliases & Intersection Types
type Timestamp = number;
type Coordinates = { lat: number; lng: number };

type Identifiable = { id: string };
type AuditInfo = { createdAt: Timestamp; updatedAt: Timestamp };

// Combining with Intersection (&)
type DatabaseEntity = Identifiable & AuditInfo & { title: string };

const doc: DatabaseEntity = {
  id: "doc_01",
  createdAt: Date.now(),
  updatedAt: Date.now(),
  title: "Mastering TypeScript"
};
console.log("Document:", doc);

```

---

## ⚠️ Common Pitfalls & Pro Tips

> [!TIP]
> **Pro Tip**: In TypeScript, the compiler is your pair-programmer. Pay close attention to compiler diagnostic messages—they describe the exact shape mismatch.

> [!WARNING]
> **Common Pitfall**: Do not fall into the trap of using `any` to silence compiler warnings. Use `unknown` with type guards or write proper generic constraints!

---

## 🏋️ Day 07: Exercises

### Exercise: Level 1
1. Combine a base contact with emergency contact using intersection

### Exercise: Level 2
1. Merge audit metadata ({ createdAt: number; author: string }) into an arbitrary entity

### Exercise: Level 3
1. Compose multiple permission masks into a single verified user permission profile

---

## 🧪 Verifying Your Work
Run the automated test for Day 07:
```bash
npx tsx 07_Day_Type_aliases/exercise.ts
```

Or verify all 30 days:
```bash
npm test
```

---

## 🎉 Congratulations

🌕 **You are amazing!** You have conquered **Day 07** of 30 Days of TypeScript. Keep the momentum going!

<div align="center">
  <p>[<< Day 6](../06_Day_Objects/06_day_objects.md) | [30 Days of TypeScript](../readMe.md) | [Day 8 >>](../08_Day_Unions_and_literals/08_day_unions_and_literals.md)</p>
</div>
