# 30 Days Of TypeScript: Day 21 - Generic Classes & Data Structures

<div align="center">
  <p>[<< Day 20](../20_Day_Generics_constraints/20_day_generics_constraints.md) | [30 Days of TypeScript](../readMe.md) | [Day 22 >>](../22_Day_Keyof_and_indexed_access/22_day_keyof_and_indexed_access.md)</p>
</div>

---

- [30 Days Of TypeScript: Day 21 - Generic Classes & Data Structures](#30-days-of-typescript-day-21---generic-classes-data-structures)
  - [📖 Overview](#-overview)
  - [🎯 Learning Objectives](#-learning-objectives)
  - [💡 Core Concepts & Deep Dive](#-core-concepts--deep-dive)
    - [1. Generic Classes](#1-generic-classes)
    - [2. Production In-Memory Cache](#2-production-in-memory-cache)
  - [💻 Runnable Lesson Demonstration](#-runnable-lesson-demonstration)
  - [⚠️ Common Pitfalls & Pro Tips](#️-common-pitfalls--pro-tips)
  - [🏋️ Day 21: Exercises](#️-day-21-exercises)
    - [Exercise: Level 1](#exercise-level-1)
    - [Exercise: Level 2](#exercise-level-2)
    - [Exercise: Level 3](#exercise-level-3)
  - [🎉 Congratulations](#-congratulations)

---

## 📖 Overview

Milestone: Build generic data structures and an in-memory Cache with TTL expiration using generic classes.

---

## 🎯 Learning Objectives

By the end of today, you will be able to:
- [ ] Master **Generic Classes**
- [ ] Master **Production In-Memory Cache**
- [ ] Complete all Level 1, Level 2, and Level 3 exercises with automated tests passing (`npm test`).

---

## 💡 Core Concepts & Deep Dive


### 1. Generic Classes

Classes parameterized with types, providing type safety across instance fields and methods.


### 2. Production In-Memory Cache

Store arbitrary key-value pairs with optional TTL timestamp expiration.


---

## 💻 Runnable Lesson Demonstration

Execute today's live code in your terminal:
```bash
npm run day:21
```

Here is the source code for today's lesson:
```typescript
// Day 21: Generic Classes & Data Structures
class MemoryCache<K, V> {
  private store = new Map<K, { value: V; expiresAt?: number }>();

  set(key: K, value: V, ttlMs?: number): void {
    const expiresAt = ttlMs ? Date.now() + ttlMs : undefined;
    this.store.set(key, { value, expiresAt });
  }

  get(key: K): V | undefined {
    const entry = this.store.get(key);
    if (!entry) return undefined;
    if (entry.expiresAt && Date.now() > entry.expiresAt) {
      this.store.delete(key);
      return undefined;
    }
    return entry.value;
  }
}

const cache = new MemoryCache<string, number>();
cache.set("count", 42);
console.log("Cached count:", cache.get("count"));

```

---

## ⚠️ Common Pitfalls & Pro Tips

> [!TIP]
> **Pro Tip**: In TypeScript, the compiler is your pair-programmer. Pay close attention to compiler diagnostic messages—they describe the exact shape mismatch.

> [!WARNING]
> **Common Pitfall**: Do not fall into the trap of using `any` to silence compiler warnings. Use `unknown` with type guards or write proper generic constraints!

---

## 🏋️ Day 21: Exercises

### Exercise: Level 1
1. Generic Queue<T> data structure with enqueue, dequeue, size

### Exercise: Level 2
1. Generic Pair<K, V> container with swap() returning Pair<V, K>

### Exercise: Level 3
1. Generic MemoryCache<K, V> with set, get, and has checking TTL

---

## 🧪 Verifying Your Work
Run the automated test for Day 21:
```bash
npx tsx 21_Day_Generic_classes/exercise.ts
```

Or verify all 30 days:
```bash
npm test
```

---

## 🎉 Congratulations

🌕 **You are amazing!** You have conquered **Day 21** of 30 Days of TypeScript. Keep the momentum going!

<div align="center">
  <p>[<< Day 20](../20_Day_Generics_constraints/20_day_generics_constraints.md) | [30 Days of TypeScript](../readMe.md) | [Day 22 >>](../22_Day_Keyof_and_indexed_access/22_day_keyof_and_indexed_access.md)</p>
</div>
