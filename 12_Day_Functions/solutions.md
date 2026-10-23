# 📘 Day 12: Challenge Solutions & Explanations

Welcome to the solution guide for **Day 12: Functions, Parameters, Rest & Optional**!

---

## 🎯 Challenge 1: Default and Optional Parameters

### Problem
Build an API endpoint with defaults for `version = "v1"` and `secure = true`.

### Solution
```typescript
export function buildApiEndpoint(
  path: string,
  version: string = "v1",
  secure: boolean = true
): string {
  const protocol = secure ? "https" : "http";
  return `${protocol}://api.example.com/${version}${path}`;
}
```

---

## 🎯 Challenge 2: Rest Parameters Accumulator

### Problem
Accumulate variable arguments for operations `"sum"` or `"product"`.

### Solution
```typescript
export function executeMath(op: "sum" | "product", ...values: number[]): number {
  if (values.length === 0) {
    return op === "sum" ? 0 : 1;
  }
  if (op === "sum") {
    return values.reduce((acc, curr) => acc + curr, 0);
  }
  return values.reduce((acc, curr) => acc * curr, 1);
}
```

---

## 🎯 Challenge 3: Typed Callback & Higher-Order Function

### Problem
Implement generic list transformation with optional predicate filter.

### Solution
```typescript
export function transformList<T, R>(
  items: T[],
  mapper: (item: T, index: number) => R,
  filterPredicate?: (item: R) => boolean
): R[] {
  const mapped = items.map(mapper);
  return filterPredicate ? mapped.filter(filterPredicate) : mapped;
}
```

---

## 🎯 Challenge 4: Function Pipeline Composer (Pipe)

### Problem
Compose two functions `f(g(a))`.

### Solution
```typescript
export function composeTwo<A, B, C>(
  f: (b: B) => C,
  g: (a: A) => B
): (a: A) => C {
  return (a: A) => f(g(a));
}
```

---

## 🚀 Next Steps
Advance to **Day 13: Function Overloading & Signatures**!
