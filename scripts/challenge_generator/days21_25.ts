import { ChallengeFile } from "./types.js";

export const days21_25: ChallengeFile[] = [
  // ==========================================================================
  // DAY 21: GENERIC CLASSES & DATA STRUCTURES
  // ==========================================================================
  {
    day: 21,
    folder: "21_Day_Generic_classes",
    topic: "Generic Classes & Data Structures",
    code: `/**
 * ============================================================================
 * DAY 21: GENERIC CLASSES & DATA STRUCTURES - CODING CHALLENGES
 * ============================================================================
 * Generic classes bind type parameters to an entire instance, ensuring
 * consistency across all methods and internal storage.
 *
 * Test with:
 *   npx tsx 21_Day_Generic_classes/challenge.ts
 *   OR
 *   npm run challenge:21
 * ============================================================================
 */

console.log("\\n=======================================================");
console.log("  DAY 21: CHALLENGE VERIFICATION RUNNER");
console.log("=======================================================\\n");

function testCheck(step: string, passed: boolean, details?: string): void {
  if (passed) {
    console.log(\`  [PASS] \${step}\${details ? \` -> \${details}\` : ""}\`);
  } else {
    console.log(\`  [WAIT] \${step} (Needs attention)\${details ? \` -> \${details}\` : ""}\`);
  }
}

// ============================================================================
// STEP 1: Generic LIFO Stack
// ============================================================================
/**
 * CHALLENGE 1:
 * Implement a generic LIFO (Last-In-First-Out) 'Stack<T>' class:
 *   - push(item: T): void
 *   - pop(): T | undefined
 *   - peek(): T | undefined
 *   - size(): number
 *   - isEmpty(): boolean
 */
// >>> YOUR CODE HERE <<<
export class Stack<T> {
  private items: T[] = [];

  push(item: T): void {
    // TODO: Replace with your implementation
    this.items.push(item);
  }

  pop(): T | undefined {
    // TODO: Replace with your implementation
    return this.items.pop();
  }

  peek(): T | undefined {
    // TODO: Replace with your implementation
    return this.items[this.items.length - 1];
  }

  size(): number {
    // TODO: Replace with your implementation
    return this.items.length;
  }

  isEmpty(): boolean {
    // TODO: Replace with your implementation
    return this.items.length === 0;
  }
}


// ============================================================================
// STEP 2: Generic FIFO Queue
// ============================================================================
/**
 * CHALLENGE 2:
 * Implement a generic FIFO (First-In-First-Out) 'Queue<T>' class:
 *   - enqueue(item: T): void
 *   - dequeue(): T | undefined
 *   - size(): number
 */
// >>> YOUR CODE HERE <<<
export class Queue<T> {
  private items: T[] = [];

  enqueue(item: T): void {
    // TODO: Replace with your implementation
    this.items.push(item);
  }

  dequeue(): T | undefined {
    // TODO: Replace with your implementation
    return this.items.shift();
  }

  size(): number {
    // TODO: Replace with your implementation
    return this.items.length;
  }
}


// ============================================================================
// STEP 3: Generic Key-Value Memory Cache
// ============================================================================
/**
 * CHALLENGE 3:
 * Implement a generic 'MemoryCache<K extends string | number, V>' class:
 *   - set(key: K, value: V): void
 *   - get(key: K): V | undefined
 *   - has(key: K): boolean
 *   - clear(): void
 */
// >>> YOUR CODE HERE <<<
export class MemoryCache<K extends string | number, V> {
  private store = new Map<K, V>();

  set(key: K, value: V): void {
    // TODO: Replace with your implementation
    this.store.set(key, value);
  }

  get(key: K): V | undefined {
    // TODO: Replace with your implementation
    return this.store.get(key);
  }

  has(key: K): boolean {
    // TODO: Replace with your implementation
    return this.store.has(key);
  }

  clear(): void {
    // TODO: Replace with your implementation
    this.store.clear();
  }
}


// ============================================================================
// STEP 4: Generic Priority Task Queue
// ============================================================================
/**
 * CHALLENGE 4:
 * Implement a class 'PriorityTaskQueue<TTask extends { priority: number; id: string }>':
 *   - addTask(task: TTask): void
 *   - getNextTask(): TTask | undefined
 *     (dequeues and returns the task with the HIGHEST priority number)
 */
// >>> YOUR CODE HERE <<<
export class PriorityTaskQueue<TTask extends { priority: number; id: string }> {
  private tasks: TTask[] = [];

  addTask(task: TTask): void {
    // TODO: Replace with your implementation
    this.tasks.push(task);
  }

  getNextTask(): TTask | undefined {
    // TODO: Replace with your implementation
    if (this.tasks.length === 0) return undefined;
    let highestIdx = 0;
    for (let i = 1; i < this.tasks.length; i++) {
      if (this.tasks[i].priority > this.tasks[highestIdx].priority) {
        highestIdx = i;
      }
    }
    return this.tasks.splice(highestIdx, 1)[0];
  }
}


// ============================================================================
// VERIFICATION TEST SUITE
// ============================================================================
console.log("Verifying Step 1 (Stack<T>)...");
const stack = new Stack<number>();
stack.push(10);
stack.push(20);
testCheck("Step 1.1 - peek", stack.peek() === 20);
testCheck("Step 1.2 - pop", stack.pop() === 20 && stack.size() === 1);

console.log("\\nVerifying Step 2 (Queue<T>)...");
const queue = new Queue<string>();
queue.enqueue("first");
queue.enqueue("second");
testCheck("Step 2 - dequeue", queue.dequeue() === "first" && queue.size() === 1);

console.log("\\nVerifying Step 3 (MemoryCache<K, V>)...");
const cache = new MemoryCache<string, { theme: string }>();
cache.set("settings", { theme: "dark" });
testCheck("Step 3.1 - cache get", cache.get("settings")?.theme === "dark");
testCheck("Step 3.2 - cache has", cache.has("settings") === true && cache.has("missing") === false);

console.log("\\nVerifying Step 4 (PriorityTaskQueue)...");
const pQueue = new PriorityTaskQueue<{ id: string; priority: number }>();
pQueue.addTask({ id: "job_low", priority: 1 });
pQueue.addTask({ id: "job_high", priority: 10 });
pQueue.addTask({ id: "job_medium", priority: 5 });
testCheck("Step 4 - highest priority dequeued first", pQueue.getNextTask()?.id === "job_high");

console.log("\\n[Summary] Day 21 challenge checks completed!\\n");
`
  },

  // ==========================================================================
  // DAY 22: KEYOF, INDEXED ACCESS & TYPEOF QUERIES
  // ==========================================================================
  {
    day: 22,
    folder: "22_Day_Keyof_and_indexed_access",
    topic: "Keyof, Indexed Access & typeof Queries",
    code: `/**
 * ============================================================================
 * DAY 22: KEYOF, INDEXED ACCESS & TYPEOF QUERIES - CODING CHALLENGES
 * ============================================================================
 * Type querying operators provide deep structural inspection:
 * - 'keyof T' produces a union of an object's keys
 * - 'T[K]' looks up property value types
 * - 'typeof' inspects runtime values to extract their TypeScript shape
 *
 * Test with:
 *   npx tsx 22_Day_Keyof_and_indexed_access/challenge.ts
 *   OR
 *   npm run challenge:22
 * ============================================================================
 */

console.log("\\n=======================================================");
console.log("  DAY 22: CHALLENGE VERIFICATION RUNNER");
console.log("=======================================================\\n");

function testCheck(step: string, passed: boolean, details?: string): void {
  if (passed) {
    console.log(\`  [PASS] \${step}\${details ? \` -> \${details}\` : ""}\`);
  } else {
    console.log(\`  [WAIT] \${step} (Needs attention)\${details ? \` -> \${details}\` : ""}\`);
  }
}

// ============================================================================
// STEP 1: 'keyof' Union Extraction
// ============================================================================
/**
 * CHALLENGE 1:
 * Define an interface 'VehicleSpec':
 *   - vin: string;
 *   - horsepower: number;
 *   - isElectric: boolean;
 * 
 * Extract its keys into a type alias 'VehicleKey = keyof VehicleSpec'.
 * Write a function 'hasSpecKey(k: string): k is VehicleKey'.
 */
// >>> YOUR CODE HERE <<<
export interface VehicleSpec {
  vin: string;
  horsepower: number;
  isElectric: boolean;
}

export type VehicleKey = keyof VehicleSpec;

export function hasSpecKey(k: string): k is VehicleKey {
  // TODO: Replace with your implementation
  return ["vin", "horsepower", "isElectric"].includes(k);
}


// ============================================================================
// STEP 2: Indexed Property Access (T[K])
// ============================================================================
/**
 * CHALLENGE 2:
 * Define:
 *   type VinType = VehicleSpec["vin"]; // string
 *   type VehicleValuesUnion = VehicleSpec[keyof VehicleSpec]; // string | number | boolean
 * 
 * Write a function 'describeVehicleProp<K extends keyof VehicleSpec>(spec: VehicleSpec, key: K): string'
 * that returns: \`Prop '\${key}' has value: \${spec[key]}\`
 */
// >>> YOUR CODE HERE <<<
export type VinType = VehicleSpec["vin"];
export type VehicleValuesUnion = VehicleSpec[keyof VehicleSpec];

export function describeVehicleProp<K extends keyof VehicleSpec>(spec: VehicleSpec, key: K): string {
  // TODO: Replace with your implementation
  return \`Prop '\${key}' has value: \${spec[key]}\`;
}


// ============================================================================
// STEP 3: Type Query on Runtime Configuration via 'typeof'
// ============================================================================
/**
 * CHALLENGE 3:
 * Given the runtime constant 'defaultAppConfig':
 *   export const defaultAppConfig = {
 *     appName: "Typescript Tutor",
 *     port: 3000,
 *     enableLogging: true
 *   };
 * 
 * Extract its type using 'typeof defaultAppConfig' into 'type AppConfiguration'.
 * Write 'cloneConfigWithPort(config: AppConfiguration, newPort: number): AppConfiguration'.
 */
// >>> YOUR CODE HERE <<<
export const defaultAppConfig = {
  appName: "Typescript Tutor",
  port: 3000,
  enableLogging: true
};

export type AppConfiguration = typeof defaultAppConfig;

export function cloneConfigWithPort(config: AppConfiguration, newPort: number): AppConfiguration {
  // TODO: Replace with your implementation
  return { ...config, port: newPort };
}


// ============================================================================
// STEP 4: Strongly Typed Property Setter
// ============================================================================
/**
 * CHALLENGE 4:
 * Write a generic function 'updateRecordField<T, K extends keyof T>(record: T, key: K, newValue: T[K]): T'
 * that returns a new copy of 'record' with the given property updated.
 */
// >>> YOUR CODE HERE <<<
export function updateRecordField<T, K extends keyof T>(record: T, key: K, newValue: T[K]): T {
  // TODO: Replace with your implementation
  return { ...record, [key]: newValue };
}


// ============================================================================
// VERIFICATION TEST SUITE
// ============================================================================
console.log("Verifying Step 1 (keyof & hasSpecKey)...");
testCheck("Step 1.1 - valid key", hasSpecKey("horsepower") === true);
testCheck("Step 1.2 - invalid key", hasSpecKey("color") === false);

console.log("\\nVerifying Step 2 (Indexed Access)...");
const teslaSpec: VehicleSpec = { vin: "5YJSA1", horsepower: 450, isElectric: true };
testCheck("Step 2 - describeVehicleProp", describeVehicleProp(teslaSpec, "horsepower") === "Prop 'horsepower' has value: 450");

console.log("\\nVerifying Step 3 (typeof queries)...");
const modifiedCfg = cloneConfigWithPort(defaultAppConfig, 8080);
testCheck("Step 3 - cloneConfigWithPort", modifiedCfg.port === 8080 && modifiedCfg.appName === "Typescript Tutor");

console.log("\\nVerifying Step 4 (updateRecordField)...");
const updatedTesla = updateRecordField(teslaSpec, "isElectric", false);
testCheck("Step 4 - updateRecordField", updatedTesla.isElectric === false && teslaSpec.isElectric === true);

console.log("\\n[Summary] Day 22 challenge checks completed!\\n");
`
  },

  // ==========================================================================
  // DAY 23: MAPPED TYPES & KEY REMAPPING
  // ==========================================================================
  {
    day: 23,
    folder: "23_Day_Mapped_types",
    topic: "Mapped Types & Key Remapping",
    code: `/**
 * ============================================================================
 * DAY 23: MAPPED TYPES & KEY REMAPPING - CODING CHALLENGES
 * ============================================================================
 * Mapped types iterate over keys of an existing type to produce a new shape:
 * - Syntax: '{ [K in keyof T]: ... }'
 * - Modifiers: '+readonly', '-readonly', '?', '-?'
 * - Key remapping via 'as' and template literal types
 *
 * Test with:
 *   npx tsx 23_Day_Mapped_types/challenge.ts
 *   OR
 *   npm run challenge:23
 * ============================================================================
 */

console.log("\\n=======================================================");
console.log("  DAY 23: CHALLENGE VERIFICATION RUNNER");
console.log("=======================================================\\n");

function testCheck(step: string, passed: boolean, details?: string): void {
  if (passed) {
    console.log(\`  [PASS] \${step}\${details ? \` -> \${details}\` : ""}\`);
  } else {
    console.log(\`  [WAIT] \${step} (Needs attention)\${details ? \` -> \${details}\` : ""}\`);
  }
}

// ============================================================================
// STEP 1: Basic Mapped Type (Nullable<T>)
// ============================================================================
/**
 * CHALLENGE 1:
 * Create a generic mapped type 'Nullable<T>' that maps every property
 * in T to 'T[K] | null'.
 */
// >>> YOUR CODE HERE <<<
export type Nullable<T> = {
  [K in keyof T]: T[K] | null;
};

export function makeNullable<T extends object>(obj: T): Nullable<T> {
  // TODO: Replace with your implementation
  const result = { ...obj } as Nullable<T>;
  return result;
}


// ============================================================================
// STEP 2: Stripping Modifiers (-readonly, -?)
// ============================================================================
/**
 * CHALLENGE 2:
 * Create a mapped type 'MutableAndRequired<T>' that:
 *   - Removes 'readonly' (-readonly)
 *   - Removes optional modifier (-?)
 * 
 * Syntax: { -readonly [K in keyof T]-?: T[K] }
 */
// >>> YOUR CODE HERE <<<
export type MutableAndRequired<T> = {
  -readonly [K in keyof T]-?: T[K];
};


// ============================================================================
// STEP 3: Key Remapping via 'as' (Getters<T>)
// ============================================================================
/**
 * CHALLENGE 3:
 * Create a mapped type 'Getters<T>' that creates getter method signatures
 * for every property in T, remapped to \`get\${Capitalize<string & K>}\`.
 * 
 * Example:
 *   interface Person { name: string; age: number }
 *   Getters<Person> => { getName: () => string; getAge: () => number }
 */
// >>> YOUR CODE HERE <<<
export type Getters<T> = {
  [K in keyof T as \`get\${Capitalize<string & K>}\`]: () => T[K];
};

export function createGetters<T extends object>(obj: T): Getters<T> {
  // TODO: Replace with your implementation
  const result: Record<string, unknown> = {};
  for (const [key, val] of Object.entries(obj)) {
    const getterName = \`get\${key.charAt(0).toUpperCase()}\${key.slice(1)}\`;
    result[getterName] = () => val;
  }
  return result as Getters<T>;
}


// ============================================================================
// STEP 4: Value-Type Filtering Mapped Type
// ============================================================================
/**
 * CHALLENGE 4:
 * Create a mapped type 'PickPropertiesOfType<T, TargetValue>' that retains
 * ONLY properties whose value extends TargetValue (remapping others to 'never').
 * 
 * Syntax:
 *   { [K in keyof T as T[K] extends TargetValue ? K : never]: T[K] }
 */
// >>> YOUR CODE HERE <<<
export type PickPropertiesOfType<T, TargetValue> = {
  [K in keyof T as T[K] extends TargetValue ? K : never]: T[K];
};


// ============================================================================
// VERIFICATION TEST SUITE
// ============================================================================
console.log("Verifying Step 1 (Nullable<T>)...");
interface Person { name: string; age: number }
const nullablePerson: Nullable<Person> = { name: null, age: 30 };
testCheck("Step 1 - Nullable type works", nullablePerson.name === null && nullablePerson.age === 30);

console.log("\\nVerifying Step 2 (MutableAndRequired<T>)...");
interface PartialConfig { readonly id?: string; readonly active?: boolean }
type ConcreteConfig = MutableAndRequired<PartialConfig>;
const configInstance: ConcreteConfig = { id: "cfg_1", active: true };
configInstance.id = "cfg_2"; // Mutable check
testCheck("Step 2 - MutableAndRequired", configInstance.id === "cfg_2");

console.log("\\nVerifying Step 3 (Getters<T>)...");
const pGetters = createGetters({ name: "Ada", age: 36 });
testCheck("Step 3 - createGetters", pGetters.getName() === "Ada" && pGetters.getAge() === 36);

console.log("\\nVerifying Step 4 (PickPropertiesOfType)...");
interface MixedEntity { id: number; title: string; desc: string; count: number }
type OnlyStrings = PickPropertiesOfType<MixedEntity, string>;
const sampleStrings: OnlyStrings = { title: "Doc", desc: "Guide" };
testCheck("Step 4 - filtered to string props", sampleStrings.title === "Doc" && sampleStrings.desc === "Guide");

console.log("\\n[Summary] Day 23 challenge checks completed!\\n");
`
  },

  // ==========================================================================
  // DAY 24: TEMPLATE LITERAL TYPES & EVENT STRINGS
  // ==========================================================================
  {
    day: 24,
    folder: "24_Day_Template_literal_types",
    topic: "Template Literal Types & Event Strings",
    code: `/**
 * ============================================================================
 * DAY 24: TEMPLATE LITERAL TYPES & EVENT STRINGS - CODING CHALLENGES
 * ============================================================================
 * Template literal types allow building strict string patterns using backtick
 * syntax, combining unions and built-in intrinsics (Uppercase, Lowercase, etc.).
 *
 * Test with:
 *   npx tsx 24_Day_Template_literal_types/challenge.ts
 *   OR
 *   npm run challenge:24
 * ============================================================================
 */

console.log("\\n=======================================================");
console.log("  DAY 24: CHALLENGE VERIFICATION RUNNER");
console.log("=======================================================\\n");

function testCheck(step: string, passed: boolean, details?: string): void {
  if (passed) {
    console.log(\`  [PASS] \${step}\${details ? \` -> \${details}\` : ""}\`);
  } else {
    console.log(\`  [WAIT] \${step} (Needs attention)\${details ? \` -> \${details}\` : ""}\`);
  }
}

// ============================================================================
// STEP 1: Cross-Product Event Names
// ============================================================================
/**
 * CHALLENGE 1:
 * Define:
 *   type Entity = "user" | "order" | "invoice";
 *   type Action = "create" | "update" | "delete";
 * 
 * Combine them into 'ScopedEvent':
 *   type ScopedEvent = \`\${Entity}:\${Action}\`;
 * 
 * Write a function 'formatEventLog(evt: ScopedEvent, id: string): string'
 * that returns: \`[EVENT] \${evt} for ID #\${id}\`
 */
// >>> YOUR CODE HERE <<<
export type Entity = "user" | "order" | "invoice";
export type Action = "create" | "update" | "delete";
export type ScopedEvent = \`\${Entity}:\${Action}\`;

export function formatEventLog(evt: ScopedEvent, id: string): string {
  // TODO: Replace with your implementation
  return \`[EVENT] \${evt} for ID #\${id}\`;
}


// ============================================================================
// STEP 2: String Intrinsics (Capitalize, Uppercase)
// ============================================================================
/**
 * CHALLENGE 2:
 * Create a template literal type 'EventHandlerName<T extends string>'
 * that generates: \`on\${Capitalize<T>}\`
 * 
 * Example:
 *   EventHandlerName<"click"> => "onClick"
 *   EventHandlerName<"hover"> => "onHover"
 */
// >>> YOUR CODE HERE <<<
export type EventHandlerName<T extends string> = \`on\${Capitalize<T>}\`;


// ============================================================================
// STEP 3: CSS BEM Class Combinator
// ============================================================================
/**
 * CHALLENGE 3:
 * Define:
 *   type Component = "btn" | "card";
 *   type Variant = "primary" | "secondary";
 *   type Size = "sm" | "lg";
 *   type BEMButtonClass = \`\${Component}--\${Variant}-\${Size}\`;
 * 
 * Write a function 'generateButtonClass(variant: Variant, size: Size): BEMButtonClass'.
 */
// >>> YOUR CODE HERE <<<
export type Component = "btn" | "card";
export type Variant = "primary" | "secondary";
export type Size = "sm" | "lg";
export type BEMButtonClass = \`btn--\${Variant}-\${Size}\`;

export function generateButtonClass(variant: Variant, size: Size): BEMButtonClass {
  // TODO: Replace with your implementation
  return \`btn--\${variant}-\${size}\`;
}


// ============================================================================
// STEP 4: Hex Color Template Validator
// ============================================================================
/**
 * CHALLENGE 4:
 * Define a template literal type 'HexColor = \`#\${string}\`'.
 * 
 * Write a type guard 'isHexColor(val: string): val is HexColor'
 * that validates the string starts with '#' and is followed by 3 or 6 hex digits.
 */
// >>> YOUR CODE HERE <<<
export type HexColor = \`#\${string}\`;

export function isHexColor(val: string): val is HexColor {
  // TODO: Replace with your implementation
  return /^#([A-Fa-f0-9]{3}|[A-Fa-f0-9]{6})$/.test(val);
}


// ============================================================================
// VERIFICATION TEST SUITE
// ============================================================================
console.log("Verifying Step 1 (ScopedEvent)...");
const logLine = formatEventLog("user:create", "usr_100");
testCheck("Step 1 - formatEventLog", logLine === "[EVENT] user:create for ID #usr_100");

console.log("\\nVerifying Step 2 (EventHandlerName)...");
type OnClickType = EventHandlerName<"click">;
const clickHandlerName: OnClickType = "onClick";
testCheck("Step 2 - EventHandlerName", clickHandlerName === "onClick");

console.log("\\nVerifying Step 3 (BEMButtonClass)...");
const btnCls = generateButtonClass("primary", "lg");
testCheck("Step 3 - generateButtonClass", btnCls === "btn--primary-lg");

console.log("\\nVerifying Step 4 (isHexColor)...");
testCheck("Step 4.1 - valid hex #FFF", isHexColor("#FFF") === true);
testCheck("Step 4.2 - valid hex #007ACC", isHexColor("#007ACC") === true);
testCheck("Step 4.3 - invalid hex", isHexColor("blue") === false);

console.log("\\n[Summary] Day 24 challenge checks completed!\\n");
`
  },

  // ==========================================================================
  // DAY 25: CONDITIONAL TYPES & DISTRIBUTIVE CONDITIONALS
  // ==========================================================================
  {
    day: 25,
    folder: "25_Day_Conditional_types",
    topic: "Conditional Types & Distributive Conditionals",
    code: `/**
 * ============================================================================
 * DAY 25: CONDITIONAL TYPES & DISTRIBUTIVE CONDITIONALS - CODING CHALLENGES
 * ============================================================================
 * Conditional types take the form:
 *   'T extends U ? TrueType : FalseType'
 * When given a bare type parameter in a union, they automatically distribute
 * across each member of the union.
 *
 * Test with:
 *   npx tsx 25_Day_Conditional_types/challenge.ts
 *   OR
 *   npm run challenge:25
 * ============================================================================
 */

console.log("\\n=======================================================");
console.log("  DAY 25: CHALLENGE VERIFICATION RUNNER");
console.log("=======================================================\\n");

function testCheck(step: string, passed: boolean, details?: string): void {
  if (passed) {
    console.log(\`  [PASS] \${step}\${details ? \` -> \${details}\` : ""}\`);
  } else {
    console.log(\`  [WAIT] \${step} (Needs attention)\${details ? \` -> \${details}\` : ""}\`);
  }
}

// ============================================================================
// STEP 1: Basic Type Inspection Conditional
// ============================================================================
/**
 * CHALLENGE 1:
 * Create a conditional type 'IsString<T>':
 *   - If T extends string: return true
 *   - Otherwise: return false
 */
// >>> YOUR CODE HERE <<<
export type IsString<T> = T extends string ? true : false;


// ============================================================================
// STEP 2: Distributive Union Filtering
// ============================================================================
/**
 * CHALLENGE 2:
 * When T is an unresolved union, 'T extends U ? never : T' filters out
 * any member of the union assignable to U.
 * 
 * Implement 'Diff<T, U> = T extends U ? never : T'.
 * 
 * Test: Diff<"a" | "b" | "c", "a"> should evaluate to "b" | "c".
 */
// >>> YOUR CODE HERE <<<
export type Diff<T, U> = T extends U ? never : T;


// ============================================================================
// STEP 3: Array Element Extraction Conditional
// ============================================================================
/**
 * CHALLENGE 3:
 * Create a conditional type 'Flatten<T>':
 *   - If T extends (infer E)[]: return E
 *   - Otherwise: return T
 * 
 * Example:
 *   Flatten<string[]> => string
 *   Flatten<number>   => number
 */
// >>> YOUR CODE HERE <<<
export type Flatten<T> = T extends (infer E)[] ? E : T;


// ============================================================================
// STEP 4: Safe Function Return Resolver
// ============================================================================
/**
 * CHALLENGE 4:
 * Create a conditional type 'FunctionReturnTypeOrNever<T>':
 *   - If T extends (...args: any[]) => infer R: return R
 *   - Otherwise: return never
 */
// >>> YOUR CODE HERE <<<
export type FunctionReturnTypeOrNever<T> = T extends (...args: any[]) => infer R ? R : never;


// ============================================================================
// VERIFICATION TEST SUITE
// ============================================================================
console.log("Verifying Step 1 (IsString<T>)...");
type TestStr = IsString<"hello">; // true
type TestNum = IsString<123>;     // false
const checkStr: TestStr = true;
const checkNum: TestNum = false;
testCheck("Step 1 - IsString conditional", checkStr === true && checkNum === false);

console.log("\\nVerifying Step 2 (Diff<T, U>)...");
type Letters = "a" | "b" | "c";
type Remaining = Diff<Letters, "b">; // "a" | "c"
const testRem1: Remaining = "a";
const testRem2: Remaining = "c";
testCheck("Step 2 - Diff distributive conditional", testRem1 === "a" && testRem2 === "c");

console.log("\\nVerifying Step 3 (Flatten<T>)...");
type FlatString = Flatten<string[]>;
type FlatNum = Flatten<number>;
const sVal: FlatString = "unwrapped";
const nVal: FlatNum = 42;
testCheck("Step 3 - Flatten type", typeof sVal === "string" && typeof nVal === "number");

console.log("\\nVerifying Step 4 (FunctionReturnTypeOrNever)...");
type RetVal = FunctionReturnTypeOrNever<() => boolean>;
const bVal: RetVal = true;
testCheck("Step 4 - FunctionReturnTypeOrNever", bVal === true);

console.log("\\n[Summary] Day 25 challenge checks completed!\\n");
`
  }
];
