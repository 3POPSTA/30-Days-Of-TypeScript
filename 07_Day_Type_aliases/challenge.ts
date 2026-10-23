/**
 * 🎯 Day 07: Type Aliases & Intersection Types - Coding Challenges
 *
 * Master type aliases, entity composition with '&', and branded nominal types.
 *
 * 🚀 Run with: npm run challenge:07
 */

// ============================================================================
// 🎯 CHALLENGE 1: Domain-Specific Primitive Aliases
// ============================================================================
/**
 * 1. Define type aliases:
 *    - UserId = string
 *    - Timestamp = number
 *
 * 2. Write 'createAuditLog(userId: UserId, action: string, timestamp: Timestamp): string':
 *    Returns: "[${timestamp}] User '${userId}' performed '${action}'"
 */
// 👇 YOUR CODE HERE:
export type UserId = string;
export type Timestamp = number;

export function createAuditLog(userId: UserId, action: string, timestamp: Timestamp): string {
  // TODO: Return the audit log message
  return "";
}

// ============================================================================
// 🎯 CHALLENGE 2: Composing Entities with Intersection Types (&)
// ============================================================================
/**
 * 1. Define building block types:
 *    - Identifiable = { id: string }
 *    - Timestamped = { createdAt: number; updatedAt: number }
 *    - DocumentData = { title: string; content: string }
 *    - Document = Identifiable & Timestamped & DocumentData
 *
 * 2. Write 'createDocument(id, title, content, now)': Document
 */
// 👇 YOUR CODE HERE:
export type Identifiable = { id: string };
export type Timestamped = { createdAt: number; updatedAt: number };
export type DocumentData = { title: string; content: string };
export type Document = Identifiable & Timestamped & DocumentData;

export function createDocument(id: string, title: string, content: string, now: number): Document {
  // TODO: Return the composed Document object
  return { id, title, content, createdAt: now, updatedAt: now };
}

// ============================================================================
// 🎯 CHALLENGE 3: Generic Object Merger with Intersections
// ============================================================================
/**
 * Write a generic function 'mergeEntities' that accepts two objects:
 *   - a (T extends object)
 *   - b (U extends object)
 *
 * Return their combined intersection: T & U.
 *
 * 💡 Hint: Use object spread { ...a, ...b }
 */
// 👇 YOUR CODE HERE:
export function mergeEntities<T extends object, U extends object>(a: T, b: U): T & U {
  // TODO: Merge objects a and b
  return { ...a, ...b };
}

// ============================================================================
// 🎯 CHALLENGE 4: Branded / Nominal Types
// ============================================================================
/**
 * TypeScript uses structural typing. Branded types add a phantom symbol property
 * so numbers with different units cannot be accidentally swapped!
 *
 * 1. Given 'USD' branded type:
 * 2. Write 'toUSD(amount: number): USD' using type assertion ('as USD')
 * 3. Write 'addUSD(a: USD, b: USD): USD' that adds two USD amounts safely
 */
declare const usdBrand: unique symbol;
export type USD = number & { readonly [usdBrand]: true };

// 👇 YOUR CODE HERE:
export function toUSD(amount: number): USD {
  // TODO: Assert and return amount as USD
  return amount as USD;
}

export function addUSD(a: USD, b: USD): USD {
  // TODO: Add two USD amounts safely
  return ((a as number) + (b as number)) as USD;
}

// ============================================================================
// 🧪 TEST RUNNER - Run: npm run challenge:07
// ============================================================================
console.log("--- 🧪 Day 07 Challenge Results ---");
console.log("Challenge 1:", createAuditLog("usr_99", "UPDATE_PASSWORD", 1700000000));
console.log("Challenge 2:", createDocument("doc_1", "Design Spec", "All about TS", Date.now()));
console.log("Challenge 3:", mergeEntities({ name: "Alice" }, { role: "ADMIN" }));

const price1 = toUSD(50);
const price2 = toUSD(25);
console.log("Challenge 4:", addUSD(price1, price2));
console.log("-----------------------------------\n");
