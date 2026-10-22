/**
 * ============================================================================
 * DAY 19: GENERICS: FUNCTIONS, INTERFACES & TYPES
 * ============================================================================
 * Unlock TypeScript's superpower: Generics. Write flexible, reusable code while retaining full static type safety.
 * Run with: npm run day:19  OR  npx tsx 19_Day_Generics_basics/lesson.ts
 */

console.log("\n=======================================================");
console.log("  DAY 19: GENERICS: FUNCTIONS, INTERFACES & TYPES");
console.log("=======================================================\n");

// Day 19: Generics: Functions, Interfaces & Types
function identity<T>(value: T): T {
  return value;
}

const str = identity("TypeScript"); // Inferred as string
const num = identity(42);           // Inferred as number

interface Box<T> {
  content: T;
}
const numBox: Box<number> = { content: 100 };
console.log("Box:", numBox);


console.log("\n[Summary] Day 19 lesson finished successfully!\n");
