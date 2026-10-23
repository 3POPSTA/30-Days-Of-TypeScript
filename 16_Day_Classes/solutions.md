# 📘 Day 16: Challenge Solutions & Explanations

Welcome to the solution guide for **Day 16: Classes, Access Modifiers & readonly**!

---

## 🎯 Challenge 1: Parameter Properties & Private State

### Solution
```typescript
export class BankAccount {
  constructor(
    public readonly accountNumber: string,
    protected ownerName: string,
    private _balance: number
  ) {}

  getBalance(): number {
    return this._balance;
  }

  deposit(amount: number): void {
    if (amount > 0) {
      this._balance += amount;
    }
  }

  withdraw(amount: number): boolean {
    if (amount > 0 && amount <= this._balance) {
      this._balance -= amount;
      return true;
    }
    return false;
  }
}
```

---

## 🎯 Challenge 2: Smart Getters & Setters with Validation

### Solution
```typescript
export class Temperature {
  private _celsius: number;

  constructor(initialCelsius: number) {
    this._celsius = initialCelsius;
  }

  get celsius(): number {
    return this._celsius;
  }

  set celsius(val: number) {
    if (val < -273.15) {
      throw new Error("Below absolute zero!");
    }
    this._celsius = val;
  }

  get fahrenheit(): number {
    return (this._celsius * 9) / 5 + 32;
  }
}
```

---

## 🎯 Challenge 3: Static Utility Members & Factory Pattern

### Solution
```typescript
export class IdGenerator {
  private static sequence = 0;

  static generate(prefix: string): string {
    return `${prefix}_${++IdGenerator.sequence}`;
  }

  static reset(): void {
    IdGenerator.sequence = 0;
  }
}
```

---

## 🎯 Challenge 4: Protected Inheritance

### Solution
```typescript
export class SavingsAccount extends BankAccount {
  constructor(
    accountNumber: string,
    ownerName: string,
    initialBalance: number,
    private interestRate: number
  ) {
    super(accountNumber, ownerName, initialBalance);
  }

  applyInterest(): void {
    const interest = this.getBalance() * this.interestRate;
    this.deposit(interest);
  }

  getAccountSummary(): string {
    return `Owner: ${this.ownerName}, Balance: $${this.getBalance()}`;
  }
}
```

---

## 🚀 Next Steps
Advance to **Day 17: Abstract Classes, override & Polymorphism**!
