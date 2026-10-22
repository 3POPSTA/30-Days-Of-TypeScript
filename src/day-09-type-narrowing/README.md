# 🗓️ Day 09: Type Narrowing & Built-in Guards

> **Difficulty**: `Intermediate` | **Estimated Time**: `45 - 60 mins`

## 🎯 Learning Objectives
By the end of Day 09, you will be able to:
- [ ] Understand and apply **typeof guards**
- [ ] Understand and apply **instanceof guards**
- [ ] Understand and apply **in operator**
- [ ] Understand and apply **Equality narrowing**

---

## 📖 Deep Dive Theory & Concepts

### 1. Overview
Transform broad union types into specific concrete types using typeof, instanceof, in operator, and equality guards.

### 2. Core Concepts
#### 2.1 typeof guards
In TypeScript, **typeof guards** plays a critical role in type safety and developer productivity.
```typescript
// Example demonstrating typeof guards
export const day09Concept1 = "typeof guards";
```

#### 2.2 instanceof guards
In TypeScript, **instanceof guards** plays a critical role in type safety and developer productivity.
```typescript
// Example demonstrating instanceof guards
export const day09Concept2 = "instanceof guards";
```

#### 2.3 in operator
In TypeScript, **in operator** plays a critical role in type safety and developer productivity.
```typescript
// Example demonstrating in operator
export const day09Concept3 = "in operator";
```

#### 2.4 Equality narrowing
In TypeScript, **Equality narrowing** plays a critical role in type safety and developer productivity.
```typescript
// Example demonstrating Equality narrowing
export const day09Concept4 = "Equality narrowing";
```


### 3. Common Pitfalls & Pro Tips
> [!TIP]
> Always verify type inferences and prefer strict constructs over permissive fallbacks.

> [!WARNING]
> Avoid bypassing type checks with `any`; use the appropriate type narrowing or generic constraint instead!

---

## 🏋️ Exercises

### 🟢 Level 1: Fundamentals
- **Task 1.1**: Narrow string | number to formatted string
- Run `npm run day:09` to test your code!

### 🟡 Level 2: Real-World Application
- **Task 2.1**: Differentiate Date instances from ISO strings
- Ensure edge cases and optional values are handled safely.

### 🔴 Level 3: Edge Cases & Mastery Challenge
- **Task 3.1**: Narrow Fish | Bird using the in operator
- Validate all requirements against the automated test suite!

---

## 🧪 Verification & Solutions
1. Practice in `exercise.ts`.
2. Run automated test: `npx tsx src/day-09-type-narrowing/exercise.ts`.
3. Check reference solution: `solution.ts`.
