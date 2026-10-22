# 🗓️ Day 03: Special Types: any, unknown, never, void

> **Difficulty**: `Beginner` | **Estimated Time**: `45 - 60 mins`

## 🎯 Learning Objectives
By the end of Day 03, you will be able to:
- [ ] Understand and apply **any vs unknown**
- [ ] Understand and apply **void return type**
- [ ] Understand and apply **never for unreachable code**
- [ ] Understand and apply **strictNullChecks**

---

## 📖 Deep Dive Theory & Concepts

### 1. Overview
Understand the critical differences between any, unknown, void, and never — and why any is banned in modern codebases.

### 2. Core Concepts
#### 2.1 any vs unknown
In TypeScript, **any vs unknown** plays a critical role in type safety and developer productivity.
```typescript
// Example demonstrating any vs unknown
export const day03Concept1 = "any vs unknown";
```

#### 2.2 void return type
In TypeScript, **void return type** plays a critical role in type safety and developer productivity.
```typescript
// Example demonstrating void return type
export const day03Concept2 = "void return type";
```

#### 2.3 never for unreachable code
In TypeScript, **never for unreachable code** plays a critical role in type safety and developer productivity.
```typescript
// Example demonstrating never for unreachable code
export const day03Concept3 = "never for unreachable code";
```

#### 2.4 strictNullChecks
In TypeScript, **strictNullChecks** plays a critical role in type safety and developer productivity.
```typescript
// Example demonstrating strictNullChecks
export const day03Concept4 = "strictNullChecks";
```


### 3. Common Pitfalls & Pro Tips
> [!TIP]
> Always verify type inferences and prefer strict constructs over permissive fallbacks.

> [!WARNING]
> Avoid bypassing type checks with `any`; use the appropriate type narrowing or generic constraint instead!

---

## 🏋️ Exercises

### 🟢 Level 1: Fundamentals
- **Task 1.1**: Safely narrow unknown using typeof
- Run `npm run day:03` to test your code!

### 🟡 Level 2: Real-World Application
- **Task 2.1**: Implement safe JSON parser returning unknown
- Ensure edge cases and optional values are handled safely.

### 🔴 Level 3: Edge Cases & Mastery Challenge
- **Task 3.1**: Unreachable exhaustiveness check function returning never
- Validate all requirements against the automated test suite!

---

## 🧪 Verification & Solutions
1. Practice in `exercise.ts`.
2. Run automated test: `npx tsx src/day-03-special-types/exercise.ts`.
3. Check reference solution: `solution.ts`.
