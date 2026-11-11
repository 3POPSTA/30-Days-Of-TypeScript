// Day 2: Primitive Data Types & Type Annotations
// Run: npx tsx 02_Day_Primitive_types/primitive_types.ts

console.log("=== Day 2: Primitive Data Types & Type Annotations ===\n");

// 1. Core primitives with explicit annotations
const fullName: string = "Ada Lovelace";
const hourlyRate: number = 145.5;
const isActive: boolean = true;

console.log(`Name: ${fullName}`);
console.log(`Rate: $${hourlyRate.toFixed(2)}/hr`);
console.log(`Active: ${isActive}\n`);

// 2. Number bases and numeric separators
const decimalVal: number = 255;
const hexVal: number = 0xff;
const binaryVal: number = 0b1111_1111;
const octalVal: number = 0o377;
const annualRequests: number = 12_500_000;

console.log("--- Numeric Representations ---");
console.log(`255 across bases: dec=${decimalVal}, hex=${hexVal}, bin=${binaryVal}, oct=${octalVal}`);
console.log(`Readable separator: ${annualRequests}\n`);

// 3. BigInt beyond Number.MAX_SAFE_INTEGER
const maxSafe = BigInt(Number.MAX_SAFE_INTEGER);
const preciseId: bigint = maxSafe + 42n;
console.log("--- BigInt & Symbol ---");
console.log(`MAX_SAFE_INTEGER: ${maxSafe}`);
console.log(`Precise 64-bit+ ID: ${preciseId}`);

// 4. Unique Symbol primitives
const sessionSymbol: symbol = Symbol("session");
console.log(`Unique symbol: ${sessionSymbol.toString()}\n`);

// 5. Strict null and undefined handling
let cachedHeader: string | null = null;
const missingConfig: undefined = undefined;
console.log(`Initial nullable state: cachedHeader=${cachedHeader}, missingConfig=${missingConfig}`);
cachedHeader = "Bearer eyJhbGciOi...";
console.log(`Populated nullable state: cachedHeader=${cachedHeader}`);

export {};
