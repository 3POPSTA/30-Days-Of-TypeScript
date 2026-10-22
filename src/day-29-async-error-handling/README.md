# 🗓️ Day 29: Asynchronous TS & Safe Error Handling

> **Difficulty**: `Advanced` | **Estimated Time**: `45 - 60 mins`

## 🎯 Learning Objectives
By the end of Day 29, you will be able to:
- [ ] Understand and apply **Promise<T> and Promise.allSettled**
- [ ] Understand and apply **catch (error: unknown)**
- [ ] Understand and apply **Custom Error hierarchies**
- [ ] Understand and apply **Functional Result<T, E> pattern**

---

## 📖 Deep Dive Theory & Concepts

### 1. Overview
Type Promises, safely handle unknown errors in catch blocks, build custom Error hierarchies, and use the functional Result pattern.

### 2. Core Concepts
#### 2.1 Promise<T> and Promise.allSettled
In TypeScript, **Promise<T> and Promise.allSettled** plays a critical role in type safety and developer productivity.
```typescript
// Example demonstrating Promise<T> and Promise.allSettled
export const day29Concept1 = "Promise<T> and Promise.allSettled";
```

#### 2.2 catch (error: unknown)
In TypeScript, **catch (error: unknown)** plays a critical role in type safety and developer productivity.
```typescript
// Example demonstrating catch (error: unknown)
export const day29Concept2 = "catch (error: unknown)";
```

#### 2.3 Custom Error hierarchies
In TypeScript, **Custom Error hierarchies** plays a critical role in type safety and developer productivity.
```typescript
// Example demonstrating Custom Error hierarchies
export const day29Concept3 = "Custom Error hierarchies";
```

#### 2.4 Functional Result<T, E> pattern
In TypeScript, **Functional Result<T, E> pattern** plays a critical role in type safety and developer productivity.
```typescript
// Example demonstrating Functional Result<T, E> pattern
export const day29Concept4 = "Functional Result<T, E> pattern";
```


### 3. Common Pitfalls & Pro Tips
> [!TIP]
> Always verify type inferences and prefer strict constructs over permissive fallbacks.

> [!WARNING]
> Avoid bypassing type checks with `any`; use the appropriate type narrowing or generic constraint instead!

---

## 🏋️ Exercises

### 🟢 Level 1: Fundamentals
- **Task 1.1**: Strongly-typed async API fetcher
- Run `npm run day:29` to test your code!

### 🟡 Level 2: Real-World Application
- **Task 2.1**: Custom HttpError class with safe error unwrapper
- Ensure edge cases and optional values are handled safely.

### 🔴 Level 3: Edge Cases & Mastery Challenge
- **Task 3.1**: Build safeAsync<T> Go-style tuple error handler
- Validate all requirements against the automated test suite!

---

## 🧪 Verification & Solutions
1. Practice in `exercise.ts`.
2. Run automated test: `npx tsx src/day-29-async-error-handling/exercise.ts`.
3. Check reference solution: `solution.ts`.
