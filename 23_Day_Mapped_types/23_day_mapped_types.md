# 30 Days Of TypeScript: Day 23 - Mapped Types & Key Remapping

<div align="center">
  <p><a href="../22_Day_Keyof_and_indexed_access/22_day_keyof_and_indexed_access.md">&lt;&lt; Day 22</a> | <a href="../README.md">30 Days of TypeScript</a> | <a href="../24_Day_Template_literal_types/24_day_template_literal_types.md">Day 24 &gt;&gt;</a></p>
</div>

---

- [30 Days Of TypeScript: Day 23 - Mapped Types & Key Remapping](#30-days-of-typescript-day-23---mapped-types-key-remapping)
  - [📖 Overview](#-overview)
  - [🎯 Learning Objectives](#-learning-objectives)
  - [💡 Core Concepts & Deep Dive](#-core-concepts--deep-dive)
    - [1. Mapped Types Syntax](#1-mapped-types-syntax)
    - [2. Modifiers (+ / -)](#2-modifiers-)
    - [3. Key Remapping via as](#3-key-remapping-via-as)
  - [💻 Runnable Lesson Demonstration](#-runnable-lesson-demonstration)
  - [⚠️ Common Pitfalls & Pro Tips](#️-common-pitfalls--pro-tips)
  - [💡 10 In-Depth Practical Examples & Solutions](#-10-in-depth-practical-examples--solutions)
    - [Example 1: Basic Mapped Type ('{ [K in Keys]: boolean }')](#example-1-basic-mapped-type-k-in-keys-boolean)
    - [Example 2: Modifying Mutability with '+readonly' and '-readonly'](#example-2-modifying-mutability-with-readonly-and--readonly)
    - [Example 3: Modifying Optionality with '+?' and '-?'](#example-3-modifying-optionality-with-and--)
    - [Example 4: Recreating 'Partial<T>' and 'Required<T>' from Scratch](#example-4-recreating-partialt-and-requiredt-from-scratch)
    - [Example 5: Key Remapping using 'as' ('get${Capitalize<K>}')](#example-5-key-remapping-using-as-getcapitalizek)
    - [Example 6: Filtering Out Keys with 'as never'](#example-6-filtering-out-keys-with-as-never)
    - [Example 7: Recursive Deep Readonly Mapped Type](#example-7-recursive-deep-readonly-mapped-type)
    - [Example 8: Mapping Over Union Types](#example-8-mapping-over-union-types)
    - [Example 9: Transforming Value Types ('Nullable<T>')](#example-9-transforming-value-types-nullablet)
    - [Example 10: Automatic Proxy / Validator Generator with Mapped Types](#example-10-automatic-proxy-validator-generator-with-mapped-types)
  - [🎉 Congratulations](#-congratulations)

---

## 📖 Overview

Transform existing types into new types with mapped types, modify flags (+/- readonly and ?), and remap keys using 'as'.

---

## 🎯 Learning Objectives

By the end of today, you will be able to:
- [ ] Master **Mapped Types Syntax**
- [ ] Master **Modifiers (+ / -)**
- [ ] Master **Key Remapping via as**
- [ ] Study and implement the 10 in-depth practical examples with complete solutions.

---

## 💡 Core Concepts & Deep Dive


### 1. Mapped Types Syntax

'{ [K in keyof T]: T[K] }' iterates over every property key in type T.


### 2. Modifiers (+ / -)

Add or remove modifiers: '+readonly' / '-readonly', '+?' / '-?'.


### 3. Key Remapping via as

Filter or rename keys: '[K in keyof T as NewKey]: T[K]'.


---

## 💻 Runnable Lesson Demonstration

Execute today's live code in your terminal:
```bash
npm run day:23
```

Here is the source code for today's lesson:
```typescript
// Day 23: Mapped Types & Key Remapping
type MyReadonly<T> = {
  readonly [K in keyof T]: T[K];
};

type Concrete<T> = {
  [K in keyof T]-?: T[K]; // Strips optional ?
};

interface Todo {
  title: string;
  description?: string;
}
type CompleteTodo = Concrete<Todo>;
console.log("Mapped type defined successfully");

```

---

## ⚠️ Common Pitfalls & Pro Tips

> [!TIP]
> **Pro Tip**: In TypeScript, the compiler is your pair-programmer. Pay close attention to compiler diagnostic messages—they describe the exact shape mismatch.

> [!WARNING]
> **Common Pitfall**: Do not fall into the trap of using `any` to silence compiler warnings. Use `unknown` with type guards or write proper generic constraints!

---

## 💡 10 In-Depth Practical Examples & Solutions

### Example 1: Basic Mapped Type ('{ [K in Keys]: boolean }')
**Problem / Scenario:**
Create a feature flag toggle map from a union of feature keys.

**Solution:**
```typescript
type FeatureName = "darkMode" | "experimentalUi" | "betaApi";

type FeatureFlags = {
  [K in FeatureName]: boolean;
};

const flags: FeatureFlags = {
  darkMode: true,
  experimentalUi: false,
  betaApi: true
};

console.log("Dark mode active?", flags.darkMode);
```

**Explanation & Output:**
Mapped types iterate over each string literal in a union to define corresponding object properties.

---

### Example 2: Modifying Mutability with '+readonly' and '-readonly'
**Problem / Scenario:**
Transform a mutable interface into an immutable one and vice versa.

**Solution:**
```typescript
interface Person {
  name: string;
  age: number;
}

// Add readonly
type ReadonlyPerson = {
  +readonly [K in keyof Person]: Person[K];
};

// Strip readonly
type Mutable<T> = {
  -readonly [K in keyof T]: T[K];
};

const frozen: ReadonlyPerson = { name: "Alan", age: 41 };
// frozen.age = 42; // Error!

const editable: Mutable<ReadonlyPerson> = { name: "Alan", age: 41 };
editable.age = 42; // Allowed!

console.log("Mutable age:", editable.age);
```

**Explanation & Output:**
The '+readonly' and '-readonly' modifiers explicitly add or remove immutability constraints across all keys.

---

### Example 3: Modifying Optionality with '+?' and '-?'
**Problem / Scenario:**
Make all properties optional or strip optionality to make all properties required.

**Solution:**
```typescript
interface FilterOptions {
  category?: string;
  minPrice?: number;
}

type ConcreteFilters<T> = {
  [K in keyof T]-?: T[K]; // Removes '?'
};

const activeFilter: ConcreteFilters<FilterOptions> = {
  category: "Electronics",
  minPrice: 0 // Must be provided!
};

console.log("Concrete category:", activeFilter.category);
```

**Explanation & Output:**
The '-?' modifier removes optionality, transforming optional fields into strictly required ones.

---

### Example 4: Recreating 'Partial<T>' and 'Required<T>' from Scratch
**Problem / Scenario:**
Understand how TypeScript's built-in Partial and Required utility types are implemented.

**Solution:**
```typescript
type MyPartial<T> = {
  [K in keyof T]?: T[K];
};

type MyRequired<T> = {
  [K in keyof T]-?: T[K];
};

interface User { id: number; name?: string }
type PartialUser = MyPartial<User>;
type StrictUser = MyRequired<User>;

const u: StrictUser = { id: 1, name: "Ada" };
console.log("User:", u);
```

**Explanation & Output:**
Standard library utility types are simply mapped types utilizing the '?' and '-?' property modifiers.

---

### Example 5: Key Remapping using 'as' ('get${Capitalize<K>}')
**Problem / Scenario:**
Automatically generate getter method names for each property in an interface.

**Solution:**
```typescript
interface Person {
  name: string;
  age: number;
}

type Getters<T> = {
  [K in keyof T as `get${Capitalize<string & K>}`]: () => T[K];
};

const personGetters: Getters<Person> = {
  getName: () => "Katherine Johnson",
  getAge: () => 101
};

console.log("Name getter:", personGetters.getName());
```

**Explanation & Output:**
Key remapping ('as') uses template literal types to transform property keys into getter or setter function names.

---

### Example 6: Filtering Out Keys with 'as never'
**Problem / Scenario:**
Remove non-string properties from an object type by remapping undesired keys to 'never'.

**Solution:**
```typescript
interface MixedData {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
}

type OnlyStringKeys<T> = {
  [K in keyof T as T[K] extends string ? K : never]: T[K];
};

type StringProperties = OnlyStringKeys<MixedData>;
// Result: { name: string; email: string }

const strings: StringProperties = { name: "Alice", email: "alice@test.com" };
console.log("Strings only:", strings);
```

**Explanation & Output:**
Remapping a key to 'never' filters that property out of the resulting mapped type.

---

### Example 7: Recursive Deep Readonly Mapped Type
**Problem / Scenario:**
Recursively freeze object properties and nested object properties.

**Solution:**
```typescript
type DeepReadonly<T> = {
  readonly [K in keyof T]: T[K] extends Function
    ? T[K]
    : T[K] extends object
    ? DeepReadonly<T[K]>
    : T[K];
};

interface Config {
  db: { host: string; credentials: { user: string } };
}

const locked: DeepReadonly<Config> = {
  db: { host: "db.local", credentials: { user: "admin" } }
};

// locked.db.credentials.user = "root"; // Error!
console.log("Locked DB user:", locked.db.credentials.user);
```

**Explanation & Output:**
Recursive mapped types conditionally apply transformations to nested object children.

---

### Example 8: Mapping Over Union Types
**Problem / Scenario:**
Create a record type mapping union variants to event handler functions.

**Solution:**
```typescript
type EventKind = "click" | "hover" | "scroll";

type EventHandlers = {
  [E in EventKind as `on${Capitalize<E>}`]: (eventData: unknown) => void;
};

const handlers: EventHandlers = {
  onClick: () => console.log("Click handled"),
  onHover: () => console.log("Hover handled"),
  onScroll: () => console.log("Scroll handled")
};

handlers.onClick(null);
```

**Explanation & Output:**
Mapping directly over a union of strings lets you create comprehensive event listener interfaces.

---

### Example 9: Transforming Value Types ('Nullable<T>')
**Problem / Scenario:**
Convert all properties of an object to allow null.

**Solution:**
```typescript
type Nullable<T> = {
  [K in keyof T]: T[K] | null;
};

interface Profile {
  bio: string;
  avatar: string;
}

const uninitializedProfile: Nullable<Profile> = {
  bio: null,
  avatar: null
};

console.log("Profile bio:", uninitializedProfile.bio);
```

**Explanation & Output:**
Mapped types can transform the value types of every property while keeping the original keys intact.

---

### Example 10: Automatic Proxy / Validator Generator with Mapped Types
**Problem / Scenario:**
Generate a validator object containing validation functions for every property of an entity.

**Solution:**
```typescript
interface UserForm {
  username: string;
  age: number;
}

type Validator<T> = {
  [K in keyof T]: (value: T[K]) => boolean;
};

const userValidator: Validator<UserForm> = {
  username: val => val.length >= 3,
  age: val => val >= 18
};

console.log("Username valid?", userValidator.username("linus"));
console.log("Age valid?", userValidator.age(15));
```

**Explanation & Output:**
Mapped types ensure that validator functions always match the precise property types of the target form.

---

## 🎉 Congratulations

🌕 **You are amazing!** You have conquered **Day 23** of 30 Days of TypeScript. Keep the momentum going!

<div align="center">
  <p><a href="../22_Day_Keyof_and_indexed_access/22_day_keyof_and_indexed_access.md">&lt;&lt; Day 22</a> | <a href="../README.md">30 Days of TypeScript</a> | <a href="../24_Day_Template_literal_types/24_day_template_literal_types.md">Day 24 &gt;&gt;</a></p>
</div>
