<div align="center">
  <h1>🚀 30 Days Of TypeScript: Day 7 - Type Aliases & Intersection Types</h1>
  <sub>Reusable type names, set intersections, property conflicts, and recursive structures</sub>
</div>

[<< Day 6: Objects](../06_Day_Objects/06_objects.md) | [Day 8: Unions & Literals >>](../08_Day_Unions_and_literals/08_unions_and_literals.md)

---

## Table of Contents
- [Type Aliases (`type`)](#type-aliases-type)
- [Intersection Types (`A & B`)](#intersection-types-a--b)
- [Conflicting Member Types in Intersections](#conflicting-member-types-in-intersections)
- [Recursive Type Aliases](#recursive-type-aliases)
- [Branded / Nominal Primitives via Intersections](#branded--nominal-primitives-via-intersections)
- [💻 Exercises - Day 7](#-exercises---day-7)

---

## Type Aliases (`type`)
A `type` alias assigns a reusable semantic identifier to *any* TypeScript type—primitives, tuples, functions, unions, or complex object shapes—without creating any runtime JavaScript construct:

```typescript
type Milliseconds = number;
type Predicate<T> = (item: T) => boolean;
type Coordinates = readonly [x: number, y: number];
```

---

## Intersection Types (`A & B`)
An intersection combines multiple types into one type possessing **all** properties and capabilities of every constituent type:

```typescript
type Identifiable = { readonly id: string };
type Timestamped = { readonly createdAt: Date; updatedAt: Date };
type SoftDeletable = { deletedAt: Date | null };

type AuditEntity = Identifiable & Timestamped & SoftDeletable;
```

In set theory, intersecting `{ a: string }` (objects with `a`) and `{ b: number }` (objects with `b`) yields the narrower set of objects possessing **both** `a` and `b`.

---

## Conflicting Member Types in Intersections
When two object types share a property key with incompatible primitive types, that property's intersected type collapses to `never`:

```typescript
type Alpha = { version: number };
type Beta = { version: string };

type Impossible = Alpha & Beta;
// Impossible["version"] is `number & string`, which reduces to `never`!
```

---

## Recursive Type Aliases
Type aliases can reference themselves inside object properties, arrays, or tuples to model trees, ASTs, and arbitrary JSON values:

```typescript
type JsonValue =
    | string
    | number
    | boolean
    | null
    | readonly JsonValue[]
    | { readonly [key: string]: JsonValue };
```

---

## Branded / Nominal Primitives via Intersections
Because TypeScript is structural, `type UserId = string` and `type OrderId = string` are interchangeable by default. Intersecting a primitive with a phantom brand tag prevents mixing distinct domain IDs:

```typescript
type UserId = string & { readonly __brand: "UserId" };
type OrderId = string & { readonly __brand: "OrderId" };

const makeUserId = (raw: string): UserId => raw as UserId;
```

---

## 💻 Exercises - Day 7

### Exercises: Level 1
1. Create composable aliases `WithId`, `WithTimestamps`, and `UserProfile`, then intersect them into a `DatabaseUser` type and instantiate a valid object.
2. Define function type aliases `Mapper = (input: string) => string` and `Validator = (input: string) => boolean`, and implement two functions matching those aliases.
3. Demonstrate what happens when intersecting `{ code: number }` and `{ code: 200 | 201 }` (narrowing to `200 | 201`) versus `{ code: number }` and `{ code: string }` (`never`).

### Exercises: Level 2
1. Define a recursive `FileSystemNode` type representing a directory tree with `name: string` and optional `children?: readonly FileSystemNode[]`, then write `countNodes(root: FileSystemNode): number`.
2. Create branded types `UsdCents` and `EurCents` so an `addUsd(a: UsdCents, b: UsdCents): UsdCents` function rejects `EurCents` at compile time.

### Exercises: Level 3
1. Model `JsonValue` recursively and write a `stringifyPretty(val: JsonValue): string` wrapper that accepts only valid JSON-serializable structures (rejecting `Date`, `Map`, and functions at compile time).
2. Combine function call signatures with static metadata properties using an intersection `((req: string) => boolean) & { readonly ruleName: string }`.
