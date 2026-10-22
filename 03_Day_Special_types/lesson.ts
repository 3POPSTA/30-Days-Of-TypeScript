/**
 * ============================================================================
 * DAY 03: SPECIAL TYPES: ANY, UNKNOWN, NEVER, VOID
 * ============================================================================
 * Explore TypeScript's special types: why any is the ultimate anti-pattern, why unknown is the type-safe champion, how void handles side effects, and how never guarantees unreachability.
 * Run with: npm run day:03  OR  npx tsx 03_Day_Special_types/lesson.ts
 */

console.log("\n=======================================================");
console.log("  DAY 03: SPECIAL TYPES: ANY, UNKNOWN, NEVER, VOID");
console.log("=======================================================\n");

// Day 03: Special Types: any, unknown, never, void
// 1. any: avoid in production!
const loose: any = "hello";
// loose.nonExistentMethod(); // No compile error, but will crash at runtime!

// 2. unknown: safe and requiring type narrowing
const rawPayload: unknown = JSON.parse('{"id": 1, "name": "TypeScript"}');
if (typeof rawPayload === "object" && rawPayload !== null && "name" in rawPayload) {
  console.log("Safely extracted name:", (rawPayload as { name: string }).name);
}

// 3. void: functions that perform side-effects
function logAlert(message: string): void {
  console.log("[ALERT]:", message);
}
logAlert("System running smoothly");

// 4. never: unreachable code and exhaustiveness
function fail(errorMsg: string): never {
  throw new Error(errorMsg);
}


console.log("\n[Summary] Day 03 lesson finished successfully!\n");
