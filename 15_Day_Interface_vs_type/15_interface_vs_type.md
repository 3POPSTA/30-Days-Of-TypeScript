<div align="center">
  <h1>🚀 30 Days Of TypeScript: Day 15 - Interface vs Type & Declaration Merging</h1>
  <sub>Architectural trade-offs, declaration merging, compiler caching, and exclusive type capabilities</sub>
</div>

[<< Day 14: Interfaces](../14_Day_Interfaces/14_interfaces.md) | [Day 16: Classes >>](../16_Day_Classes/16_classes.md)

---

## Table of Contents
- [`interface` vs `type` Feature Matrix](#interface-vs-type-feature-matrix)
- [Declaration Merging (Exclusive to `interface`)](#declaration-merging-exclusive-to-interface)
- [Capabilities Exclusive to `type`](#capabilities-exclusive-to-type)
- [Compiler Performance: `extends` vs `&`](#compiler-performance-extends-vs-)
- [Pragmatic Engineering Guidelines](#pragmatic-engineering-guidelines)
- [💻 Exercises - Day 15](#-exercises---day-15)

---

## `interface` vs `type` Feature Matrix

| Capability | `interface` | `type` Alias |
|---|---|---|
| Describe object & class contracts | ✅ Yes | ✅ Yes |
| Implementable by `class ... implements` | ✅ Yes | ✅ Yes (if statically known object shape) |
| Extend / compose object shapes | ✅ `extends` | ✅ `&` (intersection) |
| **Declaration Merging** (open extension) | ✅ **Yes** | ❌ Closed (duplicate identifier error) |
| Unions (`A \| B`), Primitives & Literals | ❌ No | ✅ **Yes** |
| Tuples & Mapped / Conditional Types | ❌ No | ✅ **Yes** |

---

## Declaration Merging (Exclusive to `interface`)
Declaring multiple interfaces with the **same name** in the same scope automatically merges their members into a single combined interface. This powers Express `Request` extensions, global `Window`/`ProcessEnv` augmentation, and plugin ecosystems:

```typescript
interface AppRegistry {
    readonly authService: string;
}

interface AppRegistry {
    readonly metricsService: string;
}

// Merged! Requires BOTH authService and metricsService:
const registry: AppRegistry = {
    authService: "v2.auth",
    metricsService: "v1.prometheus",
};
```

---

## Capabilities Exclusive to `type`
Only `type` aliases can express unions, primitive brands, tuples, mapped types, template literal types, and conditional metaprogramming:

```typescript
type ResultState<T> = { ok: true; value: T } | { ok: false; error: string };
type ReadonlyPatch<T> = { readonly [K in keyof T]?: T[K] };
```

---

## Compiler Performance: `extends` vs `&`
Per the official TypeScript Performance Wiki:
- **`interface extends`** builds flat, cached object hierarchies and detects property conflicts **eagerly** at declaration time.
- **`type` intersections (`A & B & C`)** recursively merge properties lazily on every check, and conflicting properties silently collapse to `never` instead of throwing an immediate declaration error.

---

## Pragmatic Engineering Guidelines
1. Use **`interface`** for public object/API contracts, class `implements` targets, and extensible plugin registries.
2. Use **`type`** for unions, discriminated state machines, tuples, function signatures, and mapped/conditional type utilities.

---

## 💻 Exercises - Day 15

### Exercises: Level 1
1. Demonstrate declaration merging across two `PluginHooks` interface declarations (`onInit(): void` and `onShutdown(): void`) and implement an object satisfying the merged contract.
2. Attempt to redeclare `type Config = ...` twice in the same scope to observe the duplicate identifier error.
3. Compare conflicting property behavior: `interface Child extends Parent` redefining `port: number` as `port: string` vs `type Child = Parent & { port: string }`.

### Exercises: Level 2
1. Augment a custom `RequestContext` interface across two logical plugin sections (adding `traceId: string` and `authenticatedUserId?: string`) and write a handler consuming both.
2. Show how an `interface` can `extends` a statically shaped `type` alias, and how a `type` intersection can include an `interface`.

### Exercises: Level 3
1. Design a hybrid module architecture using `interface` for extensible repository contracts (`UserRepository`) and `type` for discriminated query results (`QueryResult<T>`).
2. Merge a `function` declaration and a `namespace` or `interface` of the same name to model a factory function carrying attached static constants.
