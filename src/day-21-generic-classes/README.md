# 🗓️ Day 21: Generic Classes & In-Memory Cache (Milestone)

> **Difficulty**: `Advanced` | **Estimated Time**: `45 - 60 mins`

## 🎯 Learning Objectives
By the end of Day 21, you will be able to:
- [ ] Understand and apply **Generic classes**
- [ ] Understand and apply **Stack<T> and Queue<T>**
- [ ] Understand and apply **Type-safe Map wrappers**
- [ ] Understand and apply **TTL expiration logic**

---

## 📖 Deep Dive Theory & Concepts

### 1. Overview
Build real generic data structures. Milestone project: create a production-grade, type-safe In-Memory Cache with TTL.

### 2. Core Concepts
#### 2.1 Generic classes
In TypeScript, **Generic classes** plays a critical role in type safety and developer productivity.
```typescript
// Example demonstrating Generic classes
export const day21Concept1 = "Generic classes";
```

#### 2.2 Stack<T> and Queue<T>
In TypeScript, **Stack<T> and Queue<T>** plays a critical role in type safety and developer productivity.
```typescript
// Example demonstrating Stack<T> and Queue<T>
export const day21Concept2 = "Stack<T> and Queue<T>";
```

#### 2.3 Type-safe Map wrappers
In TypeScript, **Type-safe Map wrappers** plays a critical role in type safety and developer productivity.
```typescript
// Example demonstrating Type-safe Map wrappers
export const day21Concept3 = "Type-safe Map wrappers";
```

#### 2.4 TTL expiration logic
In TypeScript, **TTL expiration logic** plays a critical role in type safety and developer productivity.
```typescript
// Example demonstrating TTL expiration logic
export const day21Concept4 = "TTL expiration logic";
```


### 3. Common Pitfalls & Pro Tips
> [!TIP]
> Always verify type inferences and prefer strict constructs over permissive fallbacks.

> [!WARNING]
> Avoid bypassing type checks with `any`; use the appropriate type narrowing or generic constraint instead!

---

## 🏋️ Exercises

### 🟢 Level 1: Fundamentals
- **Task 1.1**: Implement generic Stack<T>
- Run `npm run day:21` to test your code!

### 🟡 Level 2: Real-World Application
- **Task 2.1**: Implement generic Queue<T>
- Ensure edge cases and optional values are handled safely.

### 🔴 Level 3: Edge Cases & Mastery Challenge
- **Task 3.1**: Build InMemoryCache<K, V> with TTL expiration
- Validate all requirements against the automated test suite!

---

## 🧪 Verification & Solutions
1. Practice in `exercise.ts`.
2. Run automated test: `npx tsx src/day-21-generic-classes/exercise.ts`.
3. Check reference solution: `solution.ts`.
