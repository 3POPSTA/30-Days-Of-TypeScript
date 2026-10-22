/**
 * ============================================================================
 * DAY 08: UNION TYPES & LITERAL TYPES
 * ============================================================================
 * Express values that can be one of several types using unions (|), enforce exact values with literal types, and understand literal widening.
 * Run with: npm run day:08  OR  npx tsx 08_Day_Unions_and_literals/lesson.ts
 */

console.log("\n=======================================================");
console.log("  DAY 08: UNION TYPES & LITERAL TYPES");
console.log("=======================================================\n");

// Day 08: Union Types & Literal Types
type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";
type Status = "idle" | "loading" | "success" | "error";

function handleRequest(method: HttpMethod, url: string): string {
  return `[${method}] dispatched to ${url}`;
}

console.log(handleRequest("GET", "/api/users"));


console.log("\n[Summary] Day 08 lesson finished successfully!\n");
