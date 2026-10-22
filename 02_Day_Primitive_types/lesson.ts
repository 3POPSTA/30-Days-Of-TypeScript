/**
 * ============================================================================
 * DAY 02: PRIMITIVE DATA TYPES & TYPE ANNOTATIONS
 * ============================================================================
 * Learn JavaScript's 7 primitive types in TypeScript: string, number (decimals, hex, binary, octal), boolean, bigint, symbol, null, and undefined, along with explicit annotations vs type inference.
 * Run with: npm run day:02  OR  npx tsx 02_Day_Primitive_types/lesson.ts
 */

console.log("\n=======================================================");
console.log("  DAY 02: PRIMITIVE DATA TYPES & TYPE ANNOTATIONS");
console.log("=======================================================\n");

// Day 02: Primitive Data Types & Type Annotations
// 1. Numbers in various bases
const decimal: number = 42;
const hex: number = 0x2a;
const binary: number = 0b101010;
const octal: number = 0o52;
console.log("Decimal:", decimal, "Hex:", hex, "Binary:", binary, "Octal:", octal);

// 2. Strings & Template Literals
const author: string = "Anders Hejlsberg";
const quote: string = `"TypeScript makes JavaScript scalable." - ${author}`;
console.log(quote);

// 3. BigInt and Symbol
const bigVal: bigint = 9007199254740991n + 2n;
const symKey: symbol = Symbol("uniqueKey");
console.log("BigInt:", bigVal, "Symbol:", symKey.toString());

// 4. Null and Undefined
const emptyVal: null = null;
const notAssigned: undefined = undefined;
console.log("Null:", emptyVal, "Undefined:", notAssigned);


console.log("\n[Summary] Day 02 lesson finished successfully!\n");
