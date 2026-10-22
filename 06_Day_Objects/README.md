# 30 Days Of TypeScript: Day 06 - Object Types & Property Modifiers

<div align="center">
  <p><a href="../05_Day_Tuples/05_day_tuples.md">&lt;&lt; Day 5</a> | <a href="../README.md">30 Days of TypeScript</a> | <a href="../07_Day_Type_aliases/07_day_type_aliases.md">Day 7 &gt;&gt;</a></p>
</div>

---

- [30 Days Of TypeScript: Day 06 - Object Types & Property Modifiers](#30-days-of-typescript-day-06---object-types-property-modifiers)
  - [📖 Overview](#-overview)
  - [🎯 Learning Objectives](#-learning-objectives)
  - [💡 Core Concepts & Deep Dive](#-core-concepts--deep-dive)
    - [1. Structural Typing](#1-structural-typing)
    - [2. Optional & Readonly Modifiers](#2-optional-readonly-modifiers)
    - [3. Excess Property Checks](#3-excess-property-checks)
  - [💻 Runnable Lesson Demonstration](#-runnable-lesson-demonstration)
  - [⚠️ Common Pitfalls & Pro Tips](#️-common-pitfalls--pro-tips)
  - [💡 10 In-Depth Practical Examples & Solutions](#-10-in-depth-practical-examples--solutions)
    - [Example 1: Inline Object Type Annotations](#example-1-inline-object-type-annotations)
    - [Example 2: Optional Properties with '?' Modifier](#example-2-optional-properties-with-modifier)
    - [Example 3: Readonly Properties for Immutable IDs](#example-3-readonly-properties-for-immutable-ids)
    - [Example 4: Dynamic Keys with Index Signatures](#example-4-dynamic-keys-with-index-signatures)
    - [Example 5: Excess Property Checks (Literals vs Variables)](#example-5-excess-property-checks-literals-vs-variables)
    - [Example 6: Deeply Nested Object Types for App Settings](#example-6-deeply-nested-object-types-for-app-settings)
    - [Example 7: Safe Property Access with Optional Chaining and Nullish Coalescing](#example-7-safe-property-access-with-optional-chaining-and-nullish-coalescing)
    - [Example 8: Object Destructuring with Renaming and Defaults](#example-8-object-destructuring-with-renaming-and-defaults)
    - [Example 9: Deep Object Freezing Utility](#example-9-deep-object-freezing-utility)
    - [Example 10: Object Merge Utility with Default Values](#example-10-object-merge-utility-with-default-values)
  - [🎉 Congratulations](#-congratulations)

---

## 📖 Overview

Learn structural typing with object shapes, optional properties, readonly fields, excess property checks, and index signatures.

---

## 🎯 Learning Objectives

By the end of today, you will be able to:
- [ ] Master **Structural Typing**
- [ ] Master **Optional & Readonly Modifiers**
- [ ] Master **Excess Property Checks**
- [ ] Study and implement the 10 in-depth practical examples with complete solutions.

---

## 💡 Core Concepts & Deep Dive


### 1. Structural Typing

TypeScript uses 'duck typing': if two objects have the same required properties, they are compatible.


### 2. Optional & Readonly Modifiers

'?' marks a property as optional. 'readonly' prevents reassigning the property after creation.


### 3. Excess Property Checks

Object literals undergo strict excess property checks to catch accidental typos in configuration keys.


---

## 💻 Runnable Lesson Demonstration

Execute today's live code in your terminal:
```bash
npm run day:06
```

Here is the source code for today's lesson:
```typescript
// Day 06: Object Types & Property Modifiers
interface UserConfig {
  readonly id: string;
  name: string;
  email?: string; // Optional
}

const user: UserConfig = {
  id: "usr_101",
  name: "Alice"
};
// user.id = "usr_102"; // Compile Error: readonly!
user.name = "Alice Smith"; // Allowed

// Index Signatures for dynamic dictionaries
interface StringMap {
  [key: string]: string;
}
const headers: StringMap = {
  "Content-Type": "application/json",
  "Authorization": "Bearer token"
};
console.log("Headers:", headers);

```

---

## ⚠️ Common Pitfalls & Pro Tips

> [!TIP]
> **Pro Tip**: In TypeScript, the compiler is your pair-programmer. Pay close attention to compiler diagnostic messages—they describe the exact shape mismatch.

> [!WARNING]
> **Common Pitfall**: Do not fall into the trap of using `any` to silence compiler warnings. Use `unknown` with type guards or write proper generic constraints!

---

## 💡 10 In-Depth Practical Examples & Solutions

### Example 1: Inline Object Type Annotations
**Problem / Scenario:**
Declare and use inline anonymous object types for quick ad-hoc function parameters.

**Solution:**
```typescript
function printCoordinates(pt: { x: number; y: number }): void {
  console.log(`Coordinate: X=${pt.x}, Y=${pt.y}`);
}

printCoordinates({ x: 10, y: 25 });
```

**Explanation & Output:**
Inline object types describe the expected shape without declaring a separate named interface or type alias.

---

### Example 2: Optional Properties with '?' Modifier
**Problem / Scenario:**
Define object properties that may be omitted by callers.

**Solution:**
```typescript
interface UserPreferences {
  theme: "light" | "dark";
  notificationsEnabled: boolean;
  fontSize?: number; // Optional
}

function applyPreferences(pref: UserPreferences): void {
  const size = pref.fontSize ?? 14;
  console.log(`Applied Theme: ${pref.theme}, Font: ${size}px`);
}

applyPreferences({ theme: "dark", notificationsEnabled: true });
```

**Explanation & Output:**
The '?' modifier marks a property as optional, meaning its value can be 'T | undefined' or absent altogether.

---

### Example 3: Readonly Properties for Immutable IDs
**Problem / Scenario:**
Prevent accidental reassignment of critical entity identifiers.

**Solution:**
```typescript
interface DatabaseEntity {
  readonly id: string;
  readonly createdAt: Date;
  title: string;
}

const entity: DatabaseEntity = {
  id: "ent_9901",
  createdAt: new Date(),
  title: "Draft Document"
};

entity.title = "Published Document"; // Allowed
// entity.id = "new_id"; // Error: Cannot assign to 'id' because it is a read-only property.

console.log("Updated title:", entity.title);
```

**Explanation & Output:**
'readonly' modifier prevents properties from being modified after object creation.

---

### Example 4: Dynamic Keys with Index Signatures
**Problem / Scenario:**
Handle dynamic dictionary objects where property keys are not known in advance.

**Solution:**
```typescript
interface ErrorDictionary {
  [errorCode: string]: string;
}

const errors: ErrorDictionary = {
  ERR_404: "Page not found",
  ERR_500: "Internal server error"
};

errors["ERR_403"] = "Forbidden access";
console.log("Error 404 message:", errors["ERR_404"]);
```

**Explanation & Output:**
Index signatures like '[key: string]: string' allow an object to hold arbitrary properties that match the specified value type.

---

### Example 5: Excess Property Checks (Literals vs Variables)
**Problem / Scenario:**
Understand why passing an object literal with extra fields fails, but assigning an existing variable passes.

**Solution:**
```typescript
interface BoxConfig {
  width: number;
  height: number;
}

function createBox(config: BoxConfig): number {
  return config.width * config.height;
}

// Fails excess property check:
// createBox({ width: 10, height: 20, color: "red" });

// Passes via structural compatibility:
const extendedConfig = { width: 10, height: 20, color: "red" };
console.log("Box Area:", createBox(extendedConfig));
```

**Explanation & Output:**
TypeScript performs excess property checking on fresh object literals to catch typos. Variables with extra properties are allowed under structural typing.

---

### Example 6: Deeply Nested Object Types for App Settings
**Problem / Scenario:**
Model complex hierarchical application configurations.

**Solution:**
```typescript
interface ServerConfig {
  network: {
    host: string;
    port: number;
    ssl: {
      enabled: boolean;
      certPath?: string;
    };
  };
}

const server: ServerConfig = {
  network: {
    host: "0.0.0.0",
    port: 443,
    ssl: {
      enabled: true,
      certPath: "/etc/ssl/cert.pem"
    }
  }
};

console.log(`Listening on ${server.network.host}:${server.network.port}`);
```

**Explanation & Output:**
Nested interfaces or inline shapes preserve strict type checking at every level of the object hierarchy.

---

### Example 7: Safe Property Access with Optional Chaining and Nullish Coalescing
**Problem / Scenario:**
Safely navigate deep optional properties without causing runtime exceptions.

**Solution:**
```typescript
interface Account {
  owner?: {
    profile?: {
      displayName?: string;
    };
  };
}

function getOwnerName(acc: Account): string {
  return acc.owner?.profile?.displayName ?? "Guest User";
}

console.log("User 1:", getOwnerName({ owner: { profile: { displayName: "Arthur" } } }));
console.log("User 2:", getOwnerName({}));
```

**Explanation & Output:**
Optional chaining ('?.') stops evaluation and returns undefined if an intermediate reference is null or undefined; '??' provides a fallback.

---

### Example 8: Object Destructuring with Renaming and Defaults
**Problem / Scenario:**
Destructure object properties while providing type annotations and defaults.

**Solution:**
```typescript
interface Dimensions {
  width: number;
  height: number;
  depth?: number;
}

function computeVolume({ width, height, depth = 1 }: Dimensions): number {
  return width * height * depth;
}

console.log("Volume with default depth:", computeVolume({ width: 5, height: 10 }));
```

**Explanation & Output:**
Type annotations on destructured parameters are placed after the destructuring pattern, not inside it.

---

### Example 9: Deep Object Freezing Utility
**Problem / Scenario:**
Recursively freeze an object and cast it to a readonly type.

**Solution:**
```typescript
function deepFreeze<T extends object>(obj: T): Readonly<T> {
  Object.freeze(obj);
  for (const key of Object.keys(obj)) {
    const val = (obj as any)[key];
    if (val && typeof val === "object" && !Object.isFrozen(val)) {
      deepFreeze(val);
    }
  }
  return obj as Readonly<T>;
}

const settings = deepFreeze({ api: { endpoint: "/v1" } });
console.log("Frozen endpoint:", settings.api.endpoint);
```

**Explanation & Output:**
Deep freeze combines runtime 'Object.freeze' with TypeScript's compile-time 'Readonly<T>' guarantees.

---

### Example 10: Object Merge Utility with Default Values
**Problem / Scenario:**
Merge partial user options into a complete default configuration object.

**Solution:**
```typescript
interface HttpClientOptions {
  timeout: number;
  retries: number;
  headers: Record<string, string>;
}

const defaultOptions: HttpClientOptions = {
  timeout: 3000,
  retries: 3,
  headers: { "Content-Type": "application/json" }
};

function buildClientOptions(overrides: Partial<HttpClientOptions>): HttpClientOptions {
  return {
    ...defaultOptions,
    ...overrides,
    headers: { ...defaultOptions.headers, ...(overrides.headers ?? {}) }
  };
}

const client = buildClientOptions({ timeout: 5000 });
console.log("Client options:", client);
```

**Explanation & Output:**
Combining object spread operators with typed defaults guarantees the returned object satisfies all required interface contracts.

---

## 🎉 Congratulations

🌕 **You are amazing!** You have conquered **Day 06** of 30 Days of TypeScript. Keep the momentum going!

<div align="center">
  <p><a href="../05_Day_Tuples/05_day_tuples.md">&lt;&lt; Day 5</a> | <a href="../README.md">30 Days of TypeScript</a> | <a href="../07_Day_Type_aliases/07_day_type_aliases.md">Day 7 &gt;&gt;</a></p>
</div>
