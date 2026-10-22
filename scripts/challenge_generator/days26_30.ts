import { ChallengeFile } from "./types.js";

export const days26_30: ChallengeFile[] = [
  // ==========================================================================
  // DAY 26: THE INFER KEYWORD & TYPE EXTRACTION
  // ==========================================================================
  {
    day: 26,
    folder: "26_Day_The_infer_keyword",
    topic: "The infer Keyword & Unwrapping Types",
    code: `/**
 * ============================================================================
 * DAY 26: THE INFER KEYWORD & UNWRAPPING TYPES — CODING CHALLENGES
 * ============================================================================
 * The 'infer' keyword allows introducing a type variable inside the 'extends'
 * clause of a conditional type to deduce and extract hidden types:
 * - Extracting function return types
 * - Unwrapping Promise values
 * - Extracting array element types
 * - Extracting constructor parameters
 *
 * Test with:
 *   npx tsx 26_Day_The_infer_keyword/challenge.ts
 *   OR
 *   npm run challenge:26
 * ============================================================================
 */

console.log("\\n=======================================================");
console.log("  DAY 26: CHALLENGE VERIFICATION RUNNER");
console.log("=======================================================\\n");

function testCheck(step: string, passed: boolean, details?: string): void {
  if (passed) {
    console.log(\`  [PASS] \${step}\${details ? \` -> \${details}\` : ""}\`);
  } else {
    console.log(\`  [WAIT] \${step} (Needs attention)\${details ? \` -> \${details}\` : ""}\`);
  }
}

// ============================================================================
// STEP 1: Re-implementing ReturnType with infer
// ============================================================================
/**
 * CHALLENGE 1:
 * Create a conditional type 'MyReturnType<T>':
 *   - If T extends (...args: any[]) => infer R: return R
 *   - Otherwise: return never
 */
// >>> YOUR CODE HERE <<<
export type MyReturnType<T> = T extends (...args: any[]) => infer R ? R : never;


// ============================================================================
// STEP 2: Recursive Promise Unwrapper (DeepAwaited)
// ============================================================================
/**
 * CHALLENGE 2:
 * Create a recursive type 'DeepAwaited<T>':
 *   - If T extends Promise<infer U>: recursively unpack DeepAwaited<U>
 *   - Otherwise: return T
 * 
 * Example:
 *   DeepAwaited<Promise<Promise<string>>> => string
 */
// >>> YOUR CODE HERE <<<
export type DeepAwaited<T> = T extends Promise<infer U> ? DeepAwaited<U> : T;


// ============================================================================
// STEP 3: Extracting Array Element Types
// ============================================================================
/**
 * CHALLENGE 3:
 * Create a type 'ElementOf<T>':
 *   - If T extends readonly (infer E)[]: return E
 *   - Otherwise: return never
 */
// >>> YOUR CODE HERE <<<
export type ElementOf<T> = T extends readonly (infer E)[] ? E : never;


// ============================================================================
// STEP 4: Extracting the First Parameter of a Function
// ============================================================================
/**
 * CHALLENGE 4:
 * Create a type 'FirstParam<T>':
 *   - If T extends (first: infer P, ...rest: any[]) => any: return P
 *   - Otherwise: return never
 */
// >>> YOUR CODE HERE <<<
export type FirstParam<T> = T extends (first: infer P, ...rest: any[]) => any ? P : never;


// ============================================================================
// VERIFICATION TEST SUITE
// ============================================================================
console.log("Verifying Step 1 (MyReturnType)...");
function sampleFn(): { id: string; ok: boolean } {
  return { id: "1", ok: true };
}
type SampleReturn = MyReturnType<typeof sampleFn>;
const checkSample: SampleReturn = { id: "1", ok: true };
testCheck("Step 1 - MyReturnType extracted", checkSample.id === "1");

console.log("\\nVerifying Step 2 (DeepAwaited)...");
type NestedPromise = Promise<Promise<number>>;
type Unwrapped = DeepAwaited<NestedPromise>;
const numCheck: Unwrapped = 42;
testCheck("Step 2 - DeepAwaited", numCheck === 42);

console.log("\\nVerifying Step 3 (ElementOf)...");
type StringArr = string[];
type StrEl = ElementOf<StringArr>;
const strElCheck: StrEl = "extracted";
testCheck("Step 3 - ElementOf", strElCheck === "extracted");

console.log("\\nVerifying Step 4 (FirstParam)...");
function greetUser(greeting: string, loud: boolean): void {
  console.log(greeting, loud);
}
type FirstP = FirstParam<typeof greetUser>;
const pCheck: FirstP = "Hello";
testCheck("Step 4 - FirstParam", pCheck === "Hello");

console.log("\\n[Summary] Day 26 challenge checks completed!\\n");
`
  },

  // ==========================================================================
  // DAY 27: UTILITY TYPES PART 1
  // ==========================================================================
  {
    day: 27,
    folder: "27_Day_Utility_types_part_1",
    topic: "Utility Types Part 1: Partial, Pick, Omit, etc.",
    code: `/**
 * ============================================================================
 * DAY 27: UTILITY TYPES MASTERCLASS (PART 1) — CODING CHALLENGES
 * ============================================================================
 * Built-in utility types transform types effortlessly:
 * - Partial<T> & Required<T>
 * - Readonly<T>
 * - Record<K, V>
 * - Pick<T, K> & Omit<T, K>
 *
 * Test with:
 *   npx tsx 27_Day_Utility_types_part_1/challenge.ts
 *   OR
 *   npm run challenge:27
 * ============================================================================
 */

console.log("\\n=======================================================");
console.log("  DAY 27: CHALLENGE VERIFICATION RUNNER");
console.log("=======================================================\\n");

function testCheck(step: string, passed: boolean, details?: string): void {
  if (passed) {
    console.log(\`  [PASS] \${step}\${details ? \` -> \${details}\` : ""}\`);
  } else {
    console.log(\`  [WAIT] \${step} (Needs attention)\${details ? \` -> \${details}\` : ""}\`);
  }
}

// ============================================================================
// STEP 1: Re-implementing Partial & Readonly
// ============================================================================
/**
 * CHALLENGE 1:
 * Re-create TypeScript's built-ins from scratch using mapped types:
 *   - 'MyPartial<T>': makes every property optional
 *   - 'MyReadonly<T>': makes every property readonly
 */
// >>> YOUR CODE HERE <<<
export type MyPartial<T> = {
  [K in keyof T]?: T[K];
};

export type MyReadonly<T> = {
  readonly [K in keyof T]: T[K];
};


// ============================================================================
// STEP 2: Re-implementing Pick & Omit
// ============================================================================
/**
 * CHALLENGE 2:
 * Re-create:
 *   - 'MyPick<T, K extends keyof T>': picks only keys K
 *   - 'MyOmit<T, K extends keyof any>': excludes keys K from T
 */
// >>> YOUR CODE HERE <<<
export type MyPick<T, K extends keyof T> = {
  [P in K]: T[P];
};

export type MyOmit<T, K extends keyof any> = {
  [P in Exclude<keyof T, K>]: T[P];
};


// ============================================================================
// STEP 3: Dictionary Indexing with Record<K, V>
// ============================================================================
/**
 * CHALLENGE 3:
 * Write a function 'createLookup<T extends { id: string }>(items: T[]): Record<string, T>'
 * that indexes an array of entities by their 'id' field.
 */
// >>> YOUR CODE HERE <<<
export function createLookup<T extends { id: string }>(items: T[]): Record<string, T> {
  // TODO: Replace with your implementation
  const lookup: Record<string, T> = {};
  for (const item of items) {
    lookup[item.id] = item;
  }
  return lookup;
}


// ============================================================================
// STEP 4: Composing Utilities for DTO Updates
// ============================================================================
/**
 * CHALLENGE 4:
 * Given:
 *   interface UserAccount {
 *     id: string;
 *     createdAt: Date;
 *     username: string;
 *     email: string;
 *     avatarUrl: string;
 *   }
 * 
 * Define 'UpdateUserDto' which allows updating username, email, or avatarUrl
 * optionally, but excludes 'id' and 'createdAt'.
 * 
 * Syntax: Partial<Omit<UserAccount, "id" | "createdAt">>
 */
export interface UserAccount {
  id: string;
  createdAt: Date;
  username: string;
  email: string;
  avatarUrl: string;
}

// >>> YOUR CODE HERE <<<
export type UpdateUserDto = Partial<Omit<UserAccount, "id" | "createdAt">>;

export function applyUserUpdate(original: UserAccount, patch: UpdateUserDto): UserAccount {
  // TODO: Replace with your implementation
  return { ...original, ...patch };
}


// ============================================================================
// VERIFICATION TEST SUITE
// ============================================================================
console.log("Verifying Step 1 (MyPartial & MyReadonly)...");
interface Task { title: string; done: boolean }
const partialTask: MyPartial<Task> = { title: "Study" };
const readonlyTask: MyReadonly<Task> = { title: "Complete", done: true };
testCheck("Step 1 - MyPartial & MyReadonly", partialTask.done === undefined && readonlyTask.title === "Complete");

console.log("\\nVerifying Step 2 (MyPick & MyOmit)...");
type PickedTask = MyPick<Task, "title">;
type OmittedTask = MyOmit<Task, "done">;
const t1: PickedTask = { title: "T1" };
const t2: OmittedTask = { title: "T2" };
testCheck("Step 2 - MyPick & MyOmit", t1.title === "T1" && t2.title === "T2");

console.log("\\nVerifying Step 3 (createLookup)...");
const lookup = createLookup([
  { id: "u1", name: "Ada" },
  { id: "u2", name: "Bob" }
]);
testCheck("Step 3 - createLookup", lookup["u1"]?.name === "Ada" && lookup["u2"]?.name === "Bob");

console.log("\\nVerifying Step 4 (UpdateUserDto)...");
const initialUser: UserAccount = {
  id: "usr_1",
  createdAt: new Date(),
  username: "ada",
  email: "ada@lovelace.dev",
  avatarUrl: "https://avatar.dev/ada"
};
const patchedUser = applyUserUpdate(initialUser, { email: "newada@lovelace.dev" });
testCheck("Step 4 - applyUserUpdate", patchedUser.email === "newada@lovelace.dev" && patchedUser.username === "ada" && patchedUser.id === "usr_1");

console.log("\\n[Summary] Day 27 challenge checks completed!\\n");
`
  },

  // ==========================================================================
  // DAY 28: UTILITY TYPES PART 2
  // ==========================================================================
  {
    day: 28,
    folder: "28_Day_Utility_types_part_2",
    topic: "Utility Types Part 2: Extract, Exclude, ReturnType, etc.",
    code: `/**
 * ============================================================================
 * DAY 28: UTILITY TYPES MASTERCLASS (PART 2) — CODING CHALLENGES
 * ============================================================================
 * Explore conditional and function introspection utility types:
 * - Exclude<T, U> & Extract<T, U>
 * - NonNullable<T>
 * - ReturnType<T> & Parameters<T>
 * - Awaited<T>
 *
 * Test with:
 *   npx tsx 28_Day_Utility_types_part_2/challenge.ts
 *   OR
 *   npm run challenge:28
 * ============================================================================
 */

console.log("\\n=======================================================");
console.log("  DAY 28: CHALLENGE VERIFICATION RUNNER");
console.log("=======================================================\\n");

function testCheck(step: string, passed: boolean, details?: string): void {
  if (passed) {
    console.log(\`  [PASS] \${step}\${details ? \` -> \${details}\` : ""}\`);
  } else {
    console.log(\`  [WAIT] \${step} (Needs attention)\${details ? \` -> \${details}\` : ""}\`);
  }
}

// ============================================================================
// STEP 1: Re-implementing Exclude & Extract
// ============================================================================
/**
 * CHALLENGE 1:
 * Using distributive conditional types:
 *   - 'MyExclude<T, U>': T extends U ? never : T
 *   - 'MyExtract<T, U>': T extends U ? T : never
 */
// >>> YOUR CODE HERE <<<
export type MyExclude<T, U> = T extends U ? never : T;
export type MyExtract<T, U> = T extends U ? T : never;


// ============================================================================
// STEP 2: Re-implementing NonNullable
// ============================================================================
/**
 * CHALLENGE 2:
 * Define 'MyNonNullable<T>':
 *   - Strips null and undefined from union T: T extends null | undefined ? never : T
 */
// >>> YOUR CODE HERE <<<
export type MyNonNullable<T> = T extends null | undefined ? never : T;


// ============================================================================
// STEP 3: Re-implementing Parameters<T>
// ============================================================================
/**
 * CHALLENGE 3:
 * Define 'MyParameters<T extends (...args: any[]) => any>':
 *   - Extracts parameter types as a tuple: T extends (...args: infer P) => any ? P : never
 */
// >>> YOUR CODE HERE <<<
export type MyParameters<T extends (...args: any[]) => any> = T extends (...args: infer P) => any ? P : never;


// ============================================================================
// STEP 4: Inspecting Service Method Payloads
// ============================================================================
/**
 * CHALLENGE 4:
 * Given the service function:
 *   export async function registerCustomer(email: string, age: number, isVip: boolean) {
 *     return { customerId: "cust_123", registered: true };
 *   }
 * 
 * 1. Extract its parameter tuple using 'Parameters<typeof registerCustomer>' into 'CustomerRegistrationArgs'.
 * 2. Extract its resolved async return type using 'Awaited<ReturnType<typeof registerCustomer>>' into 'RegistrationResult'.
 */
export async function registerCustomer(email: string, age: number, isVip: boolean) {
  return { customerId: "cust_123", registered: true };
}

// >>> YOUR CODE HERE <<<
export type CustomerRegistrationArgs = Parameters<typeof registerCustomer>;
export type RegistrationResult = Awaited<ReturnType<typeof registerCustomer>>;


// ============================================================================
// VERIFICATION TEST SUITE
// ============================================================================
console.log("Verifying Step 1 (MyExclude & MyExtract)...");
type Actions = "fetch" | "fetch_success" | "fetch_fail" | "reset";
type NonReset = MyExclude<Actions, "reset">;
type OnlySuccess = MyExtract<Actions, "fetch_success">;
const testNonReset: NonReset = "fetch";
const testOnlySuccess: OnlySuccess = "fetch_success";
testCheck("Step 1 - MyExclude & MyExtract", testNonReset === "fetch" && testOnlySuccess === "fetch_success");

console.log("\\nVerifying Step 2 (MyNonNullable)...");
type RawInput = string | number | null | undefined;
type CleanInput = MyNonNullable<RawInput>;
const cleanStr: CleanInput = "Valid string";
testCheck("Step 2 - MyNonNullable", typeof cleanStr === "string");

console.log("\\nVerifying Step 3 (MyParameters)...");
function add(a: number, b: number): number { return a + b; }
type AddParams = MyParameters<typeof add>;
const sampleParams: AddParams = [10, 20];
testCheck("Step 3 - MyParameters", sampleParams[0] === 10 && sampleParams[1] === 20);

console.log("\\nVerifying Step 4 (Service Method Introspection)...");
const sampleArgs: CustomerRegistrationArgs = ["user@example.com", 28, true];
const sampleRes: RegistrationResult = { customerId: "cust_123", registered: true };
testCheck("Step 4 - Parameters & Awaited ReturnType", sampleArgs[0] === "user@example.com" && sampleRes.registered === true);

console.log("\\n[Summary] Day 28 challenge checks completed!\\n");
`
  },

  // ==========================================================================
  // DAY 29: ASYNC AND ERROR HANDLING
  // ==========================================================================
  {
    day: 29,
    folder: "29_Day_Async_and_error_handling",
    topic: "Async, Promises, and Robust Error Handling",
    code: `/**
 * ============================================================================
 * DAY 29: ASYNC AND ERROR HANDLING — CODING CHALLENGES
 * ============================================================================
 * Build resilient asynchronous systems in TypeScript:
 * - Promises & async/await typing
 * - Strongly-typed Result monad pattern (railway-oriented programming)
 * - Safe type narrowing in catch blocks ('err: unknown')
 * - Automatic retry with exponential backoff
 *
 * Test with:
 *   npx tsx 29_Day_Async_and_error_handling/challenge.ts
 *   OR
 *   npm run challenge:29
 * ============================================================================
 */

console.log("\\n=======================================================");
console.log("  DAY 29: CHALLENGE VERIFICATION RUNNER");
console.log("=======================================================\\n");

function testCheck(step: string, passed: boolean, details?: string): void {
  if (passed) {
    console.log(\`  [PASS] \${step}\${details ? \` -> \${details}\` : ""}\`);
  } else {
    console.log(\`  [WAIT] \${step} (Needs attention)\${details ? \` -> \${details}\` : ""}\`);
  }
}

// ============================================================================
// STEP 1: Strongly Typed Result Pattern
// ============================================================================
/**
 * CHALLENGE 1:
 * Define:
 *   type Result<T, E = Error> =
 *     | { ok: true; value: T }
 *     | { ok: false; error: E };
 * 
 * Implement helper constructors:
 *   - ok<T>(value: T): Result<T, never>
 *   - fail<E>(error: E): Result<never, E>
 */
// >>> YOUR CODE HERE <<<
export type Result<T, E = Error> =
  | { ok: true; value: T }
  | { ok: false; error: E };

export function ok<T>(value: T): Result<T, never> {
  // TODO: Replace with your implementation
  return { ok: true, value };
}

export function fail<E>(error: E): Result<never, E> {
  // TODO: Replace with your implementation
  return { ok: false, error };
}


// ============================================================================
// STEP 2: Safe Async Wrapper
// ============================================================================
/**
 * CHALLENGE 2:
 * Write a wrapper 'safeAsync<T>(fn: () => Promise<T>): Promise<Result<T, Error>>'
 * that executes the async function inside a try/catch:
 *   - On resolve: returns ok(value)
 *   - On reject: wraps unknown error into Error and returns fail(err)
 */
// >>> YOUR CODE HERE <<<
export async function safeAsync<T>(fn: () => Promise<T>): Promise<Result<T, Error>> {
  // TODO: Replace with your implementation
  try {
    const val = await fn();
    return ok(val);
  } catch (err: unknown) {
    const errorInstance = err instanceof Error ? err : new Error(String(err));
    return fail(errorInstance);
  }
}


// ============================================================================
// STEP 3: Narrowing Unknown Errors in Catch Blocks
// ============================================================================
/**
 * CHALLENGE 3:
 * In TypeScript, catch variables are typed as 'unknown' under 'useUnknownInCatchVariables'.
 * 
 * Write a function 'toErrorMessage(err: unknown): string':
 *   - If err instanceof Error: return err.message
 *   - If typeof err === "string": return err
 *   - Otherwise: return JSON.stringify(err) or String(err)
 */
// >>> YOUR CODE HERE <<<
export function toErrorMessage(err: unknown): string {
  // TODO: Replace with your implementation
  if (err instanceof Error) {
    return err.message;
  }
  if (typeof err === "string") {
    return err;
  }
  return String(err);
}


// ============================================================================
// STEP 4: Asynchronous Retry Mechanism
// ============================================================================
/**
 * CHALLENGE 4:
 * Write an async function 'retryAsync<T>(fn: () => Promise<T>, maxAttempts: number): Promise<T>'
 * that retries 'fn' up to 'maxAttempts' times if it throws.
 * If all attempts fail, rethrows the last encountered error.
 */
// >>> YOUR CODE HERE <<<
export async function retryAsync<T>(fn: () => Promise<T>, maxAttempts: number): Promise<T> {
  // TODO: Replace with your implementation
  let lastErr: unknown;
  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      return await fn();
    } catch (err: unknown) {
      lastErr = err;
    }
  }
  throw lastErr;
}


// ============================================================================
// VERIFICATION TEST SUITE
// ============================================================================
async function runTests(): Promise<void> {
  console.log("Verifying Step 1 (Result Pattern)...");
  const s = ok("success-payload");
  const f = fail(new Error("fail-payload"));
  testCheck("Step 1.1 - ok", s.ok && s.value === "success-payload");
  testCheck("Step 1.2 - fail", !f.ok && f.error.message === "fail-payload");

  console.log("\\nVerifying Step 2 (safeAsync)...");
  const goodRes = await safeAsync(async () => 42);
  const badRes = await safeAsync(async () => { throw new Error("Boom"); });
  testCheck("Step 2.1 - safeAsync success", goodRes.ok && goodRes.value === 42);
  testCheck("Step 2.2 - safeAsync failure caught", !badRes.ok && badRes.error.message === "Boom");

  console.log("\\nVerifying Step 3 (toErrorMessage)...");
  testCheck("Step 3.1 - Error object", toErrorMessage(new Error("API Timeout")) === "API Timeout");
  testCheck("Step 3.2 - string literal", toErrorMessage("Plain string error") === "Plain string error");
  testCheck("Step 3.3 - numeric error", toErrorMessage(404) === "404");

  console.log("\\nVerifying Step 4 (retryAsync)...");
  let attempts = 0;
  const resilientFn = async () => {
    attempts++;
    if (attempts < 3) throw new Error("Transient glitch");
    return "Recovered!";
  };
  const recovered = await retryAsync(resilientFn, 5);
  testCheck("Step 4 - retryAsync succeeded after 3 attempts", recovered === "Recovered!" && attempts === 3);

  console.log("\\n[Summary] Day 29 challenge checks completed!\\n");
}

runTests();
`
  },

  // ==========================================================================
  // DAY 30: FINAL CAPSTONE: EVENT-DRIVEN WORKFLOW ENGINE
  // ==========================================================================
  {
    day: 30,
    folder: "30_Day_Final_capstone_project",
    topic: "Final Capstone: Event-Driven Workflow Engine",
    code: `/**
 * ============================================================================
 * DAY 30: FINAL CAPSTONE: EVENT-DRIVEN WORKFLOW ENGINE — CODING CHALLENGES
 * ============================================================================
 * Congratulations on reaching Day 30!
 * In this final capstone challenge, you bring together everything you've learned:
 * - Generics and generic constraints
 * - Discriminated unions and exhaustive checks
 * - Mapped types and key remapping
 * - Type-safe event emitters
 * - Async pipelines and error boundaries
 *
 * Test with:
 *   npx tsx 30_Day_Final_capstone_project/challenge.ts
 *   OR
 *   npm run challenge:30
 * ============================================================================
 */

console.log("\\n=======================================================");
console.log("  DAY 30: FINAL CAPSTONE VERIFICATION RUNNER");
console.log("=======================================================\\n");

function testCheck(step: string, passed: boolean, details?: string): void {
  if (passed) {
    console.log(\`  [PASS] \${step}\${details ? \` -> \${details}\` : ""}\`);
  } else {
    console.log(\`  [WAIT] \${step} (Needs attention)\${details ? \` -> \${details}\` : ""}\`);
  }
}

// ============================================================================
// STEP 1: Generic Workflow Step Contract
// ============================================================================
/**
 * CHALLENGE 1:
 * Define an interface 'WorkflowStep<TIn, TOut>':
 *   - name: string;
 *   - execute(input: TIn): Promise<TOut>;
 * 
 * Implement a factory function 'createStep<TIn, TOut>(name: string, fn: (input: TIn) => Promise<TOut>): WorkflowStep<TIn, TOut>'.
 */
// >>> YOUR CODE HERE <<<
export interface WorkflowStep<TIn, TOut> {
  name: string;
  execute(input: TIn): Promise<TOut>;
}

export function createStep<TIn, TOut>(
  name: string,
  fn: (input: TIn) => Promise<TOut>
): WorkflowStep<TIn, TOut> {
  // TODO: Replace with your implementation
  return {
    name,
    execute: fn
  };
}


// ============================================================================
// STEP 2: Step Pipeline Composition
// ============================================================================
/**
 * CHALLENGE 2:
 * Write a function 'pipeWorkflowSteps<A, B, C>(step1: WorkflowStep<A, B>, step2: WorkflowStep<B, C>): WorkflowStep<A, C>'
 * that connects two steps into a combined composite step named \`\${step1.name} -> \${step2.name}\`.
 */
// >>> YOUR CODE HERE <<<
export function pipeWorkflowSteps<A, B, C>(
  step1: WorkflowStep<A, B>,
  step2: WorkflowStep<B, C>
): WorkflowStep<A, C> {
  // TODO: Replace with your implementation
  return {
    name: \`\${step1.name} -> \${step2.name}\`,
    execute: async (input: A) => {
      const intermediate = await step1.execute(input);
      return await step2.execute(intermediate);
    }
  };
}


// ============================================================================
// STEP 3: Strictly Typed Event Emitter
// ============================================================================
/**
 * CHALLENGE 3:
 * Implement a generic 'TypedEventEmitter<EventMap extends Record<string, unknown>>':
 *   - on<E extends keyof EventMap>(event: E, handler: (payload: EventMap[E]) => void): void
 *   - emit<E extends keyof EventMap>(event: E, payload: EventMap[E]): void
 */
// >>> YOUR CODE HERE <<<
export class TypedEventEmitter<EventMap extends object> {
  private listeners = new Map<keyof EventMap, ((payload: any) => void)[]>();

  on<E extends keyof EventMap>(event: E, handler: (payload: EventMap[E]) => void): void {
    // TODO: Replace with your implementation
    const existing = this.listeners.get(event) ?? [];
    existing.push(handler);
    this.listeners.set(event, existing);
  }

  emit<E extends keyof EventMap>(event: E, payload: EventMap[E]): void {
    // TODO: Replace with your implementation
    const handlers = this.listeners.get(event) ?? [];
    for (const h of handlers) {
      h(payload);
    }
  }
}


// ============================================================================
// STEP 4: End-to-End Pipeline Execution
// ============================================================================
/**
 * CHALLENGE 4:
 * Create an end-to-end user processing pipeline:
 *   - Step 1: Parse Raw Input: (raw: string) => { username: string }
 *   - Step 2: Validate & Enrich: ({ username: string }) => { id: string; username: string; active: boolean }
 * 
 * Wire them together with 'pipeWorkflowSteps', attach the TypedEventEmitter
 * to emit "step:complete" telemetry, and execute.
 */
export interface UserPipelineEvents {
  "step:complete": { stepName: string; durationMs: number };
}

// >>> YOUR CODE HERE <<<
export async function runCapstonePipeline(rawUser: string): Promise<{ id: string; username: string; active: boolean }> {
  // TODO: Replace with your implementation
  const emitter = new TypedEventEmitter<UserPipelineEvents>();

  const step1 = createStep("ParseRawUser", async (raw: string) => {
    return { username: raw.trim().toLowerCase() };
  });

  const step2 = createStep("EnrichUser", async (parsed: { username: string }) => {
    return { id: \`usr_\${Date.now()}\`, username: parsed.username, active: true };
  });

  const pipeline = pipeWorkflowSteps(step1, step2);
  return await pipeline.execute(rawUser);
}


// ============================================================================
// VERIFICATION TEST SUITE
// ============================================================================
async function runVerification(): Promise<void> {
  console.log("Verifying Step 1 (createStep)...");
  const doubleStep = createStep("Double", async (n: number) => n * 2);
  const doubleRes = await doubleStep.execute(21);
  testCheck("Step 1 - createStep execute", doubleRes === 42 && doubleStep.name === "Double");

  console.log("\\nVerifying Step 2 (pipeWorkflowSteps)...");
  const toStringStep = createStep("ToString", async (n: number) => \`Number: \${n}\`);
  const piped = pipeWorkflowSteps(doubleStep, toStringStep);
  const pipedRes = await piped.execute(5);
  testCheck("Step 2 - pipeWorkflowSteps", pipedRes === "Number: 10" && piped.name === "Double -> ToString");

  console.log("\\nVerifying Step 3 (TypedEventEmitter)...");
  interface TestEvents { "ping": { count: number } }
  const emitter = new TypedEventEmitter<TestEvents>();
  let pingReceived = 0;
  emitter.on("ping", p => { pingReceived = p.count; });
  emitter.emit("ping", { count: 99 });
  testCheck("Step 3 - TypedEventEmitter payload received", pingReceived === 99);

  console.log("\\nVerifying Step 4 (runCapstonePipeline)...");
  const capstoneResult = await runCapstonePipeline("  GRACE_HOPPER  ");
  testCheck("Step 4 - runCapstonePipeline", capstoneResult.username === "grace_hopper" && capstoneResult.active === true);

  console.log("\\n=======================================================");
  console.log("  🏆 CONGRATULATIONS! ALL 30 DAYS MASTERED!");
  console.log("=======================================================\\n");
}

runVerification();
`
  }
];
