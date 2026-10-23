# 📘 Day 13: Challenge Solutions & Explanations

Welcome to the solution guide for **Day 13: Function Overloading & Signatures**!

---

## 🎯 Challenge 1: Overloaded Date Parser

### Problem
Implement an overloaded date parser accepting timestamp numbers, ISO strings, or `(year, month, day)`.

### Solution
```typescript
export function parseTimestamp(ts: number): Date;
export function parseTimestamp(isoString: string): Date;
export function parseTimestamp(year: number, month: number, day: number): Date;
export function parseTimestamp(
  arg1: number | string,
  arg2?: number,
  arg3?: number
): Date {
  if (typeof arg1 === "string") {
    return new Date(arg1);
  }
  if (typeof arg2 === "number" && typeof arg3 === "number") {
    return new Date(arg1, arg2 - 1, arg3);
  }
  return new Date(arg1);
}
```

### 💡 Why This Works
- Callers only see the overload signatures, while the implementation signature accommodates all possible combinations.

---

## 🎯 Challenge 2: Overloaded Query Selector / Finder

### Problem
Return a single object when passing a string ID, or an array when passing a string array.

### Solution
```typescript
export function findUser(id: string): { id: string; name: string } | undefined;
export function findUser(ids: string[]): { id: string; name: string }[];
export function findUser(
  arg: string | string[]
): ({ id: string; name: string } | undefined) | { id: string; name: string }[] {
  if (Array.isArray(arg)) {
    return mockStore.filter(u => arg.includes(u.id));
  }
  return mockStore.find(u => u.id === arg);
}
```

---

## 🎯 Challenge 3: Overloaded Sequence Duplicator

### Solution
```typescript
export function duplicateSequence(val: string, times: number): string;
export function duplicateSequence(val: number[], times: number): number[];
export function duplicateSequence(
  val: string | number[],
  times: number
): string | number[] {
  if (typeof val === "string") {
    return val.repeat(times);
  }
  const result: number[] = [];
  for (let i = 0; i < times; i++) {
    result.push(...val);
  }
  return result;
}
```

---

## 🎯 Challenge 4: Overloaded Type Formatter

### Solution
```typescript
export function formatData(data: number, format: "currency"): string;
export function formatData(data: number, format: "percent"): string;
export function formatData(data: boolean): string;
export function formatData(
  data: number | boolean,
  format?: "currency" | "percent"
): string {
  if (typeof data === "boolean") {
    return data ? "YES" : "NO";
  }
  if (format === "currency") {
    return `$${data.toFixed(2)}`;
  }
  return `${(data * 100).toFixed(0)}%`;
}
```

---

## 🚀 Next Steps
Advance to **Day 14: Interfaces & Inheritance**!
