# 30 Days Of TypeScript: Day 02 - Primitive Data Types & Type Annotations

<div align="center">
  <p>[<< Day 1](../01_Day_Introduction/01_day_introduction.md) | [30 Days of TypeScript](../readMe.md) | [Day 3 >>](../03_Day_Special_types/03_day_special_types.md)</p>
</div>

---

- [30 Days Of TypeScript: Day 02 - Primitive Data Types & Type Annotations](#30-days-of-typescript-day-02---primitive-data-types-type-annotations)
  - [📖 Overview](#-overview)
  - [🎯 Learning Objectives](#-learning-objectives)
  - [💡 Core Concepts & Deep Dive](#-core-concepts--deep-dive)
    - [1. Numbers & Number Bases](#1-numbers-number-bases)
    - [2. Strings & Template Literals](#2-strings-template-literals)
    - [3. BigInt & Symbol Primitives](#3-bigint-symbol-primitives)
    - [4. Type Inference vs Explicit Annotation](#4-type-inference-vs-explicit-annotation)
  - [💻 Runnable Lesson Demonstration](#-runnable-lesson-demonstration)
  - [⚠️ Common Pitfalls & Pro Tips](#️-common-pitfalls--pro-tips)
  - [🏋️ Day 02: Exercises](#️-day-02-exercises)
    - [Exercise: Level 1](#exercise-level-1)
    - [Exercise: Level 2](#exercise-level-2)
    - [Exercise: Level 3](#exercise-level-3)
  - [🎉 Congratulations](#-congratulations)

---

## 📖 Overview

Learn JavaScript's 7 primitive types in TypeScript: string, number (decimals, hex, binary, octal), boolean, bigint, symbol, null, and undefined, along with explicit annotations vs type inference.

---

## 🎯 Learning Objectives

By the end of today, you will be able to:
- [ ] Master **Numbers & Number Bases**
- [ ] Master **Strings & Template Literals**
- [ ] Master **BigInt & Symbol Primitives**
- [ ] Master **Type Inference vs Explicit Annotation**
- [ ] Complete all Level 1, Level 2, and Level 3 exercises with automated tests passing (`npm test`).

---

## 💡 Core Concepts & Deep Dive


### 1. Numbers & Number Bases

TypeScript supports standard decimal numbers, hex (0xFF), binary (0b1010), octal (0o744), plus NaN and Infinity.


### 2. Strings & Template Literals

Strings represent text. Always use lowercase 'string', 'number', 'boolean' rather than wrapper objects 'String', 'Number', 'Boolean'.


### 3. BigInt & Symbol Primitives

BigInt handles arbitrary-precision integers (target ES2020+). Symbols are guaranteed unique and immutable primitive keys.


### 4. Type Inference vs Explicit Annotation

TypeScript infers types when a literal is assigned immediately. Annotations are crucial for function signatures and uninitialized variables.


---

## 💻 Runnable Lesson Demonstration

Execute today's live code in your terminal:
```bash
npm run day:02
```

Here is the source code for today's lesson:
```typescript
// Day 02: Primitive Data Types & Type Annotations
// 1. Numbers in various bases
const decimal: number = 42;
const hex: number = 0x2a;
const binary: number = 0b101010;
const octal: number = 0o52;
console.log("Decimal:", decimal, "Hex:", hex, "Binary:", binary, "Octal:", octal);

// 2. Strings & Template Literals
const author: string = "Anders Hejlsberg";
const quote: string = `"TypeScript makes JavaScript scalable." - ${author}`;
console.log(quote);

// 3. BigInt and Symbol
const bigVal: bigint = 9007199254740991n + 2n;
const symKey: symbol = Symbol("uniqueKey");
console.log("BigInt:", bigVal, "Symbol:", symKey.toString());

// 4. Null and Undefined
const emptyVal: null = null;
const notAssigned: undefined = undefined;
console.log("Null:", emptyVal, "Undefined:", notAssigned);

```

---

## ⚠️ Common Pitfalls & Pro Tips

> [!TIP]
> **Pro Tip**: In TypeScript, the compiler is your pair-programmer. Pay close attention to compiler diagnostic messages—they describe the exact shape mismatch.

> [!WARNING]
> **Common Pitfall**: Do not fall into the trap of using `any` to silence compiler warnings. Use `unknown` with type guards or write proper generic constraints!

---

## 🏋️ Day 02: Exercises

### Exercise: Level 1
1. Format cents into a currency string (e.g., 2500 -> '$25.00')

### Exercise: Level 2
1. Parse binary string representation (e.g. '1010') into its decimal number value

### Exercise: Level 3
1. Generate a unique metadata descriptor using a Symbol and return object { key: symbol, label: string }

---

## 🧪 Verifying Your Work
Run the automated test for Day 02:
```bash
npx tsx 02_Day_Primitive_types/exercise.ts
```

Or verify all 30 days:
```bash
npm test
```

---

## 🎉 Congratulations

🌕 **You are amazing!** You have conquered **Day 02** of 30 Days of TypeScript. Keep the momentum going!

<div align="center">
  <p>[<< Day 1](../01_Day_Introduction/01_day_introduction.md) | [30 Days of TypeScript](../readMe.md) | [Day 3 >>](../03_Day_Special_types/03_day_special_types.md)</p>
</div>
