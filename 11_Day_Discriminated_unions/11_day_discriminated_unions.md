# 30 Days Of TypeScript: Day 11 - Discriminated Unions & Pattern Matching

<div align="center">
  <p><a href="../10_Day_Type_predicates/10_day_type_predicates.md">&lt;&lt; Day 10</a> | <a href="../README.md">30 Days of TypeScript</a> | <a href="../12_Day_Functions/12_day_functions.md">Day 12 &gt;&gt;</a></p>
</div>

---

- [30 Days Of TypeScript: Day 11 - Discriminated Unions & Pattern Matching](#30-days-of-typescript-day-11---discriminated-unions-pattern-matching)
  - [📖 Overview](#-overview)
  - [🎯 Learning Objectives](#-learning-objectives)
  - [💡 Core Concepts & Deep Dive](#-core-concepts--deep-dive)
    - [1. Discriminated (Tagged) Unions](#1-discriminated-tagged-unions)
    - [2. Exhaustiveness with never](#2-exhaustiveness-with-never)
  - [💻 Runnable Lesson Demonstration](#-runnable-lesson-demonstration)
  - [⚠️ Common Pitfalls & Pro Tips](#️-common-pitfalls--pro-tips)
  - [💡 10 In-Depth Practical Examples & Solutions](#-10-in-depth-practical-examples--solutions)
    - [Example 1: Geometric Shape Area Calculator](#example-1-geometric-shape-area-calculator)
    - [Example 2: Network Request State Machine](#example-2-network-request-state-machine)
    - [Example 3: Redux-Style Action Reducer](#example-3-redux-style-action-reducer)
    - [Example 4: Exhaustive Switch Checking with 'assertNever'](#example-4-exhaustive-switch-checking-with-assertnever)
    - [Example 5: User Authentication Session State](#example-5-user-authentication-session-state)
    - [Example 6: Multi-Provider Payment Processing](#example-6-multi-provider-payment-processing)
    - [Example 7: Notification Delivery Payload](#example-7-notification-delivery-payload)
    - [Example 8: Abstract Syntax Tree (AST) Expression Evaluator](#example-8-abstract-syntax-tree-ast-expression-evaluator)
    - [Example 9: Form Field Validation State](#example-9-form-field-validation-state)
    - [Example 10: Virtual File System Node Representation](#example-10-virtual-file-system-node-representation)
  - [🎉 Congratulations](#-congratulations)

---

## 📖 Overview

Model complex domain states with discriminated (tagged) unions and achieve 100% exhaustive compile-time safety.

---

## 🎯 Learning Objectives

By the end of today, you will be able to:
- [ ] Master **Discriminated (Tagged) Unions**
- [ ] Master **Exhaustiveness with never**
- [ ] Study and implement the 10 in-depth practical examples with complete solutions.

---

## 💡 Core Concepts & Deep Dive


### 1. Discriminated (Tagged) Unions

A union of object types that share a common literal discriminant property (like 'kind', 'type', or 'status').


### 2. Exhaustiveness with never

Assigning unhandled variants to type 'never' in default switch branches guarantees a compile error if a variant is forgotten.


---

## 💻 Runnable Lesson Demonstration

Execute today's live code in your terminal:
```bash
npm run day:11
```

Here is the source code for today's lesson:
```typescript
// Day 11: Discriminated Unions & Pattern Matching
type Shape =
  | { kind: "circle"; radius: number }
  | { kind: "square"; size: number }
  | { kind: "rectangle"; width: number; height: number };

function getArea(s: Shape): number {
  switch (s.kind) {
    case "circle": return Math.PI * s.radius * s.radius;
    case "square": return s.size * s.size;
    case "rectangle": return s.width * s.height;
    default: {
      const _unreachable: never = s;
      throw new Error("Unhandled shape: " + _unreachable);
    }
  }
}

console.log("Square area:", getArea({ kind: "square", size: 4 }));

```

---

## ⚠️ Common Pitfalls & Pro Tips

> [!TIP]
> **Pro Tip**: In TypeScript, the compiler is your pair-programmer. Pay close attention to compiler diagnostic messages: they describe the exact shape mismatch.

> [!WARNING]
> **Common Pitfall**: Do not fall into the trap of using `any` to silence compiler warnings. Use `unknown` with type guards or write proper generic constraints!

---

## 💡 10 In-Depth Practical Examples & Solutions

### Example 1: Geometric Shape Area Calculator
**Problem / Scenario:**
Calculate the area of various shapes using a common 'kind' discriminator property.

**Solution:**
```typescript
type Shape =
  | { kind: "circle"; radius: number }
  | { kind: "rectangle"; width: number; height: number }
  | { kind: "square"; side: number };

function computeArea(s: Shape): number {
  switch (s.kind) {
    case "circle":
      return Math.PI * s.radius ** 2;
    case "rectangle":
      return s.width * s.height;
    case "square":
      return s.side * s.side;
  }
}

console.log("Circle area:", computeArea({ kind: "circle", radius: 5 }).toFixed(2));
console.log("Rectangle area:", computeArea({ kind: "rectangle", width: 4, height: 6 }));
```

**Explanation & Output:**
By matching on 's.kind', TypeScript narrows the type of 's' to the specific shape variant in each switch case.

---

### Example 2: Network Request State Machine
**Problem / Scenario:**
Model asynchronous data loading states (idle, loading, success, error) with discriminated unions.

**Solution:**
```typescript
type RequestState<T> =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "success"; data: T; receivedAt: number }
  | { status: "error"; error: string; code: number };

function renderState<T>(state: RequestState<T>): string {
  switch (state.status) {
    case "idle": return "Ready to fetch";
    case "loading": return "Loading in progress...";
    case "success": return `Loaded ${JSON.stringify(state.data)}`;
    case "error": return `Error ${state.code}: ${state.error}`;
  }
}

console.log(renderState({ status: "success", data: { user: "Ada" }, receivedAt: Date.now() }));
```

**Explanation & Output:**
Discriminated unions make invalid states unrepresentable. For example, you cannot have 'data' when status is 'loading'.

---

### Example 3: Redux-Style Action Reducer
**Problem / Scenario:**
Create a predictable counter reducer that processes actions tagged with 'type'.

**Solution:**
```typescript
type CounterAction =
  | { type: "INCREMENT"; amount: number }
  | { type: "DECREMENT"; amount: number }
  | { type: "RESET" };

function counterReducer(count: number, action: CounterAction): number {
  switch (action.type) {
    case "INCREMENT": return count + action.amount;
    case "DECREMENT": return count - action.amount;
    case "RESET": return 0;
  }
}

let count = 10;
count = counterReducer(count, { type: "INCREMENT", amount: 5 });
count = counterReducer(count, { type: "DECREMENT", amount: 3 });
console.log("Final Count:", count); // 12
```

**Explanation & Output:**
Each action has a distinct payload structure discriminated by its literal 'type' property.

---

### Example 4: Exhaustive Switch Checking with 'assertNever'
**Problem / Scenario:**
Guarantee that adding a new union variant triggers a compiler error if unhandled.

**Solution:**
```typescript
function assertNever(val: never): never {
  throw new Error(`Unexpected object: ${JSON.stringify(val)}`);
}

type NotificationChannel = "email" | "sms" | "push";

function sendNotice(channel: NotificationChannel, text: string): void {
  switch (channel) {
    case "email": console.log("Email sent:", text); break;
    case "sms": console.log("SMS sent:", text); break;
    case "push": console.log("Push notice sent:", text); break;
    default: assertNever(channel);
  }
}

sendNotice("email", "Your code is 123456");
```

**Explanation & Output:**
Passing unhandled variants to 'assertNever(val: never)' produces a compile-time type error if any union member is missed.

---

### Example 5: User Authentication Session State
**Problem / Scenario:**
Differentiate between an unauthenticated guest and an authenticated active user.

**Solution:**
```typescript
type Session =
  | { state: "anonymous" }
  | { state: "authenticated"; user: { id: string; name: string }; token: string };

function getGreeting(session: Session): string {
  if (session.state === "authenticated") {
    return `Welcome back, ${session.user.name}!`;
  }
  return "Welcome, Guest! Please sign in.";
}

console.log(getGreeting({ state: "authenticated", user: { id: "1", name: "David" }, token: "jwt_abc" }));
```

**Explanation & Output:**
Using 'state' as discriminator eliminates the need for optional properties and prevents accessing 'token' on guests.

---

### Example 6: Multi-Provider Payment Processing
**Problem / Scenario:**
Process payments via Credit Card, PayPal, or Crypto with provider-specific parameters.

**Solution:**
```typescript
type PaymentMethod =
  | { type: "credit_card"; cardNumber: string; cvv: string }
  | { type: "paypal"; email: string }
  | { type: "crypto"; walletAddress: string; network: "ETH" | "BTC" };

function processPayment(amount: number, method: PaymentMethod): void {
  switch (method.type) {
    case "credit_card":
      console.log(`Charged ${amount} to card ending in ${method.cardNumber.slice(-4)}`);
      break;
    case "paypal":
      console.log(`Charged ${amount} to PayPal account ${method.email}`);
      break;
    case "crypto":
      console.log(`Sent ${amount} equivalent to ${method.network} address ${method.walletAddress}`);
      break;
  }
}

processPayment(150, { type: "paypal", email: "payer@example.com" });
```

**Explanation & Output:**
Each payment variant has its own required fields, ensuring safety during financial processing.

---

### Example 7: Notification Delivery Payload
**Problem / Scenario:**
Dispatch messages through different channels with channel-specific payload attributes.

**Solution:**
```typescript
type DeliveryPayload =
  | { channel: "email"; subject: string; bodyHtml: string; recipient: string }
  | { channel: "sms"; text: string; phoneNumber: string }
  | { channel: "slack"; webhookUrl: string; markdownText: string };

function dispatchNotification(p: DeliveryPayload): void {
  if (p.channel === "email") {
    console.log(`Sending email to ${p.recipient} - Subject: ${p.subject}`);
  } else if (p.channel === "sms") {
    console.log(`Sending SMS to ${p.phoneNumber}`);
  } else {
    console.log(`Posting to Slack via ${p.webhookUrl}`);
  }
}

dispatchNotification({ channel: "sms", text: "Alert!", phoneNumber: "+15550199" });
```

**Explanation & Output:**
Discriminated unions work seamlessly with standard 'if / else if' chains as well as 'switch' blocks.

---

### Example 8: Abstract Syntax Tree (AST) Expression Evaluator
**Problem / Scenario:**
Evaluate mathematical expressions represented as a tree of arithmetic nodes.

**Solution:**
```typescript
type Expr =
  | { op: "literal"; value: number }
  | { op: "add"; left: Expr; right: Expr }
  | { op: "multiply"; left: Expr; right: Expr };

function evaluate(e: Expr): number {
  switch (e.op) {
    case "literal": return e.value;
    case "add": return evaluate(e.left) + evaluate(e.right);
    case "multiply": return evaluate(e.left) * evaluate(e.right);
  }
}

// Represents: (3 + 5) * 2
const expression: Expr = {
  op: "multiply",
  left: { op: "add", left: { op: "literal", value: 3 }, right: { op: "literal", value: 5 } },
  right: { op: "literal", value: 2 }
};

console.log("(3 + 5) * 2 =", evaluate(expression)); // 16
```

**Explanation & Output:**
Recursive discriminated unions are the standard pattern for building interpreters, parsers, and compilers.

---

### Example 9: Form Field Validation State
**Problem / Scenario:**
Track individual form field validation states in UI components.

**Solution:**
```typescript
type FieldState =
  | { status: "pristine" }
  | { status: "validating" }
  | { status: "valid"; value: string }
  | { status: "invalid"; error: string; rawInput: string };

function renderFeedback(field: FieldState): string {
  switch (field.status) {
    case "pristine": return "";
    case "validating": return "Checking availability...";
    case "valid": return "Looks good!";
    case "invalid": return `Error: ${field.error}`;
  }
}

console.log(renderFeedback({ status: "invalid", error: "Password too short", rawInput: "123" }));
```

**Explanation & Output:**
Discriminating on 'status' cleanly isolates error messages and sanitized values to appropriate states.

---

### Example 10: Virtual File System Node Representation
**Problem / Scenario:**
Model file system nodes where files have content and directories have children.

**Solution:**
```typescript
type FsNode =
  | { type: "file"; name: string; sizeBytes: number }
  | { type: "directory"; name: string; children: FsNode[] };

function calculateTotalSize(node: FsNode): number {
  if (node.type === "file") {
    return node.sizeBytes;
  }
  return node.children.reduce((sum, child) => sum + calculateTotalSize(child), 0);
}

const rootDir: FsNode = {
  type: "directory",
  name: "project",
  children: [
    { type: "file", name: "package.json", sizeBytes: 1024 },
    {
      type: "directory",
      name: "src",
      children: [{ type: "file", name: "index.ts", sizeBytes: 2048 }]
    }
  ]
};

console.log("Total Directory Size:", calculateTotalSize(rootDir), "bytes");
```

**Explanation & Output:**
Recursive discriminated unions make file system and hierarchy navigation both intuitive and strictly typed.

---

## 🎉 Congratulations

🌕 **You are amazing!** You have conquered **Day 11** of 30 Days of TypeScript. Keep the momentum going!

<div align="center">
  <p><a href="../10_Day_Type_predicates/10_day_type_predicates.md">&lt;&lt; Day 10</a> | <a href="../README.md">30 Days of TypeScript</a> | <a href="../12_Day_Functions/12_day_functions.md">Day 12 &gt;&gt;</a></p>
</div>
