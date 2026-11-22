<div align="center">
  <h1>🚀 30 Days Of TypeScript: Day 14 - Interfaces, Extending Contracts & Hybrid Types</h1>
  <sub>Object blueprints, single & multiple inheritance, construct signatures, and hybrid callable objects</sub>
</div>

[<< Day 13: Function Overloading](../13_Day_Function_overloading/13_function_overloading.md) | [Day 15: Interface vs Type >>](../15_Day_Interface_vs_type/15_interface_vs_type.md)

---

## Table of Contents
- [Declaring Object Contracts with `interface`](#declaring-object-contracts-with-interface)
- [Single & Multiple Inheritance (`extends`)](#single--multiple-inheritance-extends)
- [Overriding & Refining Inherited Properties](#overriding--refining-inherited-properties)
- [Call & Construct Signatures (`new`)](#call--construct-signatures-new)
- [Hybrid Interfaces](#hybrid-interfaces)
- [💻 Exercises - Day 14](#-exercises---day-14)

---

## Declaring Object Contracts with `interface`
Interfaces name structural object contracts cleanly, supporting `readonly` fields, optional properties (`?`), method shorthand, and index signatures:

```typescript
interface CacheStore {
    readonly namespace: string;
    maxEntries?: number;
    get(key: string): string | undefined;
    set(key: string, value: string): void;
}
```

---

## Single & Multiple Inheritance (`extends`)
An interface can extend one or multiple parent interfaces, composing clean layered architectures:

```typescript
interface Identifiable {
    readonly id: string;
}

interface Auditable {
    readonly createdBy: string;
    readonly createdAtIso: string;
}

interface CustomerOrder extends Identifiable, Auditable {
    readonly totalCents: number;
    readonly items: readonly string[];
}
```

---

## Overriding & Refining Inherited Properties
A sub-interface can narrow an inherited property to a **subtype** (e.g., narrowing `status: string` to `status: "active" | "suspended"`), whereas incompatible re-declarations immediately produce a clear compiler diagnostic!

---

## Call & Construct Signatures (`new`)
Interfaces can describe both callable functions and class constructors (factories):

```typescript
interface PluginInstance {
    run(): string;
}

interface PluginConstructor {
    new (pluginName: string): PluginInstance;
}

function instantiatePlugin(Ctor: PluginConstructor, name: string): PluginInstance {
    return new Ctor(name);
}
```

---

## Hybrid Interfaces
JavaScript libraries frequently expose functions that also carry helper methods and configuration properties (e.g., `chalk`, `axios`, `express`). Hybrid interfaces model both simultaneously:

```typescript
interface RateLimiter {
    (clientIp: string): boolean;
    readonly limitPerMinute: number;
    reset(): void;
}
```

---

## 💻 Exercises - Day 14

### Exercises: Level 1
1. Define base interfaces `Named`, `Versioned`, and `Configurable`, then extend all three in a `MicroserviceManifest` interface.
2. Create an interface `HttpResponse` with `status: number` and extend it into `OkJsonResponse` narrowing `status: 200`.
3. Observe the compiler error when a child interface tries to change `id: string` to `id: number`.

### Exercises: Level 2
1. Define a construct signature interface `StorageDriverConstructor` and pass two different classes (`MemoryDriver`, `DiskDriver`) into a `bootStorage` factory function.
2. Implement a hybrid `CounterFn` interface that increments and returns the count when called as `counter()`, exposes `.current: number`, and provides `.reset(): void`.

### Exercises: Level 3
1. Design a typed middleware pipeline interface hierarchy (`RequestContext`, `ResponseContext`, `MiddlewareFn`) and execute three chained middlewares in order.
2. Combine a string index signature with explicit named metadata properties on an `IniSection` interface, ensuring property types satisfy the index signature constraint.
