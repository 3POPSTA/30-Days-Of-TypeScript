/**
 * ============================================================================
 * DAY 18: ENUMS & OBJECT LITERALS AS CONST
 * ============================================================================
 * Compare TypeScript Enums with modern 'as const' object dictionaries, evaluating runtime output, safety, and idiomatic practices.
 * Run with: npm run day:18  OR  npx tsx 18_Day_Enums/lesson.ts
 */

console.log("\n=======================================================");
console.log("  DAY 18: ENUMS & OBJECT LITERALS AS CONST");
console.log("=======================================================\n");

// Day 18: Enums & Object Literals as const
// 1. String Enum
enum HttpVerb {
  Get = "GET",
  Post = "POST"
}

// 2. Modern as const dictionary
const LogLevels = {
  INFO: "info",
  WARN: "warn",
  ERROR: "error"
} as const;

type LogLevel = typeof LogLevels[keyof typeof LogLevels];

console.log("Enum verb:", HttpVerb.Get);
console.log("Const object level:", LogLevels.ERROR);


console.log("\n[Summary] Day 18 lesson finished successfully!\n");
