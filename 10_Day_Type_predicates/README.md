# 30 Days Of TypeScript: Day 10 - Type Predicates & Custom Type Guards

<div align="center">
  <p>[<< Day 9](../09_Day_Type_narrowing/09_day_type_narrowing.md) | [30 Days of TypeScript](../readMe.md) | [Day 11 >>](../11_Day_Discriminated_unions/11_day_discriminated_unions.md)</p>
</div>

---

- [30 Days Of TypeScript: Day 10 - Type Predicates & Custom Type Guards](#30-days-of-typescript-day-10---type-predicates-custom-type-guards)
  - [📖 Overview](#-overview)
  - [🎯 Learning Objectives](#-learning-objectives)
  - [💡 Core Concepts & Deep Dive](#-core-concepts--deep-dive)
    - [1. Type Predicates (val is Type)](#1-type-predicates-val-is-type-)
    - [2. Assertion Functions (asserts val)](#2-assertion-functions-asserts-val-)
  - [💻 Runnable Lesson Demonstration](#-runnable-lesson-demonstration)
  - [⚠️ Common Pitfalls & Pro Tips](#️-common-pitfalls--pro-tips)
  - [🏋️ Day 10: Exercises](#️-day-10-exercises)
    - [Exercise: Level 1](#exercise-level-1)
    - [Exercise: Level 2](#exercise-level-2)
    - [Exercise: Level 3](#exercise-level-3)
  - [🎉 Congratulations](#-congratulations)

---

## 📖 Overview

Create custom type guards using 'val is Type' syntax to inform the compiler across functions, and use assertion functions with 'asserts val is Type'.

---

## 🎯 Learning Objectives

By the end of today, you will be able to:
- [ ] Master **Type Predicates (val is Type)**
- [ ] Master **Assertion Functions (asserts val)**
- [ ] Complete all Level 1, Level 2, and Level 3 exercises with automated tests passing (`npm test`).

---

## 💡 Core Concepts & Deep Dive


### 1. Type Predicates (val is Type)

A function whose return type is 'parameterName is Type'. When it returns true, TypeScript narrows the parameter.


### 2. Assertion Functions (asserts val)

Functions that throw if a condition is false, narrowing the value for the remainder of the scope.


---

## 💻 Runnable Lesson Demonstration

Execute today's live code in your terminal:
```bash
npm run day:10
```

Here is the source code for today's lesson:
```typescript
// Day 10: Type Predicates & Custom Type Guards
interface Car {
  drive: () => void;
}

function isCar(vehicle: unknown): vehicle is Car {
  return typeof vehicle === "object" && vehicle !== null && "drive" in vehicle;
}

const obj: unknown = { drive: () => console.log("Driving!") };
if (isCar(obj)) {
  obj.drive(); // Safely narrowed!
}

```

---

## ⚠️ Common Pitfalls & Pro Tips

> [!TIP]
> **Pro Tip**: In TypeScript, the compiler is your pair-programmer. Pay close attention to compiler diagnostic messages—they describe the exact shape mismatch.

> [!WARNING]
> **Common Pitfall**: Do not fall into the trap of using `any` to silence compiler warnings. Use `unknown` with type guards or write proper generic constraints!

---

## 🏋️ Day 10: Exercises

### Exercise: Level 1
1. Write a type guard isNonEmptyString(x: unknown): x is string

### Exercise: Level 2
1. Filter an array of mixed values (strings, numbers, nulls) returning only string[] using a type predicate

### Exercise: Level 3
1. Write assertion function assertPositive(n: number): asserts n is number that throws if n <= 0

---

## 🧪 Verifying Your Work
Run the automated test for Day 10:
```bash
npx tsx 10_Day_Type_predicates/exercise.ts
```

Or verify all 30 days:
```bash
npm test
```

---

## 🎉 Congratulations

🌕 **You are amazing!** You have conquered **Day 10** of 30 Days of TypeScript. Keep the momentum going!

<div align="center">
  <p>[<< Day 9](../09_Day_Type_narrowing/09_day_type_narrowing.md) | [30 Days of TypeScript](../readMe.md) | [Day 11 >>](../11_Day_Discriminated_unions/11_day_discriminated_unions.md)</p>
</div>
