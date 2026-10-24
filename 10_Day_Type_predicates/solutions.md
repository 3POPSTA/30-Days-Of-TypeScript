# 📘 Day 10: Challenge Solutions & Explanations

Welcome to the solution guide for **Day 10: Type Predicates & Custom Type Guards**!

---

## 🎯 Challenge 1: Custom Object Type Guard ('val is Type')

### Problem
Write a user-defined type guard to safely identify an `AdminAccount`.

### Solution
```typescript
export interface AdminAccount {
  username: string;
  role: "ADMIN";
  accessLevel: number;
}

export function isAdminAccount(val: unknown): val is AdminAccount {
  if (typeof val !== "object" || val === null) {
    return false;
  }
  const cand = val as Record<string, unknown>;
  return (
    typeof cand.username === "string" &&
    cand.role === "ADMIN" &&
    typeof cand.accessLevel === "number"
  );
}
```

### 💡 Why This Works
- `val is AdminAccount` signals to TypeScript that if the function returns `true`, `val` can safely be treated as `AdminAccount` in any downstream code!

---

## 🎯 Challenge 2: Generic Non-Nullable Guard for Array Filtering

### Problem
Write `isNotNullOrUndefined<T>` and use it in `compactList<T>`.

### Solution
```typescript
export function isNotNullOrUndefined<T>(item: T | null | undefined): item is T {
  return item !== null && item !== undefined;
}

export function compactList<T>(items: (T | null | undefined)[]): T[] {
  return items.filter(isNotNullOrUndefined);
}
```

### 💡 Why This Works & Pro-Tip
- In standard TypeScript, `array.filter(Boolean)` does not narrow `(T | null)[]` to `T[]`. Passing a type predicate function into `.filter()` successfully narrows the return type to `T[]`!

---

## 🎯 Challenge 3: Custom Error Type Guard

### Problem
Write `isNetworkFailure(val: unknown): val is NetworkFailure`.

### Solution
```typescript
export type NetworkFailure = { kind: "NETWORK_FAILURE"; statusCode: number };

export function isNetworkFailure(val: unknown): val is NetworkFailure {
  if (typeof val !== "object" || val === null) return false;
  const cand = val as Record<string, unknown>;
  return cand.kind === "NETWORK_FAILURE" && typeof cand.statusCode === "number";
}
```

---

## 🎯 Challenge 4: Assertion Functions ('asserts val is Type')

### Problem
Write an assertion function `assertValidScore`.

### Solution
```typescript
export function assertValidScore(val: number, name: string): asserts val is number {
  if (val < 0 || val > 100) {
    throw new Error(`Invalid score for ${name}: ${val}`);
  }
}
```

---

## 🚀 Next Steps
Proceed to **Day 11: Discriminated Unions & Pattern Matching**!
