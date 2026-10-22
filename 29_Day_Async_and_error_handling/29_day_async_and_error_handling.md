# 30 Days Of TypeScript: Day 29 - Async, Promises, and Robust Error Handling

<div align="center">
  <p><a href="../28_Day_Utility_types_part_2/28_day_utility_types_part_2.md">&lt;&lt; Day 28</a> | <a href="../README.md">30 Days of TypeScript</a> | <a href="../30_Day_Final_capstone_project/30_day_final_capstone_project.md">Day 30 &gt;&gt;</a></p>
</div>

---

- [30 Days Of TypeScript: Day 29 - Async, Promises, and Robust Error Handling](#30-days-of-typescript-day-29---async-promises-and-robust-error-handling)
  - [📖 Overview](#-overview)
  - [🎯 Learning Objectives](#-learning-objectives)
  - [💡 Core Concepts & Deep Dive](#-core-concepts--deep-dive)
    - [1. Typed Promises & Async/Await](#1-typed-promises-async-await)
    - [2. The Result Pattern](#2-the-result-pattern)
  - [💻 Runnable Lesson Demonstration](#-runnable-lesson-demonstration)
  - [⚠️ Common Pitfalls & Pro Tips](#️-common-pitfalls--pro-tips)
  - [💡 10 In-Depth Practical Examples & Solutions](#-10-in-depth-practical-examples--solutions)
    - [Example 1: Typing Async Functions and Promises ('Promise<T>')](#example-1-typing-async-functions-and-promises-promiset)
    - [Example 2: Parallel Async Operations with 'Promise.all' and Tuple Types](#example-2-parallel-async-operations-with-promiseall-and-tuple-types)
    - [Example 3: Handling Partial Failures with 'Promise.allSettled'](#example-3-handling-partial-failures-with-promiseallsettled)
    - [Example 4: The Result / Either Monad Pattern ('Result<T, E>')](#example-4-the-result-either-monad-pattern-resultt-e)
    - [Example 5: Type-Safe Try/Catch Wrapper Function](#example-5-type-safe-trycatch-wrapper-function)
    - [Example 6: Typed AbortController and Timeout Handling](#example-6-typed-abortcontroller-and-timeout-handling)
    - [Example 7: Async Generators and 'AsyncIterable<T>'](#example-7-async-generators-and-asynciterablet)
    - [Example 8: Custom Error Class Hierarchy with Type Guards](#example-8-custom-error-class-hierarchy-with-type-guards)
    - [Example 9: Strongly-Typed Event Emitter with Async Listeners](#example-9-strongly-typed-event-emitter-with-async-listeners)
    - [Example 10: Exponential Backoff Retry Utility with Strict Types](#example-10-exponential-backoff-retry-utility-with-strict-types)
  - [🎉 Congratulations](#-congratulations)

---

## 📖 Overview

Build reliable async pipelines with Promise<T>, async/await, and the functional Result<T, E> pattern to banish unhandled runtime exceptions.

---

## 🎯 Learning Objectives

By the end of today, you will be able to:
- [ ] Master **Typed Promises & Async/Await**
- [ ] Master **The Result Pattern**
- [ ] Study and implement the 10 in-depth practical examples with complete solutions.

---

## 💡 Core Concepts & Deep Dive


### 1. Typed Promises & Async/Await

Typing async operations: 'async function fetchUser(id: string): Promise<User>'.


### 2. The Result Pattern

Represent outcomes as values (Result<T, E> = Ok<T> | Err<E>) instead of relying on unpredictable exceptions.


---

## 💻 Runnable Lesson Demonstration

Execute today's live code in your terminal:
```bash
npm run day:29
```

Here is the source code for today's lesson:
```typescript
// Day 29: Async, Promises, and Robust Error Handling
type Result<T, E = Error> =
  | { ok: true; value: T }
  | { ok: false; error: E };

function ok<T>(value: T): Result<T, never> {
  return { ok: true, value };
}

function err<E>(error: E): Result<never, E> {
  return { ok: false, error };
}

async function safeDivision(a: number, b: number): Promise<Result<number, string>> {
  if (b === 0) return err("Division by zero");
  return ok(a / b);
}

const outcome = await safeDivision(10, 2);
if (outcome.ok) {
  console.log("Division success:", outcome.value);
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

### Example 1: Typing Async Functions and Promises ('Promise<T>')
**Problem / Scenario:**
Ensure asynchronous functions declare their resolved value types explicitly.

**Solution:**
```typescript
async function fetchMetric(id: string): Promise<number> {
  // Simulating async network delay
  return 42.8;
}

fetchMetric("cpu_usage").then(val => {
  console.log("Fetched metric value:", val.toFixed(2));
});
```

**Explanation & Output:**
All 'async' functions return a 'Promise<T>', and the compiler prevents returning values that don't match 'T'.

---

### Example 2: Parallel Async Operations with 'Promise.all' and Tuple Types
**Problem / Scenario:**
Run multiple promises concurrently while preserving the distinct return type of each.

**Solution:**
```typescript
async function fetchUser(): Promise<{ name: string }> { return { name: "Alice" }; }
async function fetchScore(): Promise<number> { return 98; }

async function loadDashboard(): Promise<void> {
  // TypeScript infers the exact tuple: [{ name: string }, number]
  const [user, score] = await Promise.all([fetchUser(), fetchScore()]);
  console.log(`Dashboard: User ${user.name} has score ${score}`);
}

loadDashboard();
```

**Explanation & Output:**
Promise.all preserves the positional types of input promises as a strongly typed tuple.

---

### Example 3: Handling Partial Failures with 'Promise.allSettled'
**Problem / Scenario:**
Safely process a batch of promises where some may succeed and others fail.

**Solution:**
```typescript
async function taskOk(): Promise<string> { return "Success"; }
async function taskFail(): Promise<string> { throw new Error("Network timeout"); }

async function runBatch(): Promise<void> {
  const results = await Promise.allSettled([taskOk(), taskFail()]);

  for (const res of results) {
    if (res.status === "fulfilled") {
      console.log("Fulfilled with value:", res.value);
    } else {
      console.error("Rejected with reason:", (res.reason as Error).message);
    }
  }
}

runBatch();
```

**Explanation & Output:**
'Promise.allSettled' returns a discriminated union with status 'fulfilled' (holding 'value') or 'rejected' (holding 'reason').

---

### Example 4: The Result / Either Monad Pattern ('Result<T, E>')
**Problem / Scenario:**
Return errors as values to avoid unhandled try/catch exceptions.

**Solution:**
```typescript
type Result<T, E = Error> =
  | { ok: true; data: T }
  | { ok: false; error: E };

function safeDivide(num: number, denom: number): Result<number, string> {
  if (denom === 0) {
    return { ok: false, error: "Cannot divide by zero" };
  }
  return { ok: true, data: num / denom };
}

const res = safeDivide(10, 0);
if (res.ok) {
  console.log("Result:", res.data);
} else {
  console.warn("Caught expected error:", res.error);
}
```

**Explanation & Output:**
The Result pattern turns runtime exceptions into predictable compile-time branches.

---

### Example 5: Type-Safe Try/Catch Wrapper Function
**Problem / Scenario:**
Wrap any throwing function in a helper that safely converts throws into a Result object.

**Solution:**
```typescript
function tryCatch<T>(fn: () => T): { success: true; value: T } | { success: false; error: Error } {
  try {
    return { success: true, value: fn() };
  } catch (err: unknown) {
    const errorObj = err instanceof Error ? err : new Error(String(err));
    return { success: false, error: errorObj };
  }
}

const outcome = tryCatch(() => JSON.parse('{"valid": true}'));
if (outcome.success) {
  console.log("Parsed value:", outcome.value);
}
```

**Explanation & Output:**
In TypeScript catch clauses, the error variable is typed as 'unknown', requiring narrowing before inspection.

---

### Example 6: Typed AbortController and Timeout Handling
**Problem / Scenario:**
Cancel long-running async requests with typed AbortSignal support.

**Solution:**
```typescript
async function delayWithSignal(ms: number, signal?: AbortSignal): Promise<string> {
  return new Promise((resolve, reject) => {
    if (signal?.aborted) return reject(new Error("Aborted early"));
    const timer = setTimeout(() => resolve("Completed"), ms);
    signal?.addEventListener("abort", () => {
      clearTimeout(timer);
      reject(new Error("Operation aborted"));
    });
  });
}

const controller = new AbortController();
delayWithSignal(100, controller.signal)
  .then(console.log)
  .catch(err => console.log("Caught:", err.message));
```

**Explanation & Output:**
Typing cancellation tokens via 'AbortSignal' allows building responsive, leak-free async workflows.

---

### Example 7: Async Generators and 'AsyncIterable<T>'
**Problem / Scenario:**
Stream typed records asynchronously using an async generator.

**Solution:**
```typescript
async function* countStream(max: number): AsyncGenerator<number, void, unknown> {
  for (let i = 1; i <= max; i++) {
    yield i;
  }
}

async function streamConsumer(): Promise<void> {
  const values: number[] = [];
  for await (const val of countStream(3)) {
    values.push(val);
  }
  console.log("Streamed values:", values);
}

streamConsumer();
```

**Explanation & Output:**
'AsyncGenerator<YieldType, ReturnType, NextType>' ensures streamed data is fully type-checked inside 'for await' loops.

---

### Example 8: Custom Error Class Hierarchy with Type Guards
**Problem / Scenario:**
Define specialized application errors and discriminate them at runtime.

**Solution:**
```typescript
class DomainError extends Error {
  constructor(message: string, public readonly code: string) {
    super(message);
    Object.setPrototypeOf(this, new.target.prototype);
  }
}

class NotFoundError extends DomainError {
  constructor(resource: string) {
    super(`Resource '${resource}' not found`, "NOT_FOUND");
  }
}

try {
  throw new NotFoundError("UserProfile");
} catch (e: unknown) {
  if (e instanceof DomainError) {
    console.error(`Domain Error [${e.code}]: ${e.message}`);
  }
}
```

**Explanation & Output:**
Setting the prototype explicitly in custom error constructors ensures 'instanceof' checks work reliably across all targets.

---

### Example 9: Strongly-Typed Event Emitter with Async Listeners
**Problem / Scenario:**
Execute async listeners sequentially and wait for their completion.

**Solution:**
```typescript
type AsyncListener<T> = (data: T) => Promise<void>;

class AsyncEmitter<T> {
  private listeners: AsyncListener<T>[] = [];

  on(fn: AsyncListener<T>): void {
    this.listeners.push(fn);
  }

  async emit(data: T): Promise<void> {
    for (const fn of this.listeners) {
      await fn(data);
    }
  }
}

const emitter = new AsyncEmitter<string>();
emitter.on(async msg => { console.log("Async received:", msg); });
emitter.emit("Hello Async World!");
```

**Explanation & Output:**
Typing async listeners with 'Promise<void>' allows emitters to await each subscriber in sequence.

---

### Example 10: Exponential Backoff Retry Utility with Strict Types
**Problem / Scenario:**
Retry a failing promise-returning operation with typed exponential backoff.

**Solution:**
```typescript
async function retry<T>(fn: () => Promise<T>, maxRetries: number = 3): Promise<T> {
  let attempt = 0;
  while (true) {
    try {
      return await fn();
    } catch (err: unknown) {
      attempt++;
      if (attempt >= maxRetries) throw err;
      // Exponential delay: 10ms, 20ms, 40ms...
      await new Promise(r => setTimeout(r, 10 * 2 ** attempt));
    }
  }
}

let counter = 0;
retry(async () => {
  counter++;
  if (counter < 2) throw new Error("Temporary failure");
  return "Success on attempt " + counter;
}).then(res => console.log(res));
```

**Explanation & Output:**
Generic retry wrappers retain the exact resolved type '<T>' of the underlying operation while managing retries.

---

## 🎉 Congratulations

🌕 **You are amazing!** You have conquered **Day 29** of 30 Days of TypeScript. Keep the momentum going!

<div align="center">
  <p><a href="../28_Day_Utility_types_part_2/28_day_utility_types_part_2.md">&lt;&lt; Day 28</a> | <a href="../README.md">30 Days of TypeScript</a> | <a href="../30_Day_Final_capstone_project/30_day_final_capstone_project.md">Day 30 &gt;&gt;</a></p>
</div>
