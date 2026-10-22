# 30 Days Of TypeScript: Day 18 - Enums & Object Literals as const

<div align="center">
  <p><a href="../17_Day_Abstract_classes/17_day_abstract_classes.md">&lt;&lt; Day 17</a> | <a href="../README.md">30 Days of TypeScript</a> | <a href="../19_Day_Generics_basics/19_day_generics_basics.md">Day 19 &gt;&gt;</a></p>
</div>

---

- [30 Days Of TypeScript: Day 18 - Enums & Object Literals as const](#30-days-of-typescript-day-18---enums-object-literals-as-const)
  - [📖 Overview](#-overview)
  - [🎯 Learning Objectives](#-learning-objectives)
  - [💡 Core Concepts & Deep Dive](#-core-concepts--deep-dive)
    - [1. Numeric & String Enums](#1-numeric-string-enums)
    - [2. as const Objects (Modern Best Practice)](#2-as-const-objects-modern-best-practice-)
  - [💻 Runnable Lesson Demonstration](#-runnable-lesson-demonstration)
  - [⚠️ Common Pitfalls & Pro Tips](#️-common-pitfalls--pro-tips)
  - [💡 10 In-Depth Practical Examples & Solutions](#-10-in-depth-practical-examples--solutions)
    - [Example 1: Numeric Enums and Default Auto-Incrementing](#example-1-numeric-enums-and-default-auto-incrementing)
    - [Example 2: String Enums for Explicit Values](#example-2-string-enums-for-explicit-values)
    - [Example 3: Reverse Mapping in Numeric Enums](#example-3-reverse-mapping-in-numeric-enums)
    - [Example 4: 'const enum' for Inlined Performance](#example-4-const-enum-for-inlined-performance)
    - [Example 5: The 'as const' Object Literal Pattern](#example-5-the-as-const-object-literal-pattern)
    - [Example 6: Deriving Union Types from 'as const' Objects ('keyof typeof')](#example-6-deriving-union-types-from-as-const-objects-keyof-typeof)
    - [Example 7: Bitwise Flags with Enums for Permission Systems](#example-7-bitwise-flags-with-enums-for-permission-systems)
    - [Example 8: Enum vs String Literal Union Benchmark](#example-8-enum-vs-string-literal-union-benchmark)
    - [Example 9: Validating Runtime Input Against Enums](#example-9-validating-runtime-input-against-enums)
    - [Example 10: Type-Safe State Machine Using 'as const' Objects](#example-10-type-safe-state-machine-using-as-const-objects)
  - [🎉 Congratulations](#-congratulations)

---

## 📖 Overview

Compare TypeScript Enums with modern 'as const' object dictionaries, evaluating runtime output, safety, and idiomatic practices.

---

## 🎯 Learning Objectives

By the end of today, you will be able to:
- [ ] Master **Numeric & String Enums**
- [ ] Master **as const Objects (Modern Best Practice)**
- [ ] Study and implement the 10 in-depth practical examples with complete solutions.

---

## 💡 Core Concepts & Deep Dive


### 1. Numeric & String Enums

Classic TS enum feature. Numeric enums have reverse mappings; string enums enforce exact string values.


### 2. as const Objects (Modern Best Practice)

Zero runtime overhead, tree-shakeable, and extracts identical type safety using typeof.


---

## 💻 Runnable Lesson Demonstration

Execute today's live code in your terminal:
```bash
npm run day:18
```

Here is the source code for today's lesson:
```typescript
// Day 18: Enums & Object Literals as const
// 1. String Enum
enum HttpVerb {
  Get = "GET",
  Post = "POST"
}

// 2. Modern as const dictionary
const LogLevels = {
  INFO: "info",
  WARN: "warn",
  ERROR: "error"
} as const;

type LogLevel = typeof LogLevels[keyof typeof LogLevels];

console.log("Enum verb:", HttpVerb.Get);
console.log("Const object level:", LogLevels.ERROR);

```

---

## ⚠️ Common Pitfalls & Pro Tips

> [!TIP]
> **Pro Tip**: In TypeScript, the compiler is your pair-programmer. Pay close attention to compiler diagnostic messages: they describe the exact shape mismatch.

> [!WARNING]
> **Common Pitfall**: Do not fall into the trap of using `any` to silence compiler warnings. Use `unknown` with type guards or write proper generic constraints!

---

## 💡 10 In-Depth Practical Examples & Solutions

### Example 1: Numeric Enums and Default Auto-Incrementing
**Problem / Scenario:**
Declare a numeric enum where members receive auto-incrementing integer values.

**Solution:**
```typescript
enum Direction {
  North, // 0
  East,  // 1
  South, // 2
  West   // 3
}

console.log("East value:", Direction.East);
console.log("South value:", Direction.South);
```

**Explanation & Output:**
By default, numeric enums start at 0 and increment by 1 for each successive member.

---

### Example 2: String Enums for Explicit Values
**Problem / Scenario:**
Define a string enum for human-readable API endpoints or status codes.

**Solution:**
```typescript
enum LogLevel {
  Debug = "DEBUG",
  Info = "INFO",
  Warn = "WARN",
  Error = "ERROR"
}

function writeLog(level: LogLevel, msg: string): void {
  console.log(`[${level}] ${msg}`);
}

writeLog(LogLevel.Info, "Service online");
```

**Explanation & Output:**
String enums serialize to readable string values at runtime, making debugging and logging much easier.

---

### Example 3: Reverse Mapping in Numeric Enums
**Problem / Scenario:**
Look up an enum member name from its numeric value.

**Solution:**
```typescript
enum StatusCode {
  Ok = 200,
  NotFound = 404,
  InternalError = 500
}

const codeValue: number = 404;
const codeName: string = StatusCode[codeValue]; // Reverse lookup

console.log(`Code ${codeValue} is: ${codeName}`); // "NotFound"
```

**Explanation & Output:**
Numeric enums generate reverse mappings from values to member names in JavaScript runtime objects.

---

### Example 4: 'const enum' for Inlined Performance
**Problem / Scenario:**
Eliminate runtime enum objects by inlining member values at compile time.

**Solution:**
```typescript
const enum HttpVerb {
  Get = "GET",
  Post = "POST"
}

// In emitted JavaScript, HttpVerb.Get is replaced with the literal string "GET":
const currentVerb = HttpVerb.Get;
console.log("Emitted verb:", currentVerb);
```

**Explanation & Output:**
'const enum' generates zero JavaScript code; the compiler directly replaces all references with their literal values.

---

### Example 5: The 'as const' Object Literal Pattern
**Problem / Scenario:**
Create a modern enum alternative using an immutable object literal.

**Solution:**
```typescript
const Color = {
  Red: "#ff0000",
  Green: "#00ff00",
  Blue: "#0000ff"
} as const;

type ColorType = (typeof Color)[keyof typeof Color];

function paint(c: ColorType): void {
  console.log("Painting with color:", c);
}

paint(Color.Green);
paint("#ff0000");
```

**Explanation & Output:**
The 'as const' object pattern is tree-shakeable, standard JavaScript, and avoids enum pitfalls.

---

### Example 6: Deriving Union Types from 'as const' Objects ('keyof typeof')
**Problem / Scenario:**
Extract both key unions and value unions from a constant dictionary.

**Solution:**
```typescript
const Role = {
  Admin: "ADMIN",
  Editor: "EDITOR",
  Viewer: "VIEWER"
} as const;

type RoleKey = keyof typeof Role; // "Admin" | "Editor" | "Viewer"
type RoleValue = (typeof Role)[RoleKey]; // "ADMIN" | "EDITOR" | "VIEWER"

const myRole: RoleValue = Role.Admin;
console.log("Assigned role:", myRole);
```

**Explanation & Output:**
'keyof typeof' extracts the keys of a const object, and indexed access extracts the union of its values.

---

### Example 7: Bitwise Flags with Enums for Permission Systems
**Problem / Scenario:**
Combine multiple permissions using bitwise OR in a numeric enum.

**Solution:**
```typescript
enum Permission {
  None = 0,
  Read = 1 << 0,   // 1
  Write = 1 << 1,  // 2
  Execute = 1 << 2 // 4
}

const userPerms = Permission.Read | Permission.Write;

function canWrite(perms: number): boolean {
  return (perms & Permission.Write) !== 0;
}

console.log("Has write permission?", canWrite(userPerms));
```

**Explanation & Output:**
Bitwise enums allow compact representation of multiple boolean capabilities within a single integer.

---

### Example 8: Enum vs String Literal Union Benchmark
**Problem / Scenario:**
Compare enum ergonomics with string literal unions.

**Solution:**
```typescript
// Option A: Enum
enum EnvironmentEnum { Dev = "DEV", Prod = "PROD" }

// Option B: Literal Union (No runtime overhead, pure type)
type EnvironmentUnion = "DEV" | "PROD";

function setEnv(env: EnvironmentUnion) {
  console.log("Environment:", env);
}

setEnv("DEV");
```

**Explanation & Output:**
String literal unions have zero runtime footprint and allow passing string literals directly without importing an enum object.

---

### Example 9: Validating Runtime Input Against Enums
**Problem / Scenario:**
Safely verify if an external string matches an enum member.

**Solution:**
```typescript
enum Priority { Low = "L", Medium = "M", High = "H" }

function isPriority(val: string): val is Priority {
  return Object.values(Priority).includes(val as Priority);
}

const inputStr = "M";
if (isPriority(inputStr)) {
  console.log("Valid priority chosen:", inputStr);
}
```

**Explanation & Output:**
Using 'Object.values(Enum)' allows runtime verification before casting to the enum type.

---

### Example 10: Type-Safe State Machine Using 'as const' Objects
**Problem / Scenario:**
Define allowed state transitions using const objects and type checking.

**Solution:**
```typescript
const State = {
  Idle: "IDLE",
  Running: "RUNNING",
  Stopped: "STOPPED"
} as const;

type StateType = (typeof State)[keyof typeof State];

const ALLOWED_TRANSITIONS: Record<StateType, readonly StateType[]> = {
  [State.Idle]: [State.Running],
  [State.Running]: [State.Stopped, State.Idle],
  [State.Stopped]: [State.Idle]
};

function canTransition(from: StateType, to: StateType): boolean {
  return ALLOWED_TRANSITIONS[from].includes(to);
}

console.log("Idle -> Running?", canTransition(State.Idle, State.Running));
console.log("Stopped -> Running?", canTransition(State.Stopped, State.Running));
```

**Explanation & Output:**
Const objects provide typed keys for defining finite state machines with transition validation.

---

## 🎉 Congratulations

🌕 **You are amazing!** You have conquered **Day 18** of 30 Days of TypeScript. Keep the momentum going!

<div align="center">
  <p><a href="../17_Day_Abstract_classes/17_day_abstract_classes.md">&lt;&lt; Day 17</a> | <a href="../README.md">30 Days of TypeScript</a> | <a href="../19_Day_Generics_basics/19_day_generics_basics.md">Day 19 &gt;&gt;</a></p>
</div>
