# 🗓️ Day 20: Generic Constraints & keyof Lookups

> **Difficulty**: `Advanced` | **Estimated Time**: `45 - 60 mins`

## 🎯 Learning Objectives
By the end of Day 20, you will be able to:
- [ ] Understand and apply **Generic constraints (<T extends Shape>)**
- [ ] Understand and apply **K extends keyof T**
- [ ] Understand and apply **Type-safe property access**
- [ ] Understand and apply **Multiple constraints**

---

## 📖 Deep Dive Theory & Concepts

### 1. Overview
Constrain type parameters with extends, require specific properties, and safely look up object keys with K extends keyof T.

### 2. Core Concepts
#### 2.1 Generic constraints (<T extends Shape>)
In TypeScript, **Generic constraints (<T extends Shape>)** plays a critical role in type safety and developer productivity.
```typescript
// Example demonstrating Generic constraints (<T extends Shape>)
export const day20Concept1 = "Generic constraints (<T extends Shape>)";
```

#### 2.2 K extends keyof T
In TypeScript, **K extends keyof T** plays a critical role in type safety and developer productivity.
```typescript
// Example demonstrating K extends keyof T
export const day20Concept2 = "K extends keyof T";
```

#### 2.3 Type-safe property access
In TypeScript, **Type-safe property access** plays a critical role in type safety and developer productivity.
```typescript
// Example demonstrating Type-safe property access
export const day20Concept3 = "Type-safe property access";
```

#### 2.4 Multiple constraints
In TypeScript, **Multiple constraints** plays a critical role in type safety and developer productivity.
```typescript
// Example demonstrating Multiple constraints
export const day20Concept4 = "Multiple constraints";
```


### 3. Common Pitfalls & Pro Tips
> [!TIP]
> Always verify type inferences and prefer strict constructs over permissive fallbacks.

> [!WARNING]
> Avoid bypassing type checks with `any`; use the appropriate type narrowing or generic constraint instead!

---

## 🏋️ Exercises

### 🟢 Level 1: Fundamentals
- **Task 1.1**: getLength<T extends { length: number }> function
- Run `npm run day:20` to test your code!

### 🟡 Level 2: Real-World Application
- **Task 2.1**: Type-safe getProperty<T, K extends keyof T>
- Ensure edge cases and optional values are handled safely.

### 🔴 Level 3: Edge Cases & Mastery Challenge
- **Task 3.1**: mergeEntities<T extends HasId, U extends HasId>
- Validate all requirements against the automated test suite!

---

## 🧪 Verification & Solutions
1. Practice in `exercise.ts`.
2. Run automated test: `npx tsx src/day-20-generics-constraints/exercise.ts`.
3. Check reference solution: `solution.ts`.
