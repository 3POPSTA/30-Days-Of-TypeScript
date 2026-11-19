<div align="center">
  <h1>🚀 30 Days Of TypeScript: Day 10 - Type Predicates & Assertion Functions</h1>
  <sub>User-defined type guards (is), type-safe Array.filter, and invariant assertions (asserts)</sub>
</div>

[<< Day 9: Type Narrowing](../09_Day_Type_narrowing/09_type_narrowing.md) | [Day 11: Discriminated Unions >>](../11_Day_Discriminated_unions/11_discriminated_unions.md)

---

## Table of Contents
- [Why Custom Type Guards Are Needed](#why-custom-type-guards-are-needed)
- [User-Defined Type Predicates (`param is Type`)](#user-defined-type-predicates-param-is-type)
- [Narrowing Arrays with `.filter()`](#narrowing-arrays-with-filter)
- [Assertion Functions (`asserts`)](#assertion-functions-asserts)
- [Predicate Soundness Responsibility](#predicate-soundness-responsibility)
- [💻 Exercises - Day 10](#-exercises---day-10)

---

## Why Custom Type Guards Are Needed
When you extract narrowing logic into a helper function returning plain `: boolean`, TypeScript does not propagate that narrowing back into the caller's control flow:

```typescript
// Plain `: boolean` loses narrowing in the caller!
const isStringNaive = (val: unknown): boolean => typeof val === "string";
```

---

## User-Defined Type Predicates (`param is Type`)
Annotating the return type with a **type predicate** `value is TargetType` teaches the compiler that whenever the function returns `true`, the argument is guaranteed to have type `TargetType`:

```typescript
interface ApiUser {
    readonly id: string;
    readonly email: string;
}

function isApiUser(candidate: unknown): candidate is ApiUser {
    return (
        typeof candidate === "object" &&
        candidate !== null &&
        "id" in candidate &&
        typeof candidate.id === "string" &&
        "email" in candidate &&
        typeof candidate.email === "string"
    );
}
```

---

## Narrowing Arrays with `.filter()`
Passing a generic type predicate `isNonNullish` to `Array.prototype.filter` cleanly narrows `(T | null | undefined)[]` down to `T[]`:

```typescript
function isDefined<T>(value: T | null | undefined): value is T {
    return value !== null && value !== undefined;
}

const rawIds: (string | null | undefined)[] = ["u1", null, "u2", undefined, "u3"];
const validIds: string[] = rawIds.filter(isDefined); // ["u1", "u2", "u3"]
```

---

## Assertion Functions (`asserts`)
Whereas type predicates branch via `if (...)`, **assertion functions** throw an error when an invariant fails and narrow all subsequent statements in the current scope:

```typescript
function assertNonEmptyString(val: unknown, label: string): asserts val is string {
    if (typeof val !== "string" || val.trim().length === 0) {
        throw new TypeError(`Expected non-empty string for ${label}`);
    }
}

function connectDatabase(rawUrl: unknown): string {
    assertNonEmptyString(rawUrl, "DATABASE_URL");
    // rawUrl is narrowed to `string` for the rest of the function!
    return rawUrl.trim();
}
```

> [!IMPORTANT]
> Assertion functions (`asserts ...`) require an **explicit type annotation** (either `function assertX(...): asserts ...` or an explicit variable type on `const`).

---

## Predicate Soundness Responsibility
Verify every required field carefully inside a predicate body—if a predicate returns `true` for invalid data, TypeScript trusts your predicate signature unconditionally!

---

## 💻 Exercises - Day 10

### Exercises: Level 1
1. Write a generic type guard `isNonNull<T>(val: T | null | undefined): val is T` and use it with `.filter()` on a mixed array of numbers, `null`, and `undefined`.
2. Write a runtime validator `isPositiveFiniteNumber(val: unknown): val is number` that rejects `NaN`, `Infinity`, negative numbers, and non-numbers.
3. Implement `assertCondition(condition: unknown, message: string): asserts condition` and use it to narrow a `string | undefined` variable.

### Exercises: Level 2
1. Define an interface `WebhookEvent { id: string; timestamp: number; payload: Record<string, unknown> }` and implement a thorough `isWebhookEvent(raw: unknown): raw is WebhookEvent` guard.
2. Write a generic guard `hasKey<K extends PropertyKey>(obj: object, key: K): obj is Record<K, unknown>` for safe dynamic property inspection.

### Exercises: Level 3
1. Build a composable schema validator `isArrayOf<T>(raw: unknown, itemGuard: (item: unknown) => item is T): raw is T[]` and combine it with your `isWebhookEvent` predicate.
2. Write `assertValidConfig(raw: unknown): asserts raw is { host: string; port: number }` that accumulates all missing/mistyped field errors before throwing a detailed `Error`.
