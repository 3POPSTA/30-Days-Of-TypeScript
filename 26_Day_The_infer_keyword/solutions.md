# 📘 Day 26: Challenge Solutions & Explanations

Welcome to the solution guide for **Day 26: The infer Keyword & Unwrapping Types**!

---

## 🎯 Challenge 1: Re-implementing ReturnType with infer

### Solution
```typescript
export type MyReturnType<T> = T extends (...args: any[]) => infer R ? R : never;
```

---

## 🎯 Challenge 2: Recursive Promise Unwrapper (DeepAwaited)

### Solution
```typescript
export type DeepAwaited<T> = T extends Promise<infer U> ? DeepAwaited<U> : T;
```

### 💡 Why This Works
- `infer U` captures the inner resolved type of the Promise, and recursively recurses if `U` is also a Promise!

---

## 🎯 Challenge 3: Extracting Array Element Types

### Solution
```typescript
export type ElementOf<T> = T extends readonly (infer E)[] ? E : never;
```

---

## 🎯 Challenge 4: Extracting the First Parameter of a Function

### Solution
```typescript
export type FirstParam<T> = T extends (first: infer P, ...rest: any[]) => any ? P : never;
```

---

## 🚀 Next Steps
Advance to **Day 27: Utility Types Part 1: Partial, Pick, Omit, etc.**!
