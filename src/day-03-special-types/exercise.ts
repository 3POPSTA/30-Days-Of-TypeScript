/**
 * EXERCISE DAY 03: SPECIAL TYPES
 */
// Level 1: Safe string length check on unknown
export function getSafeLength(input: unknown): number {
  if (typeof input === "string") return input.length;
  if (Array.isArray(input)) return input.length;
  return -1;
}

// Level 2: Void logger function returning undefined
export function logAction(action: string): void {
  console.log(`Action logged: ${action}`);
}

// Level 3: Unreachable never-thrower
export function assertNever(x: never): never {
  throw new Error(`Unexpected value: ${JSON.stringify(x)}`);
}

export function verifyDay03(): boolean {
  console.log("Verifying Day 03 Exercises...");
  if (getSafeLength("hello") !== 5) throw new Error("L1 string failed");
  if (getSafeLength([1, 2, 3]) !== 3) throw new Error("L1 array failed");
  if (getSafeLength(42) !== -1) throw new Error("L1 other failed");
  logAction("verification");
  console.log(" Day 03: All exercises verified successfully!\n");
  return true;
}

if (import.meta.url.endsWith(process.argv[1] ?? "")) {
  verifyDay03();
}
