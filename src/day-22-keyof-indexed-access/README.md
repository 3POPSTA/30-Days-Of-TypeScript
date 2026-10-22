# 🗓️ Day 22: Advanced: keyof, typeof & Indexed Access

> **Difficulty**: `Advanced` | **Estimated Time**: `45 - 60 mins`

## 🎯 Learning Objectives
By the end of Day 22, you will be able to:
- [ ] Understand and apply **keyof operator**
- [ ] Understand and apply **typeof in type space**
- [ ] Understand and apply **Indexed access T[K]**
- [ ] Understand and apply **Array element indexing T[number]**

---

## 📖 Deep Dive Theory & Concepts

### 1. Overview
Extract property unions with keyof, capture runtime values into type space with typeof, and index types with T[K].

### 2. Core Concepts
#### 2.1 keyof operator
In TypeScript, **keyof operator** plays a critical role in type safety and developer productivity.
```typescript
// Example demonstrating keyof operator
export const day22Concept1 = "keyof operator";
```

#### 2.2 typeof in type space
In TypeScript, **typeof in type space** plays a critical role in type safety and developer productivity.
```typescript
// Example demonstrating typeof in type space
export const day22Concept2 = "typeof in type space";
```

#### 2.3 Indexed access T[K]
In TypeScript, **Indexed access T[K]** plays a critical role in type safety and developer productivity.
```typescript
// Example demonstrating Indexed access T[K]
export const day22Concept3 = "Indexed access T[K]";
```

#### 2.4 Array element indexing T[number]
In TypeScript, **Array element indexing T[number]** plays a critical role in type safety and developer productivity.
```typescript
// Example demonstrating Array element indexing T[number]
export const day22Concept4 = "Array element indexing T[number]";
```


### 3. Common Pitfalls & Pro Tips
> [!TIP]
> Always verify type inferences and prefer strict constructs over permissive fallbacks.

> [!WARNING]
> Avoid bypassing type checks with `any`; use the appropriate type narrowing or generic constraint instead!

---

## 🏋️ Exercises

### 🟢 Level 1: Fundamentals
- **Task 1.1**: Extract keys of UserProfile
- Run `npm run day:22` to test your code!

### 🟡 Level 2: Real-World Application
- **Task 2.1**: Extract array element type with [number]
- Ensure edge cases and optional values are handled safely.

### 🔴 Level 3: Edge Cases & Mastery Challenge
- **Task 3.1**: Implement type-safe pluck<T, K>(items, key)
- Validate all requirements against the automated test suite!

---

## 🧪 Verification & Solutions
1. Practice in `exercise.ts`.
2. Run automated test: `npx tsx src/day-22-keyof-indexed-access/exercise.ts`.
3. Check reference solution: `solution.ts`.
