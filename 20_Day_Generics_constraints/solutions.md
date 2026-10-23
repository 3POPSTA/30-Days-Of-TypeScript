# 📘 Day 20: Challenge Solutions & Explanations

Welcome to the solution guide for **Day 20: Generics Constraints & keyof Operator**!

---

## 🎯 Challenge 1: Constraint with Length Property

### Solution
```typescript
export function measureLength<T extends { length: number }>(item: T): number {
  return item.length;
}
```

---

## 🎯 Challenge 2: Safe Property Picker with 'keyof'

### Solution
```typescript
export function pickProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}
```

### 💡 Why This Works
- `K extends keyof T` ensures that callers can only pass keys that actually exist on `T`.
- The return type `T[K]` is the exact indexed access type of that property.

---

## 🎯 Challenge 3: Array Plucker

### Solution
```typescript
export function pluck<T, K extends keyof T>(items: T[], key: K): T[K][] {
  return items.map(item => item[key]);
}
```

---

## 🎯 Challenge 4: Entity Repository Lookup by ID

### Solution
```typescript
export function findEntity<T extends { id: string | number }>(
  entities: T[],
  targetId: T["id"]
): T | undefined {
  return entities.find(e => e.id === targetId);
}
```

---

## 🚀 Next Steps
Advance to **Day 21: Generic Classes & Data Structures**!
