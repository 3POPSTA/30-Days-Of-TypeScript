# 30 Days Of TypeScript: Day 08 - Union Types & Literal Types

<div align="center">
  <p>[<< Day 7](../07_Day_Type_aliases/07_day_type_aliases.md) | [30 Days of TypeScript](../readMe.md) | [Day 9 >>](../09_Day_Type_narrowing/09_day_type_narrowing.md)</p>
</div>

---

- [30 Days Of TypeScript: Day 08 - Union Types & Literal Types](#30-days-of-typescript-day-08---union-types-literal-types)
  - [📖 Overview](#-overview)
  - [🎯 Learning Objectives](#-learning-objectives)
  - [💡 Core Concepts & Deep Dive](#-core-concepts--deep-dive)
    - [1. Union Types (|)](#1-union-types-)
    - [2. Literal Types](#2-literal-types)
    - [3. Literal Widening](#3-literal-widening)
  - [💻 Runnable Lesson Demonstration](#-runnable-lesson-demonstration)
  - [⚠️ Common Pitfalls & Pro Tips](#️-common-pitfalls--pro-tips)
  - [🏋️ Day 08: Exercises](#️-day-08-exercises)
    - [Exercise: Level 1](#exercise-level-1)
    - [Exercise: Level 2](#exercise-level-2)
    - [Exercise: Level 3](#exercise-level-3)
  - [🎉 Congratulations](#-congratulations)

---

## 📖 Overview

Express values that can be one of several types using unions (|), enforce exact values with literal types, and understand literal widening.

---

## 🎯 Learning Objectives

By the end of today, you will be able to:
- [ ] Master **Union Types (|)**
- [ ] Master **Literal Types**
- [ ] Master **Literal Widening**
- [ ] Complete all Level 1, Level 2, and Level 3 exercises with automated tests passing (`npm test`).

---

## 💡 Core Concepts & Deep Dive


### 1. Union Types (|)

A union represents a value that is one of several types (e.g. 'string | number').


### 2. Literal Types

TypeScript lets you specify exact values as types: 'GET' | 'POST', 200 | 404, true | false.


### 3. Literal Widening

'let x = "GET"' widens to string, while 'const x = "GET"' remains literal '"GET"'.


---

## 💻 Runnable Lesson Demonstration

Execute today's live code in your terminal:
```bash
npm run day:08
```

Here is the source code for today's lesson:
```typescript
// Day 08: Union Types & Literal Types
type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";
type Status = "idle" | "loading" | "success" | "error";

function handleRequest(method: HttpMethod, url: string): string {
  return `[${method}] dispatched to ${url}`;
}

console.log(handleRequest("GET", "/api/users"));

```

---

## ⚠️ Common Pitfalls & Pro Tips

> [!TIP]
> **Pro Tip**: In TypeScript, the compiler is your pair-programmer. Pay close attention to compiler diagnostic messages—they describe the exact shape mismatch.

> [!WARNING]
> **Common Pitfall**: Do not fall into the trap of using `any` to silence compiler warnings. Use `unknown` with type guards or write proper generic constraints!

---

## 🏋️ Day 08: Exercises

### Exercise: Level 1
1. Format status string into user badge color: 'success' -> 'green', 'warning' -> 'yellow', 'error' -> 'red'

### Exercise: Level 2
1. Perform safe arithmetic calculation with operation literal 'add' | 'sub' | 'mul' | 'div'

### Exercise: Level 3
1. Validate network port is either number or port string alias 'http' (80) or 'https' (443)

---

## 🧪 Verifying Your Work
Run the automated test for Day 08:
```bash
npx tsx 08_Day_Unions_and_literals/exercise.ts
```

Or verify all 30 days:
```bash
npm test
```

---

## 🎉 Congratulations

🌕 **You are amazing!** You have conquered **Day 08** of 30 Days of TypeScript. Keep the momentum going!

<div align="center">
  <p>[<< Day 7](../07_Day_Type_aliases/07_day_type_aliases.md) | [30 Days of TypeScript](../readMe.md) | [Day 9 >>](../09_Day_Type_narrowing/09_day_type_narrowing.md)</p>
</div>
