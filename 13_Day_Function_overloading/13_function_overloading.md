<div align="center">
  <h1>🚀 30 Days Of TypeScript: Day 13 - Function Overloading & Generic Signatures</h1>
  <sub>Overload signatures, implementation hiding, resolution order, and when unions beat overloads</sub>
</div>

[<< Day 12: Functions](../12_Day_Functions/12_functions.md) | [Day 14: Interfaces >>](../14_Day_Interfaces/14_interfaces.md)

---

## Table of Contents
- [Why Function Overloading?](#why-function-overloading)
- [Overload Signatures vs Implementation Signature](#overload-signatures-vs-implementation-signature)
- [Top-to-Bottom Overload Resolution Order](#top-to-bottom-overload-resolution-order)
- [Method Overloading on Interfaces & Classes](#method-overloading-on-interfaces--classes)
- [When Unions Beat Overloads](#when-unions-beat-overloads)
- [💻 Exercises - Day 13](#-exercises---day-13)

---

## Why Function Overloading?
Plain union return types (`(input: string | number) => string | number`) lose the **exact relationship** between which input type produces which output type! Function overloads declare multiple public call contracts backed by a single JavaScript runtime implementation:

```typescript
function reverseData(text: string): string;
function reverseData(items: readonly number[]): number[];
function reverseData(value: string | readonly number[]): string | number[] {
    if (typeof value === "string") {
        return [...value].reverse().join("");
    }
    return [...value].reverse();
}

const reversedText = reverseData("TypeScript"); // Exact return type: string!
const reversedNums = reverseData([1, 2, 3]);    // Exact return type: number[]!
```

---

## Overload Signatures vs Implementation Signature
A TypeScript overloaded function has two distinct parts:
1. **Two or more Overload Signatures** (bodyless): Visible to external callers.
2. **One Implementation Signature** (with `{ ... }` body): Must be compatible with *all* overload signatures, and is **hidden** from external callers!

```typescript
function createDate(epochMs: number): Date;
function createDate(year: number, month: number, day: number): Date;
// Implementation signature (cannot be called with 2 arguments!)
function createDate(a: number, b?: number, c?: number): Date {
    if (b !== undefined && c !== undefined) {
        return new Date(Date.UTC(a, b - 1, c));
    }
    return new Date(a);
}
```

---

## Top-to-Bottom Overload Resolution Order
TypeScript tests overload signatures **from top to bottom** and selects the **first matching signature**. Always place the **most specific** signatures (literals, narrow subtypes) **above** broader fallback signatures!

---

## Method Overloading on Interfaces & Classes
Methods inside classes and interfaces follow the exact same overload rules:

```typescript
interface Serializer {
    encode(payload: object, format: "json"): string;
    encode(payload: object, format: "bytes"): Uint8Array;
}
```

---

## When Unions Beat Overloads
> [!TIP]
> If the return type does **not** change based on the input branch—for example, `getLength(x: string): number` and `getLength(x: unknown[]): number`—prefer a single union parameter `getLength(x: string | readonly unknown[]): number`! That also allows callers holding a `string | string[]` union to call the function directly.

---

## 💻 Exercises - Day 13

### Exercises: Level 1
1. Write an overloaded `parseValue` function where `parseValue(raw: string, as: "number"): number`, `parseValue(raw: string, as: "boolean"): boolean`, and `parseValue(raw: string, as: "json"): unknown`.
2. Verify that calling `createDate(2026, 11)` with 2 arguments is rejected at compile time even though the implementation signature has `(a: number, b?: number, c?: number)`.
3. Refactor an unnecessary 2-overload `toByteLength(s: string): number` / `toByteLength(b: Uint8Array): number` into a clean union signature.

### Exercises: Level 2
1. Implement an overloaded `queryElements` helper mimicking DOM element lookup: `"canvas"` returns `{ width: number; height: number }`, `"input"` returns `{ value: string }`, and general `string` falls back to `{ tagName: string }`—testing why `"canvas"` and `"input"` must appear above `string`.
2. Overload a `range` generator: `range(stop: number): number[]` and `range(start: number, stop: number, step?: number): number[]`.

### Exercises: Level 3
1. Design a `HttpClient` class with overloaded `.request()` methods returning `Promise<string>` when `{ responseType: "text" }` is passed and `Promise<Uint8Array>` when `{ responseType: "binary" }` is passed.
2. Combine arrow-function type aliases with multiple call signatures (`type DualTransformer = { (x: string): number; (x: number): string }`) and implement it cleanly.
