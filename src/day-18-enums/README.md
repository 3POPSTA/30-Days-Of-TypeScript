# 🗓️ Day 18: Enums vs as const Objects

> **Difficulty**: `Intermediate` | **Estimated Time**: `45 - 60 mins`

## 🎯 Learning Objectives
By the end of Day 18, you will be able to:
- [ ] Understand and apply **Numeric enums & reverse mapping**
- [ ] Understand and apply **String enums**
- [ ] Understand and apply **const enum inlining**
- [ ] Understand and apply **as const objects & value unions**

---

## 📖 Deep Dive Theory & Concepts

### 1. Overview
Understand numeric enums, reverse mappings, string enums, const enums, and why modern TS prefers as const objects.

### 2. Core Concepts
#### 2.1 Numeric enums & reverse mapping
In TypeScript, **Numeric enums & reverse mapping** plays a critical role in type safety and developer productivity.
```typescript
// Example demonstrating Numeric enums & reverse mapping
export const day18Concept1 = "Numeric enums & reverse mapping";
```

#### 2.2 String enums
In TypeScript, **String enums** plays a critical role in type safety and developer productivity.
```typescript
// Example demonstrating String enums
export const day18Concept2 = "String enums";
```

#### 2.3 const enum inlining
In TypeScript, **const enum inlining** plays a critical role in type safety and developer productivity.
```typescript
// Example demonstrating const enum inlining
export const day18Concept3 = "const enum inlining";
```

#### 2.4 as const objects & value unions
In TypeScript, **as const objects & value unions** plays a critical role in type safety and developer productivity.
```typescript
// Example demonstrating as const objects & value unions
export const day18Concept4 = "as const objects & value unions";
```


### 3. Common Pitfalls & Pro Tips
> [!TIP]
> Always verify type inferences and prefer strict constructs over permissive fallbacks.

> [!WARNING]
> Avoid bypassing type checks with `any`; use the appropriate type narrowing or generic constraint instead!

---

## 🏋️ Exercises

### 🟢 Level 1: Fundamentals
- **Task 1.1**: LogLevel string enum with formatter
- Run `npm run day:18` to test your code!

### 🟡 Level 2: Real-World Application
- **Task 2.1**: Numeric HttpStatus enum with reverse mapping lookup
- Ensure edge cases and optional values are handled safely.

### 🔴 Level 3: Edge Cases & Mastery Challenge
- **Task 3.1**: Modern Role object as const with union type derivation
- Validate all requirements against the automated test suite!

---

## 🧪 Verification & Solutions
1. Practice in `exercise.ts`.
2. Run automated test: `npx tsx src/day-18-enums/exercise.ts`.
3. Check reference solution: `solution.ts`.
