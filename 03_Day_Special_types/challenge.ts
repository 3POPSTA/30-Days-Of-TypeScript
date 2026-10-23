/**
 * 🎯 Day 03: Special Types (any, unknown, never, void) - Coding Challenges
 *
 * Learn the guardrails of the type system:
 * - 'any': opt-out of type checking
 * - 'unknown': type-safe any; requires narrowing before use
 * - 'void': functions that return nothing
 * - 'never': values that can never occur (unreachable / exhaustive branches)
 *
 * 🚀 Run with: npm run challenge:03
 */

// ============================================================================
// 🎯 CHALLENGE 1: Safe Property Extraction from 'unknown'
// ============================================================================
/**
 * 'unknown' is the type-safe counterpart of 'any'. You cannot access properties
 * on 'unknown' without narrowing first.
 *
 * Write a function 'safeExtractLength' that accepts an argument of type 'unknown':
 *   - If the value is a string, return its length.
 *   - If the value is an array, return its length.
 *   - Otherwise, return -1.
 *
 * 💡 Hint: Use 'typeof val === "string"' and 'Array.isArray(val)'
 */
// 👇 YOUR CODE HERE:
export function safeExtractLength(val: unknown): number {
  // TODO: Check if val is string or array, return length or -1
  return -1;
}

// ============================================================================
// 🎯 CHALLENGE 2: Pure Side-Effects with 'void'
// ============================================================================
/**
 * 'void' signifies the absence of a return value.
 *
 * Write a function 'appendLogEntry' that accepts:
 *   - logArray (string[]): array of log strings
 *   - message (string): log message to append
 *
 * The function must push `[${new Date().toISOString().slice(0, 10)}] ${message}`
 * to 'logArray' and return 'void'.
 */
// 👇 YOUR CODE HERE:
export function appendLogEntry(logArray: string[], message: string): void {
  // TODO: Push the formatted timestamp message to logArray
}

// ============================================================================
// 🎯 CHALLENGE 3: Exhaustive Switch Checking with 'never'
// ============================================================================
/**
 * 'never' represents states that must never occur. In a switch statement,
 * assigning an unhandled case to 'never' guarantees exhaustive checks at compile-time.
 *
 * 1. Implement 'assertNever(x: never): never' which throws an Error.
 * 2. Implement 'getLightInstruction(light: TrafficLight): string':
 *    - "red"    => "Stop immediately"
 *    - "yellow" => "Prepare to stop"
 *    - "green"  => "Proceed safely"
 *    - default  => call assertNever(light)
 */
export type TrafficLight = "red" | "yellow" | "green";

// 👇 YOUR CODE HERE:
export function assertNever(x: never): never {
  // TODO: Throw an error with unexpected value
  throw new Error("Not implemented");
}

export function getLightInstruction(light: TrafficLight): string {
  // TODO: Switch exhaustively over light
  return "";
}

// ============================================================================
// 🎯 CHALLENGE 4: Safe JSON Deserializer Guard
// ============================================================================
/**
 * JSON.parse() returns 'any'. Write a safe wrapper 'safeJsonParse':
 *   - Parameter: raw (string)
 *   - Returns: unknown on success, or null on error
 *
 * Wrap the JSON.parse call in a try/catch block.
 */
// 👇 YOUR CODE HERE:
export function safeJsonParse(raw: string): unknown {
  // TODO: try JSON.parse(raw), return parsed or null
  return null;
}

// ============================================================================
// 🧪 TEST RUNNER - Run: npm run challenge:03
// ============================================================================
console.log("--- 🧪 Day 03 Challenge Results ---");
console.log("Challenge 1 (string):", safeExtractLength("TypeScript"));
console.log("Challenge 1 (array):", safeExtractLength([1, 2, 3, 4]));
console.log("Challenge 1 (other):", safeExtractLength(12345));

const logs: string[] = [];
appendLogEntry(logs, "User signed in");
console.log("Challenge 2:", logs[0]);

console.log("Challenge 3:", getLightInstruction("red"), "|", getLightInstruction("green"));
console.log("Challenge 4 (valid):", safeJsonParse('{"id": 1}'));
console.log("Challenge 4 (invalid):", safeJsonParse("not-json"));
console.log("-----------------------------------\n");
