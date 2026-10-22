# 30 Days Of TypeScript: Day 19 - Generics: Functions, Interfaces & Types

<div align="center">
  <p><a href="../18_Day_Enums/18_day_enums.md">&lt;&lt; Day 18</a> | <a href="../README.md">30 Days of TypeScript</a> | <a href="../20_Day_Generics_constraints/20_day_generics_constraints.md">Day 20 &gt;&gt;</a></p>
</div>

---

- [30 Days Of TypeScript: Day 19 - Generics: Functions, Interfaces & Types](#30-days-of-typescript-day-19---generics-functions-interfaces-types)
  - [📖 Overview](#-overview)
  - [🎯 Learning Objectives](#-learning-objectives)
  - [💡 Core Concepts & Deep Dive](#-core-concepts--deep-dive)
    - [1. What is a Generic?](#1-what-is-a-generic-)
    - [2. Generic Functions](#2-generic-functions)
    - [3. Generic Interfaces & Envelope Types](#3-generic-interfaces-envelope-types)
  - [💻 Runnable Lesson Demonstration](#-runnable-lesson-demonstration)
  - [⚠️ Common Pitfalls & Pro Tips](#️-common-pitfalls--pro-tips)
  - [💡 10 In-Depth Practical Examples & Solutions](#-10-in-depth-practical-examples--solutions)
    - [Example 1: Generic Identity Function '<T>(arg: T): T'](#example-1-generic-identity-function-targ-t-t)
    - [Example 2: Multiple Generic Parameters '<T, U>'](#example-2-multiple-generic-parameters-t-u)
    - [Example 3: Generic Interface for API Response Envelope](#example-3-generic-interface-for-api-response-envelope)
    - [Example 4: Generic Type Alias for Paginated Collections](#example-4-generic-type-alias-for-paginated-collections)
    - [Example 5: Default Generic Type Parameters ('<T = string>')](#example-5-default-generic-type-parameters-t-string)
    - [Example 6: Generic Array Reversal and Slicing](#example-6-generic-array-reversal-and-slicing)
    - [Example 7: Generic Box Container](#example-7-generic-box-container)
    - [Example 8: Generic Higher-Order Function (Memoization)](#example-8-generic-higher-order-function-memoization)
    - [Example 9: Type Inference in Generic Invocations](#example-9-type-inference-in-generic-invocations)
    - [Example 10: Generic Event Subscription Store](#example-10-generic-event-subscription-store)
  - [🎉 Congratulations](#-congratulations)

---

## 📖 Overview

Unlock TypeScript's superpower: Generics. Write flexible, reusable code while retaining full static type safety.

---

## 🎯 Learning Objectives

By the end of today, you will be able to:
- [ ] Master **What is a Generic?**
- [ ] Master **Generic Functions**
- [ ] Master **Generic Interfaces & Envelope Types**
- [ ] Study and implement the 10 in-depth practical examples with complete solutions.

---

## 💡 Core Concepts & Deep Dive


### 1. What is a Generic?

A type variable (e.g. <T>) that acts as a placeholder for types provided by callers.


### 2. Generic Functions

Functions that accept type arguments: 'function identity<T>(arg: T): T'.


### 3. Generic Interfaces & Envelope Types

Commonly used for API envelopes: 'interface ApiResponse<T> { data: T; status: number }'.


---

## 💻 Runnable Lesson Demonstration

Execute today's live code in your terminal:
```bash
npm run day:19
```

Here is the source code for today's lesson:
```typescript
// Day 19: Generics: Functions, Interfaces & Types
function identity<T>(value: T): T {
  return value;
}

const str = identity("TypeScript"); // Inferred as string
const num = identity(42);           // Inferred as number

interface Box<T> {
  content: T;
}
const numBox: Box<number> = { content: 100 };
console.log("Box:", numBox);

```

---

## ⚠️ Common Pitfalls & Pro Tips

> [!TIP]
> **Pro Tip**: In TypeScript, the compiler is your pair-programmer. Pay close attention to compiler diagnostic messages—they describe the exact shape mismatch.

> [!WARNING]
> **Common Pitfall**: Do not fall into the trap of using `any` to silence compiler warnings. Use `unknown` with type guards or write proper generic constraints!

---

## 💡 10 In-Depth Practical Examples & Solutions

### Example 1: Generic Identity Function '<T>(arg: T): T'
**Problem / Scenario:**
Create a function that returns whatever value is passed into it while preserving exact typing.

**Solution:**
```typescript
function identity<T>(arg: T): T {
  return arg;
}

const str = identity("Hello Generics"); // Type: string
const num = identity(42);               // Type: number
console.log(str, num);
```

**Explanation & Output:**
The type variable '<T>' captures the argument's type and uses it as the return type, avoiding type loss.

---

### Example 2: Multiple Generic Parameters '<T, U>'
**Problem / Scenario:**
Build a generic pair container holding two different types.

**Solution:**
```typescript
function makePair<T, U>(first: T, second: U): [T, U] {
  return [first, second];
}

const pair = makePair("version", 5.7);
console.log(`Key: ${pair[0]}, Value: ${pair[1]}`);
```

**Explanation & Output:**
Functions can accept multiple generic type variables to express relationships between distinct arguments.

---

### Example 3: Generic Interface for API Response Envelope
**Problem / Scenario:**
Standardize backend API responses wrapping arbitrary data payloads.

**Solution:**
```typescript
interface ApiResponse<T> {
  success: boolean;
  data: T;
  timestamp: number;
}

interface UserData { id: number; name: string }

const response: ApiResponse<UserData> = {
  success: true,
  data: { id: 1, name: "Isaac" },
  timestamp: Date.now()
};

console.log("Response User:", response.data.name);
```

**Explanation & Output:**
Generic interfaces allow creating reusable envelopes that wrap different data types.

---

### Example 4: Generic Type Alias for Paginated Collections
**Problem / Scenario:**
Define a paginated result type for list views.

**Solution:**
```typescript
type Paginated<T> = {
  items: T[];
  total: number;
  page: number;
  hasMore: boolean;
};

const bookPages: Paginated<string> = {
  items: ["Chapter 1", "Chapter 2"],
  total: 10,
  page: 1,
  hasMore: true
};

console.log(`Page ${bookPages.page}: ${bookPages.items.join(", ")}`);
```

**Explanation & Output:**
Generic type aliases provide clean syntax for parameterizing collection structures.

---

### Example 5: Default Generic Type Parameters ('<T = string>')
**Problem / Scenario:**
Provide a sensible default type when callers do not supply a type argument.

**Solution:**
```typescript
interface KeyValuePair<K = string, V = unknown> {
  key: K;
  value: V;
}

// Uses default K = string, V = unknown:
const entry: KeyValuePair = { key: "status", value: 200 };
// Explicitly provides K = number, V = boolean:
const flagged: KeyValuePair<number, boolean> = { key: 42, value: true };

console.log(entry.key, flagged.key);
```

**Explanation & Output:**
Default type parameters reduce boilerplate for consumers by providing standard defaults.

---

### Example 6: Generic Array Reversal and Slicing
**Problem / Scenario:**
Implement an immutable array reverser that retains the original item types.

**Solution:**
```typescript
function reverseList<T>(items: readonly T[]): T[] {
  return [...items].reverse();
}

const words = ["alpha", "beta", "gamma"];
console.log("Reversed words:", reverseList(words));
```

**Explanation & Output:**
Generics allow utility functions to accept and return typed arrays without casting.

---

### Example 7: Generic Box Container
**Problem / Scenario:**
Wrap values in a generic box object with getter and updater methods.

**Solution:**
```typescript
class Box<T> {
  constructor(private value: T) {}

  get(): T { return this.value; }
  set(newValue: T): void { this.value = newValue; }
}

const strBox = new Box<string>("Secret Message");
console.log("Box Content:", strBox.get());
strBox.set("Updated Message");
console.log("New Content:", strBox.get());
```

**Explanation & Output:**
Generic classes maintain state safety across all instance method calls.

---

### Example 8: Generic Higher-Order Function (Memoization)
**Problem / Scenario:**
Cache the results of any single-argument function with type safety.

**Solution:**
```typescript
function memoize<TArg, TResult>(fn: (arg: TArg) => TResult): (arg: TArg) => TResult {
  const cache = new Map<TArg, TResult>();
  return (arg: TArg): TResult => {
    if (cache.has(arg)) {
      return cache.get(arg)!;
    }
    const result = fn(arg);
    cache.set(arg, result);
    return result;
  };
}

const computeSquare = memoize((n: number) => n * n);
console.log("Square of 9:", computeSquare(9));
console.log("Square of 9 (cached):", computeSquare(9));
```

**Explanation & Output:**
Generic closures preserve argument and return types between original and wrapped functions.

---

### Example 9: Type Inference in Generic Invocations
**Problem / Scenario:**
Observe how TypeScript automatically infers '<T>' without explicit angle brackets.

**Solution:**
```typescript
function firstElement<T>(arr: T[]): T | undefined {
  return arr[0];
}

// TypeScript infers T as 'number':
const firstNum = firstElement([10, 20, 30]);
// TypeScript infers T as 'string':
const firstStr = firstElement(["apple", "banana"]);

console.log("First number:", firstNum, "First string:", firstStr);
```

**Explanation & Output:**
You rarely need to write 'firstElement<number>([10])'; type inference deduces 'T' automatically from arguments.

---

### Example 10: Generic Event Subscription Store
**Problem / Scenario:**
Store and retrieve generic callbacks mapped to specific topics.

**Solution:**
```typescript
type Callback<T> = (data: T) => void;

class EventSlot<T> {
  private handlers: Callback<T>[] = [];

  subscribe(handler: Callback<T>): void {
    this.handlers.push(handler);
  }

  notify(data: T): void {
    for (const h of this.handlers) h(data);
  }
}

const userSlot = new EventSlot<{ id: number; name: string }>();
userSlot.subscribe(u => console.log(`Received user: ${u.name}`));
userSlot.notify({ id: 1, name: "Ada Lovelace" });
```

**Explanation & Output:**
Generics allow event channels to guarantee that listeners receive the exact expected payload type.

---

## 🎉 Congratulations

🌕 **You are amazing!** You have conquered **Day 19** of 30 Days of TypeScript. Keep the momentum going!

<div align="center">
  <p><a href="../18_Day_Enums/18_day_enums.md">&lt;&lt; Day 18</a> | <a href="../README.md">30 Days of TypeScript</a> | <a href="../20_Day_Generics_constraints/20_day_generics_constraints.md">Day 20 &gt;&gt;</a></p>
</div>
