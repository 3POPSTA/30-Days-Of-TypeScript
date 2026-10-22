# 30 Days Of TypeScript: Day 18 - Enums & Object Literals as const

<div align="center">
  <p>[<< Day 17](../17_Day_Abstract_classes/17_day_abstract_classes.md) | [30 Days of TypeScript](../readMe.md) | [Day 19 >>](../19_Day_Generics_basics/19_day_generics_basics.md)</p>
</div>

---

- [30 Days Of TypeScript: Day 18 - Enums & Object Literals as const](#30-days-of-typescript-day-18---enums-object-literals-as-const)
  - [📖 Overview](#-overview)
  - [🎯 Learning Objectives](#-learning-objectives)
  - [💡 Core Concepts & Deep Dive](#-core-concepts--deep-dive)
    - [1. Numeric & String Enums](#1-numeric-string-enums)
    - [2. as const Objects (Modern Best Practice)](#2-as-const-objects-modern-best-practice-)
  - [💻 Runnable Lesson Demonstration](#-runnable-lesson-demonstration)
  - [⚠️ Common Pitfalls & Pro Tips](#️-common-pitfalls--pro-tips)
  - [🏋️ Day 18: Exercises](#️-day-18-exercises)
    - [Exercise: Level 1](#exercise-level-1)
    - [Exercise: Level 2](#exercise-level-2)
    - [Exercise: Level 3](#exercise-level-3)
  - [🎉 Congratulations](#-congratulations)

---

## 📖 Overview

Compare TypeScript Enums with modern 'as const' object dictionaries, evaluating runtime output, safety, and idiomatic practices.

---

## 🎯 Learning Objectives

By the end of today, you will be able to:
- [ ] Master **Numeric & String Enums**
- [ ] Master **as const Objects (Modern Best Practice)**
- [ ] Complete all Level 1, Level 2, and Level 3 exercises with automated tests passing (`npm test`).

---

## 💡 Core Concepts & Deep Dive


### 1. Numeric & String Enums

Classic TS enum feature. Numeric enums have reverse mappings; string enums enforce exact string values.


### 2. as const Objects (Modern Best Practice)

Zero runtime overhead, tree-shakeable, and extracts identical type safety using typeof.


---

## 💻 Runnable Lesson Demonstration

Execute today's live code in your terminal:
```bash
npm run day:18
```

Here is the source code for today's lesson:
```typescript
// Day 18: Enums & Object Literals as const
// 1. String Enum
enum HttpVerb {
  Get = "GET",
  Post = "POST"
}

// 2. Modern as const dictionary
const LogLevels = {
  INFO: "info",
  WARN: "warn",
  ERROR: "error"
} as const;

type LogLevel = typeof LogLevels[keyof typeof LogLevels];

console.log("Enum verb:", HttpVerb.Get);
console.log("Const object level:", LogLevels.ERROR);

```

---

## ⚠️ Common Pitfalls & Pro Tips

> [!TIP]
> **Pro Tip**: In TypeScript, the compiler is your pair-programmer. Pay close attention to compiler diagnostic messages—they describe the exact shape mismatch.

> [!WARNING]
> **Common Pitfall**: Do not fall into the trap of using `any` to silence compiler warnings. Use `unknown` with type guards or write proper generic constraints!

---

## 🏋️ Day 18: Exercises

### Exercise: Level 1
1. Parse Direction string enum ('UP' | 'DOWN' | 'LEFT' | 'RIGHT')

### Exercise: Level 2
1. Derive union type from as const object dictionary and format status string

### Exercise: Level 3
1. Map HTTP status code enum to human readable status text

---

## 🧪 Verifying Your Work
Run the automated test for Day 18:
```bash
npx tsx 18_Day_Enums/exercise.ts
```

Or verify all 30 days:
```bash
npm test
```

---

## 🎉 Congratulations

🌕 **You are amazing!** You have conquered **Day 18** of 30 Days of TypeScript. Keep the momentum going!

<div align="center">
  <p>[<< Day 17](../17_Day_Abstract_classes/17_day_abstract_classes.md) | [30 Days of TypeScript](../readMe.md) | [Day 19 >>](../19_Day_Generics_basics/19_day_generics_basics.md)</p>
</div>
