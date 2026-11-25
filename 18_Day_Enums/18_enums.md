<div align="center">
  <h1>🚀 30 Days Of TypeScript: Day 18 - Enums vs Const Objects & Idiomatic Patterns</h1>
  <sub>Numeric & string enums, runtime code emission, const objects, and bitmask flags</sub>
</div>

[<< Day 17: Abstract Classes](../17_Day_Abstract_classes/17_abstract_classes.md) | [Day 19: Generics Basics >>](../19_Day_Generics_basics/19_generics_basics.md)

---

## Table of Contents
- [Runtime Emission: Why Enums Are Unique](#runtime-emission-why-enums-are-unique)
- [Numeric Enums & Reverse Mapping](#numeric-enums--reverse-mapping)
- [String Enums](#string-enums)
- [`const enum` & `isolatedModules` Caveats](#const-enum--isolatedmodules-caveats)
- [The Modern Idiom: `as const` Objects](#the-modern-idiom-as-const-objects)
- [Bitmask Flag Enums](#bitmask-flag-enums)
- [💻 Exercises - Day 18](#-exercises---day-18)

---

## Runtime Emission: Why Enums Are Unique
Unlike interfaces and type aliases (which are erased completely), TypeScript `enum` declarations **emit actual JavaScript runtime objects** (IIFEs). Understanding this trade-off is crucial in modern ESM and zero-transform workflows.

---

## Numeric Enums & Reverse Mapping
Numeric enums auto-increment from `0` (or a specified seed) and generate **bidirectional reverse mappings** (`Direction[0] === "North"` and `Direction["North"] === 0`). As a result, `Object.keys(Direction)` has **twice** as many keys as expected!

---

## String Enums
String enums omit reverse mappings and produce human-readable logs, JSON payloads, and debugger output, while remaining **nominally** typed (passing a raw string `"INFO"` where `LogLevel.Info` is expected is rejected unless cast):

```typescript
enum LogLevel {
    Debug = "DEBUG",
    Info = "INFO",
    Warn = "WARN",
    Error = "ERROR",
}
```

---

## `const enum` & `isolatedModules` Caveats
`const enum` inlines literal values at call sites during full `tsc` compilation, **but breaks single-file transpilers** (`tsx`, `esbuild`, `swc`, Babel) when `"isolatedModules": true` is enabled across module boundaries. Avoid `const enum` in modern libraries!

---

## The Modern Idiom: `as const` Objects
Most modern TypeScript codebases prefer a standard JavaScript object marked `as const` paired with an indexed access union. It requires zero custom TypeScript syntax emission, tree-shakes cleanly, and accepts both `HttpStatus.Ok` and literal `200`:

```typescript
const HttpStatus = {
    Ok: 200,
    Created: 201,
    BadRequest: 400,
    NotFound: 404,
} as const;

type HttpStatus = (typeof HttpStatus)[keyof typeof HttpStatus]; // 200 | 201 | 400 | 404
```

---

## Bitmask Flag Enums
Bitwise powers of two (`1 << 0`, `1 << 1`, `1 << 2`) pack fast permission flags into a single integer (`|`, `&`, `~`):

```typescript
const Permission = {
    None: 0,
    Read: 1 << 0,   // 1
    Write: 1 << 1,  // 2
    Admin: 1 << 2,  // 4
} as const;
```

---

## 💻 Exercises - Day 18

### Exercises: Level 1
1. Declare a string `enum OrderStatus { Pending = "PENDING", Shipped = "SHIPPED", Delivered = "DELIVERED" }` and verify that passing raw `"PENDING"` directly to `updateOrder(status: OrderStatus)` fails nominally.
2. Inspect `Object.keys()` on a numeric `enum` vs a string `enum` to observe numeric reverse mappings.
3. Convert `OrderStatus` into the idiomatic `as const` object + companion `type OrderStatus = ...` pattern.

### Exercises: Level 2
1. Implement UNIX-style bitmask permissions (`Read = 1`, `Write = 2`, `Execute = 4`) with helper functions `grantPermission`, `revokePermission`, and `hasPermission`.
2. Build an exhaustive `switch` mapper over your `as const` `OrderStatus` type using `assertNever`.

### Exercises: Level 3
1. Create a runtime validation helper `isValidEnumValue<T extends Record<string, string>>(enumObj: T, raw: unknown): raw is T[keyof T]` that narrows untrusted query strings into valid string-enum / `as const` union values.
2. Compare emitted `.js` output in `./build/` between a `enum` and an `as const` object after running `npm run build`.
