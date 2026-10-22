# 30 Days Of TypeScript: Day 02 - Primitive Data Types & Type Annotations

<div align="center">
  <p><a href="../01_Day_Introduction/01_day_introduction.md">&lt;&lt; Day 1</a> | <a href="../README.md">30 Days of TypeScript</a> | <a href="../03_Day_Special_types/03_day_special_types.md">Day 3 &gt;&gt;</a></p>
</div>

---

- [30 Days Of TypeScript: Day 02 - Primitive Data Types & Type Annotations](#30-days-of-typescript-day-02---primitive-data-types-type-annotations)
  - [📖 Overview](#-overview)
  - [🎯 Learning Objectives](#-learning-objectives)
  - [💡 Core Concepts & Deep Dive](#-core-concepts--deep-dive)
    - [1. Numbers & Number Bases](#1-numbers-number-bases)
    - [2. Strings & Template Literals](#2-strings-template-literals)
    - [3. BigInt & Symbol Primitives](#3-bigint-symbol-primitives)
    - [4. Type Inference vs Explicit Annotation](#4-type-inference-vs-explicit-annotation)
  - [💻 Runnable Lesson Demonstration](#-runnable-lesson-demonstration)
  - [⚠️ Common Pitfalls & Pro Tips](#️-common-pitfalls--pro-tips)
  - [💡 10 In-Depth Practical Examples & Solutions](#-10-in-depth-practical-examples--solutions)
    - [Example 1: String Manipulation and Template Literals](#example-1-string-manipulation-and-template-literals)
    - [Example 2: Number Bases: Decimal, Hexadecimal, Binary, and Octal](#example-2-number-bases-decimal-hexadecimal-binary-and-octal)
    - [Example 3: Boolean Flags and Conditional Branching](#example-3-boolean-flags-and-conditional-branching)
    - [Example 4: BigInt for High-Precision Financial Transactions](#example-4-bigint-for-high-precision-financial-transactions)
    - [Example 5: Unique Symbols as Object Keys](#example-5-unique-symbols-as-object-keys)
    - [Example 6: Strict Null and Undefined Handling](#example-6-strict-null-and-undefined-handling)
    - [Example 7: Cents-to-Dollars Currency Formatter](#example-7-cents-to-dollars-currency-formatter)
    - [Example 8: Binary String to Decimal Converter](#example-8-binary-string-to-decimal-converter)
    - [Example 9: Safe String-to-Integer Parser with Fallback](#example-9-safe-string-to-integer-parser-with-fallback)
    - [Example 10: Metadata Symbol Registry with Typed Lookup](#example-10-metadata-symbol-registry-with-typed-lookup)
  - [🎉 Congratulations](#-congratulations)

---

## 📖 Overview

Learn JavaScript's 7 primitive types in TypeScript: string, number (decimals, hex, binary, octal), boolean, bigint, symbol, null, and undefined, along with explicit annotations vs type inference.

---

## 🎯 Learning Objectives

By the end of today, you will be able to:
- [ ] Master **Numbers & Number Bases**
- [ ] Master **Strings & Template Literals**
- [ ] Master **BigInt & Symbol Primitives**
- [ ] Master **Type Inference vs Explicit Annotation**
- [ ] Study and implement the 10 in-depth practical examples with complete solutions.

---

## 💡 Core Concepts & Deep Dive


### 1. Numbers & Number Bases

TypeScript supports standard decimal numbers, hex (0xFF), binary (0b1010), octal (0o744), plus NaN and Infinity.


### 2. Strings & Template Literals

Strings represent text. Always use lowercase 'string', 'number', 'boolean' rather than wrapper objects 'String', 'Number', 'Boolean'.


### 3. BigInt & Symbol Primitives

BigInt handles arbitrary-precision integers (target ES2020+). Symbols are guaranteed unique and immutable primitive keys.


### 4. Type Inference vs Explicit Annotation

TypeScript infers types when a literal is assigned immediately. Annotations are crucial for function signatures and uninitialized variables.


---

## 💻 Runnable Lesson Demonstration

Execute today's live code in your terminal:
```bash
npm run day:02
```

Here is the source code for today's lesson:
```typescript
// Day 02: Primitive Data Types & Type Annotations
// 1. Numbers in various bases
const decimal: number = 42;
const hex: number = 0x2a;
const binary: number = 0b101010;
const octal: number = 0o52;
console.log("Decimal:", decimal, "Hex:", hex, "Binary:", binary, "Octal:", octal);

// 2. Strings & Template Literals
const author: string = "Anders Hejlsberg";
const quote: string = `"TypeScript makes JavaScript scalable." - ${author}`;
console.log(quote);

// 3. BigInt and Symbol
const bigVal: bigint = 9007199254740991n + 2n;
const symKey: symbol = Symbol("uniqueKey");
console.log("BigInt:", bigVal, "Symbol:", symKey.toString());

// 4. Null and Undefined
const emptyVal: null = null;
const notAssigned: undefined = undefined;
console.log("Null:", emptyVal, "Undefined:", notAssigned);

```

---

## ⚠️ Common Pitfalls & Pro Tips

> [!TIP]
> **Pro Tip**: In TypeScript, the compiler is your pair-programmer. Pay close attention to compiler diagnostic messages: they describe the exact shape mismatch.

> [!WARNING]
> **Common Pitfall**: Do not fall into the trap of using `any` to silence compiler warnings. Use `unknown` with type guards or write proper generic constraints!

---

## 💡 10 In-Depth Practical Examples & Solutions

### Example 1: String Manipulation and Template Literals
**Problem / Scenario:**
Format a user handle and notification count into a sanitized string with strict types.

**Solution:**
```typescript
function formatNotification(username: string, unreadCount: number): string {
  const sanitized = username.trim().toLowerCase();
  return `@${sanitized} has ${unreadCount} unread message${unreadCount === 1 ? "" : "s"}.`;
}

console.log(formatNotification("  ElenaDev  ", 3));
```

**Explanation & Output:**
Primitive string variables give access to all standard string methods while enforcing that only valid strings are formatted.

---

### Example 2: Number Bases: Decimal, Hexadecimal, Binary, and Octal
**Problem / Scenario:**
Declare and compute numbers in different bases with full compiler support.

**Solution:**
```typescript
const decimal: number = 42;
const hex: number = 0x2a;
const binary: number = 0b101010;
const octal: number = 0o52;

console.log("Are all representations equal?", decimal === hex && hex === binary && binary === octal);
```

**Explanation & Output:**
TypeScript supports ES6 number literal prefixes (0x, 0b, 0o). They all resolve to the primitive 'number' type at runtime.

---

### Example 3: Boolean Flags and Conditional Branching
**Problem / Scenario:**
Manage authentication and permission flags with strict boolean typing.

**Solution:**
```typescript
interface AccessToken {
  isAuthenticated: boolean;
  isAdmin: boolean;
}

function evaluateAccess(token: AccessToken): string {
  if (token.isAuthenticated && token.isAdmin) {
    return "Full Admin Access Granted";
  }
  if (token.isAuthenticated) {
    return "Standard User Access Granted";
  }
  return "Access Denied: Please Log In";
}

console.log(evaluateAccess({ isAuthenticated: true, isAdmin: false }));
```

**Explanation & Output:**
Primitive booleans ensure that branch conditions do not accidentally accept truthy or falsy objects without explicit evaluation.

---

### Example 4: BigInt for High-Precision Financial Transactions
**Problem / Scenario:**
Handle large integer values beyond JavaScript's Number.MAX_SAFE_INTEGER using the BigInt primitive.

**Solution:**
```typescript
const microCentsPerBtc: bigint = 100_000_000_000_000n;
const transactionFee: bigint = 25_000n;
const totalDeduction: bigint = microCentsPerBtc + transactionFee;

console.log("Total Micro-cents:", totalDeduction.toString());
```

**Explanation & Output:**
BigInt ('bigint') literals with suffix 'n' prevent precision loss when dealing with cryptographically large integers or financial micro-units.

---

### Example 5: Unique Symbols as Object Keys
**Problem / Scenario:**
Use primitive symbols to create unique, non-colliding property keys on objects.

**Solution:**
```typescript
const INTERNAL_ID: unique symbol = Symbol("internal_id");

interface SecureRecord {
  [INTERNAL_ID]: string;
  name: string;
}

const record: SecureRecord = {
  [INTERNAL_ID]: "sec_98412",
  name: "Confidential Report"
};

console.log("Record Name:", record.name);
console.log("Symbol Key Value:", record[INTERNAL_ID]);
```

**Explanation & Output:**
'unique symbol' provides guaranteed collision-free identifiers for internal properties and metaprogramming.

---

### Example 6: Strict Null and Undefined Handling
**Problem / Scenario:**
Demonstrate how TypeScript prevents accessing properties on null or undefined values.

**Solution:**
```typescript
function findEmail(userId: number): string | undefined {
  const directory: Record<number, string> = { 1: "alice@test.com" };
  return directory[userId];
}

const email = findEmail(2);
// email.toLowerCase(); // Error: 'email' is possibly 'undefined'
if (email !== undefined) {
  console.log("Email found:", email.toLowerCase());
} else {
  console.log("User email not found.");
}
```

**Explanation & Output:**
Under 'strictNullChecks', 'undefined' and 'null' are distinct types and must be narrowed before accessing member properties.

---

### Example 7: Cents-to-Dollars Currency Formatter
**Problem / Scenario:**
Convert an integer amount in cents to a formatted currency string '$XX.YY'.

**Solution:**
```typescript
function formatCentsToCurrency(cents: number): string {
  const dollars = cents / 100;
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
  }).format(dollars);
}

console.log(formatCentsToCurrency(2499)); // $24.99
```

**Explanation & Output:**
Primitive numbers work seamlessly with the ECMAScript Intl API to provide localized, strongly-typed formatting.

---

### Example 8: Binary String to Decimal Converter
**Problem / Scenario:**
Parse a binary representation string into its decimal number value with validation.

**Solution:**
```typescript
function binaryToDecimal(binaryStr: string): number {
  if (!/^[01]+$/.test(binaryStr)) {
    throw new Error(`Invalid binary string: ${binaryStr}`);
  }
  return parseInt(binaryStr, 2);
}

console.log("Binary 1101 in decimal is:", binaryToDecimal("1101")); // 13
```

**Explanation & Output:**
Combining regex validation with 'parseInt' ensures runtime safety while maintaining the strictly typed signature '(binaryStr: string): number'.

---

### Example 9: Safe String-to-Integer Parser with Fallback
**Problem / Scenario:**
Parse an integer string and return a fallback default if parsing yields NaN.

**Solution:**
```typescript
function safeParseInt(raw: string, fallback: number = 0): number {
  const parsed = parseInt(raw, 10);
  return Number.isNaN(parsed) ? fallback : parsed;
}

console.log("Parsed '42':", safeParseInt("42", 1));
console.log("Parsed 'bad_input':", safeParseInt("bad_input", 100));
```

**Explanation & Output:**
NaN is technically of type 'number' in JavaScript; checking with 'Number.isNaN' is essential for robust numeric conversions.

---

### Example 10: Metadata Symbol Registry with Typed Lookup
**Problem / Scenario:**
Store and retrieve metadata from an object using a well-defined Symbol key.

**Solution:**
```typescript
const CREATED_AT_KEY = Symbol("createdAt");

interface LogEntry {
  message: string;
  [CREATED_AT_KEY]: number;
}

function createLog(message: string): LogEntry {
  return {
    message,
    [CREATED_AT_KEY]: Date.now()
  };
}

const entry = createLog("System rebooted");
console.log("Message:", entry.message);
console.log("Logged timestamp:", new Date(entry[CREATED_AT_KEY]).toISOString());
```

**Explanation & Output:**
Using symbols as metadata keys keeps internal diagnostic fields from accidentally appearing in normal object key enumerations.

---

## 🎉 Congratulations

🌕 **You are amazing!** You have conquered **Day 02** of 30 Days of TypeScript. Keep the momentum going!

<div align="center">
  <p><a href="../01_Day_Introduction/01_day_introduction.md">&lt;&lt; Day 1</a> | <a href="../README.md">30 Days of TypeScript</a> | <a href="../03_Day_Special_types/03_day_special_types.md">Day 3 &gt;&gt;</a></p>
</div>
