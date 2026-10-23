# 📘 Day 18: Challenge Solutions & Explanations

Welcome to the solution guide for **Day 18: Enums & Object Literals as const**!

---

## 🎯 Challenge 1 & 2: Numeric and String Enums & Reverse Mapping

### Solution
```typescript
export enum Priority {
  Low = 1,
  Medium = 2,
  High = 3,
  Critical = 4
}

export enum OrderStatus {
  Pending = "PENDING",
  Processing = "PROCESSING",
  Completed = "COMPLETED",
  Cancelled = "CANCELLED"
}

export function getPriorityLabel(p: Priority): string {
  return Priority[p];
}
```

### 💡 Why This Works
- Numeric enums support reverse mapping: `Priority[1]` evaluates to `"Low"`.
- String enums do NOT create reverse mappings in JavaScript output.

---

## 🎯 Challenge 3: The 'as const' Object Alternative

### Solution
```typescript
export const HttpCodes = {
  Ok: 200,
  Created: 201,
  NotFound: 404,
  InternalError: 500
} as const;

export type HttpCode = (typeof HttpCodes)[keyof typeof HttpCodes];

export function isSuccessHttpCode(code: HttpCode): boolean {
  return code === HttpCodes.Ok || code === HttpCodes.Created;
}
```

---

## 🎯 Challenge 4: Type Guard for String Enums

### Solution
```typescript
export function isOrderStatus(val: unknown): val is OrderStatus {
  return (
    typeof val === "string" &&
    Object.values(OrderStatus).includes(val as OrderStatus)
  );
}
```

---

## 🚀 Next Steps
Advance to **Day 19: Generics: Functions, Interfaces & Types**!
