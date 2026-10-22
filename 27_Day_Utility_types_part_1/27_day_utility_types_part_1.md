# 30 Days Of TypeScript: Day 27 - Utility Types Masterclass (Part 1)

<div align="center">
  <p>[<< Day 26](../26_Day_The_infer_keyword/26_day_the_infer_keyword.md) | [30 Days of TypeScript](../readMe.md) | [Day 28 >>](../28_Day_Utility_types_part_2/28_day_utility_types_part_2.md)</p>
</div>

---

- [30 Days Of TypeScript: Day 27 - Utility Types Masterclass (Part 1)](#30-days-of-typescript-day-27---utility-types-masterclass-part-1-)
  - [📖 Overview](#-overview)
  - [🎯 Learning Objectives](#-learning-objectives)
  - [💡 Core Concepts & Deep Dive](#-core-concepts--deep-dive)
    - [1. Partial and Required](#1-partial-and-required)
    - [2. Pick and Omit](#2-pick-and-omit)
    - [3. Record<K, T>](#3-record-k-t-)
  - [💻 Runnable Lesson Demonstration](#-runnable-lesson-demonstration)
  - [⚠️ Common Pitfalls & Pro Tips](#️-common-pitfalls--pro-tips)
  - [🏋️ Day 27: Exercises](#️-day-27-exercises)
    - [Exercise: Level 1](#exercise-level-1)
    - [Exercise: Level 2](#exercise-level-2)
    - [Exercise: Level 3](#exercise-level-3)
  - [🎉 Congratulations](#-congratulations)

---

## 📖 Overview

Master built-in object utility types: Partial, Required, Readonly, Record, Pick, and Omit.

---

## 🎯 Learning Objectives

By the end of today, you will be able to:
- [ ] Master **Partial and Required**
- [ ] Master **Pick and Omit**
- [ ] Master **Record<K, T>**
- [ ] Complete all Level 1, Level 2, and Level 3 exercises with automated tests passing (`npm test`).

---

## 💡 Core Concepts & Deep Dive


### 1. Partial and Required

'Partial<T>' makes all properties optional; 'Required<T>' makes all properties mandatory.


### 2. Pick and Omit

'Pick<T, Keys>' extracts specific keys; 'Omit<T, Keys>' removes specific keys.


### 3. Record<K, T>

Constructs an object type with property keys K of type T.


---

## 💻 Runnable Lesson Demonstration

Execute today's live code in your terminal:
```bash
npm run day:27
```

Here is the source code for today's lesson:
```typescript
// Day 27: Utility Types Masterclass (Part 1)
interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}

// Partial update DTO
type UpdateUserDto = Partial<User>;
// Public user profile (strip role)
type PublicProfile = Omit<User, "role">;
// User map
type UserMap = Record<number, User>;

console.log("Utility types (part 1) compiled successfully");

```

---

## ⚠️ Common Pitfalls & Pro Tips

> [!TIP]
> **Pro Tip**: In TypeScript, the compiler is your pair-programmer. Pay close attention to compiler diagnostic messages—they describe the exact shape mismatch.

> [!WARNING]
> **Common Pitfall**: Do not fall into the trap of using `any` to silence compiler warnings. Use `unknown` with type guards or write proper generic constraints!

---

## 🏋️ Day 27: Exercises

### Exercise: Level 1
1. Apply Partial<T> to create a user patch function

### Exercise: Level 2
1. Apply Omit<User, 'password'> to produce sanitized safe user object

### Exercise: Level 3
1. Group array of items into Record<string, T[]> by key selector

---

## 🧪 Verifying Your Work
Run the automated test for Day 27:
```bash
npx tsx 27_Day_Utility_types_part_1/exercise.ts
```

Or verify all 30 days:
```bash
npm test
```

---

## 🎉 Congratulations

🌕 **You are amazing!** You have conquered **Day 27** of 30 Days of TypeScript. Keep the momentum going!

<div align="center">
  <p>[<< Day 26](../26_Day_The_infer_keyword/26_day_the_infer_keyword.md) | [30 Days of TypeScript](../readMe.md) | [Day 28 >>](../28_Day_Utility_types_part_2/28_day_utility_types_part_2.md)</p>
</div>
