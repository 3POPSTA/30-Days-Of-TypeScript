<div align="center">
  <h1>🚀 30 Days Of TypeScript: Day 5 - Tuples, Labeled Tuples & Const Assertions</h1>
  <sub>Fixed-length positional records, labeled elements, variadic tuples, and as const</sub>
</div>

[<< Day 4: Arrays](../04_Day_Arrays/04_arrays.md) | [Day 6: Objects >>](../06_Day_Objects/06_objects.md)

---

## Table of Contents
- [Arrays vs Tuples](#arrays-vs-tuples)
- [Labeled Tuple Elements](#labeled-tuple-elements)
- [Optional & Variadic Rest Elements](#optional--variadic-rest-elements)
- [`readonly` Tuples & Preventing `.push()`](#readonly-tuples--preventing-push)
- [`as const` Assertions](#as-const-assertions)
- [Destructuring & Multi-Value Returns](#destructuring--multi-value-returns)
- [💻 Exercises - Day 5](#-exercises---day-5)

---

## Arrays vs Tuples
While `string[]` holds any number of strings, a **tuple** fixes both the exact **length** and the **distinct type at each index**:

```typescript
type HttpResponseTuple = [number, string, boolean];

const okResponse: HttpResponseTuple = [200, "OK", true];
// const invalid: HttpResponseTuple = ["OK", 200, true]; // ❌ Compile Error: wrong positional types
```

---

## Labeled Tuple Elements
TypeScript supports descriptive labels inside tuple types to document each position in IDE hover tooltips without runtime overhead:

```typescript
type GeoCoordinate = [latitude: number, longitude: number, altitudeMeters?: number];

const maunaKea: GeoCoordinate = [19.8207, -155.4681, 4207];
const seaLevelPoint: GeoCoordinate = [21.3069, -157.8583];
```

---

## Optional & Variadic Rest Elements
Tuples can include optional trailing positions (`?`) and spread rest elements (`...T[]`) anywhere—leading, middle, or trailing:

```typescript
type CommandPacket = [command: string, ...args: string[], exitCode: number];

const packet: CommandPacket = ["deploy", "--env", "prod", "--force", 0];
```

---

## `readonly` Tuples & Preventing `.push()`
By historical design, mutable tuples (`[number, number]`) still inherit `Array.prototype.push()`, allowing callers to append extra items at runtime! Marking tuples `readonly` closes this loophole completely:

```typescript
type RGB = readonly [red: number, green: number, blue: number];

const coral: RGB = [255, 127, 80];
// coral.push(100); // ❌ Compile Error: Property 'push' does not exist on 'readonly [number, number, number]'
```

---

## `as const` Assertions
Appending `as const` to an array literal instructs TypeScript to infer a `readonly` tuple of exact literal types instead of a widened mutable array:

```typescript
const widened = [200, "success"];          // Inferred: (string | number)[]
const locked = [200, "success"] as const;  // Inferred: readonly [200, "success"]
```

---

## Destructuring & Multi-Value Returns
Tuples shine when returning positional pairs (such as React's `[state, setState]` or Go/Rust-style `[data, error]` tuples):

```typescript
function splitHostPort(endpoint: string): readonly [host: string, port: number] {
    const [host = "localhost", rawPort = "80"] = endpoint.split(":");
    return [host, Number(rawPort)] as const;
}

const [host, port] = splitHostPort("db.internal:5432");
```

---

## 💻 Exercises - Day 5

### Exercises: Level 1
1. Define a `readonly` labeled tuple `RGBA = readonly [r: number, g: number, b: number, alpha?: number]` and write a function `toCssRgba(color: RGBA): string`.
2. Write a function `minMax(values: readonly number[]): readonly [min: number, max: number]` and destructure its return value.
3. Compare the inferred types of `const a = ["GET", 200]` vs `const b = ["GET", 200] as const`.

### Exercises: Level 2
1. Define a variadic tuple `LogEntry = [timestamp: string, level: "INFO" | "WARN" | "ERROR", ...tags: string[]]` and write a formatter for it.
2. Implement `zipPair(left: readonly string[], right: readonly number[]): [string, number][]` that pairs elements up to the shorter array's length.

### Exercises: Level 3
1. Model a CSV header + row structure where `Header = readonly [string, ...string[]]` guarantees at least one column at compile time.
2. Create a stateful counter factory `createCounter(initial: number): readonly [getValue: () => number, increment: (step?: number) => void]` mimicking hook tuple ergonomics.
