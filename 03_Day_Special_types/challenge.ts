/**
 * ============================================================================
 * DAY 03: SPECIAL TYPES: ANY, UNKNOWN, NEVER, VOID — CODING CHALLENGES
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

console.log("\n=======================================================");
console.log("  DAY 03: CHALLENGE VERIFICATION RUNNER");
console.log("=======================================================\n");

function testCheck(step: string, passed: boolean, details?: string): void {
  if (passed) {
    console.log(`  [PASS] ${step}${details ? ` -> ${details}` : ""}`);
  } else {
    console.log(`  [WAIT] ${step} (Needs attention)${details ? ` -> ${details}` : ""}`);
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
 * The function must push `[${new Date().toISOString().slice(0, 10)}] ${message}`
 * to 'logArray' and return 'void'.
 */
// >>> YOUR CODE HERE <<<
export function appendLogEntry(logArray: string[], message: string): void {
  // TODO: Replace with your implementation
  const datePrefix = new Date().toISOString().slice(0, 10);
  logArray.push(`[${datePrefix}] ${message}`);
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
  throw new Error(`Unexpected value: ${JSON.stringify(x)}`);
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

console.log("\nVerifying Step 2 (appendLogEntry)...");
const testLogs: string[] = [];
appendLogEntry(testLogs, "User signed in");
testCheck("Step 2 - appendLogEntry", testLogs.length === 1 && testLogs[0].includes("User signed in"), testLogs[0]);

console.log("\nVerifying Step 3 (getLightInstruction)...");
testCheck("Step 3.1 - red", getLightInstruction("red") === "Stop immediately");
testCheck("Step 3.2 - yellow", getLightInstruction("yellow") === "Prepare to stop");
testCheck("Step 3.3 - green", getLightInstruction("green") === "Proceed safely");

console.log("\nVerifying Step 4 (safeJsonParse)...");
const validParsed = safeJsonParse('{"version": 1}');
const invalidParsed = safeJsonParse("not-a-json");
testCheck("Step 4.1 - valid JSON", typeof validParsed === "object" && validParsed !== null);
testCheck("Step 4.2 - invalid JSON", invalidParsed === null);

console.log("\n[Summary] Day 03 challenge checks completed!\n");
