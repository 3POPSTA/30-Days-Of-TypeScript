# 30 Days Of TypeScript: Day 04 - Arrays, Readonly Arrays & Matrices

<div align="center">
  <p><a href="../03_Day_Special_types/03_day_special_types.md">&lt;&lt; Day 3</a> | <a href="../README.md">30 Days of TypeScript</a> | <a href="../05_Day_Tuples/05_day_tuples.md">Day 5 &gt;&gt;</a></p>
</div>

---

- [30 Days Of TypeScript: Day 04 - Arrays, Readonly Arrays & Matrices](#30-days-of-typescript-day-04---arrays-readonly-arrays-matrices)
  - [📖 Overview](#-overview)
  - [🎯 Learning Objectives](#-learning-objectives)
  - [💡 Core Concepts & Deep Dive](#-core-concepts--deep-dive)
    - [1. Typed Array Syntaxes](#1-typed-array-syntaxes)
    - [2. Readonly Arrays](#2-readonly-arrays)
    - [3. Multidimensional Matrices](#3-multidimensional-matrices)
  - [💻 Runnable Lesson Demonstration](#-runnable-lesson-demonstration)
  - [⚠️ Common Pitfalls & Pro Tips](#️-common-pitfalls--pro-tips)
  - [💡 10 In-Depth Practical Examples & Solutions](#-10-in-depth-practical-examples--solutions)
    - [Example 1: Standard Array Declarations and Generics](#example-1-standard-array-declarations-and-generics)
    - [Example 2: Immutability with 'readonly T[]' and 'ReadonlyArray<T>'](#example-2-immutability-with-readonly-t-and-readonlyarrayt)
    - [Example 3: Multidimensional Arrays and 2D Grids](#example-3-multidimensional-arrays-and-2d-grids)
    - [Example 4: Type-Safe Array Filtering and Searching](#example-4-type-safe-array-filtering-and-searching)
    - [Example 5: Typed Array Transformations with '.map()'](#example-5-typed-array-transformations-with-map)
    - [Example 6: Complex Aggregation with '.reduce()' and Explicit Generics](#example-6-complex-aggregation-with-reduce-and-explicit-generics)
    - [Example 7: Flattening Multi-Dimensional Arrays with '.flat()'](#example-7-flattening-multi-dimensional-arrays-with-flat)
    - [Example 8: Matrix Transposition Function](#example-8-matrix-transposition-function)
    - [Example 9: Generic Array Chunking Utility](#example-9-generic-array-chunking-utility)
    - [Example 10: Immutable List State Operations (Add, Update, Remove)](#example-10-immutable-list-state-operations-add-update-remove)
  - [🎉 Congratulations](#-congratulations)

---

## 📖 Overview

Master typed arrays, generic Array<T> syntax, multidimensional arrays (matrices), and immutable readonly arrays.

---

## 🎯 Learning Objectives

By the end of today, you will be able to:
- [ ] Master **Typed Array Syntaxes**
- [ ] Master **Readonly Arrays**
- [ ] Master **Multidimensional Matrices**
- [ ] Study and implement the 10 in-depth practical examples with complete solutions.

---

## 💡 Core Concepts & Deep Dive


### 1. Typed Array Syntaxes

Two equivalent ways: 'T[]' and 'Array<T>'. Both provide full static checking over elements.


### 2. Readonly Arrays

'readonly T[]' and 'ReadonlyArray<T>' prohibit mutation methods like .push(), .pop(), or index reassignment.


### 3. Multidimensional Matrices

'number[][]' represents a 2D matrix of numbers, ideal for grids, spreadsheets, and game boards.


---

## 💻 Runnable Lesson Demonstration

Execute today's live code in your terminal:
```bash
npm run day:04
```

Here is the source code for today's lesson:
```typescript
// Day 04: Arrays, Readonly Arrays & Matrices
const fruits: string[] = ["Apple", "Banana", "Cherry"];
const scores: Array<number> = [98, 85, 92, 100];

// Immutability with readonly
const immutableNumbers: readonly number[] = [1, 2, 3];
// immutableNumbers.push(4); // Compile error: property push does not exist!

// Matrix 2D
const matrix: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
console.log("Matrix diagonal element [1][1] =", matrix[1][1]);

```

---

## ⚠️ Common Pitfalls & Pro Tips

> [!TIP]
> **Pro Tip**: In TypeScript, the compiler is your pair-programmer. Pay close attention to compiler diagnostic messages: they describe the exact shape mismatch.

> [!WARNING]
> **Common Pitfall**: Do not fall into the trap of using `any` to silence compiler warnings. Use `unknown` with type guards or write proper generic constraints!

---

## 💡 10 In-Depth Practical Examples & Solutions

### Example 1: Standard Array Declarations and Generics
**Problem / Scenario:**
Declare arrays using both the shorthand 'T[]' and generic 'Array<T>' notations.

**Solution:**
```typescript
const scores: number[] = [95, 88, 92];
const tags: Array<string> = ["typescript", "programming", "tutorial"];

scores.push(100);
tags.push("education");

console.log("Scores Count:", scores.length);
console.log("Tags:", tags.join(", "));
```

**Explanation & Output:**
'T[]' and 'Array<T>' are semantically identical in TypeScript. 'T[]' is typically preferred for brevity and readability.

---

### Example 2: Immutability with 'readonly T[]' and 'ReadonlyArray<T>'
**Problem / Scenario:**
Prevent array mutation bugs by enforcing read-only constraints.

**Solution:**
```typescript
function calculateAverage(numbers: readonly number[]): number {
  // numbers.push(10); // Compile Error: Property 'push' does not exist on type 'readonly number[]'
  const sum = numbers.reduce((acc, curr) => acc + curr, 0);
  return sum / numbers.length;
}

const examResults: readonly number[] = [80, 90, 85];
console.log("Average Score:", calculateAverage(examResults));
```

**Explanation & Output:**
'readonly T[]' disables mutating methods like push, pop, shift, and splice, guaranteeing data integrity across function calls.

---

### Example 3: Multidimensional Arrays and 2D Grids
**Problem / Scenario:**
Model a 2D tic-tac-toe or chessboard grid with strongly typed rows and columns.

**Solution:**
```typescript
type Cell = "X" | "O" | null;
type Grid = Cell[][];

const board: Grid = [
  ["X", "O", "X"],
  [null, "X", "O"],
  ["O", null, "X"]
];

function printRow(row: Cell[]): string {
  return row.map(c => c ?? "-").join(" | ");
}

console.log("Board Row 1:", printRow(board[0]));
```

**Explanation & Output:**
Multi-dimensional arrays like 'Cell[][]' preserve element typing across nested array indexing.

---

### Example 4: Type-Safe Array Filtering and Searching
**Problem / Scenario:**
Filter an array of numbers and search for specific matches with strict inference.

**Solution:**
```typescript
const readings: number[] = [12, -4, 25, 0, 31, -8];

const positiveReadings: number[] = readings.filter(r => r > 0);
const firstColdSnap: number | undefined = readings.find(r => r < 0);

console.log("Positive readings:", positiveReadings);
console.log("First cold reading:", firstColdSnap);
```

**Explanation & Output:**
Array methods like '.filter()' and '.find()' automatically retain the element types or return 'T | undefined' for search methods.

---

### Example 5: Typed Array Transformations with '.map()'
**Problem / Scenario:**
Transform an array of product objects into a list of formatted price tags.

**Solution:**
```typescript
interface Product {
  id: number;
  name: string;
  price: number;
}

const inventory: Product[] = [
  { id: 1, name: "Keyboard", price: 79.99 },
  { id: 2, name: "Mouse", price: 49.50 }
];

const priceLabels: string[] = inventory.map(item => `${item.name}: ${item.price.toFixed(2)}`);
console.log(priceLabels);
```

**Explanation & Output:**
TypeScript infers the return type of '.map(callback)' based on the return type of the callback function.

---

### Example 6: Complex Aggregation with '.reduce()' and Explicit Generics
**Problem / Scenario:**
Group numbers into a summary object counting positives and negatives.

**Solution:**
```typescript
interface NumberSummary {
  positives: number;
  negatives: number;
  zeros: number;
}

const numbers = [10, -5, 0, 20, -15, 0, 30];

const summary = numbers.reduce<NumberSummary>(
  (acc, curr) => {
    if (curr > 0) acc.positives++;
    else if (curr < 0) acc.negatives++;
    else acc.zeros++;
    return acc;
  },
  { positives: 0, negatives: 0, zeros: 0 }
);

console.log("Summary:", summary);
```

**Explanation & Output:**
Passing an explicit type argument to '.reduce<T>()' ensures the accumulator is strictly typed from initialization to final return.

---

### Example 7: Flattening Multi-Dimensional Arrays with '.flat()'
**Problem / Scenario:**
Flatten an array of category tags into a single list with inferred types.

**Solution:**
```typescript
const nestedTags: string[][] = [
  ["frontend", "react"],
  ["backend", "node", "typescript"],
  ["devops", "docker"]
];

const flattened: string[] = nestedTags.flat();
console.log("Flattened tags:", flattened);
```

**Explanation & Output:**
TypeScript's standard library typings accurately infer the depth and output type of the ES2019 '.flat()' method.

---

### Example 8: Matrix Transposition Function
**Problem / Scenario:**
Transpose an NxM numeric matrix into an MxN matrix with strict array types.

**Solution:**
```typescript
function transposeMatrix(matrix: number[][]): number[][] {
  if (matrix.length === 0) return [];
  const rows = matrix.length;
  const cols = matrix[0].length;
  const result: number[][] = [];

  for (let c = 0; c < cols; c++) {
    const newRow: number[] = [];
    for (let r = 0; r < rows; r++) {
      newRow.push(matrix[r][c]);
    }
    result.push(newRow);
  }
  return result;
}

const original = [[1, 2], [3, 4], [5, 6]];
console.log("Transposed:", transposeMatrix(original)); // [[1, 3, 5], [2, 4, 6]]
```

**Explanation & Output:**
Nested array operations maintain strict type checking inside multi-tier loops.

---

### Example 9: Generic Array Chunking Utility
**Problem / Scenario:**
Split an array into smaller chunks of a specified size.

**Solution:**
```typescript
function chunkArray<T>(items: readonly T[], chunkSize: number): T[][] {
  const chunks: T[][] = [];
  for (let i = 0; i < items.length; i += chunkSize) {
    chunks.push(items.slice(i, i + chunkSize));
  }
  return chunks;
}

const letters = ["a", "b", "c", "d", "e"];
console.log("Chunks of 2:", chunkArray(letters, 2));
```

**Explanation & Output:**
By combining generics '<T>' with arrays, the chunking utility works seamlessly on any type (numbers, strings, objects) without losing type fidelity.

---

### Example 10: Immutable List State Operations (Add, Update, Remove)
**Problem / Scenario:**
Perform standard immutable state management operations on an array.

**Solution:**
```typescript
interface Task {
  id: number;
  title: string;
  completed: boolean;
}

const initialTasks: readonly Task[] = [
  { id: 1, title: "Learn TypeScript", completed: true },
  { id: 2, title: "Build a project", completed: false }
];

// 1. Add
const added = [...initialTasks, { id: 3, title: "Deploy to cloud", completed: false }];

// 2. Update
const updated = added.map(t => t.id === 2 ? { ...t, completed: true } : t);

// 3. Remove
const removed = updated.filter(t => t.id !== 1);

console.log("Remaining tasks:", removed.map(t => t.title));
```

**Explanation & Output:**
Using spread operators, '.map()', and '.filter()' produces new immutable arrays satisfying 'readonly' constraints.

---

## 🎉 Congratulations

🌕 **You are amazing!** You have conquered **Day 04** of 30 Days of TypeScript. Keep the momentum going!

<div align="center">
  <p><a href="../03_Day_Special_types/03_day_special_types.md">&lt;&lt; Day 3</a> | <a href="../README.md">30 Days of TypeScript</a> | <a href="../05_Day_Tuples/05_day_tuples.md">Day 5 &gt;&gt;</a></p>
</div>
