# 📘 Day 28: Challenge Solutions & Explanations

Welcome to the solution guide for **Day 28: Utility Types Part 2: Extract, Exclude, ReturnType, etc.**!

---

## 🎯 Challenge 1: Re-implementing Exclude & Extract

### Solution
```typescript
export type MyExclude<T, U> = T extends U ? never : T;
export type MyExtract<T, U> = T extends U ? T : never;
```

---

## 🎯 Challenge 2: Re-implementing NonNullable

### Solution
```typescript
export type MyNonNullable<T> = T extends null | undefined ? never : T;
```

---

## 🎯 Challenge 3: Re-implementing Parameters<T>

### Solution
```typescript
export type MyParameters<T extends (...args: any[]) => any> = T extends (...args: infer P) => any ? P : never;
```

---

## 🎯 Challenge 4: Inspecting Service Method Payloads

### Solution
```typescript
export type CustomerRegistrationArgs = Parameters<typeof registerCustomer>;
export type RegistrationResult = Awaited<ReturnType<typeof registerCustomer>>;
```

---

## 🚀 Next Steps
Advance to **Day 29: Async, Promises, and Robust Error Handling**!
