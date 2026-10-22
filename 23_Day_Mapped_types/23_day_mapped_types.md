# 30 Days Of TypeScript: Day 23 - Mapped Types & Key Remapping

<div align="center">
  <p><a href="../22_Day_Keyof_and_indexed_access/22_day_keyof_and_indexed_access.md">&lt;&lt; Day 22</a> | <a href="../README.md">30 Days of TypeScript</a> | <a href="../24_Day_Template_literal_types/24_day_template_literal_types.md">Day 24 &gt;&gt;</a></p>
</div>

---

- [30 Days Of TypeScript: Day 23 - Mapped Types & Key Remapping](#30-days-of-typescript-day-23---mapped-types-key-remapping)
  - [📖 Overview](#-overview)
  - [🎯 Learning Objectives](#-learning-objectives)
  - [💡 Core Concepts & Deep Dive](#-core-concepts--deep-dive)
    - [1. Mapped Types Syntax](#1-mapped-types-syntax)
    - [2. Modifiers (+ / -)](#2-modifiers-)
    - [3. Key Remapping via as](#3-key-remapping-via-as)
  - [💻 Runnable Lesson Demonstration](#-runnable-lesson-demonstration)
  - [⚠️ Common Pitfalls & Pro Tips](#️-common-pitfalls--pro-tips)
  - [🏋️ Day 23: Exercises](#️-day-23-exercises)
    - [Exercise: Level 1](#exercise-level-1)
    - [Exercise: Level 2](#exercise-level-2)
    - [Exercise: Level 3](#exercise-level-3)
  - [🎉 Congratulations](#-congratulations)

---

## 📖 Overview

Transform existing types into new types with mapped types, modify flags (+/- readonly and ?), and remap keys using 'as'.

---

## 🎯 Learning Objectives

By the end of today, you will be able to:
- [ ] Master **Mapped Types Syntax**
- [ ] Master **Modifiers (+ / -)**
- [ ] Master **Key Remapping via as**
- [ ] Complete all Level 1, Level 2, and Level 3 exercises with automated tests passing (`npm test`).

---

## 💡 Core Concepts & Deep Dive


### 1. Mapped Types Syntax

'{ [K in keyof T]: T[K] }' iterates over every property key in type T.


### 2. Modifiers (+ / -)

Add or remove modifiers: '+readonly' / '-readonly', '+?' / '-?'.


### 3. Key Remapping via as

Filter or rename keys: '[K in keyof T as NewKey]: T[K]'.


---

## 💻 Runnable Lesson Demonstration

Execute today's live code in your terminal:
```bash
npm run day:23
```

Here is the source code for today's lesson:
```typescript
// Day 23: Mapped Types & Key Remapping
type MyReadonly<T> = {
  readonly [K in keyof T]: T[K];
};

type Concrete<T> = {
  [K in keyof T]-?: T[K]; // Strips optional ?
};

interface Todo {
  title: string;
  description?: string;
}
type CompleteTodo = Concrete<Todo>;
console.log("Mapped type defined successfully");

```

---

## ⚠️ Common Pitfalls & Pro Tips

> [!TIP]
> **Pro Tip**: In TypeScript, the compiler is your pair-programmer. Pay close attention to compiler diagnostic messages—they describe the exact shape mismatch.

> [!WARNING]
> **Common Pitfall**: Do not fall into the trap of using `any` to silence compiler warnings. Use `unknown` with type guards or write proper generic constraints!

---

## 🏋️ Day 23: Exercises

### Exercise: Level 1
1. Implement custom MyReadonly<T> mapped type and freeze object

### Exercise: Level 2
1. Implement custom Optional<T> mapped type adding ? to all properties

### Exercise: Level 3
1. Key remapping: generate getter function signatures { [K in keyof T as `get${Capitalize<string & K>}`]: () => T[K] }

---

## 🧪 Verifying Your Work
Run the automated test for Day 23:
```bash
npx tsx 23_Day_Mapped_types/exercise.ts
```

Or verify all 30 days:
```bash
npm test
```

---

## 🎉 Congratulations

🌕 **You are amazing!** You have conquered **Day 23** of 30 Days of TypeScript. Keep the momentum going!

<div align="center">
  <p><a href="../22_Day_Keyof_and_indexed_access/22_day_keyof_and_indexed_access.md">&lt;&lt; Day 22</a> | <a href="../README.md">30 Days of TypeScript</a> | <a href="../24_Day_Template_literal_types/24_day_template_literal_types.md">Day 24 &gt;&gt;</a></p>
</div>
