/**
 * ============================================================================
 * DAY 24: TEMPLATE LITERAL TYPES & EVENT STRINGS
 * ============================================================================
 * Manipulate and compose string literal types with template literals, intrinsic uppercase/lowercase helpers, and type-safe event buses.
 * Run with: npm run day:24  OR  npx tsx 24_Day_Template_literal_types/lesson.ts
 */

console.log("\n=======================================================");
console.log("  DAY 24: TEMPLATE LITERAL TYPES & EVENT STRINGS");
console.log("=======================================================\n");

// Day 24: Template Literal Types & Event Strings
type Entity = "user" | "order";
type Action = "create" | "update" | "delete";

type EventName = `${Entity}:${Action}`;
// "user:create" | "user:update" | "user:delete" | "order:create" ...

const event: EventName = "user:create";
console.log("Triggered event:", event);


console.log("\n[Summary] Day 24 lesson finished successfully!\n");
