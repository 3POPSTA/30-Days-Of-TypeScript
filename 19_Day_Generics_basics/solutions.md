# 📘 Day 19: Challenge Solutions & Explanations

Welcome to the solution guide for **Day 19: Generics: Functions, Interfaces & Types**!

---

## 🎯 Challenge 1: Generic Envelope / Box Wrapper

### Solution
```typescript
export interface Box<T> {
  content: T;
  boxedAt: number;
}

export function wrapInBox<T>(value: T): Box<T> {
  return {
    content: value,
    boxedAt: Date.now()
  };
}
```

---

## 🎯 Challenge 2: Generic Multi-Parameter Pair

### Solution
```typescript
export interface Pair<K, V> {
  first: K;
  second: V;
}

export function swapPair<K, V>(pair: Pair<K, V>): Pair<V, K> {
  return {
    first: pair.second,
    second: pair.first
  };
}
```

---

## 🎯 Challenge 3: Generic Array Partitioner

### Solution
```typescript
export function partition<T>(items: T[], predicate: (item: T) => boolean): [T[], T[]] {
  const matches: T[] = [];
  const nonMatches: T[] = [];
  for (const item of items) {
    if (predicate(item)) {
      matches.push(item);
    } else {
      nonMatches.push(item);
    }
  }
  return [matches, nonMatches];
}
```

---

## 🎯 Challenge 4: Generic Result Monad

### Solution
```typescript
export type Result<T, E> =
  | { success: true; data: T }
  | { success: false; error: E };

export function mapSuccess<T, U, E>(res: Result<T, E>, fn: (val: T) => U): Result<U, E> {
  if (res.success) {
    return { success: true, data: fn(res.data) };
  }
  return res;
}
```

---

## 🚀 Next Steps
Advance to **Day 20: Generics Constraints & keyof Operator**!
