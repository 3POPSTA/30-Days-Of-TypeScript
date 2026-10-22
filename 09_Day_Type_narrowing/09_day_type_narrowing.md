# 30 Days Of TypeScript: Day 09 - Type Narrowing & Control Flow Analysis

<div align="center">
  <p><a href="../08_Day_Unions_and_literals/08_day_unions_and_literals.md">&lt;&lt; Day 8</a> | <a href="../README.md">30 Days of TypeScript</a> | <a href="../10_Day_Type_predicates/10_day_type_predicates.md">Day 10 &gt;&gt;</a></p>
</div>

---

- [30 Days Of TypeScript: Day 09 - Type Narrowing & Control Flow Analysis](#30-days-of-typescript-day-09---type-narrowing-control-flow-analysis)
  - [📖 Overview](#-overview)
  - [🎯 Learning Objectives](#-learning-objectives)
  - [💡 Core Concepts & Deep Dive](#-core-concepts--deep-dive)
    - [1. Control Flow Analysis (CFA)](#1-control-flow-analysis-cfa-)
    - [2. typeof and instanceof](#2-typeof-and-instanceof)
    - [3. in Operator](#3-in-operator)
  - [💻 Runnable Lesson Demonstration](#-runnable-lesson-demonstration)
  - [⚠️ Common Pitfalls & Pro Tips](#️-common-pitfalls--pro-tips)
  - [💡 10 In-Depth Practical Examples & Solutions](#-10-in-depth-practical-examples--solutions)
    - [Example 1: Narrowing with 'typeof' for Primitives](#example-1-narrowing-with-typeof-for-primitives)
    - [Example 2: Narrowing with 'instanceof' for Dates and Errors](#example-2-narrowing-with-instanceof-for-dates-and-errors)
    - [Example 3: Narrowing with the 'in' Operator](#example-3-narrowing-with-the-in-operator)
    - [Example 4: Truthiness Narrowing for Optional Values](#example-4-truthiness-narrowing-for-optional-values)
    - [Example 5: Equality Narrowing with '===' and '!=='](#example-5-equality-narrowing-with-and)
    - [Example 6: Early Return Guard Clauses](#example-6-early-return-guard-clauses)
    - [Example 7: Narrowing with 'Array.isArray'](#example-7-narrowing-with-arrayisarray)
    - [Example 8: Discriminating Nullable Objects from Values](#example-8-discriminating-nullable-objects-from-values)
    - [Example 9: Exhaustiveness Narrowing in Switch Statements](#example-9-exhaustiveness-narrowing-in-switch-statements)
    - [Example 10: Multi-Step Data Validation Pipeline](#example-10-multi-step-data-validation-pipeline)
  - [🎉 Congratulations](#-congratulations)

---

## 📖 Overview

Discover how TypeScript's Control Flow Analysis (CFA) tracks conditionals (typeof, instanceof, in, truthiness) to narrow broader types into specific types.

---

## 🎯 Learning Objectives

By the end of today, you will be able to:
- [ ] Master **Control Flow Analysis (CFA)**
- [ ] Master **typeof and instanceof**
- [ ] Master **in Operator**
- [ ] Study and implement the 10 in-depth practical examples with complete solutions.

---

## 💡 Core Concepts & Deep Dive


### 1. Control Flow Analysis (CFA)

TypeScript analyzes the execution path and eliminates types inside conditional blocks.


### 2. typeof and instanceof

'typeof' narrows primitives; 'instanceof' narrows class instances like Error, Date, or RegExp.


### 3. in Operator

'"prop" in obj' narrows unions of object shapes by testing property existence.


---

## 💻 Runnable Lesson Demonstration

Execute today's live code in your terminal:
```bash
npm run day:09
```

Here is the source code for today's lesson:
```typescript
// Day 09: Type Narrowing & Control Flow Analysis
function formatInput(val: string | number | Date): string {
  if (typeof val === "string") {
    return val.trim();
  }
  if (typeof val === "number") {
    return val.toFixed(2);
  }
  if (val instanceof Date) {
    return val.toISOString();
  }
  return "Unknown";
}

console.log(formatInput(123.456));
console.log(formatInput("   TypeScript   "));

```

---

## ⚠️ Common Pitfalls & Pro Tips

> [!TIP]
> **Pro Tip**: In TypeScript, the compiler is your pair-programmer. Pay close attention to compiler diagnostic messages—they describe the exact shape mismatch.

> [!WARNING]
> **Common Pitfall**: Do not fall into the trap of using `any` to silence compiler warnings. Use `unknown` with type guards or write proper generic constraints!

---

## 💡 10 In-Depth Practical Examples & Solutions

### Example 1: Narrowing with 'typeof' for Primitives
**Problem / Scenario:**
Differentiate between string, number, and boolean arguments at runtime.

**Solution:**
```typescript
function padValue(val: string | number, padding: number): string {
  if (typeof val === "number") {
    return val.toString().padStart(padding, "0");
  }
  return val.padStart(padding, " ");
}

console.log("Padded number:", padValue(42, 5));
console.log("Padded string:", padValue("Hi", 5));
```

**Explanation & Output:**
'typeof' checks ('string', 'number', 'boolean', 'symbol', 'bigint', 'undefined') narrow union types within 'if' branches.

---

### Example 2: Narrowing with 'instanceof' for Dates and Errors
**Problem / Scenario:**
Discriminate between Date instances and ISO date strings.

**Solution:**
```typescript
function toEpochSeconds(input: Date | string): number {
  if (input instanceof Date) {
    return Math.floor(input.getTime() / 1000);
  }
  return Math.floor(new Date(input).getTime() / 1000);
}

console.log("From Date:", toEpochSeconds(new Date()));
console.log("From ISO string:", toEpochSeconds("2026-01-01T00:00:00Z"));
```

**Explanation & Output:**
'instanceof' checks verify prototype chains and safely narrow object classes like Date, RegExp, and Error.

---

### Example 3: Narrowing with the 'in' Operator
**Problem / Scenario:**
Check for the existence of specific properties on distinct object types.

**Solution:**
```typescript
type AdminUser = { role: "admin"; permissions: string[] };
type RegularUser = { role: "user"; email: string };

function inspectAccount(user: AdminUser | RegularUser): void {
  if ("permissions" in user) {
    console.log("Admin permissions:", user.permissions.join(", "));
  } else {
    console.log("User email:", user.email);
  }
}

inspectAccount({ role: "admin", permissions: ["manage_users", "delete_content"] });
```

**Explanation & Output:**
The 'in' operator tests for the presence of a property and narrows the union accordingly.

---

### Example 4: Truthiness Narrowing for Optional Values
**Problem / Scenario:**
Safely filter out null, undefined, or empty strings using boolean truthiness.

**Solution:**
```typescript
function printFirstElement(arr?: string[] | null): void {
  if (arr && arr.length > 0) {
    console.log("First element:", arr[0].toUpperCase());
  } else {
    console.log("Array is empty or absent.");
  }
}

printFirstElement(["typescript", "javascript"]);
printFirstElement(null);
```

**Explanation & Output:**
Truthiness checks like 'if (arr)' eliminate null, undefined, false, 0, and '' from the type.

---

### Example 5: Equality Narrowing with '===' and '!=='
**Problem / Scenario:**
Narrow identical types across two different variables by comparing them.

**Solution:**
```typescript
function compareValues(a: string | number, b: string | boolean): void {
  if (a === b) {
    // Both 'a' and 'b' must be strings here, because string is their only shared type!
    console.log("Matching strings:", a.toUpperCase());
  } else {
    console.log("Different values or types");
  }
}

compareValues("alpha", "alpha");
```

**Explanation & Output:**
Strict equality checks between different unions narrow both variables to their common intersected type.

---

### Example 6: Early Return Guard Clauses
**Problem / Scenario:**
Clean up nested conditionals by returning early once edge conditions are ruled out.

**Solution:**
```typescript
function processInput(input: string | null | undefined): number {
  if (input === null || input === undefined) {
    return 0; // Guard clause handles non-strings
  }
  // TypeScript knows 'input' is guaranteed to be a string here:
  return input.trim().length;
}

console.log("Length of valid input:", processInput("  TypeScript Tutor  "));
console.log("Length of null:", processInput(null));
```

**Explanation & Output:**
Control flow analysis tracks variable paths and removes handled types after early return statements.

---

### Example 7: Narrowing with 'Array.isArray'
**Problem / Scenario:**
Differentiate between single items and arrays of items.

**Solution:**
```typescript
function sumItems(items: number | number[]): number {
  if (Array.isArray(items)) {
    return items.reduce((a, b) => a + b, 0);
  }
  return items;
}

console.log("Sum single:", sumItems(42));
console.log("Sum array:", sumItems([10, 20, 30]));
```

**Explanation & Output:**
'Array.isArray' automatically narrows 'any[] | T' to the specific array variant.

---

### Example 8: Discriminating Nullable Objects from Values
**Problem / Scenario:**
Handle an object that might be null before accessing its methods.

**Solution:**
```typescript
interface SessionData {
  token: string;
  expires: number;
}

function isSessionValid(session: SessionData | null): boolean {
  if (!session) return false;
  return session.expires > Date.now();
}

console.log("Valid session?", isSessionValid({ token: "xyz", expires: Date.now() + 10000 }));
```

**Explanation & Output:**
Checking '!session' narrows the type from 'SessionData | null' to strictly 'SessionData' in the subsequent block.

---

### Example 9: Exhaustiveness Narrowing in Switch Statements
**Problem / Scenario:**
Verify that all union values are handled across a switch statement.

**Solution:**
```typescript
type Direction = "UP" | "DOWN" | "LEFT" | "RIGHT";

function getVector(dir: Direction): [number, number] {
  switch (dir) {
    case "UP": return [0, -1];
    case "DOWN": return [0, 1];
    case "LEFT": return [-1, 0];
    case "RIGHT": return [1, 0];
  }
}

console.log("Vector for RIGHT:", getVector("RIGHT"));
```

**Explanation & Output:**
TypeScript validates that all union members are handled, ensuring the function always returns a valid vector.

---

### Example 10: Multi-Step Data Validation Pipeline
**Problem / Scenario:**
Progressively validate unknown incoming data into a strongly typed domain entity.

**Solution:**
```typescript
interface VerifiedUser {
  id: number;
  email: string;
}

function validatePayload(raw: unknown): VerifiedUser {
  if (typeof raw !== "object" || raw === null) {
    throw new Error("Payload must be a non-null object");
  }

  if (!("id" in raw) || typeof (raw as any).id !== "number") {
    throw new Error("Invalid or missing 'id'");
  }

  if (!("email" in raw) || typeof (raw as any).email !== "string") {
    throw new Error("Invalid or missing 'email'");
  }

  return {
    id: (raw as any).id,
    email: (raw as any).email
  };
}

const payload = validatePayload({ id: 101, email: "user@domain.com" });
console.log("Validated user:", payload.email);
```

**Explanation & Output:**
Step-by-step control flow narrowing ensures that external unknown data is completely verified before being passed into business logic.

---

## 🎉 Congratulations

🌕 **You are amazing!** You have conquered **Day 09** of 30 Days of TypeScript. Keep the momentum going!

<div align="center">
  <p><a href="../08_Day_Unions_and_literals/08_day_unions_and_literals.md">&lt;&lt; Day 8</a> | <a href="../README.md">30 Days of TypeScript</a> | <a href="../10_Day_Type_predicates/10_day_type_predicates.md">Day 10 &gt;&gt;</a></p>
</div>
