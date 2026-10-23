# 📘 Day 07: Challenge Solutions & Explanations

Welcome to the solution guide for **Day 07: Type Aliases & Intersection Types**!

---

## 🎯 Challenge 1: Domain-Specific Primitive Aliases

### Problem
Define aliases `UserId` and `Timestamp` to give semantic meaning to primitives.

### Solution
```typescript
export type UserId = string;
export type Timestamp = number;

export function createAuditLog(userId: UserId, action: string, timestamp: Timestamp): string {
  return `[${timestamp}] User '${userId}' performed '${action}'`;
}
```

---

## 🎯 Challenge 2: Composing Entities with Intersection Types (&)

### Problem
Compose `Document` from `Identifiable`, `Timestamped`, and `DocumentData`.

### Solution
```typescript
export type Identifiable = { id: string };
export type Timestamped = { createdAt: number; updatedAt: number };
export type DocumentData = { title: string; content: string };
export type Document = Identifiable & Timestamped & DocumentData;

export function createDocument(
  id: string,
  title: string,
  content: string,
  now: number
): Document {
  return {
    id,
    title,
    content,
    createdAt: now,
    updatedAt: now
  };
}
```

### 💡 Why This Works
- Intersection (`&`) combines multiple types into one. An object of type `Document` must have every property from all three constituents.

---

## 🎯 Challenge 3: Generic Object Merger with Intersections

### Problem
Merge two generic objects `T` and `U` into `T & U`.

### Solution
```typescript
export function mergeEntities<T extends object, U extends object>(a: T, b: U): T & U {
  return { ...a, ...b };
}
```

---

## 🎯 Challenge 4: Branded / Nominal Types

### Problem
Implement `toUSD` and `addUSD` for nominal currency amounts.

### Solution
```typescript
declare const usdBrand: unique symbol;
export type USD = number & { readonly [usdBrand]: true };

export function toUSD(amount: number): USD {
  return amount as USD;
}

export function addUSD(a: USD, b: USD): USD {
  return ((a as number) + (b as number)) as USD;
}
```

### 💡 Why This Works & Scrimba Pro-Tip
- Branded types prevent catastrophic bugs like mixing up `EUR` and `USD` or `Kilometers` and `Miles`. Even though both are numbers at runtime, TypeScript refuses to mix them!

---

## 🚀 Next Steps
Proceed to **Day 08: Union Types & Literal Types**!
