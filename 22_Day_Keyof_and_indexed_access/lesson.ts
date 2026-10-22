/**
 * ============================================================================
 * DAY 22: KEYOF, INDEXED ACCESS & TYPEOF QUERIES
 * ============================================================================
 * Extract union keys with keyof, drill into nested types with indexed access (T[K]), and query runtime variables with typeof.
 * Run with: npm run day:22  OR  npx tsx 22_Day_Keyof_and_indexed_access/lesson.ts
 */

console.log("\n=======================================================");
console.log("  DAY 22: KEYOF, INDEXED ACCESS & TYPEOF QUERIES");
console.log("=======================================================\n");

// Day 22: Keyof, Indexed Access & typeof Queries
interface UserProfile {
  id: number;
  username: string;
  preferences: {
    theme: "light" | "dark";
    notifications: boolean;
  };
}

type UserKeys = keyof UserProfile; // "id" | "username" | "preferences"
type ThemeType = UserProfile["preferences"]["theme"]; // "light" | "dark"

const defaultTheme: ThemeType = "dark";
console.log("Theme:", defaultTheme);


console.log("\n[Summary] Day 22 lesson finished successfully!\n");
