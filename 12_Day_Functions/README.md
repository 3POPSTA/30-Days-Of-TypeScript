# 30 Days Of TypeScript: Day 12 - Functions, Parameters, Rest & Optional

<div align="center">
  <p><a href="../11_Day_Discriminated_unions/11_day_discriminated_unions.md">&lt;&lt; Day 11</a> | <a href="../README.md">30 Days of TypeScript</a> | <a href="../13_Day_Function_overloading/13_day_function_overloading.md">Day 13 &gt;&gt;</a></p>
</div>

---

- [30 Days Of TypeScript: Day 12 - Functions, Parameters, Rest & Optional](#30-days-of-typescript-day-12---functions-parameters-rest-optional)
  - [📖 Overview](#-overview)
  - [🎯 Learning Objectives](#-learning-objectives)
  - [💡 Core Concepts & Deep Dive](#-core-concepts--deep-dive)
    - [1. Function Signatures](#1-function-signatures)
    - [2. Rest Parameters](#2-rest-parameters)
    - [3. Callback Typing](#3-callback-typing)
  - [💻 Runnable Lesson Demonstration](#-runnable-lesson-demonstration)
  - [⚠️ Common Pitfalls & Pro Tips](#️-common-pitfalls--pro-tips)
  - [💡 10 In-Depth Practical Examples & Solutions](#-10-in-depth-practical-examples--solutions)
    - [Example 1: Explicit Parameter and Return Type Annotations](#example-1-explicit-parameter-and-return-type-annotations)
    - [Example 2: Optional Parameters with Default Fallbacks](#example-2-optional-parameters-with-default-fallbacks)
    - [Example 3: Rest Parameters for Variadic Summation](#example-3-rest-parameters-for-variadic-summation)
    - [Example 4: Destructured Parameter Objects with Type Signatures](#example-4-destructured-parameter-objects-with-type-signatures)
    - [Example 5: Contextual Typing in Higher-Order Callbacks](#example-5-contextual-typing-in-higher-order-callbacks)
    - [Example 6: Function Factories (Currying & Closures)](#example-6-function-factories-currying-closures)
    - [Example 7: 'void' Callbacks vs Expected Return Values](#example-7-void-callbacks-vs-expected-return-values)
    - [Example 8: Readonly Parameters to Prevent Mutation](#example-8-readonly-parameters-to-prevent-mutation)
    - [Example 9: Generic Function Pipeline / Compose](#example-9-generic-function-pipeline-compose)
    - [Example 10: Asynchronous Function Signatures with Error Handling](#example-10-asynchronous-function-signatures-with-error-handling)
  - [🎉 Congratulations](#-congratulations)

---

## 📖 Overview

Write robust functions with typed parameters, optional arguments, default values, rest parameters, and typed callback handlers.

---

## 🎯 Learning Objectives

By the end of today, you will be able to:
- [ ] Master **Function Signatures**
- [ ] Master **Rest Parameters**
- [ ] Master **Callback Typing**
- [ ] Study and implement the 10 in-depth practical examples with complete solutions.

---

## 💡 Core Concepts & Deep Dive


### 1. Function Signatures

Explicitly annotating parameters and return types prevents unintended returns and invalid callers.


### 2. Rest Parameters

Gather any number of trailing arguments into a typed array: '...nums: number[]'.


### 3. Callback Typing

Type higher-order callbacks: '(item: T, index: number) => boolean'.


---

## 💻 Runnable Lesson Demonstration

Execute today's live code in your terminal:
```bash
npm run day:12
```

Here is the source code for today's lesson:
```typescript
// Day 12: Functions, Parameters, Rest & Optional
function createGreeting(name: string, title: string = "Developer", salutation?: string): string {
  const prefix = salutation ? `${salutation} ` : "";
  return `${prefix}${title} ${name}`;
}

console.log(createGreeting("Ada", "Architect", "Welcome"));

// Variadic rest parameter
function sumAll(...numbers: number[]): number {
  return numbers.reduce((a, b) => a + b, 0);
}
console.log("Sum all:", sumAll(1, 2, 3, 4, 5));

```

---

## ⚠️ Common Pitfalls & Pro Tips

> [!TIP]
> **Pro Tip**: In TypeScript, the compiler is your pair-programmer. Pay close attention to compiler diagnostic messages—they describe the exact shape mismatch.

> [!WARNING]
> **Common Pitfall**: Do not fall into the trap of using `any` to silence compiler warnings. Use `unknown` with type guards or write proper generic constraints!

---

## 💡 10 In-Depth Practical Examples & Solutions

### Example 1: Explicit Parameter and Return Type Annotations
**Problem / Scenario:**
Write functions with explicit signatures to prevent unintended implicit 'any'.

**Solution:**
```typescript
function calculateTax(subtotal: number, taxRate: number): number {
  return subtotal * taxRate;
}

const tax = calculateTax(150.00, 0.08);
console.log("Tax Amount:", tax.toFixed(2));
```

**Explanation & Output:**
Annotating both parameters and return types documents function contracts and catches return value mismatches early.

---

### Example 2: Optional Parameters with Default Fallbacks
**Problem / Scenario:**
Declare optional function parameters and provide clean default values.

**Solution:**
```typescript
function formatGreeting(name: string, prefix: string = "Hello", punctuation?: string): string {
  const mark = punctuation ?? "!";
  return `${prefix}, ${name}${mark}`;
}

console.log(formatGreeting("Alice"));
console.log(formatGreeting("Bob", "Good morning", "."));
```

**Explanation & Output:**
Parameters with default values ('prefix: string = ...') are automatically optional for callers; optional parameters '?' can be omitted.

---

### Example 3: Rest Parameters for Variadic Summation
**Problem / Scenario:**
Accept an arbitrary number of numeric arguments and compute their total.

**Solution:**
```typescript
function sumAll(...numbers: number[]): number {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}

console.log("Sum 3 items:", sumAll(1, 2, 3));
console.log("Sum 5 items:", sumAll(10, 20, 30, 40, 50));
```

**Explanation & Output:**
Rest parameters '...args: T[]' bundle variable arguments into a typed array accessible within the function body.

---

### Example 4: Destructured Parameter Objects with Type Signatures
**Problem / Scenario:**
Type an options parameter object when destructuring directly in the argument list.

**Solution:**
```typescript
interface CreateUserOptions {
  username: string;
  email: string;
  isAdmin?: boolean;
}

function createUser({ username, email, isAdmin = false }: CreateUserOptions): string {
  return `Created user ${username} (${email}) - Admin: ${isAdmin}`;
}

console.log(createUser({ username: "grace", email: "grace@test.com" }));
```

**Explanation & Output:**
Destructuring directly in parameters requires specifying the type contract after the destructuring pattern.

---

### Example 5: Contextual Typing in Higher-Order Callbacks
**Problem / Scenario:**
Observe how TypeScript infers parameter types inside callbacks from the enclosing method signature.

**Solution:**
```typescript
const names = ["Ada", "Alan", "Grace"];

// 'n' is contextually typed as 'string' based on names being string[]
const upperNames = names.map(n => n.toUpperCase());
console.log("Uppercase names:", upperNames);
```

**Explanation & Output:**
Contextual typing allows you to omit parameter annotations in closures when the calling context already specifies the type.

---

### Example 6: Function Factories (Currying & Closures)
**Problem / Scenario:**
Create a multiplier factory function that returns a customized math function.

**Solution:**
```typescript
function createMultiplier(factor: number): (value: number) => number {
  return (value: number) => value * factor;
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log("Double 7:", double(7));
console.log("Triple 7:", triple(7));
```

**Explanation & Output:**
TypeScript supports higher-order functions by letting return types be function signatures like '(value: number) => number'.

---

### Example 7: 'void' Callbacks vs Expected Return Values
**Problem / Scenario:**
Understand why callback functions typed with 'void' can safely return values without causing compiler errors.

**Solution:**
```typescript
const storage: number[] = [];

function runSideEffect(callback: (item: number) => void): void {
  for (let i = 1; i <= 3; i++) {
    callback(i);
  }
}

// Array.prototype.push returns the new length (a number), but it is allowed:
runSideEffect(n => storage.push(n));
console.log("Storage:", storage);
```

**Explanation & Output:**
In callback positions, 'void' means 'the caller will ignore any return value', providing flexibility for callers.

---

### Example 8: Readonly Parameters to Prevent Mutation
**Problem / Scenario:**
Prevent helper functions from mutating input collections passed by reference.

**Solution:**
```typescript
function sortAscending(list: readonly number[]): number[] {
  // list.sort(); // Compile Error: sort does not exist on readonly number[]
  return [...list].sort((a, b) => a - b);
}

const originalScores = [40, 10, 50, 20];
const sorted = sortAscending(originalScores);
console.log("Original (unmutated):", originalScores);
console.log("Sorted copy:", sorted);
```

**Explanation & Output:**
Marking parameters as 'readonly T[]' ensures pure, side-effect-free function implementations.

---

### Example 9: Generic Function Pipeline / Compose
**Problem / Scenario:**
Compose multiple single-argument functions into a clean data pipeline.

**Solution:**
```typescript
function pipe<A, B, C>(fn1: (a: A) => B, fn2: (b: B) => C): (a: A) => C {
  return (a: A) => fn2(fn1(a));
}

const trim = (s: string) => s.trim();
const getLength = (s: string) => s.length;
const trimmedLength = pipe(trim, getLength);

console.log("Trimmed length:", trimmedLength("  TypeScript Pipeline  "));
```

**Explanation & Output:**
Generics allow composing functions where the output type of the first step seamlessly flows into the input of the second.

---

### Example 10: Asynchronous Function Signatures with Error Handling
**Problem / Scenario:**
Type async functions returning Promises and handle errors with typed signatures.

**Solution:**
```typescript
async function fetchUserData(id: number): Promise<{ id: number; username: string }> {
  if (id <= 0) {
    throw new Error("Invalid User ID");
  }
  return { id, username: `user_${id}` };
}

fetchUserData(10)
  .then(u => console.log("Fetched user:", u.username))
  .catch(err => console.error(err.message));
```

**Explanation & Output:**
Async functions always return 'Promise<T>', and TypeScript verifies that returned values match type 'T'.

---

## 🎉 Congratulations

🌕 **You are amazing!** You have conquered **Day 12** of 30 Days of TypeScript. Keep the momentum going!

<div align="center">
  <p><a href="../11_Day_Discriminated_unions/11_day_discriminated_unions.md">&lt;&lt; Day 11</a> | <a href="../README.md">30 Days of TypeScript</a> | <a href="../13_Day_Function_overloading/13_day_function_overloading.md">Day 13 &gt;&gt;</a></p>
</div>
