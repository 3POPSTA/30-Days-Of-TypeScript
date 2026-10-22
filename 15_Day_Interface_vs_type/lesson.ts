/**
 * ============================================================================
 * DAY 15: INTERFACE VS TYPE & DECLARATION MERGING
 * ============================================================================
 * Understand the key architectural differences between interface and type alias, and leverage declaration merging.
 * Run with: npm run day:15  OR  npx tsx 15_Day_Interface_vs_type/lesson.ts
 */

console.log("\n=======================================================");
console.log("  DAY 15: INTERFACE VS TYPE & DECLARATION MERGING");
console.log("=======================================================\n");

// Day 15: Interface vs Type & Declaration Merging
// Declaration merging on interface
interface AppSettings {
  appName: string;
}
interface AppSettings {
  version: string; // Merged into AppSettings
}

const config: AppSettings = {
  appName: "Typescript Tutor",
  version: "1.0.0"
};
console.log("Merged Config:", config);


console.log("\n[Summary] Day 15 lesson finished successfully!\n");
