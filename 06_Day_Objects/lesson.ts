/**
 * ============================================================================
 * DAY 06: OBJECT TYPES & PROPERTY MODIFIERS
 * ============================================================================
 * Learn structural typing with object shapes, optional properties, readonly fields, excess property checks, and index signatures.
 * Run with: npm run day:06  OR  npx tsx 06_Day_Objects/lesson.ts
 */

console.log("\n=======================================================");
console.log("  DAY 06: OBJECT TYPES & PROPERTY MODIFIERS");
console.log("=======================================================\n");

// Day 06: Object Types & Property Modifiers
interface UserConfig {
  readonly id: string;
  name: string;
  email?: string; // Optional
}

const user: UserConfig = {
  id: "usr_101",
  name: "Alice"
};
// user.id = "usr_102"; // Compile Error: readonly!
user.name = "Alice Smith"; // Allowed

// Index Signatures for dynamic dictionaries
interface StringMap {
  [key: string]: string;
}
const headers: StringMap = {
  "Content-Type": "application/json",
  "Authorization": "Bearer token"
};
console.log("Headers:", headers);


console.log("\n[Summary] Day 06 lesson finished successfully!\n");
