# 📘 Day 29: Challenge Solutions & Explanations

Welcome to the solution guide for **Day 29: Async, Promises, and Robust Error Handling**!

---

## 🎯 Challenge 1: Strongly Typed Result Pattern

### Solution
```typescript
export type Result<T, E = Error> =
  | { ok: true; value: T }
  | { ok: false; error: E };

export function ok<T>(value: T): Result<T, never> {
  return { ok: true, value };
}

export function fail<E>(error: E): Result<never, E> {
  return { ok: false, error };
}
```

---

## 🎯 Challenge 2: Safe Async Wrapper

### Solution
```typescript
export async function safeAsync<T>(fn: () => Promise<T>): Promise<Result<T, Error>> {
  try {
    const val = await fn();
    return ok(val);
  } catch (err: unknown) {
    const errorInstance = err instanceof Error ? err : new Error(String(err));
    return fail(errorInstance);
  }
}
```

---

## 🎯 Challenge 3: Narrowing Unknown Errors in Catch Blocks

### Solution
```typescript
export function toErrorMessage(err: unknown): string {
  if (err instanceof Error) {
    return err.message;
  }
  if (typeof err === "string") {
    return err;
  }
  return String(err);
}
```

---

## 🎯 Challenge 4: Asynchronous Retry Mechanism

### Solution
```typescript
export async function retryAsync<T>(fn: () => Promise<T>, maxAttempts: number): Promise<T> {
  let lastErr: unknown;
  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      return await fn();
    } catch (err: unknown) {
      lastErr = err;
    }
  }
  throw lastErr;
}
```

---

## 🚀 Next Steps
Advance to the grand finale: **Day 30: Final Capstone Project**!
