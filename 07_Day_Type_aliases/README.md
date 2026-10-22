# 30 Days Of TypeScript: Day 07 - Type Aliases & Intersection Types

<div align="center">
  <p><a href="../06_Day_Objects/06_day_objects.md">&lt;&lt; Day 6</a> | <a href="../README.md">30 Days of TypeScript</a> | <a href="../08_Day_Unions_and_literals/08_day_unions_and_literals.md">Day 8 &gt;&gt;</a></p>
</div>

---

- [30 Days Of TypeScript: Day 07 - Type Aliases & Intersection Types](#30-days-of-typescript-day-07---type-aliases-intersection-types)
  - [📖 Overview](#-overview)
  - [🎯 Learning Objectives](#-learning-objectives)
  - [💡 Core Concepts & Deep Dive](#-core-concepts--deep-dive)
    - [1. Type Aliases](#1-type-aliases)
    - [2. Intersection Types (&)](#2-intersection-types-)
  - [💻 Runnable Lesson Demonstration](#-runnable-lesson-demonstration)
  - [⚠️ Common Pitfalls & Pro Tips](#️-common-pitfalls--pro-tips)
  - [💡 10 In-Depth Practical Examples & Solutions](#-10-in-depth-practical-examples--solutions)
    - [Example 1: Basic Type Aliases for Domain Concepts](#example-1-basic-type-aliases-for-domain-concepts)
    - [Example 2: Combining Entity Shapes with Intersection ('&')](#example-2-combining-entity-shapes-with-intersection)
    - [Example 3: Audit Trail Metadata Composition](#example-3-audit-trail-metadata-composition)
    - [Example 4: Handling Property Collisions in Intersections](#example-4-handling-property-collisions-in-intersections)
    - [Example 5: Self-Referential / Recursive Type Aliases (JSON Tree)](#example-5-self-referential-recursive-type-aliases-json-tree)
    - [Example 6: Linked List Node Structure](#example-6-linked-list-node-structure)
    - [Example 7: Combining Behaviors via Intersecting Function Types](#example-7-combining-behaviors-via-intersecting-function-types)
    - [Example 8: API Request and Response Model Composition](#example-8-api-request-and-response-model-composition)
    - [Example 9: Generic Type Aliases with Default Parameters](#example-9-generic-type-aliases-with-default-parameters)
    - [Example 10: Deep Readonly Object Alias](#example-10-deep-readonly-object-alias)
  - [🎉 Congratulations](#-congratulations)

---

## 📖 Overview

Define reusable type definitions with the type keyword and combine multiple types using intersection (&).

---

## 🎯 Learning Objectives

By the end of today, you will be able to:
- [ ] Master **Type Aliases**
- [ ] Master **Intersection Types (&)**
- [ ] Study and implement the 10 in-depth practical examples with complete solutions.

---

## 💡 Core Concepts & Deep Dive


### 1. Type Aliases

A type alias creates a new name for any type: primitives, unions, tuples, or object shapes.


### 2. Intersection Types (&)

Intersection combines multiple types into one. The resulting type must satisfy ALL constituent types.


---

## 💻 Runnable Lesson Demonstration

Execute today's live code in your terminal:
```bash
npm run day:07
```

Here is the source code for today's lesson:
```typescript
// Day 07: Type Aliases & Intersection Types
type Timestamp = number;
type Coordinates = { lat: number; lng: number };

type Identifiable = { id: string };
type AuditInfo = { createdAt: Timestamp; updatedAt: Timestamp };

// Combining with Intersection (&)
type DatabaseEntity = Identifiable & AuditInfo & { title: string };

const doc: DatabaseEntity = {
  id: "doc_01",
  createdAt: Date.now(),
  updatedAt: Date.now(),
  title: "Mastering TypeScript"
};
console.log("Document:", doc);

```

---

## ⚠️ Common Pitfalls & Pro Tips

> [!TIP]
> **Pro Tip**: In TypeScript, the compiler is your pair-programmer. Pay close attention to compiler diagnostic messages: they describe the exact shape mismatch.

> [!WARNING]
> **Common Pitfall**: Do not fall into the trap of using `any` to silence compiler warnings. Use `unknown` with type guards or write proper generic constraints!

---

## 💡 10 In-Depth Practical Examples & Solutions

### Example 1: Basic Type Aliases for Domain Concepts
**Problem / Scenario:**
Create descriptive aliases for primitive types to make signatures self-documenting.

**Solution:**
```typescript
type UUID = string;
type Timestamp = number;
type EmailAddress = string;

interface UserSession {
  sessionId: UUID;
  userEmail: EmailAddress;
  issuedAt: Timestamp;
}

const session: UserSession = {
  sessionId: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
  userEmail: "dev@company.com",
  issuedAt: Date.now()
};

console.log("Session User:", session.userEmail);
```

**Explanation & Output:**
Type aliases give readable, domain-specific names to primitive types without incurring any runtime penalty.

---

### Example 2: Combining Entity Shapes with Intersection ('&')
**Problem / Scenario:**
Compose larger object shapes by combining smaller, focused type building blocks.

**Solution:**
```typescript
type Identifiable = { id: string };
type Timestamped = { createdAt: Date; updatedAt: Date };
type Tagged = { tags: string[] };

type BlogPost = Identifiable & Timestamped & Tagged & {
  title: string;
  content: string;
};

const post: BlogPost = {
  id: "p_101",
  createdAt: new Date(),
  updatedAt: new Date(),
  tags: ["typescript", "fullstack"],
  title: "Mastering Intersection Types",
  content: "Intersections combine all properties into a unified type."
};

console.log("Blog Post ID:", post.id, "Title:", post.title);
```

**Explanation & Output:**
The intersection operator '&' produces a type containing all properties from every constituent type.

---

### Example 3: Audit Trail Metadata Composition
**Problem / Scenario:**
Standardize database record auditing by intersecting domain models with an AuditInfo type.

**Solution:**
```typescript
type AuditInfo = {
  createdBy: string;
  updatedBy: string;
  version: number;
};

type Product = {
  sku: string;
  price: number;
};

type AuditedProduct = Product & AuditInfo;

function printAudit(item: AuditedProduct): void {
  console.log(`SKU ${item.sku} (v${item.version}) updated by ${item.updatedBy}`);
}

printAudit({
  sku: "SKU-992",
  price: 29.99,
  createdBy: "system",
  updatedBy: "admin",
  version: 2
});
```

**Explanation & Output:**
Intersecting entity schemas with metadata components promotes modularity and prevents duplicate field declarations.

---

### Example 4: Handling Property Collisions in Intersections
**Problem / Scenario:**
Explore what happens when intersecting types share identical or conflicting property types.

**Solution:**
```typescript
type A = { id: number; metadata: { source: string } };
type B = { id: number; metadata: { author: string } };

type AB = A & B;

// The resulting 'metadata' property is an intersection of both metadata shapes:
const combined: AB = {
  id: 1,
  metadata: {
    source: "API",
    author: "Alice"
  }
};

console.log("Combined metadata:", combined.metadata);
```

**Explanation & Output:**
When overlapping properties exist, TypeScript intersects their individual property types recursively.

---

### Example 5: Self-Referential / Recursive Type Aliases (JSON Tree)
**Problem / Scenario:**
Model arbitrary nested JSON values using recursive type aliases.

**Solution:**
```typescript
type JSONPrimitive = string | number | boolean | null;
type JSONObject = { [key: string]: JSONValue };
type JSONArray = JSONValue[];
type JSONValue = JSONPrimitive | JSONObject | JSONArray;

const payload: JSONValue = {
  title: "Config",
  version: 2,
  active: true,
  items: ["alpha", 42, { nested: null }]
};

console.log("JSON Payload verified:", payload);
```

**Explanation & Output:**
TypeScript allows type aliases to reference themselves, enabling precise modeling of trees, ASTs, and JSON structures.

---

### Example 6: Linked List Node Structure
**Problem / Scenario:**
Implement a classic singly-linked list node using recursive type aliases.

**Solution:**
```typescript
type ListNode<T> = {
  value: T;
  next: ListNode<T> | null;
};

const list: ListNode<number> = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: null
    }
  }
};

function printList<T>(head: ListNode<T> | null): void {
  let curr = head;
  const vals: T[] = [];
  while (curr !== null) {
    vals.push(curr.value);
    curr = curr.next;
  }
  console.log("List:", vals.join(" -> "));
}

printList(list);
```

**Explanation & Output:**
Recursive type aliases make data structures like trees and linked lists type-safe from root to leaf.

---

### Example 7: Combining Behaviors via Intersecting Function Types
**Problem / Scenario:**
Combine an invokable function with metadata properties using intersection.

**Solution:**
```typescript
type GreeterFunction = {
  (name: string): string;
  defaultLocale: string;
};

const greeter: GreeterFunction = Object.assign(
  (name: string) => `Hello, ${name}!`,
  { defaultLocale: "en-US" }
);

console.log(greeter("Grace"));
console.log("Locale:", greeter.defaultLocale);
```

**Explanation & Output:**
Intersecting a callable signature with an object shape creates hybrid callable objects.

---

### Example 8: API Request and Response Model Composition
**Problem / Scenario:**
Compose API envelopes by intersecting pagination and status models.

**Solution:**
```typescript
type ApiStatus = { success: boolean; timestamp: number };
type Pagination = { page: number; pageSize: number; totalCount: number };

type PaginatedApiResponse<T> = ApiStatus & {
  data: T[];
  pagination: Pagination;
};

const userResponse: PaginatedApiResponse<{ id: number; name: string }> = {
  success: true,
  timestamp: Date.now(),
  data: [{ id: 1, name: "Lucas" }],
  pagination: { page: 1, pageSize: 20, totalCount: 1 }
};

console.log("Response records:", userResponse.data.length);
```

**Explanation & Output:**
Generic type aliases combined with intersections let you build standardized API response formats across all backend endpoints.

---

### Example 9: Generic Type Aliases with Default Parameters
**Problem / Scenario:**
Create a flexible Result container type with default error type.

**Solution:**
```typescript
type Result<T, E = Error> =
  | { ok: true; value: T }
  | { ok: false; error: E };

function divide(a: number, b: number): Result<number, string> {
  if (b === 0) {
    return { ok: false, error: "Division by zero" };
  }
  return { ok: true, value: a / b };
}

const res = divide(10, 2);
if (res.ok) {
  console.log("Quotient:", res.value);
} else {
  console.log("Error:", res.error);
}
```

**Explanation & Output:**
Type aliases support generic type parameters with defaults, providing flexible utility abstractions.

---

### Example 10: Deep Readonly Object Alias
**Problem / Scenario:**
Create a recursively immutable type alias that prevents nested property mutations.

**Solution:**
```typescript
type DeepReadonly<T> = {
  readonly [K in keyof T]: T[K] extends object ? DeepReadonly<T[K]> : T[K];
};

interface CompanyConfig {
  name: string;
  headquarters: {
    city: string;
    zipCode: number;
  };
}

const company: DeepReadonly<CompanyConfig> = {
  name: "TechCorp",
  headquarters: {
    city: "San Francisco",
    zipCode: 94105
  }
};

// company.headquarters.city = "New York"; // Compile Error!
console.log("Company City:", company.headquarters.city);
```

**Explanation & Output:**
Mapped types inside type aliases allow recursive structural transformation across nested objects.

---

## 🎉 Congratulations

🌕 **You are amazing!** You have conquered **Day 07** of 30 Days of TypeScript. Keep the momentum going!

<div align="center">
  <p><a href="../06_Day_Objects/06_day_objects.md">&lt;&lt; Day 6</a> | <a href="../README.md">30 Days of TypeScript</a> | <a href="../08_Day_Unions_and_literals/08_day_unions_and_literals.md">Day 8 &gt;&gt;</a></p>
</div>
