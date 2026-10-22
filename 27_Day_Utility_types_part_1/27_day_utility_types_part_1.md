# 30 Days Of TypeScript: Day 27 - Utility Types Masterclass (Part 1)

<div align="center">
  <p><a href="../26_Day_The_infer_keyword/26_day_the_infer_keyword.md">&lt;&lt; Day 26</a> | <a href="../README.md">30 Days of TypeScript</a> | <a href="../28_Day_Utility_types_part_2/28_day_utility_types_part_2.md">Day 28 &gt;&gt;</a></p>
</div>

---

- [30 Days Of TypeScript: Day 27 - Utility Types Masterclass (Part 1)](#30-days-of-typescript-day-27---utility-types-masterclass-part-1-)
  - [📖 Overview](#-overview)
  - [🎯 Learning Objectives](#-learning-objectives)
  - [💡 Core Concepts & Deep Dive](#-core-concepts--deep-dive)
    - [1. Partial and Required](#1-partial-and-required)
    - [2. Pick and Omit](#2-pick-and-omit)
    - [3. Record<K, T>](#3-record-k-t-)
  - [💻 Runnable Lesson Demonstration](#-runnable-lesson-demonstration)
  - [⚠️ Common Pitfalls & Pro Tips](#️-common-pitfalls--pro-tips)
  - [💡 10 In-Depth Practical Examples & Solutions](#-10-in-depth-practical-examples--solutions)
    - [Example 1: 'Partial<T>' for Entity Patch Payloads](#example-1-partialt-for-entity-patch-payloads)
    - [Example 2: 'Required<T>' for Complete Configurations](#example-2-requiredt-for-complete-configurations)
    - [Example 3: 'Readonly<T>' for Immutable Snapshots](#example-3-readonlyt-for-immutable-snapshots)
    - [Example 4: 'Record<K, T>' for Key-Value Dictionaries](#example-4-recordk-t-for-key-value-dictionaries)
    - [Example 5: 'Pick<T, K>' for Selecting Entity Subsets](#example-5-pickt-k-for-selecting-entity-subsets)
    - [Example 6: 'Omit<T, K>' for Sanitizing Sensitive Fields](#example-6-omitt-k-for-sanitizing-sensitive-fields)
    - [Example 7: Combining 'Pick' and 'Omit' for DTO Transformation](#example-7-combining-pick-and-omit-for-dto-transformation)
    - [Example 8: Custom 'RequireAtLeastOne<T>' Using Standard Utilities](#example-8-custom-requireatleastonet-using-standard-utilities)
    - [Example 9: Custom 'DeepPartial<T>' Architecture](#example-9-custom-deeppartialt-architecture)
    - [Example 10: Real-World User Management Service Using Utility Types](#example-10-real-world-user-management-service-using-utility-types)
  - [🎉 Congratulations](#-congratulations)

---

## 📖 Overview

Master built-in object utility types: Partial, Required, Readonly, Record, Pick, and Omit.

---

## 🎯 Learning Objectives

By the end of today, you will be able to:
- [ ] Master **Partial and Required**
- [ ] Master **Pick and Omit**
- [ ] Master **Record<K, T>**
- [ ] Study and implement the 10 in-depth practical examples with complete solutions.

---

## 💡 Core Concepts & Deep Dive


### 1. Partial and Required

'Partial<T>' makes all properties optional; 'Required<T>' makes all properties mandatory.


### 2. Pick and Omit

'Pick<T, Keys>' extracts specific keys; 'Omit<T, Keys>' removes specific keys.


### 3. Record<K, T>

Constructs an object type with property keys K of type T.


---

## 💻 Runnable Lesson Demonstration

Execute today's live code in your terminal:
```bash
npm run day:27
```

Here is the source code for today's lesson:
```typescript
// Day 27: Utility Types Masterclass (Part 1)
interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}

// Partial update DTO
type UpdateUserDto = Partial<User>;
// Public user profile (strip role)
type PublicProfile = Omit<User, "role">;
// User map
type UserMap = Record<number, User>;

console.log("Utility types (part 1) compiled successfully");

```

---

## ⚠️ Common Pitfalls & Pro Tips

> [!TIP]
> **Pro Tip**: In TypeScript, the compiler is your pair-programmer. Pay close attention to compiler diagnostic messages: they describe the exact shape mismatch.

> [!WARNING]
> **Common Pitfall**: Do not fall into the trap of using `any` to silence compiler warnings. Use `unknown` with type guards or write proper generic constraints!

---

## 💡 10 In-Depth Practical Examples & Solutions

### Example 1: 'Partial<T>' for Entity Patch Payloads
**Problem / Scenario:**
Create an update function that accepts any subset of an entity's fields.

**Solution:**
```typescript
interface User {
  id: string;
  name: string;
  email: string;
  bio: string;
}

function updateUser(original: User, patch: Partial<User>): User {
  return { ...original, ...patch };
}

const current: User = { id: "1", name: "Ada", email: "ada@lovelace.com", bio: "Mathematician" };
const updated = updateUser(current, { bio: "First Computer Programmer" });

console.log("Updated bio:", updated.bio);
```

**Explanation & Output:**
'Partial<T>' makes all properties of 'T' optional, perfect for HTTP PATCH endpoints and updates.

---

### Example 2: 'Required<T>' for Complete Configurations
**Problem / Scenario:**
Convert optional configuration fields into strictly mandatory properties.

**Solution:**
```typescript
interface AppSettings {
  env?: "dev" | "prod";
  port?: number;
}

function startApplication(config: Required<AppSettings>): void {
  console.log(`Running in ${config.env} on port ${config.port}`);
}

startApplication({ env: "prod", port: 8080 });
```

**Explanation & Output:**
'Required<T>' strips all '?' modifiers, guaranteeing that no properties are undefined.

---

### Example 3: 'Readonly<T>' for Immutable Snapshots
**Problem / Scenario:**
Freeze entity objects so callers cannot accidentally modify properties.

**Solution:**
```typescript
interface Point { x: number; y: number }

function getOrigin(): Readonly<Point> {
  return { x: 0, y: 0 };
}

const origin = getOrigin();
// origin.x = 10; // Error: Cannot assign to 'x' because it is a read-only property.
console.log("Origin coordinates:", origin.x, origin.y);
```

**Explanation & Output:**
'Readonly<T>' marks every property as read-only, protecting internal states.

---

### Example 4: 'Record<K, T>' for Key-Value Dictionaries
**Problem / Scenario:**
Map a union of countries to their currency symbols using 'Record<K, T>'.

**Solution:**
```typescript
type CountryCode = "US" | "UK" | "JP";

const currencyMap: Record<CountryCode, string> = {
  US: "USD ($)",
  UK: "GBP (£)",
  JP: "JPY (¥)"
};

console.log("Japan Currency:", currencyMap["JP"]);
```

**Explanation & Output:**
'Record<Keys, Type>' builds an object type whose keys are 'Keys' and values are 'Type'.

---

### Example 5: 'Pick<T, K>' for Selecting Entity Subsets
**Problem / Scenario:**
Select only the publicly shareable properties of a user profile.

**Solution:**
```typescript
interface FullUser {
  id: string;
  username: string;
  email: string;
  passwordHash: string;
}

type PublicUser = Pick<FullUser, "id" | "username">;

const publicProfile: PublicUser = {
  id: "u_42",
  username: "Ada"
};

console.log("Public profile:", publicProfile);
```

**Explanation & Output:**
'Pick<T, K>' creates a new type containing only the keys specified in 'K'.

---

### Example 6: 'Omit<T, K>' for Sanitizing Sensitive Fields
**Problem / Scenario:**
Exclude sensitive fields like passwords and tokens from database responses.

**Solution:**
```typescript
interface UserAccount {
  id: string;
  email: string;
  salt: string;
  hashedSecret: string;
}

type SafeUserAccount = Omit<UserAccount, "salt" | "hashedSecret">;

const safeAccount: SafeUserAccount = {
  id: "acc_1",
  email: "user@domain.com"
};

console.log("Safe Account:", safeAccount);
```

**Explanation & Output:**
'Omit<T, K>' constructs a type by removing the specified keys 'K' from 'T'.

---

### Example 7: Combining 'Pick' and 'Omit' for DTO Transformation
**Problem / Scenario:**
Build a create request DTO by omitting system IDs and picking desired fields.

**Solution:**
```typescript
interface Product {
  id: string;
  sku: string;
  name: string;
  price: number;
  createdAt: Date;
}

type CreateProductDTO = Omit<Product, "id" | "createdAt"> & {
  initialStock: number;
};

const newProduct: CreateProductDTO = {
  sku: "BOOK-001",
  name: "TypeScript Deep Dive",
  price: 39.99,
  initialStock: 100
};

console.log("New Product SKU:", newProduct.sku);
```

**Explanation & Output:**
Combining utility types with intersections enables flexible Data Transfer Object modeling.

---

### Example 8: Custom 'RequireAtLeastOne<T>' Using Standard Utilities
**Problem / Scenario:**
Require that callers provide at least one contact method (email or phone).

**Solution:**
```typescript
type RequireAtLeastOne<T, Keys extends keyof T = keyof T> =
  Pick<T, Exclude<keyof T, Keys>> &
  {
    [K in Keys]-?: Required<Pick<T, K>> & Partial<Pick<T, Exclude<Keys, K>>>;
  }[Keys];

interface ContactInfo {
  email?: string;
  phone?: string;
}

type ValidContact = RequireAtLeastOne<ContactInfo>;

const c1: ValidContact = { email: "test@domain.com" }; // Valid
const c2: ValidContact = { phone: "+123456789" };      // Valid
// const c3: ValidContact = {}; // Error!

console.log("Contact 1:", c1);
```

**Explanation & Output:**
Composing standard utility types lets you enforce sophisticated domain rules like 'at least one property'.

---

### Example 9: Custom 'DeepPartial<T>' Architecture
**Problem / Scenario:**
Recursively make all nested properties of an object optional.

**Solution:**
```typescript
type DeepPartial<T> = {
  [K in keyof T]?: T[K] extends object ? DeepPartial<T[K]> : T[K];
};

interface Company {
  name: string;
  address: {
    street: string;
    city: string;
  };
}

const partialCompany: DeepPartial<Company> = {
  address: {
    city: "Seattle" // Street and name omitted!
  }
};

console.log("Partial city:", partialCompany.address?.city);
```

**Explanation & Output:**
Recursive mapped types build custom utility extensions that handle deeply nested object graphs.

---

### Example 10: Real-World User Management Service Using Utility Types
**Problem / Scenario:**
Demonstrate a complete CRUD service interface built entirely using standard utilities.

**Solution:**
```typescript
interface UserEntity {
  id: string;
  name: string;
  email: string;
  role: "admin" | "user";
  createdAt: Date;
}

interface UserService {
  create(payload: Omit<UserEntity, "id" | "createdAt">): UserEntity;
  update(id: string, patch: Partial<Omit<UserEntity, "id">>): UserEntity;
  list(): ReadonlyArray<UserEntity>;
}

const service: UserService = {
  create(p) { return { ...p, id: "1", createdAt: new Date() }; },
  update(id, patch) { return { id, name: "Name", email: "e", role: "user", createdAt: new Date(), ...patch }; },
  list() { return []; }
};

const user = service.create({ name: "Alan", email: "alan@turing.org", role: "admin" });
console.log("Created user role:", user.role);
```

**Explanation & Output:**
Using utility types across service interfaces keeps method inputs tightly constrained and eliminates duplicate types.

---

## 🎉 Congratulations

🌕 **You are amazing!** You have conquered **Day 27** of 30 Days of TypeScript. Keep the momentum going!

<div align="center">
  <p><a href="../26_Day_The_infer_keyword/26_day_the_infer_keyword.md">&lt;&lt; Day 26</a> | <a href="../README.md">30 Days of TypeScript</a> | <a href="../28_Day_Utility_types_part_2/28_day_utility_types_part_2.md">Day 28 &gt;&gt;</a></p>
</div>
