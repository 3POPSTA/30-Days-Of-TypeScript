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
  - [💡 10 In-Depth Practical Examples & Solutions](#-10-in-depth-practical-examples--solutions)
    - [Example 1: Basic Class with Typed Properties and Constructor](#example-1-basic-class-with-typed-properties-and-constructor)
    - [Example 2: Constructor Parameter Properties Shorthand](#example-2-constructor-parameter-properties-shorthand)
    - [Example 3: Public, Private, and Protected Modifiers](#example-3-public-private-and-protected-modifiers)
    - [Example 4: ECMAScript Private Fields ('#field') vs TypeScript 'private'](#example-4-ecmascript-private-fields-field-vs-typescript-private)
    - [Example 5: Readonly Class Fields for Immutable Data](#example-5-readonly-class-fields-for-immutable-data)
    - [Example 6: Getters and Setters with Validation](#example-6-getters-and-setters-with-validation)
    - [Example 7: Static Properties and Factory Methods](#example-7-static-properties-and-factory-methods)
    - [Example 8: Class Implementing Multiple Interfaces](#example-8-class-implementing-multiple-interfaces)
    - [Example 9: Thread-Safe Singleton Pattern](#example-9-thread-safe-singleton-pattern)
    - [Example 10: Fluent Builder Pattern with Method Chaining](#example-10-fluent-builder-pattern-with-method-chaining)
  - [🎉 Congratulations](#-congratulations)

---

## 📖 Overview

Master object-oriented TypeScript with classes, public/private/protected access modifiers, readonly, and concise parameter properties.

---

## 🎯 Learning Objectives

By the end of today, you will be able to:
- [ ] Master **Access Modifiers**
- [ ] Master **Parameter Properties**
- [ ] Study and implement the 10 in-depth practical examples with complete solutions.

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

## 💡 10 In-Depth Practical Examples & Solutions

### Example 1: Basic Class with Typed Properties and Constructor
**Problem / Scenario:**
Declare a standard TypeScript class with typed instance fields and a constructor.

**Solution:**
```typescript
class BankAccount {
  accountHolder: string;
  balance: number;

  constructor(holder: string, initialDeposit: number) {
    this.accountHolder = holder;
    this.balance = initialDeposit;
  }

  deposit(amount: number): number {
    this.balance += amount;
    return this.balance;
  }
}

const acct = new BankAccount("Alice", 500);
console.log("New Balance:", acct.deposit(250));
```

**Explanation & Output:**
TypeScript requires explicitly typing class instance variables or assigning them default initializers.

---

### Example 2: Constructor Parameter Properties Shorthand
**Problem / Scenario:**
Use accessibility modifiers in constructor arguments to declare and assign fields automatically.

**Solution:**
```typescript
class Employee {
  constructor(
    public readonly id: number,
    public name: string,
    private salary: number
  ) {}

  getSalarySlip(): string {
    return `Employee ${this.name} earns ${this.salary}`;
  }
}

const emp = new Employee(101, "Diana", 95000);
console.log("Employee Name:", emp.name);
console.log("Salary Slip:", emp.getSalarySlip());
```

**Explanation & Output:**
Prefixing constructor parameters with 'public', 'private', 'protected', or 'readonly' automatically creates and assigns class fields.

---

### Example 3: Public, Private, and Protected Modifiers
**Problem / Scenario:**
Observe access boundary restrictions between parent classes and subclasses.

**Solution:**
```typescript
class Vehicle {
  public make: string;
  protected maxSpeed: number;
  private vin: string;

  constructor(make: string, maxSpeed: number, vin: string) {
    this.make = make;
    this.maxSpeed = maxSpeed;
    this.vin = vin;
  }
}

class SportsCar extends Vehicle {
  printSpecs() {
    console.log(`${this.make} top speed: ${this.maxSpeed} mph`);
    // this.vin; // Error: 'vin' is private to Vehicle
  }
}

const car = new SportsCar("Porsche", 190, "VIN12345");
car.printSpecs();
```

**Explanation & Output:**
'private' is only accessible inside the declaring class. 'protected' is accessible within the declaring class and its subclasses.

---

### Example 4: ECMAScript Private Fields ('#field') vs TypeScript 'private'
**Problem / Scenario:**
Compare TypeScript compile-time 'private' with JavaScript hard private fields.

**Solution:**
```typescript
class SecureVault {
  // Hard runtime private: impossible to access outside class even via JS reflection
  #secretPasscode: string;

  constructor(passcode: string) {
    this.#secretPasscode = passcode;
  }

  unlock(entered: string): boolean {
    return this.#secretPasscode === entered;
  }
}

const vault = new SecureVault("alpha-omega-99");
console.log("Unlock success?", vault.unlock("alpha-omega-99"));
```

**Explanation & Output:**
ECMAScript '#private' fields guarantee true runtime encapsulation enforced by the JavaScript engine.

---

### Example 5: Readonly Class Fields for Immutable Data
**Problem / Scenario:**
Protect immutable class members from being overwritten after construction.

**Solution:**
```typescript
class ServerNode {
  readonly ipAddress: string;
  readonly bootTimestamp: number = Date.now();

  constructor(ip: string) {
    this.ipAddress = ip;
  }
}

const node = new ServerNode("192.168.1.100");
// node.ipAddress = "10.0.0.1"; // Error: Cannot assign to 'ipAddress' because it is a read-only property.
console.log("Node IP:", node.ipAddress);
```

**Explanation & Output:**
'readonly' fields can only be assigned during declaration or inside the constructor.

---

### Example 6: Getters and Setters with Validation
**Problem / Scenario:**
Encapsulate private state using accessors with type validation.

**Solution:**
```typescript
class Temperature {
  private _celsius: number = 0;

  get celsius(): number {
    return this._celsius;
  }

  set celsius(val: number) {
    if (val < -273.15) {
      throw new Error("Temperature below absolute zero is impossible!");
    }
    this._celsius = val;
  }

  get fahrenheit(): number {
    return (this._celsius * 9) / 5 + 32;
  }
}

const temp = new Temperature();
temp.celsius = 25;
console.log(`${temp.celsius}°C = ${temp.fahrenheit}°F`);
```

**Explanation & Output:**
TypeScript automatically verifies that 'get' and 'set' accessor pairs share compatible types.

---

### Example 7: Static Properties and Factory Methods
**Problem / Scenario:**
Use static members for class-level constants and factory construction logic.

**Solution:**
```typescript
class Point {
  static readonly ORIGIN = new Point(0, 0);

  constructor(public readonly x: number, public readonly y: number) {}

  static fromPolar(r: number, thetaRad: number): Point {
    return new Point(r * Math.cos(thetaRad), r * Math.sin(thetaRad));
  }
}

const pt = Point.fromPolar(10, Math.PI / 4);
console.log(`Polar point coords: (${pt.x.toFixed(2)}, ${pt.y.toFixed(2)})`);
console.log("Origin:", Point.ORIGIN);
```

**Explanation & Output:**
Static members belong to the constructor function itself rather than instance objects.

---

### Example 8: Class Implementing Multiple Interfaces
**Problem / Scenario:**
Enforce that a class conforms to multiple interface contracts.

**Solution:**
```typescript
interface Printable { print(): void }
interface Savable { save(): boolean }

class Invoice implements Printable, Savable {
  constructor(public id: string, public total: number) {}

  print(): void {
    console.log(`Invoice #${this.id} Total: ${this.total}`);
  }

  save(): boolean {
    console.log(`Saved invoice ${this.id}`);
    return true;
  }
}

const inv = new Invoice("INV-88", 450);
inv.print();
inv.save();
```

**Explanation & Output:**
A class can implement multiple interfaces separated by commas, fulfilling every declared contract.

---

### Example 9: Thread-Safe Singleton Pattern
**Problem / Scenario:**
Implement the Singleton design pattern with a private constructor.

**Solution:**
```typescript
class DatabasePool {
  private static instance: DatabasePool;

  private constructor() {
    // Private constructor prevents direct 'new DatabasePool()'
  }

  public static getInstance(): DatabasePool {
    if (!DatabasePool.instance) {
      DatabasePool.instance = new DatabasePool();
    }
    return DatabasePool.instance;
  }

  public query(sql: string): string {
    return `Executed: ${sql}`;
  }
}

const pool1 = DatabasePool.getInstance();
const pool2 = DatabasePool.getInstance();
console.log("Are singletons identical?", pool1 === pool2);
```

**Explanation & Output:**
Private constructors ensure instantiation only happens via the static factory method.

---

### Example 10: Fluent Builder Pattern with Method Chaining
**Problem / Scenario:**
Build a request configuration builder returning 'this' for chainable calls.

**Solution:**
```typescript
class RequestBuilder {
  private method: string = "GET";
  private headers: Record<string, string> = {};

  setMethod(method: "GET" | "POST" | "PUT"): this {
    this.method = method;
    return this;
  }

  addHeader(key: string, value: string): this {
    this.headers[key] = value;
    return this;
  }

  build(): { method: string; headers: Record<string, string> } {
    return { method: this.method, headers: this.headers };
  }
}

const req = new RequestBuilder()
  .setMethod("POST")
  .addHeader("Content-Type", "application/json")
  .build();

console.log("Built Request:", req);
```

**Explanation & Output:**
Returning 'this' as the return type enables fluent method chaining that preserves subclass typing.

---

## 🎉 Congratulations

🌕 **You are amazing!** You have conquered **Day 16** of 30 Days of TypeScript. Keep the momentum going!

<div align="center">
  <p><a href="../15_Day_Interface_vs_type/15_day_interface_vs_type.md">&lt;&lt; Day 15</a> | <a href="../README.md">30 Days of TypeScript</a> | <a href="../17_Day_Abstract_classes/17_day_abstract_classes.md">Day 17 &gt;&gt;</a></p>
</div>
