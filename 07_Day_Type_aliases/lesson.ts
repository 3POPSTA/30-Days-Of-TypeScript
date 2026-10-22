/**
 * ============================================================================
 * DAY 07: TYPE ALIASES & INTERSECTION TYPES
 * ============================================================================
 * Define reusable type definitions with the type keyword and combine multiple types using intersection (&).
 * Run with: npm run day:07  OR  npx tsx 07_Day_Type_aliases/lesson.ts
 */

console.log("\n=======================================================");
console.log("  DAY 07: TYPE ALIASES & INTERSECTION TYPES");
console.log("=======================================================\n");

// Day 07: Type Aliases & Intersection Types
type Timestamp = number;
type Coordinates = { lat: number; lng: number };

type Identifiable = { id: string };
type AuditInfo = { createdAt: Timestamp; updatedAt: Timestamp };

// Combining with Intersection (&)
type DatabaseEntity = Identifiable & AuditInfo & { title: string };

const doc: DatabaseEntity = {
  id: "doc_01",
  createdAt: Date.now(),
  updatedAt: Date.now(),
  title: "Mastering TypeScript"
};
console.log("Document:", doc);


console.log("\n[Summary] Day 07 lesson finished successfully!\n");
