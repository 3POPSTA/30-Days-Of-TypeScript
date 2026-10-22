# 30 Days Of TypeScript: Day 05 - Tuples, Labeled Tuples & as const

<div align="center">
  <p><a href="../04_Day_Arrays/04_day_arrays.md">&lt;&lt; Day 4</a> | <a href="../README.md">30 Days of TypeScript</a> | <a href="../06_Day_Objects/06_day_objects.md">Day 6 &gt;&gt;</a></p>
</div>

---

- [30 Days Of TypeScript: Day 05 - Tuples, Labeled Tuples & as const](#30-days-of-typescript-day-05---tuples-labeled-tuples-as-const)
  - [📖 Overview](#-overview)
  - [🎯 Learning Objectives](#-learning-objectives)
  - [💡 Core Concepts & Deep Dive](#-core-concepts--deep-dive)
    - [1. What is a Tuple?](#1-what-is-a-tuple-)
    - [2. Labeled Tuple Elements](#2-labeled-tuple-elements)
    - [3. as const Assertions](#3-as-const-assertions)
  - [💻 Runnable Lesson Demonstration](#-runnable-lesson-demonstration)
  - [⚠️ Common Pitfalls & Pro Tips](#️-common-pitfalls--pro-tips)
  - [💡 10 In-Depth Practical Examples & Solutions](#-10-in-depth-practical-examples--solutions)
    - [Example 1: Defining Fixed-Length Coordinates with Tuples](#example-1-defining-fixed-length-coordinates-with-tuples)
    - [Example 2: Labeled Tuples for Function Arguments](#example-2-labeled-tuples-for-function-arguments)
    - [Example 3: Optional Elements in Tuples](#example-3-optional-elements-in-tuples)
    - [Example 4: Rest Elements in Tuples for Variadic Signatures](#example-4-rest-elements-in-tuples-for-variadic-signatures)
    - [Example 5: 'as const' Assertions for Immutable Readonly Tuples](#example-5-as-const-assertions-for-immutable-readonly-tuples)
    - [Example 6: Emulating React's 'useState' Return Signature](#example-6-emulating-reacts-usestate-return-signature)
    - [Example 7: Parsing CSV Row Strings into Typed Tuples](#example-7-parsing-csv-row-strings-into-typed-tuples)
    - [Example 8: Key-Value Pair Lookup Table using Tuples](#example-8-key-value-pair-lookup-table-using-tuples)
    - [Example 9: Tuple Destructuring with Rest Operators](#example-9-tuple-destructuring-with-rest-operators)
    - [Example 10: Array Zip Function Returning Tuple Pairs](#example-10-array-zip-function-returning-tuple-pairs)
  - [🎉 Congratulations](#-congratulations)

---

## 📖 Overview

Master fixed-length ordered collections with tuples, labeled tuples for readable IDE tooltips, and immutable 'as const' assertions.

---

## 🎯 Learning Objectives

By the end of today, you will be able to:
- [ ] Master **What is a Tuple?**
- [ ] Master **Labeled Tuple Elements**
- [ ] Master **as const Assertions**
- [ ] Study and implement the 10 in-depth practical examples with complete solutions.

---

## 💡 Core Concepts & Deep Dive


### 1. What is a Tuple?

A tuple is an array with a fixed number of elements whose individual types are known at specific indices.


### 2. Labeled Tuple Elements

TypeScript allows labels like '[latitude: number, longitude: number]' to produce crystal-clear IDE hints.


### 3. as const Assertions

'as const' narrows an array into a deeply read-only tuple of literal types.


---

## 💻 Runnable Lesson Demonstration

Execute today's live code in your terminal:
```bash
npm run day:05
```

Here is the source code for today's lesson:
```typescript
// Day 05: Tuples, Labeled Tuples & as const
// 1. Basic & Labeled Tuple
type GeoPoint = [latitude: number, longitude: number, label?: string];
const office: GeoPoint = [60.1699, 24.9384, "Helsinki Office"];
console.log("Latitude:", office[0], "Longitude:", office[1]);

// 2. HTTP Status Tuple
type HttpResponse = [status: number, message: string];
const successResponse: HttpResponse = [200, "OK"];
console.log(`Status: ${successResponse[0]} (${successResponse[1]})`);

// 3. as const immutability
const directions = ["NORTH", "SOUTH", "EAST", "WEST"] as const;
// directions[0] = "UP"; // Compile Error!

```

---

## ⚠️ Common Pitfalls & Pro Tips

> [!TIP]
> **Pro Tip**: In TypeScript, the compiler is your pair-programmer. Pay close attention to compiler diagnostic messages—they describe the exact shape mismatch.

> [!WARNING]
> **Common Pitfall**: Do not fall into the trap of using `any` to silence compiler warnings. Use `unknown` with type guards or write proper generic constraints!

---

## 💡 10 In-Depth Practical Examples & Solutions

### Example 1: Defining Fixed-Length Coordinates with Tuples
**Problem / Scenario:**
Model a 2D or 3D coordinate point where each position has a specific type and length.

**Solution:**
```typescript
type Point2D = [x: number, y: number];
type Point3D = [x: number, y: number, z: number];

const origin: Point2D = [0, 0];
const target: Point3D = [10, 20, 30];

console.log(`2D Origin: (${origin[0]}, ${origin[1]})`);
console.log(`3D Target: (${target[0]}, ${target[1]}, ${target[2]})`);
```

**Explanation & Output:**
Tuples guarantee both the exact number of elements and the type of each element at each specific index.

---

### Example 2: Labeled Tuples for Function Arguments
**Problem / Scenario:**
Use labeled tuple elements to improve IntelliSense and documentation for tuple types.

**Solution:**
```typescript
type HttpResponse = [statusCode: number, statusText: string, isOk: boolean];

function handleResponse(res: HttpResponse): void {
  const [code, text, ok] = res;
  console.log(`[${code}] ${text} - OK? ${ok}`);
}

handleResponse([200, "OK", true]);
handleResponse([404, "Not Found", false]);
```

**Explanation & Output:**
Labeled elements like '[statusCode: number, statusText: string]' provide descriptive names in editor tooltips without altering runtime behavior.

---

### Example 3: Optional Elements in Tuples
**Problem / Scenario:**
Define a tuple where trailing elements can be optionally provided.

**Solution:**
```typescript
type UserEntry = [id: number, name: string, nickname?: string];

const user1: UserEntry = [101, "Margaret"];
const user2: UserEntry = [102, "Alexander", "Alex"];

console.log("User 1:", user1[1], "Nickname:", user1[2] ?? "None");
console.log("User 2:", user2[1], "Nickname:", user2[2]);
```

**Explanation & Output:**
A '?' on a tuple element makes it optional, allowing the tuple to vary between a minimum and maximum length.

---

### Example 4: Rest Elements in Tuples for Variadic Signatures
**Problem / Scenario:**
Declare a tuple with a fixed head and variable-length trailing elements.

**Solution:**
```typescript
type TeamRoster = [teamLeader: string, ...members: string[]];

const engineering: TeamRoster = ["Alice", "Bob", "Charlie", "Diana"];

console.log("Leader:", engineering[0]);
console.log("Team Members:", engineering.slice(1).join(", "));
```

**Explanation & Output:**
The rest operator '...members: string[]' in a tuple models non-empty lists with at least one element followed by zero or more elements.

---

### Example 5: 'as const' Assertions for Immutable Readonly Tuples
**Problem / Scenario:**
Lock an array literal into a readonly tuple with literal types using 'as const'.

**Solution:**
```typescript
const directions = ["NORTH", "EAST", "SOUTH", "WEST"] as const;
// directions is inferred as: readonly ["NORTH", "EAST", "SOUTH", "WEST"]

// directions.push("UP"); // Error: Cannot mutate readonly tuple
console.log("Primary direction:", directions[0]);
```

**Explanation & Output:**
'as const' prevents type widening, converting mutable arrays into readonly tuples of literal types.

---

### Example 6: Emulating React's 'useState' Return Signature
**Problem / Scenario:**
Create a state-holder function that returns a '[value, setter]' tuple with proper types.

**Solution:**
```typescript
function makeState<T>(initialValue: T): [() => T, (newValue: T) => void] {
  let current = initialValue;
  const get = () => current;
  const set = (newValue: T) => { current = newValue; };
  return [get, set];
}

const [getCount, setCount] = makeState(0);
console.log("Initial count:", getCount());
setCount(42);
console.log("Updated count:", getCount());
```

**Explanation & Output:**
Returning a tuple '[get, set]' allows clean destructuring with guaranteed positional types.

---

### Example 7: Parsing CSV Row Strings into Typed Tuples
**Problem / Scenario:**
Convert a comma-separated string into a strictly typed tuple representing database records.

**Solution:**
```typescript
type CsvUserRecord = [id: number, username: string, active: boolean];

function parseUserCsv(row: string): CsvUserRecord {
  const parts = row.split(",");
  return [
    parseInt(parts[0], 10),
    parts[1].trim(),
    parts[2].trim() === "true"
  ];
}

const record = parseUserCsv("42, SarahConnor, true");
console.log(`Parsed User ${record[1]} (ID: ${record[0]})`);
```

**Explanation & Output:**
Tuples ensure that structured tabular rows maintain strictly typed columns.

---

### Example 8: Key-Value Pair Lookup Table using Tuples
**Problem / Scenario:**
Store configuration lookup entries as an array of '[key, value]' tuples.

**Solution:**
```typescript
type ConfigEntry = [key: string, value: string | number];

const appConfigTable: ConfigEntry[] = [
  ["host", "localhost"],
  ["port", 8080],
  ["ssl", "false"]
];

function findConfig(table: ConfigEntry[], key: string): string | number | undefined {
  const match = table.find(entry => entry[0] === key);
  return match ? match[1] : undefined;
}

console.log("Port setting:", findConfig(appConfigTable, "port"));
```

**Explanation & Output:**
Arrays of 2-element tuples '[K, V]' model key-value pairs cleanly and map directly to 'Map' constructor entries.

---

### Example 9: Tuple Destructuring with Rest Operators
**Problem / Scenario:**
Extract specific positional items from a tuple while grouping the rest.

**Solution:**
```typescript
type BenchmarkData = [metricName: string, durationMs: number, ...tags: string[]];

const run: BenchmarkData = ["RenderTree", 14.5, "ui", "critical", "v2"];
const [metric, duration, ...categories] = run;

console.log(`Benchmark: ${metric} took ${duration}ms`);
console.log("Tags:", categories);
```

**Explanation & Output:**
Tuple destructuring syntax in TypeScript mirrors JavaScript destructuring while preserving individual types.

---

### Example 10: Array Zip Function Returning Tuple Pairs
**Problem / Scenario:**
Combine two equal-length arrays into an array of pair tuples.

**Solution:**
```typescript
function zip<T, U>(listA: readonly T[], listB: readonly U[]): [T, U][] {
  const length = Math.min(listA.length, listB.length);
  const result: [T, U][] = [];
  for (let i = 0; i < length; i++) {
    result.push([listA[i], listB[i]]);
  }
  return result;
}

const ids = [1, 2, 3];
const names = ["Alice", "Bob", "Charlie"];
const paired = zip(ids, names);

console.log("Paired items:", paired);
```

**Explanation & Output:**
The generic return type '[T, U][]' accurately represents pairs of elements merged from two input arrays.

---

## 🎉 Congratulations

🌕 **You are amazing!** You have conquered **Day 05** of 30 Days of TypeScript. Keep the momentum going!

<div align="center">
  <p><a href="../04_Day_Arrays/04_day_arrays.md">&lt;&lt; Day 4</a> | <a href="../README.md">30 Days of TypeScript</a> | <a href="../06_Day_Objects/06_day_objects.md">Day 6 &gt;&gt;</a></p>
</div>
