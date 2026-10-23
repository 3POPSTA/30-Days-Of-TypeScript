# 📘 Day 27: Challenge Solutions & Explanations

Welcome to the solution guide for **Day 27: Utility Types Part 1: Partial, Pick, Omit, etc.**!

---

## 🎯 Challenge 1: Re-implementing Partial & Readonly

### Solution
```typescript
export type MyPartial<T> = {
  [K in keyof T]?: T[K];
};

export type MyReadonly<T> = {
  readonly [K in keyof T]: T[K];
};
```

---

## 🎯 Challenge 2: Re-implementing Pick & Omit

### Solution
```typescript
export type MyPick<T, K extends keyof T> = {
  [P in K]: T[P];
};

export type MyOmit<T, K extends keyof any> = {
  [P in Exclude<keyof T, K>]: T[P];
};
```

---

## 🎯 Challenge 3: Dictionary Indexing with Record<K, V>

### Solution
```typescript
export function createLookup<T extends { id: string }>(items: T[]): Record<string, T> {
  const lookup: Record<string, T> = {};
  for (const item of items) {
    lookup[item.id] = item;
  }
  return lookup;
}
```

---

## 🎯 Challenge 4: Composing Utilities for DTO Updates

### Solution
```typescript
export type UpdateUserDto = Partial<Omit<UserAccount, "id" | "createdAt">>;

export function applyUserUpdate(original: UserAccount, patch: UpdateUserDto): UserAccount {
  return { ...original, ...patch };
}
```

---

## 🚀 Next Steps
Advance to **Day 28: Utility Types Part 2: Extract, Exclude, ReturnType, etc.**!
