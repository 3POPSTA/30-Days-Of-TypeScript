/**
 * ============================================================================
 * DAY 09: TYPE NARROWING & CONTROL FLOW ANALYSIS
 * ============================================================================
 * Discover how TypeScript's Control Flow Analysis (CFA) tracks conditionals (typeof, instanceof, in, truthiness) to narrow broader types into specific types.
 * Run with: npm run day:09  OR  npx tsx 09_Day_Type_narrowing/lesson.ts
 */

console.log("\n=======================================================");
console.log("  DAY 09: TYPE NARROWING & CONTROL FLOW ANALYSIS");
console.log("=======================================================\n");

// Day 09: Type Narrowing & Control Flow Analysis
function formatInput(val: string | number | Date): string {
  if (typeof val === "string") {
    return val.trim();
  }
  if (typeof val === "number") {
    return val.toFixed(2);
  }
  if (val instanceof Date) {
    return val.toISOString();
  }
  return "Unknown";
}

console.log(formatInput(123.456));
console.log(formatInput("   TypeScript   "));


console.log("\n[Summary] Day 09 lesson finished successfully!\n");
