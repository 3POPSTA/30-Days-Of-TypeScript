/**
 * 🎯 Day 13: Function Overloading & Signatures - Coding Challenges
 *
 * Define multiple call signatures for a single function implementation.
 *
 * 🚀 Run with: npm run challenge:13
 */

// ============================================================================
// 🎯 CHALLENGE 1: Overloaded Date Parser
// ============================================================================
/**
 * Create an overloaded function 'parseTimestamp':
 * 1. (ts: number): Date
 * 2. (isoString: string): Date
 * 3. (year: number, month: number, day: number): Date
 */
// 👇 YOUR CODE HERE:
export function parseTimestamp(ts: number): Date;
export function parseTimestamp(isoString: string): Date;
export function parseTimestamp(year: number, month: number, day: number): Date;
export function parseTimestamp(arg1: number | string, arg2?: number, arg3?: number): Date {
  // TODO: Branch on arg types and return a Date object
  if (typeof arg1 === "string") return new Date(arg1);
  if (typeof arg2 === "number" && typeof arg3 === "number") return new Date(arg1, arg2 - 1, arg3);
  return new Date(arg1);
}

// ============================================================================
// 🎯 CHALLENGE 2: Overloaded Query Selector / Finder
// ============================================================================
/**
 * Create an overloaded function 'findUser':
 * 1. (id: string): { id: string; name: string } | undefined
 * 2. (ids: string[]): { id: string; name: string }[]
 */
const mockStore = [
  { id: "u1", name: "Alice" },
  { id: "u2", name: "Bob" },
  { id: "u3", name: "Carol" }
];

// 👇 YOUR CODE HERE:
export function findUser(id: string): { id: string; name: string } | undefined;
export function findUser(ids: string[]): { id: string; name: string }[];
export function findUser(arg: string | string[]): ({ id: string; name: string } | undefined) | { id: string; name: string }[] {
  // TODO: Return single user or array of users
  if (Array.isArray(arg)) {
    return mockStore.filter(u => arg.includes(u.id));
  }
  return mockStore.find(u => u.id === arg);
}

// ============================================================================
// 🎯 CHALLENGE 3: Overloaded Sequence Duplicator
// ============================================================================
/**
 * Create an overloaded function 'duplicateSequence':
 * 1. (val: string, times: number): string
 * 2. (val: number[], times: number): number[]
 */
// 👇 YOUR CODE HERE:
export function duplicateSequence(val: string, times: number): string;
export function duplicateSequence(val: number[], times: number): number[];
export function duplicateSequence(val: string | number[], times: number): string | number[] {
  // TODO: Duplicate string or array
  if (typeof val === "string") return val.repeat(times);
  const res: number[] = [];
  for (let i = 0; i < times; i++) res.push(...val);
  return res;
}

// ============================================================================
// 🎯 CHALLENGE 4: Overloaded Type Formatter
// ============================================================================
/**
 * Create an overloaded function 'formatData':
 * 1. (data: number, format: "currency"): string
 * 2. (data: number, format: "percent"): string
 * 3. (data: boolean): string
 */
// 👇 YOUR CODE HERE:
export function formatData(data: number, format: "currency"): string;
export function formatData(data: number, format: "percent"): string;
export function formatData(data: boolean): string;
export function formatData(data: number | boolean, format?: "currency" | "percent"): string {
  // TODO: Format currency, percent, or boolean
  if (typeof data === "boolean") return data ? "YES" : "NO";
  if (format === "currency") return `$${data.toFixed(2)}`;
  return `${(data * 100).toFixed(0)}%`;
}

// ============================================================================
// 🧪 TEST RUNNER - Run: npm run challenge:13
// ============================================================================
console.log("--- 🧪 Day 13 Challenge Results ---");
console.log("Challenge 1:", parseTimestamp(2025, 1, 1).toISOString().slice(0, 10));
console.log("Challenge 2:", findUser("u1"), "|", findUser(["u1", "u3"]));
console.log("Challenge 3:", duplicateSequence("abc", 2), "|", duplicateSequence([1, 2], 2));
console.log("Challenge 4:", formatData(49.9, "currency"), "|", formatData(0.75, "percent"), "|", formatData(true));
console.log("-----------------------------------\n");
