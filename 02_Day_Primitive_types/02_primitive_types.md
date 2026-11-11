<div align="center">
  <h1>🚀 30 Days Of TypeScript: Day 2 - Primitive Data Types & Type Annotations</h1>
  <sub>JavaScript's 7 primitives, explicit annotations, type inference, and strict null safety</sub>
</div>

[<< Day 1: Introduction](../01_Day_Introduction/01_introduction.md) | [Day 3: Special Types >>](../03_Day_Special_types/03_special_types.md)

---

## Table of Contents
- [TypeScript Primitive Types Overview](#typescript-primitive-types-overview)
- [Lowercase Primitives vs Wrapper Objects](#lowercase-primitives-vs-wrapper-objects)
- [Numbers, Bases & Numeric Separators](#numbers-bases--numeric-separators)
- [BigInt & Symbol Primitives](#bigint--symbol-primitives)
- [Type Inference vs Explicit Annotations](#type-inference-vs-explicit-annotations)
- [Strict Null Safety (`null` & `undefined`)](#strict-null-safety-null--undefined)
- [💻 Exercises - Day 2](#-exercises---day-2)

---

## TypeScript Primitive Types Overview
TypeScript models all seven immutable ECMAScript primitive types directly in its static type system:

| Type | Example Literal | `typeof` Result | Typical Use Case |
|---|---|---|---|
| `string` | `"Ada Lovelace"` | `"string"` | UTF-16 text and template literals |
| `number` | `42`, `3.14`, `0xff` | `"number"` | IEEE-754 64-bit floating-point numbers |
| `boolean` | `true`, `false` | `"boolean"` | Logical flags and predicates |
| `bigint` | `9007199254740993n` | `"bigint"` | Arbitrary-precision integers (`> 2^53 - 1`) |
| `symbol` | `Symbol("id")` | `"symbol"` | Globally unique, collision-free property keys |
| `undefined` | `undefined` | `"undefined"` | Uninitialized bindings or omitted parameters |
| `null` | `null` | `"object"` *(legacy)* | Intentional absence of an object value |

---

## Lowercase Primitives vs Wrapper Objects
Always annotate with **lowercase** primitive names (`string`, `number`, `boolean`, `bigint`, `symbol`), never uppercase boxed constructor types (`String`, `Number`, `Boolean`):

```typescript
const username: string = "grace_hopper"; // ✅ Correct: primitive type
// const badName: String = new String("grace"); // ❌ Avoid: boxed object wrapper
```

---

## Numbers, Bases & Numeric Separators
All `number` values in TypeScript are double-precision 64-bit floats, supporting decimal, hexadecimal, binary, and octal literals along with underscores (`_`) for readability:

```typescript
const port: number = 8080;
const hexMask: number = 0xff_00_aa;
const binaryPerms: number = 0b111_101_101;
const octalMode: number = 0o755;
const oneMillion: number = 1_000_000;
```

---

## BigInt & Symbol Primitives
Standard `number` loses integer precision above `Number.MAX_SAFE_INTEGER` (`9_007_199_254_740_991`). Use `bigint` (with suffix `n`) for 64-bit IDs, financial ledgers, and cryptography, and `symbol` for unique keys:

```typescript
const ledgerMicroCents: bigint = 9_007_199_254_740_991n + 25n;
const traceKey: symbol = Symbol("requestTraceId");
```

> [!NOTE]
> TypeScript forbids mixing `number` and `bigint` in arithmetic expressions (`10n + 5` is a compile error). Convert explicitly with `BigInt(5)` or `Number(10n)`.

---

## Type Inference vs Explicit Annotations
TypeScript automatically infers variable types when initialized immediately:

```typescript
let retries = 3;              // Inferred as number
const serviceName = "auth";   // Inferred as literal "auth"

let deferredToken: string;    // Explicit annotation required before later assignment
deferredToken = "jwt_xyz";
```

---

## Strict Null Safety (`null` & `undefined`)
With `"strictNullChecks": true` (enabled via `"strict": true`), `null` and `undefined` are distinct types and are **not** assignable to `string` or `number` unless explicitly included in a union:

```typescript
let nickname: string | null = null;
nickname = "Ada";
```

---

## 💻 Exercises - Day 2

### Exercises: Level 1
1. Declare variables for all 7 primitive types (`string`, `number`, `boolean`, `bigint`, `symbol`, `null`, `undefined`) with explicit annotations and log their values alongside `typeof`.
2. Write numeric literals using decimal, hexadecimal (`0x`), binary (`0b`), and octal (`0o`) representations that all equal `255`.
3. Create a formatted summary string using template literals that interpolates a developer's name, years of experience, and active status.

### Exercises: Level 2
1. Demonstrate integer precision loss with `Number.MAX_SAFE_INTEGER + 1 === Number.MAX_SAFE_INTEGER + 2`, then solve the exact arithmetic cleanly using `bigint`.
2. Write a function `formatCurrencyCents(cents: bigint, symbol?: string): string` that formats arbitrary-size integer cents into a dollar string (e.g., `123456n` -> `"$1234.56"`).

### Exercises: Level 3
1. Create two distinct `symbol` keys with the same description `Symbol("token")` and verify at compile time and runtime that they do not collide on an object.
2. Write a function `parsePort(raw: string | undefined): number | null` that safely parses a port between `1` and `65535`, returning `null` for missing or invalid inputs.
