# 📘 Day 24: Challenge Solutions & Explanations

Welcome to the solution guide for **Day 24: Template Literal Types & Event Strings**!

---

## 🎯 Challenge 1: Cross-Product Event Names

### Solution
```typescript
export type Entity = "user" | "order" | "invoice";
export type Action = "create" | "update" | "delete";
export type ScopedEvent = `${Entity}:${Action}`;

export function formatEventLog(evt: ScopedEvent, id: string): string {
  return `[EVENT] ${evt} for ID #${id}`;
}
```

### 💡 Why This Works
- Template literal types compute the cartesian product of unions automatically: 3 entities × 3 actions = 9 possible string events!

---

## 🎯 Challenge 2: String Intrinsics

### Solution
```typescript
export type EventHandlerName<T extends string> = `on${Capitalize<T>}`;
```

---

## 🎯 Challenge 3: CSS BEM Class Combinator

### Solution
```typescript
export type Component = "btn" | "card";
export type Variant = "primary" | "secondary";
export type Size = "sm" | "lg";
export type BEMButtonClass = `btn--${Variant}-${Size}`;

export function generateButtonClass(variant: Variant, size: Size): BEMButtonClass {
  return `btn--${variant}-${size}`;
}
```

---

## 🎯 Challenge 4: Hex Color Template Validator

### Solution
```typescript
export type HexColor = `#${string}`;

export function isHexColor(val: string): val is HexColor {
  return /^#([A-Fa-f0-9]{3}|[A-Fa-f0-9]{6})$/.test(val);
}
```

---

## 🚀 Next Steps
Advance to **Day 25: Conditional Types & Distributive Conditionals**!
