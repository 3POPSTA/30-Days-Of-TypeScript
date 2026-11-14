<div align="center">
  <h1>🚀 30 Days Of TypeScript: Day 4 - Typed Arrays, Readonly Arrays & Matrices</h1>
  <sub>Homogeneous collections, union arrays, immutability guarantees, and functional pipelines</sub>
</div>

[<< Day 3: Special Types](../03_Day_Special_types/03_special_types.md) | [Day 5: Tuples >>](../05_Day_Tuples/05_tuples.md)

---

## Table of Contents
- [Array Type Syntax (`T[]` vs `Array<T>`)](#array-type-syntax-t-vs-arrayt)
- [Union Element Arrays](#union-element-arrays)
- [Immutable Arrays (`readonly T[]`)](#immutable-arrays-readonly-t)
- [Multi-Dimensional Matrices](#multi-dimensional-matrices)
- [Typed Functional Array Pipelines](#typed-functional-array-pipelines)
- [Out-of-Bounds Safety](#out-of-bounds-safety)
- [💻 Exercises - Day 4](#-exercises---day-4)

---

## Array Type Syntax (`T[]` vs `Array<T>`)
TypeScript provides two equivalent syntaxes for homogeneous variable-length arrays:

```typescript
const latenciesMs: number[] = [12, 18, 9, 24];
const hostnames: Array<string> = ["edge-01", "edge-02"];
```

> [!IMPORTANT]
> Always annotate empty arrays explicitly (`const queue: string[] = []`) so TypeScript does not infer `never[]` or widen unhelpfully across scopes.

---

## Union Element Arrays
Parentheses are significant when combining unions with array brackets:

```typescript
// Array where each element may be a string OR a number
const mixedTokens: (string | number)[] = ["port", 8080, "host", "localhost"];

// Either an entire string[] OR an entire number[] (cannot mix!)
const uniformList: string[] | number[] = [1, 2, 3];
```

---

## Immutable Arrays (`readonly T[]`)
In JavaScript, `const arr = [1, 2]` only prevents reassigning the variable reference—`arr.push(3)` and `arr.sort()` still mutate the array in place! Use `readonly T[]` (or `ReadonlyArray<T>`) to forbid mutating methods (`push`, `pop`, `splice`, `sort`, `reverse`, index assignment):

```typescript
function sumMetrics(values: readonly number[]): number {
    // values.push(100); // ❌ Compile Error: Property 'push' does not exist on 'readonly number[]'
    return values.reduce((acc, n) => acc + n, 0);
}
```

Accepting `readonly T[]` in function parameters is a best practice: a mutable `number[]` can be passed into a `readonly number[]` parameter, while guaranteeing the callee will not mutate the caller's array.

---

## Multi-Dimensional Matrices
Nested brackets model 2D grids, adjacency matrices, and tabular data:

```typescript
type Matrix2D = readonly (readonly number[])[];

const identity3x3: Matrix2D = [
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1],
];
```

---

## Typed Functional Array Pipelines
TypeScript automatically propagates element types through `map`, `filter`, `flatMap`, and `reduce`:

```typescript
const rawScores: readonly number[] = [58, 92, 76, 85, 41];
const passingLabels: string[] = rawScores
    .filter((score) => score >= 70)
    .map((score) => `Score: ${score}%`);
```

---

## Out-of-Bounds Safety
Prefer `.at(index)` or explicit length checks when reading dynamic indices, since runtime out-of-bounds indexing returns `undefined`:

```typescript
const lastScore: number | undefined = rawScores.at(-1);
```

---

## 💻 Exercises - Day 4

### Exercises: Level 1
1. Create a typed `string[]` of 5 programming languages, sort a shallow copy non-destructively (`[...langs].sort()`), and print both the original and sorted arrays.
2. Write a function `computeStats(nums: readonly number[]): { min: number; max: number; mean: number }` assuming a non-empty array.
3. Demonstrate the difference between `(string | boolean)[]` and `string[] | boolean[]` with valid and invalid examples.

### Exercises: Level 2
1. Implement `chunkArray(items: readonly number[], size: number): number[][]` that splits a flat array into sub-arrays of length `size`.
2. Write `transposeMatrix(matrix: readonly (readonly number[])[]): number[][]` that flips rows and columns of a 2D numeric matrix.

### Exercises: Level 3
1. Implement a non-mutating deduplication helper `uniqueNumbers(items: readonly number[]): number[]` preserving original insertion order using `Set<number>`.
2. Build a typed pipeline over an array of server response times `readonly number[]` that filters out negative anomalies, computes the 95th percentile value, and formats a summary string.
