<div align="center">
  <h1>🚀 30 Days Of TypeScript: Day 6 - Object Types, Index Signatures & Modifiers</h1>
  <sub>Structural typing, optional & readonly properties, excess property checks, and dynamic dictionaries</sub>
</div>

[<< Day 5: Tuples](../05_Day_Tuples/05_tuples.md) | [Day 7: Type Aliases >>](../07_Day_Type_aliases/07_type_aliases.md)

---

## Table of Contents
- [Structural Object Typing](#structural-object-typing)
- [Property Modifiers: `?` and `readonly`](#property-modifiers--and-readonly)
- [Excess Property Checking](#excess-property-checking)
- [Index Signatures & Dynamic Maps](#index-signatures--dynamic-maps)
- [`object` vs `Object` vs `{}`](#object-vs-object-vs-)
- [💻 Exercises - Day 6](#-exercises---day-6)

---

## Structural Object Typing
TypeScript uses **structural typing** (duck typing): if an object possesses at least the required properties with compatible types, it satisfies the target shape—regardless of how or where it was constructed:

```typescript
function printPoint(point: { x: number; y: number }): void {
    console.log(`(${point.x}, ${point.y})`);
}

const vector3D = { x: 10, y: 20, z: 30 };
printPoint(vector3D); // ✅ Allowed via structural width subtyping!
```

---

## Property Modifiers: `?` and `readonly`
- **Optional (`?`)**: Marks a property that may be omitted (`string | undefined`).
- **`readonly`**: Prevents reassigning that property reference at compile time. Note that `readonly` is **shallow**—nested objects must also be marked `readonly` for deep immutability.

```typescript
type ServerConfig = {
    readonly id: string;
    host: string;
    port: number;
    tlsCertPath?: string;
};
```

---

## Excess Property Checking
When passing a **fresh object literal** directly to a typed target, TypeScript runs strict excess property checking to catch misspelled optional keys immediately:

```typescript
function connect(opts: { host: string; timeoutMs?: number }): void {
    console.log(opts.host, opts.timeoutMs ?? 3000);
}

// connect({ host: "db.local", timoutMs: 5000 }); // ❌ Compile Error: 'timoutMs' does not exist!
```

---

## Index Signatures & Dynamic Maps
When property names are only known at runtime (such as HTTP headers or feature flags), use an index signature or `Record<string, T>`:

```typescript
type MetricCounters = {
    [metricName: string]: number | undefined;
};

const counters: MetricCounters = { cache_hits: 420, cache_misses: 19 };
const hits: number = counters["cache_hits"] ?? 0;
```

> [!TIP]
> Annotating the index signature value as `T | undefined` prevents assuming an arbitrary runtime key exists without checking!

---

## `object` vs `Object` vs `{}`
| Type | Accepts Primitives (`"hi"`, `42`)? | Accepts `null` / `undefined`? | Recommended Alternative |
|---|---|---|---|
| `{}` | Yes! (Anything non-nullish) | No | Avoid for objects; use `NonNullable<unknown>` if intended |
| `Object` | Yes! | No | Avoid completely |
| `object` | No (only non-primitives: objects, arrays, functions) | No | Good for `WeakMap` keys |
| `Record<string, unknown>` | No | No | **Preferred** for plain key-value dictionaries |

---

## 💻 Exercises - Day 6

### Exercises: Level 1
1. Define an inline or aliased object shape for `Book` with `readonly isbn: string`, `title: string`, `pages: number`, and optional `subtitle?: string`. Write a function `formatBook(book: Book): string`.
2. Demonstrate structural subtyping by passing an object `{ isbn: "978-0", title: "TS Deep Dive", pages: 320, inStock: true }` stored in a variable into `formatBook`, then compare passing that same literal inline.
3. Show that `readonly` is shallow by mutating an inner array inside `{ readonly tags: string[] }`, then fix it with `readonly string[]`.

### Exercises: Level 2
1. Define an HTTP headers dictionary type `HttpHeaders = { readonly [header: string]: string | undefined }` and write a case-insensitive header lookup function.
2. Write a function `mergeDefaults(userOpts: { retries?: number; verbose?: boolean })` using object spread or nullish coalescing that returns `{ readonly retries: number; readonly verbose: boolean }`.

### Exercises: Level 3
1. Build an immutable `EnvStore` object model combining known required keys (`readonly NODE_ENV: "development" | "production"`) with an index signature for custom string variables.
2. Write `omitUndefinedProperties(record: Record<string, string | undefined>): Record<string, string>` that returns a clean dictionary with all `undefined` entries removed.
