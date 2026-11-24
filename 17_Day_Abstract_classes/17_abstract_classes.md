<div align="center">
  <h1>🚀 30 Days Of TypeScript: Day 17 - Abstract Classes, Override & Polymorphism</h1>
  <sub>Shared base logic, abstract hooks, the Template Method pattern, and safe override verification</sub>
</div>

[<< Day 16: Classes](../16_Day_Classes/16_classes.md) | [Day 18: Enums >>](../18_Day_Enums/18_enums.md)

---

## Table of Contents
- [What Are Abstract Classes?](#what-are-abstract-classes)
- [The Template Method Pattern](#the-template-method-pattern)
- [Safe Inheritance with `override`](#safe-inheritance-with-override)
- [Dynamic Polymorphism Across Base References](#dynamic-polymorphism-across-base-references)
- [Abstract Classes vs Interfaces](#abstract-classes-vs-interfaces)
- [💻 Exercises - Day 17](#-exercises---day-17)

---

## What Are Abstract Classes?
An `abstract class` cannot be instantiated directly with `new`. Instead, it serves as a partially implemented blueprint combining **concrete shared state/methods** with **abstract methods/getters** that concrete subclasses *must* implement:

```typescript
abstract class BaseExporter {
    constructor(public readonly destination: string) {}

    abstract readonly mimeType: string;
    protected abstract serializeRows(rows: readonly Record<string, unknown>[]): string;

    exportBatch(rows: readonly Record<string, unknown>[]): string {
        const body = this.serializeRows(rows);
        return `[${this.mimeType} -> ${this.destination}] ${body}`;
    }
}
```

---

## The Template Method Pattern
Notice `exportBatch()` above: the abstract base class controls the overarching workflow skeleton (validation, telemetry, error wrapping) while delegating customizable steps (`serializeRows`) to subclasses!

---

## Safe Inheritance with `override`
Enabling `"noImplicitOverride": true` in `tsconfig.json` requires the `override` keyword whenever a subclass replaces a base member. If a base class later renames or deletes that method, the compiler flags every broken subclass immediately instead of leaving dead code!

```typescript
class JsonExporter extends BaseExporter {
    override readonly mimeType = "application/json";

    protected override serializeRows(rows: readonly Record<string, unknown>[]): string {
        return JSON.stringify(rows);
    }
}
```

---

## Dynamic Polymorphism Across Base References
Callers can program against `readonly BaseExporter[]` and invoke `.exportBatch()` uniformly without knowing which concrete subclass is executing at runtime.

---

## Abstract Classes vs Interfaces
- Choose **`interface`** for pure contracts (especially when classes need to implement multiple independent capabilities).
- Choose **`abstract class`** when subclasses genuinely share state, protected helper methods, or an invariant lifecycle workflow.

---

## 💻 Exercises - Day 17

### Exercises: Level 1
1. Define an `abstract class Shape2D` with concrete `readonly color: string`, abstract `area(): number`, abstract `perimeter(): number`, and concrete `describe(): string`. Implement `Circle` and `Rectangle` using `override`.
2. Attempt `new Shape2D("blue")` to inspect TypeScript's abstract instantiation error.
3. Process a polymorphic `readonly Shape2D[]` array to compute the combined area of heterogeneous shapes.

### Exercises: Level 2
1. Implement the Template Method pattern with an `abstract class DataJob` running `validate() -> extract() -> transform() -> load()`, timing execution automatically in `runJob()`.
2. Write a factory function accepting an abstract constructor parameter `Ctor: new () => Shape2D` versus `abstract new () => Shape2D` to understand why abstract constructors cannot be called directly.

### Exercises: Level 3
1. Design a payment gateway hierarchy (`abstract class PaymentGateway` with `StripeGateway` and `PayPalGateway`) featuring retry hooks, shared audit logging, and `override` verification.
2. Refactor a deep, brittle 4-level class inheritance chain into an interface + composition pattern, keeping only 1 clean abstract base where shared state is warranted.
