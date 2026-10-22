# 30 Days Of TypeScript: Day 15 - Interface vs Type & Declaration Merging

<div align="center">
  <p><a href="../14_Day_Interfaces/14_day_interfaces.md">&lt;&lt; Day 14</a> | <a href="../README.md">30 Days of TypeScript</a> | <a href="../16_Day_Classes/16_day_classes.md">Day 16 &gt;&gt;</a></p>
</div>

---

- [30 Days Of TypeScript: Day 15 - Interface vs Type & Declaration Merging](#30-days-of-typescript-day-15---interface-vs-type-declaration-merging)
  - [📖 Overview](#-overview)
  - [🎯 Learning Objectives](#-learning-objectives)
  - [💡 Core Concepts & Deep Dive](#-core-concepts--deep-dive)
    - [1. When to use Interface](#1-when-to-use-interface)
    - [2. When to use Type](#2-when-to-use-type)
    - [3. Declaration Merging](#3-declaration-merging)
  - [💻 Runnable Lesson Demonstration](#-runnable-lesson-demonstration)
  - [⚠️ Common Pitfalls & Pro Tips](#️-common-pitfalls--pro-tips)
  - [💡 10 In-Depth Practical Examples & Solutions](#-10-in-depth-practical-examples--solutions)
    - [Example 1: Declaration Merging with Interfaces](#example-1-declaration-merging-with-interfaces)
    - [Example 2: Type Aliases for Union and Primitive Types](#example-2-type-aliases-for-union-and-primitive-types)
    - [Example 3: Intersection ('&') vs Interface Inheritance ('extends')](#example-3-intersection-vs-interface-inheritance-extends)
    - [Example 4: Augmenting Global Objects via Declaration Merging](#example-4-augmenting-global-objects-via-declaration-merging)
    - [Example 5: Tuple and Array Aliases with Types](#example-5-tuple-and-array-aliases-with-types)
    - [Example 6: Performance: Interface Caching vs Type Flattening](#example-6-performance-interface-caching-vs-type-flattening)
    - [Example 7: Namespace and Interface Merging](#example-7-namespace-and-interface-merging)
    - [Example 8: Mapped Types (Types Only) vs Interfaces](#example-8-mapped-types-types-only-vs-interfaces)
    - [Example 9: Express Request Augmentation via Declaration Merging](#example-9-express-request-augmentation-via-declaration-merging)
    - [Example 10: Interface vs Type Decision Matrix](#example-10-interface-vs-type-decision-matrix)
  - [🎉 Congratulations](#-congratulations)

---

## 📖 Overview

Understand the key architectural differences between interface and type alias, and leverage declaration merging.

---

## 🎯 Learning Objectives

By the end of today, you will be able to:
- [ ] Master **When to use Interface**
- [ ] Master **When to use Type**
- [ ] Master **Declaration Merging**
- [ ] Study and implement the 10 in-depth practical examples with complete solutions.

---

## 💡 Core Concepts & Deep Dive


### 1. When to use Interface

Best for public APIs, OOP hierarchies, and extensible libraries due to declaration merging.


### 2. When to use Type

Best for unions, primitives, tuples, function signatures, and complex type gymnastics.


### 3. Declaration Merging

Two interfaces with the same name automatically combine their fields.


---

## 💻 Runnable Lesson Demonstration

Execute today's live code in your terminal:
```bash
npm run day:15
```

Here is the source code for today's lesson:
```typescript
// Day 15: Interface vs Type & Declaration Merging
// Declaration merging on interface
interface AppSettings {
  appName: string;
}
interface AppSettings {
  version: string; // Merged into AppSettings
}

const config: AppSettings = {
  appName: "Typescript Tutor",
  version: "1.0.0"
};
console.log("Merged Config:", config);

```

---

## ⚠️ Common Pitfalls & Pro Tips

> [!TIP]
> **Pro Tip**: In TypeScript, the compiler is your pair-programmer. Pay close attention to compiler diagnostic messages: they describe the exact shape mismatch.

> [!WARNING]
> **Common Pitfall**: Do not fall into the trap of using `any` to silence compiler warnings. Use `unknown` with type guards or write proper generic constraints!

---

## 💡 10 In-Depth Practical Examples & Solutions

### Example 1: Declaration Merging with Interfaces
**Problem / Scenario:**
Demonstrate how multiple interface definitions with the same name automatically merge.

**Solution:**
```typescript
// First definition
interface AppSettings {
  appName: string;
}

// Second definition (merges into AppSettings)
interface AppSettings {
  version: string;
  debugMode: boolean;
}

const settings: AppSettings = {
  appName: "TypeScript Tutor",
  version: "1.0.0",
  debugMode: true
};

console.log(`App: ${settings.appName} v${settings.version}`);
```

**Explanation & Output:**
Interfaces with identical names in the same scope merge their declarations. Type aliases do not support merging.

---

### Example 2: Type Aliases for Union and Primitive Types
**Problem / Scenario:**
Show scenarios where type aliases can express constructs that interfaces cannot.

**Solution:**
```typescript
// Unions and primitives can only be declared with type aliases:
type Status = "ACTIVE" | "SUSPENDED" | "DELETED";
type ID = string | number;
type Coordinates = [latitude: number, longitude: number];

const userStatus: Status = "ACTIVE";
const coords: Coordinates = [37.7749, -122.4194];

console.log("Status:", userStatus, "Coords:", coords);
```

**Explanation & Output:**
Interfaces cannot model unions, primitive aliases, or tuple types directly; type aliases must be used.

---

### Example 3: Intersection ('&') vs Interface Inheritance ('extends')
**Problem / Scenario:**
Contrast syntax and error reporting between type intersections and interface inheritance.

**Solution:**
```typescript
// Interface Inheritance
interface BaseUser { id: string }
interface AdminUser extends BaseUser { role: "admin" }

// Type Intersection
type BaseToken = { token: string };
type AdminToken = BaseToken & { permissions: string[] };

const admin: AdminUser = { id: "u_1", role: "admin" };
const token: AdminToken = { token: "secret", permissions: ["ALL"] };

console.log("Admin ID:", admin.id);
console.log("Token:", token.token);
```

**Explanation & Output:**
Interfaces detect incompatible property overrides at declaration time, while intersections create 'never' properties.

---

### Example 4: Augmenting Global Objects via Declaration Merging
**Problem / Scenario:**
Add custom properties to Node's process.env or global namespace.

**Solution:**
```typescript
// Augmenting an interface simulates adding a custom field to global configs:
interface CustomGlobalConfig {
  apiUrl: string;
}

interface CustomGlobalConfig {
  authToken?: string; // Merged property!
}

const globalConfig: CustomGlobalConfig = {
  apiUrl: "https://api.domain.com",
  authToken: "bearer_xyz"
};

console.log("Global API URL:", globalConfig.apiUrl);
```

**Explanation & Output:**
Declaration merging is how type definitions augment existing libraries and Node/browser global environments.

---

### Example 5: Tuple and Array Aliases with Types
**Problem / Scenario:**
Represent strict tuple shapes using type aliases.

**Solution:**
```typescript
type ResponseTuple = [statusCode: number, headers: Record<string, string>, body: string];

const response: ResponseTuple = [200, { "Content-Type": "application/json" }, '{"status":"ok"}'];
console.log("Status code:", response[0]);
```

**Explanation & Output:**
Fixed-length tuples cannot be declared using 'interface'; type aliases are required.

---

### Example 6: Performance: Interface Caching vs Type Flattening
**Problem / Scenario:**
Understand why large enterprise codebases often prefer interfaces for object shapes.

**Solution:**
```typescript
// Interfaces create a named type identity that the compiler caches efficiently:
interface EntityModel {
  id: string;
  name: string;
}

// Complex intersections must be re-evaluated and flattened on each check:
type CombinedEntity = EntityModel & { extra: boolean };

const item: CombinedEntity = { id: "1", name: "Alpha", extra: true };
console.log("Item:", item.name);
```

**Explanation & Output:**
The TypeScript compiler caches interface shapes by their declared name, improving type-checking performance.

---

### Example 7: Namespace and Interface Merging
**Problem / Scenario:**
Merge an interface with a namespace to attach utility functions.

**Solution:**
```typescript
interface Album {
  title: string;
  year: number;
}

namespace Album {
  export function create(title: string, year: number): Album {
    return { title, year };
  }
}

const album = Album.create("Abbey Road", 1969);
console.log(`Album: ${album.title} (${album.year})`);
```

**Explanation & Output:**
Interfaces can merge with namespaces, allowing classes or factory functions to share the exact same identifier.

---

### Example 8: Mapped Types (Types Only) vs Interfaces
**Problem / Scenario:**
Observe that mapped types can only be declared with type aliases.

**Solution:**
```typescript
type Flags = "optionA" | "optionB" | "optionC";

// Mapped type: Valid with 'type'
type FeatureFlags = {
  [K in Flags]: boolean;
};

const flags: FeatureFlags = {
  optionA: true,
  optionB: false,
  optionC: true
};

console.log("Option A:", flags.optionA);
```

**Explanation & Output:**
Mapped types ('[K in Union]') are syntactically only valid inside 'type' declarations, not 'interface'.

---

### Example 9: Express Request Augmentation via Declaration Merging
**Problem / Scenario:**
Model augmenting an Express Request object with a parsed user property.

**Solution:**
```typescript
interface RequestPayload {
  ip: string;
  url: string;
}

// Simulating middleware augmenting the request
interface RequestPayload {
  currentUser?: { id: string; email: string };
}

const req: RequestPayload = {
  ip: "127.0.0.1",
  url: "/dashboard",
  currentUser: { id: "u_99", email: "user@domain.com" }
};

console.log("Logged in user:", req.currentUser?.email);
```

**Explanation & Output:**
Declaration merging allows libraries and middlewares to enrich standard request interfaces across packages.

---

### Example 10: Interface vs Type Decision Matrix
**Problem / Scenario:**
A quick architectural summary to guide team styling decisions.

**Solution:**
```typescript
// Rule 1: Use interface for public APIs, object shapes, and classes
interface Repository<T> {
  findById(id: string): T | undefined;
}

// Rule 2: Use type for unions, primitives, tuples, and mapped types
type StatusOrError = "SUCCESS" | "FAILED" | "PENDING";
type StringTransformer = (input: string) => string;

const transform: StringTransformer = s => s.trim().toLowerCase();
console.log("Transformed:", transform("  HELLO WORLD  "));
```

**Explanation & Output:**
Rule of thumb: Default to 'interface' for object structures and classes; use 'type' for unions, tuples, and advanced type gymnastics.

---

## 🎉 Congratulations

🌕 **You are amazing!** You have conquered **Day 15** of 30 Days of TypeScript. Keep the momentum going!

<div align="center">
  <p><a href="../14_Day_Interfaces/14_day_interfaces.md">&lt;&lt; Day 14</a> | <a href="../README.md">30 Days of TypeScript</a> | <a href="../16_Day_Classes/16_day_classes.md">Day 16 &gt;&gt;</a></p>
</div>
