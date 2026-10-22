# 🗓️ Day 08: Union Types & Literal Types

> **Difficulty**: `Intermediate` | **Estimated Time**: `45 - 60 mins`

## 🎯 Learning Objectives
By the end of Day 08, you will be able to:
- [ ] Understand and apply **Union types (|)**
- [ ] Understand and apply **String literal types**
- [ ] Understand and apply **Numeric literals**
- [ ] Understand and apply **Type widening (let vs const)**

---

## 📖 Deep Dive Theory & Concepts

### 1. Overview
Model multi-state values with unions (|), create finite sets of allowed string/number literals, and master type widening.

### 2. Core Concepts
#### 2.1 Union types (|)
In TypeScript, **Union types (|)** plays a critical role in type safety and developer productivity.
```typescript
// Example demonstrating Union types (|)
export const day08Concept1 = "Union types (|)";
```

#### 2.2 String literal types
In TypeScript, **String literal types** plays a critical role in type safety and developer productivity.
```typescript
// Example demonstrating String literal types
export const day08Concept2 = "String literal types";
```

#### 2.3 Numeric literals
In TypeScript, **Numeric literals** plays a critical role in type safety and developer productivity.
```typescript
// Example demonstrating Numeric literals
export const day08Concept3 = "Numeric literals";
```

#### 2.4 Type widening (let vs const)
In TypeScript, **Type widening (let vs const)** plays a critical role in type safety and developer productivity.
```typescript
// Example demonstrating Type widening (let vs const)
export const day08Concept4 = "Type widening (let vs const)";
```


### 3. Common Pitfalls & Pro Tips
> [!TIP]
> Always verify type inferences and prefer strict constructs over permissive fallbacks.

> [!WARNING]
> Avoid bypassing type checks with `any`; use the appropriate type narrowing or generic constraint instead!

---

## 🏋️ Exercises

### 🟢 Level 1: Fundamentals
- **Task 1.1**: Connection status union ('connecting' | 'open' | 'closed')
- Run `npm run day:08` to test your code!

### 🟡 Level 2: Real-World Application
- **Task 2.1**: HTTP method validator restricting methods
- Ensure edge cases and optional values are handled safely.

### 🔴 Level 3: Edge Cases & Mastery Challenge
- **Task 3.1**: Dice roll probability simulator (1 | 2 | 3 | 4 | 5 | 6)
- Validate all requirements against the automated test suite!

---

## 🧪 Verification & Solutions
1. Practice in `exercise.ts`.
2. Run automated test: `npx tsx src/day-08-unions-literals/exercise.ts`.
3. Check reference solution: `solution.ts`.
