# 📘 Day 23: Challenge Solutions & Explanations

Welcome to the solution guide for **Day 23: Mapped Types & Key Remapping**!

---

## 🎯 Challenge 1: Basic Mapped Type (Nullable<T>)

### Solution
```typescript
export type Nullable<T> = {
  [K in keyof T]: T[K] | null;
};

export function makeNullable<T extends object>(obj: T): Nullable<T> {
  return { ...obj } as Nullable<T>;
}
```

---

## 🎯 Challenge 2: Stripping Modifiers (-readonly, -?)

### Solution
```typescript
export type MutableAndRequired<T> = {
  -readonly [K in keyof T]-?: T[K];
};
```

### 💡 Why This Works
- `-readonly` strips away the immutability flag.
- `-?` removes the optional flag, making all fields mandatory.

---

## 🎯 Challenge 3: Key Remapping via 'as' (Getters<T>)

### Solution
```typescript
export type Getters<T> = {
  [K in keyof T as `get${Capitalize<string & K>}`]: () => T[K];
};

export function createGetters<T extends object>(obj: T): Getters<T> {
  const result: Record<string, unknown> = {};
  for (const [key, val] of Object.entries(obj)) {
    const getterName = `get${key.charAt(0).toUpperCase()}${key.slice(1)}`;
    result[getterName] = () => val;
  }
  return result as Getters<T>;
}
```

---

## 🎯 Challenge 4: Value-Type Filtering Mapped Type

### Solution
```typescript
export type PickPropertiesOfType<T, TargetValue> = {
  [K in keyof T as T[K] extends TargetValue ? K : never]: T[K];
};
```

---

## 🚀 Next Steps
Advance to **Day 24: Template Literal Types & Event Strings**!
