# 30 Days Of TypeScript: Day 17 - Abstract Classes, override & Polymorphism

<div align="center">
  <p><a href="../16_Day_Classes/16_day_classes.md">&lt;&lt; Day 16</a> | <a href="../README.md">30 Days of TypeScript</a> | <a href="../18_Day_Enums/18_day_enums.md">Day 18 &gt;&gt;</a></p>
</div>

---

- [30 Days Of TypeScript: Day 17 - Abstract Classes, override & Polymorphism](#30-days-of-typescript-day-17---abstract-classes-override-polymorphism)
  - [📖 Overview](#-overview)
  - [🎯 Learning Objectives](#-learning-objectives)
  - [💡 Core Concepts & Deep Dive](#-core-concepts--deep-dive)
    - [1. Abstract Classes](#1-abstract-classes)
    - [2. The override Keyword](#2-the-override-keyword)
  - [💻 Runnable Lesson Demonstration](#-runnable-lesson-demonstration)
  - [⚠️ Common Pitfalls & Pro Tips](#️-common-pitfalls--pro-tips)
  - [🏋️ Day 17: Exercises](#️-day-17-exercises)
    - [Exercise: Level 1](#exercise-level-1)
    - [Exercise: Level 2](#exercise-level-2)
    - [Exercise: Level 3](#exercise-level-3)
  - [🎉 Congratulations](#-congratulations)

---

## 📖 Overview

Build extensible class hierarchies with abstract classes, enforce subclass contracts, and use the 'override' keyword.

---

## 🎯 Learning Objectives

By the end of today, you will be able to:
- [ ] Master **Abstract Classes**
- [ ] Master **The override Keyword**
- [ ] Complete all Level 1, Level 2, and Level 3 exercises with automated tests passing (`npm test`).

---

## 💡 Core Concepts & Deep Dive


### 1. Abstract Classes

Cannot be instantiated directly. They serve as base classes that combine concrete methods with abstract signatures.


### 2. The override Keyword

Ensures that a subclass method really overrides a base class method, guarding against refactoring accidents.


---

## 💻 Runnable Lesson Demonstration

Execute today's live code in your terminal:
```bash
npm run day:17
```

Here is the source code for today's lesson:
```typescript
// Day 17: Abstract Classes, override & Polymorphism
abstract class PaymentProcessor {
  constructor(public readonly currency: string) {}

  abstract processPayment(amount: number): boolean;

  // Concrete template method
  public logTransaction(amount: number): void {
    console.log(`Logged payment of ${amount} ${this.currency}`);
  }
}

class StripeProcessor extends PaymentProcessor {
  override processPayment(amount: number): boolean {
    this.logTransaction(amount);
    return true;
  }
}

const proc = new StripeProcessor("EUR");
proc.processPayment(99);

```

---

## ⚠️ Common Pitfalls & Pro Tips

> [!TIP]
> **Pro Tip**: In TypeScript, the compiler is your pair-programmer. Pay close attention to compiler diagnostic messages—they describe the exact shape mismatch.

> [!WARNING]
> **Common Pitfall**: Do not fall into the trap of using `any` to silence compiler warnings. Use `unknown` with type guards or write proper generic constraints!

---

## 🏋️ Day 17: Exercises

### Exercise: Level 1
1. Implement abstract Shape with abstract getArea() and concrete describe()

### Exercise: Level 2
1. Implement DatabaseConnector with abstract connect() and query()

### Exercise: Level 3
1. Template Method Pattern: DataPipeline with abstract extract, transform, load

---

## 🧪 Verifying Your Work
Run the automated test for Day 17:
```bash
npx tsx 17_Day_Abstract_classes/exercise.ts
```

Or verify all 30 days:
```bash
npm test
```

---

## 🎉 Congratulations

🌕 **You are amazing!** You have conquered **Day 17** of 30 Days of TypeScript. Keep the momentum going!

<div align="center">
  <p><a href="../16_Day_Classes/16_day_classes.md">&lt;&lt; Day 16</a> | <a href="../README.md">30 Days of TypeScript</a> | <a href="../18_Day_Enums/18_day_enums.md">Day 18 &gt;&gt;</a></p>
</div>
