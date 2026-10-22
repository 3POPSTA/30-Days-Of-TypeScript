# 30 Days Of TypeScript: Day 06 - Object Types & Property Modifiers

<div align="center">
  <p>[<< Day 5](../05_Day_Tuples/05_day_tuples.md) | [30 Days of TypeScript](../readMe.md) | [Day 7 >>](../07_Day_Type_aliases/07_day_type_aliases.md)</p>
</div>

---

- [30 Days Of TypeScript: Day 06 - Object Types & Property Modifiers](#30-days-of-typescript-day-06---object-types-property-modifiers)
  - [📖 Overview](#-overview)
  - [🎯 Learning Objectives](#-learning-objectives)
  - [💡 Core Concepts & Deep Dive](#-core-concepts--deep-dive)
    - [1. Structural Typing](#1-structural-typing)
    - [2. Optional & Readonly Modifiers](#2-optional-readonly-modifiers)
    - [3. Excess Property Checks](#3-excess-property-checks)
  - [💻 Runnable Lesson Demonstration](#-runnable-lesson-demonstration)
  - [⚠️ Common Pitfalls & Pro Tips](#️-common-pitfalls--pro-tips)
  - [🏋️ Day 06: Exercises](#️-day-06-exercises)
    - [Exercise: Level 1](#exercise-level-1)
    - [Exercise: Level 2](#exercise-level-2)
    - [Exercise: Level 3](#exercise-level-3)
  - [🎉 Congratulations](#-congratulations)

---

## 📖 Overview

Learn structural typing with object shapes, optional properties, readonly fields, excess property checks, and index signatures.

---

## 🎯 Learning Objectives

By the end of today, you will be able to:
- [ ] Master **Structural Typing**
- [ ] Master **Optional & Readonly Modifiers**
- [ ] Master **Excess Property Checks**
- [ ] Complete all Level 1, Level 2, and Level 3 exercises with automated tests passing (`npm test`).

---

## 💡 Core Concepts & Deep Dive


### 1. Structural Typing

TypeScript uses 'duck typing': if two objects have the same required properties, they are compatible.


### 2. Optional & Readonly Modifiers

'?' marks a property as optional. 'readonly' prevents reassigning the property after creation.


### 3. Excess Property Checks

Object literals undergo strict excess property checks to catch accidental typos in configuration keys.


---

## 💻 Runnable Lesson Demonstration

Execute today's live code in your terminal:
```bash
npm run day:06
```

Here is the source code for today's lesson:
```typescript
// Day 06: Object Types & Property Modifiers
interface UserConfig {
  readonly id: string;
  name: string;
  email?: string; // Optional
}

const user: UserConfig = {
  id: "usr_101",
  name: "Alice"
};
// user.id = "usr_102"; // Compile Error: readonly!
user.name = "Alice Smith"; // Allowed

// Index Signatures for dynamic dictionaries
interface StringMap {
  [key: string]: string;
}
const headers: StringMap = {
  "Content-Type": "application/json",
  "Authorization": "Bearer token"
};
console.log("Headers:", headers);

```

---

## ⚠️ Common Pitfalls & Pro Tips

> [!TIP]
> **Pro Tip**: In TypeScript, the compiler is your pair-programmer. Pay close attention to compiler diagnostic messages—they describe the exact shape mismatch.

> [!WARNING]
> **Common Pitfall**: Do not fall into the trap of using `any` to silence compiler warnings. Use `unknown` with type guards or write proper generic constraints!

---

## 🏋️ Day 06: Exercises

### Exercise: Level 1
1. Format user summary string: '<name> (<email>)' or '<name> (No email)'

### Exercise: Level 2
1. Update user profile returning a new object without mutating original

### Exercise: Level 3
1. Count word frequencies in text using a Record<string, number> dictionary

---

## 🧪 Verifying Your Work
Run the automated test for Day 06:
```bash
npx tsx 06_Day_Objects/exercise.ts
```

Or verify all 30 days:
```bash
npm test
```

---

## 🎉 Congratulations

🌕 **You are amazing!** You have conquered **Day 06** of 30 Days of TypeScript. Keep the momentum going!

<div align="center">
  <p>[<< Day 5](../05_Day_Tuples/05_day_tuples.md) | [30 Days of TypeScript](../readMe.md) | [Day 7 >>](../07_Day_Type_aliases/07_day_type_aliases.md)</p>
</div>
