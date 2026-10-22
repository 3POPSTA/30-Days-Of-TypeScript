/**
 * ============================================================================
 * DAY 27: UTILITY TYPES MASTERCLASS (PART 1)
 * ============================================================================
 * Master built-in object utility types: Partial, Required, Readonly, Record, Pick, and Omit.
 * Run with: npm run day:27  OR  npx tsx 27_Day_Utility_types_part_1/lesson.ts
 */

console.log("\n=======================================================");
console.log("  DAY 27: UTILITY TYPES MASTERCLASS (PART 1)");
console.log("=======================================================\n");

// Day 27: Utility Types Masterclass (Part 1)
interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}

// Partial update DTO
type UpdateUserDto = Partial<User>;
// Public user profile (strip role)
type PublicProfile = Omit<User, "role">;
// User map
type UserMap = Record<number, User>;

console.log("Utility types (part 1) compiled successfully");


console.log("\n[Summary] Day 27 lesson finished successfully!\n");
