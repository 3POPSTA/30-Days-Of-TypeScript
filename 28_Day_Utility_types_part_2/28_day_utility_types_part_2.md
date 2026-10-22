# 30 Days Of TypeScript: Day 28 - Utility Types Masterclass (Part 2)

<div align="center">
  <p><a href="../27_Day_Utility_types_part_1/27_day_utility_types_part_1.md">&lt;&lt; Day 27</a> | <a href="../README.md">30 Days of TypeScript</a> | <a href="../29_Day_Async_and_error_handling/29_day_async_and_error_handling.md">Day 29 &gt;&gt;</a></p>
</div>

---

- [30 Days Of TypeScript: Day 28 - Utility Types Masterclass (Part 2)](#30-days-of-typescript-day-28---utility-types-masterclass-part-2-)
  - [📖 Overview](#-overview)
  - [🎯 Learning Objectives](#-learning-objectives)
  - [💡 Core Concepts & Deep Dive](#-core-concepts--deep-dive)
    - [1. Exclude & Extract](#1-exclude-extract)
    - [2. NonNullable](#2-nonnullable)
    - [3. Parameters & ReturnType](#3-parameters-returntype)
  - [💻 Runnable Lesson Demonstration](#-runnable-lesson-demonstration)
  - [⚠️ Common Pitfalls & Pro Tips](#️-common-pitfalls--pro-tips)
  - [💡 10 In-Depth Practical Examples & Solutions](#-10-in-depth-practical-examples--solutions)
    - [Example 1: 'Exclude<T, U>' for Filtering Unions](#example-1-excludet-u-for-filtering-unions)
    - [Example 2: 'Extract<T, U>' for Selecting Matching Variants](#example-2-extractt-u-for-selecting-matching-variants)
    - [Example 3: 'NonNullable<T>' for Purging Null and Undefined](#example-3-nonnullablet-for-purging-null-and-undefined)
    - [Example 4: 'Parameters<T>' for Intercepting Function Arguments](#example-4-parameterst-for-intercepting-function-arguments)
    - [Example 5: 'ReturnType<T>' for Dynamic Factory Typing](#example-5-returntypet-for-dynamic-factory-typing)
    - [Example 6: 'ConstructorParameters<T>' & 'InstanceType<T>' for Dependency Injection](#example-6-constructorparameterst-instancetypet-for-dependency-injection)
    - [Example 7: 'ThisParameterType<T>' and 'OmitThisParameter<T>'](#example-7-thisparametertypet-and-omitthisparametert)
    - [Example 8: 'Awaited<T>' for Deep Promise Unwrapping](#example-8-awaitedt-for-deep-promise-unwrapping)
    - [Example 9: Type-Safe Event Broker with Utility Types](#example-9-type-safe-event-broker-with-utility-types)
    - [Example 10: Composing Custom High-Level Utility Combinators](#example-10-composing-custom-high-level-utility-combinators)
  - [🎉 Congratulations](#-congratulations)

---

## 📖 Overview

Master built-in union and function utility types: Exclude, Extract, NonNullable, ReturnType, Parameters, and InstanceType.

---

## 🎯 Learning Objectives

By the end of today, you will be able to:
- [ ] Master **Exclude & Extract**
- [ ] Master **NonNullable**
- [ ] Master **Parameters & ReturnType**
- [ ] Study and implement the 10 in-depth practical examples with complete solutions.

---

## 💡 Core Concepts & Deep Dive


### 1. Exclude & Extract

'Exclude<T, U>' removes members from T that are assignable to U; 'Extract<T, U>' retains only matching members.


### 2. NonNullable

Strips 'null' and 'undefined' from a union type.


### 3. Parameters & ReturnType

Extract the tuple of argument types or the return type of any function.


---

## 💻 Runnable Lesson Demonstration

Execute today's live code in your terminal:
```bash
npm run day:28
```

Here is the source code for today's lesson:
```typescript
// Day 28: Utility Types Masterclass (Part 2)
type Status = "idle" | "loading" | "success" | "error";
type ActiveStatus = Exclude<Status, "idle">; // "loading" | "success" | "error"
type FinalStatus = Extract<Status, "success" | "error">; // "success" | "error"

type RawString = string | null | undefined;
type CleanString = NonNullable<RawString>; // string

console.log("Utility types (part 2) compiled successfully");

```

---

## ⚠️ Common Pitfalls & Pro Tips

> [!TIP]
> **Pro Tip**: In TypeScript, the compiler is your pair-programmer. Pay close attention to compiler diagnostic messages: they describe the exact shape mismatch.

> [!WARNING]
> **Common Pitfall**: Do not fall into the trap of using `any` to silence compiler warnings. Use `unknown` with type guards or write proper generic constraints!

---

## 💡 10 In-Depth Practical Examples & Solutions

### Example 1: 'Exclude<T, U>' for Filtering Unions
**Problem / Scenario:**
Remove unwanted types from a union.

**Solution:**
```typescript
type AllActions = "START" | "STOP" | "PAUSE" | "RESUME";
type ActiveActions = Exclude<AllActions, "STOP">; // "START" | "PAUSE" | "RESUME"

function triggerAction(action: ActiveActions): void {
  console.log("Triggered:", action);
}

triggerAction("START");
triggerAction("RESUME");
```

**Explanation & Output:**
'Exclude<T, U>' checks each member of 'T' and excludes those that extend 'U'.

---

### Example 2: 'Extract<T, U>' for Selecting Matching Variants
**Problem / Scenario:**
Extract only the members of a union that match a target criteria.

**Solution:**
```typescript
type Event =
  | { type: "click"; x: number; y: number }
  | { type: "hover"; element: string }
  | { type: "keydown"; key: string };

type MouseEvents = Extract<Event, { x: number }>; // { type: "click"; x: number; y: number }

const clickEvt: MouseEvents = { type: "click", x: 100, y: 200 };
console.log("Mouse Click X:", clickEvt.x);
```

**Explanation & Output:**
'Extract<T, U>' retains only those union members that are assignable to 'U'.

---

### Example 3: 'NonNullable<T>' for Purging Null and Undefined
**Problem / Scenario:**
Purge null and undefined types from a union of nullable values.

**Solution:**
```typescript
type PossibleGreeting = string | null | undefined;
type DefiniteGreeting = NonNullable<PossibleGreeting>; // strictly string

function greet(msg: DefiniteGreeting): void {
  console.log("Greeting:", msg.toUpperCase());
}

greet("Welcome aboard!");
```

**Explanation & Output:**
'NonNullable<T>' excludes 'null' and 'undefined' from any union.

---

### Example 4: 'Parameters<T>' for Intercepting Function Arguments
**Problem / Scenario:**
Extract and forward arguments from an existing function.

**Solution:**
```typescript
function sendEmail(to: string, subject: string, body: string): boolean {
  console.log(`Sending to ${to}: ${subject}`);
  return true;
}

type SendEmailArgs = Parameters<typeof sendEmail>;

function sendEmailWithLog(...args: SendEmailArgs): boolean {
  console.log("[AUDIT LOG] Email initiated");
  return sendEmail(...args);
}

sendEmailWithLog("dev@team.com", "Release Notes", "Version 2.0 deployed.");
```

**Explanation & Output:**
'Parameters<T>' extracts a function's parameter types as a tuple, making decorators and proxies type-safe.

---

### Example 5: 'ReturnType<T>' for Dynamic Factory Typing
**Problem / Scenario:**
Infer the complex return object of a factory function without manual interface duplication.

**Solution:**
```typescript
function makeStore() {
  return {
    state: { counter: 0, theme: "dark" as const },
    increment() {},
    toggleTheme() {}
  };
}

type Store = ReturnType<typeof makeStore>;

function inspectStore(s: Store): void {
  console.log("Store theme:", s.state.theme);
}

inspectStore(makeStore());
```

**Explanation & Output:**
'ReturnType<T>' extracts whatever type a function returns, ensuring factory consumers stay automatically synchronized.

---

### Example 6: 'ConstructorParameters<T>' & 'InstanceType<T>' for Dependency Injection
**Problem / Scenario:**
Dynamically instantiate classes within an IoC container.

**Solution:**
```typescript
class MailService {
  constructor(public apiKey: string) {}
  send() { console.log("Sent via", this.apiKey); }
}

type MailParams = ConstructorParameters<typeof MailService>; // [apiKey: string]
type MailInstance = InstanceType<typeof MailService>;       // MailService

function createService(args: MailParams): MailInstance {
  return new MailService(...args);
}

const service = createService(["api_secret_key"]);
service.send();
```

**Explanation & Output:**
'ConstructorParameters' and 'InstanceType' allow factory functions to instantiate arbitrary classes safely.

---

### Example 7: 'ThisParameterType<T>' and 'OmitThisParameter<T>'
**Problem / Scenario:**
Extract or remove explicit 'this' parameter types from function signatures.

**Solution:**
```typescript
function describeCircle(this: { radius: number }, unit: string): string {
  return `Circle of ${this.radius} ${unit}`;
}

type BoundDescriber = OmitThisParameter<typeof describeCircle>;

const circle = { radius: 5 };
const bound: BoundDescriber = describeCircle.bind(circle);

console.log(bound("meters"));
```

**Explanation & Output:**
'OmitThisParameter<T>' produces a function type with the explicit 'this' parameter removed.

---

### Example 8: 'Awaited<T>' for Deep Promise Unwrapping
**Problem / Scenario:**
Extract the eventual resolved value from nested or async return types.

**Solution:**
```typescript
async function fetchStats() {
  return { activeUsers: 450, servers: 12 };
}

type Stats = Awaited<ReturnType<typeof fetchStats>>;

const currentStats: Stats = { activeUsers: 500, servers: 14 };
console.log("Active users:", currentStats.activeUsers);
```

**Explanation & Output:**
'Awaited<T>' unwraps Promises, recursively flattening any nested Promise layers.

---

### Example 9: Type-Safe Event Broker with Utility Types
**Problem / Scenario:**
Build a generic event broker using 'Parameters' and 'Record'.

**Solution:**
```typescript
interface EventSignatures {
  userRegistered: (id: string, name: string) => void;
  orderPlaced: (orderId: number, total: number) => void;
}

class EventBroker {
  private handlers: { [K in keyof EventSignatures]?: EventSignatures[K][] } = {};

  on<K extends keyof EventSignatures>(event: K, handler: EventSignatures[K]): void {
    if (!this.handlers[event]) this.handlers[event] = [];
    this.handlers[event]!.push(handler);
  }

  emit<K extends keyof EventSignatures>(event: K, ...args: Parameters<EventSignatures[K]>): void {
    const list = this.handlers[event] ?? [];
    for (const fn of list) {
      (fn as any)(...args);
    }
  }
}

const broker = new EventBroker();
broker.on("userRegistered", (id, name) => console.log(`Registered ${name} (${id})`));
broker.emit("userRegistered", "usr_101", "Grace Hopper");
```

**Explanation & Output:**
'Parameters<EventSignatures[K]>' guarantees that 'emit' only accepts the exact argument types defined for that specific event.

---

### Example 10: Composing Custom High-Level Utility Combinators
**Problem / Scenario:**
Combine Exclude and Extract to compute difference and symmetric difference between unions.

**Solution:**
```typescript
type Diff<T, U> = Exclude<T, U>;
type Common<T, U> = Extract<T, U>;
type SymmetricDiff<T, U> = Diff<T, U> | Diff<U, T>;

type SetA = "a" | "b" | "c";
type SetB = "b" | "c" | "d";

type OnlyInA = Diff<SetA, SetB>;               // "a"
type InBoth = Common<SetA, SetB>;              // "b" | "c"
type UniqueToEither = SymmetricDiff<SetA, SetB>; // "a" | "d"

const diffVal: UniqueToEither = "d";
console.log("Unique element:", diffVal);
```

**Explanation & Output:**
Combining basic utility types enables set-theoretic type manipulation directly within TypeScript.

---

## 🎉 Congratulations

🌕 **You are amazing!** You have conquered **Day 28** of 30 Days of TypeScript. Keep the momentum going!

<div align="center">
  <p><a href="../27_Day_Utility_types_part_1/27_day_utility_types_part_1.md">&lt;&lt; Day 27</a> | <a href="../README.md">30 Days of TypeScript</a> | <a href="../29_Day_Async_and_error_handling/29_day_async_and_error_handling.md">Day 29 &gt;&gt;</a></p>
</div>
