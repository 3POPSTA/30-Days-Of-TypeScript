# 30 Days Of TypeScript: Day 26 - The infer Keyword & Type Extraction

<div align="center">
  <p><a href="../25_Day_Conditional_types/25_day_conditional_types.md">&lt;&lt; Day 25</a> | <a href="../README.md">30 Days of TypeScript</a> | <a href="../27_Day_Utility_types_part_1/27_day_utility_types_part_1.md">Day 27 &gt;&gt;</a></p>
</div>

---

- [30 Days Of TypeScript: Day 26 - The infer Keyword & Type Extraction](#30-days-of-typescript-day-26---the-infer-keyword-type-extraction)
  - [📖 Overview](#-overview)
  - [🎯 Learning Objectives](#-learning-objectives)
  - [💡 Core Concepts & Deep Dive](#-core-concepts--deep-dive)
    - [1. The infer Keyword](#1-the-infer-keyword)
    - [2. Unwrapping Promises & Functions](#2-unwrapping-promises-functions)
  - [💻 Runnable Lesson Demonstration](#-runnable-lesson-demonstration)
  - [⚠️ Common Pitfalls & Pro Tips](#️-common-pitfalls--pro-tips)
  - [💡 10 In-Depth Practical Examples & Solutions](#-10-in-depth-practical-examples--solutions)
    - [Example 1: Extracting Function Return Types ('MyReturnType<T>')](#example-1-extracting-function-return-types-myreturntypet)
    - [Example 2: Extracting Function Parameter Types ('MyParameters<T>')](#example-2-extracting-function-parameter-types-myparameterst)
    - [Example 3: Unwrapping Promise Values ('UnwrapPromise<T>')](#example-3-unwrapping-promise-values-unwrappromiset)
    - [Example 4: Extracting Array Element Types ('ElementType<T>')](#example-4-extracting-array-element-types-elementtypet)
    - [Example 5: Extracting Constructor Parameters ('MyConstructorParameters<T>')](#example-5-extracting-constructor-parameters-myconstructorparameterst)
    - [Example 6: Unwrapping Custom Generic Containers](#example-6-unwrapping-custom-generic-containers)
    - [Example 7: Extracting Tuple Head and Tail](#example-7-extracting-tuple-head-and-tail)
    - [Example 8: Inferring String Template Parts](#example-8-inferring-string-template-parts)
    - [Example 9: Extracting Method Return Types from Class Interfaces](#example-9-extracting-method-return-types-from-class-interfaces)
    - [Example 10: Inferring Reducer State and Actions](#example-10-inferring-reducer-state-and-actions)
  - [🎉 Congratulations](#-congratulations)

---

## 📖 Overview

Extract inner types using pattern matching and the 'infer' keyword inside conditional types.

---

## 🎯 Learning Objectives

By the end of today, you will be able to:
- [ ] Master **The infer Keyword**
- [ ] Master **Unwrapping Promises & Functions**
- [ ] Study and implement the 10 in-depth practical examples with complete solutions.

---

## 💡 Core Concepts & Deep Dive


### 1. The infer Keyword

Declares a type variable to be extracted within the 'extends' clause of a conditional type.


### 2. Unwrapping Promises & Functions

Extract return types ('MyReturnType<T>'), resolved values ('Awaited<T>'), and constructor arguments.


---

## 💻 Runnable Lesson Demonstration

Execute today's live code in your terminal:
```bash
npm run day:26
```

Here is the source code for today's lesson:
```typescript
// Day 26: The infer Keyword & Type Extraction
type ReturnOf<T> = T extends (...args: any[]) => infer R ? R : never;

function computeArea(radius: number): number {
  return Math.PI * radius * radius;
}
type AreaType = ReturnOf<typeof computeArea>; // number

type UnpackPromise<T> = T extends Promise<infer U> ? U : T;
type Resolved = UnpackPromise<Promise<string>>; // string
console.log("infer patterns compiled successfully");

```

---

## ⚠️ Common Pitfalls & Pro Tips

> [!TIP]
> **Pro Tip**: In TypeScript, the compiler is your pair-programmer. Pay close attention to compiler diagnostic messages: they describe the exact shape mismatch.

> [!WARNING]
> **Common Pitfall**: Do not fall into the trap of using `any` to silence compiler warnings. Use `unknown` with type guards or write proper generic constraints!

---

## 💡 10 In-Depth Practical Examples & Solutions

### Example 1: Extracting Function Return Types ('MyReturnType<T>')
**Problem / Scenario:**
Deduce the return type of any function type using the 'infer' keyword.

**Solution:**
```typescript
type MyReturnType<T> = T extends (...args: any[]) => infer R ? R : never;

function fetchUser() {
  return { id: 101, username: "AdaLovelace", verified: true };
}

type UserResult = MyReturnType<typeof fetchUser>;
// Inferred: { id: number; username: string; verified: boolean }

const user: UserResult = { id: 101, username: "AdaLovelace", verified: true };
console.log("Extracted return type:", user.username);
```

**Explanation & Output:**
'infer R' declares a new type variable within the conditional 'extends' clause that the compiler deduces from context.

---

### Example 2: Extracting Function Parameter Types ('MyParameters<T>')
**Problem / Scenario:**
Unpack function parameter lists into a tuple type.

**Solution:**
```typescript
type MyParameters<T> = T extends (...args: infer P) => any ? P : never;

function notify(userId: string, count: number, urgent: boolean): void {}

type NotifyArgs = MyParameters<typeof notify>; // [userId: string, count: number, urgent: boolean]

const args: NotifyArgs = ["usr_1", 3, true];
notify(...args);
console.log("Parameters unpacked:", args);
```

**Explanation & Output:**
'infer P' captures the entire argument list as a labeled tuple type.

---

### Example 3: Unwrapping Promise Values ('UnwrapPromise<T>')
**Problem / Scenario:**
Unwrap single or nested Promise types into their inner resolved values.

**Solution:**
```typescript
type UnwrapPromise<T> = T extends Promise<infer U> ? UnwrapPromise<U> : T;

type DeepPromise = Promise<Promise<string>>;
type Resolved = UnwrapPromise<DeepPromise>; // string

const message: Resolved = "Resolved from nested promise";
console.log("Unwrapped:", message);
```

**Explanation & Output:**
Recursive conditional types with 'infer' repeatedly unwrap nested Promises, identical to the standard 'Awaited<T>' utility.

---

### Example 4: Extracting Array Element Types ('ElementType<T>')
**Problem / Scenario:**
Extract the underlying item type of an array or readonly array.

**Solution:**
```typescript
type ElementType<T> = T extends readonly (infer E)[] ? E : never;

type Scores = number[];
type ScoreElement = ElementType<Scores>; // number

type Colors = readonly ["red", "green", "blue"];
type ColorElement = ElementType<typeof Colors>; // "red" | "green" | "blue"

const c: ColorElement = "green";
console.log("Extracted array element:", c);
```

**Explanation & Output:**
'infer E' extracts the element type regardless of whether the array is mutable or readonly.

---

### Example 5: Extracting Constructor Parameters ('MyConstructorParameters<T>')
**Problem / Scenario:**
Capture the constructor arguments of any instantiable class.

**Solution:**
```typescript
type MyConstructorParameters<T> = T extends new (...args: infer P) => any ? P : never;

class HttpClient {
  constructor(public baseUrl: string, public timeoutMs: number = 3000) {}
}

type ClientArgs = MyConstructorParameters<typeof HttpClient>; // [baseUrl: string, timeoutMs?: number]

const params: ClientArgs = ["https://api.github.com", 5000];
const client = new HttpClient(...params);
console.log("Client Base URL:", client.baseUrl);
```

**Explanation & Output:**
'infer P' on a constructor signature captures the constructor's parameters as a tuple.

---

### Example 6: Unwrapping Custom Generic Containers
**Problem / Scenario:**
Extract the payload type from a custom Container or Response envelope.

**Solution:**
```typescript
interface Envelope<T> {
  payload: T;
  checksum: string;
}

type UnwrapPayload<T> = T extends Envelope<infer P> ? P : never;

type StringEnvelope = Envelope<{ token: string; expires: number }>;
type Inner = UnwrapPayload<StringEnvelope>;

const innerData: Inner = { token: "abc", expires: 3600 };
console.log("Token:", innerData.token);
```

**Explanation & Output:**
'infer' can target any type argument in any generic interface or type structure.

---

### Example 7: Extracting Tuple Head and Tail
**Problem / Scenario:**
Separate a tuple into its first element ('Head') and remaining elements ('Tail').

**Solution:**
```typescript
type Shift<T extends any[]> = T extends [infer Head, ...infer Tail] ? Tail : [];
type First<T extends any[]> = T extends [infer Head, ...any[]] ? Head : never;

type FullTuple = [string, number, boolean];
type OnlyFirst = First<FullTuple>; // string
type Remaining = Shift<FullTuple>; // [number, boolean]

const head: OnlyFirst = "Leader";
const tail: Remaining = [42, true];
console.log("Head:", head, "Tail:", tail);
```

**Explanation & Output:**
Combining 'infer' with tuple rest patterns allows type-level functional array manipulation.

---

### Example 8: Inferring String Template Parts
**Problem / Scenario:**
Extract protocol and domain components from a URL string type.

**Solution:**
```typescript
type ParseUrl<T extends string> =
  T extends `${infer Protocol}://${infer Domain}/${infer Path}`
    ? { protocol: Protocol; domain: Domain; path: Path }
    : never;

type Parsed = ParseUrl<"https://typescriptlang.org/docs">;
// { protocol: "https"; domain: "typescriptlang.org"; path: "docs" }

const urlInfo: Parsed = {
  protocol: "https",
  domain: "typescriptlang.org",
  path: "docs"
};

console.log("Parsed Domain:", urlInfo.domain);
```

**Explanation & Output:**
Using multiple 'infer' variables inside template literal types parses structured strings at compile time.

---

### Example 9: Extracting Method Return Types from Class Interfaces
**Problem / Scenario:**
Extract the return type of a specific method across an interface.

**Solution:**
```typescript
interface DatabaseClient {
  query(sql: string): Promise<Record<string, unknown>[]>;
  disconnect(): void;
}

type QueryReturn = DatabaseClient["query"] extends (...args: any[]) => infer R ? R : never;

async function runQuery(): QueryReturn {
  return [{ id: 1, name: "Sample" }];
}

runQuery().then(rows => console.log("Queried rows:", rows.length));
```

**Explanation & Output:**
'infer' extracts inner method return signatures even when combined with indexed access.

---

### Example 10: Inferring Reducer State and Actions
**Problem / Scenario:**
Automatically infer state and action types from a reducer function.

**Solution:**
```typescript
type InferReducer<T> = T extends (state: infer S, action: infer A) => infer S
  ? { state: S; action: A }
  : never;

const myReducer = (state: { count: number }, action: { type: "INC" } | { type: "DEC" }) => {
  return state;
};

type InferredTypes = InferReducer<typeof myReducer>;
const dummyAction: InferredTypes["action"] = { type: "INC" };
console.log("Action type:", dummyAction.type);
```

**Explanation & Output:**
'infer' can capture both state and action parameters simultaneously from higher-order patterns.

---

## 🎉 Congratulations

🌕 **You are amazing!** You have conquered **Day 26** of 30 Days of TypeScript. Keep the momentum going!

<div align="center">
  <p><a href="../25_Day_Conditional_types/25_day_conditional_types.md">&lt;&lt; Day 25</a> | <a href="../README.md">30 Days of TypeScript</a> | <a href="../27_Day_Utility_types_part_1/27_day_utility_types_part_1.md">Day 27 &gt;&gt;</a></p>
</div>
