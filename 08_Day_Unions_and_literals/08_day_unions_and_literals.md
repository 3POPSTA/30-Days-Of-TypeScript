# 30 Days Of TypeScript: Day 08 - Union Types & Literal Types

<div align="center">
  <p><a href="../07_Day_Type_aliases/07_day_type_aliases.md">&lt;&lt; Day 7</a> | <a href="../README.md">30 Days of TypeScript</a> | <a href="../09_Day_Type_narrowing/09_day_type_narrowing.md">Day 9 &gt;&gt;</a></p>
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
  - [💡 10 In-Depth Practical Examples & Solutions](#-10-in-depth-practical-examples--solutions)
    - [Example 1: String Literal Unions for Application Status](#example-1-string-literal-unions-for-application-status)
    - [Example 2: Numeric Literal Unions for Dice Rolls or Priority](#example-2-numeric-literal-unions-for-dice-rolls-or-priority)
    - [Example 3: Mixed Primitive Unions (string | number)](#example-3-mixed-primitive-unions-string-number)
    - [Example 4: Literal Narrowing with Strict Equality](#example-4-literal-narrowing-with-strict-equality)
    - [Example 5: Boolean Literal Unions for Strict Feature Flags](#example-5-boolean-literal-unions-for-strict-feature-flags)
    - [Example 6: Union of Diverse Object Shapes](#example-6-union-of-diverse-object-shapes)
    - [Example 7: HTTP Request Method Validator](#example-7-http-request-method-validator)
    - [Example 8: Type-Safe CSS Dimension Units](#example-8-type-safe-css-dimension-units)
    - [Example 9: Flexible Argument Normalizer Function](#example-9-flexible-argument-normalizer-function)
    - [Example 10: Event Action Payload Dispatcher](#example-10-event-action-payload-dispatcher)
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
- [ ] Study and implement the 10 in-depth practical examples with complete solutions.

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
> **Pro Tip**: In TypeScript, the compiler is your pair-programmer. Pay close attention to compiler diagnostic messages: they describe the exact shape mismatch.

> [!WARNING]
> **Common Pitfall**: Do not fall into the trap of using `any` to silence compiler warnings. Use `unknown` with type guards or write proper generic constraints!

---

## 💡 10 In-Depth Practical Examples & Solutions

### Example 1: String Literal Unions for Application Status
**Problem / Scenario:**
Constrain an order state machine to only allowed string literals.

**Solution:**
```typescript
type OrderStatus = "draft" | "submitted" | "processing" | "shipped" | "delivered";

function canCancelOrder(status: OrderStatus): boolean {
  return status === "draft" || status === "submitted";
}

console.log("Can cancel submitted order?", canCancelOrder("submitted"));
console.log("Can cancel shipped order?", canCancelOrder("shipped"));
```

**Explanation & Output:**
String literal unions restrict variables to a closed set of exact string values, eliminating typos.

---

### Example 2: Numeric Literal Unions for Dice Rolls or Priority
**Problem / Scenario:**
Model strict priority levels (1, 2, 3) or a dice roll (1 through 6).

**Solution:**
```typescript
type PriorityLevel = 1 | 2 | 3;

function getSlaHours(priority: PriorityLevel): number {
  switch (priority) {
    case 1: return 2;   // Critical: 2h
    case 2: return 8;   // High: 8h
    case 3: return 24;  // Normal: 24h
  }
}

console.log("SLA for priority 1:", getSlaHours(1), "hours");
```

**Explanation & Output:**
Numeric literal types ensure functions only accept exact numeric values, preventing out-of-range arguments.

---

### Example 3: Mixed Primitive Unions (string | number)
**Problem / Scenario:**
Handle identifiers that may arrive as numeric IDs or alphanumeric UUIDs.

**Solution:**
```typescript
type EntityId = string | number;

function formatId(id: EntityId): string {
  if (typeof id === "number") {
    return `ID#${id.toString().padStart(6, "0")}`;
  }
  return `UUID:${id.toLowerCase()}`;
}

console.log(formatId(42));
console.log(formatId("A1B2C3D4"));
```

**Explanation & Output:**
TypeScript requires narrowing union types with runtime checks like 'typeof' before calling type-specific methods.

---

### Example 4: Literal Narrowing with Strict Equality
**Problem / Scenario:**
Narrow down union variants inside equality check branches.

**Solution:**
```typescript
type Theme = "light" | "dark" | "system";

function getBackgroundColor(theme: Theme, prefersDark: boolean): string {
  if (theme === "system") {
    return prefersDark ? "#121212" : "#ffffff";
  }
  return theme === "dark" ? "#1e1e1e" : "#f5f5f5";
}

console.log("Dark Theme Color:", getBackgroundColor("dark", false));
console.log("System Theme Color:", getBackgroundColor("system", true));
```

**Explanation & Output:**
Control flow analysis narrows literal unions step-by-step as equality checks eliminate possibilities.

---

### Example 5: Boolean Literal Unions for Strict Feature Flags
**Problem / Scenario:**
Define feature toggles that only accept exact boolean literals.

**Solution:**
```typescript
type MaintenanceMode = false; // Strictly disabled in production
type BetaAllowed = true | false;

function launchApp(maintenance: MaintenanceMode, beta: BetaAllowed): void {
  console.log("App running in production. Beta enabled?", beta);
}

launchApp(false, true);
```

**Explanation & Output:**
Boolean literals 'true' and 'false' can be used as distinct types to enforce invariant states.

---

### Example 6: Union of Diverse Object Shapes
**Problem / Scenario:**
Represent multiple event structures using a union of object types.

**Solution:**
```typescript
type MouseClickEvent = { type: "click"; x: number; y: number };
type KeyPressEvent = { type: "keypress"; key: string; ctrlKey: boolean };

type UIEvent = MouseClickEvent | KeyPressEvent;

function logUIEvent(event: UIEvent): void {
  if (event.type === "click") {
    console.log(`Clicked at (${event.x}, ${event.y})`);
  } else {
    console.log(`Key pressed: ${event.key} (CTRL: ${event.ctrlKey})`);
  }
}

logUIEvent({ type: "click", x: 120, y: 350 });
```

**Explanation & Output:**
Unions of object shapes allow processing different data payloads safely through common tag properties.

---

### Example 7: HTTP Request Method Validator
**Problem / Scenario:**
Accept only valid standard HTTP methods in an API client.

**Solution:**
```typescript
type HttpMethod = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";

function sendRequest(url: string, method: HttpMethod): void {
  console.log(`[${method}] Sending request to: ${url}`);
}

sendRequest("/api/v1/users", "GET");
sendRequest("/api/v1/users/42", "DELETE");
```

**Explanation & Output:**
Restricting arguments to literal unions prevents invalid method names from ever reaching network sockets.

---

### Example 8: Type-Safe CSS Dimension Units
**Problem / Scenario:**
Create a flexible CSS dimension helper that accepts raw pixel numbers or string units.

**Solution:**
```typescript
type CssDimension = number | `${number}px` | `${number}rem` | `${number}%`;

function formatDimension(dim: CssDimension): string {
  if (typeof dim === "number") {
    return `${dim}px`;
  }
  return dim;
}

console.log(formatDimension(16));
console.log(formatDimension("2.5rem"));
console.log(formatDimension("100%"));
```

**Explanation & Output:**
Template literal types combined with primitive unions provide compiler-validated syntax for CSS values.

---

### Example 9: Flexible Argument Normalizer Function
**Problem / Scenario:**
Write a function that normalizes a string or string array into a sanitized array.

**Solution:**
```typescript
function normalizeTags(input: string | string[]): string[] {
  if (typeof input === "string") {
    return input.split(",").map(t => t.trim().toLowerCase());
  }
  return input.map(t => t.trim().toLowerCase());
}

console.log("Normalized CSV:", normalizeTags("React, TypeScript, Redux"));
console.log("Normalized Array:", normalizeTags([" NodeJS ", "Docker "]));
```

**Explanation & Output:**
Accepting a union like 'string | string[]' gives callers ergonomic flexibility while keeping internal logic type-safe.

---

### Example 10: Event Action Payload Dispatcher
**Problem / Scenario:**
Model multiple command actions and handle them with strict literal matching.

**Solution:**
```typescript
type Action =
  | { action: "SET_THEME"; payload: "light" | "dark" }
  | { action: "SET_VOLUME"; payload: number }
  | { action: "RESET_ALL" };

function dispatch(action: Action): void {
  switch (action.action) {
    case "SET_THEME":
      console.log("Theme set to:", action.payload);
      break;
    case "SET_VOLUME":
      console.log("Volume adjusted to:", action.payload);
      break;
    case "RESET_ALL":
      console.log("Settings reset to defaults");
      break;
  }
}

dispatch({ action: "SET_THEME", payload: "dark" });
dispatch({ action: "RESET_ALL" });
```

**Explanation & Output:**
Unions of actions provide the foundation for robust, predictable state management architectures.

---

## 🎉 Congratulations

🌕 **You are amazing!** You have conquered **Day 08** of 30 Days of TypeScript. Keep the momentum going!

<div align="center">
  <p><a href="../07_Day_Type_aliases/07_day_type_aliases.md">&lt;&lt; Day 7</a> | <a href="../README.md">30 Days of TypeScript</a> | <a href="../09_Day_Type_narrowing/09_day_type_narrowing.md">Day 9 &gt;&gt;</a></p>
</div>
