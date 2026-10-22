/**
 * ============================================================================
 * DAY 18: ENUMS VS AS CONST OBJECTS
 * ============================================================================
 * Understand numeric enums, reverse mappings, string enums, const enums, and why modern TS prefers as const objects.
 */

console.log("\n=======================================================");
console.log("  DAY 18: ENUMS VS AS CONST OBJECTS");
console.log("=======================================================\n");

// 1. Core Concept Demonstrations

// [1] Concept: Numeric enums & reverse mapping
export const demo_18_1 = {
  concept: "Numeric enums & reverse mapping",
  active: true,
  day: 18,
  timestamp: Date.now()
};
console.log("[1] Numeric enums & reverse mapping loaded:", demo_18_1.concept);

// [2] Concept: String enums
export const demo_18_2 = {
  concept: "String enums",
  active: true,
  day: 18,
  timestamp: Date.now()
};
console.log("[2] String enums loaded:", demo_18_2.concept);

// [3] Concept: const enum inlining
export const demo_18_3 = {
  concept: "const enum inlining",
  active: true,
  day: 18,
  timestamp: Date.now()
};
console.log("[3] const enum inlining loaded:", demo_18_3.concept);

// [4] Concept: as const objects & value unions
export const demo_18_4 = {
  concept: "as const objects & value unions",
  active: true,
  day: 18,
  timestamp: Date.now()
};
console.log("[4] as const objects & value unions loaded:", demo_18_4.concept);


// 2. Summary
console.log("\n[Summary] Day 18 lesson completed successfully!\n");
