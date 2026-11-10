// Day 1: Introduction to TypeScript
// Run: npx tsx 01_Day_Introduction/helloworld.ts

// 1. Classic greeting with explicit type annotations
const courseTitle: string = "30 Days of Modern TypeScript";
const tsEdition: string = "TypeScript 5.x+ (Strict Mode)";

console.log("============================================");
console.log(`🚀 Welcome to ${courseTitle}!`);
console.log("============================================");

// 2. Printing environment details
console.log("Day 01: Introduction, Compilation Model & Setup");
console.log(`Standard: ${tsEdition}`);

// 3. Compile-time type safety preventing JavaScript coercion bugs
function addStrict(a: number, b: number): number {
    return a + b;
}

console.log(`Verified sum addStrict(15, 27) = ${addStrict(15, 27)}`);
console.log("Tip: Enable '\"strict\": true' in tsconfig.json from Day 1!");

export {};
