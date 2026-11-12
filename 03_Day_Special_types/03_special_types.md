<div align="center">
  <h1>🚀 30 Days Of TypeScript: Day 3 - Special Types: any, unknown, never & void</h1>
  <sub>Top types, bottom types, safe untrusted input boundaries, and function return semantics</sub>
</div>

[<< Day 2: Primitive Types](../02_Day_Primitive_types/02_primitive_types.md) | [Day 4: Arrays >>](../04_Day_Arrays/04_arrays.md)

---

## Table of Contents
- [Type Hierarchy: Top vs Bottom Types](#type-hierarchy-top-vs-bottom-types)
- [The Escape Hatch: `any`](#the-escape-hatch-any)
- [The Type-Safe Top Type: `unknown`](#the-type-safe-top-type-unknown)
- [`void` vs `undefined` in Functions](#void-vs-undefined-in-functions)
- [The Bottom Type: `never`](#the-bottom-type-never)
- [💻 Exercises - Day 3](#-exercises---day-3)

---

## Type Hierarchy: Top vs Bottom Types
In set-theoretic type systems, every type represents a set of possible values:

| Type | Set Role | Assignable From | Operations Permitted Without Narrowing |
|---|---|---|---|
| `unknown` | **Top Type** (universal set) | Anything | None (must narrow first) |
| `any` | **Disables type-checker** | Anything | Everything (unsafe!) |
| `void` | Ignored return value | `undefined` | None on the return result |
| `never` | **Bottom Type** (empty set `∅`) | Nothing (except `never`) | Unreachable code / exhaustiveness |

---

## The Escape Hatch: `any`
Assigning `any` opts a value out of static type checking completely—allowing arbitrary property access, function calls, and silent contamination of downstream variables:

```typescript
let unsafePayload: any = "hello";
// unsafePayload.nonExistentMethod(); // Compiles silently, crashes at runtime!
```

> [!WARNING]
> Treat `any` as contagious: returning `any` from a helper function silently disables type safety in every caller. Reserve it strictly for incremental legacy migrations.

---

## The Type-Safe Top Type: `unknown`
`unknown` accepts any value—making it ideal for `JSON.parse()`, network payloads, and `catch (err: unknown)` blocks—while forcing callers to prove the type before using it:

```typescript
function parseMessage(raw: unknown): string {
    if (typeof raw === "string") {
        return raw.trim().toUpperCase(); // Narrowed to string!
    }
    if (typeof raw === "object" && raw !== null && "text" in raw && typeof raw.text === "string") {
        return raw.text;
    }
    return "[Unsupported Payload]";
}
```

---

## `void` vs `undefined` in Functions
`void` indicates a function's return value is intentionally ignored:
- A direct function declaration `function log(): void` cannot return a non-undefined value.
- A callback type `() => void` **allows** callbacks that return values (such as `Array.prototype.push` inside `forEach`), while preventing the caller from using that return value!

```typescript
const target: number[] = [];
[1, 2, 3].forEach((n) => target.push(n)); // Valid because forEach expects () => void, not () => undefined!
```

---

## The Bottom Type: `never`
`never` represents computations that **never return normally** (throwing an exception or running an infinite event loop) or impossible code branches left after narrowing every member of a union:

```typescript
function fail(reason: string): never {
    throw new Error(`Fatal error: ${reason}`);
}

type Shape = "circle" | "square";

function areaFactor(shape: Shape): number {
    switch (shape) {
        case "circle": return Math.PI;
        case "square": return 1;
        default: {
            const exhaustiveCheck: never = shape;
            return exhaustiveCheck;
        }
    }
}
```

---

## 💻 Exercises - Day 3

### Exercises: Level 1
1. Write a function `describeUnknown(input: unknown): string` that handles `string`, `number`, `boolean`, `null`, and `undefined` safely using `typeof` and strict equality.
2. Write a logger function `logDiagnostic(tag: string, message: string): void` and verify that callers cannot assign its result to a `string`.
3. Write a helper `raiseConfigError(missingKey: string): never` that throws a descriptive `Error`.

### Exercises: Level 2
1. Wrap `JSON.parse(rawJson)` in a function `safeJsonParse(rawJson: string): unknown` so callers receive `unknown` instead of TypeScript's default `any`.
2. Demonstrate the difference between `type CallbackVoid = () => void` and `type CallbackUndefined = () => undefined` by passing `() => 42` to each.

### Exercises: Level 3
1. Create a union `type LogLevel = "debug" | "info" | "warn" | "error"` and write a `switch` formatter with an `assertNever(value: never): never` helper in the `default` branch. Temporarily add `"fatal"` to `LogLevel` to observe the compile-time error.
2. Build a safe exception message extractor `extractErrorMessage(err: unknown): string` that handles `Error` instances, plain `{ message: string }` objects, and raw string throws.
