import { ChallengeFile } from "./types.js";

export const days01_05: ChallengeFile[] = [
  // ==========================================================================
  // DAY 01: INTRODUCTION & GETTING STARTED
  // ==========================================================================
  {
    day: 1,
    folder: "01_Day_Introduction",
    topic: "Introduction & Getting Started",
    code: `/**
 * ============================================================================
 * DAY 01: INTRODUCTION & GETTING STARTED - CODING CHALLENGES
 * ============================================================================
 * Welcome to Day 01's hands-on challenge!
 * 
 * INSTRUCTIONS:
 * 1. Read each challenge description and requirement in the comments below.
 * 2. Replace the starter placeholders (// >>> YOUR CODE HERE <<<) with your code.
 * 3. Test your solution by executing in your terminal:
 *      npx tsx 01_Day_Introduction/challenge.ts
 *    OR
 *      npm run challenge:01
 * ============================================================================
 */

console.log("\\n=======================================================");
console.log("  DAY 01: CHALLENGE VERIFICATION RUNNER");
console.log("=======================================================\\n");

function testCheck(step: string, passed: boolean, details?: string): void {
  if (passed) {
    console.log(\`  [PASS] \${step}\${details ? \` -> \${details}\` : ""}\`);
  } else {
    console.log(\`  [WAIT] \${step} (Needs attention)\${details ? \` -> \${details}\` : ""}\`);
  }
}

// ============================================================================
// STEP 1: Explicit Variable Type Annotations
// ============================================================================
/**
 * CHALLENGE 1:
 * Declare 3 exported variables with EXPLICIT type annotations:
 *   - 'courseTitle': string with value "30 Days of TypeScript"
 *   - 'totalDays': number with value 30
 *   - 'isEnrolled': boolean with value true
 * 
 * Requirement:
 *   You must include the explicit type annotations (: string, : number, : boolean).
 */
// >>> YOUR CODE HERE <<<
export const courseTitle: string = "30 Days of TypeScript";
export const totalDays: number = 30;
export const isEnrolled: boolean = true;


// ============================================================================
// STEP 2: Strongly Typed Function Parameters & Return Type
// ============================================================================
/**
 * CHALLENGE 2:
 * Write a function 'formatBadge' that accepts:
 *   - title (string): The lesson title
 *   - day (number): The day number
 * 
 * Return a formatted string in the pattern:
 *   "[TS30] Day <2-digit-padded-number>: <title>"
 * 
 * Example:
 *   formatBadge("Primitive Types", 2) => "[TS30] Day 02: Primitive Types"
 * 
 * Hint: Use String(day).padStart(2, "0")
 */
// >>> YOUR CODE HERE <<<
export function formatBadge(title: string, day: number): string {
  // TODO: Replace with your implementation
  return \`[TS30] Day \${String(day).padStart(2, "0")}: \${title}\`;
}


// ============================================================================
// STEP 3: Strict Arithmetic & Type Coercion Protection
// ============================================================================
/**
 * CHALLENGE 3:
 * In JavaScript, "100" - 20 is 80, but "100" + 20 is "10020".
 * TypeScript eliminates this ambiguity.
 * 
 * Write a function 'calculateFinalPrice' that accepts:
 *   - basePrice (number)
 *   - discountRate (number, e.g. 0.15 for 15%)
 *   - shippingFee (number, e.g. 10)
 * 
 * Return the final total price as a number:
 *   (basePrice * (1 - discountRate)) + shippingFee
 * 
 * Example:
 *   calculateFinalPrice(100, 0.20, 15) => 95
 */
// >>> YOUR CODE HERE <<<
export function calculateFinalPrice(basePrice: number, discountRate: number, shippingFee: number): number {
  // TODO: Replace with your implementation
  return (basePrice * (1 - discountRate)) + shippingFee;
}


// ============================================================================
// STEP 4: Optional Parameters & Nullish Coalescing
// ============================================================================
/**
 * CHALLENGE 4:
 * Write a function 'greetScholar' that accepts an optional parameter:
 *   - scholarName (optional string, use '?')
 * 
 * If scholarName is provided, return:
 *   "Welcome, <scholarName>! Ready to code."
 * If scholarName is undefined or omitted, return:
 *   "Welcome, TypeScript Scholar! Ready to code."
 * 
 * Hint: Use the nullish coalescing operator '??'
 */
// >>> YOUR CODE HERE <<<
export function greetScholar(scholarName?: string): string {
  // TODO: Replace with your implementation
  const name = scholarName ?? "TypeScript Scholar";
  return \`Welcome, \${name}! Ready to code.\`;
}


// ============================================================================
// VERIFICATION TEST SUITE
// ============================================================================
console.log("Verifying Step 1 (Explicit Annotations)...");
testCheck("Step 1.1 - courseTitle", courseTitle === "30 Days of TypeScript", courseTitle);
testCheck("Step 1.2 - totalDays", totalDays === 30, String(totalDays));
testCheck("Step 1.3 - isEnrolled", isEnrolled === true, String(isEnrolled));

console.log("\\nVerifying Step 2 (formatBadge)...");
const badgeOut = formatBadge("Primitive Types", 2);
testCheck("Step 2 - formatBadge", badgeOut === "[TS30] Day 02: Primitive Types", badgeOut);

console.log("\\nVerifying Step 3 (calculateFinalPrice)...");
const priceOut = calculateFinalPrice(100, 0.2, 15);
testCheck("Step 3 - calculateFinalPrice", priceOut === 95, \`Result: \${priceOut}\`);

console.log("\\nVerifying Step 4 (greetScholar)...");
const greetWithArg = greetScholar("Alex");
const greetWithoutArg = greetScholar();
testCheck("Step 4.1 - with argument", greetWithArg === "Welcome, Alex! Ready to code.", greetWithArg);
testCheck("Step 4.2 - default fallback", greetWithoutArg === "Welcome, TypeScript Scholar! Ready to code.", greetWithoutArg);

console.log("\\n[Summary] Day 01 challenge checks completed!\\n");
`
  },

  // ==========================================================================
  // DAY 02: PRIMITIVE TYPES & TYPE ANNOTATIONS
  // ==========================================================================
  {
    day: 2,
    folder: "02_Day_Primitive_types",
    topic: "Primitive Data Types & Type Annotations",
    code: `/**
 * ============================================================================
 * DAY 02: PRIMITIVE DATA TYPES & TYPE ANNOTATIONS - CODING CHALLENGES
 * ============================================================================
 * Welcome to Day 02! Today you explore the 7 primitive types:
 * string, number, boolean, null, undefined, symbol, and bigint.
 *
 * Test with:
 *   npx tsx 02_Day_Primitive_types/challenge.ts
 *   OR
 *   npm run challenge:02
 * ============================================================================
 */

console.log("\\n=======================================================");
console.log("  DAY 02: CHALLENGE VERIFICATION RUNNER");
console.log("=======================================================\\n");

function testCheck(step: string, passed: boolean, details?: string): void {
  if (passed) {
    console.log(\`  [PASS] \${step}\${details ? \` -> \${details}\` : ""}\`);
  } else {
    console.log(\`  [WAIT] \${step} (Needs attention)\${details ? \` -> \${details}\` : ""}\`);
  }
}

// ============================================================================
// STEP 1: The 7 Primitive Variables
// ============================================================================
/**
 * CHALLENGE 1:
 * Declare and export the following 7 primitive variables with explicit types:
 *   - 'appName': string ("TypeScript Tutor")
 *   - 'maxUsers': number (10000)
 *   - 'isBeta': boolean (false)
 *   - 'emptyState': null (null)
 *   - 'unassigned': undefined (undefined)
 *   - 'bigSequence': bigint (9007199254740995n)
 *   - 'registryKey': symbol (Symbol("tutor.key"))
 */
// >>> YOUR CODE HERE <<<
export const appName: string = "TypeScript Tutor";
export const maxUsers: number = 10000;
export const isBeta: boolean = false;
export const emptyState: null = null;
export const unassigned: undefined = undefined;
export const bigSequence: bigint = 9007199254740995n;
export const registryKey: symbol = Symbol("tutor.key");


// ============================================================================
// STEP 2: BigInt Precision Arithmetic
// ============================================================================
/**
 * CHALLENGE 2:
 * JavaScript Numbers lose precision past 2^53 - 1 (Number.MAX_SAFE_INTEGER).
 * BigInt solves this for arbitrarily large integers.
 * 
 * Write a function 'multiplyBigInt' that takes two BigInt values:
 *   - a (bigint)
 *   - b (bigint)
 * 
 * Return their product as a bigint: a * b.
 */
// >>> YOUR CODE HERE <<<
export function multiplyBigInt(a: bigint, b: bigint): bigint {
  // TODO: Replace with your implementation
  return a * b;
}


// ============================================================================
// STEP 3: Multi-Base Number Representation
// ============================================================================
/**
 * CHALLENGE 3:
 * TypeScript allows decimal, hex (0x...), binary (0b...), and octal (0o...) numbers.
 * 
 * Write a function 'convertBases' that takes a decimal number and returns an object
 * with string representations in hex and binary:
 *   - hex: number in hexadecimal format (e.g. "2a" for 42)
 *   - binary: number in binary format (e.g. "101010" for 42)
 * 
 * Hint: Use num.toString(16) and num.toString(2)
 */
// >>> YOUR CODE HERE <<<
export interface BaseConversions {
  hex: string;
  binary: string;
}

export function convertBases(num: number): BaseConversions {
  // TODO: Replace with your implementation
  return {
    hex: num.toString(16),
    binary: num.toString(2)
  };
}


// ============================================================================
// STEP 4: Differentiating Null vs Undefined
// ============================================================================
/**
 * CHALLENGE 4:
 * In TypeScript, 'null' signals intentional absence of an object value,
 * while 'undefined' indicates a variable that has not been initialized.
 * 
 * Write a function 'describeSubmission' that accepts:
 *   - score (number | null | undefined)
 * 
 * Return:
 *   - If score is undefined: "NOT_SUBMITTED"
 *   - If score is null: "EXCUSED"
 *   - If score is a number: \`SCORE: \${score}\`
 */
// >>> YOUR CODE HERE <<<
export function describeSubmission(score: number | null | undefined): string {
  // TODO: Replace with your implementation
  if (score === undefined) return "NOT_SUBMITTED";
  if (score === null) return "EXCUSED";
  return \`SCORE: \${score}\`;
}


// ============================================================================
// VERIFICATION TEST SUITE
// ============================================================================
console.log("Verifying Step 1 (Primitive Variables)...");
testCheck("Step 1.1 - appName", typeof appName === "string" && appName === "TypeScript Tutor", appName);
testCheck("Step 1.2 - maxUsers", typeof maxUsers === "number" && maxUsers === 10000, String(maxUsers));
testCheck("Step 1.3 - isBeta", typeof isBeta === "boolean" && isBeta === false, String(isBeta));
testCheck("Step 1.4 - emptyState", emptyState === null, "null");
testCheck("Step 1.5 - unassigned", unassigned === undefined, "undefined");
testCheck("Step 1.6 - bigSequence", typeof bigSequence === "bigint" && bigSequence === 9007199254740995n, bigSequence.toString());
testCheck("Step 1.7 - registryKey", typeof registryKey === "symbol", registryKey.toString());

console.log("\\nVerifying Step 2 (multiplyBigInt)...");
const bigProd = multiplyBigInt(1000000000000n, 3n);
testCheck("Step 2 - multiplyBigInt", bigProd === 3000000000000n, bigProd.toString());

console.log("\\nVerifying Step 3 (convertBases)...");
const bases = convertBases(42);
testCheck("Step 3 - convertBases", bases.hex === "2a" && bases.binary === "101010", JSON.stringify(bases));

console.log("\\nVerifying Step 4 (describeSubmission)...");
testCheck("Step 4.1 - undefined", describeSubmission(undefined) === "NOT_SUBMITTED");
testCheck("Step 4.2 - null", describeSubmission(null) === "EXCUSED");
testCheck("Step 4.3 - number", describeSubmission(95) === "SCORE: 95");

console.log("\\n[Summary] Day 02 challenge checks completed!\\n");
`
  },

  // ==========================================================================
  // DAY 03: SPECIAL TYPES: ANY, UNKNOWN, NEVER, VOID
  // ==========================================================================
  {
    day: 3,
    folder: "03_Day_Special_types",
    topic: "Special Types: any, unknown, never, void",
    code: `/**
 * ============================================================================
 * DAY 03: SPECIAL TYPES: ANY, UNKNOWN, NEVER, VOID - CODING CHALLENGES
 * ============================================================================
 * Learn the guardrails of the type system:
 * - 'any': opt-out of type checking (use with caution!)
 * - 'unknown': type-safe any; requires narrowing before use
 * - 'void': functions that return nothing
 * - 'never': values that can never occur (unreachable / exhaustive branches)
 *
 * Test with:
 *   npx tsx 03_Day_Special_types/challenge.ts
 *   OR
 *   npm run challenge:03
 * ============================================================================
 */

console.log("\\n=======================================================");
console.log("  DAY 03: CHALLENGE VERIFICATION RUNNER");
console.log("=======================================================\\n");

function testCheck(step: string, passed: boolean, details?: string): void {
  if (passed) {
    console.log(\`  [PASS] \${step}\${details ? \` -> \${details}\` : ""}\`);
  } else {
    console.log(\`  [WAIT] \${step} (Needs attention)\${details ? \` -> \${details}\` : ""}\`);
  }
}

// ============================================================================
// STEP 1: Safe Property Extraction from 'unknown'
// ============================================================================
/**
 * CHALLENGE 1:
 * 'unknown' is the type-safe counterpart of 'any'. You cannot access properties
 * on 'unknown' without narrowing first.
 * 
 * Write a function 'safeExtractLength' that accepts an argument of type 'unknown':
 *   - If the value is a string, return its length.
 *   - If the value is an array, return its length.
 *   - Otherwise, return -1.
 * 
 * Hint: Use 'typeof' for string check, and 'Array.isArray()' for array check.
 */
// >>> YOUR CODE HERE <<<
export function safeExtractLength(val: unknown): number {
  // TODO: Replace with your implementation
  if (typeof val === "string") {
    return val.length;
  }
  if (Array.isArray(val)) {
    return val.length;
  }
  return -1;
}


// ============================================================================
// STEP 2: Pure Side-Effects with 'void'
// ============================================================================
/**
 * CHALLENGE 2:
 * 'void' signifies the absence of a return value in functions.
 * 
 * Write a function 'appendLogEntry' that accepts:
 *   - logArray (string[]): array of log strings
 *   - message (string): log message to append
 * 
 * The function must push \`[\${new Date().toISOString().slice(0, 10)}] \${message}\`
 * to 'logArray' and return 'void'.
 */
// >>> YOUR CODE HERE <<<
export function appendLogEntry(logArray: string[], message: string): void {
  // TODO: Replace with your implementation
  const datePrefix = new Date().toISOString().slice(0, 10);
  logArray.push(\`[\${datePrefix}] \${message}\`);
}


// ============================================================================
// STEP 3: Exhaustive Switch Checking with 'never'
// ============================================================================
/**
 * CHALLENGE 3:
 * 'never' represents states that must never occur. In a switch statement,
 * assigning the unhandled case to 'never' guarantees exhaustive checks at compile-time.
 * 
 * Given the union type 'TrafficLight':
 * Write a function 'assertNever' that takes (x: never) and throws an Error.
 * Then write 'getLightInstruction' that handles each light exhaustively:
 *   - "red"    => "Stop immediately"
 *   - "yellow" => "Prepare to stop"
 *   - "green"  => "Proceed safely"
 *   - default  => call assertNever(light)
 */
export type TrafficLight = "red" | "yellow" | "green";

// >>> YOUR CODE HERE <<<
export function assertNever(x: never): never {
  throw new Error(\`Unexpected value: \${JSON.stringify(x)}\`);
}

export function getLightInstruction(light: TrafficLight): string {
  // TODO: Replace with your implementation
  switch (light) {
    case "red":
      return "Stop immediately";
    case "yellow":
      return "Prepare to stop";
    case "green":
      return "Proceed safely";
    default:
      return assertNever(light);
  }
}


// ============================================================================
// STEP 4: Safe JSON Deserializer Guard
// ============================================================================
/**
 * CHALLENGE 4:
 * When parsing unknown data from an API or file, JSON.parse() returns 'any'.
 * Write a wrapper 'safeJsonParse' that accepts:
 *   - raw (string)
 * 
 * Wrap the JSON.parse call in a try/catch block.
 * Return the parsed result as 'unknown' on success, or 'null' on failure.
 */
// >>> YOUR CODE HERE <<<
export function safeJsonParse(raw: string): unknown {
  // TODO: Replace with your implementation
  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
}


// ============================================================================
// VERIFICATION TEST SUITE
// ============================================================================
console.log("Verifying Step 1 (safeExtractLength)...");
testCheck("Step 1.1 - string length", safeExtractLength("TypeScript") === 10);
testCheck("Step 1.2 - array length", safeExtractLength([1, 2, 3, 4]) === 4);
testCheck("Step 1.3 - number fallback", safeExtractLength(12345) === -1);
testCheck("Step 1.4 - null fallback", safeExtractLength(null) === -1);

console.log("\\nVerifying Step 2 (appendLogEntry)...");
const testLogs: string[] = [];
appendLogEntry(testLogs, "User signed in");
testCheck("Step 2 - appendLogEntry", testLogs.length === 1 && testLogs[0].includes("User signed in"), testLogs[0]);

console.log("\\nVerifying Step 3 (getLightInstruction)...");
testCheck("Step 3.1 - red", getLightInstruction("red") === "Stop immediately");
testCheck("Step 3.2 - yellow", getLightInstruction("yellow") === "Prepare to stop");
testCheck("Step 3.3 - green", getLightInstruction("green") === "Proceed safely");

console.log("\\nVerifying Step 4 (safeJsonParse)...");
const validParsed = safeJsonParse('{"version": 1}');
const invalidParsed = safeJsonParse("not-a-json");
testCheck("Step 4.1 - valid JSON", typeof validParsed === "object" && validParsed !== null);
testCheck("Step 4.2 - invalid JSON", invalidParsed === null);

console.log("\\n[Summary] Day 03 challenge checks completed!\\n");
`
  },

  // ==========================================================================
  // DAY 04: ARRAYS, READONLY ARRAYS & MATRICES
  // ==========================================================================
  {
    day: 4,
    folder: "04_Day_Arrays",
    topic: "Arrays, Readonly Arrays & Matrices",
    code: `/**
 * ============================================================================
 * DAY 04: ARRAYS, READONLY ARRAYS & MATRICES - CODING CHALLENGES
 * ============================================================================
 * Arrays are workhorses in TypeScript:
 * - 'T[]' or 'Array<T>' for mutable arrays
 * - 'readonly T[]' or 'ReadonlyArray<T>' to prevent mutation
 * - Multi-dimensional matrices 'T[][]'
 *
 * Test with:
 *   npx tsx 04_Day_Arrays/challenge.ts
 *   OR
 *   npm run challenge:04
 * ============================================================================
 */

console.log("\\n=======================================================");
console.log("  DAY 04: CHALLENGE VERIFICATION RUNNER");
console.log("=======================================================\\n");

function testCheck(step: string, passed: boolean, details?: string): void {
  if (passed) {
    console.log(\`  [PASS] \${step}\${details ? \` -> \${details}\` : ""}\`);
  } else {
    console.log(\`  [WAIT] \${step} (Needs attention)\${details ? \` -> \${details}\` : ""}\`);
  }
}

// ============================================================================
// STEP 1: Basic Array Aggregation
// ============================================================================
/**
 * CHALLENGE 1:
 * Write a function 'sumPositiveNumbers' that accepts:
 *   - numbers (number[]): array of numbers
 * 
 * Return the sum of all strictly positive numbers (> 0).
 * If no positive numbers exist or the array is empty, return 0.
 * 
 * Example:
 *   sumPositiveNumbers([10, -5, 20, -1, 30]) => 60
 */
// >>> YOUR CODE HERE <<<
export function sumPositiveNumbers(numbers: number[]): number {
  // TODO: Replace with your implementation
  return numbers.filter(n => n > 0).reduce((acc, curr) => acc + curr, 0);
}


// ============================================================================
// STEP 2: Readonly Arrays & Immutable Appending
// ============================================================================
/**
 * CHALLENGE 2:
 * 'readonly string[]' prevents direct mutations like .push(), .pop(), or [index] = value.
 * 
 * Write a function 'appendTag' that accepts:
 *   - tags (readonly string[]): immutable array of tags
 *   - newTag (string): the tag to add
 * 
 * Return a NEW readonly array containing all previous tags plus 'newTag'.
 * Do NOT mutate 'tags'.
 * 
 * Hint: Use array spreading [...tags, newTag]
 */
// >>> YOUR CODE HERE <<<
export function appendTag(tags: readonly string[], newTag: string): readonly string[] {
  // TODO: Replace with your implementation
  return [...tags, newTag];
}


// ============================================================================
// STEP 3: Multi-Dimensional Matrices (2D Grids)
// ============================================================================
/**
 * CHALLENGE 3:
 * In mathematics, the "trace" of a square matrix is the sum of elements
 * on the main diagonal (matrix[0][0] + matrix[1][1] + ... + matrix[n-1][n-1]).
 * 
 * Write a function 'calculateMatrixTrace' that accepts:
 *   - matrix (number[][]): a square 2D matrix
 * 
 * Return the trace sum as a number.
 * 
 * Example:
 *   calculateMatrixTrace([
 *     [1, 2, 3],
 *     [4, 5, 6],
 *     [7, 8, 9]
 *   ]) => 1 + 5 + 9 = 15
 */
// >>> YOUR CODE HERE <<<
export function calculateMatrixTrace(matrix: number[][]): number {
  // TODO: Replace with your implementation
  let sum = 0;
  for (let i = 0; i < matrix.length; i++) {
    if (matrix[i] && typeof matrix[i][i] === "number") {
      sum += matrix[i][i];
    }
  }
  return sum;
}


// ============================================================================
// STEP 4: Typed Object Array Filtering & Projection
// ============================================================================
/**
 * CHALLENGE 4:
 * Write a function 'getActiveUserEmails' that accepts an array of user objects:
 *   - users ({ id: number; email: string; isActive: boolean }[])
 * 
 * Return an array of strings containing ONLY the emails of active users.
 * 
 * Example:
 *   getActiveUserEmails([
 *     { id: 1, email: "alice@example.com", isActive: true },
 *     { id: 2, email: "bob@example.com", isActive: false },
 *     { id: 3, email: "carol@example.com", isActive: true }
 *   ]) => ["alice@example.com", "carol@example.com"]
 */
export interface UserRecord {
  id: number;
  email: string;
  isActive: boolean;
}

// >>> YOUR CODE HERE <<<
export function getActiveUserEmails(users: UserRecord[]): string[] {
  // TODO: Replace with your implementation
  return users.filter(u => u.isActive).map(u => u.email);
}


// ============================================================================
// VERIFICATION TEST SUITE
// ============================================================================
console.log("Verifying Step 1 (sumPositiveNumbers)...");
const sumRes = sumPositiveNumbers([10, -5, 20, -1, 30]);
testCheck("Step 1 - sumPositiveNumbers", sumRes === 60, \`Result: \${sumRes}\`);

console.log("\\nVerifying Step 2 (appendTag)...");
const initialTags: readonly string[] = ["typescript", "javascript"];
const updatedTags = appendTag(initialTags, "node");
testCheck("Step 2 - appendTag immutable", updatedTags.length === 3 && updatedTags[2] === "node" && initialTags.length === 2);

console.log("\\nVerifying Step 3 (calculateMatrixTrace)...");
const traceRes = calculateMatrixTrace([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]);
testCheck("Step 3 - calculateMatrixTrace", traceRes === 15, \`Trace: \${traceRes}\`);

console.log("\\nVerifying Step 4 (getActiveUserEmails)...");
const testUsers: UserRecord[] = [
  { id: 1, email: "alice@example.com", isActive: true },
  { id: 2, email: "bob@example.com", isActive: false },
  { id: 3, email: "carol@example.com", isActive: true }
];
const emails = getActiveUserEmails(testUsers);
testCheck("Step 4 - getActiveUserEmails", emails.length === 2 && emails[0] === "alice@example.com" && emails[1] === "carol@example.com", JSON.stringify(emails));

console.log("\\n[Summary] Day 04 challenge checks completed!\\n");
`
  },

  // ==========================================================================
  // DAY 05: TUPLES, LABELED TUPLES & AS CONST
  // ==========================================================================
  {
    day: 5,
    folder: "05_Day_Tuples",
    topic: "Tuples, Labeled Tuples & as const",
    code: `/**
 * ============================================================================
 * DAY 05: TUPLES, LABELED TUPLES & AS CONST - CODING CHALLENGES
 * ============================================================================
 * Tuples are fixed-length arrays with strictly typed element positions:
 * - Labeled tuples: [lat: number, lng: number]
 * - Optional elements in tuples: [string, number?]
 * - Rest elements in tuples: [string, ...number[]]
 * - 'as const' literal assertion
 *
 * Test with:
 *   npx tsx 05_Day_Tuples/challenge.ts
 *   OR
 *   npm run challenge:05
 * ============================================================================
 */

console.log("\\n=======================================================");
console.log("  DAY 05: CHALLENGE VERIFICATION RUNNER");
console.log("=======================================================\\n");

function testCheck(step: string, passed: boolean, details?: string): void {
  if (passed) {
    console.log(\`  [PASS] \${step}\${details ? \` -> \${details}\` : ""}\`);
  } else {
    console.log(\`  [WAIT] \${step} (Needs attention)\${details ? \` -> \${details}\` : ""}\`);
  }
}

// ============================================================================
// STEP 1: Labeled Geographic Point Tuple
// ============================================================================
/**
 * CHALLENGE 1:
 * Define a labeled tuple type 'GeoCoordinates' with:
 *   - lat: number
 *   - lng: number
 *   - elevation?: number (optional elevation in meters)
 * 
 * Then write a function 'formatCoordinates' that takes 'coords: GeoCoordinates':
 *   - If elevation is provided: \`\${lat.toFixed(2)}N, \${lng.toFixed(2)}E (\${elevation}m)\`
 *   - If elevation is omitted:  \`\${lat.toFixed(2)}N, \${lng.toFixed(2)}E\`
 */
// >>> YOUR CODE HERE <<<
export type GeoCoordinates = [lat: number, lng: number, elevation?: number];

export function formatCoordinates(coords: GeoCoordinates): string {
  // TODO: Replace with your implementation
  const [lat, lng, elevation] = coords;
  if (elevation !== undefined) {
    return \`\${lat.toFixed(2)}N, \${lng.toFixed(2)}E (\${elevation}m)\`;
  }
  return \`\${lat.toFixed(2)}N, \${lng.toFixed(2)}E\`;
}


// ============================================================================
// STEP 2: HTTP Response Tuple
// ============================================================================
/**
 * CHALLENGE 2:
 * Define a tuple type 'ApiResponse' representing:
 *   - [statusCode: number, statusText: string, data: unknown]
 * 
 * Write a function 'isSuccessResponse' that takes (res: ApiResponse):
 *   - Returns true if statusCode is between 200 and 299 inclusive.
 *   - Returns false otherwise.
 */
// >>> YOUR CODE HERE <<<
export type ApiResponse = [statusCode: number, statusText: string, data: unknown];

export function isSuccessResponse(res: ApiResponse): boolean {
  // TODO: Replace with your implementation
  const [statusCode] = res;
  return statusCode >= 200 && statusCode < 300;
}


// ============================================================================
// STEP 3: Variadic / Rest Elements in Tuples
// ============================================================================
/**
 * CHALLENGE 3:
 * A variadic tuple allows a variable number of elements of a certain type.
 * 
 * Define a tuple type 'ScoreEntry' representing:
 *   - A student's name (string) followed by zero or more test scores (number)
 *   - Syntax: [studentName: string, ...scores: number[]]
 * 
 * Write a function 'computeStudentAverage' that takes (entry: ScoreEntry):
 *   - If there are no scores, return 0.
 *   - Otherwise return the arithmetic average of the scores.
 */
// >>> YOUR CODE HERE <<<
export type ScoreEntry = [studentName: string, ...scores: number[]];

export function computeStudentAverage(entry: ScoreEntry): number {
  // TODO: Replace with your implementation
  const [_studentName, ...scores] = entry;
  if (scores.length === 0) return 0;
  const sum = scores.reduce((acc, curr) => acc + curr, 0);
  return sum / scores.length;
}


// ============================================================================
// STEP 4: Readonly Tuples with 'as const'
// ============================================================================
/**
 * CHALLENGE 4:
 * When you suffix an array with 'as const', TypeScript treats it as a readonly
 * tuple of string literal types, rather than string[].
 * 
 * Declare and export 'SUPPORTED_LOCALES = ["en-US", "es-ES", "fr-FR", "de-DE"] as const'.
 * Extract the union type 'SupportedLocale' using:
 *   type SupportedLocale = (typeof SUPPORTED_LOCALES)[number];
 * 
 * Write a type guard 'isSupportedLocale' that checks if an arbitrary string is a SupportedLocale.
 */
// >>> YOUR CODE HERE <<<
export const SUPPORTED_LOCALES = ["en-US", "es-ES", "fr-FR", "de-DE"] as const;
export type SupportedLocale = (typeof SUPPORTED_LOCALES)[number];

export function isSupportedLocale(locale: string): locale is SupportedLocale {
  // TODO: Replace with your implementation
  return (SUPPORTED_LOCALES as readonly string[]).includes(locale);
}


// ============================================================================
// VERIFICATION TEST SUITE
// ============================================================================
console.log("Verifying Step 1 (GeoCoordinates)...");
const geo1: GeoCoordinates = [37.77, -122.41, 15];
const geo2: GeoCoordinates = [51.5, -0.12];
testCheck("Step 1.1 - with elevation", formatCoordinates(geo1) === "37.77N, -122.41E (15m)", formatCoordinates(geo1));
testCheck("Step 1.2 - without elevation", formatCoordinates(geo2) === "51.50N, -0.12E", formatCoordinates(geo2));

console.log("\\nVerifying Step 2 (ApiResponse)...");
const okRes: ApiResponse = [200, "OK", { user: "Ada" }];
const notFoundRes: ApiResponse = [404, "Not Found", null];
testCheck("Step 2.1 - success code", isSuccessResponse(okRes) === true);
testCheck("Step 2.2 - error code", isSuccessResponse(notFoundRes) === false);

console.log("\\nVerifying Step 3 (computeStudentAverage)...");
const studentScore: ScoreEntry = ["Grace", 90, 95, 100];
const emptyScore: ScoreEntry = ["Nobody"];
testCheck("Step 3.1 - average with scores", computeStudentAverage(studentScore) === 95, \`Average: \${computeStudentAverage(studentScore)}\`);
testCheck("Step 3.2 - average without scores", computeStudentAverage(emptyScore) === 0, \`Average: \${computeStudentAverage(emptyScore)}\`);

console.log("\\nVerifying Step 4 (as const & SupportedLocale)...");
testCheck("Step 4.1 - valid locale", isSupportedLocale("en-US") === true);
testCheck("Step 4.2 - invalid locale", isSupportedLocale("ja-JP") === false);

console.log("\\n[Summary] Day 05 challenge checks completed!\\n");
`
  }
];
