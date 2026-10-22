# 🗓️ Day 26: The infer Keyword & Type Extraction

> **Difficulty**: `Expert` | **Estimated Time**: `45 - 60 mins`

## 🎯 Learning Objectives
By the end of Day 26, you will be able to:
- [ ] Understand and apply **infer keyword**
- [ ] Understand and apply **Pattern matching inside types**
- [ ] Understand and apply **Extracting return types**
- [ ] Understand and apply **Recursive Promise unwrapping**

---

## 📖 Deep Dive Theory & Concepts

### 1. Overview
Unleash the ultimate pattern-matching power: extract return types, parameter tuples, and unwrap Promises with infer.

### 2. Core Concepts
#### 2.1 infer keyword
In TypeScript, **infer keyword** plays a critical role in type safety and developer productivity.
```typescript
// Example demonstrating infer keyword
export const day26Concept1 = "infer keyword";
```

#### 2.2 Pattern matching inside types
In TypeScript, **Pattern matching inside types** plays a critical role in type safety and developer productivity.
```typescript
// Example demonstrating Pattern matching inside types
export const day26Concept2 = "Pattern matching inside types";
```

#### 2.3 Extracting return types
In TypeScript, **Extracting return types** plays a critical role in type safety and developer productivity.
```typescript
// Example demonstrating Extracting return types
export const day26Concept3 = "Extracting return types";
```

#### 2.4 Recursive Promise unwrapping
In TypeScript, **Recursive Promise unwrapping** plays a critical role in type safety and developer productivity.
```typescript
// Example demonstrating Recursive Promise unwrapping
export const day26Concept4 = "Recursive Promise unwrapping";
```


### 3. Common Pitfalls & Pro Tips
> [!TIP]
> Always verify type inferences and prefer strict constructs over permissive fallbacks.

> [!WARNING]
> Avoid bypassing type checks with `any`; use the appropriate type narrowing or generic constraint instead!

---

## 🏋️ Exercises

### 🟢 Level 1: Fundamentals
- **Task 1.1**: Implement MyReturnType<T> with infer
- Run `npm run day:26` to test your code!

### 🟡 Level 2: Real-World Application
- **Task 2.1**: Implement MyParameters<T> with infer
- Ensure edge cases and optional values are handled safely.

### 🔴 Level 3: Edge Cases & Mastery Challenge
- **Task 3.1**: Implement DeepAwaited<T> recursively unwrapping nested Promises
- Validate all requirements against the automated test suite!

---

## 🧪 Verification & Solutions
1. Practice in `exercise.ts`.
2. Run automated test: `npx tsx src/day-26-infer-keyword/exercise.ts`.
3. Check reference solution: `solution.ts`.
