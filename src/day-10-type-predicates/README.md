# 🗓️ Day 10: Custom Type Predicates & Assertion Functions

> **Difficulty**: `Intermediate` | **Estimated Time**: `45 - 60 mins`

## 🎯 Learning Objectives
By the end of Day 10, you will be able to:
- [ ] Understand and apply **User-defined type guards**
- [ ] Understand and apply **value is Type syntax**
- [ ] Understand and apply **asserts condition**
- [ ] Understand and apply **asserts val is Type**

---

## 📖 Deep Dive Theory & Concepts

### 1. Overview
Write user-defined type guards (param is Type) and assertion functions (asserts condition) that narrow types across scopes.

### 2. Core Concepts
#### 2.1 User-defined type guards
In TypeScript, **User-defined type guards** plays a critical role in type safety and developer productivity.
```typescript
// Example demonstrating User-defined type guards
export const day10Concept1 = "User-defined type guards";
```

#### 2.2 value is Type syntax
In TypeScript, **value is Type syntax** plays a critical role in type safety and developer productivity.
```typescript
// Example demonstrating value is Type syntax
export const day10Concept2 = "value is Type syntax";
```

#### 2.3 asserts condition
In TypeScript, **asserts condition** plays a critical role in type safety and developer productivity.
```typescript
// Example demonstrating asserts condition
export const day10Concept3 = "asserts condition";
```

#### 2.4 asserts val is Type
In TypeScript, **asserts val is Type** plays a critical role in type safety and developer productivity.
```typescript
// Example demonstrating asserts val is Type
export const day10Concept4 = "asserts val is Type";
```


### 3. Common Pitfalls & Pro Tips
> [!TIP]
> Always verify type inferences and prefer strict constructs over permissive fallbacks.

> [!WARNING]
> Avoid bypassing type checks with `any`; use the appropriate type narrowing or generic constraint instead!

---

## 🏋️ Exercises

### 🟢 Level 1: Fundamentals
- **Task 1.1**: Implement isString and isNumber predicates
- Run `npm run day:10` to test your code!

### 🟡 Level 2: Real-World Application
- **Task 2.1**: Implement isNonEmptyArray<T> predicate
- Ensure edge cases and optional values are handled safely.

### 🔴 Level 3: Edge Cases & Mastery Challenge
- **Task 3.1**: Assertion function assertValidUser throwing errors on invalid shapes
- Validate all requirements against the automated test suite!

---

## 🧪 Verification & Solutions
1. Practice in `exercise.ts`.
2. Run automated test: `npx tsx src/day-10-type-predicates/exercise.ts`.
3. Check reference solution: `solution.ts`.
