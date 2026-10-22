# 🗓️ Day 13: Function Overloading & Explicit this

> **Difficulty**: `Intermediate` | **Estimated Time**: `45 - 60 mins`

## 🎯 Learning Objectives
By the end of Day 13, you will be able to:
- [ ] Understand and apply **Overload signatures**
- [ ] Understand and apply **Implementation signature**
- [ ] Understand and apply **Explicit this typing**
- [ ] Understand and apply **Polymorphic dispatch**

---

## 📖 Deep Dive Theory & Concepts

### 1. Overview
Create polymorphic functions that return different types depending on the arguments provided, and safely type this context.

### 2. Core Concepts
#### 2.1 Overload signatures
In TypeScript, **Overload signatures** plays a critical role in type safety and developer productivity.
```typescript
// Example demonstrating Overload signatures
export const day13Concept1 = "Overload signatures";
```

#### 2.2 Implementation signature
In TypeScript, **Implementation signature** plays a critical role in type safety and developer productivity.
```typescript
// Example demonstrating Implementation signature
export const day13Concept2 = "Implementation signature";
```

#### 2.3 Explicit this typing
In TypeScript, **Explicit this typing** plays a critical role in type safety and developer productivity.
```typescript
// Example demonstrating Explicit this typing
export const day13Concept3 = "Explicit this typing";
```

#### 2.4 Polymorphic dispatch
In TypeScript, **Polymorphic dispatch** plays a critical role in type safety and developer productivity.
```typescript
// Example demonstrating Polymorphic dispatch
export const day13Concept4 = "Polymorphic dispatch";
```


### 3. Common Pitfalls & Pro Tips
> [!TIP]
> Always verify type inferences and prefer strict constructs over permissive fallbacks.

> [!WARNING]
> Avoid bypassing type checks with `any`; use the appropriate type narrowing or generic constraint instead!

---

## 🏋️ Exercises

### 🟢 Level 1: Fundamentals
- **Task 1.1**: Currency formatting overload (number vs number[])
- Run `npm run day:13` to test your code!

### 🟡 Level 2: Real-World Application
- **Task 2.1**: Date parsing overload (number timestamp vs string vs Date)
- Ensure edge cases and optional values are handled safely.

### 🔴 Level 3: Edge Cases & Mastery Challenge
- **Task 3.1**: Custom event dispatcher with explicit this context
- Validate all requirements against the automated test suite!

---

## 🧪 Verification & Solutions
1. Practice in `exercise.ts`.
2. Run automated test: `npx tsx src/day-13-function-overloads/exercise.ts`.
3. Check reference solution: `solution.ts`.
