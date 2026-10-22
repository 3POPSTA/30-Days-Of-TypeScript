# 30 Days Of TypeScript: Day 10 - Type Predicates & Custom Type Guards

<div align="center">
  <p><a href="../09_Day_Type_narrowing/09_day_type_narrowing.md">&lt;&lt; Day 9</a> | <a href="../README.md">30 Days of TypeScript</a> | <a href="../11_Day_Discriminated_unions/11_day_discriminated_unions.md">Day 11 &gt;&gt;</a></p>
</div>

---

- [30 Days Of TypeScript: Day 10 - Type Predicates & Custom Type Guards](#30-days-of-typescript-day-10---type-predicates-custom-type-guards)
  - [📖 Overview](#-overview)
  - [🎯 Learning Objectives](#-learning-objectives)
  - [💡 Core Concepts & Deep Dive](#-core-concepts--deep-dive)
    - [1. Type Predicates (val is Type)](#1-type-predicates-val-is-type-)
    - [2. Assertion Functions (asserts val)](#2-assertion-functions-asserts-val-)
  - [💻 Runnable Lesson Demonstration](#-runnable-lesson-demonstration)
  - [⚠️ Common Pitfalls & Pro Tips](#️-common-pitfalls--pro-tips)
  - [💡 10 In-Depth Practical Examples & Solutions](#-10-in-depth-practical-examples--solutions)
    - [Example 1: Writing a Basic Type Predicate ('val is string')](#example-1-writing-a-basic-type-predicate-val-is-string)
    - [Example 2: Custom Object Type Guard for User Authentication](#example-2-custom-object-type-guard-for-user-authentication)
    - [Example 3: Filtering Array Values with Type Predicates](#example-3-filtering-array-values-with-type-predicates)
    - [Example 4: Assertion Signatures ('asserts condition')](#example-4-assertion-signatures-asserts-condition)
    - [Example 5: Assertion Signature with Type Narrowing ('asserts val is T')](#example-5-assertion-signature-with-type-narrowing-asserts-val-is-t)
    - [Example 6: Discriminating Domain Errors with Type Guards](#example-6-discriminating-domain-errors-with-type-guards)
    - [Example 7: Recursive Type Guard for Nested Data Structures](#example-7-recursive-type-guard-for-nested-data-structures)
    - [Example 8: Validating Array of Specific Objects ('isUserArray')](#example-8-validating-array-of-specific-objects-isuserarray)
    - [Example 9: Type Guard for Promises / Thenables](#example-9-type-guard-for-promises-thenables)
    - [Example 10: Runtime Validation of Literal Union Membership](#example-10-runtime-validation-of-literal-union-membership)
  - [🎉 Congratulations](#-congratulations)

---

## 📖 Overview

Create custom type guards using 'val is Type' syntax to inform the compiler across functions, and use assertion functions with 'asserts val is Type'.

---

## 🎯 Learning Objectives

By the end of today, you will be able to:
- [ ] Master **Type Predicates (val is Type)**
- [ ] Master **Assertion Functions (asserts val)**
- [ ] Study and implement the 10 in-depth practical examples with complete solutions.

---

## 💡 Core Concepts & Deep Dive


### 1. Type Predicates (val is Type)

A function whose return type is 'parameterName is Type'. When it returns true, TypeScript narrows the parameter.


### 2. Assertion Functions (asserts val)

Functions that throw if a condition is false, narrowing the value for the remainder of the scope.


---

## 💻 Runnable Lesson Demonstration

Execute today's live code in your terminal:
```bash
npm run day:10
```

Here is the source code for today's lesson:
```typescript
// Day 10: Type Predicates & Custom Type Guards
interface Car {
  drive: () => void;
}

function isCar(vehicle: unknown): vehicle is Car {
  return typeof vehicle === "object" && vehicle !== null && "drive" in vehicle;
}

const obj: unknown = { drive: () => console.log("Driving!") };
if (isCar(obj)) {
  obj.drive(); // Safely narrowed!
}

```

---

## ⚠️ Common Pitfalls & Pro Tips

> [!TIP]
> **Pro Tip**: In TypeScript, the compiler is your pair-programmer. Pay close attention to compiler diagnostic messages—they describe the exact shape mismatch.

> [!WARNING]
> **Common Pitfall**: Do not fall into the trap of using `any` to silence compiler warnings. Use `unknown` with type guards or write proper generic constraints!

---

## 💡 10 In-Depth Practical Examples & Solutions

### Example 1: Writing a Basic Type Predicate ('val is string')
**Problem / Scenario:**
Create a reusable type guard function that narrows 'unknown' to 'string'.

**Solution:**
```typescript
function isString(val: unknown): val is string {
  return typeof val === "string";
}

const testValue: unknown = "Hello TypeScript";
if (isString(testValue)) {
  console.log("Upper string:", testValue.toUpperCase());
}
```

**Explanation & Output:**
A return type of 'val is string' informs the TypeScript compiler that returning 'true' confirms the argument is of type 'string'.

---

### Example 2: Custom Object Type Guard for User Authentication
**Problem / Scenario:**
Verify that an unknown object matches a User profile structure.

**Solution:**
```typescript
interface AuthUser {
  id: string;
  email: string;
  roles: string[];
}

function isAuthUser(obj: unknown): obj is AuthUser {
  return (
    typeof obj === "object" &&
    obj !== null &&
    "id" in obj && typeof (obj as any).id === "string" &&
    "email" in obj && typeof (obj as any).email === "string" &&
    "roles" in obj && Array.isArray((obj as any).roles)
  );
}

const candidate: unknown = { id: "u_1", email: "auth@test.com", roles: ["admin"] };
if (isAuthUser(candidate)) {
  console.log(`Authenticated ${candidate.email} with roles: ${candidate.roles.join(", ")}`);
}
```

**Explanation & Output:**
Custom object type guards validate runtime shape and provide immediate compile-time type safety.

---

### Example 3: Filtering Array Values with Type Predicates
**Problem / Scenario:**
Filter null and undefined elements from an array while narrowing the array type.

**Solution:**
```typescript
function isDefined<T>(val: T | null | undefined): val is T {
  return val !== null && val !== undefined;
}

const mixedList: (string | null | undefined)[] = ["alpha", null, "beta", undefined, "gamma"];
const cleanStrings: string[] = mixedList.filter(isDefined);

console.log("Clean list:", cleanStrings);
```

**Explanation & Output:**
Standard '.filter(Boolean)' loses type information. A type predicate like 'val is T' narrows '(T | null | undefined)[]' to 'T[]'.

---

### Example 4: Assertion Signatures ('asserts condition')
**Problem / Scenario:**
Create an invariant assertion function that throws on false and narrows types.

**Solution:**
```typescript
function assertCondition(condition: boolean, msg: string): asserts condition {
  if (!condition) {
    throw new Error(`Assertion failed: ${msg}`);
  }
}

function processScore(score: number | null): number {
  assertCondition(score !== null, "Score must not be null");
  // TypeScript now knows score is number:
  return score * 1.1;
}

console.log("Adjusted score:", processScore(100));
```

**Explanation & Output:**
'asserts condition' tells TypeScript that if the function returns normally without throwing, the condition is guaranteed to be true.

---

### Example 5: Assertion Signature with Type Narrowing ('asserts val is T')
**Problem / Scenario:**
Assert that a value is an Error instance or throw.

**Solution:**
```typescript
function assertIsError(err: unknown): asserts err is Error {
  if (!(err instanceof Error)) {
    throw new Error("Value is not an Error instance");
  }
}

try {
  throw new Error("Disk quota exceeded");
} catch (e: unknown) {
  assertIsError(e);
  console.log("Caught Error Message:", e.message);
}
```

**Explanation & Output:**
'asserts val is T' narrows the passed variable in the remaining scope without requiring an 'if' block.

---

### Example 6: Discriminating Domain Errors with Type Guards
**Problem / Scenario:**
Differentiate between network errors, validation errors, and auth errors.

**Solution:**
```typescript
interface NetworkError {
  kind: "NETWORK";
  statusCode: number;
}

interface ValidationError {
  kind: "VALIDATION";
  fields: Record<string, string>;
}

type AppError = NetworkError | ValidationError;

function isNetworkError(error: AppError): error is NetworkError {
  return error.kind === "NETWORK";
}

const err: AppError = { kind: "NETWORK", statusCode: 503 };
if (isNetworkError(err)) {
  console.log("Network status:", err.statusCode);
}
```

**Explanation & Output:**
Type guards provide clean separation of error handling logic based on domain classifications.

---

### Example 7: Recursive Type Guard for Nested Data Structures
**Problem / Scenario:**
Validate that a tree node is valid and recursively well-formed.

**Solution:**
```typescript
interface TreeNode {
  value: string;
  children?: TreeNode[];
}

function isTreeNode(obj: unknown): obj is TreeNode {
  if (typeof obj !== "object" || obj === null) return false;
  if (!("value" in obj) || typeof (obj as any).value !== "string") return false;
  if ("children" in obj && (obj as any).children !== undefined) {
    if (!Array.isArray((obj as any).children)) return false;
    return (obj as any).children.every(isTreeNode);
  }
  return true;
}

const tree: unknown = { value: "root", children: [{ value: "child1" }, { value: "child2" }] };
if (isTreeNode(tree)) {
  console.log("Root node value:", tree.value);
}
```

**Explanation & Output:**
Type predicates can be recursive, validating nested hierarchical structures completely at runtime.

---

### Example 8: Validating Array of Specific Objects ('isUserArray')
**Problem / Scenario:**
Check if an unknown variable is an array where every item satisfies an interface.

**Solution:**
```typescript
interface Member {
  name: string;
  active: boolean;
}

function isMember(obj: unknown): obj is Member {
  return typeof obj === "object" && obj !== null && "name" in obj && "active" in obj;
}

function isMemberArray(val: unknown): val is Member[] {
  return Array.isArray(val) && val.every(isMember);
}

const inputList: unknown = [{ name: "Sam", active: true }, { name: "Tara", active: false }];
if (isMemberArray(inputList)) {
  console.log("Active members:", inputList.filter(m => m.active).map(m => m.name));
}
```

**Explanation & Output:**
Combining 'Array.isArray' with '.every(predicate)' safely asserts that the entire list belongs to 'T[]'.

---

### Example 9: Type Guard for Promises / Thenables
**Problem / Scenario:**
Detect whether an unknown value is a Promise or thenable object.

**Solution:**
```typescript
function isPromise<T = unknown>(val: unknown): val is Promise<T> {
  return (
    typeof val === "object" &&
    val !== null &&
    "then" in val &&
    typeof (val as any).then === "function"
  );
}

const syncVal = 42;
const asyncVal = Promise.resolve("resolved value");

console.log("Is 42 a promise?", isPromise(syncVal));
console.log("Is Promise a promise?", isPromise(asyncVal));
```

**Explanation & Output:**
Duck-typing through custom predicates is the standard way to detect Promises and asynchronous objects.

---

### Example 10: Runtime Validation of Literal Union Membership
**Problem / Scenario:**
Validate if an untrusted string is a member of an allowed string literal union.

**Solution:**
```typescript
const VALID_CURRENCIES = ["USD", "EUR", "GBP", "JPY"] as const;
type Currency = (typeof VALID_CURRENCIES)[number];

function isCurrency(val: string): val is Currency {
  return (VALID_CURRENCIES as readonly string[]).includes(val);
}

const userChoice = "EUR";
if (isCurrency(userChoice)) {
  console.log("Selected valid currency:", userChoice);
}
```

**Explanation & Output:**
Combining 'as const' arrays with type predicates ensures runtime checks and compile-time types stay perfectly in sync.

---

## 🎉 Congratulations

🌕 **You are amazing!** You have conquered **Day 10** of 30 Days of TypeScript. Keep the momentum going!

<div align="center">
  <p><a href="../09_Day_Type_narrowing/09_day_type_narrowing.md">&lt;&lt; Day 9</a> | <a href="../README.md">30 Days of TypeScript</a> | <a href="../11_Day_Discriminated_unions/11_day_discriminated_unions.md">Day 11 &gt;&gt;</a></p>
</div>
