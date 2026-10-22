# 30 Days Of TypeScript: Day 24 - Template Literal Types & Event Strings

<div align="center">
  <p><a href="../23_Day_Mapped_types/23_day_mapped_types.md">&lt;&lt; Day 23</a> | <a href="../README.md">30 Days of TypeScript</a> | <a href="../25_Day_Conditional_types/25_day_conditional_types.md">Day 25 &gt;&gt;</a></p>
</div>

---

- [30 Days Of TypeScript: Day 24 - Template Literal Types & Event Strings](#30-days-of-typescript-day-24---template-literal-types-event-strings)
  - [📖 Overview](#-overview)
  - [🎯 Learning Objectives](#-learning-objectives)
  - [💡 Core Concepts & Deep Dive](#-core-concepts--deep-dive)
    - [1. Template Literal Types](#1-template-literal-types)
    - [2. Intrinsic String Utilities](#2-intrinsic-string-utilities)
    - [3. Type-Safe Event Names](#3-type-safe-event-names)
  - [💻 Runnable Lesson Demonstration](#-runnable-lesson-demonstration)
  - [⚠️ Common Pitfalls & Pro Tips](#️-common-pitfalls--pro-tips)
  - [💡 10 In-Depth Practical Examples & Solutions](#-10-in-depth-practical-examples--solutions)
    - [Example 1: Basic Template Literal Types ('hello ${string}')](#example-1-basic-template-literal-types-hello-string)
    - [Example 2: Intrinsic String Manipulation Utilities](#example-2-intrinsic-string-manipulation-utilities)
    - [Example 3: Modeling Database Actions ('${Action}_${Entity}')](#example-3-modeling-database-actions-action_entity)
    - [Example 4: Type-Safe CSS Dimension Units](#example-4-type-safe-css-dimension-units)
    - [Example 5: Event Handler Naming Convention ('on${Capitalize<Event>}')](#example-5-event-handler-naming-convention-oncapitalizeevent)
    - [Example 6: Key Remapping with Template Literals in Mapped Types](#example-6-key-remapping-with-template-literals-in-mapped-types)
    - [Example 7: Parsing Delimited Strings at Type Level](#example-7-parsing-delimited-strings-at-type-level)
    - [Example 8: Type-Safe REST URL Route Parameters](#example-8-type-safe-rest-url-route-parameters)
    - [Example 9: Snake_case to camelCase Conversion Type](#example-9-snake_case-to-camelcase-conversion-type)
    - [Example 10: Strongly-Typed Redux Action Creator](#example-10-strongly-typed-redux-action-creator)
  - [🎉 Congratulations](#-congratulations)

---

## 📖 Overview

Manipulate and compose string literal types with template literals, intrinsic uppercase/lowercase helpers, and type-safe event buses.

---

## 🎯 Learning Objectives

By the end of today, you will be able to:
- [ ] Master **Template Literal Types**
- [ ] Master **Intrinsic String Utilities**
- [ ] Master **Type-Safe Event Names**
- [ ] Study and implement the 10 in-depth practical examples with complete solutions.

---

## 💡 Core Concepts & Deep Dive


### 1. Template Literal Types

String interpolation at the type level: '`${Prefix}_${Suffix}`'.


### 2. Intrinsic String Utilities

Built-in compiler helpers: Uppercase<S>, Lowercase<S>, Capitalize<S>, Uncapitalize<S>.


### 3. Type-Safe Event Names

Compose event names dynamically: '`${Entity}:${Action}`' for exhaustive event buses.


---

## 💻 Runnable Lesson Demonstration

Execute today's live code in your terminal:
```bash
npm run day:24
```

Here is the source code for today's lesson:
```typescript
// Day 24: Template Literal Types & Event Strings
type Entity = "user" | "order";
type Action = "create" | "update" | "delete";

type EventName = `${Entity}:${Action}`;
// "user:create" | "user:update" | "user:delete" | "order:create" ...

const event: EventName = "user:create";
console.log("Triggered event:", event);

```

---

## ⚠️ Common Pitfalls & Pro Tips

> [!TIP]
> **Pro Tip**: In TypeScript, the compiler is your pair-programmer. Pay close attention to compiler diagnostic messages: they describe the exact shape mismatch.

> [!WARNING]
> **Common Pitfall**: Do not fall into the trap of using `any` to silence compiler warnings. Use `unknown` with type guards or write proper generic constraints!

---

## 💡 10 In-Depth Practical Examples & Solutions

### Example 1: Basic Template Literal Types ('hello ${string}')
**Problem / Scenario:**
Constrain strings to follow a specific prefix or pattern.

**Solution:**
```typescript
type Greeting = `Hello, ${string}!`;

const g1: Greeting = "Hello, World!";
const g2: Greeting = "Hello, TypeScript!";
// const g3: Greeting = "Hi there!"; // Error: Type '"Hi there!"' is not assignable to type 'Greeting'

console.log(g1, g2);
```

**Explanation & Output:**
Template literal types match string patterns at compile time using template literal syntax.

---

### Example 2: Intrinsic String Manipulation Utilities
**Problem / Scenario:**
Use built-in Uppercase, Lowercase, Capitalize, and Uncapitalize type utilities.

**Solution:**
```typescript
type Event = "user_login";

type UpperEvent = Uppercase<Event>;         // "USER_LOGIN"
type LowerEvent = Lowercase<"SESSION_END">; // "session_end"
type CapEvent = Capitalize<"hello">;        // "Hello"
type UncapEvent = Uncapitalize<"Hello">;    // "hello"

const eventName: UpperEvent = "USER_LOGIN";
console.log("Event Name:", eventName);
```

**Explanation & Output:**
TypeScript provides intrinsic compiler utilities to transform character casing in string types.

---

### Example 3: Modeling Database Actions ('${Action}_${Entity}')
**Problem / Scenario:**
Generate all combinations of CRUD actions on database entities.

**Solution:**
```typescript
type Action = "CREATE" | "READ" | "UPDATE" | "DELETE";
type Entity = "USER" | "ORDER" | "PRODUCT";

type AuditAction = `${Action}_${Entity}`;

function recordAuditLog(action: AuditAction): void {
  console.log("Audit Action logged:", action);
}

recordAuditLog("CREATE_USER");
recordAuditLog("DELETE_ORDER");
```

**Explanation & Output:**
Template literal types distribute across unions, producing cross-product permutations automatically.

---

### Example 4: Type-Safe CSS Dimension Units
**Problem / Scenario:**
Enforce that dimension inputs include valid units like 'px', 'rem', or '%'.

**Solution:**
```typescript
type CssUnit = "px" | "rem" | "%" | "vh" | "vw";
type CssValue = `${number}${CssUnit}`;

function setStyleWidth(width: CssValue): void {
  console.log("Set width to:", width);
}

setStyleWidth("100px");
setStyleWidth("2.5rem");
setStyleWidth("50%");
```

**Explanation & Output:**
Combining '${number}' with literal unions enforces strict numeric-with-unit formatting at compile time.

---

### Example 5: Event Handler Naming Convention ('on${Capitalize<Event>}')
**Problem / Scenario:**
Generate event handler method names like 'onClick' and 'onHover' from event names.

**Solution:**
```typescript
type DomEvent = "click" | "hover" | "focus";

type DomHandlerName = `on${Capitalize<DomEvent>}`; // "onClick" | "onHover" | "onFocus"

const handler: DomHandlerName = "onClick";
console.log("Registered handler:", handler);
```

**Explanation & Output:**
Combining 'Capitalize' with template literal types standardizes callback and event listener naming.

---

### Example 6: Key Remapping with Template Literals in Mapped Types
**Problem / Scenario:**
Convert an entity's fields into corresponding event publication keys.

**Solution:**
```typescript
interface State {
  count: number;
  user: string;
}

type StateChangeEvents = {
  [K in keyof State as `on${Capitalize<string & K>}Changed`]: (newVal: State[K]) => void;
};

const listeners: StateChangeEvents = {
  onCountChanged: (val) => console.log("New count:", val),
  onUserChanged: (val) => console.log("New user:", val)
};

listeners.onCountChanged(10);
```

**Explanation & Output:**
Key remapping with template literals generates expressive, strictly-typed event handler interfaces.

---

### Example 7: Parsing Delimited Strings at Type Level
**Problem / Scenario:**
Split a composite string identifier 'namespace:action' into distinct components.

**Solution:**
```typescript
type SplitNamespace<T extends string> =
  T extends `${infer NS}:${infer Act}` ? [NS, Act] : [T, never];

type Command = SplitNamespace<"auth:login">; // ["auth", "login"]
type System = SplitNamespace<"system:reboot">; // ["system", "reboot"]

const cmd: Command = ["auth", "login"];
console.log(`Namespace: ${cmd[0]}, Action: ${cmd[1]}`);
```

**Explanation & Output:**
Using 'infer' inside template literal conditionals allows string pattern extraction at compile time.

---

### Example 8: Type-Safe REST URL Route Parameters
**Problem / Scenario:**
Extract route parameter names like ':id' from URL paths.

**Solution:**
```typescript
type ExtractRouteParams<T extends string> =
  T extends `${string}/:${infer Param}/${infer Rest}`
    ? Param | ExtractRouteParams<`/${Rest}`>
    : T extends `${string}/:${infer Param}`
    ? Param
    : never;

type UserRouteParams = ExtractRouteParams<"/users/:userId/posts/:postId">;
// "userId" | "postId"

function navigate(route: string, params: Record<UserRouteParams, string>): void {
  console.log("Navigating to post:", params.postId, "for user:", params.userId);
}

navigate("/users/:userId/posts/:postId", { userId: "42", postId: "99" });
```

**Explanation & Output:**
Recursive template literal types parse route parameters from URL string templates.

---

### Example 9: Snake_case to camelCase Conversion Type
**Problem / Scenario:**
Convert snake_case string identifiers into camelCase types.

**Solution:**
```typescript
type SnakeToCamel<S extends string> =
  S extends `${infer Head}_${infer Tail}`
    ? `${Head}${Capitalize<SnakeToCamel<Tail>>}`
    : S;

type CamelUser = SnakeToCamel<"first_name_in_records">; // "firstNameInRecords"

const field: CamelUser = "firstNameInRecords";
console.log("Camel case field:", field);
```

**Explanation & Output:**
Recursive template literal matching easily converts string naming conventions across boundary layers.

---

### Example 10: Strongly-Typed Redux Action Creator
**Problem / Scenario:**
Build action types constrained by feature namespaces.

**Solution:**
```typescript
type Module = "cart" | "checkout";
type Verb = "add" | "remove" | "reset";

type ActionType = `[${Module}] ${Verb}`;

interface AppAction {
  type: ActionType;
  payload?: unknown;
}

const action: AppAction = { type: "[cart] add", payload: { item: "Book" } };
console.log("Dispatched action:", action.type);
```

**Explanation & Output:**
Template literal types prevent malformed action strings across state management systems.

---

## 🎉 Congratulations

🌕 **You are amazing!** You have conquered **Day 24** of 30 Days of TypeScript. Keep the momentum going!

<div align="center">
  <p><a href="../23_Day_Mapped_types/23_day_mapped_types.md">&lt;&lt; Day 23</a> | <a href="../README.md">30 Days of TypeScript</a> | <a href="../25_Day_Conditional_types/25_day_conditional_types.md">Day 25 &gt;&gt;</a></p>
</div>
