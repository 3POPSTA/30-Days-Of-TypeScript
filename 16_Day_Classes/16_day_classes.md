# 30 Days Of TypeScript: Day 16 - Classes, Access Modifiers & readonly

<div align="center">
  <p><a href="../15_Day_Interface_vs_type/15_day_interface_vs_type.md">&lt;&lt; Day 15</a> | <a href="../README.md">30 Days of TypeScript</a> | <a href="../17_Day_Abstract_classes/17_day_abstract_classes.md">Day 17 &gt;&gt;</a></p>
</div>

---

- [30 Days Of TypeScript: Day 16 - Classes, Access Modifiers & readonly](#30-days-of-typescript-day-16---classes-access-modifiers-readonly)
  - [📖 Overview](#-overview)
  - [🎯 Learning Objectives](#-learning-objectives)
  - [💡 Core Concepts & Deep Dive](#-core-concepts--deep-dive)
    - [1. Access Modifiers](#1-access-modifiers)
    - [2. Parameter Properties](#2-parameter-properties)
  - [💻 Runnable Lesson Demonstration](#-runnable-lesson-demonstration)
  - [⚠️ Common Pitfalls & Pro Tips](#️-common-pitfalls--pro-tips)
  - [🏋️ Day 16: Exercises](#️-day-16-exercises)
    - [Exercise: Level 1](#exercise-level-1)
    - [Exercise: Level 2](#exercise-level-2)
    - [Exercise: Level 3](#exercise-level-3)
  - [🎉 Congratulations](#-congratulations)

---

## 📖 Overview

Master object-oriented TypeScript with classes, public/private/protected access modifiers, readonly, and concise parameter properties.

---

## 🎯 Learning Objectives

By the end of today, you will be able to:
- [ ] Master **Access Modifiers**
- [ ] Master **Parameter Properties**
- [ ] Complete all Level 1, Level 2, and Level 3 exercises with automated tests passing (`npm test`).

---

## 💡 Core Concepts & Deep Dive


### 1. Access Modifiers

'public' (default), 'private' (TS-only guard), 'protected' (subclasses only), and '#' (ECMAScript runtime private).


### 2. Parameter Properties

Declare access modifiers directly in constructor arguments to declare and assign fields automatically.


---

## 💻 Runnable Lesson Demonstration

Execute today's live code in your terminal:
```bash
npm run day:16
```

Here is the source code for today's lesson:
```typescript
// Day 16: Classes, Access Modifiers & readonly
class BankAccount {
  constructor(
    public readonly accountNumber: string,
    private _balance: number
  ) {}

  public get balance(): number {
    return this._balance;
  }

  public deposit(amount: number): void {
    if (amount <= 0) throw new Error("Must deposit positive amount");
    this._balance += amount;
  }
}

const acct = new BankAccount("FI-12345", 500);
acct.deposit(250);
console.log("Account balance:", acct.balance);

```

---

## ⚠️ Common Pitfalls & Pro Tips

> [!TIP]
> **Pro Tip**: In TypeScript, the compiler is your pair-programmer. Pay close attention to compiler diagnostic messages—they describe the exact shape mismatch.

> [!WARNING]
> **Common Pitfall**: Do not fall into the trap of using `any` to silence compiler warnings. Use `unknown` with type guards or write proper generic constraints!

---

## 🏋️ Day 16: Exercises

### Exercise: Level 1
1. Create a UserAccount class using parameter properties with get summary()

### Exercise: Level 2
1. Implement a Wallet class with deposit, withdraw, and private balance protection

### Exercise: Level 3
1. Implement an immutable configuration snapshot class that deep-freezes its data

---

## 🧪 Verifying Your Work
Run the automated test for Day 16:
```bash
npx tsx 16_Day_Classes/exercise.ts
```

Or verify all 30 days:
```bash
npm test
```

---

## 🎉 Congratulations

🌕 **You are amazing!** You have conquered **Day 16** of 30 Days of TypeScript. Keep the momentum going!

<div align="center">
  <p><a href="../15_Day_Interface_vs_type/15_day_interface_vs_type.md">&lt;&lt; Day 15</a> | <a href="../README.md">30 Days of TypeScript</a> | <a href="../17_Day_Abstract_classes/17_day_abstract_classes.md">Day 17 &gt;&gt;</a></p>
</div>
