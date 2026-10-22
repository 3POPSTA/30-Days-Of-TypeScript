/**
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

console.log("\n=======================================================");
console.log("  DAY 13: CHALLENGE VERIFICATION RUNNER");
console.log("=======================================================\n");

function testCheck(step: string, passed: boolean, details?: string): void {
  if (passed) {
    console.log(`  [PASS] ${step}${details ? ` -> ${details}` : ""}`);
  } else {
    console.log(`  [WAIT] ${step} (Needs attention)${details ? ` -> ${details}` : ""}`);
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
 *   - (data: number, format: "currency"): string  => `$${data.toFixed(2)}`
 *   - (data: number, format: "percent"): string   => `${(data * 100).toFixed(0)}%`
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
    return `$${data.toFixed(2)}`;
  }
  return `${(data * 100).toFixed(0)}%`;
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

console.log("\nVerifying Step 2 (findUser)...");
const single = findUser("1");
const multiple = findUser(["1", "3"]);
testCheck("Step 2.1 - single user", single?.name === "Ada");
testCheck("Step 2.2 - multiple users", multiple.length === 2 && multiple[1].name === "Charlie");

console.log("\nVerifying Step 3 (duplicateSequence)...");
const strDupe = duplicateSequence("TS", 3);
const arrDupe = duplicateSequence([1, 2], 2);
testCheck("Step 3.1 - string duplicate", strDupe === "TSTSTS");
testCheck("Step 3.2 - array duplicate", arrDupe.join(",") === "1,2,1,2");

console.log("\nVerifying Step 4 (formatData)...");
testCheck("Step 4.1 - currency", formatData(49.9, "currency") === "$49.90");
testCheck("Step 4.2 - percent", formatData(0.85, "percent") === "85%");
testCheck("Step 4.3 - boolean", formatData(true) === "YES");

console.log("\n[Summary] Day 13 challenge checks completed!\n");
