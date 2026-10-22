# 🗓️ Day 25: Conditional Types & Distributive Unions

> **Difficulty**: `Expert` | **Estimated Time**: `45 - 60 mins`

## 🎯 Learning Objectives
By the end of Day 25, you will be able to:
- [ ] Understand and apply **Conditional types**
- [ ] Understand and apply **Distributive conditional types**
- [ ] Understand and apply **Filtering unions with never**
- [ ] Understand and apply **Type-level branching**

---

## 📖 Deep Dive Theory & Concepts

### 1. Overview
Perform if/else logic in type space using conditional types (T extends U ? X : Y) and leverage distributive behavior.

### 2. Core Concepts
#### 2.1 Conditional types
In TypeScript, **Conditional types** plays a critical role in type safety and developer productivity.
```typescript
// Example demonstrating Conditional types
export const day25Concept1 = "Conditional types";
```

#### 2.2 Distributive conditional types
In TypeScript, **Distributive conditional types** plays a critical role in type safety and developer productivity.
```typescript
// Example demonstrating Distributive conditional types
export const day25Concept2 = "Distributive conditional types";
```

#### 2.3 Filtering unions with never
In TypeScript, **Filtering unions with never** plays a critical role in type safety and developer productivity.
```typescript
// Example demonstrating Filtering unions with never
export const day25Concept3 = "Filtering unions with never";
```

#### 2.4 Type-level branching
In TypeScript, **Type-level branching** plays a critical role in type safety and developer productivity.
```typescript
// Example demonstrating Type-level branching
export const day25Concept4 = "Type-level branching";
```


### 3. Common Pitfalls & Pro Tips
> [!TIP]
> Always verify type inferences and prefer strict constructs over permissive fallbacks.

> [!WARNING]
> Avoid bypassing type checks with `any`; use the appropriate type narrowing or generic constraint instead!

---

## 🏋️ Exercises

### 🟢 Level 1: Fundamentals
- **Task 1.1**: IsString<T> conditional type
- Run `npm run day:25` to test your code!

### 🟡 Level 2: Real-World Application
- **Task 2.1**: NonString<T> filtering out string from unions
- Ensure edge cases and optional values are handled safely.

### 🔴 Level 3: Edge Cases & Mastery Challenge
- **Task 3.1**: Flatten<T> unwrapping array types or returning T
- Validate all requirements against the automated test suite!

---

## 🧪 Verification & Solutions
1. Practice in `exercise.ts`.
2. Run automated test: `npx tsx src/day-25-conditional-types/exercise.ts`.
3. Check reference solution: `solution.ts`.
