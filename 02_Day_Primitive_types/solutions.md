# 📘 Day 02: Challenge Solutions & Explanations

Welcome to the solution guide for **Day 02: Primitive Data Types & Type Annotations**!

---

## 🎯 Challenge 1: The 7 Primitive Variables

### Problem
Export all 7 primitive variables with explicit type annotations: `appName`, `maxUsers`, `isBeta`, `emptyState`, `unassigned`, `bigSequence`, `registryKey`.

### Solution
```typescript
export const appName: string = "TypeScript Tutor";
export const maxUsers: number = 10000;
export const isBeta: boolean = false;
export const emptyState: null = null;
export const unassigned: undefined = undefined;
export const bigSequence: bigint = 9007199254740995n;
export const registryKey: symbol = Symbol("tutor.key");
```

### 💡 Why This Works
- `null` and `undefined` have their own dedicated types in TypeScript (under strict null checks).
- `bigint` literals end with an `n` suffix.
- `symbol` represents unique, immutable identifiers created with `Symbol()`.

---

## 🎯 Challenge 2: BigInt Precision Arithmetic

### Problem
Write `multiplyBigInt(a: bigint, b: bigint): bigint` to multiply two large integers.

### Solution
```typescript
export function multiplyBigInt(a: bigint, b: bigint): bigint {
  return a * b;
}
```

### 💡 Why This Works & Scrimba Pro-Tip
- In TypeScript, you cannot mix `number` and `bigint` in arithmetic operations (e.g., `5n + 10` causes a compiler error). Both operands must be `bigint`.

---

## 🎯 Challenge 3: Multi-Base Number Representation

### Problem
Return an object conforming to `BaseConversions` with `hex` and `binary` representations of a number.

### Solution
```typescript
export interface BaseConversions {
  hex: string;
  binary: string;
}

export function convertBases(num: number): BaseConversions {
  return {
    hex: num.toString(16),
    binary: num.toString(2)
  };
}
```

### 💡 Why This Works
- The standard JavaScript `Number.prototype.toString(radix)` method converts numbers into string representations of any base from 2 to 36.

---

## 🎯 Challenge 4: Differentiating Null vs Undefined

### Problem
Write `describeSubmission(score: number | null | undefined): string` distinguishing between `undefined` (not submitted), `null` (excused), and numbers (score).

### Solution
```typescript
export function describeSubmission(score: number | null | undefined): string {
  if (score === undefined) return "NOT_SUBMITTED";
  if (score === null) return "EXCUSED";
  return `SCORE: ${score}`;
}
```

### 💡 Why This Works
- Using triple equals (`===`) prevents loose equality coercion (`null == undefined` is true in JS, but `null === undefined` is false). TypeScript narrows the union on each check!

---

## 🚀 Next Steps
Up next: **Day 03: Special Types (any, unknown, never, void)**!
