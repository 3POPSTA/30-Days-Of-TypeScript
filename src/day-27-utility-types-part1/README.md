# 🗓️ Day 27: Utility Types Masterclass (Part 1)

> **Difficulty**: `Advanced` | **Estimated Time**: `45 - 60 mins`

## 🎯 Learning Objectives
By the end of Day 27, you will be able to:
- [ ] Understand and apply **Partial<T>**
- [ ] Understand and apply **Required<T>**
- [ ] Understand and apply **Readonly<T>**
- [ ] Understand and apply **Record<K, T>**
- [ ] Understand and apply **Pick<T, K>**
- [ ] Understand and apply **Omit<T, K>**
- [ ] Understand and apply **Under-the-hood re-creations**

---

## 📖 Deep Dive Theory & Concepts

### 1. Overview
Master and re-create TypeScript's built-in object utilities: Partial, Required, Readonly, Record, Pick, and Omit.

### 2. Core Concepts
#### 2.1 Partial<T>
In TypeScript, **Partial<T>** plays a critical role in type safety and developer productivity.
```typescript
// Example demonstrating Partial<T>
export const day27Concept1 = "Partial<T>";
```

#### 2.2 Required<T>
In TypeScript, **Required<T>** plays a critical role in type safety and developer productivity.
```typescript
// Example demonstrating Required<T>
export const day27Concept2 = "Required<T>";
```

#### 2.3 Readonly<T>
In TypeScript, **Readonly<T>** plays a critical role in type safety and developer productivity.
```typescript
// Example demonstrating Readonly<T>
export const day27Concept3 = "Readonly<T>";
```

#### 2.4 Record<K, T>
In TypeScript, **Record<K, T>** plays a critical role in type safety and developer productivity.
```typescript
// Example demonstrating Record<K, T>
export const day27Concept4 = "Record<K, T>";
```

#### 2.5 Pick<T, K>
In TypeScript, **Pick<T, K>** plays a critical role in type safety and developer productivity.
```typescript
// Example demonstrating Pick<T, K>
export const day27Concept5 = "Pick<T, K>";
```

#### 2.6 Omit<T, K>
In TypeScript, **Omit<T, K>** plays a critical role in type safety and developer productivity.
```typescript
// Example demonstrating Omit<T, K>
export const day27Concept6 = "Omit<T, K>";
```

#### 2.7 Under-the-hood re-creations
In TypeScript, **Under-the-hood re-creations** plays a critical role in type safety and developer productivity.
```typescript
// Example demonstrating Under-the-hood re-creations
export const day27Concept7 = "Under-the-hood re-creations";
```


### 3. Common Pitfalls & Pro Tips
> [!TIP]
> Always verify type inferences and prefer strict constructs over permissive fallbacks.

> [!WARNING]
> Avoid bypassing type checks with `any`; use the appropriate type narrowing or generic constraint instead!

---

## 🏋️ Exercises

### 🟢 Level 1: Fundamentals
- **Task 1.1**: Model partial user updates with Partial
- Run `npm run day:27` to test your code!

### 🟡 Level 2: Real-World Application
- **Task 2.1**: Dictionary lookup table with Record
- Ensure edge cases and optional values are handled safely.

### 🔴 Level 3: Edge Cases & Mastery Challenge
- **Task 3.1**: Implement MyOmit<T, K> from scratch
- Validate all requirements against the automated test suite!

---

## 🧪 Verification & Solutions
1. Practice in `exercise.ts`.
2. Run automated test: `npx tsx src/day-27-utility-types-part1/exercise.ts`.
3. Check reference solution: `solution.ts`.
