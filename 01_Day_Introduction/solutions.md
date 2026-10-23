# 📘 Day 01: Challenge Solutions & Explanations

Welcome to the solution guide for **Day 01: Introduction & Getting Started**!

---

## 🎯 Challenge 1: Explicit Variable Type Annotations

### Problem
Declare three exported variables with explicit type annotations:
- `courseTitle`: `string` ("30 Days of TypeScript")
- `totalDays`: `number` (30)
- `isEnrolled`: `boolean` (true)

### Solution
```typescript
export const courseTitle: string = "30 Days of TypeScript";
export const totalDays: number = 30;
export const isEnrolled: boolean = true;
```

### 💡 Why This Works
- Adding `: string`, `: number`, and `: boolean` explicitly tells the TypeScript compiler what type each variable must hold.
- While TypeScript can infer these types from literals, explicit annotations document intent and prevent unintended reassignment.

### 🌟 Scrimba Pro-Tip
Hover over any variable in VS Code or your IDE. Even without explicit annotations, TypeScript shows its inferred type. Using explicit annotations is best practice for module exports and API contracts.

---

## 🎯 Challenge 2: Strongly Typed Function Parameters & Return Type

### Problem
Write a function `formatBadge(title: string, day: number): string` that pads the day number to two digits and formats the title.

### Solution
```typescript
export function formatBadge(title: string, day: number): string {
  const paddedDay = String(day).padStart(2, "0");
  return `[TS30] Day ${paddedDay}: ${title}`;
}
```

### 💡 Why This Works
- `title: string` and `day: number` ensure callers cannot pass invalid arguments (like an object or null).
- `: string` after the parameter parentheses ensures the function must return a string.
- `String(day).padStart(2, "0")` ensures single-digit numbers like `2` become `"02"`.

---

## 🎯 Challenge 3: Strict Arithmetic & Type Coercion Protection

### Problem
Write `calculateFinalPrice(basePrice: number, discountRate: number, shippingFee: number): number` to compute the final price safely.

### Solution
```typescript
export function calculateFinalPrice(
  basePrice: number,
  discountRate: number,
  shippingFee: number
): number {
  return (basePrice * (1 - discountRate)) + shippingFee;
}
```

### 💡 Why This Works
- JavaScript notoriously converts numbers to strings during addition (`100 + "15" = "10015"`). By annotating all three inputs as `number`, TypeScript prevents runtime math errors.

---

## 🎯 Challenge 4: Optional Parameters & Nullish Coalescing

### Problem
Write `greetScholar(scholarName?: string): string` that welcomes the user, falling back to `"TypeScript Scholar"` if not provided.

### Solution
```typescript
export function greetScholar(scholarName?: string): string {
  const name = scholarName ?? "TypeScript Scholar";
  return `Welcome, ${name}! Ready to code.`;
}
```

### 💡 Why This Works
- The `?` modifier marks `scholarName` as optional (type `string | undefined`).
- The nullish coalescing operator (`??`) only triggers fallback when the value is `null` or `undefined`, unlike `||` which triggers on empty strings `""` or `0`.

---

## 🚀 Next Steps
Great job on Day 01! Head over to **Day 02: Primitive Data Types & Type Annotations** to explore all 7 TypeScript primitives!
