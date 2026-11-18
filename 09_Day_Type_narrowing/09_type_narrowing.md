<div align="center">
  <h1>🚀 30 Days Of TypeScript: Day 9 - Type Narrowing & Control Flow Analysis</h1>
  <sub>typeof guards, truthiness pitfalls, equality checks, the in operator, and instanceof</sub>
</div>

[<< Day 8: Unions & Literals](../08_Day_Unions_and_literals/08_unions_and_literals.md) | [Day 10: Type Predicates >>](../10_Day_Type_predicates/10_type_predicates.md)

---

## Table of Contents
- [How Control Flow Analysis (CFA) Works](#how-control-flow-analysis-cfa-works)
- [`typeof` Type Guards & the `null` Quirk](#typeof-type-guards--the-null-quirk)
- [Truthiness Narrowing & Pitfalls](#truthiness-narrowing--pitfalls)
- [Equality Narrowing](#equality-narrowing)
- [Property Narrowing with `in`](#property-narrowing-with-in)
- [`instanceof` Narrowing](#instanceof-narrowing)
- [💻 Exercises - Day 9](#-exercises---day-9)

---

## How Control Flow Analysis (CFA) Works
TypeScript's compiler builds a control-flow graph of every `if`, `else`, `switch`, `return`, `throw`, and loop in your code. As execution passes runtime checks (**type guards**), TypeScript progressively refines broad unions into specific narrowed types at each program point.

---

## `typeof` Type Guards & the `null` Quirk
JavaScript's `typeof` operator narrows primitives (`"string"`, `"number"`, `"boolean"`, `"bigint"`, `"symbol"`, `"undefined"`, `"function"`). Remember JavaScript's infamous historical quirk: `typeof null === "object"`!

```typescript
function renderLabels(labels: string | readonly string[] | null): string {
    if (labels === null) {
        return "(none)";
    }
    if (typeof labels === "string") {
        return labels;
    }
    return labels.join(", "); // Narrowed to readonly string[]!
}
```

---

## Truthiness Narrowing & Pitfalls
Checking `if (value)` strips `null` and `undefined`, **but beware** on primitives: empty string `""`, `0`, `0n`, and `NaN` are also falsy!

> [!CAUTION]
> Never write `if (count)` when `0` is a valid numeric input! Prefer explicit nullish checks (`if (count !== null && count !== undefined)` or `if (count != null)`).

---

## Equality Narrowing
When two variables of overlapping union types are strictly equal (`a === b`), TypeScript narrows **both** variables to the intersection of their types:

```typescript
function compareTokens(x: string | number, y: string | boolean): string {
    if (x === y) {
        // Only `string` exists in both unions -> both x and y narrow to `string`!
        return x.toUpperCase();
    }
    return `${String(x)} !== ${String(y)}`;
}
```

---

## Property Narrowing with `in`
The `"prop" in obj` operator narrows unions of object shapes based on property presence:

```typescript
type TcpTarget = { host: string; port: number };
type UnixSocketTarget = { socketPath: string };

function formatTarget(target: TcpTarget | UnixSocketTarget): string {
    if ("socketPath" in target) {
        return `unix://${target.socketPath}`;
    }
    return `tcp://${target.host}:${target.port}`;
}
```

---

## `instanceof` Narrowing
`instanceof` checks the runtime prototype chain to narrow class instances (`Date`, `RegExp`, `URL`, `Error`, or custom classes):

```typescript
function toTimestampMs(value: Date | number): number {
    return value instanceof Date ? value.getTime() : value;
}
```

---

## 💻 Exercises - Day 9

### Exercises: Level 1
1. Write `padLeft(value: string, padding: number | string): string` using `typeof` narrowing to prepend spaces when `padding` is a `number` or the string itself when `padding` is a `string`.
2. Fix a buggy discount function `applyDiscount(discountPercent?: number)` where `discountPercent = 0` was accidentally ignored due to `if (discountPercent)`.
3. Narrow `Date | string | number` into an ISO timestamp string using `instanceof Date` and `typeof`.

### Exercises: Level 2
1. Define three distinct notification channels (`EmailTarget`, `SmsTarget`, `WebhookTarget`) with unique keys and narrow `ChannelTarget` cleanly using the `in` operator.
2. Demonstrate assignment re-narrowing on `let state: string | number` as you assign a `number`, call `.toFixed(2)`, then assign a `string`, and call `.toUpperCase()`.

### Exercises: Level 3
1. Demonstrate why TypeScript resets narrowing of a mutable `let token: string | null` inside a delayed callback `setTimeout(() => ...)`, and fix it safely by capturing `const currentToken = token`.
2. Write a comprehensive `inspectValue(val: unknown): string` diagnostic utility combining `=== null`, `Array.isArray`, `instanceof Error`, `instanceof Date`, and `typeof`.
