<div align="center">
  <h1>🚀 30 Days Of TypeScript: Day 11 - Discriminated Unions & Exhaustiveness Checking</h1>
  <sub>Algebraic data types, tagged unions, making illegal states unrepresentable, and assertNever</sub>
</div>

[<< Day 10: Type Predicates](../10_Day_Type_predicates/10_type_predicates.md) | [Day 12: Functions >>](../12_Day_Functions/12_functions.md)

---

## Table of Contents
- [The "Bag of Optional Properties" Anti-Pattern](#the-bag-of-optional-properties-anti-pattern)
- [Discriminated (Tagged) Unions](#discriminated-tagged-unions)
- [Pattern Matching with `switch`](#pattern-matching-with-switch)
- [Compile-Time Exhaustiveness Checking](#compile-time-exhaustiveness-checking)
- [Modeling Domain State Machines](#modeling-domain-state-machines)
- [💻 Exercises - Day 11](#-exercises---day-11)

---

## The "Bag of Optional Properties" Anti-Pattern
Beginners often model network or UI states with loose optional fields:

```typescript
// ❌ Anti-Pattern: Allows { loading: true, data: user, error: err } simultaneously!
interface LooseAsyncState<T> {
    loading: boolean;
    data?: T;
    error?: Error;
}
```

---

## Discriminated (Tagged) Unions
A **discriminated union** gives every variant a shared literal property (**the discriminant**, commonly `status`, `kind`, or `type`). Checking the discriminant automatically narrows the entire object shape!

```typescript
type AsyncState<T> =
    | { readonly status: "idle" }
    | { readonly status: "loading"; readonly startedAtMs: number }
    | { readonly status: "success"; readonly data: T }
    | { readonly status: "error"; readonly message: string; readonly retryable: boolean };
```

Illegal combinations are now **impossible to construct at compile time**.

---

## Pattern Matching with `switch`
Switching on the discriminant gives exact per-branch autocomplete and type safety:

```typescript
function renderState(state: AsyncState<readonly string[]>): string {
    switch (state.status) {
        case "idle":
            return "Ready.";
        case "loading":
            return `Loading since ${state.startedAtMs}...`;
        case "success":
            return `Loaded ${state.data.length} items.`;
        case "error":
            return `Failed: ${state.message} (retryable=${state.retryable})`;
    }
}
```

---

## Compile-Time Exhaustiveness Checking
To guarantee future engineers update *every* `switch` when adding a new union variant, place an `assertNever` guard in the `default` branch:

```typescript
function assertNever(unhandled: never): never {
    throw new Error(`Unhandled union variant: ${JSON.stringify(unhandled)}`);
}
```

If a new variant `{ readonly status: "revalidating" }` is added to `AsyncState<T>` and omitted from `renderState`, `tsc` immediately flags a compile error at `assertNever(state)`!

---

## Modeling Domain State Machines
State transition functions can restrict their *input* to specific variants rather than the entire union, enforcing legal state transitions statically:

```typescript
type DraftOrder = { readonly state: "draft"; readonly items: readonly string[] };
type PaidOrder = { readonly state: "paid"; readonly items: readonly string[]; readonly receiptId: string };

function markOrderPaid(order: DraftOrder, receiptId: string): PaidOrder {
    return { state: "paid", items: order.items, receiptId };
}
```

---

## 💻 Exercises - Day 11

### Exercises: Level 1
1. Define a geometric `Shape` discriminated union (`Circle`, `Rectangle`, `RightTriangle`) keyed on `kind` and implement `computeArea(shape: Shape): number` with an `assertNever` check.
2. Refactor `{ isAuthenticated: boolean; userId?: string; guestSessionId?: string }` into a clean 2-variant discriminated union `AuthContext`.
3. Add a fourth shape `RegularHexagon` to `Shape` and verify how `assertNever` pinpoints un-updated `switch` blocks.

### Exercises: Level 2
1. Model a payment result union (`Approved`, `Declined`, `Requires3DSecure`) and write a summary receipt formatter covering every case exhaustively.
2. Build a Redux-style reducer `counterReducer(state: number, action: CounterAction): number` handling `INCREMENT`, `DECREMENT`, `RESET`, and `SET_VALUE`.

### Exercises: Level 3
1. Design a 4-stage CI/CD deployment state machine (`Queued` -> `Building` -> `Testing` -> `Deployed` | `RolledBack`) with typed transition functions that forbid skipping stages (e.g., `Queued` directly to `Deployed`).
2. Write a generic lookup map dispatcher `matchByKind` that maps each `kind` of a discriminated union to a strongly typed handler function.
