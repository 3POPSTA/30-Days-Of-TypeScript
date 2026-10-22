/**
 * ============================================================================
 * DAY 07: TYPE ALIASES & INTERSECTION TYPES — CODING CHALLENGES
 * ============================================================================
 * Type aliases allow creating custom names for types:
 * - Primitive aliases for domain models
 * - Intersection types '&' combine multiple types into one
 * - Branded / nominal types for compile-time ID differentiation
 *
 * Test with:
 *   npx tsx 07_Day_Type_aliases/challenge.ts
 *   OR
 *   npm run challenge:07
 * ============================================================================
 */

console.log("\n=======================================================");
console.log("  DAY 07: CHALLENGE VERIFICATION RUNNER");
console.log("=======================================================\n");

function testCheck(step: string, passed: boolean, details?: string): void {
  if (passed) {
    console.log(`  [PASS] ${step}${details ? ` -> ${details}` : ""}`);
  } else {
    console.log(`  [WAIT] ${step} (Needs attention)${details ? ` -> ${details}` : ""}`);
  }
}

// ============================================================================
// STEP 1: Domain-Specific Primitive Aliases
// ============================================================================
/**
 * CHALLENGE 1:
 * Define type aliases:
 *   - 'UserId': string
 *   - 'Timestamp': number
 * 
 * Write a function 'createAuditLog' that takes (userId: UserId, action: string, timestamp: Timestamp)
 * and returns:
 *   `[${timestamp}] User '${userId}' performed '${action}'`
 */
// >>> YOUR CODE HERE <<<
export type UserId = string;
export type Timestamp = number;

export function createAuditLog(userId: UserId, action: string, timestamp: Timestamp): string {
  // TODO: Replace with your implementation
  return `[${timestamp}] User '${userId}' performed '${action}'`;
}


// ============================================================================
// STEP 2: Composing Entities with Intersection Types (&)
// ============================================================================
/**
 * CHALLENGE 2:
 * Define the following types:
 *   - 'Identifiable': { id: string }
 *   - 'Timestamped': { createdAt: number; updatedAt: number }
 *   - 'DocumentData': { title: string; content: string }
 * 
 * Compose them using intersection '&':
 *   type Document = Identifiable & Timestamped & DocumentData;
 * 
 * Write a function 'createDocument' that takes (id, title, content, now) and returns
 * a complete Document object with createdAt and updatedAt initialized to 'now'.
 */
// >>> YOUR CODE HERE <<<
export type Identifiable = { id: string };
export type Timestamped = { createdAt: number; updatedAt: number };
export type DocumentData = { title: string; content: string };
export type Document = Identifiable & Timestamped & DocumentData;

export function createDocument(id: string, title: string, content: string, now: number): Document {
  // TODO: Replace with your implementation
  return {
    id,
    title,
    content,
    createdAt: now,
    updatedAt: now
  };
}


// ============================================================================
// STEP 3: Generic Object Merger with Intersections
// ============================================================================
/**
 * CHALLENGE 3:
 * Write a generic function 'mergeEntities' that accepts two objects:
 *   - a (T extends object)
 *   - b (U extends object)
 * 
 * Return their combined intersection: T & U.
 * 
 * Hint: Use object spread { ...a, ...b }
 */
// >>> YOUR CODE HERE <<<
export function mergeEntities<T extends object, U extends object>(a: T, b: U): T & U {
  // TODO: Replace with your implementation
  return { ...a, ...b };
}


// ============================================================================
// STEP 4: Branded / Nominal Types
// ============================================================================
/**
 * CHALLENGE 4:
 * By default, TypeScript uses structural typing, so any number can be assigned to another.
 * Branded types add a phantom property to prevent mixing up units (e.g. USD vs EUR).
 * 
 * Define:
 *   type USD = number & { readonly __brand: unique symbol };
 * 
 * Write a helper 'toUSD(amount: number): USD' using type assertion ('as USD').
 * Write 'addUSD(a: USD, b: USD): USD' that safely adds two USD amounts.
 */
declare const usdBrand: unique symbol;
export type USD = number & { readonly [usdBrand]: true };

// >>> YOUR CODE HERE <<<
export function toUSD(amount: number): USD {
  // TODO: Replace with your implementation
  return amount as USD;
}

export function addUSD(a: USD, b: USD): USD {
  // TODO: Replace with your implementation
  return ((a as number) + (b as number)) as USD;
}


// ============================================================================
// VERIFICATION TEST SUITE
// ============================================================================
console.log("Verifying Step 1 (Domain Aliases)...");
const logMsg = createAuditLog("usr_99", "UPDATE_PASSWORD", 1700000000);
testCheck("Step 1 - createAuditLog", logMsg === "[1700000000] User 'usr_99' performed 'UPDATE_PASSWORD'", logMsg);

console.log("\nVerifying Step 2 (Document Intersection)...");
const doc = createDocument("doc_1", "TypeScript Guide", "Hello Types", 1711111111);
testCheck("Step 2 - createDocument", doc.id === "doc_1" && doc.createdAt === 1711111111 && doc.title === "TypeScript Guide");

console.log("\nVerifying Step 3 (mergeEntities)...");
const merged = mergeEntities({ make: "Toyota" }, { year: 2024 });
testCheck("Step 3 - mergeEntities", merged.make === "Toyota" && merged.year === 2024);

console.log("\nVerifying Step 4 (Branded USD)...");
const priceA = toUSD(50);
const priceB = toUSD(25);
const totalUSD = addUSD(priceA, priceB);
testCheck("Step 4 - addUSD", (totalUSD as unknown as number) === 75, `Total: ${totalUSD}`);

console.log("\n[Summary] Day 07 challenge checks completed!\n");
