# 📘 Day 04: Challenge Solutions & Explanations

Welcome to the solution guide for **Day 04: Arrays, Readonly Arrays & Matrices**!

---

## 🎯 Challenge 1: Basic Array Aggregation

### Problem
Sum all strictly positive numbers (`> 0`) in an array.

### Solution
```typescript
export function sumPositiveNumbers(numbers: number[]): number {
  return numbers
    .filter(n => n > 0)
    .reduce((acc, curr) => acc + curr, 0);
}
```

### 💡 Why This Works
- `numbers.filter(n => n > 0)` produces a new array of positive values.
- `reduce((acc, curr) => acc + curr, 0)` sums them up with an initial accumulator value of 0.

---

## 🎯 Challenge 2: Readonly Arrays & Immutable Appending

### Problem
Append an item to a `readonly string[]` without mutating the original array.

### Solution
```typescript
export function appendTag(tags: readonly string[], newTag: string): readonly string[] {
  return [...tags, newTag];
}
```

### 💡 Why This Works
- `readonly string[]` disallows methods like `.push()` or `.splice()`.
- Spreading `[...tags, newTag]` creates a shallow clone with the new element added, ensuring immutability.

---

## 🎯 Challenge 3: Multi-Dimensional Matrices (2D Grids)

### Problem
Compute the trace of a square matrix (`matrix[0][0] + matrix[1][1] + ...`).

### Solution
```typescript
export function calculateMatrixTrace(matrix: number[][]): number {
  let sum = 0;
  for (let i = 0; i < matrix.length; i++) {
    if (matrix[i] && typeof matrix[i][i] === "number") {
      sum += matrix[i][i];
    }
  }
  return sum;
}
```

### 💡 Why This Works
- A 2D array is typed as `number[][]`. Looping `i` from 0 to `matrix.length - 1` accesses the diagonal elements at coordinate `[i][i]`.

---

## 🎯 Challenge 4: Typed Object Array Filtering & Projection

### Problem
Return an array of emails for all users with `isActive === true`.

### Solution
```typescript
export interface UserRecord {
  id: number;
  email: string;
  isActive: boolean;
}

export function getActiveUserEmails(users: UserRecord[]): string[] {
  return users
    .filter(u => u.isActive)
    .map(u => u.email);
}
```

### 💡 Why This Works
- Chaining `.filter()` and `.map()` transforms the strongly typed `UserRecord[]` array into a clean `string[]` of emails.

---

## 🚀 Next Steps
Advance to **Day 05: Tuples, Labeled Tuples & as const**!
