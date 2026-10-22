/**
 * ============================================================================
 * DAY 20: GENERICS CONSTRAINTS & KEYOF - CODING CHALLENGES
 * ============================================================================
 * Generic constraints 'extends' ensure type parameters satisfy minimum shapes:
 * - 'T extends { length: number }'
 * - 'K extends keyof T' (type-safe property access)
 * - Safe collection pluckers and mergers
 *
 * Test with:
 *   npx tsx 20_Day_Generics_constraints/challenge.ts
 *   OR
 *   npm run challenge:20
 * ============================================================================
 */

console.log("\n=======================================================");
console.log("  DAY 20: CHALLENGE VERIFICATION RUNNER");
console.log("=======================================================\n");

function testCheck(step: string, passed: boolean, details?: string): void {
  if (passed) {
    console.log(`  [PASS] ${step}${details ? ` -> ${details}` : ""}`);
  } else {
    console.log(`  [WAIT] ${step} (Needs attention)${details ? ` -> ${details}` : ""}`);
  }
}

// ============================================================================
// STEP 1: Constraint with Length Property
// ============================================================================
/**
 * CHALLENGE 1:
 * Write a function 'measureLength<T extends { length: number }>(item: T): number'
 * that returns the length property of the item.
 * 
 * Works for strings, arrays, or custom objects with length.
 */
// >>> YOUR CODE HERE <<<
export function measureLength<T extends { length: number }>(item: T): number {
  // TODO: Replace with your implementation
  return item.length;
}


// ============================================================================
// STEP 2: Safe Property Picker with 'keyof'
// ============================================================================
/**
 * CHALLENGE 2:
 * Write a function 'pickProperty<T, K extends keyof T>(obj: T, key: K): T[K]'
 * that returns obj[key] with exact compile-time type safety.
 */
// >>> YOUR CODE HERE <<<
export function pickProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  // TODO: Replace with your implementation
  return obj[key];
}


// ============================================================================
// STEP 3: Array Plucker
// ============================================================================
/**
 * CHALLENGE 3:
 * Write a function 'pluck<T, K extends keyof T>(items: T[], key: K): T[K][]'
 * that extracts the values of 'key' from every item in 'items'.
 * 
 * Example:
 *   pluck([{ id: 1, name: "A" }, { id: 2, name: "B" }], "name") => ["A", "B"]
 */
// >>> YOUR CODE HERE <<<
export function pluck<T, K extends keyof T>(items: T[], key: K): T[K][] {
  // TODO: Replace with your implementation
  return items.map(item => item[key]);
}


// ============================================================================
// STEP 4: Entity Repository Lookup by ID
// ============================================================================
/**
 * CHALLENGE 4:
 * Write a function 'findEntity<T extends { id: string | number }>(entities: T[], targetId: T["id"]): T | undefined'
 * that searches 'entities' and returns the first element whose id === targetId.
 */
// >>> YOUR CODE HERE <<<
export function findEntity<T extends { id: string | number }>(entities: T[], targetId: T["id"]): T | undefined {
  // TODO: Replace with your implementation
  return entities.find(e => e.id === targetId);
}


// ============================================================================
// VERIFICATION TEST SUITE
// ============================================================================
console.log("Verifying Step 1 (measureLength)...");
testCheck("Step 1.1 - string length", measureLength("TypeScript") === 10);
testCheck("Step 1.2 - array length", measureLength([1, 2, 3, 4, 5]) === 5);
testCheck("Step 1.3 - custom object", measureLength({ length: 42 }) === 42);

console.log("\nVerifying Step 2 (pickProperty)...");
const book = { title: "Refactoring", pages: 448, published: 1999 };
testCheck("Step 2 - pickProperty", pickProperty(book, "title") === "Refactoring");

console.log("\nVerifying Step 3 (pluck)...");
const users = [
  { id: 1, username: "ada", active: true },
  { id: 2, username: "grace", active: false }
];
const usernames = pluck(users, "username");
testCheck("Step 3 - pluck", usernames.join(",") === "ada,grace");

console.log("\nVerifying Step 4 (findEntity)...");
const found = findEntity(users, 2);
testCheck("Step 4 - findEntity", found?.username === "grace");

console.log("\n[Summary] Day 20 challenge checks completed!\n");
