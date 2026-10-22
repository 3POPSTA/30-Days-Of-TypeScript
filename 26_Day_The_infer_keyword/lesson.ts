/**
 * ============================================================================
 * DAY 26: THE INFER KEYWORD & TYPE EXTRACTION
 * ============================================================================
 * Extract inner types using pattern matching and the 'infer' keyword inside conditional types.
 * Run with: npm run day:26  OR  npx tsx 26_Day_The_infer_keyword/lesson.ts
 */

console.log("\n=======================================================");
console.log("  DAY 26: THE INFER KEYWORD & TYPE EXTRACTION");
console.log("=======================================================\n");

// Day 26: The infer Keyword & Type Extraction
type ReturnOf<T> = T extends (...args: any[]) => infer R ? R : never;

function computeArea(radius: number): number {
  return Math.PI * radius * radius;
}
type AreaType = ReturnOf<typeof computeArea>; // number

type UnpackPromise<T> = T extends Promise<infer U> ? U : T;
type Resolved = UnpackPromise<Promise<string>>; // string
console.log("infer patterns compiled successfully");


console.log("\n[Summary] Day 26 lesson finished successfully!\n");
