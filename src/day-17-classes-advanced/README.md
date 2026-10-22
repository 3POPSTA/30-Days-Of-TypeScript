# 🗓️ Day 17: Abstract Classes, override & Singletons

> **Difficulty**: `Intermediate` | **Estimated Time**: `45 - 60 mins`

## 🎯 Learning Objectives
By the end of Day 17, you will be able to:
- [ ] Understand and apply **abstract class & methods**
- [ ] Understand and apply **override keyword**
- [ ] Understand and apply **Static members**
- [ ] Understand and apply **Singleton pattern**

---

## 📖 Deep Dive Theory & Concepts

### 1. Overview
Build extensible class hierarchies with abstract classes, enforce intentional subclassing with override, and implement static singletons.

### 2. Core Concepts
#### 2.1 abstract class & methods
In TypeScript, **abstract class & methods** plays a critical role in type safety and developer productivity.
```typescript
// Example demonstrating abstract class & methods
export const day17Concept1 = "abstract class & methods";
```

#### 2.2 override keyword
In TypeScript, **override keyword** plays a critical role in type safety and developer productivity.
```typescript
// Example demonstrating override keyword
export const day17Concept2 = "override keyword";
```

#### 2.3 Static members
In TypeScript, **Static members** plays a critical role in type safety and developer productivity.
```typescript
// Example demonstrating Static members
export const day17Concept3 = "Static members";
```

#### 2.4 Singleton pattern
In TypeScript, **Singleton pattern** plays a critical role in type safety and developer productivity.
```typescript
// Example demonstrating Singleton pattern
export const day17Concept4 = "Singleton pattern";
```


### 3. Common Pitfalls & Pro Tips
> [!TIP]
> Always verify type inferences and prefer strict constructs over permissive fallbacks.

> [!WARNING]
> Avoid bypassing type checks with `any`; use the appropriate type narrowing or generic constraint instead!

---

## 🏋️ Exercises

### 🟢 Level 1: Fundamentals
- **Task 1.1**: Abstract PaymentGateway class
- Run `npm run day:17` to test your code!

### 🟡 Level 2: Real-World Application
- **Task 2.1**: StripeGateway and PayPalGateway with override
- Ensure edge cases and optional values are handled safely.

### 🔴 Level 3: Edge Cases & Mastery Challenge
- **Task 3.1**: AppConfigRegistry static singleton class
- Validate all requirements against the automated test suite!

---

## 🧪 Verification & Solutions
1. Practice in `exercise.ts`.
2. Run automated test: `npx tsx src/day-17-classes-advanced/exercise.ts`.
3. Check reference solution: `solution.ts`.
