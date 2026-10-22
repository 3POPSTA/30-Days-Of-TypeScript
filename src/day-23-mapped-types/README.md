# 🗓️ Day 23: Mapped Types & Modifier Flags

> **Difficulty**: `Expert` | **Estimated Time**: `45 - 60 mins`

## 🎯 Learning Objectives
By the end of Day 23, you will be able to:
- [ ] Understand and apply **Mapped types syntax**
- [ ] Understand and apply **-readonly modifier**
- [ ] Understand and apply **-? modifier**
- [ ] Understand and apply **Dynamic property mapping**

---

## 📖 Deep Dive Theory & Concepts

### 1. Overview
Transform object shapes dynamically using mapped types. Add or strip modifiers like readonly (-readonly) and optional (-?).

### 2. Core Concepts
#### 2.1 Mapped types syntax
In TypeScript, **Mapped types syntax** plays a critical role in type safety and developer productivity.
```typescript
// Example demonstrating Mapped types syntax
export const day23Concept1 = "Mapped types syntax";
```

#### 2.2 -readonly modifier
In TypeScript, **-readonly modifier** plays a critical role in type safety and developer productivity.
```typescript
// Example demonstrating -readonly modifier
export const day23Concept2 = "-readonly modifier";
```

#### 2.3 -? modifier
In TypeScript, **-? modifier** plays a critical role in type safety and developer productivity.
```typescript
// Example demonstrating -? modifier
export const day23Concept3 = "-? modifier";
```

#### 2.4 Dynamic property mapping
In TypeScript, **Dynamic property mapping** plays a critical role in type safety and developer productivity.
```typescript
// Example demonstrating Dynamic property mapping
export const day23Concept4 = "Dynamic property mapping";
```


### 3. Common Pitfalls & Pro Tips
> [!TIP]
> Always verify type inferences and prefer strict constructs over permissive fallbacks.

> [!WARNING]
> Avoid bypassing type checks with `any`; use the appropriate type narrowing or generic constraint instead!

---

## 🏋️ Exercises

### 🟢 Level 1: Fundamentals
- **Task 1.1**: Create Nullable<T> mapping all properties to T[K] | null
- Run `npm run day:23` to test your code!

### 🟡 Level 2: Real-World Application
- **Task 2.1**: Create Mutable<T> stripping readonly with -readonly
- Ensure edge cases and optional values are handled safely.

### 🔴 Level 3: Edge Cases & Mastery Challenge
- **Task 3.1**: Create RequiredFields<T> stripping ? with -?
- Validate all requirements against the automated test suite!

---

## 🧪 Verification & Solutions
1. Practice in `exercise.ts`.
2. Run automated test: `npx tsx src/day-23-mapped-types/exercise.ts`.
3. Check reference solution: `solution.ts`.
