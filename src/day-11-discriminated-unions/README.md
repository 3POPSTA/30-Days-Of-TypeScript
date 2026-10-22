# 🗓️ Day 11: Discriminated Unions & Exhaustiveness with never

> **Difficulty**: `Intermediate` | **Estimated Time**: `45 - 60 mins`

## 🎯 Learning Objectives
By the end of Day 11, you will be able to:
- [ ] Understand and apply **Discriminated (Tagged) Unions**
- [ ] Understand and apply **Common discriminant property**
- [ ] Understand and apply **Exhaustive switch checking**
- [ ] Understand and apply **never assertion**

---

## 📖 Deep Dive Theory & Concepts

### 1. Overview
The crown jewel of algebraic data types in TypeScript: build unbreakable state machines and exhaustive pattern matchers.

### 2. Core Concepts
#### 2.1 Discriminated (Tagged) Unions
In TypeScript, **Discriminated (Tagged) Unions** plays a critical role in type safety and developer productivity.
```typescript
// Example demonstrating Discriminated (Tagged) Unions
export const day11Concept1 = "Discriminated (Tagged) Unions";
```

#### 2.2 Common discriminant property
In TypeScript, **Common discriminant property** plays a critical role in type safety and developer productivity.
```typescript
// Example demonstrating Common discriminant property
export const day11Concept2 = "Common discriminant property";
```

#### 2.3 Exhaustive switch checking
In TypeScript, **Exhaustive switch checking** plays a critical role in type safety and developer productivity.
```typescript
// Example demonstrating Exhaustive switch checking
export const day11Concept3 = "Exhaustive switch checking";
```

#### 2.4 never assertion
In TypeScript, **never assertion** plays a critical role in type safety and developer productivity.
```typescript
// Example demonstrating never assertion
export const day11Concept4 = "never assertion";
```


### 3. Common Pitfalls & Pro Tips
> [!TIP]
> Always verify type inferences and prefer strict constructs over permissive fallbacks.

> [!WARNING]
> Avoid bypassing type checks with `any`; use the appropriate type narrowing or generic constraint instead!

---

## 🏋️ Exercises

### 🟢 Level 1: Fundamentals
- **Task 1.1**: Geometric shape area calculator (Circle | Square | Rectangle)
- Run `npm run day:11` to test your code!

### 🟡 Level 2: Real-World Application
- **Task 2.1**: Redux-style state reducer with Action unions
- Ensure edge cases and optional values are handled safely.

### 🔴 Level 3: Edge Cases & Mastery Challenge
- **Task 3.1**: Fail-safe assertNever pattern catching unhandled variants at compile time
- Validate all requirements against the automated test suite!

---

## 🧪 Verification & Solutions
1. Practice in `exercise.ts`.
2. Run automated test: `npx tsx src/day-11-discriminated-unions/exercise.ts`.
3. Check reference solution: `solution.ts`.
