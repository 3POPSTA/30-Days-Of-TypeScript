# 30 Days Of TypeScript: Day 24 - Template Literal Types & Event Strings

<div align="center">
  <p><a href="../23_Day_Mapped_types/23_day_mapped_types.md">&lt;&lt; Day 23</a> | <a href="../README.md">30 Days of TypeScript</a> | <a href="../25_Day_Conditional_types/25_day_conditional_types.md">Day 25 &gt;&gt;</a></p>
</div>

---

- [30 Days Of TypeScript: Day 24 - Template Literal Types & Event Strings](#30-days-of-typescript-day-24---template-literal-types-event-strings)
  - [📖 Overview](#-overview)
  - [🎯 Learning Objectives](#-learning-objectives)
  - [💡 Core Concepts & Deep Dive](#-core-concepts--deep-dive)
    - [1. Template Literal Types](#1-template-literal-types)
    - [2. Intrinsic String Utilities](#2-intrinsic-string-utilities)
    - [3. Type-Safe Event Names](#3-type-safe-event-names)
  - [💻 Runnable Lesson Demonstration](#-runnable-lesson-demonstration)
  - [⚠️ Common Pitfalls & Pro Tips](#️-common-pitfalls--pro-tips)
  - [🏋️ Day 24: Exercises](#️-day-24-exercises)
    - [Exercise: Level 1](#exercise-level-1)
    - [Exercise: Level 2](#exercise-level-2)
    - [Exercise: Level 3](#exercise-level-3)
  - [🎉 Congratulations](#-congratulations)

---

## 📖 Overview

Manipulate and compose string literal types with template literals, intrinsic uppercase/lowercase helpers, and type-safe event buses.

---

## 🎯 Learning Objectives

By the end of today, you will be able to:
- [ ] Master **Template Literal Types**
- [ ] Master **Intrinsic String Utilities**
- [ ] Master **Type-Safe Event Names**
- [ ] Complete all Level 1, Level 2, and Level 3 exercises with automated tests passing (`npm test`).

---

## 💡 Core Concepts & Deep Dive


### 1. Template Literal Types

String interpolation at the type level: '`${Prefix}_${Suffix}`'.


### 2. Intrinsic String Utilities

Built-in compiler helpers: Uppercase<S>, Lowercase<S>, Capitalize<S>, Uncapitalize<S>.


### 3. Type-Safe Event Names

Compose event names dynamically: '`${Entity}:${Action}`' for exhaustive event buses.


---

## 💻 Runnable Lesson Demonstration

Execute today's live code in your terminal:
```bash
npm run day:24
```

Here is the source code for today's lesson:
```typescript
// Day 24: Template Literal Types & Event Strings
type Entity = "user" | "order";
type Action = "create" | "update" | "delete";

type EventName = `${Entity}:${Action}`;
// "user:create" | "user:update" | "user:delete" | "order:create" ...

const event: EventName = "user:create";
console.log("Triggered event:", event);

```

---

## ⚠️ Common Pitfalls & Pro Tips

> [!TIP]
> **Pro Tip**: In TypeScript, the compiler is your pair-programmer. Pay close attention to compiler diagnostic messages—they describe the exact shape mismatch.

> [!WARNING]
> **Common Pitfall**: Do not fall into the trap of using `any` to silence compiler warnings. Use `unknown` with type guards or write proper generic constraints!

---

## 🏋️ Day 24: Exercises

### Exercise: Level 1
1. Template literal type for HexColor: `#${string}`

### Exercise: Level 2
1. Generate event string: createEventName(entity: string, action: string): `${entity}:${action}`

### Exercise: Level 3
1. Type-safe event dispatcher holding listeners for `${string}:${string}`

---

## 🧪 Verifying Your Work
Run the automated test for Day 24:
```bash
npx tsx 24_Day_Template_literal_types/exercise.ts
```

Or verify all 30 days:
```bash
npm test
```

---

## 🎉 Congratulations

🌕 **You are amazing!** You have conquered **Day 24** of 30 Days of TypeScript. Keep the momentum going!

<div align="center">
  <p><a href="../23_Day_Mapped_types/23_day_mapped_types.md">&lt;&lt; Day 23</a> | <a href="../README.md">30 Days of TypeScript</a> | <a href="../25_Day_Conditional_types/25_day_conditional_types.md">Day 25 &gt;&gt;</a></p>
</div>
