/**
 * ============================================================================
 * DAY 13: FUNCTION OVERLOADING & SIGNATURES
 * ============================================================================
 * Implement functions that return different types depending on their input arguments using overload signatures.
 * Run with: npm run day:13  OR  npx tsx 13_Day_Function_overloading/lesson.ts
 */

console.log("\n=======================================================");
console.log("  DAY 13: FUNCTION OVERLOADING & SIGNATURES");
console.log("=======================================================\n");

// Day 13: Function Overloading & Signatures
function parseValue(val: string): number;
function parseValue(val: number): string;
function parseValue(val: string | number): string | number {
  if (typeof val === "string") return parseFloat(val);
  return val.toString();
}

const num = parseValue("42.5"); // Inferred strictly as number
const str = parseValue(100);    // Inferred strictly as string
console.log("Parsed:", num, typeof num, str, typeof str);


console.log("\n[Summary] Day 13 lesson finished successfully!\n");
