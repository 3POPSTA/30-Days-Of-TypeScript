/**
 * ============================================================================
 * DAY 12: FUNCTIONS, PARAMETERS, REST & OPTIONAL
 * ============================================================================
 * Write robust functions with typed parameters, optional arguments, default values, rest parameters, and typed callback handlers.
 * Run with: npm run day:12  OR  npx tsx 12_Day_Functions/lesson.ts
 */

console.log("\n=======================================================");
console.log("  DAY 12: FUNCTIONS, PARAMETERS, REST & OPTIONAL");
console.log("=======================================================\n");

// Day 12: Functions, Parameters, Rest & Optional
function createGreeting(name: string, title: string = "Developer", salutation?: string): string {
  const prefix = salutation ? `${salutation} ` : "";
  return `${prefix}${title} ${name}`;
}

console.log(createGreeting("Ada", "Architect", "Welcome"));

// Variadic rest parameter
function sumAll(...numbers: number[]): number {
  return numbers.reduce((a, b) => a + b, 0);
}
console.log("Sum all:", sumAll(1, 2, 3, 4, 5));


console.log("\n[Summary] Day 12 lesson finished successfully!\n");
