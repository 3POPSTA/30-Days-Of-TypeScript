<div align="center">
  <h1>🚀 30 Days Of TypeScript: Day 16 - Classes, Access Modifiers & Parameter Properties</h1>
  <sub>Encapsulation, private vs #private, parameter properties, accessors, and implements</sub>
</div>

[<< Day 15: Interface vs Type](../15_Day_Interface_vs_type/15_interface_vs_type.md) | [Day 17: Abstract Classes >>](../17_Day_Abstract_classes/17_abstract_classes.md)

---

## Table of Contents
- [Strict Property Initialization](#strict-property-initialization)
- [Access Modifiers vs Native `#private` Fields](#access-modifiers-vs-native-private-fields)
- [Constructor Parameter Properties](#constructor-parameter-properties)
- [Getters, Setters & Static Members](#getters-setters--static-members)
- [Enforcing Contracts with `implements`](#enforcing-contracts-with-implements)
- [💻 Exercises - Day 16](#-exercises---day-16)

---

## Strict Property Initialization
With `"strictPropertyInitialization": true` (part of `"strict": true`), every non-optional class field must be initialized either inline at declaration or inside the `constructor`—eliminating uninitialized `undefined` fields at runtime!

---

## Access Modifiers vs Native `#private` Fields

| Modifier | Accessible Inside Class | Subclasses | External Callers | Enforced at Runtime (JS)? |
|---|---|---|---|---|
| `public` *(default)* | ✅ | ✅ | ✅ | N/A |
| `protected` | ✅ | ✅ | ❌ | No (compile-time only) |
| `private` | ✅ | ❌ | ❌ | No (visible via `Object.keys` / JSON) |
| `#field` *(ECMAScript)* | ✅ | ❌ | ❌ | **Yes (hard VM privacy!)** |

```typescript
class VaultAccount {
    readonly accountId: string;
    #balanceCents: number; // Hard runtime privacy (cannot be leaked via JSON.stringify)

    constructor(accountId: string, openingCents: number) {
        this.accountId = accountId;
        this.#balanceCents = openingCents;
    }

    get balanceDollars(): number {
        return this.#balanceCents / 100;
    }
}
```

---

## Constructor Parameter Properties
Prefixing a constructor parameter with `public`, `protected`, `private`, or `readonly` automatically declares and assigns the corresponding instance property without repetitive boilerplate:

```typescript
class ServiceClient {
    constructor(
        public readonly baseUrl: string,
        private readonly apiKey: string,
        public timeoutMs: number = 5000,
    ) {}
}
```

> [!NOTE]
> If your project enables `"erasableSyntaxOnly": true` (for zero-transform Node.js strip-types mode), declare fields explicitly instead of using parameter properties.

---

## Getters, Setters & Static Members
- **Getters/Setters (`get` / `set`)**: Intercept property reads and writes with validation invariants. If a `get` exists without a matching `set`, TypeScript automatically treats the property as `readonly`!
- **`static` Members**: Live on the class constructor itself rather than individual instances (ideal for counters, registries, and named factory methods).

---

## Enforcing Contracts with `implements`
A class can implement multiple interfaces (`class RedisCache implements CacheReader, Disposable`). Remember that `implements` **verifies** compatibility—you still annotate method parameter types as needed.

---

## 💻 Exercises - Day 16

### Exercises: Level 1
1. Implement a `BankAccount` class using native `#balance` private storage, `deposit(amount: number)`, `withdraw(amount: number): boolean`, and a read-only `get balance()` accessor.
2. Refactor a verbose 4-field data entity class to use concise `public readonly` constructor parameter properties.
3. Verify with `JSON.stringify()` that TypeScript `private secret` is serialized into JSON whereas native `#secret` is completely hidden.

### Exercises: Level 2
1. Add a `static` instance counter and `static fromEnv()` factory method to an `ApiClient` class.
2. Create `Disposable` (`dispose(): void`) and `Logger` interfaces and build a `BufferedFileLogger` class implementing both.

### Exercises: Level 3
1. Implement an immutable `Temperature` value class with private constructor (`private constructor(readonly kelvin: number) {}`) and named static factories `Temperature.fromCelsius()`, `fromFahrenheit()`, and `fromKelvin()`, throwing `RangeError` below absolute zero (`0 K`).
2. Build a `BoundedLRUCache` class encapsulating a private `Map<string, string>` with configurable capacity validation in its setter.
