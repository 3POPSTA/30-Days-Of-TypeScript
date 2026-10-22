import { ChallengeFile } from "./types.js";

export const days11_15: ChallengeFile[] = [
  // ==========================================================================
  // DAY 11: DISCRIMINATED UNIONS & PATTERN MATCHING
  // ==========================================================================
  {
    day: 11,
    folder: "11_Day_Discriminated_unions",
    topic: "Discriminated Unions & Pattern Matching",
    code: `/**
 * ============================================================================
 * DAY 11: DISCRIMINATED UNIONS & PATTERN MATCHING - CODING CHALLENGES
 * ============================================================================
 * Discriminated unions (tagged unions) have a common literal discriminator
 * property, enabling safe, exhaustive pattern matching.
 *
 * Test with:
 *   npx tsx 11_Day_Discriminated_unions/challenge.ts
 *   OR
 *   npm run challenge:11
 * ============================================================================
 */

console.log("\\n=======================================================");
console.log("  DAY 11: CHALLENGE VERIFICATION RUNNER");
console.log("=======================================================\\n");

function testCheck(step: string, passed: boolean, details?: string): void {
  if (passed) {
    console.log(\`  [PASS] \${step}\${details ? \` -> \${details}\` : ""}\`);
  } else {
    console.log(\`  [WAIT] \${step} (Needs attention)\${details ? \` -> \${details}\` : ""}\`);
  }
}

// ============================================================================
// STEP 1: Payment Method Discriminated Union
// ============================================================================
/**
 * CHALLENGE 1:
 * Define three payment types sharing the discriminator 'kind':
 *   - 'CreditCard': { kind: "credit_card"; last4: string; expMonth: number; expYear: number }
 *   - 'PayPal':     { kind: "paypal"; email: string }
 *   - 'Crypto':     { kind: "crypto"; coin: "BTC" | "ETH"; walletAddress: string }
 * 
 * Compose them:
 *   type PaymentMethod = CreditCard | PayPal | Crypto;
 */
// >>> YOUR CODE HERE <<<
export type CreditCard = { kind: "credit_card"; last4: string; expMonth: number; expYear: number };
export type PayPal = { kind: "paypal"; email: string };
export type Crypto = { kind: "crypto"; coin: "BTC" | "ETH"; walletAddress: string };
export type PaymentMethod = CreditCard | PayPal | Crypto;


// ============================================================================
// STEP 2: Exhaustive Switch Handler with Never
// ============================================================================
/**
 * CHALLENGE 2:
 * Write an exhaustive check helper 'assertUnreachable(x: never): never'.
 * Then write 'describePayment(method: PaymentMethod): string':
 *   - "credit_card": \`Card ending in \${method.last4}\`
 *   - "paypal":      \`PayPal account \${method.email}\`
 *   - "crypto":      \`\${method.coin} wallet \${method.walletAddress.slice(0, 6)}...\`
 *   - default:       call assertUnreachable(method)
 */
// >>> YOUR CODE HERE <<<
export function assertUnreachable(x: never): never {
  throw new Error(\`Unhandled union variant: \${JSON.stringify(x)}\`);
}

export function describePayment(method: PaymentMethod): string {
  // TODO: Replace with your implementation
  switch (method.kind) {
    case "credit_card":
      return \`Card ending in \${method.last4}\`;
    case "paypal":
      return \`PayPal account \${method.email}\`;
    case "crypto":
      return \`\${method.coin} wallet \${method.walletAddress.slice(0, 6)}...\`;
    default:
      return assertUnreachable(method);
  }
}


// ============================================================================
// STEP 3: Redux-Style Action & Reducer
// ============================================================================
/**
 * CHALLENGE 3:
 * Define an Action union with discriminator 'type':
 *   - { type: "ADD"; amount: number }
 *   - { type: "SUBTRACT"; amount: number }
 *   - { type: "RESET" }
 * 
 * Write a pure reducer 'counterReducer(state: number, action: Action): number'.
 */
// >>> YOUR CODE HERE <<<
export type Action =
  | { type: "ADD"; amount: number }
  | { type: "SUBTRACT"; amount: number }
  | { type: "RESET" };

export function counterReducer(state: number, action: Action): number {
  // TODO: Replace with your implementation
  switch (action.type) {
    case "ADD":
      return state + action.amount;
    case "SUBTRACT":
      return state - action.amount;
    case "RESET":
      return 0;
  }
}


// ============================================================================
// STEP 4: Remote Data Lifecycle State Machine
// ============================================================================
/**
 * CHALLENGE 4:
 * Model an async query state:
 *   type QueryState<T> =
 *     | { status: "idle" }
 *     | { status: "loading" }
 *     | { status: "success"; data: T }
 *     | { status: "error"; error: string };
 * 
 * Write a function 'unwrapQueryData<T>(state: QueryState<T>, fallback: T): T'
 * that returns 'data' if status === "success", otherwise returns 'fallback'.
 */
// >>> YOUR CODE HERE <<<
export type QueryState<T> =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "success"; data: T }
  | { status: "error"; error: string };

export function unwrapQueryData<T>(state: QueryState<T>, fallback: T): T {
  // TODO: Replace with your implementation
  if (state.status === "success") {
    return state.data;
  }
  return fallback;
}


// ============================================================================
// VERIFICATION TEST SUITE
// ============================================================================
console.log("Verifying Step 1 & 2 (describePayment)...");
const card: PaymentMethod = { kind: "credit_card", last4: "4242", expMonth: 12, expYear: 2028 };
const pp: PaymentMethod = { kind: "paypal", email: "ada@pay.com" };
const crypto: PaymentMethod = { kind: "crypto", coin: "BTC", walletAddress: "1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa" };
testCheck("Step 2.1 - credit_card", describePayment(card) === "Card ending in 4242");
testCheck("Step 2.2 - paypal", describePayment(pp) === "PayPal account ada@pay.com");
testCheck("Step 2.3 - crypto", describePayment(crypto) === "BTC wallet 1A1zP1...");

console.log("\\nVerifying Step 3 (counterReducer)...");
let count = 0;
count = counterReducer(count, { type: "ADD", amount: 10 });
count = counterReducer(count, { type: "SUBTRACT", amount: 3 });
testCheck("Step 3.1 - add & subtract", count === 7);
count = counterReducer(count, { type: "RESET" });
testCheck("Step 3.2 - reset", count === 0);

console.log("\\nVerifying Step 4 (unwrapQueryData)...");
const successState: QueryState<string[]> = { status: "success", data: ["TS", "JS"] };
const loadingState: QueryState<string[]> = { status: "loading" };
testCheck("Step 4.1 - success state", unwrapQueryData(successState, []).length === 2);
testCheck("Step 4.2 - loading fallback", unwrapQueryData(loadingState, ["default"]).join("") === "default");

console.log("\\n[Summary] Day 11 challenge checks completed!\\n");
`
  },

  // ==========================================================================
  // DAY 12: FUNCTIONS, PARAMETERS, REST & OPTIONAL
  // ==========================================================================
  {
    day: 12,
    folder: "12_Day_Functions",
    topic: "Functions, Parameters, Rest & Optional",
    code: `/**
 * ============================================================================
 * DAY 12: FUNCTIONS, PARAMETERS, REST & OPTIONAL - CODING CHALLENGES
 * ============================================================================
 * Functions are first-class citizens in TypeScript:
 * - Default & optional parameters
 * - Rest parameters '...args: T[]'
 * - Higher-order functions with typed callbacks
 * - Function composition (piping)
 *
 * Test with:
 *   npx tsx 12_Day_Functions/challenge.ts
 *   OR
 *   npm run challenge:12
 * ============================================================================
 */

console.log("\\n=======================================================");
console.log("  DAY 12: CHALLENGE VERIFICATION RUNNER");
console.log("=======================================================\\n");

function testCheck(step: string, passed: boolean, details?: string): void {
  if (passed) {
    console.log(\`  [PASS] \${step}\${details ? \` -> \${details}\` : ""}\`);
  } else {
    console.log(\`  [WAIT] \${step} (Needs attention)\${details ? \` -> \${details}\` : ""}\`);
  }
}

// ============================================================================
// STEP 1: Default and Optional Parameters
// ============================================================================
/**
 * CHALLENGE 1:
 * Write a function 'buildApiEndpoint' that accepts:
 *   - path (string): API path (e.g. "/users")
 *   - version (string, default: "v1")
 *   - secure (boolean, default: true)
 * 
 * Return a URL formatted as:
 *   \`\${protocol}://api.example.com/\${version}\${path}\`
 *   where protocol is "https" if secure is true, and "http" otherwise.
 * 
 * Example:
 *   buildApiEndpoint("/stats") => "https://api.example.com/v1/stats"
 */
// >>> YOUR CODE HERE <<<
export function buildApiEndpoint(path: string, version: string = "v1", secure: boolean = true): string {
  // TODO: Replace with your implementation
  const protocol = secure ? "https" : "http";
  return \`\${protocol}://api.example.com/\${version}\${path}\`;
}


// ============================================================================
// STEP 2: Rest Parameters Accumulator
// ============================================================================
/**
 * CHALLENGE 2:
 * Write a function 'executeMath' that accepts:
 *   - op ("sum" | "product")
 *   - ...values (number[] rest parameter)
 * 
 * If values is empty: return 0 for "sum", 1 for "product".
 * Otherwise calculate the sum or product of all numbers.
 */
// >>> YOUR CODE HERE <<<
export function executeMath(op: "sum" | "product", ...values: number[]): number {
  // TODO: Replace with your implementation
  if (values.length === 0) {
    return op === "sum" ? 0 : 1;
  }
  if (op === "sum") {
    return values.reduce((acc, curr) => acc + curr, 0);
  }
  return values.reduce((acc, curr) => acc * curr, 1);
}


// ============================================================================
// STEP 3: Typed Callback & Higher-Order Function
// ============================================================================
/**
 * CHALLENGE 3:
 * Write a generic function 'transformList' that takes:
 *   - items (T[])
 *   - mapper ((item: T, index: number) => R)
 *   - filterPredicate? ((item: R) => boolean, optional)
 * 
 * Maps each item to R using mapper.
 * If filterPredicate is supplied, filters the mapped list.
 * Returns the final array of R.
 */
// >>> YOUR CODE HERE <<<
export function transformList<T, R>(
  items: T[],
  mapper: (item: T, index: number) => R,
  filterPredicate?: (item: R) => boolean
): R[] {
  // TODO: Replace with your implementation
  const mapped = items.map(mapper);
  return filterPredicate ? mapped.filter(filterPredicate) : mapped;
}


// ============================================================================
// STEP 4: Function Pipeline Composer (Pipe)
// ============================================================================
/**
 * CHALLENGE 4:
 * Write a function 'composeTwo<A, B, C>' that composes two unary functions:
 *   - f: (b: B) => C
 *   - g: (a: A) => B
 * 
 * Return a new function (a: A) => C that executes f(g(a)).
 */
// >>> YOUR CODE HERE <<<
export function composeTwo<A, B, C>(f: (b: B) => C, g: (a: A) => B): (a: A) => C {
  // TODO: Replace with your implementation
  return (a: A) => f(g(a));
}


// ============================================================================
// VERIFICATION TEST SUITE
// ============================================================================
console.log("Verifying Step 1 (buildApiEndpoint)...");
testCheck("Step 1.1 - defaults", buildApiEndpoint("/users") === "https://api.example.com/v1/users");
testCheck("Step 1.2 - custom version & insecure", buildApiEndpoint("/metrics", "v2", false) === "http://api.example.com/v2/metrics");

console.log("\\nVerifying Step 2 (executeMath)...");
testCheck("Step 2.1 - sum", executeMath("sum", 1, 2, 3, 4) === 10);
testCheck("Step 2.2 - product", executeMath("product", 2, 3, 4) === 24);
testCheck("Step 2.3 - empty product fallback", executeMath("product") === 1);

console.log("\\nVerifying Step 3 (transformList)...");
const names = ["alice", "bob", "alexander"];
const uppercaseLongNames = transformList(
  names,
  name => name.toUpperCase(),
  name => name.length > 4
);
testCheck("Step 3 - transformList", uppercaseLongNames.length === 2 && uppercaseLongNames[0] === "ALICE" && uppercaseLongNames[1] === "ALEXANDER");

console.log("\\nVerifying Step 4 (composeTwo)...");
const double = (n: number) => n * 2;
const toStringWithPrefix = (n: number) => \`Val:\${n}\`;
const pipeline = composeTwo(toStringWithPrefix, double);
testCheck("Step 4 - composeTwo", pipeline(5) === "Val:10");

console.log("\\n[Summary] Day 12 challenge checks completed!\\n");
`
  },

  // ==========================================================================
  // DAY 13: FUNCTION OVERLOADING & SIGNATURES
  // ==========================================================================
  {
    day: 13,
    folder: "13_Day_Function_overloading",
    topic: "Function Overloading & Signatures",
    code: `/**
 * ============================================================================
 * DAY 13: FUNCTION OVERLOADING & SIGNATURES - CODING CHALLENGES
 * ============================================================================
 * Function overloading allows a single function to provide multiple call
 * signatures with differing argument and return types, backed by one
 * implementation signature.
 *
 * Test with:
 *   npx tsx 13_Day_Function_overloading/challenge.ts
 *   OR
 *   npm run challenge:13
 * ============================================================================
 */

console.log("\\n=======================================================");
console.log("  DAY 13: CHALLENGE VERIFICATION RUNNER");
console.log("=======================================================\\n");

function testCheck(step: string, passed: boolean, details?: string): void {
  if (passed) {
    console.log(\`  [PASS] \${step}\${details ? \` -> \${details}\` : ""}\`);
  } else {
    console.log(\`  [WAIT] \${step} (Needs attention)\${details ? \` -> \${details}\` : ""}\`);
  }
}

// ============================================================================
// STEP 1: Overloaded Date Parser
// ============================================================================
/**
 * CHALLENGE 1:
 * Provide overload signatures for 'parseTimestamp':
 *   - (ts: number): Date
 *   - (isoString: string): Date
 *   - (year: number, month: number, day: number): Date
 * 
 * Implement the backing function using a single unified implementation.
 */
// >>> YOUR CODE HERE <<<
export function parseTimestamp(ts: number): Date;
export function parseTimestamp(isoString: string): Date;
export function parseTimestamp(year: number, month: number, day: number): Date;
export function parseTimestamp(arg1: number | string, arg2?: number, arg3?: number): Date {
  // TODO: Replace with your implementation
  if (typeof arg1 === "string") {
    return new Date(arg1);
  }
  if (typeof arg2 === "number" && typeof arg3 === "number") {
    return new Date(arg1, arg2 - 1, arg3);
  }
  return new Date(arg1);
}


// ============================================================================
// STEP 2: Overloaded Query Selector / Finder
// ============================================================================
/**
 * CHALLENGE 2:
 * Write an overloaded function 'findUser':
 *   - (id: string): { id: string; name: string } | undefined
 *   - (ids: string[]): { id: string; name: string }[]
 * 
 * Look up against the mock store:
 *   [ { id: "1", name: "Ada" }, { id: "2", name: "Bob" }, { id: "3", name: "Charlie" } ]
 */
const mockStore = [
  { id: "1", name: "Ada" },
  { id: "2", name: "Bob" },
  { id: "3", name: "Charlie" }
];

// >>> YOUR CODE HERE <<<
export function findUser(id: string): { id: string; name: string } | undefined;
export function findUser(ids: string[]): { id: string; name: string }[];
export function findUser(arg: string | string[]): ({ id: string; name: string } | undefined) | { id: string; name: string }[] {
  // TODO: Replace with your implementation
  if (Array.isArray(arg)) {
    return mockStore.filter(u => arg.includes(u.id));
  }
  return mockStore.find(u => u.id === arg);
}


// ============================================================================
// STEP 3: Overloaded Sequence Duplicator
// ============================================================================
/**
 * CHALLENGE 3:
 * Write an overloaded function 'duplicateSequence':
 *   - (val: string, times: number): string
 *   - (val: number[], times: number): number[]
 * 
 * If string: repeat string 'times' times.
 * If number array: repeat the array elements 'times' times.
 */
// >>> YOUR CODE HERE <<<
export function duplicateSequence(val: string, times: number): string;
export function duplicateSequence(val: number[], times: number): number[];
export function duplicateSequence(val: string | number[], times: number): string | number[] {
  // TODO: Replace with your implementation
  if (typeof val === "string") {
    return val.repeat(times);
  }
  const result: number[] = [];
  for (let i = 0; i < times; i++) {
    result.push(...val);
  }
  return result;
}


// ============================================================================
// STEP 4: Overloaded Type Formatter
// ============================================================================
/**
 * CHALLENGE 4:
 * Write an overloaded function 'formatData':
 *   - (data: number, format: "currency"): string  => \`$\${data.toFixed(2)}\`
 *   - (data: number, format: "percent"): string   => \`\${(data * 100).toFixed(0)}%\`
 *   - (data: boolean): string                    => data ? "YES" : "NO"
 */
// >>> YOUR CODE HERE <<<
export function formatData(data: number, format: "currency"): string;
export function formatData(data: number, format: "percent"): string;
export function formatData(data: boolean): string;
export function formatData(data: number | boolean, format?: "currency" | "percent"): string {
  // TODO: Replace with your implementation
  if (typeof data === "boolean") {
    return data ? "YES" : "NO";
  }
  if (format === "currency") {
    return \`$\${data.toFixed(2)}\`;
  }
  return \`\${(data * 100).toFixed(0)}%\`;
}


// ============================================================================
// VERIFICATION TEST SUITE
// ============================================================================
console.log("Verifying Step 1 (parseTimestamp)...");
const d1 = parseTimestamp(0);
const d2 = parseTimestamp("2026-01-01T00:00:00.000Z");
const d3 = parseTimestamp(2026, 6, 15);
testCheck("Step 1.1 - number timestamp", d1.getTime() === 0);
testCheck("Step 1.2 - ISO string", d2.toISOString() === "2026-01-01T00:00:00.000Z");
testCheck("Step 1.3 - year/month/day", d3.getFullYear() === 2026 && d3.getMonth() === 5 && d3.getDate() === 15);

console.log("\\nVerifying Step 2 (findUser)...");
const single = findUser("1");
const multiple = findUser(["1", "3"]);
testCheck("Step 2.1 - single user", single?.name === "Ada");
testCheck("Step 2.2 - multiple users", multiple.length === 2 && multiple[1].name === "Charlie");

console.log("\\nVerifying Step 3 (duplicateSequence)...");
const strDupe = duplicateSequence("TS", 3);
const arrDupe = duplicateSequence([1, 2], 2);
testCheck("Step 3.1 - string duplicate", strDupe === "TSTSTS");
testCheck("Step 3.2 - array duplicate", arrDupe.join(",") === "1,2,1,2");

console.log("\\nVerifying Step 4 (formatData)...");
testCheck("Step 4.1 - currency", formatData(49.9, "currency") === "$49.90");
testCheck("Step 4.2 - percent", formatData(0.85, "percent") === "85%");
testCheck("Step 4.3 - boolean", formatData(true) === "YES");

console.log("\\n[Summary] Day 13 challenge checks completed!\\n");
`
  },

  // ==========================================================================
  // DAY 14: INTERFACES & INHERITANCE
  // ==========================================================================
  {
    day: 14,
    folder: "14_Day_Interfaces",
    topic: "Interfaces & Inheritance",
    code: `/**
 * ============================================================================
 * DAY 14: INTERFACES & INHERITANCE - CODING CHALLENGES
 * ============================================================================
 * Interfaces define pure contracts in TypeScript:
 * - Single and multiple inheritance with 'extends'
 * - Callable interfaces with properties
 * - Interface implementation by classes with 'implements'
 *
 * Test with:
 *   npx tsx 14_Day_Interfaces/challenge.ts
 *   OR
 *   npm run challenge:14
 * ============================================================================
 */

console.log("\\n=======================================================");
console.log("  DAY 14: CHALLENGE VERIFICATION RUNNER");
console.log("=======================================================\\n");

function testCheck(step: string, passed: boolean, details?: string): void {
  if (passed) {
    console.log(\`  [PASS] \${step}\${details ? \` -> \${details}\` : ""}\`);
  } else {
    console.log(\`  [WAIT] \${step} (Needs attention)\${details ? \` -> \${details}\` : ""}\`);
  }
}

// ============================================================================
// STEP 1: Single Interface Inheritance
// ============================================================================
/**
 * CHALLENGE 1:
 * Define:
 *   interface Vehicle {
 *     make: string;
 *     model: string;
 *     year: number;
 *   }
 * 
 * Extend it:
 *   interface ElectricVehicle extends Vehicle {
 *     batteryCapacityKWh: number;
 *     rangeMiles: number;
 *   }
 * 
 * Write a function 'createTeslaModel3(year: number): ElectricVehicle'.
 */
// >>> YOUR CODE HERE <<<
export interface Vehicle {
  make: string;
  model: string;
  year: number;
}

export interface ElectricVehicle extends Vehicle {
  batteryCapacityKWh: number;
  rangeMiles: number;
}

export function createTeslaModel3(year: number): ElectricVehicle {
  // TODO: Replace with your implementation
  return {
    make: "Tesla",
    model: "Model 3",
    year,
    batteryCapacityKWh: 75,
    rangeMiles: 330
  };
}


// ============================================================================
// STEP 2: Multiple Interface Inheritance
// ============================================================================
/**
 * CHALLENGE 2:
 * Define:
 *   interface Printable { print(): string; }
 *   interface Serializable { toJSONString(): string; }
 * 
 * Extend both:
 *   interface ReportDocument extends Printable, Serializable {
 *     title: string;
 *     content: string;
 *   }
 * 
 * Write a factory function 'createReportDocument(title: string, content: string): ReportDocument'.
 */
// >>> YOUR CODE HERE <<<
export interface Printable {
  print(): string;
}

export interface Serializable {
  toJSONString(): string;
}

export interface ReportDocument extends Printable, Serializable {
  title: string;
  content: string;
}

export function createReportDocument(title: string, content: string): ReportDocument {
  // TODO: Replace with your implementation
  return {
    title,
    content,
    print() {
      return \`=== \${this.title} ===\\n\${this.content}\`;
    },
    toJSONString() {
      return JSON.stringify({ title: this.title, content: this.content });
    }
  };
}


// ============================================================================
// STEP 3: Callable Interface with Properties
// ============================================================================
/**
 * CHALLENGE 3:
 * In TypeScript, an interface can represent a function that also has attached properties.
 * 
 * Define:
 *   interface CounterFunction {
 *     (): number;
 *     reset(): void;
 *   }
 * 
 * Write 'createCounterFunction()':
 *   - Each call increments an internal count and returns it.
 *   - .reset() resets internal count to 0.
 */
// >>> YOUR CODE HERE <<<
export interface CounterFunction {
  (): number;
  reset(): void;
}

export function createCounterFunction(): CounterFunction {
  // TODO: Replace with your implementation
  let count = 0;
  const fn = function () {
    count++;
    return count;
  } as CounterFunction;
  fn.reset = () => {
    count = 0;
  };
  return fn;
}


// ============================================================================
// STEP 4: Repository Contract Implementation
// ============================================================================
/**
 * CHALLENGE 4:
 * Define a generic repository interface:
 *   interface Repository<T, ID> {
 *     save(item: T): void;
 *     findById(id: ID): T | undefined;
 *     getAll(): T[];
 *   }
 * 
 * Implement the class 'MemoryRepository<T extends { id: ID }, ID>' that implements Repository<T, ID>.
 */
// >>> YOUR CODE HERE <<<
export interface Repository<T, ID> {
  save(item: T): void;
  findById(id: ID): T | undefined;
  getAll(): T[];
}

export class MemoryRepository<T extends { id: ID }, ID> implements Repository<T, ID> {
  private items: Map<ID, T> = new Map();

  save(item: T): void {
    // TODO: Replace with your implementation
    this.items.set(item.id, item);
  }

  findById(id: ID): T | undefined {
    // TODO: Replace with your implementation
    return this.items.get(id);
  }

  getAll(): T[] {
    // TODO: Replace with your implementation
    return Array.from(this.items.values());
  }
}


// ============================================================================
// VERIFICATION TEST SUITE
// ============================================================================
console.log("Verifying Step 1 (ElectricVehicle)...");
const ev = createTeslaModel3(2025);
testCheck("Step 1 - createTeslaModel3", ev.make === "Tesla" && ev.batteryCapacityKWh === 75 && ev.year === 2025);

console.log("\\nVerifying Step 2 (ReportDocument)...");
const rep = createReportDocument("Quarterly Report", "Growth is up 25%");
testCheck("Step 2.1 - print()", rep.print().includes("Quarterly Report"));
testCheck("Step 2.2 - toJSONString()", JSON.parse(rep.toJSONString()).title === "Quarterly Report");

console.log("\\nVerifying Step 3 (CounterFunction)...");
const counter = createCounterFunction();
testCheck("Step 3.1 - increment", counter() === 1 && counter() === 2);
counter.reset();
testCheck("Step 3.2 - reset", counter() === 1);

console.log("\\nVerifying Step 4 (MemoryRepository)...");
interface Item { id: string; name: string }
const repo = new MemoryRepository<Item, string>();
repo.save({ id: "it_1", name: "Keyboard" });
repo.save({ id: "it_2", name: "Mouse" });
testCheck("Step 4.1 - findById", repo.findById("it_1")?.name === "Keyboard");
testCheck("Step 4.2 - getAll", repo.getAll().length === 2);

console.log("\\n[Summary] Day 14 challenge checks completed!\\n");
`
  },

  // ==========================================================================
  // DAY 15: INTERFACE VS TYPE & DECLARATION MERGING
  // ==========================================================================
  {
    day: 15,
    folder: "15_Day_Interface_vs_type",
    topic: "Interface vs Type & Declaration Merging",
    code: `/**
 * ============================================================================
 * DAY 15: INTERFACE VS TYPE & DECLARATION MERGING - CODING CHALLENGES
 * ============================================================================
 * Interfaces and Type Aliases are both central to TypeScript, but have distinct
 * advantages:
 * - Interfaces support declaration merging (ideal for libraries/plugins)
 * - Types support unions, primitives, tuples, and mapped types
 *
 * Test with:
 *   npx tsx 15_Day_Interface_vs_type/challenge.ts
 *   OR
 *   npm run challenge:15
 * ============================================================================
 */

console.log("\\n=======================================================");
console.log("  DAY 15: CHALLENGE VERIFICATION RUNNER");
console.log("=======================================================\\n");

function testCheck(step: string, passed: boolean, details?: string): void {
  if (passed) {
    console.log(\`  [PASS] \${step}\${details ? \` -> \${details}\` : ""}\`);
  } else {
    console.log(\`  [WAIT] \${step} (Needs attention)\${details ? \` -> \${details}\` : ""}\`);
  }
}

// ============================================================================
// STEP 1: Declaration Merging with Interfaces
// ============================================================================
/**
 * CHALLENGE 1:
 * Declare an interface 'AppEnvironment' with:
 *   - nodeEnv: "development" | "production"
 * 
 * In the same scope, declare 'AppEnvironment' again to merge:
 *   - port: number
 *   - apiSecret: string
 * 
 * Write a function 'buildEnvironment(): AppEnvironment'.
 */
// >>> YOUR CODE HERE <<<
export interface AppEnvironment {
  nodeEnv: "development" | "production";
}

export interface AppEnvironment {
  port: number;
  apiSecret: string;
}

export function buildEnvironment(): AppEnvironment {
  // TODO: Replace with your implementation
  return {
    nodeEnv: "production",
    port: 8080,
    apiSecret: "super-secret-key"
  };
}


// ============================================================================
// STEP 2: When Type Alias is Mandatory (Unions & Tuples)
// ============================================================================
/**
 * CHALLENGE 2:
 * An interface CANNOT represent a pure union or a tuple type alias.
 * 
 * Define:
 *   type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";
 *   type EndpointTuple = [method: HttpMethod, path: string];
 * 
 * Write a function 'formatEndpoint(endpoint: EndpointTuple): string':
 *   Returns: "[METHOD] /path"
 * 
 * Example:
 *   formatEndpoint(["GET", "/api/v1/users"]) => "[GET] /api/v1/users"
 */
// >>> YOUR CODE HERE <<<
export type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";
export type EndpointTuple = [method: HttpMethod, path: string];

export function formatEndpoint(endpoint: EndpointTuple): string {
  // TODO: Replace with your implementation
  const [method, path] = endpoint;
  return \`[\${method}] \${path}\`;
}


// ============================================================================
// STEP 3: Extending via Interface vs Intersecting via Type
// ============================================================================
/**
 * CHALLENGE 3:
 * Show understanding of both patterns:
 *   1. Interface inheritance:
 *      interface BaseUser { id: string }
 *      interface ExtendedUser extends BaseUser { name: string }
 * 
 *   2. Type intersection:
 *      type TBaseUser = { id: string }
 *      type TExtendedUser = TBaseUser & { name: string }
 * 
 * Write 'areUsersCompatible(u1: ExtendedUser, u2: TExtendedUser): boolean'
 * that returns true if both have matching id and name.
 */
// >>> YOUR CODE HERE <<<
export interface BaseUser { id: string }
export interface ExtendedUser extends BaseUser { name: string }

export type TBaseUser = { id: string };
export type TExtendedUser = TBaseUser & { name: string };

export function areUsersCompatible(u1: ExtendedUser, u2: TExtendedUser): boolean {
  // TODO: Replace with your implementation
  return u1.id === u2.id && u1.name === u2.name;
}


// ============================================================================
// STEP 4: Plugin Registry Pattern with Merging
// ============================================================================
/**
 * CHALLENGE 4:
 * Define an interface 'PluginRegistry' with an initial plugin 'auth: boolean'.
 * Merge a new plugin 'logger: (msg: string) => void'.
 * 
 * Write a function 'createPluginHost(): PluginRegistry'.
 */
// >>> YOUR CODE HERE <<<
export interface PluginRegistry {
  auth: boolean;
}

export interface PluginRegistry {
  logger: (msg: string) => void;
}

export function createPluginHost(): PluginRegistry {
  // TODO: Replace with your implementation
  return {
    auth: true,
    logger: (_msg: string) => {}
  };
}


// ============================================================================
// VERIFICATION TEST SUITE
// ============================================================================
console.log("Verifying Step 1 (AppEnvironment Merging)...");
const env = buildEnvironment();
testCheck("Step 1 - merged interface has all fields", env.nodeEnv === "production" && env.port === 8080 && env.apiSecret === "super-secret-key");

console.log("\\nVerifying Step 2 (HttpMethod & EndpointTuple)...");
const ep: EndpointTuple = ["POST", "/api/v1/auth/login"];
testCheck("Step 2 - formatEndpoint", formatEndpoint(ep) === "[POST] /api/v1/auth/login");

console.log("\\nVerifying Step 3 (Interface vs Type compatibility)...");
const u1: ExtendedUser = { id: "10", name: "Grace" };
const u2: TExtendedUser = { id: "10", name: "Grace" };
testCheck("Step 3 - areUsersCompatible", areUsersCompatible(u1, u2) === true);

console.log("\\nVerifying Step 4 (PluginRegistry)...");
const host = createPluginHost();
testCheck("Step 4 - createPluginHost", host.auth === true && typeof host.logger === "function");

console.log("\\n[Summary] Day 15 challenge checks completed!\\n");
`
  }
];
