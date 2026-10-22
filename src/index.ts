/**
 * ============================================================================
 * 30 DAYS OF TYPESCRIPT: ZERO TO HERO INTERACTIVE TUTOR
 * ============================================================================
 * Inspired by the legendary "30 Days of JavaScript" repository by Asabeneh.
 * Run `npm start` for the interactive dashboard or `npm test` for the full test suite.
 */

export interface DayRegistryEntry {
  day: number;
  id: string;
  folder: string;
  title: string;
  runLesson: () => Promise<void>;
}

export const DAYS_REGISTRY: DayRegistryEntry[] = [
  { day: 1, id: "01", folder: "01_Day_Introduction", title: "Introduction & Getting Started", runLesson: () => import("../01_Day_Introduction/lesson.js").then(() => {}) },
  { day: 2, id: "02", folder: "02_Day_Primitive_types", title: "Primitive Data Types & Type Annotations", runLesson: () => import("../02_Day_Primitive_types/lesson.js").then(() => {}) },
  { day: 3, id: "03", folder: "03_Day_Special_types", title: "Special Types: any, unknown, never, void", runLesson: () => import("../03_Day_Special_types/lesson.js").then(() => {}) },
  { day: 4, id: "04", folder: "04_Day_Arrays", title: "Arrays, Readonly Arrays & Matrices", runLesson: () => import("../04_Day_Arrays/lesson.js").then(() => {}) },
  { day: 5, id: "05", folder: "05_Day_Tuples", title: "Tuples, Labeled Tuples & as const", runLesson: () => import("../05_Day_Tuples/lesson.js").then(() => {}) },
  { day: 6, id: "06", folder: "06_Day_Objects", title: "Object Types & Property Modifiers", runLesson: () => import("../06_Day_Objects/lesson.js").then(() => {}) },
  { day: 7, id: "07", folder: "07_Day_Type_aliases", title: "Type Aliases & Intersection Types", runLesson: () => import("../07_Day_Type_aliases/lesson.js").then(() => {}) },
  { day: 8, id: "08", folder: "08_Day_Unions_and_literals", title: "Union Types & Literal Types", runLesson: () => import("../08_Day_Unions_and_literals/lesson.js").then(() => {}) },
  { day: 9, id: "09", folder: "09_Day_Type_narrowing", title: "Type Narrowing & Control Flow Analysis", runLesson: () => import("../09_Day_Type_narrowing/lesson.js").then(() => {}) },
  { day: 10, id: "10", folder: "10_Day_Type_predicates", title: "Type Predicates & Custom Type Guards", runLesson: () => import("../10_Day_Type_predicates/lesson.js").then(() => {}) },
  { day: 11, id: "11", folder: "11_Day_Discriminated_unions", title: "Discriminated Unions & Pattern Matching", runLesson: () => import("../11_Day_Discriminated_unions/lesson.js").then(() => {}) },
  { day: 12, id: "12", folder: "12_Day_Functions", title: "Functions, Parameters, Rest & Optional", runLesson: () => import("../12_Day_Functions/lesson.js").then(() => {}) },
  { day: 13, id: "13", folder: "13_Day_Function_overloading", title: "Function Overloading & Signatures", runLesson: () => import("../13_Day_Function_overloading/lesson.js").then(() => {}) },
  { day: 14, id: "14", folder: "14_Day_Interfaces", title: "Interfaces & Inheritance", runLesson: () => import("../14_Day_Interfaces/lesson.js").then(() => {}) },
  { day: 15, id: "15", folder: "15_Day_Interface_vs_type", title: "Interface vs Type & Declaration Merging", runLesson: () => import("../15_Day_Interface_vs_type/lesson.js").then(() => {}) },
  { day: 16, id: "16", folder: "16_Day_Classes", title: "Classes, Access Modifiers & readonly", runLesson: () => import("../16_Day_Classes/lesson.js").then(() => {}) },
  { day: 17, id: "17", folder: "17_Day_Abstract_classes", title: "Abstract Classes, override & Polymorphism", runLesson: () => import("../17_Day_Abstract_classes/lesson.js").then(() => {}) },
  { day: 18, id: "18", folder: "18_Day_Enums", title: "Enums & Object Literals as const", runLesson: () => import("../18_Day_Enums/lesson.js").then(() => {}) },
  { day: 19, id: "19", folder: "19_Day_Generics_basics", title: "Generics: Functions, Interfaces & Types", runLesson: () => import("../19_Day_Generics_basics/lesson.js").then(() => {}) },
  { day: 20, id: "20", folder: "20_Day_Generics_constraints", title: "Generics Constraints & keyof Operator", runLesson: () => import("../20_Day_Generics_constraints/lesson.js").then(() => {}) },
  { day: 21, id: "21", folder: "21_Day_Generic_classes", title: "Generic Classes & Data Structures", runLesson: () => import("../21_Day_Generic_classes/lesson.js").then(() => {}) },
  { day: 22, id: "22", folder: "22_Day_Keyof_and_indexed_access", title: "Keyof, Indexed Access & typeof Queries", runLesson: () => import("../22_Day_Keyof_and_indexed_access/lesson.js").then(() => {}) },
  { day: 23, id: "23", folder: "23_Day_Mapped_types", title: "Mapped Types & Key Remapping", runLesson: () => import("../23_Day_Mapped_types/lesson.js").then(() => {}) },
  { day: 24, id: "24", folder: "24_Day_Template_literal_types", title: "Template Literal Types & Event Strings", runLesson: () => import("../24_Day_Template_literal_types/lesson.js").then(() => {}) },
  { day: 25, id: "25", folder: "25_Day_Conditional_types", title: "Conditional Types & Distributive Conditionals", runLesson: () => import("../25_Day_Conditional_types/lesson.js").then(() => {}) },
  { day: 26, id: "26", folder: "26_Day_The_infer_keyword", title: "The infer Keyword & Unwrapping Types", runLesson: () => import("../26_Day_The_infer_keyword/lesson.js").then(() => {}) },
  { day: 27, id: "27", folder: "27_Day_Utility_types_part_1", title: "Utility Types Part 1: Partial, Pick, Omit, etc.", runLesson: () => import("../27_Day_Utility_types_part_1/lesson.js").then(() => {}) },
  { day: 28, id: "28", folder: "28_Day_Utility_types_part_2", title: "Utility Types Part 2: Extract, Exclude, ReturnType, etc.", runLesson: () => import("../28_Day_Utility_types_part_2/lesson.js").then(() => {}) },
  { day: 29, id: "29", folder: "29_Day_Async_and_error_handling", title: "Async, Promises, and Robust Error Handling", runLesson: () => import("../29_Day_Async_and_error_handling/lesson.js").then(() => {}) },
  { day: 30, id: "30", folder: "30_Day_Final_capstone_project", title: "Final Capstone: Event-Driven Workflow Engine", runLesson: () => import("../30_Day_Final_capstone_project/lesson.js").then(() => {}) },
];

function printBanner(): void {
  console.log(`
========================================================================
   ____   ___    ____                               __   _____ ____  
  |___ \\ / _ \\  |  _ \\  __ _ _   _ ___    ___  / _| |_   _/ ___| 
    __) | | | | | | | |/ _\` | | | / __|  / _ \\| |_    | | \\___ \\ 
   / __/| |_| | | |_| | (_| | |_| \\__ \\ | (_) |  _|   | |  ___) |
  |_____|\\___/  |____/ \\__,_|\\__, |___/  \\___/|_|     |_| |____/ 
                             |___/                               
             >>> 30 DAYS OF TYPESCRIPT (ZERO TO HERO) <<<
========================================================================
`);
}

function printDashboard(): void {
  printBanner();
  console.log("Welcome to the 30 Days of TypeScript Challenge!");
  console.log("Master TypeScript step-by-step with daily lessons and 10 in-depth examples with solutions per day.\n");

  const weeks = [
    { title: "WEEK 1: FOUNDATIONS & THE CORE TYPE SYSTEM", days: DAYS_REGISTRY.slice(0, 7) },
    { title: "WEEK 2: UNIONS, GUARDS, FUNCTIONS & INTERFACES", days: DAYS_REGISTRY.slice(7, 14) },
    { title: "WEEK 3: OOP, ENUMS, GENERICS & MILESTONE CACHE", days: DAYS_REGISTRY.slice(14, 21) },
    { title: "WEEK 4: ADVANCED TYPE GYMNASTICS & UTILITIES", days: DAYS_REGISTRY.slice(21, 28) },
    { title: "WEEK 5: ASYNC, TOOLING & FINAL CAPSTONE", days: DAYS_REGISTRY.slice(28, 30) },
  ];

  for (const w of weeks) {
    console.log(`--- ${w.title} ---`);
    for (const d of w.days) {
      console.log(`  Day ${d.id} | ${d.title.padEnd(46)} -> npm run day:${d.id}`);
    }
    console.log("");
  }

  console.log("QUICK ACTIONS:");
  console.log("  npm start                 - Show this interactive challenge dashboard");
  console.log("  npm test                  - Verify that all 30 lesson modules execute smoothly");
  console.log("  npm run day:01            - Run lesson for Day 01 (works up to day:30)");
  console.log("  npm run typecheck         - Check type health across all 30 days");
  console.log("  npx tsx <Day_Folder>/lesson.ts - Run an individual day's lesson\n");
}

async function runAllTests(): Promise<void> {
  printBanner();
  console.log("Running Full Automated Verification Suite across all 30 Days...\n");
  let passed = 0;
  let failed = 0;

  for (const d of DAYS_REGISTRY) {
    try {
      await d.runLesson();
      passed++;
      console.log(`  [OK] Day ${d.id} [${d.title}]: PASSED`);
    } catch (err: unknown) {
      failed++;
      console.error(`  [FAIL] Day ${d.id} [${d.title}]: FAILED with error:`, (err as Error).message);
    }
  }

  console.log("\n========================================================================");
  console.log(`CHALLENGE SUMMARY: ${passed}/${DAYS_REGISTRY.length} Days verified successfully!`);
  if (failed === 0) {
    console.log("🏆 CONGRATULATIONS! You have mastered 30 Days of TypeScript from Zero to Hero!");
  } else {
    console.log(`⚠️  ${failed} day(s) need attention.`);
  }
  console.log("========================================================================\n");

  if (failed > 0) process.exit(1);
}

async function main(): Promise<void> {
  const args = process.argv.slice(2);

  if (args.includes("--test") || args.includes("test")) {
    await runAllTests();
    return;
  }

  const requestedDay = args.find((arg) => /^\d{1,2}$/.test(arg));
  if (requestedDay) {
    const formatted = requestedDay.padStart(2, "0");
    const found = DAYS_REGISTRY.find((d) => d.id === formatted);
    if (found) {
      console.log(`\nStarting Day ${found.id}: ${found.title}...\n`);
      await found.runLesson();
      return;
    }
  }

  printDashboard();
}

main().catch((err) => {
  console.error("Fatal error:", err);
  process.exit(1);
});
