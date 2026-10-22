# 🗓️ Day 28: Utility Types Masterclass (Part 2)

> **Difficulty**: `Advanced` | **Estimated Time**: `45 - 60 mins`

## 🎯 Learning Objectives
By the end of Day 28, you will be able to:
- [ ] Understand and apply **Exclude<T, U>**
- [ ] Understand and apply **Extract<T, U>**
- [ ] Understand and apply **NonNullable<T>**
- [ ] Understand and apply **ReturnType<T>**
- [ ] Understand and apply **Parameters<T>**
- [ ] Understand and apply **Awaited<T>**

---

## 📖 Deep Dive Theory & Concepts

### 1. Overview
Master union and function utilities: Exclude, Extract, NonNullable, ReturnType, Parameters, and Awaited.

### 2. Core Concepts
#### 2.1 Exclude<T, U>
In TypeScript, **Exclude<T, U>** plays a critical role in type safety and developer productivity.
```typescript
// Example demonstrating Exclude<T, U>
export const day28Concept1 = "Exclude<T, U>";
```

#### 2.2 Extract<T, U>
In TypeScript, **Extract<T, U>** plays a critical role in type safety and developer productivity.
```typescript
// Example demonstrating Extract<T, U>
export const day28Concept2 = "Extract<T, U>";
```

#### 2.3 NonNullable<T>
In TypeScript, **NonNullable<T>** plays a critical role in type safety and developer productivity.
```typescript
// Example demonstrating NonNullable<T>
export const day28Concept3 = "NonNullable<T>";
```

#### 2.4 ReturnType<T>
In TypeScript, **ReturnType<T>** plays a critical role in type safety and developer productivity.
```typescript
// Example demonstrating ReturnType<T>
export const day28Concept4 = "ReturnType<T>";
```

#### 2.5 Parameters<T>
In TypeScript, **Parameters<T>** plays a critical role in type safety and developer productivity.
```typescript
// Example demonstrating Parameters<T>
export const day28Concept5 = "Parameters<T>";
```

#### 2.6 Awaited<T>
In TypeScript, **Awaited<T>** plays a critical role in type safety and developer productivity.
```typescript
// Example demonstrating Awaited<T>
export const day28Concept6 = "Awaited<T>";
```


### 3. Common Pitfalls & Pro Tips
> [!TIP]
> Always verify type inferences and prefer strict constructs over permissive fallbacks.

> [!WARNING]
> Avoid bypassing type checks with `any`; use the appropriate type narrowing or generic constraint instead!

---

## 🏋️ Exercises

### 🟢 Level 1: Fundamentals
- **Task 1.1**: Clean nullable union with NonNullable
- Run `npm run day:28` to test your code!

### 🟡 Level 2: Real-World Application
- **Task 2.1**: Extract common event types with Extract
- Ensure edge cases and optional values are handled safely.

### 🔴 Level 3: Edge Cases & Mastery Challenge
- **Task 3.1**: Build typed Higher-Order Function wrapper using Parameters & ReturnType
- Validate all requirements against the automated test suite!

---

## 🧪 Verification & Solutions
1. Practice in `exercise.ts`.
2. Run automated test: `npx tsx src/day-28-utility-types-part2/exercise.ts`.
3. Check reference solution: `solution.ts`.
