# 🗓️ Day 04: Arrays, Readonly Arrays & Matrices

> **Difficulty**: `Beginner` | **Estimated Time**: `45 - 60 mins`

## 🎯 Learning Objectives
By the end of Day 04, you will be able to:
- [ ] Understand and apply **T[] vs Array<T>**
- [ ] Understand and apply **number[][] matrices**
- [ ] Understand and apply **readonly T[]**
- [ ] Understand and apply **Pure transformations (map, filter)**

---

## 📖 Deep Dive Theory & Concepts

### 1. Overview
Explore typed arrays, multidimensional matrices, immutability with readonly arrays, and functional transformations.

### 2. Core Concepts
#### 2.1 T[] vs Array<T>
In TypeScript, **T[] vs Array<T>** plays a critical role in type safety and developer productivity.
```typescript
// Example demonstrating T[] vs Array<T>
export const day04Concept1 = "T[] vs Array<T>";
```

#### 2.2 number[][] matrices
In TypeScript, **number[][] matrices** plays a critical role in type safety and developer productivity.
```typescript
// Example demonstrating number[][] matrices
export const day04Concept2 = "number[][] matrices";
```

#### 2.3 readonly T[]
In TypeScript, **readonly T[]** plays a critical role in type safety and developer productivity.
```typescript
// Example demonstrating readonly T[]
export const day04Concept3 = "readonly T[]";
```

#### 2.4 Pure transformations (map, filter)
In TypeScript, **Pure transformations (map, filter)** plays a critical role in type safety and developer productivity.
```typescript
// Example demonstrating Pure transformations (map, filter)
export const day04Concept4 = "Pure transformations (map, filter)";
```


### 3. Common Pitfalls & Pro Tips
> [!TIP]
> Always verify type inferences and prefer strict constructs over permissive fallbacks.

> [!WARNING]
> Avoid bypassing type checks with `any`; use the appropriate type narrowing or generic constraint instead!

---

## 🏋️ Exercises

### 🟢 Level 1: Fundamentals
- **Task 1.1**: Matrix diagonal element extraction
- Run `npm run day:04` to test your code!

### 🟡 Level 2: Real-World Application
- **Task 2.1**: Pure array manipulation without mutating readonly inputs
- Ensure edge cases and optional values are handled safely.

### 🔴 Level 3: Edge Cases & Mastery Challenge
- **Task 3.1**: Flatten 2D matrix into 1D array with strict typing
- Validate all requirements against the automated test suite!

---

## 🧪 Verification & Solutions
1. Practice in `exercise.ts`.
2. Run automated test: `npx tsx src/day-04-arrays/exercise.ts`.
3. Check reference solution: `solution.ts`.
