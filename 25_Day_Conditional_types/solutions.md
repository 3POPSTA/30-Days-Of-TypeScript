# 📘 Day 25: Challenge Solutions & Explanations

Welcome to the solution guide for **Day 25: Conditional Types & Distributive Conditionals**!

---

## 🎯 Challenge 1: Basic Type Inspection Conditional

### Solution
```typescript
export type IsString<T> = T extends string ? true : false;
```

---

## 🎯 Challenge 2: Distributive Union Filtering

### Solution
```typescript
export type Diff<T, U> = T extends U ? never : T;
```

### 💡 Why This Works
- When a conditional type acts on a generic union type `T`, it distributes over each member individually:
  `("a" | "b") extends "b" ? never : T` becomes `("a" extends "b" ? never : "a") | ("b" extends "b" ? never : "b")` = `"a" | never` = `"a"`.

---

## 🎯 Challenge 3: Array Element Extraction Conditional

### Solution
```typescript
export type Flatten<T> = T extends (infer E)[] ? E : T;
```

---

## 🎯 Challenge 4: Safe Function Return Resolver

### Solution
```typescript
export type FunctionReturnTypeOrNever<T> = T extends (...args: any[]) => infer R ? R : never;
```

---

## 🚀 Next Steps
Advance to **Day 26: The infer Keyword & Unwrapping Types**!
