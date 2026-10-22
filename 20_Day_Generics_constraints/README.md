# 30 Days Of TypeScript: Day 20 - Generics Constraints & keyof Operator

<div align="center">
  <p><a href="../19_Day_Generics_basics/19_day_generics_basics.md">&lt;&lt; Day 19</a> | <a href="../README.md">30 Days of TypeScript</a> | <a href="../21_Day_Generic_classes/21_day_generic_classes.md">Day 21 &gt;&gt;</a></p>
</div>

---

- [30 Days Of TypeScript: Day 20 - Generics Constraints & keyof Operator](#30-days-of-typescript-day-20---generics-constraints-keyof-operator)
  - [📖 Overview](#-overview)
  - [🎯 Learning Objectives](#-learning-objectives)
  - [💡 Core Concepts & Deep Dive](#-core-concepts--deep-dive)
    - [1. Generic Constraints (T extends U)](#1-generic-constraints-t-extends-u-)
    - [2. Using keyof with Constraints](#2-using-keyof-with-constraints)
  - [💻 Runnable Lesson Demonstration](#-runnable-lesson-demonstration)
  - [⚠️ Common Pitfalls & Pro Tips](#️-common-pitfalls--pro-tips)
  - [💡 10 In-Depth Practical Examples & Solutions](#-10-in-depth-practical-examples--solutions)
    - [Example 1: Basic Generic Constraints with 'extends'](#example-1-basic-generic-constraints-with-extends)
    - [Example 2: Property Key Constraint ('K extends keyof T')](#example-2-property-key-constraint-k-extends-keyof-t)
    - [Example 3: Generic Object Property Setter](#example-3-generic-object-property-setter)
    - [Example 4: Constraining to Primitive Types](#example-4-constraining-to-primitive-types)
    - [Example 5: Deep Property Constraint](#example-5-deep-property-constraint)
    - [Example 6: Safe Object Merging with Constraints](#example-6-safe-object-merging-with-constraints)
    - [Example 7: Filtering Record Values by Type Constraint](#example-7-filtering-record-values-by-type-constraint)
    - [Example 8: Factory Function with Constructor Constraint](#example-8-factory-function-with-constructor-constraint)
    - [Example 9: Discriminating Array vs Non-Array Generics](#example-9-discriminating-array-vs-non-array-generics)
    - [Example 10: Type-Safe Event Bus with Keyed Event Map](#example-10-type-safe-event-bus-with-keyed-event-map)
  - [🎉 Congratulations](#-congratulations)

---

## 📖 Overview

Constrain type parameters using 'extends', combine constraints with the 'keyof' operator, and guarantee property existence safely.

---

## 🎯 Learning Objectives

By the end of today, you will be able to:
- [ ] Master **Generic Constraints (T extends U)**
- [ ] Master **Using keyof with Constraints**
- [ ] Study and implement the 10 in-depth practical examples with complete solutions.

---

## 💡 Core Concepts & Deep Dive


### 1. Generic Constraints (T extends U)

Restricts what types can be passed to a generic parameter (e.g. 'T extends { length: number }').


### 2. Using keyof with Constraints

'K extends keyof T' ensures K is guaranteed to be a valid key of object T.


---

## 💻 Runnable Lesson Demonstration

Execute today's live code in your terminal:
```bash
npm run day:20
```

Here is the source code for today's lesson:
```typescript
// Day 20: Generics Constraints & keyof Operator
function getLength<T extends { length: number }>(item: T): number {
  return item.length;
}

console.log("String length:", getLength("hello"));
console.log("Array length:", getLength([1, 2, 3, 4]));

// Type-safe property getter
function getProp<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}
const user = { name: "Grace", score: 95 };
console.log("User name:", getProp(user, "name"));

```

---

## ⚠️ Common Pitfalls & Pro Tips

> [!TIP]
> **Pro Tip**: In TypeScript, the compiler is your pair-programmer. Pay close attention to compiler diagnostic messages—they describe the exact shape mismatch.

> [!WARNING]
> **Common Pitfall**: Do not fall into the trap of using `any` to silence compiler warnings. Use `unknown` with type guards or write proper generic constraints!

---

## 💡 10 In-Depth Practical Examples & Solutions

### Example 1: Basic Generic Constraints with 'extends'
**Problem / Scenario:**
Constrain a generic type parameter to types that have a 'length' property.

**Solution:**
```typescript
interface HasLength {
  length: number;
}

function logLength<T extends HasLength>(item: T): T {
  console.log("Item length:", item.length);
  return item;
}

logLength("Hello World");
logLength([1, 2, 3, 4]);
logLength({ length: 10, name: "Custom Object" });
```

**Explanation & Output:**
'T extends HasLength' guarantees that 'item' has a numeric 'length' property, while preserving the exact type 'T'.

---

### Example 2: Property Key Constraint ('K extends keyof T')
**Problem / Scenario:**
Safely read an object's property by constraining the key argument.

**Solution:**
```typescript
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const user = { id: 1, name: "Alice", active: true };
const userName = getProperty(user, "name"); // Type: string
const userActive = getProperty(user, "active"); // Type: boolean

console.log("User Name:", userName, "Active:", userActive);
```

**Explanation & Output:**
'K extends keyof T' ensures that 'key' must be a valid property name on 'obj', and the return type is accurately inferred as 'T[K]'.

---

### Example 3: Generic Object Property Setter
**Problem / Scenario:**
Update an object's property safely, ensuring the new value matches that property's type.

**Solution:**
```typescript
function setProperty<T, K extends keyof T>(obj: T, key: K, value: T[K]): void {
  obj[key] = value;
}

const car = { make: "Toyota", year: 2020 };
setProperty(car, "year", 2022); // Allowed
// setProperty(car, "year", "2022"); // Error: 'string' not assignable to 'number'

console.log("Updated Car:", car);
```

**Explanation & Output:**
By pairing 'key: K' with 'value: T[K]', TypeScript enforces that the assigned value matches the property's type.

---

### Example 4: Constraining to Primitive Types
**Problem / Scenario:**
Restrict a generic parameter to only numbers or strings.

**Solution:**
```typescript
function stringifyPrimitive<T extends string | number | boolean>(val: T): string {
  return `Val: ${String(val)}`;
}

console.log(stringifyPrimitive("text"));
console.log(stringifyPrimitive(42));
console.log(stringifyPrimitive(true));
```

**Explanation & Output:**
'T extends Primitive' prevents complex objects, functions, or symbols from being passed.

---

### Example 5: Deep Property Constraint
**Problem / Scenario:**
Constrain access to nested properties within an object.

**Solution:**
```typescript
interface HasId { id: string }

function pluckId<T extends HasId>(entity: T): string {
  return entity.id;
}

const user = { id: "u_123", email: "user@test.com", profile: { age: 30 } };
console.log("Plucked ID:", pluckId(user));
```

**Explanation & Output:**
The constraint requires that any argument has an 'id: string' property, regardless of whatever other properties exist.

---

### Example 6: Safe Object Merging with Constraints
**Problem / Scenario:**
Merge two distinct object types, ensuring both are non-primitive objects.

**Solution:**
```typescript
function mergeObjects<T extends object, U extends object>(obj1: T, obj2: U): T & U {
  return { ...obj1, ...obj2 };
}

const merged = mergeObjects({ name: "Bob" }, { role: "Admin" });
console.log(`Merged: ${merged.name} - ${merged.role}`);
```

**Explanation & Output:**
'T extends object' restricts type arguments to non-primitive reference types.

---

### Example 7: Filtering Record Values by Type Constraint
**Problem / Scenario:**
Filter keys from an object whose values match a specific type constraint.

**Solution:**
```typescript
function sumNumericValues<T extends Record<string, any>>(obj: T): number {
  let total = 0;
  for (const key of Object.keys(obj)) {
    if (typeof obj[key] === "number") {
      total += obj[key];
    }
  }
  return total;
}

const stats = { views: 100, likes: 25, title: "Post" };
console.log("Sum of numbers:", sumNumericValues(stats));
```

**Explanation & Output:**
Using 'Record<string, any>' with runtime narrowing enables flexible mathematical processing on arbitrary object shapes.

---

### Example 8: Factory Function with Constructor Constraint
**Problem / Scenario:**
Create instances of classes dynamically using a generic constructor constraint.

**Solution:**
```typescript
interface Constructable<T> {
  new (...args: any[]): T;
}

function instantiate<T>(ctor: Constructable<T>, ...args: any[]): T {
  return new ctor(...args);
}

class Widget {
  constructor(public title: string) {}
}

const widget = instantiate(Widget, "Primary Dashboard Widget");
console.log("Widget title:", widget.title);
```

**Explanation & Output:**
'new (...args: any[]) => T' enforces that the passed argument must be a constructable class returning 'T'.

---

### Example 9: Discriminating Array vs Non-Array Generics
**Problem / Scenario:**
Ensure a function only operates on arrays and inspects element properties.

**Solution:**
```typescript
function findById<T extends { id: number }>(items: readonly T[], targetId: number): T | undefined {
  return items.find(item => item.id === targetId);
}

const users = [{ id: 1, name: "Grace" }, { id: 2, name: "Alan" }];
console.log("Found:", findById(users, 2)?.name);
```

**Explanation & Output:**
The constraint 'T extends { id: number }' combined with 'items: readonly T[]' ensures that every element has an 'id'.

---

### Example 10: Type-Safe Event Bus with Keyed Event Map
**Problem / Scenario:**
Build a strongly-typed event emitter where events and payloads are strictly constrained.

**Solution:**
```typescript
interface EventMap {
  login: { username: string; timestamp: number };
  logout: { username: string };
}

class TypedEmitter<TMap extends Record<string, any>> {
  private listeners: { [K in keyof TMap]?: ((data: TMap[K]) => void)[] } = {};

  on<K extends keyof TMap>(event: K, handler: (data: TMap[K]) => void): void {
    if (!this.listeners[event]) this.listeners[event] = [];
    this.listeners[event]!.push(handler);
  }

  emit<K extends keyof TMap>(event: K, data: TMap[K]): void {
    const handlers = this.listeners[event] ?? [];
    for (const h of handlers) h(data);
  }
}

const bus = new TypedEmitter<EventMap>();
bus.on("login", data => console.log(`${data.username} logged in at ${data.timestamp}`));
bus.emit("login", { username: "ada", timestamp: Date.now() });
```

**Explanation & Output:**
Constraining 'K extends keyof TMap' guarantees that only registered events can be emitted, and their payloads must strictly match.

---

## 🎉 Congratulations

🌕 **You are amazing!** You have conquered **Day 20** of 30 Days of TypeScript. Keep the momentum going!

<div align="center">
  <p><a href="../19_Day_Generics_basics/19_day_generics_basics.md">&lt;&lt; Day 19</a> | <a href="../README.md">30 Days of TypeScript</a> | <a href="../21_Day_Generic_classes/21_day_generic_classes.md">Day 21 &gt;&gt;</a></p>
</div>
