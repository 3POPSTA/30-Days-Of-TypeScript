/**
 * ============================================================================
 * DAY 01: INTRODUCTION & GETTING STARTED
 * ============================================================================
 * Welcome to 30 Days of TypeScript! Today we cover what TypeScript is, compiler architecture, installing tools, static vs dynamic typing, and writing your first strongly-typed code.
 * Run with: npm run day:01  OR  npx tsx 01_Day_Introduction/lesson.ts
 */

console.log("\n=======================================================");
console.log("  DAY 01: INTRODUCTION & GETTING STARTED");
console.log("=======================================================\n");

// Day 01: Introduction & Getting Started
console.log("Welcome to 30 Days of TypeScript!");

// 1. Static Typing vs JavaScript Dynamic Coercion
const language: string = "TypeScript";
const version: number = 5.7;
const isAwesome: boolean = true;

console.log(`Learning ${language} v${version}. Is it awesome? ${isAwesome}`);

// 2. Transpilation & Compiler Protection
function greet(learner: string, day: number): string {
  return `Hello, ${learner}! Welcome to Day ${day.toString().padStart(2, "0")} of 30 Days of TypeScript.`;
}

console.log(greet("Developer", 1));

// 3. Catching Bugs at Compile-Time
// In plain JavaScript, "5" - 3 is 2, but "5" + 3 is "53".
// TypeScript ensures parameters are strictly typed:
function addNumbers(a: number, b: number): number {
  return a + b;
}

console.log("Sum 15 + 27 =", addNumbers(15, 27));


console.log("\n[Summary] Day 01 lesson finished successfully!\n");
