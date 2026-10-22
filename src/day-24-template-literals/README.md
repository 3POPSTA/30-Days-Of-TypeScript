# 🗓️ Day 24: Template Literal Types & Key Remapping

> **Difficulty**: `Expert` | **Estimated Time**: `45 - 60 mins`

## 🎯 Learning Objectives
By the end of Day 24, you will be able to:
- [ ] Understand and apply **Template literal types (`${A}_${B}`)**
- [ ] Understand and apply **Key remapping with as**
- [ ] Understand and apply **Capitalize, Uppercase intrinsics**
- [ ] Understand and apply **Event name typing**

---

## 📖 Deep Dive Theory & Concepts

### 1. Overview
Compose string types at compile time with template literals, and remap object keys using the as clause and string intrinsics.

### 2. Core Concepts
#### 2.1 Template literal types (`${A}_${B}`)
In TypeScript, **Template literal types (`${A}_${B}`)** plays a critical role in type safety and developer productivity.
```typescript
// Example demonstrating Template literal types (`${A}_${B}`)
export const day24Concept1 = "Template literal types (`${A}_${B}`)";
```

#### 2.2 Key remapping with as
In TypeScript, **Key remapping with as** plays a critical role in type safety and developer productivity.
```typescript
// Example demonstrating Key remapping with as
export const day24Concept2 = "Key remapping with as";
```

#### 2.3 Capitalize, Uppercase intrinsics
In TypeScript, **Capitalize, Uppercase intrinsics** plays a critical role in type safety and developer productivity.
```typescript
// Example demonstrating Capitalize, Uppercase intrinsics
export const day24Concept3 = "Capitalize, Uppercase intrinsics";
```

#### 2.4 Event name typing
In TypeScript, **Event name typing** plays a critical role in type safety and developer productivity.
```typescript
// Example demonstrating Event name typing
export const day24Concept4 = "Event name typing";
```


### 3. Common Pitfalls & Pro Tips
> [!TIP]
> Always verify type inferences and prefer strict constructs over permissive fallbacks.

> [!WARNING]
> Avoid bypassing type checks with `any`; use the appropriate type narrowing or generic constraint instead!

---

## 🏋️ Exercises

### 🟢 Level 1: Fundamentals
- **Task 1.1**: Generate CSS utility classes (`btn-${variant}`)
- Run `npm run day:24` to test your code!

### 🟡 Level 2: Real-World Application
- **Task 2.1**: Remap keys to getter methods (`get${Capitalize<K>}`)
- Ensure edge cases and optional values are handled safely.

### 🔴 Level 3: Edge Cases & Mastery Challenge
- **Task 3.1**: Typed Event Emitter system with onEvent handlers
- Validate all requirements against the automated test suite!

---

## 🧪 Verification & Solutions
1. Practice in `exercise.ts`.
2. Run automated test: `npx tsx src/day-24-template-literals/exercise.ts`.
3. Check reference solution: `solution.ts`.
