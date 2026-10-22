# 30 Days Of TypeScript: Day 14 - Interfaces & Inheritance

<div align="center">
  <p><a href="../13_Day_Function_overloading/13_day_function_overloading.md">&lt;&lt; Day 13</a> | <a href="../README.md">30 Days of TypeScript</a> | <a href="../15_Day_Interface_vs_type/15_day_interface_vs_type.md">Day 15 &gt;&gt;</a></p>
</div>

---

- [30 Days Of TypeScript: Day 14 - Interfaces & Inheritance](#30-days-of-typescript-day-14---interfaces-inheritance)
  - [📖 Overview](#-overview)
  - [🎯 Learning Objectives](#-learning-objectives)
  - [💡 Core Concepts & Deep Dive](#-core-concepts--deep-dive)
    - [1. Interface Contracts](#1-interface-contracts)
    - [2. Extending Multiple Interfaces](#2-extending-multiple-interfaces)
  - [💻 Runnable Lesson Demonstration](#-runnable-lesson-demonstration)
  - [⚠️ Common Pitfalls & Pro Tips](#️-common-pitfalls--pro-tips)
  - [💡 10 In-Depth Practical Examples & Solutions](#-10-in-depth-practical-examples--solutions)
    - [Example 1: Declaring Core Domain Interfaces](#example-1-declaring-core-domain-interfaces)
    - [Example 2: Extending a Single Interface ('extends')](#example-2-extending-a-single-interface-extends)
    - [Example 3: Multiple Interface Inheritance](#example-3-multiple-interface-inheritance)
    - [Example 4: Method Signatures vs Callable Properties](#example-4-method-signatures-vs-callable-properties)
    - [Example 5: Indexable Interface Signatures](#example-5-indexable-interface-signatures)
    - [Example 6: Constructor Signatures ('new (...args): T')](#example-6-constructor-signatures-new-args-t)
    - [Example 7: Readonly and Optional Interface Properties](#example-7-readonly-and-optional-interface-properties)
    - [Example 8: Implementing Interfaces in Classes](#example-8-implementing-interfaces-in-classes)
    - [Example 9: Hybrid Interfaces (Callable Objects with Properties)](#example-9-hybrid-interfaces-callable-objects-with-properties)
    - [Example 10: Extensible Plugin Architecture with Interfaces](#example-10-extensible-plugin-architecture-with-interfaces)
  - [🎉 Congratulations](#-congratulations)

---

## 📖 Overview

Define object and method contracts using interfaces, extend interfaces hierarchically, and compose multiple interfaces.

---

## 🎯 Learning Objectives

By the end of today, you will be able to:
- [ ] Master **Interface Contracts**
- [ ] Master **Extending Multiple Interfaces**
- [ ] Study and implement the 10 in-depth practical examples with complete solutions.

---

## 💡 Core Concepts & Deep Dive


### 1. Interface Contracts

Interfaces specify the structural contract an object must satisfy without prescribing implementation.


### 2. Extending Multiple Interfaces

An interface can extend multiple parent interfaces simultaneously, assembling complex domain models.


---

## 💻 Runnable Lesson Demonstration

Execute today's live code in your terminal:
```bash
npm run day:14
```

Here is the source code for today's lesson:
```typescript
// Day 14: Interfaces & Inheritance
interface Vehicle {
  make: string;
  model: string;
}

interface ElectricVehicle extends Vehicle {
  batteryCapacityKWh: number;
  charge: () => void;
}

const tesla: ElectricVehicle = {
  make: "Tesla",
  model: "Model 3",
  batteryCapacityKWh: 75,
  charge: () => console.log("Charging...")
};
console.log("EV:", tesla);

```

---

## ⚠️ Common Pitfalls & Pro Tips

> [!TIP]
> **Pro Tip**: In TypeScript, the compiler is your pair-programmer. Pay close attention to compiler diagnostic messages—they describe the exact shape mismatch.

> [!WARNING]
> **Common Pitfall**: Do not fall into the trap of using `any` to silence compiler warnings. Use `unknown` with type guards or write proper generic constraints!

---

## 💡 10 In-Depth Practical Examples & Solutions

### Example 1: Declaring Core Domain Interfaces
**Problem / Scenario:**
Define a clean interface representing an e-commerce customer account.

**Solution:**
```typescript
interface Customer {
  id: string;
  name: string;
  email: string;
  loyaltyPoints: number;
}

const cust: Customer = {
  id: "c_001",
  name: "Marcus",
  email: "marcus@shop.com",
  loyaltyPoints: 350
};

console.log(`Customer ${cust.name} has ${cust.loyaltyPoints} points.`);
```

**Explanation & Output:**
Interfaces define named object contracts that enforce property existence and types.

---

### Example 2: Extending a Single Interface ('extends')
**Problem / Scenario:**
Create a specialized VIPCustomer interface inheriting all Customer fields.

**Solution:**
```typescript
interface Customer {
  id: string;
  name: string;
}

interface VipCustomer extends Customer {
  vipTier: "gold" | "platinum";
  discountRate: number;
}

const vip: VipCustomer = {
  id: "v_777",
  name: "Serena",
  vipTier: "platinum",
  discountRate: 0.20
};

console.log(`VIP: ${vip.name} (Tier: ${vip.vipTier}, Discount: ${vip.discountRate * 100}%)`);
```

**Explanation & Output:**
The 'extends' keyword inherits all members from the parent interface, adding new specialized fields.

---

### Example 3: Multiple Interface Inheritance
**Problem / Scenario:**
Combine multiple independent interfaces into a unified composite interface.

**Solution:**
```typescript
interface CanFly { flySpeedMph: number }
interface CanSwim { swimDepthFeet: number }

interface Duck extends CanFly, CanSwim {
  quackVolumeDb: number;
}

const mallard: Duck = {
  flySpeedMph: 45,
  swimDepthFeet: 10,
  quackVolumeDb: 75
};

console.log(`Duck flies at ${mallard.flySpeedMph} mph and dives to ${mallard.swimDepthFeet} ft.`);
```

**Explanation & Output:**
Interfaces can extend multiple interfaces simultaneously, separated by commas.

---

### Example 4: Method Signatures vs Callable Properties
**Problem / Scenario:**
Compare method syntax ('run(): void') with function property syntax ('run: () => void').

**Solution:**
```typescript
interface Vehicle {
  // Method signature (allows method bivariance)
  drive(distanceKm: number): void;
  // Function property (strictly checked under --strictFunctionTypes)
  stop: () => void;
}

const car: Vehicle = {
  drive(km) { console.log(`Drove ${km} km`); },
  stop: () => console.log("Vehicle stopped")
};

car.drive(25);
car.stop();
```

**Explanation & Output:**
Method signatures allow slight bivariance in callbacks, whereas function properties enforce strict contravariance.

---

### Example 5: Indexable Interface Signatures
**Problem / Scenario:**
Define an interface that supports dynamic dictionary lookups.

**Solution:**
```typescript
interface CacheStore {
  readonly createdAt: number;
  [key: string]: string | number;
}

const cache: CacheStore = {
  createdAt: Date.now(),
  userCount: 1500,
  serverStatus: "HEALTHY"
};

console.log("Cached status:", cache["serverStatus"]);
```

**Explanation & Output:**
Index signatures inside interfaces describe objects acting as dynamic lookup maps.

---

### Example 6: Constructor Signatures ('new (...args): T')
**Problem / Scenario:**
Define an interface for a class constructor that can be instantiated with 'new'.

**Solution:**
```typescript
interface ClockConstructor {
  new (hour: number, minute: number): ClockInterface;
}

interface ClockInterface {
  tick(): void;
}

class DigitalClock implements ClockInterface {
  constructor(public h: number, public m: number) {}
  tick() { console.log(`Tick: ${this.h}:${this.m}`); }
}

function createClock(ctor: ClockConstructor, h: number, m: number): ClockInterface {
  return new ctor(h, m);
}

const clock = createClock(DigitalClock, 12, 30);
clock.tick();
```

**Explanation & Output:**
'new (...args): T' signatures model class constructors for factory functions and dependency injection.

---

### Example 7: Readonly and Optional Interface Properties
**Problem / Scenario:**
Mix readonly, optional, and required fields in an audit-ready interface.

**Solution:**
```typescript
interface DocumentRevision {
  readonly revisionId: string;
  readonly timestamp: number;
  author: string;
  commitMessage?: string; // Optional
}

const rev: DocumentRevision = {
  revisionId: "rev_0042",
  timestamp: Date.now(),
  author: "Linus"
};

console.log("Revision:", rev.revisionId, "Author:", rev.author);
```

**Explanation & Output:**
Modifying properties with 'readonly' and '?' creates robust and accurate domain contracts.

---

### Example 8: Implementing Interfaces in Classes
**Problem / Scenario:**
Use the 'implements' keyword to guarantee a class fulfills an interface contract.

**Solution:**
```typescript
interface Serializer {
  serialize(): string;
}

class UserAccount implements Serializer {
  constructor(public username: string, public email: string) {}

  serialize(): string {
    return JSON.stringify({ username: this.username, email: this.email });
  }
}

const account = new UserAccount("satya", "satya@microsoft.com");
console.log("Serialized:", account.serialize());
```

**Explanation & Output:**
A class implementing an interface must declare all required methods and properties.

---

### Example 9: Hybrid Interfaces (Callable Objects with Properties)
**Problem / Scenario:**
Type a function that also has attached properties (e.g. like 'axios' or 'express').

**Solution:**
```typescript
interface CounterFunc {
  (incrementBy?: number): number;
  currentCount: number;
  reset(): void;
}

function createCounter(): CounterFunc {
  let count = 0;
  const fn = function(inc: number = 1) {
    count += inc;
    fn.currentCount = count;
    return count;
  } as CounterFunc;

  fn.currentCount = 0;
  fn.reset = () => { count = 0; fn.currentCount = 0; };
  return fn;
}

const counter = createCounter();
console.log("Step 1:", counter(5));
console.log("Step 2:", counter(3));
console.log("Current:", counter.currentCount);
counter.reset();
console.log("After reset:", counter.currentCount);
```

**Explanation & Output:**
Hybrid interfaces represent functions that also function as objects with properties and methods.

---

### Example 10: Extensible Plugin Architecture with Interfaces
**Problem / Scenario:**
Build a plugin registry where plugins register hooks conforming to an interface.

**Solution:**
```typescript
interface Plugin {
  name: string;
  version: string;
  initialize(context: { log: (msg: string) => void }): void;
}

class PluginManager {
  private plugins: Plugin[] = [];

  register(plugin: Plugin): void {
    plugin.initialize({ log: msg => console.log(`[${plugin.name}] ${msg}`) });
    this.plugins.push(plugin);
  }
}

const manager = new PluginManager();
manager.register({
  name: "AnalyticsPlugin",
  version: "1.0.0",
  initialize(ctx) { ctx.log("Tracking initialized"); }
});
```

**Explanation & Output:**
Interfaces decouple component implementations from consumption logic, enabling modular architectures.

---

## 🎉 Congratulations

🌕 **You are amazing!** You have conquered **Day 14** of 30 Days of TypeScript. Keep the momentum going!

<div align="center">
  <p><a href="../13_Day_Function_overloading/13_day_function_overloading.md">&lt;&lt; Day 13</a> | <a href="../README.md">30 Days of TypeScript</a> | <a href="../15_Day_Interface_vs_type/15_day_interface_vs_type.md">Day 15 &gt;&gt;</a></p>
</div>
