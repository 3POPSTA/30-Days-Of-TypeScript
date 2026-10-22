/**
 * ============================================================================
 * DAY 25: CONDITIONAL TYPES & DISTRIBUTIVE CONDITIONALS
 * ============================================================================
 * Write conditional type branching using 'T extends U ? X : Y' and understand distributive conditional types over unions.
 * Run with: npm run day:25  OR  npx tsx 25_Day_Conditional_types/lesson.ts
 */

console.log("\n=======================================================");
console.log("  DAY 25: CONDITIONAL TYPES & DISTRIBUTIVE CONDITIONALS");
console.log("=======================================================\n");

// Day 25: Conditional Types & Distributive Conditionals
type IsString<T> = T extends string ? true : false;

type A = IsString<string>; // true
type B = IsString<number>; // false

// Distributive union filtering
type NonNull<T> = T extends null | undefined ? never : T;
type Clean = NonNull<string | null | number>; // string | number
console.log("Conditional types compiled successfully");


console.log("\n[Summary] Day 25 lesson finished successfully!\n");
