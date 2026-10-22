# 30 Days Of TypeScript: Day 25 - Conditional Types & Distributive Conditionals

<div align="center">
  <p><a href="../24_Day_Template_literal_types/24_day_template_literal_types.md">&lt;&lt; Day 24</a> | <a href="../README.md">30 Days of TypeScript</a> | <a href="../26_Day_The_infer_keyword/26_day_the_infer_keyword.md">Day 26 &gt;&gt;</a></p>
</div>

---

- [30 Days Of TypeScript: Day 25 - Conditional Types & Distributive Conditionals](#30-days-of-typescript-day-25---conditional-types-distributive-conditionals)
  - [📖 Overview](#-overview)
  - [🎯 Learning Objectives](#-learning-objectives)
  - [💡 Core Concepts & Deep Dive](#-core-concepts--deep-dive)
    - [1. Conditional Types (T extends U ? X : Y)](#1-conditional-types-t-extends-u-x-y-)
    - [2. Distributive Conditionals](#2-distributive-conditionals)
  - [💻 Runnable Lesson Demonstration](#-runnable-lesson-demonstration)
  - [⚠️ Common Pitfalls & Pro Tips](#️-common-pitfalls--pro-tips)
  - [💡 10 In-Depth Practical Examples & Solutions](#-10-in-depth-practical-examples--solutions)
    - [Example 1: Basic Conditional Type ('T extends U ? X : Y')](#example-1-basic-conditional-type-t-extends-u-x-y)
    - [Example 2: Distributive Behavior Over Unions](#example-2-distributive-behavior-over-unions)
    - [Example 3: Preventing Distribution with Tuple Wrapping ('[T]')](#example-3-preventing-distribution-with-tuple-wrapping-t)
    - [Example 4: Recreating 'NonNullable<T>'](#example-4-recreating-nonnullablet)
    - [Example 5: Type Filtering ('Filter<T, Condition>')](#example-5-type-filtering-filtert-condition)
    - [Example 6: Nested Conditionals for Type Categorization](#example-6-nested-conditionals-for-type-categorization)
    - [Example 7: Conditional Function Return Types](#example-7-conditional-function-return-types)
    - [Example 8: Flattening Nested Arrays ('Flatten<T>')](#example-8-flattening-nested-arrays-flattent)
    - [Example 9: Type-Safe Cast Guard with Conditionals](#example-9-type-safe-cast-guard-with-conditionals)
    - [Example 10: Dynamic Polymorphic Result Resolver](#example-10-dynamic-polymorphic-result-resolver)
  - [🎉 Congratulations](#-congratulations)

---

## 📖 Overview

Write conditional type branching using 'T extends U ? X : Y' and understand distributive conditional types over unions.

---

## 🎯 Learning Objectives

By the end of today, you will be able to:
- [ ] Master **Conditional Types (T extends U ? X : Y)**
- [ ] Master **Distributive Conditionals**
- [ ] Study and implement the 10 in-depth practical examples with complete solutions.

---

## 💡 Core Concepts & Deep Dive


### 1. Conditional Types (T extends U ? X : Y)

Branching type logic that selects one type or another based on a subtype relationship.


### 2. Distributive Conditionals

When checking a naked type parameter 'T', unions automatically distribute: '(A | B) extends U' becomes '(A extends U) | (B extends U)'.


---

## 💻 Runnable Lesson Demonstration

Execute today's live code in your terminal:
```bash
npm run day:25
```

Here is the source code for today's lesson:
```typescript
// Day 25: Conditional Types & Distributive Conditionals
type IsString<T> = T extends string ? true : false;

type A = IsString<string>; // true
type B = IsString<number>; // false

// Distributive union filtering
type NonNull<T> = T extends null | undefined ? never : T;
type Clean = NonNull<string | null | number>; // string | number
console.log("Conditional types compiled successfully");

```

---

## ⚠️ Common Pitfalls & Pro Tips

> [!TIP]
> **Pro Tip**: In TypeScript, the compiler is your pair-programmer. Pay close attention to compiler diagnostic messages—they describe the exact shape mismatch.

> [!WARNING]
> **Common Pitfall**: Do not fall into the trap of using `any` to silence compiler warnings. Use `unknown` with type guards or write proper generic constraints!

---

## 💡 10 In-Depth Practical Examples & Solutions

### Example 1: Basic Conditional Type ('T extends U ? X : Y')
**Problem / Scenario:**
Return a boolean literal type based on whether an input is a string.

**Solution:**
```typescript
type IsString<T> = T extends string ? true : false;

type A = IsString<"hello">; // true
type B = IsString<42>;      // false

const a: A = true;
const b: B = false;
console.log("A is string?", a, "B is string?", b);
```

**Explanation & Output:**
Conditional types select one of two possible types based on a type relationship test.

---

### Example 2: Distributive Behavior Over Unions
**Problem / Scenario:**
Observe how conditional types distribute automatically across union members.

**Solution:**
```typescript
type ToArray<T> = T extends any ? T[] : never;

type StrNumArr = ToArray<string | number>;
// Distributes to: ToArray<string> | ToArray<number>
// Result: string[] | number[] (NOT (string | number)[])

const list1: StrNumArr = ["a", "b"];
const list2: StrNumArr = [1, 2, 3];
console.log("List 1:", list1, "List 2:", list2);
```

**Explanation & Output:**
When a naked generic parameter is tested in a conditional type, it distributes across every member of a union.

---

### Example 3: Preventing Distribution with Tuple Wrapping ('[T]')
**Problem / Scenario:**
Disable union distribution by wrapping the checked parameter in a tuple.

**Solution:**
```typescript
type NonDistributiveToArray<T> = [T] extends [any] ? T[] : never;

type CombinedArray = NonDistributiveToArray<string | number>;
// Result: (string | number)[]

const mixed: CombinedArray = ["text", 42, "more text"];
console.log("Mixed array:", mixed);
```

**Explanation & Output:**
Wrapping type parameters in brackets '[T]' suppresses distributive behavior, checking the union as a whole.

---

### Example 4: Recreating 'NonNullable<T>'
**Problem / Scenario:**
Build the built-in NonNullable utility using conditional types.

**Solution:**
```typescript
type MyNonNullable<T> = T extends null | undefined ? never : T;

type RawInput = string | null | undefined;
type CleanInput = MyNonNullable<RawInput>; // string

const input: CleanInput = "Safe Value";
console.log("Non-nullable string:", input);
```

**Explanation & Output:**
Filtering out unwanted union members is accomplished by returning 'never' in the matching branch.

---

### Example 5: Type Filtering ('Filter<T, Condition>')
**Problem / Scenario:**
Extract only primitive values from a union containing mixed types.

**Solution:**
```typescript
type FilterPrimitives<T> = T extends string | number | boolean ? T : never;

type MixedUnion = string | number | { id: string } | boolean | (() => void);
type Primitives = FilterPrimitives<MixedUnion>; // string | number | boolean

const p: Primitives = "Primitive string";
console.log("Primitive:", p);
```

**Explanation & Output:**
Conditional types distribute across unions and filter out members that do not satisfy the constraint.

---

### Example 6: Nested Conditionals for Type Categorization
**Problem / Scenario:**
Categorize an unknown type into human-readable descriptor strings.

**Solution:**
```typescript
type TypeDescriptor<T> =
  T extends string ? "text" :
  T extends number ? "numeric" :
  T extends boolean ? "flag" :
  T extends Function ? "callable" :
  "object-or-other";

type D1 = TypeDescriptor<"abc">; // "text"
type D2 = TypeDescriptor<123>;   // "numeric"
type D3 = TypeDescriptor<true>;  // "flag"

const d: D1 = "text";
console.log("Descriptor:", d);
```

**Explanation & Output:**
Chained conditional types act like type-level if-else-if ladders to classify data types.

---

### Example 7: Conditional Function Return Types
**Problem / Scenario:**
Vary the return type of a function dynamically based on a boolean parameter.

**Solution:**
```typescript
function parseData<T extends boolean>(asJson: T): T extends true ? object : string {
  if (asJson) {
    return { data: "parsed" } as any;
  }
  return '{"data":"parsed"}' as any;
}

const objResult = parseData(true);   // Type: object
const strResult = parseData(false);  // Type: string

console.log("Object:", objResult);
console.log("String:", strResult);
```

**Explanation & Output:**
Conditional return types allow single function signatures to return different types depending on input arguments.

---

### Example 8: Flattening Nested Arrays ('Flatten<T>')
**Problem / Scenario:**
Unwrap single-level or multi-level arrays into element types.

**Solution:**
```typescript
type Flatten<T> = T extends (infer U)[] ? U : T;

type NumberList = Flatten<number[]>;       // number
type SingleString = Flatten<string>;       // string
type NestedList = Flatten<Array<boolean>>; // boolean

const val: NumberList = 42;
console.log("Flattened value:", val);
```

**Explanation & Output:**
Conditional types can inspect internal array types and unwrap them to their element types.

---

### Example 9: Type-Safe Cast Guard with Conditionals
**Problem / Scenario:**
Enforce that a type cast is only permissible if the target extends the source.

**Solution:**
```typescript
type SafeCast<Source, Target> = Target extends Source ? Target : never;

type BaseUser = { id: string };
type AdminUser = { id: string; role: "admin" };

type CastResult = SafeCast<BaseUser, AdminUser>; // AdminUser (Valid extension)
type BadCast = SafeCast<BaseUser, { other: number }>; // never

const admin: CastResult = { id: "a_1", role: "admin" };
console.log("Admin:", admin);
```

**Explanation & Output:**
Conditionals validate structural hierarchy before permitting conversions.

---

### Example 10: Dynamic Polymorphic Result Resolver
**Problem / Scenario:**
Resolve the outcome type of a service call based on configuration options.

**Solution:**
```typescript
interface ServiceOptions {
  detailed: boolean;
}

type ServiceResult<T extends ServiceOptions> =
  T["detailed"] extends true ? { code: number; message: string; timestamp: number } : { code: number };

function executeService<T extends ServiceOptions>(opts: T): ServiceResult<T> {
  if (opts.detailed) {
    return { code: 200, message: "OK", timestamp: Date.now() } as ServiceResult<T>;
  }
  return { code: 200 } as ServiceResult<T>;
}

const simple = executeService({ detailed: false });
const detailed = executeService({ detailed: true });
console.log("Simple:", simple);
console.log("Detailed:", detailed);
```

**Explanation & Output:**
Conditional types enable APIs that dynamically adapt their response structure based on options.

---

## 🎉 Congratulations

🌕 **You are amazing!** You have conquered **Day 25** of 30 Days of TypeScript. Keep the momentum going!

<div align="center">
  <p><a href="../24_Day_Template_literal_types/24_day_template_literal_types.md">&lt;&lt; Day 24</a> | <a href="../README.md">30 Days of TypeScript</a> | <a href="../26_Day_The_infer_keyword/26_day_the_infer_keyword.md">Day 26 &gt;&gt;</a></p>
</div>
