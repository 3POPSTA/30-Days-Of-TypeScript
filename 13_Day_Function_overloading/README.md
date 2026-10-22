# 30 Days Of TypeScript: Day 13 - Function Overloading & Signatures

<div align="center">
  <p><a href="../12_Day_Functions/12_day_functions.md">&lt;&lt; Day 12</a> | <a href="../README.md">30 Days of TypeScript</a> | <a href="../14_Day_Interfaces/14_day_interfaces.md">Day 14 &gt;&gt;</a></p>
</div>

---

- [30 Days Of TypeScript: Day 13 - Function Overloading & Signatures](#30-days-of-typescript-day-13---function-overloading-signatures)
  - [📖 Overview](#-overview)
  - [🎯 Learning Objectives](#-learning-objectives)
  - [💡 Core Concepts & Deep Dive](#-core-concepts--deep-dive)
    - [1. Overload Signatures](#1-overload-signatures)
    - [2. Implementation Signature](#2-implementation-signature)
  - [💻 Runnable Lesson Demonstration](#-runnable-lesson-demonstration)
  - [⚠️ Common Pitfalls & Pro Tips](#️-common-pitfalls--pro-tips)
  - [💡 10 In-Depth Practical Examples & Solutions](#-10-in-depth-practical-examples--solutions)
    - [Example 1: Single Parameter Overload (String vs Number Input)](#example-1-single-parameter-overload-string-vs-number-input)
    - [Example 2: Variable Argument Count Overloads](#example-2-variable-argument-count-overloads)
    - [Example 3: DOM-Style Element Query Overload](#example-3-dom-style-element-query-overload)
    - [Example 4: Coordinate Setter Overload](#example-4-coordinate-setter-overload)
    - [Example 5: Cache Getter Overload with Fallback](#example-5-cache-getter-overload-with-fallback)
    - [Example 6: Array vs Single Item Processing Overload](#example-6-array-vs-single-item-processing-overload)
    - [Example 7: Class Method Overloading](#example-7-class-method-overloading)
    - [Example 8: Handling Optional Callbacks with Overloads](#example-8-handling-optional-callbacks-with-overloads)
    - [Example 9: Generic Function Overloading for Key-Value Lookups](#example-9-generic-function-overloading-for-key-value-lookups)
    - [Example 10: Strict Implementation Signature Rules](#example-10-strict-implementation-signature-rules)
  - [🎉 Congratulations](#-congratulations)

---

## 📖 Overview

Implement functions that return different types depending on their input arguments using overload signatures.

---

## 🎯 Learning Objectives

By the end of today, you will be able to:
- [ ] Master **Overload Signatures**
- [ ] Master **Implementation Signature**
- [ ] Study and implement the 10 in-depth practical examples with complete solutions.

---

## 💡 Core Concepts & Deep Dive


### 1. Overload Signatures

List multiple caller-facing headers before the implementation to define allowable parameter combinations.


### 2. Implementation Signature

The single function body that implements all overloads using union types and narrowing.


---

## 💻 Runnable Lesson Demonstration

Execute today's live code in your terminal:
```bash
npm run day:13
```

Here is the source code for today's lesson:
```typescript
// Day 13: Function Overloading & Signatures
function parseValue(val: string): number;
function parseValue(val: number): string;
function parseValue(val: string | number): string | number {
  if (typeof val === "string") return parseFloat(val);
  return val.toString();
}

const num = parseValue("42.5"); // Inferred strictly as number
const str = parseValue(100);    // Inferred strictly as string
console.log("Parsed:", num, typeof num, str, typeof str);

```

---

## ⚠️ Common Pitfalls & Pro Tips

> [!TIP]
> **Pro Tip**: In TypeScript, the compiler is your pair-programmer. Pay close attention to compiler diagnostic messages—they describe the exact shape mismatch.

> [!WARNING]
> **Common Pitfall**: Do not fall into the trap of using `any` to silence compiler warnings. Use `unknown` with type guards or write proper generic constraints!

---

## 💡 10 In-Depth Practical Examples & Solutions

### Example 1: Single Parameter Overload (String vs Number Input)
**Problem / Scenario:**
Create a formatter that behaves differently when passed a string vs a number.

**Solution:**
```typescript
function formatInput(val: string): string;
function formatInput(val: number): string;
function formatInput(val: string | number): string {
  if (typeof val === "number") {
    return `NUM: ${val.toFixed(2)}`;
  }
  return `STR: ${val.toUpperCase()}`;
}

console.log(formatInput(42));
console.log(formatInput("typescript"));
```

**Explanation & Output:**
Overload signatures describe the public API, while the implementation signature handles all possible parameter combinations.

---

### Example 2: Variable Argument Count Overloads
**Problem / Scenario:**
Support calling a date constructor with a timestamp or with separate year/month/day arguments.

**Solution:**
```typescript
function makeDate(timestamp: number): Date;
function makeDate(year: number, month: number, day: number): Date;
function makeDate(yearOrTimestamp: number, month?: number, day?: number): Date {
  if (month !== undefined && day !== undefined) {
    return new Date(yearOrTimestamp, month - 1, day);
  }
  return new Date(yearOrTimestamp);
}

console.log("From timestamp:", makeDate(1700000000000).getFullYear());
console.log("From YMD:", makeDate(2026, 10, 22).toISOString().split("T")[0]);
```

**Explanation & Output:**
Overloads allow callers to pass either 1 argument or 3 arguments, preventing confusing 2-argument calls.

---

### Example 3: DOM-Style Element Query Overload
**Problem / Scenario:**
Return specific HTML element types depending on the tag name selector.

**Solution:**
```typescript
interface MockButton { tag: "button"; click(): void }
interface MockInput { tag: "input"; value: string }
interface MockDiv { tag: "div"; text: string }

function queryElement(tag: "button"): MockButton;
function queryElement(tag: "input"): MockInput;
function queryElement(tag: "div"): MockDiv;
function queryElement(tag: string): { tag: string } {
  return { tag };
}

const btn = queryElement("button");
console.log("Queried element tag:", btn.tag);
```

**Explanation & Output:**
Matching string literal parameters in overload signatures allows returning the exact specialized type for each tag.

---

### Example 4: Coordinate Setter Overload
**Problem / Scenario:**
Allow setting coordinates either via two numbers (x, y) or a single object { x, y }.

**Solution:**
```typescript
interface Point { x: number; y: number }

function setCoordinates(x: number, y: number): Point;
function setCoordinates(point: Point): Point;
function setCoordinates(arg1: number | Point, arg2?: number): Point {
  if (typeof arg1 === "object") {
    return { x: arg1.x, y: arg1.y };
  }
  return { x: arg1, y: arg2! };
}

console.log("Coords from pair:", setCoordinates(10, 20));
console.log("Coords from object:", setCoordinates({ x: 50, y: 100 }));
```

**Explanation & Output:**
Overloads provide ergonomic flexibility so consumers can pass arguments in the format most convenient for them.

---

### Example 5: Cache Getter Overload with Fallback
**Problem / Scenario:**
Return 'string | undefined' if no fallback is provided, or strictly 'string' if a fallback is supplied.

**Solution:**
```typescript
function getCached(key: string): string | undefined;
function getCached(key: string, fallback: string): string;
function getCached(key: string, fallback?: string): string | undefined {
  const cache: Record<string, string> = { theme: "dark" };
  return cache[key] ?? fallback;
}

const val1: string | undefined = getCached("missing");
const val2: string = getCached("missing", "default_val");
console.log("Val 1:", val1);
console.log("Val 2:", val2);
```

**Explanation & Output:**
Overloading return types based on whether a fallback argument is present removes unnecessary 'undefined' checks for consumers.

---

### Example 6: Array vs Single Item Processing Overload
**Problem / Scenario:**
Accept a single item and return a single result, or accept an array and return an array.

**Solution:**
```typescript
function doubleItems(val: number): number;
function doubleItems(val: number[]): number[];
function doubleItems(val: number | number[]): number | number[] {
  if (Array.isArray(val)) {
    return val.map(n => n * 2);
  }
  return val * 2;
}

const singleRes: number = doubleItems(21);
const arrayRes: number[] = doubleItems([1, 2, 3]);
console.log("Single:", singleRes);
console.log("Array:", arrayRes);
```

**Explanation & Output:**
Overload signatures preserve the 1:1 relationship between single input -> single output and array input -> array output.

---

### Example 7: Class Method Overloading
**Problem / Scenario:**
Overload a method inside a TypeScript class for flexible invocations.

**Solution:**
```typescript
class Logger {
  log(message: string): void;
  log(error: Error): void;
  log(arg: string | Error): void {
    if (arg instanceof Error) {
      console.error(`[ERROR] ${arg.message}`);
    } else {
      console.log(`[INFO] ${arg}`);
    }
  }
}

const logger = new Logger();
logger.log("Application started");
logger.log(new Error("Database connection lost"));
```

**Explanation & Output:**
Methods in classes follow the exact same overloading syntax and rules as standalone functions.

---

### Example 8: Handling Optional Callbacks with Overloads
**Problem / Scenario:**
Support synchronous execution when no callback is provided, or invoke the callback if given.

**Solution:**
```typescript
function executeTask(taskId: string): boolean;
function executeTask(taskId: string, onDone: (status: boolean) => void): void;
function executeTask(taskId: string, onDone?: (status: boolean) => void): boolean | void {
  const success = taskId.length > 0;
  if (onDone) {
    onDone(success);
    return;
  }
  return success;
}

const synResult: boolean = executeTask("TASK-101");
executeTask("TASK-102", (ok) => console.log("Callback received status:", ok));
```

**Explanation & Output:**
Overloading distinguishes synchronous return values from void callback-style invocations.

---

### Example 9: Generic Function Overloading for Key-Value Lookups
**Problem / Scenario:**
Look up typed properties from an object with overload fallback handling.

**Solution:**
```typescript
function getProp<T, K extends keyof T>(obj: T, key: K): T[K];
function getProp<T, K extends keyof T>(obj: T, key: K, fallback: T[K]): T[K];
function getProp<T, K extends keyof T>(obj: T, key: K, fallback?: T[K]): T[K] {
  return obj[key] ?? fallback!;
}

const user = { name: "Helen", age: 32 };
console.log("Name:", getProp(user, "name"));
console.log("Age:", getProp(user, "age", 0));
```

**Explanation & Output:**
Combining generics with function overloading delivers accurate type checking across dynamic property queries.

---

### Example 10: Strict Implementation Signature Rules
**Problem / Scenario:**
Ensure the implementation signature is broad enough to satisfy all overload variants.

**Solution:**
```typescript
// Overloads
function parseValue(raw: string): string;
function parseValue(raw: number): number;
// Implementation signature MUST be compatible with (string) and (number):
function parseValue(raw: string | number): string | number {
  return raw;
}

console.log("Parsed string:", parseValue("hello"));
console.log("Parsed number:", parseValue(100));
```

**Explanation & Output:**
The implementation signature is never directly callable by external consumers; only declared overloads are exposed.

---

## 🎉 Congratulations

🌕 **You are amazing!** You have conquered **Day 13** of 30 Days of TypeScript. Keep the momentum going!

<div align="center">
  <p><a href="../12_Day_Functions/12_day_functions.md">&lt;&lt; Day 12</a> | <a href="../README.md">30 Days of TypeScript</a> | <a href="../14_Day_Interfaces/14_day_interfaces.md">Day 14 &gt;&gt;</a></p>
</div>
