/**
 * ============================================================================
 * DAY 28: UTILITY TYPES MASTERCLASS (PART 2)
 * ============================================================================
 * Master built-in union and function utility types: Exclude, Extract, NonNullable, ReturnType, Parameters, and InstanceType.
 * Run with: npm run day:28  OR  npx tsx 28_Day_Utility_types_part_2/lesson.ts
 */

console.log("\n=======================================================");
console.log("  DAY 28: UTILITY TYPES MASTERCLASS (PART 2)");
console.log("=======================================================\n");

// Day 28: Utility Types Masterclass (Part 2)
type Status = "idle" | "loading" | "success" | "error";
type ActiveStatus = Exclude<Status, "idle">; // "loading" | "success" | "error"
type FinalStatus = Extract<Status, "success" | "error">; // "success" | "error"

type RawString = string | null | undefined;
type CleanString = NonNullable<RawString>; // string

console.log("Utility types (part 2) compiled successfully");


console.log("\n[Summary] Day 28 lesson finished successfully!\n");
