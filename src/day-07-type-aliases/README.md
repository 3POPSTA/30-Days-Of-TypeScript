# 🗓️ Day 07: Type Aliases & Intersection Types

> **Difficulty**: `Beginner` | **Estimated Time**: `45 - 60 mins`

## 🎯 Learning Objectives
By the end of Day 07, you will be able to:
- [ ] Understand and apply **type keyword**
- [ ] Understand and apply **Intersection types (&)**
- [ ] Understand and apply **Index signatures**
- [ ] Understand and apply **Record<string, unknown>**

---

## 📖 Deep Dive Theory & Concepts

### 1. Overview
Create custom reusable types, compose shapes with intersections (&), and build dynamic dictionaries with index signatures.

### 2. Core Concepts
#### 2.1 type keyword
In TypeScript, **type keyword** plays a critical role in type safety and developer productivity.
```typescript
// Example demonstrating type keyword
export const day07Concept1 = "type keyword";
```

#### 2.2 Intersection types (&)
In TypeScript, **Intersection types (&)** plays a critical role in type safety and developer productivity.
```typescript
// Example demonstrating Intersection types (&)
export const day07Concept2 = "Intersection types (&)";
```

#### 2.3 Index signatures
In TypeScript, **Index signatures** plays a critical role in type safety and developer productivity.
```typescript
// Example demonstrating Index signatures
export const day07Concept3 = "Index signatures";
```

#### 2.4 Record<string, unknown>
In TypeScript, **Record<string, unknown>** plays a critical role in type safety and developer productivity.
```typescript
// Example demonstrating Record<string, unknown>
export const day07Concept4 = "Record<string, unknown>";
```


### 3. Common Pitfalls & Pro Tips
> [!TIP]
> Always verify type inferences and prefer strict constructs over permissive fallbacks.

> [!WARNING]
> Avoid bypassing type checks with `any`; use the appropriate type narrowing or generic constraint instead!

---

## 🏋️ Exercises

### 🟢 Level 1: Fundamentals
- **Task 1.1**: Alias UUID and Timestamp primitives
- Run `npm run day:07` to test your code!

### 🟡 Level 2: Real-World Application
- **Task 2.1**: Compose UserEntity from Identifiable & Auditable & Profile
- Ensure edge cases and optional values are handled safely.

### 🔴 Level 3: Edge Cases & Mastery Challenge
- **Task 3.1**: Dynamic cache registry using index signatures
- Validate all requirements against the automated test suite!

---

## 🧪 Verification & Solutions
1. Practice in `exercise.ts`.
2. Run automated test: `npx tsx src/day-07-type-aliases/exercise.ts`.
3. Check reference solution: `solution.ts`.
