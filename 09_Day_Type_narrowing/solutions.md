# 📘 Day 09: Challenge Solutions & Explanations

Welcome to the solution guide for **Day 09: Type Narrowing & Control Flow Analysis**!

---

## 🎯 Challenge 1: 'typeof' Narrowing

### Problem
Double a number or repeat a string twice using `typeof`.

### Solution
```typescript
export function doubleOrRepeat(input: string | number): string | number {
  if (typeof input === "number") {
    return input * 2;
  }
  return input.repeat(2);
}
```

---

## 🎯 Challenge 2: 'instanceof' Narrowing

### Problem
Extract the error message from `Error | string`.

### Solution
```typescript
export function toStandardError(err: Error | string): string {
  if (err instanceof Error) {
    return err.message;
  }
  return err;
}
```

---

## 🎯 Challenge 3: 'in' Operator Narrowing

### Problem
Calculate the area of a `Circle | Rectangle` without a tag field.

### Solution
```typescript
export type Circle = { radius: number };
export type Rectangle = { width: number; height: number };

export function calculateArea(shape: Circle | Rectangle): number {
  if ("radius" in shape) {
    return Math.PI * shape.radius ** 2;
  }
  return shape.width * shape.height;
}
```

---

## 🎯 Challenge 4: Truthiness & Nullish Narrowing

### Problem
Sanitize a display name or default to `"Anonymous"`.

### Solution
```typescript
export function sanitizeDisplayName(name: string | null | undefined): string {
  if (name && name.trim().length > 0) {
    return name.trim();
  }
  return "Anonymous";
}
```

---

## 🚀 Next Steps
Advance to **Day 10: Type Predicates & Custom Type Guards**!
