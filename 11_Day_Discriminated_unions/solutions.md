# 📘 Day 11: Challenge Solutions & Explanations

Welcome to the solution guide for **Day 11: Discriminated Unions & Pattern Matching**!

---

## 🎯 Challenge 1 & 2: Payment Method Discriminated Union & Exhaustive Switch

### Problem
Define `PaymentMethod` with discriminator `kind`, implement `assertUnreachable`, and describe payments.

### Solution
```typescript
export type CreditCard = { kind: "credit_card"; last4: string; expMonth: number; expYear: number };
export type PayPal = { kind: "paypal"; email: string };
export type Crypto = { kind: "crypto"; coin: "BTC" | "ETH"; walletAddress: string };
export type PaymentMethod = CreditCard | PayPal | Crypto;

export function assertUnreachable(x: never): never {
  throw new Error(`Unhandled union variant: ${JSON.stringify(x)}`);
}

export function describePayment(method: PaymentMethod): string {
  switch (method.kind) {
    case "credit_card":
      return `Card ending in ${method.last4}`;
    case "paypal":
      return `PayPal account ${method.email}`;
    case "crypto":
      return `${method.coin} wallet ${method.walletAddress.slice(0, 6)}...`;
    default:
      return assertUnreachable(method);
  }
}
```

### 💡 Why This Works
- By checking `method.kind`, TypeScript automatically narrows `method` within each branch.
- In the `default` branch, all variants have been exhausted, meaning `method` has type `never`.

---

## 🎯 Challenge 3: Redux-Style Action & Reducer

### Problem
Implement `counterReducer` handling `ADD`, `SUBTRACT`, and `RESET`.

### Solution
```typescript
export type Action =
  | { type: "ADD"; amount: number }
  | { type: "SUBTRACT"; amount: number }
  | { type: "RESET" };

export function counterReducer(state: number, action: Action): number {
  switch (action.type) {
    case "ADD":
      return state + action.amount;
    case "SUBTRACT":
      return state - action.amount;
    case "RESET":
      return 0;
  }
}
```

---

## 🎯 Challenge 4: Remote Data Lifecycle State Machine

### Problem
Unwrap query data safely with fallback.

### Solution
```typescript
export type QueryState<T> =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "success"; data: T }
  | { status: "error"; error: string };

export function unwrapQueryData<T>(state: QueryState<T>, fallback: T): T {
  if (state.status === "success") {
    return state.data;
  }
  return fallback;
}
```

---

## 🚀 Next Steps
Advance to **Day 12: Functions, Parameters, Rest & Optional**!
