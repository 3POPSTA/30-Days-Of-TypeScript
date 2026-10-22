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
  - [💡 10 In-Depth Practical Examples & Solutions](#-10-in-depth-practical-examples--solutions)
    - [Example 1: Basic Abstract Class with Abstract and Concrete Methods](#example-1-basic-abstract-class-with-abstract-and-concrete-methods)
    - [Example 2: Subclass Implementation of Abstract Members](#example-2-subclass-implementation-of-abstract-members)
    - [Example 3: Explicit Overriding with the 'override' Keyword](#example-3-explicit-overriding-with-the-override-keyword)
    - [Example 4: Abstract Properties in Base Classes](#example-4-abstract-properties-in-base-classes)
    - [Example 5: Polymorphic Collection of Abstract Base Classes](#example-5-polymorphic-collection-of-abstract-base-classes)
    - [Example 6: Template Method Pattern in Data Processing](#example-6-template-method-pattern-in-data-processing)
    - [Example 7: Abstract Database Repository Base Class](#example-7-abstract-database-repository-base-class)
    - [Example 8: Protected Constructors in Abstract Classes](#example-8-protected-constructors-in-abstract-classes)
    - [Example 9: Comparing Abstract Class vs Interface with Default Methods](#example-9-comparing-abstract-class-vs-interface-with-default-methods)
    - [Example 10: Step Execution Pipeline with Abstract Classes](#example-10-step-execution-pipeline-with-abstract-classes)
  - [🎉 Congratulations](#-congratulations)

---

## 📖 Overview

Build extensible class hierarchies with abstract classes, enforce subclass contracts, and use the 'override' keyword.

---

## 🎯 Learning Objectives

By the end of today, you will be able to:
- [ ] Master **Abstract Classes**
- [ ] Master **The override Keyword**
- [ ] Study and implement the 10 in-depth practical examples with complete solutions.

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
> **Pro Tip**: In TypeScript, the compiler is your pair-programmer. Pay close attention to compiler diagnostic messages: they describe the exact shape mismatch.

> [!WARNING]
> **Common Pitfall**: Do not fall into the trap of using `any` to silence compiler warnings. Use `unknown` with type guards or write proper generic constraints!

---

## 💡 10 In-Depth Practical Examples & Solutions

### Example 1: Basic Abstract Class with Abstract and Concrete Methods
**Problem / Scenario:**
Define a base Animal class that enforces sound generation while sharing sleeping behavior.

**Solution:**
```typescript
abstract class Animal {
  constructor(public name: string) {}

  // Abstract method: must be implemented by subclasses
  abstract makeSound(): string;

  // Concrete method: shared by all subclasses
  sleep(): void {
    console.log(`${this.name} is sleeping: zzz...`);
  }
}

class Dog extends Animal {
  makeSound(): string { return "Woof! Woof!"; }
}

const dog = new Dog("Buddy");
console.log(dog.makeSound());
dog.sleep();
```

**Explanation & Output:**
Abstract classes cannot be directly instantiated with 'new Animal()'; they serve as blueprints for subclasses.

---

### Example 2: Subclass Implementation of Abstract Members
**Problem / Scenario:**
Ensure derived classes implement all required abstract methods and properties.

**Solution:**
```typescript
abstract class PaymentProcessor {
  abstract readonly providerName: string;
  abstract process(amount: number): boolean;

  logTransaction(amount: number): void {
    console.log(`[${this.providerName}] Processing ${amount}`);
  }
}

class StripeProcessor extends PaymentProcessor {
  readonly providerName = "Stripe";

  process(amount: number): boolean {
    this.logTransaction(amount);
    return true;
  }
}

const stripe = new StripeProcessor();
stripe.process(99.99);
```

**Explanation & Output:**
Subclasses must implement all abstract properties and methods before they can be instantiated.

---

### Example 3: Explicit Overriding with the 'override' Keyword
**Problem / Scenario:**
Use the 'override' keyword to prevent accidental method mismatches during refactoring.

**Solution:**
```typescript
class BaseService {
  start(): void { console.log("Base service started"); }
}

class CustomService extends BaseService {
  override start(): void {
    console.log("Custom service pre-checks...");
    super.start();
  }
}

const svc = new CustomService();
svc.start();
```

**Explanation & Output:**
With '--noImplicitOverride', the 'override' keyword ensures that a method intentionally overrides a base class method.

---

### Example 4: Abstract Properties in Base Classes
**Problem / Scenario:**
Declare an abstract property that subclasses must supply.

**Solution:**
```typescript
abstract class ReportGenerator {
  abstract readonly format: "PDF" | "CSV" | "HTML";

  generate(data: unknown[]): string {
    return `Generated ${this.format} report for ${data.length} records`;
  }
}

class PdfReport extends ReportGenerator {
  readonly format = "PDF";
}

const reporter = new PdfReport();
console.log(reporter.generate([1, 2, 3]));
```

**Explanation & Output:**
Abstract properties guarantee that every subclass defines required configuration properties.

---

### Example 5: Polymorphic Collection of Abstract Base Classes
**Problem / Scenario:**
Store diverse subclasses in an array of the abstract base type and invoke common methods.

**Solution:**
```typescript
abstract class Graphic {
  abstract draw(): void;
}

class CircleGraphic extends Graphic {
  draw(): void { console.log("Drawing Circle (O)"); }
}

class SquareGraphic extends Graphic {
  draw(): void { console.log("Drawing Square ([])"); }
}

const canvas: Graphic[] = [new CircleGraphic(), new SquareGraphic()];
for (const item of canvas) {
  item.draw(); // Polymorphic dispatch
}
```

**Explanation & Output:**
Polymorphism lets you treat different subclass instances uniformly through their shared abstract base class.

---

### Example 6: Template Method Pattern in Data Processing
**Problem / Scenario:**
Define a fixed skeleton algorithm in the base class, delegating steps to subclasses.

**Solution:**
```typescript
abstract class DataPipeline {
  // Template method defining algorithm structure:
  public run(): void {
    this.extract();
    this.transform();
    this.load();
  }

  protected abstract extract(): void;
  protected abstract transform(): void;

  protected load(): void {
    console.log("Default Loader: Writing to database");
  }
}

class CsvPipeline extends DataPipeline {
  protected extract(): void { console.log("Extracting CSV file"); }
  protected transform(): void { console.log("Parsing comma-separated rows"); }
}

const pipeline = new CsvPipeline();
pipeline.run();
```

**Explanation & Output:**
The Template Method pattern controls execution order while leaving specific steps customizable in subclasses.

---

### Example 7: Abstract Database Repository Base Class
**Problem / Scenario:**
Create a generic CRUD base class with common caching logic.

**Solution:**
```typescript
abstract class BaseRepository<T extends { id: string }> {
  private cache = new Map<string, T>();

  abstract fetchFromDb(id: string): T | undefined;

  getById(id: string): T | undefined {
    if (this.cache.has(id)) {
      return this.cache.get(id);
    }
    const record = this.fetchFromDb(id);
    if (record) this.cache.set(id, record);
    return record;
  }
}

class UserRepository extends BaseRepository<{ id: string; name: string }> {
  fetchFromDb(id: string) {
    return { id, name: `User_${id}` };
  }
}

const repo = new UserRepository();
console.log("Fetched:", repo.getById("101"));
```

**Explanation & Output:**
Combining generics with abstract classes allows writing reusable repository, caching, and data access layers.

---

### Example 8: Protected Constructors in Abstract Classes
**Problem / Scenario:**
Enforce that base class constructors can only be invoked by subclass 'super()' calls.

**Solution:**
```typescript
abstract class ConfigBase {
  protected constructor(public environment: string) {}
}

class ProductionConfig extends ConfigBase {
  constructor() {
    super("production");
  }
}

const prod = new ProductionConfig();
console.log("Environment:", prod.environment);
```

**Explanation & Output:**
Protected constructors prevent external instantiation while allowing subclasses to initialize base state.

---

### Example 9: Comparing Abstract Class vs Interface with Default Methods
**Problem / Scenario:**
Understand when to choose an abstract class (code sharing) vs an interface (pure contract).

**Solution:**
```typescript
// Interface: zero runtime JS, pure type definition
interface Identifiable { id: string }

// Abstract class: real JS class prototype, can hold state and private members
abstract class Entity implements Identifiable {
  constructor(public id: string, public createdAt: number = Date.now()) {}
}

class ProductEntity extends Entity {}

const prod = new ProductEntity("prod_1");
console.log("Product:", prod.id, "Created:", prod.createdAt);
```

**Explanation & Output:**
Use abstract classes when you need shared implementation and private state; use interfaces for structural contracts.

---

### Example 10: Step Execution Pipeline with Abstract Classes
**Problem / Scenario:**
Build a chain of execution steps with typed inputs and outputs.

**Solution:**
```typescript
abstract class Step<TInput, TOutput> {
  abstract execute(input: TInput): TOutput;
}

class StringSanitizer extends Step<string, string> {
  execute(input: string): string {
    return input.trim().toLowerCase();
  }
}

class WordCounter extends Step<string, number> {
  execute(input: string): number {
    return input.split(/\s+/).length;
  }
}

const text = "   TypeScript Is Awesome   ";
const step1 = new StringSanitizer();
const step2 = new WordCounter();

const count = step2.execute(step1.execute(text));
console.log("Word count:", count); // 3
```

**Explanation & Output:**
Generic abstract classes allow building modular, type-safe execution pipelines.

---

## 🎉 Congratulations

🌕 **You are amazing!** You have conquered **Day 17** of 30 Days of TypeScript. Keep the momentum going!

<div align="center">
  <p><a href="../16_Day_Classes/16_day_classes.md">&lt;&lt; Day 16</a> | <a href="../README.md">30 Days of TypeScript</a> | <a href="../18_Day_Enums/18_day_enums.md">Day 18 &gt;&gt;</a></p>
</div>
