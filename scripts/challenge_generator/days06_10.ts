import { ChallengeFile } from "./types.js";

export const days06_10: ChallengeFile[] = [
  // ==========================================================================
  // DAY 06: OBJECT TYPES & PROPERTY MODIFIERS
  // ==========================================================================
  {
    day: 6,
    folder: "06_Day_Objects",
    topic: "Object Types & Property Modifiers",
    code: `/**
 * ============================================================================
 * DAY 06: OBJECT TYPES & PROPERTY MODIFIERS - CODING CHALLENGES
 * ============================================================================
 * Object types allow defining exact structural shapes with modifiers:
 * - 'readonly' prevents property re-assignment
 * - '?' marks properties as optional
 * - Index signatures '{ [key: string]: T }' model dynamic dictionaries
 *
 * Test with:
 *   npx tsx 06_Day_Objects/challenge.ts
 *   OR
 *   npm run challenge:06
 * ============================================================================
 */

console.log("\\n=======================================================");
console.log("  DAY 06: CHALLENGE VERIFICATION RUNNER");
console.log("=======================================================\\n");

function testCheck(step: string, passed: boolean, details?: string): void {
  if (passed) {
    console.log(\`  [PASS] \${step}\${details ? \` -> \${details}\` : ""}\`);
  } else {
    console.log(\`  [WAIT] \${step} (Needs attention)\${details ? \` -> \${details}\` : ""}\`);
  }
}

// ============================================================================
// STEP 1: Defining Structural Object Types with Modifiers
// ============================================================================
/**
 * CHALLENGE 1:
 * Define an object type 'UserProfile' with the following fields:
 *   - readonly id: string
 *   - username: string
 *   - email: string
 *   - bio?: string (optional)
 * 
 * Then write a function 'createUserProfile' that creates and returns a valid
 * UserProfile object with the provided parameters.
 */
// >>> YOUR CODE HERE <<<
export interface UserProfile {
  readonly id: string;
  username: string;
  email: string;
  bio?: string;
}

export function createUserProfile(id: string, username: string, email: string, bio?: string): UserProfile {
  // TODO: Replace with your implementation
  return { id, username, email, bio };
}


// ============================================================================
// STEP 2: Pure Immutable Updates
// ============================================================================
/**
 * CHALLENGE 2:
 * Because 'id' on UserProfile is 'readonly', it cannot be mutated.
 * 
 * Write a function 'updateUserBio' that accepts:
 *   - user (UserProfile): original user object
 *   - newBio (string): updated bio string
 * 
 * Return a NEW UserProfile object with the updated bio, preserving the
 * existing id, username, and email. Do NOT mutate 'user'.
 */
// >>> YOUR CODE HERE <<<
export function updateUserBio(user: UserProfile, newBio: string): UserProfile {
  // TODO: Replace with your implementation
  return { ...user, bio: newBio };
}


// ============================================================================
// STEP 3: Dynamic Index Signatures
// ============================================================================
/**
 * CHALLENGE 3:
 * An index signature allows objects to hold arbitrary dynamic keys.
 * 
 * Define a type 'MetricStore' with:
 *   - [metricName: string]: number
 * 
 * Write a function 'recordMetric' that accepts:
 *   - store (MetricStore)
 *   - metric (string)
 *   - delta (number)
 * 
 * If the metric exists in the store, add 'delta' to its value.
 * Otherwise, initialize it to 'delta'.
 * Return the updated store.
 */
// >>> YOUR CODE HERE <<<
export type MetricStore = { [metricName: string]: number };

export function recordMetric(store: MetricStore, metric: string, delta: number): MetricStore {
  // TODO: Replace with your implementation
  const current = store[metric] ?? 0;
  return { ...store, [metric]: current + delta };
}


// ============================================================================
// STEP 4: Nested Object Configuration
// ============================================================================
/**
 * CHALLENGE 4:
 * Define a type 'ServerConfig' with:
 *   - host: string
 *   - port: number
 *   - database: {
 *       name: string;
 *       ssl: boolean;
 *     }
 * 
 * Write a function 'formatConnectionString' that takes 'config: ServerConfig'
 * and returns:
 *   "db://<host>:<port>/<name>?ssl=<ssl>"
 * 
 * Example:
 *   formatConnectionString({ host: "localhost", port: 5432, database: { name: "app_db", ssl: true } })
 *   => "db://localhost:5432/app_db?ssl=true"
 */
// >>> YOUR CODE HERE <<<
export interface ServerConfig {
  host: string;
  port: number;
  database: {
    name: string;
    ssl: boolean;
  };
}

export function formatConnectionString(config: ServerConfig): string {
  // TODO: Replace with your implementation
  return \`db://\${config.host}:\${config.port}/\${config.database.name}?ssl=\${config.database.ssl}\`;
}


// ============================================================================
// VERIFICATION TEST SUITE
// ============================================================================
console.log("Verifying Step 1 (UserProfile)...");
const user = createUserProfile("usr_101", "dev_ada", "ada@lovelace.dev", "Coding pioneer");
testCheck("Step 1 - createUserProfile", user.id === "usr_101" && user.bio === "Coding pioneer", user.username);

console.log("\\nVerifying Step 2 (updateUserBio)...");
const updated = updateUserBio(user, "World's first computer programmer");
testCheck("Step 2 - updateUserBio immutable", updated.bio === "World's first computer programmer" && user.bio === "Coding pioneer");

console.log("\\nVerifying Step 3 (MetricStore)...");
let metrics: MetricStore = { pageViews: 10 };
metrics = recordMetric(metrics, "pageViews", 5);
metrics = recordMetric(metrics, "errors", 1);
testCheck("Step 3.1 - existing metric incremented", metrics["pageViews"] === 15);
testCheck("Step 3.2 - new metric created", metrics["errors"] === 1);

console.log("\\nVerifying Step 4 (ServerConfig)...");
const connStr = formatConnectionString({ host: "localhost", port: 5432, database: { name: "app_db", ssl: true } });
testCheck("Step 4 - formatConnectionString", connStr === "db://localhost:5432/app_db?ssl=true", connStr);

console.log("\\n[Summary] Day 06 challenge checks completed!\\n");
`
  },

  // ==========================================================================
  // DAY 07: TYPE ALIASES & INTERSECTION TYPES
  // ==========================================================================
  {
    day: 7,
    folder: "07_Day_Type_aliases",
    topic: "Type Aliases & Intersection Types",
    code: `/**
 * ============================================================================
 * DAY 07: TYPE ALIASES & INTERSECTION TYPES - CODING CHALLENGES
 * ============================================================================
 * Type aliases allow creating custom names for types:
 * - Primitive aliases for domain models
 * - Intersection types '&' combine multiple types into one
 * - Branded / nominal types for compile-time ID differentiation
 *
 * Test with:
 *   npx tsx 07_Day_Type_aliases/challenge.ts
 *   OR
 *   npm run challenge:07
 * ============================================================================
 */

console.log("\\n=======================================================");
console.log("  DAY 07: CHALLENGE VERIFICATION RUNNER");
console.log("=======================================================\\n");

function testCheck(step: string, passed: boolean, details?: string): void {
  if (passed) {
    console.log(\`  [PASS] \${step}\${details ? \` -> \${details}\` : ""}\`);
  } else {
    console.log(\`  [WAIT] \${step} (Needs attention)\${details ? \` -> \${details}\` : ""}\`);
  }
}

// ============================================================================
// STEP 1: Domain-Specific Primitive Aliases
// ============================================================================
/**
 * CHALLENGE 1:
 * Define type aliases:
 *   - 'UserId': string
 *   - 'Timestamp': number
 * 
 * Write a function 'createAuditLog' that takes (userId: UserId, action: string, timestamp: Timestamp)
 * and returns:
 *   \`[\${timestamp}] User '\${userId}' performed '\${action}'\`
 */
// >>> YOUR CODE HERE <<<
export type UserId = string;
export type Timestamp = number;

export function createAuditLog(userId: UserId, action: string, timestamp: Timestamp): string {
  // TODO: Replace with your implementation
  return \`[\${timestamp}] User '\${userId}' performed '\${action}'\`;
}


// ============================================================================
// STEP 2: Composing Entities with Intersection Types (&)
// ============================================================================
/**
 * CHALLENGE 2:
 * Define the following types:
 *   - 'Identifiable': { id: string }
 *   - 'Timestamped': { createdAt: number; updatedAt: number }
 *   - 'DocumentData': { title: string; content: string }
 * 
 * Compose them using intersection '&':
 *   type Document = Identifiable & Timestamped & DocumentData;
 * 
 * Write a function 'createDocument' that takes (id, title, content, now) and returns
 * a complete Document object with createdAt and updatedAt initialized to 'now'.
 */
// >>> YOUR CODE HERE <<<
export type Identifiable = { id: string };
export type Timestamped = { createdAt: number; updatedAt: number };
export type DocumentData = { title: string; content: string };
export type Document = Identifiable & Timestamped & DocumentData;

export function createDocument(id: string, title: string, content: string, now: number): Document {
  // TODO: Replace with your implementation
  return {
    id,
    title,
    content,
    createdAt: now,
    updatedAt: now
  };
}


// ============================================================================
// STEP 3: Generic Object Merger with Intersections
// ============================================================================
/**
 * CHALLENGE 3:
 * Write a generic function 'mergeEntities' that accepts two objects:
 *   - a (T extends object)
 *   - b (U extends object)
 * 
 * Return their combined intersection: T & U.
 * 
 * Hint: Use object spread { ...a, ...b }
 */
// >>> YOUR CODE HERE <<<
export function mergeEntities<T extends object, U extends object>(a: T, b: U): T & U {
  // TODO: Replace with your implementation
  return { ...a, ...b };
}


// ============================================================================
// STEP 4: Branded / Nominal Types
// ============================================================================
/**
 * CHALLENGE 4:
 * By default, TypeScript uses structural typing, so any number can be assigned to another.
 * Branded types add a phantom property to prevent mixing up units (e.g. USD vs EUR).
 * 
 * Define:
 *   type USD = number & { readonly __brand: unique symbol };
 * 
 * Write a helper 'toUSD(amount: number): USD' using type assertion ('as USD').
 * Write 'addUSD(a: USD, b: USD): USD' that safely adds two USD amounts.
 */
declare const usdBrand: unique symbol;
export type USD = number & { readonly [usdBrand]: true };

// >>> YOUR CODE HERE <<<
export function toUSD(amount: number): USD {
  // TODO: Replace with your implementation
  return amount as USD;
}

export function addUSD(a: USD, b: USD): USD {
  // TODO: Replace with your implementation
  return ((a as number) + (b as number)) as USD;
}


// ============================================================================
// VERIFICATION TEST SUITE
// ============================================================================
console.log("Verifying Step 1 (Domain Aliases)...");
const logMsg = createAuditLog("usr_99", "UPDATE_PASSWORD", 1700000000);
testCheck("Step 1 - createAuditLog", logMsg === "[1700000000] User 'usr_99' performed 'UPDATE_PASSWORD'", logMsg);

console.log("\\nVerifying Step 2 (Document Intersection)...");
const doc = createDocument("doc_1", "TypeScript Guide", "Hello Types", 1711111111);
testCheck("Step 2 - createDocument", doc.id === "doc_1" && doc.createdAt === 1711111111 && doc.title === "TypeScript Guide");

console.log("\\nVerifying Step 3 (mergeEntities)...");
const merged = mergeEntities({ make: "Toyota" }, { year: 2024 });
testCheck("Step 3 - mergeEntities", merged.make === "Toyota" && merged.year === 2024);

console.log("\\nVerifying Step 4 (Branded USD)...");
const priceA = toUSD(50);
const priceB = toUSD(25);
const totalUSD = addUSD(priceA, priceB);
testCheck("Step 4 - addUSD", (totalUSD as unknown as number) === 75, \`Total: \${totalUSD}\`);

console.log("\\n[Summary] Day 07 challenge checks completed!\\n");
`
  },

  // ==========================================================================
  // DAY 08: UNION TYPES & LITERAL TYPES
  // ==========================================================================
  {
    day: 8,
    folder: "08_Day_Unions_and_literals",
    topic: "Union Types & Literal Types",
    code: `/**
 * ============================================================================
 * DAY 08: UNION TYPES & LITERAL TYPES - CODING CHALLENGES
 * ============================================================================
 * Unions '|' let variables hold one of several possible types.
 * Literal types restrict values to exact strings, numbers, or booleans.
 *
 * Test with:
 *   npx tsx 08_Day_Unions_and_literals/challenge.ts
 *   OR
 *   npm run challenge:08
 * ============================================================================
 */

console.log("\\n=======================================================");
console.log("  DAY 08: CHALLENGE VERIFICATION RUNNER");
console.log("=======================================================\\n");

function testCheck(step: string, passed: boolean, details?: string): void {
  if (passed) {
    console.log(\`  [PASS] \${step}\${details ? \` -> \${details}\` : ""}\`);
  } else {
    console.log(\`  [WAIT] \${step} (Needs attention)\${details ? \` -> \${details}\` : ""}\`);
  }
}

// ============================================================================
// STEP 1: Finite State Union
// ============================================================================
/**
 * CHALLENGE 1:
 * Define a union type 'FetchState':
 *   - "idle" | "loading" | "success" | "error"
 * 
 * Write a function 'canInitiateRequest' that accepts (state: FetchState):
 *   - Returns true if state is "idle" or "error"
 *   - Returns false if state is "loading" or "success"
 */
// >>> YOUR CODE HERE <<<
export type FetchState = "idle" | "loading" | "success" | "error";

export function canInitiateRequest(state: FetchState): boolean {
  // TODO: Replace with your implementation
  return state === "idle" || state === "error";
}


// ============================================================================
// STEP 2: Handling Union Parameters
// ============================================================================
/**
 * CHALLENGE 2:
 * Write a function 'normalizePortNumber' that accepts:
 *   - port (string | number)
 * 
 * Requirements:
 *   - If port is a number, validate it is between 1 and 65535.
 *     If valid return the number, otherwise return null.
 *   - If port is a string, parse it with parseInt(port, 10).
 *     If valid (between 1 and 65535 and not NaN), return the number, otherwise return null.
 */
// >>> YOUR CODE HERE <<<
export function normalizePortNumber(port: string | number): number | null {
  // TODO: Replace with your implementation
  const num = typeof port === "number" ? port : parseInt(port, 10);
  if (isNaN(num) || num < 1 || num > 65535) {
    return null;
  }
  return num;
}


// ============================================================================
// STEP 3: Numeric Literal Types
// ============================================================================
/**
 * CHALLENGE 3:
 * Define a numeric literal union 'AllowedRate':
 *   - 0.05 | 0.10 | 0.15 | 0.20
 * 
 * Write a function 'computeTax' that accepts:
 *   - amount (number)
 *   - rate (AllowedRate)
 * 
 * Return amount * rate.
 */
// >>> YOUR CODE HERE <<<
export type AllowedRate = 0.05 | 0.10 | 0.15 | 0.20;

export function computeTax(amount: number, rate: AllowedRate): number {
  // TODO: Replace with your implementation
  return amount * rate;
}


// ============================================================================
// STEP 4: Discriminated Result Union
// ============================================================================
/**
 * CHALLENGE 4:
 * Define a union type 'AsyncResult<T>':
 *   - { success: true; data: T }
 *   - { success: false; errorMessage: string }
 * 
 * Write a function 'formatAsyncResult' that takes 'res: AsyncResult<string>':
 *   - If success is true: \`DATA: \${res.data}\`
 *   - If success is false: \`ERROR: \${res.errorMessage}\`
 */
// >>> YOUR CODE HERE <<<
export type AsyncResult<T> =
  | { success: true; data: T }
  | { success: false; errorMessage: string };

export function formatAsyncResult(res: AsyncResult<string>): string {
  // TODO: Replace with your implementation
  if (res.success) {
    return \`DATA: \${res.data}\`;
  }
  return \`ERROR: \${res.errorMessage}\`;
}


// ============================================================================
// VERIFICATION TEST SUITE
// ============================================================================
console.log("Verifying Step 1 (FetchState)...");
testCheck("Step 1.1 - idle", canInitiateRequest("idle") === true);
testCheck("Step 1.2 - loading", canInitiateRequest("loading") === false);
testCheck("Step 1.3 - error", canInitiateRequest("error") === true);

console.log("\\nVerifying Step 2 (normalizePortNumber)...");
testCheck("Step 2.1 - number port", normalizePortNumber(8080) === 8080);
testCheck("Step 2.2 - string port", normalizePortNumber("3000") === 3000);
testCheck("Step 2.3 - invalid port", normalizePortNumber("invalid") === null);
testCheck("Step 2.4 - out of range", normalizePortNumber(70000) === null);

console.log("\\nVerifying Step 3 (computeTax)...");
const tax = computeTax(100, 0.15);
testCheck("Step 3 - computeTax", tax === 15, \`Tax: \${tax}\`);

console.log("\\nVerifying Step 4 (AsyncResult)...");
const okRes: AsyncResult<string> = { success: true, data: "Payload" };
const errRes: AsyncResult<string> = { success: false, errorMessage: "Not found" };
testCheck("Step 4.1 - success branch", formatAsyncResult(okRes) === "DATA: Payload");
testCheck("Step 4.2 - error branch", formatAsyncResult(errRes) === "ERROR: Not found");

console.log("\\n[Summary] Day 08 challenge checks completed!\\n");
`
  },

  // ==========================================================================
  // DAY 09: TYPE NARROWING & CONTROL FLOW ANALYSIS
  // ==========================================================================
  {
    day: 9,
    folder: "09_Day_Type_narrowing",
    topic: "Type Narrowing & Control Flow Analysis",
    code: `/**
 * ============================================================================
 * DAY 09: TYPE NARROWING & CONTROL FLOW ANALYSIS - CODING CHALLENGES
 * ============================================================================
 * TypeScript refines broad types into narrower ones using control flow checks:
 * - 'typeof' for primitives
 * - 'instanceof' for class instances
 * - 'in' operator for property existence
 * - Truthiness and equality checks
 *
 * Test with:
 *   npx tsx 09_Day_Type_narrowing/challenge.ts
 *   OR
 *   npm run challenge:09
 * ============================================================================
 */

console.log("\\n=======================================================");
console.log("  DAY 09: CHALLENGE VERIFICATION RUNNER");
console.log("=======================================================\\n");

function testCheck(step: string, passed: boolean, details?: string): void {
  if (passed) {
    console.log(\`  [PASS] \${step}\${details ? \` -> \${details}\` : ""}\`);
  } else {
    console.log(\`  [WAIT] \${step} (Needs attention)\${details ? \` -> \${details}\` : ""}\`);
  }
}

// ============================================================================
// STEP 1: 'typeof' Narrowing
// ============================================================================
/**
 * CHALLENGE 1:
 * Write a function 'doubleOrRepeat' that accepts:
 *   - input (string | number)
 * 
 * Behavior:
 *   - If input is a number: return input * 2.
 *   - If input is a string: return input.repeat(2).
 */
// >>> YOUR CODE HERE <<<
export function doubleOrRepeat(input: string | number): string | number {
  // TODO: Replace with your implementation
  if (typeof input === "number") {
    return input * 2;
  }
  return input.repeat(2);
}


// ============================================================================
// STEP 2: 'instanceof' Narrowing
// ============================================================================
/**
 * CHALLENGE 2:
 * Write a function 'toStandardError' that accepts:
 *   - err (Error | string)
 * 
 * If err is an instance of Error, return its 'message' property.
 * If err is a string, return the string.
 */
// >>> YOUR CODE HERE <<<
export function toStandardError(err: Error | string): string {
  // TODO: Replace with your implementation
  if (err instanceof Error) {
    return err.message;
  }
  return err;
}


// ============================================================================
// STEP 3: 'in' Operator Narrowing
// ============================================================================
/**
 * CHALLENGE 3:
 * Define types:
 *   - type Circle = { radius: number };
 *   - type Rectangle = { width: number; height: number };
 * 
 * Write a function 'calculateArea' that accepts (shape: Circle | Rectangle):
 *   - If "radius" in shape: return Math.PI * shape.radius ** 2
 *   - Otherwise: return shape.width * shape.height
 */
// >>> YOUR CODE HERE <<<
export type Circle = { radius: number };
export type Rectangle = { width: number; height: number };

export function calculateArea(shape: Circle | Rectangle): number {
  // TODO: Replace with your implementation
  if ("radius" in shape) {
    return Math.PI * shape.radius ** 2;
  }
  return shape.width * shape.height;
}


// ============================================================================
// STEP 4: Truthiness & Nullish Narrowing
// ============================================================================
/**
 * CHALLENGE 4:
 * Write a function 'sanitizeDisplayName' that accepts:
 *   - name (string | null | undefined)
 * 
 * If 'name' is truthy and its trimmed version is not empty, return the trimmed name.
 * Otherwise, return "Anonymous".
 */
// >>> YOUR CODE HERE <<<
export function sanitizeDisplayName(name: string | null | undefined): string {
  // TODO: Replace with your implementation
  if (name && name.trim().length > 0) {
    return name.trim();
  }
  return "Anonymous";
}


// ============================================================================
// VERIFICATION TEST SUITE
// ============================================================================
console.log("Verifying Step 1 (typeof narrowing)...");
testCheck("Step 1.1 - number double", doubleOrRepeat(21) === 42);
testCheck("Step 1.2 - string repeat", doubleOrRepeat("TS") === "TSTS");

console.log("\\nVerifying Step 2 (instanceof narrowing)...");
testCheck("Step 2.1 - Error instance", toStandardError(new Error("Timeout error")) === "Timeout error");
testCheck("Step 2.2 - string error", toStandardError("Plain error message") === "Plain error message");

console.log("\\nVerifying Step 3 (in operator narrowing)...");
const circleArea = calculateArea({ radius: 10 });
const rectArea = calculateArea({ width: 5, height: 4 });
testCheck("Step 3.1 - circle area", Math.round(circleArea) === 314);
testCheck("Step 3.2 - rect area", rectArea === 20);

console.log("\\nVerifying Step 4 (Truthiness narrowing)...");
testCheck("Step 4.1 - valid name", sanitizeDisplayName("  Ada Lovelace  ") === "Ada Lovelace");
testCheck("Step 4.2 - whitespace name", sanitizeDisplayName("   ") === "Anonymous");
testCheck("Step 4.3 - null", sanitizeDisplayName(null) === "Anonymous");
testCheck("Step 4.4 - undefined", sanitizeDisplayName(undefined) === "Anonymous");

console.log("\\n[Summary] Day 09 challenge checks completed!\\n");
`
  },

  // ==========================================================================
  // DAY 10: TYPE PREDICATES & CUSTOM TYPE GUARDS
  // ==========================================================================
  {
    day: 10,
    folder: "10_Day_Type_predicates",
    topic: "Type Predicates & Custom Type Guards",
    code: `/**
 * ============================================================================
 * DAY 10: TYPE PREDICATES & CUSTOM TYPE GUARDS - CODING CHALLENGES
 * ============================================================================
 * Type predicates bridge runtime verification with compile-time type narrowing:
 * - 'param is Type' user-defined type guards
 * - 'asserts param is Type' assertion functions
 * - Filtering arrays with type guards
 *
 * Test with:
 *   npx tsx 10_Day_Type_predicates/challenge.ts
 *   OR
 *   npm run challenge:10
 * ============================================================================
 */

console.log("\\n=======================================================");
console.log("  DAY 10: CHALLENGE VERIFICATION RUNNER");
console.log("=======================================================\\n");

function testCheck(step: string, passed: boolean, details?: string): void {
  if (passed) {
    console.log(\`  [PASS] \${step}\${details ? \` -> \${details}\` : ""}\`);
  } else {
    console.log(\`  [WAIT] \${step} (Needs attention)\${details ? \` -> \${details}\` : ""}\`);
  }
}

// ============================================================================
// STEP 1: Custom Object Type Guard ('val is Type')
// ============================================================================
/**
 * CHALLENGE 1:
 * Define an interface 'AdminAccount':
 *   - username: string
 *   - role: "ADMIN"
 *   - accessLevel: number
 * 
 * Write a custom type guard 'isAdminAccount(val: unknown): val is AdminAccount'
 * that verifies:
 *   - val is a non-null object
 *   - 'username' is a string
 *   - 'role' is exactly "ADMIN"
 *   - 'accessLevel' is a number
 */
// >>> YOUR CODE HERE <<<
export interface AdminAccount {
  username: string;
  role: "ADMIN";
  accessLevel: number;
}

export function isAdminAccount(val: unknown): val is AdminAccount {
  // TODO: Replace with your implementation
  if (typeof val !== "object" || val === null) {
    return false;
  }
  const cand = val as Record<string, unknown>;
  return (
    typeof cand.username === "string" &&
    cand.role === "ADMIN" &&
    typeof cand.accessLevel === "number"
  );
}


// ============================================================================
// STEP 2: Generic Non-Nullable Guard for Array Filtering
// ============================================================================
/**
 * CHALLENGE 2:
 * In standard TypeScript, .filter(Boolean) does not automatically narrow (T | null)[] to T[].
 * A custom predicate solves this!
 * 
 * Write a generic type guard 'isNotNullOrUndefined<T>(item: T | null | undefined): item is T'.
 * Then write 'compactList<T>(items: (T | null | undefined)[]): T[]' that uses this guard.
 */
// >>> YOUR CODE HERE <<<
export function isNotNullOrUndefined<T>(item: T | null | undefined): item is T {
  // TODO: Replace with your implementation
  return item !== null && item !== undefined;
}

export function compactList<T>(items: (T | null | undefined)[]): T[] {
  // TODO: Replace with your implementation
  return items.filter(isNotNullOrUndefined);
}


// ============================================================================
// STEP 3: Custom Error Type Guard
// ============================================================================
/**
 * CHALLENGE 3:
 * Define a custom error shape:
 *   type NetworkFailure = { kind: "NETWORK_FAILURE"; statusCode: number };
 * 
 * Write a type guard 'isNetworkFailure(val: unknown): val is NetworkFailure'
 * that checks if val is an object with kind === "NETWORK_FAILURE" and a numeric statusCode.
 */
// >>> YOUR CODE HERE <<<
export type NetworkFailure = { kind: "NETWORK_FAILURE"; statusCode: number };

export function isNetworkFailure(val: unknown): val is NetworkFailure {
  // TODO: Replace with your implementation
  if (typeof val !== "object" || val === null) return false;
  const cand = val as Record<string, unknown>;
  return cand.kind === "NETWORK_FAILURE" && typeof cand.statusCode === "number";
}


// ============================================================================
// STEP 4: Assertion Functions ('asserts val is Type')
// ============================================================================
/**
 * CHALLENGE 4:
 * Assertion functions throw an error if a condition is not met, narrowing
 * the variable in subsequent lines.
 * 
 * Write an assertion function 'assertValidScore(val: number, name: string): asserts val is number'
 * that throws an Error with \`Invalid score for \${name}: \${val}\` if val < 0 or val > 100.
 */
// >>> YOUR CODE HERE <<<
export function assertValidScore(val: number, name: string): asserts val is number {
  // TODO: Replace with your implementation
  if (val < 0 || val > 100) {
    throw new Error(\`Invalid score for \${name}: \${val}\`);
  }
}


// ============================================================================
// VERIFICATION TEST SUITE
// ============================================================================
console.log("Verifying Step 1 (isAdminAccount)...");
const validAdmin = { username: "root", role: "ADMIN", accessLevel: 10 };
const invalidAdmin = { username: "guest", role: "USER", accessLevel: 1 };
testCheck("Step 1.1 - valid admin", isAdminAccount(validAdmin) === true);
testCheck("Step 1.2 - invalid admin", isAdminAccount(invalidAdmin) === false);
testCheck("Step 1.3 - non-object", isAdminAccount("admin") === false);

console.log("\\nVerifying Step 2 (compactList)...");
const withNulls = ["apple", null, "banana", undefined, "cherry"];
const compacted = compactList(withNulls);
testCheck("Step 2 - compactList narrows array", compacted.length === 3 && compacted.join(",") === "apple,banana,cherry");

console.log("\\nVerifying Step 3 (isNetworkFailure)...");
const netErr = { kind: "NETWORK_FAILURE", statusCode: 503 };
const regularErr = new Error("DB crash");
testCheck("Step 3.1 - valid network failure", isNetworkFailure(netErr) === true);
testCheck("Step 3.2 - standard error", isNetworkFailure(regularErr) === false);

console.log("\\nVerifying Step 4 (assertValidScore)...");
let threwCorrectly = false;
try {
  assertValidScore(150, "FinalExam");
} catch {
  threwCorrectly = true;
}
testCheck("Step 4 - assertValidScore throws on >100", threwCorrectly);

console.log("\\n[Summary] Day 10 challenge checks completed!\\n");
`
  }
];
