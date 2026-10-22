# 30 Days Of TypeScript: Day 03 - Special Types: any, unknown, never, void

<div align="center">
  <p><a href="../02_Day_Primitive_types/02_day_primitive_types.md">&lt;&lt; Day 2</a> | <a href="../README.md">30 Days of TypeScript</a> | <a href="../04_Day_Arrays/04_day_arrays.md">Day 4 &gt;&gt;</a></p>
</div>

---

- [30 Days Of TypeScript: Day 03 - Special Types: any, unknown, never, void](#30-days-of-typescript-day-03---special-types-any-unknown-never-void)
  - [📖 Overview](#-overview)
  - [🎯 Learning Objectives](#-learning-objectives)
  - [💡 Core Concepts & Deep Dive](#-core-concepts--deep-dive)
    - [1. The Danger of any](#1-the-danger-of-any)
    - [2. The Safety of unknown](#2-the-safety-of-unknown)
    - [3. void vs never](#3-void-vs-never)
  - [💻 Runnable Lesson Demonstration](#-runnable-lesson-demonstration)
  - [⚠️ Common Pitfalls & Pro Tips](#️-common-pitfalls--pro-tips)
  - [💡 10 In-Depth Practical Examples & Solutions](#-10-in-depth-practical-examples--solutions)
    - [Example 1: Why 'any' Breaks Type Safety](#example-1-why-any-breaks-type-safety)
    - [Example 2: Safe API Response Handling with 'unknown'](#example-2-safe-api-response-handling-with-unknown)
    - [Example 3: Narrowing 'unknown' with Primitive Type Guards](#example-3-narrowing-unknown-with-primitive-type-guards)
    - [Example 4: Understanding 'void' in Callback Return Types](#example-4-understanding-void-in-callback-return-types)
    - [Example 5: Exhaustive Switch Checking with 'never'](#example-5-exhaustive-switch-checking-with-never)
    - [Example 6: Throwing Exceptions with 'never' Return Type](#example-6-throwing-exceptions-with-never-return-type)
    - [Example 7: Safe JSON Parser Returning 'unknown'](#example-7-safe-json-parser-returning-unknown)
    - [Example 8: Infinite Polling Loop Typed as 'never'](#example-8-infinite-polling-loop-typed-as-never)
    - [Example 9: Contrasting 'void' vs 'undefined'](#example-9-contrasting-void-vs-undefined)
    - [Example 10: Type-Safe Event Dispatcher with 'void' Listeners](#example-10-type-safe-event-dispatcher-with-void-listeners)
  - [🎉 Congratulations](#-congratulations)

---

## 📖 Overview

Explore TypeScript's special types: why any is the ultimate anti-pattern, why unknown is the type-safe champion, how void handles side effects, and how never guarantees unreachability.

---

## 🎯 Learning Objectives

By the end of today, you will be able to:
- [ ] Master **The Danger of any**
- [ ] Master **The Safety of unknown**
- [ ] Master **void vs never**
- [ ] Study and implement the 10 in-depth practical examples with complete solutions.

---

## 💡 Core Concepts & Deep Dive


### 1. The Danger of any

'any' completely disables the compiler, removing all safety guarantees and reintroducing runtime bugs.


### 2. The Safety of unknown

'unknown' is the type-safe counterpart of 'any'. Any value can be assigned to unknown, but you MUST narrow it before operating.


### 3. void vs never

'void' indicates a function returns nothing (returns undefined). 'never' indicates a function never returns (throws error or infinite loop).


---

## 💻 Runnable Lesson Demonstration

Execute today's live code in your terminal:
```bash
npm run day:03
```

Here is the source code for today's lesson:
```typescript
// Day 03: Special Types: any, unknown, never, void
// 1. any: avoid in production!
const loose: any = "hello";
// loose.nonExistentMethod(); // No compile error, but will crash at runtime!

// 2. unknown: safe and requiring type narrowing
const rawPayload: unknown = JSON.parse('{"id": 1, "name": "TypeScript"}');
if (typeof rawPayload === "object" && rawPayload !== null && "name" in rawPayload) {
  console.log("Safely extracted name:", (rawPayload as { name: string }).name);
}

// 3. void: functions that perform side-effects
function logAlert(message: string): void {
  console.log("[ALERT]:", message);
}
logAlert("System running smoothly");

// 4. never: unreachable code and exhaustiveness
function fail(errorMsg: string): never {
  throw new Error(errorMsg);
}

```

---

## ⚠️ Common Pitfalls & Pro Tips

> [!TIP]
> **Pro Tip**: In TypeScript, the compiler is your pair-programmer. Pay close attention to compiler diagnostic messages—they describe the exact shape mismatch.

> [!WARNING]
> **Common Pitfall**: Do not fall into the trap of using `any` to silence compiler warnings. Use `unknown` with type guards or write proper generic constraints!

---

## 💡 10 In-Depth Practical Examples & Solutions

### Example 1: Why 'any' Breaks Type Safety
**Problem / Scenario:**
Demonstrate how 'any' disables compiler protection and leads to unexpected runtime crashes.

**Solution:**
```typescript
let unsafeData: any = "just a string";

// Unsafe: Compiles without error, but crashes at runtime!
// unsafeData.nonExistentMethod();

// Safer approach: use unknown or explicit types
let safeData: unknown = "just a string";
if (typeof safeData === "string") {
  console.log("Length of safeData:", safeData.length);
}
```

**Explanation & Output:**
'any' silences all compiler checks. Any call, property access, or assignment is allowed, abandoning TypeScript's benefits.

---

### Example 2: Safe API Response Handling with 'unknown'
**Problem / Scenario:**
Safely process an unvalidated API JSON response by typing it as 'unknown' before inspection.

**Solution:**
```typescript
function parseApiResponse(jsonString: string): unknown {
  return JSON.parse(jsonString);
}

const rawResponse = parseApiResponse('{"userId": 42, "role": "admin"}');

if (
  typeof rawResponse === "object" &&
  rawResponse !== null &&
  "userId" in rawResponse &&
  typeof (rawResponse as { userId: unknown }).userId === "number"
) {
  console.log("Verified User ID:", (rawResponse as { userId: number }).userId);
}
```

**Explanation & Output:**
'unknown' requires explicit type checking before you can read properties or invoke methods, making it ideal for untrusted inputs.

---

### Example 3: Narrowing 'unknown' with Primitive Type Guards
**Problem / Scenario:**
Write a function that accepts 'unknown' and formats it depending on whether it is a string, number, or boolean.

**Solution:**
```typescript
function formatUnknown(val: unknown): string {
  if (typeof val === "string") {
    return `String: "${val.trim()}"`;
  }
  if (typeof val === "number") {
    return `Number: ${val.toFixed(2)}`;
  }
  if (typeof val === "boolean") {
    return `Boolean: ${val ? "TRUE" : "FALSE"}`;
  }
  return "Unsupported type";
}

console.log(formatUnknown("  hello  "));
console.log(formatUnknown(123.456));
console.log(formatUnknown(true));
```

**Explanation & Output:**
TypeScript's control flow analysis narrows 'unknown' to specific primitives inside 'typeof' branches.

---

### Example 4: Understanding 'void' in Callback Return Types
**Problem / Scenario:**
Observe how 'void' indicates that a function caller will ignore the return value.

**Solution:**
```typescript
type ClickHandler = (event: string) => void;

// Implementation can return a value, but the consumer will ignore it
const handleClick: ClickHandler = (event) => {
  console.log("Handled click for:", event);
  return true; // Allowed in callbacks with void return type!
};

handleClick("submitButton");
```

**Explanation & Output:**
In TypeScript callback signatures, 'void' does not force the function to return 'undefined'; it signals that callers won't inspect the returned value.

---

### Example 5: Exhaustive Switch Checking with 'never'
**Problem / Scenario:**
Use the 'never' type in the default branch of a switch statement to ensure all union variants are handled.

**Solution:**
```typescript
type UserRole = "guest" | "member" | "admin";

function getDashboardUrl(role: UserRole): string {
  switch (role) {
    case "guest": return "/public";
    case "member": return "/dashboard";
    case "admin": return "/admin-portal";
    default: {
      const _exhaustiveCheck: never = role;
      throw new Error(`Unhandled role: ${_exhaustiveCheck}`);
    }
  }
}

console.log("Admin Dashboard:", getDashboardUrl("admin"));
```

**Explanation & Output:**
If you add a new role like 'superadmin' to 'UserRole' without adding a corresponding case branch, TypeScript fails to compile because 'role' cannot be assigned to 'never'.

---

### Example 6: Throwing Exceptions with 'never' Return Type
**Problem / Scenario:**
Define a fail-fast assertion helper that never returns to its call site.

**Solution:**
```typescript
function panic(errorMessage: string): never {
  throw new Error(`[CRITICAL FAILURE] ${errorMessage}`);
}

function processPositiveNumber(num: number): number {
  if (num <= 0) {
    panic("Number must be strictly positive");
  }
  return Math.sqrt(num);
}

console.log("Square root of 25:", processPositiveNumber(25));
```

**Explanation & Output:**
Functions that always throw an exception or never complete have a return type of 'never', allowing TypeScript to infer that subsequent code is unreachable if called.

---

### Example 7: Safe JSON Parser Returning 'unknown'
**Problem / Scenario:**
Wrap 'JSON.parse' in a safe helper that catches syntax errors and returns 'unknown'.

**Solution:**
```typescript
function safeJsonParse(text: string): unknown {
  try {
    return JSON.parse(text);
  } catch {
    return null;
  }
}

const parsed = safeJsonParse('{"status": "ok"}');
if (typeof parsed === "object" && parsed !== null && "status" in parsed) {
  console.log("Status:", (parsed as { status: unknown }).status);
}
```

**Explanation & Output:**
Returning 'unknown' instead of 'any' from JSON parsing forces downstream consumers to validate data structures before use.

---

### Example 8: Infinite Polling Loop Typed as 'never'
**Problem / Scenario:**
Type an endless event loop function as returning 'never'.

**Solution:**
```typescript
function infiniteHeartbeat(): never {
  while (true) {
    // In real apps: poll server or wait for socket event
    throw new Error("Loop terminated for demonstration");
  }
}

// Any code placed after infiniteHeartbeat() is recognized as unreachable by the compiler.
```

**Explanation & Output:**
An infinite loop that never finishes execution without throwing has a return type of 'never'.

---

### Example 9: Contrasting 'void' vs 'undefined'
**Problem / Scenario:**
Understand when a function must explicitly return 'undefined' vs when it returns 'void'.

**Solution:**
```typescript
// Returns void: does not require a return statement
function logMessage(msg: string): void {
  console.log("LOG:", msg);
}

// Returns undefined: MUST explicitly return undefined
function getNothing(): undefined {
  return undefined;
}

logMessage("System initialized");
console.log("Explicit undefined:", getNothing());
```

**Explanation & Output:**
'void' represents the absence of a meaningful return value. 'undefined' is a literal JavaScript primitive value that must be explicitly returned if declared.

---

### Example 10: Type-Safe Event Dispatcher with 'void' Listeners
**Problem / Scenario:**
Build a mini event listener registry where callbacks perform side-effects without returning data.

**Solution:**
```typescript
type Listener = (data: string) => void;

class SimpleEmitter {
  private listeners: Listener[] = [];

  subscribe(fn: Listener): void {
    this.listeners.push(fn);
  }

  emit(data: string): void {
    for (const fn of this.listeners) {
      fn(data);
    }
  }
}

const emitter = new SimpleEmitter();
emitter.subscribe((msg) => console.log("Received:", msg));
emitter.emit("Hello Subscribers!");
```

**Explanation & Output:**
Typing event handlers as '(data: string) => void' documents that the emitter will trigger the function purely for its side effects.

---

## 🎉 Congratulations

🌕 **You are amazing!** You have conquered **Day 03** of 30 Days of TypeScript. Keep the momentum going!

<div align="center">
  <p><a href="../02_Day_Primitive_types/02_day_primitive_types.md">&lt;&lt; Day 2</a> | <a href="../README.md">30 Days of TypeScript</a> | <a href="../04_Day_Arrays/04_day_arrays.md">Day 4 &gt;&gt;</a></p>
</div>
