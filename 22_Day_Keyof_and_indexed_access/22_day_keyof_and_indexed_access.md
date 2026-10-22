# 30 Days Of TypeScript: Day 22 - Keyof, Indexed Access & typeof Queries

<div align="center">
  <p>[<< Day 21](../21_Day_Generic_classes/21_day_generic_classes.md) | [30 Days of TypeScript](../readMe.md) | [Day 23 >>](../23_Day_Mapped_types/23_day_mapped_types.md)</p>
</div>

---

- [30 Days Of TypeScript: Day 22 - Keyof, Indexed Access & typeof Queries](#30-days-of-typescript-day-22---keyof-indexed-access-typeof-queries)
  - [📖 Overview](#-overview)
  - [🎯 Learning Objectives](#-learning-objectives)
  - [💡 Core Concepts & Deep Dive](#-core-concepts--deep-dive)
    - [1. keyof Operator](#1-keyof-operator)
    - [2. Indexed Access Types (T[K])](#2-indexed-access-types-t-k-)
    - [3. typeof Type Query](#3-typeof-type-query)
  - [💻 Runnable Lesson Demonstration](#-runnable-lesson-demonstration)
  - [⚠️ Common Pitfalls & Pro Tips](#️-common-pitfalls--pro-tips)
  - [🏋️ Day 22: Exercises](#️-day-22-exercises)
    - [Exercise: Level 1](#exercise-level-1)
    - [Exercise: Level 2](#exercise-level-2)
    - [Exercise: Level 3](#exercise-level-3)
  - [🎉 Congratulations](#-congratulations)

---

## 📖 Overview

Extract union keys with keyof, drill into nested types with indexed access (T[K]), and query runtime variables with typeof.

---

## 🎯 Learning Objectives

By the end of today, you will be able to:
- [ ] Master **keyof Operator**
- [ ] Master **Indexed Access Types (T[K])**
- [ ] Master **typeof Type Query**
- [ ] Complete all Level 1, Level 2, and Level 3 exercises with automated tests passing (`npm test`).

---

## 💡 Core Concepts & Deep Dive


### 1. keyof Operator

Produces a string or numeric literal union of an object's keys.


### 2. Indexed Access Types (T[K])

Lookup the type of a specific property inside type T.


### 3. typeof Type Query

Extracts the type of a runtime JavaScript variable for use in type annotations.


---

## 💻 Runnable Lesson Demonstration

Execute today's live code in your terminal:
```bash
npm run day:22
```

Here is the source code for today's lesson:
```typescript
// Day 22: Keyof, Indexed Access & typeof Queries
interface UserProfile {
  id: number;
  username: string;
  preferences: {
    theme: "light" | "dark";
    notifications: boolean;
  };
}

type UserKeys = keyof UserProfile; // "id" | "username" | "preferences"
type ThemeType = UserProfile["preferences"]["theme"]; // "light" | "dark"

const defaultTheme: ThemeType = "dark";
console.log("Theme:", defaultTheme);

```

---

## ⚠️ Common Pitfalls & Pro Tips

> [!TIP]
> **Pro Tip**: In TypeScript, the compiler is your pair-programmer. Pay close attention to compiler diagnostic messages—they describe the exact shape mismatch.

> [!WARNING]
> **Common Pitfall**: Do not fall into the trap of using `any` to silence compiler warnings. Use `unknown` with type guards or write proper generic constraints!

---

## 🏋️ Day 22: Exercises

### Exercise: Level 1
1. Extract property value safely using keyof lookup: getProp<T, K extends keyof T>(obj: T, key: K): T[K]

### Exercise: Level 2
1. Extract array element type using indexed access T[number]

### Exercise: Level 3
1. Query and extract typeof config variable into reusable type

---

## 🧪 Verifying Your Work
Run the automated test for Day 22:
```bash
npx tsx 22_Day_Keyof_and_indexed_access/exercise.ts
```

Or verify all 30 days:
```bash
npm test
```

---

## 🎉 Congratulations

🌕 **You are amazing!** You have conquered **Day 22** of 30 Days of TypeScript. Keep the momentum going!

<div align="center">
  <p>[<< Day 21](../21_Day_Generic_classes/21_day_generic_classes.md) | [30 Days of TypeScript](../readMe.md) | [Day 23 >>](../23_Day_Mapped_types/23_day_mapped_types.md)</p>
</div>
