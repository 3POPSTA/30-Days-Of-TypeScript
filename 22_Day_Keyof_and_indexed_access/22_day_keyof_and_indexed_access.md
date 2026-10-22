# 30 Days Of TypeScript: Day 22 - Keyof, Indexed Access & typeof Queries

<div align="center">
  <p><a href="../21_Day_Generic_classes/21_day_generic_classes.md">&lt;&lt; Day 21</a> | <a href="../README.md">30 Days of TypeScript</a> | <a href="../23_Day_Mapped_types/23_day_mapped_types.md">Day 23 &gt;&gt;</a></p>
</div>

---

- [30 Days Of TypeScript: Day 22 - Keyof, Indexed Access & typeof Queries](#30-days-of-typescript-day-22---keyof-indexed-access-typeof-queries)
  - [📖 Overview](#-overview)
  - [🎯 Learning Objectives](#-learning-objectives)
  - [💡 Core Concepts & Deep Dive](#-core-concepts--deep-dive)
    - [1. keyof Operator](#1-keyof-operator)
    - [2. Indexed Access Types (T[K])](#2-indexed-access-types-t-k-)
    - [3. typeof Type Query](#3-typeof-type-query)
  - [💻 Runnable Lesson Demonstration](#-runnable-lesson-demonstration)
  - [⚠️ Common Pitfalls & Pro Tips](#️-common-pitfalls--pro-tips)
  - [💡 10 In-Depth Practical Examples & Solutions](#-10-in-depth-practical-examples--solutions)
    - [Example 1: Extracting Keys with 'keyof'](#example-1-extracting-keys-with-keyof)
    - [Example 2: Indexed Access for Object Properties ('T[K]')](#example-2-indexed-access-for-object-properties-tk)
    - [Example 3: Extracting Array Element Types ('T[number]')](#example-3-extracting-array-element-types-tnumber)
    - [Example 4: Capturing Runtime Shapes with 'typeof'](#example-4-capturing-runtime-shapes-with-typeof)
    - [Example 5: Combining 'keyof typeof' for Const Objects](#example-5-combining-keyof-typeof-for-const-objects)
    - [Example 6: Safe Deep Property Lookup](#example-6-safe-deep-property-lookup)
    - [Example 7: Extracting Method Signatures via Indexed Access](#example-7-extracting-method-signatures-via-indexed-access)
    - [Example 8: Dynamic Dictionary Access Types](#example-8-dynamic-dictionary-access-types)
    - [Example 9: Converting Const Object Values into Union Types](#example-9-converting-const-object-values-into-union-types)
    - [Example 10: Strongly Typed Configuration Path Resolver](#example-10-strongly-typed-configuration-path-resolver)
  - [🎉 Congratulations](#-congratulations)

---

## 📖 Overview

Extract union keys with keyof, drill into nested types with indexed access (T[K]), and query runtime variables with typeof.

---

## 🎯 Learning Objectives

By the end of today, you will be able to:
- [ ] Master **keyof Operator**
- [ ] Master **Indexed Access Types (T[K])**
- [ ] Master **typeof Type Query**
- [ ] Study and implement the 10 in-depth practical examples with complete solutions.

---

## 💡 Core Concepts & Deep Dive


### 1. keyof Operator

Produces a string or numeric literal union of an object's keys.


### 2. Indexed Access Types (T[K])

Lookup the type of a specific property inside type T.


### 3. typeof Type Query

Extracts the type of a runtime JavaScript variable for use in type annotations.


---

## 💻 Runnable Lesson Demonstration

Execute today's live code in your terminal:
```bash
npm run day:22
```

Here is the source code for today's lesson:
```typescript
// Day 22: Keyof, Indexed Access & typeof Queries
interface UserProfile {
  id: number;
  username: string;
  preferences: {
    theme: "light" | "dark";
    notifications: boolean;
  };
}

type UserKeys = keyof UserProfile; // "id" | "username" | "preferences"
type ThemeType = UserProfile["preferences"]["theme"]; // "light" | "dark"

const defaultTheme: ThemeType = "dark";
console.log("Theme:", defaultTheme);

```

---

## ⚠️ Common Pitfalls & Pro Tips

> [!TIP]
> **Pro Tip**: In TypeScript, the compiler is your pair-programmer. Pay close attention to compiler diagnostic messages—they describe the exact shape mismatch.

> [!WARNING]
> **Common Pitfall**: Do not fall into the trap of using `any` to silence compiler warnings. Use `unknown` with type guards or write proper generic constraints!

---

## 💡 10 In-Depth Practical Examples & Solutions

### Example 1: Extracting Keys with 'keyof'
**Problem / Scenario:**
Use the 'keyof' operator to create a union of all property names of an object type.

**Solution:**
```typescript
interface User {
  id: number;
  name: string;
  email: string;
}

type UserKeys = keyof User; // "id" | "name" | "email"

function formatUserKey(key: UserKeys): string {
  return `User property: ${key}`;
}

console.log(formatUserKey("name"));
```

**Explanation & Output:**
'keyof T' produces a string or numeric literal union representing all keys declared on 'T'.

---

### Example 2: Indexed Access for Object Properties ('T[K]')
**Problem / Scenario:**
Query the specific type of a nested property on an interface.

**Solution:**
```typescript
interface SystemConfig {
  database: {
    connectionString: string;
    poolSize: number;
  };
  logging: {
    level: "debug" | "info" | "error";
  };
}

type DatabaseConfig = SystemConfig["database"];
type LogLevel = SystemConfig["logging"]["level"];

const db: DatabaseConfig = { connectionString: "postgres://localhost", poolSize: 10 };
const lvl: LogLevel = "debug";

console.log("DB pool:", db.poolSize, "Log level:", lvl);
```

**Explanation & Output:**
Indexed access types ('T[K]') mirror JavaScript property lookup syntax at the type level.

---

### Example 3: Extracting Array Element Types ('T[number]')
**Problem / Scenario:**
Extract the union of elements contained in an array type.

**Solution:**
```typescript
const statusCodes = [200, 201, 400, 404, 500] as const;

type StatusCode = (typeof statusCodes)[number]; // 200 | 201 | 400 | 404 | 500

function handleCode(code: StatusCode) {
  console.log("Handling HTTP status:", code);
}

handleCode(200);
```

**Explanation & Output:**
Indexing an array or tuple type with '[number]' yields the union of all element types in that collection.

---

### Example 4: Capturing Runtime Shapes with 'typeof'
**Problem / Scenario:**
Derive a type signature directly from an existing runtime JavaScript object.

**Solution:**
```typescript
const defaultServerOptions = {
  host: "127.0.0.1",
  port: 8080,
  timeout: 5000,
  enableSsl: false
};

type ServerOptions = typeof defaultServerOptions;

function startServer(opts: ServerOptions) {
  console.log(`Starting server on ${opts.host}:${opts.port}`);
}

startServer({ host: "0.0.0.0", port: 3000, timeout: 2000, enableSsl: true });
```

**Explanation & Output:**
'typeof value' refers to the TypeScript type of an existing value, keeping runtime values as the single source of truth.

---

### Example 5: Combining 'keyof typeof' for Const Objects
**Problem / Scenario:**
Extract valid keys and values from an immutable dictionary.

**Solution:**
```typescript
const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  NOT_FOUND: 404
} as const;

type HttpStatusKey = keyof typeof HTTP_STATUS; // "OK" | "CREATED" | "NOT_FOUND"
type HttpStatusVal = (typeof HTTP_STATUS)[HttpStatusKey]; // 200 | 201 | 404

console.log("Key 'OK' maps to:", HTTP_STATUS["OK"]);
```

**Explanation & Output:**
'keyof typeof' extracts keys from a JavaScript constant object, preventing duplicated type declarations.

---

### Example 6: Safe Deep Property Lookup
**Problem / Scenario:**
Safely read nested property types using chained indexed access.

**Solution:**
```typescript
interface ApiResponse {
  data: {
    users: {
      profile: {
        avatarUrl: string;
      }[];
    };
  };
}

type AvatarType = ApiResponse["data"]["users"]["profile"][number]["avatarUrl"];
const avatar: AvatarType = "https://cdn.example.com/avatar.png";
console.log("Avatar:", avatar);
```

**Explanation & Output:**
Indexed access types can be chained deeply to unwrap complex nested API response schemas.

---

### Example 7: Extracting Method Signatures via Indexed Access
**Problem / Scenario:**
Extract a specific method's type from a service interface.

**Solution:**
```typescript
interface NotificationService {
  notify(userId: string, message: string): Promise<boolean>;
  purge(): void;
}

type NotifyMethod = NotificationService["notify"];

const sendAlert: NotifyMethod = async (uid, msg) => {
  console.log(`Alert for ${uid}: ${msg}`);
  return true;
};

sendAlert("usr_99", "Disk 90% full");
```

**Explanation & Output:**
Indexed access allows pulling individual method signatures from large interfaces for standalone use.

---

### Example 8: Dynamic Dictionary Access Types
**Problem / Scenario:**
Access types of an index-signature dictionary dynamically.

**Solution:**
```typescript
interface TranslationDictionary {
  [locale: string]: Record<string, string>;
}

type SingleTranslation = TranslationDictionary[string];

const enTranslations: SingleTranslation = {
  welcome: "Welcome",
  farewell: "Goodbye"
};

console.log("Welcome in English:", enTranslations["welcome"]);
```

**Explanation & Output:**
Indexing an interface by '[string]' extracts the value type of its string index signature.

---

### Example 9: Converting Const Object Values into Union Types
**Problem / Scenario:**
Turn an object mapping codes to descriptions into a union of its values.

**Solution:**
```typescript
const Currencies = {
  USD: "United States Dollar",
  EUR: "Euro",
  GBP: "British Pound"
} as const;

type CurrencyName = (typeof Currencies)[keyof typeof Currencies];

function printCurrency(name: CurrencyName) {
  console.log("Currency:", name);
}

printCurrency("Euro");
```

**Explanation & Output:**
Indexed access over 'keyof typeof' generates a union of all literal values stored in the const object.

---

### Example 10: Strongly Typed Configuration Path Resolver
**Problem / Scenario:**
Access top-level config keys safely using 'keyof' and indexed types.

**Solution:**
```typescript
const appConfig = {
  api: "https://api.v2.io",
  maxRetries: 5,
  secure: true
} as const;

function getConfigVal<K extends keyof typeof appConfig>(key: K): (typeof appConfig)[K] {
  return appConfig[key];
}

console.log("API URL:", getConfigVal("api"));
console.log("Retries:", getConfigVal("maxRetries"));
```

**Explanation & Output:**
Combining 'keyof typeof' with generic constraints guarantees compile-time accuracy for config queries.

---

## 🎉 Congratulations

🌕 **You are amazing!** You have conquered **Day 22** of 30 Days of TypeScript. Keep the momentum going!

<div align="center">
  <p><a href="../21_Day_Generic_classes/21_day_generic_classes.md">&lt;&lt; Day 21</a> | <a href="../README.md">30 Days of TypeScript</a> | <a href="../23_Day_Mapped_types/23_day_mapped_types.md">Day 23 &gt;&gt;</a></p>
</div>
