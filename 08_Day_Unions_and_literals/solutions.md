# 📘 Day 08: Challenge Solutions & Explanations

Welcome to the solution guide for **Day 08: Union Types & Literal Types**!

---

## 🎯 Challenge 1: Finite State Union

### Problem
Define `FetchState` and check if a new request can be started.

### Solution
```typescript
export type FetchState = "idle" | "loading" | "success" | "error";

export function canInitiateRequest(state: FetchState): boolean {
  return state === "idle" || state === "error";
}
```

---

## 🎯 Challenge 2: Handling Union Parameters

### Problem
Accept `string | number` for port and normalize to a valid number between 1 and 65535.

### Solution
```typescript
export function normalizePortNumber(port: string | number): number | null {
  const num = typeof port === "number" ? port : parseInt(port, 10);
  if (isNaN(num) || num < 1 || num > 65535) {
    return null;
  }
  return num;
}
```

---

## 🎯 Challenge 3: Numeric Literal Types

### Problem
Calculate tax using only approved literal rates (`0.05 | 0.10 | 0.15 | 0.20`).

### Solution
```typescript
export type AllowedRate = 0.05 | 0.10 | 0.15 | 0.20;

export function computeTax(amount: number, rate: AllowedRate): number {
  return amount * rate;
}
```

---

## 🎯 Challenge 4: Discriminated Result Union

### Problem
Format `AsyncResult<string>` using the discriminator `success`.

### Solution
```typescript
export type AsyncResult<T> =
  | { success: true; data: T }
  | { success: false; errorMessage: string };

export function formatAsyncResult(res: AsyncResult<string>): string {
  if (res.success) {
    return `DATA: ${res.data}`;
  }
  return `ERROR: ${res.errorMessage}`;
}
```

---

## 🚀 Next Steps
Head to **Day 09: Type Narrowing & Control Flow Analysis**!
