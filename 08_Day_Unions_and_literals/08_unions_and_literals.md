<div align="center">
  <h1>🚀 30 Days Of TypeScript: Day 8 - Union Types & Literal Widening</h1>
  <sub>Sum types, exact string/numeric/boolean literals, widening rules, and the satisfies operator</sub>
</div>

[<< Day 7: Type Aliases](../07_Day_Type_aliases/07_type_aliases.md) | [Day 9: Type Narrowing >>](../09_Day_Type_narrowing/09_type_narrowing.md)

---

## Table of Contents
- [Union Types (`A | B`)](#union-types-a--b)
- [Accessing Members on Un-Narrowed Unions](#accessing-members-on-un-narrowed-unions)
- [String, Numeric & Boolean Literal Types](#string-numeric--boolean-literal-types)
- [Literal Widening (`const` vs `let`)](#literal-widening-const-vs-let)
- [Validating Without Widening: `satisfies`](#validating-without-widening-satisfies)
- [💻 Exercises - Day 8](#-exercises---day-8)

---

## Union Types (`A | B`)
A union type models a value that may be **any one** of several distinct member types:

```typescript
type Identifier = string | number;
type NullableDate = Date | null;
```

---

## Accessing Members on Un-Narrowed Unions
Before narrowing a union `A | B`, TypeScript permits accessing **only properties guaranteed to exist on every constituent member** (`keyof (A | B)` equals `(keyof A) & (keyof B)`):

```typescript
function getSerializedLength(input: string | readonly number[]): number {
    // Both `string` and `readonly number[]` expose `.length: number`!
    return input.length;
}
```

---

## String, Numeric & Boolean Literal Types
Every concrete primitive literal is also a valid TypeScript type representing a singleton set containing only that exact value:

```typescript
type HttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
type DiceRoll = 1 | 2 | 3 | 4 | 5 | 6;
type RetryPolicy = false | { readonly maxAttempts: number };
```

---

## Literal Widening (`const` vs `let`)
TypeScript infers different types depending on mutability:
- `const method = "GET"` cannot be reassigned, so TypeScript infers the exact literal type `"GET"`.
- `let method = "GET"` *can* be reassigned, so TypeScript **widens** its type to `string`—and object properties `{ method: "GET" }` also widen to `{ method: string }` because properties are mutable by default!

```typescript
const req = { url: "/api/users", method: "GET" };
// req.method is widened to `string`!

const strictReq = { url: "/api/users", method: "GET" as const };
// strictReq.method stays `"GET"`!
```

---

## Validating Without Widening: `satisfies`
Introduced in TypeScript 4.9, `satisfies` validates that an expression conforms to a target contract **without discarding its narrower inferred literal types**:

```typescript
type ColorValue = string | readonly [r: number, g: number, b: number];

const palette = {
    primary: [37, 99, 235],
    accent: "#f97316",
} satisfies Record<string, ColorValue>;

// palette.primary is still inferred as number[] (array methods work!)
// palette.accent is still inferred as string (.toUpperCase() works without narrowing!)
```

---

## 💻 Exercises - Day 8

### Exercises: Level 1
1. Define a literal union `HttpStatus = 200 | 201 | 400 | 401 | 404 | 500` and write `statusMessage(code: HttpStatus): string`.
2. Reproduce the classic literal widening bug by passing `const cfg = { method: "POST" }` to `sendRequest(method: "GET" | "POST")`, then fix it in three ways: type annotation, `as const`, and `satisfies`.
3. Create a union `StringOrArray = string | readonly string[]` and use `.slice(0, 2)` directly without narrowing.

### Exercises: Level 2
1. Use the `string & {}` autocomplete-preserving union trick (`type ModelName = "gpt-4o" | "claude-sonnet" | (string & {})`) and observe IDE literal suggestions alongside arbitrary string support.
2. Build a strongly validated `routes` map using `satisfies Record<string, { path: string; auth: boolean }>` so accessing an invalid route key fails at compile time while exact literal paths are preserved.

### Exercises: Level 3
1. Model a payment state union where invalid combinations (like `paidAt` existing while `state` is `"pending"`) are structurally unrepresentable.
2. Combine `as const` and `satisfies` (`as const satisfies ReadonlyArray<...>`) to define a deeply immutable, schema-validated command registry.
