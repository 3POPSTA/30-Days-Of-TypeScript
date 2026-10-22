/**
 * ============================================================================
 * 30 DAYS OF TYPESCRIPT: ZERO TO HERO INTERACTIVE TUTOR
 * ============================================================================
 * Inspired by the legendary "30 Days of JavaScript" repository by Asabeneh.
 * Run `npm start` for the interactive dashboard or `npm test` for the full test suite.
 */

// Import verification suites for all 30 days
import { verifyDay01 } from "../01_Day_Introduction/exercise.js";
import { verifyDay02 } from "../02_Day_Primitive_types/exercise.js";
import { verifyDay03 } from "../03_Day_Special_types/exercise.js";
import { verifyDay04 } from "../04_Day_Arrays/exercise.js";
import { verifyDay05 } from "../05_Day_Tuples/exercise.js";
import { verifyDay06 } from "../06_Day_Objects/exercise.js";
import { verifyDay07 } from "../07_Day_Type_aliases/exercise.js";
import { verifyDay08 } from "../08_Day_Unions_and_literals/exercise.js";
import { verifyDay09 } from "../09_Day_Type_narrowing/exercise.js";
import { verifyDay10 } from "../10_Day_Type_predicates/exercise.js";
import { verifyDay11 } from "../11_Day_Discriminated_unions/exercise.js";
import { verifyDay12 } from "../12_Day_Functions/exercise.js";
import { verifyDay13 } from "../13_Day_Function_overloading/exercise.js";
import { verifyDay14 } from "../14_Day_Interfaces/exercise.js";
import { verifyDay15 } from "../15_Day_Interface_vs_type/exercise.js";
import { verifyDay16 } from "../16_Day_Classes/exercise.js";
import { verifyDay17 } from "../17_Day_Abstract_classes/exercise.js";
import { verifyDay18 } from "../18_Day_Enums/exercise.js";
import { verifyDay19 } from "../19_Day_Generics_basics/exercise.js";
import { verifyDay20 } from "../20_Day_Generics_constraints/exercise.js";
import { verifyDay21 } from "../21_Day_Generic_classes/exercise.js";
import { verifyDay22 } from "../22_Day_Keyof_and_indexed_access/exercise.js";
import { verifyDay23 } from "../23_Day_Mapped_types/exercise.js";
import { verifyDay24 } from "../24_Day_Template_literal_types/exercise.js";
import { verifyDay25 } from "../25_Day_Conditional_types/exercise.js";
import { verifyDay26 } from "../26_Day_The_infer_keyword/exercise.js";
import { verifyDay27 } from "../27_Day_Utility_types_part_1/exercise.js";
import { verifyDay28 } from "../28_Day_Utility_types_part_2/exercise.js";
import { verifyDay29 } from "../29_Day_Async_and_error_handling/exercise.js";
import { verifyDay30 } from "../30_Day_Final_capstone_project/exercise.js";

export interface DayRegistryEntry {
  day: number;
  id: string;
  folder: string;
  title: string;
  verify: () => boolean | Promise<boolean>;
}

export const DAYS_REGISTRY: DayRegistryEntry[] = [
  { day: 1, id: "01", folder: "01_Day_Introduction", title: "Introduction & Getting Started", verify: verifyDay01 },
  { day: 2, id: "02", folder: "02_Day_Primitive_types", title: "Primitive Data Types & Type Annotations", verify: verifyDay02 },
  { day: 3, id: "03", folder: "03_Day_Special_types", title: "Special Types: any, unknown, never, void", verify: verifyDay03 },
  { day: 4, id: "04", folder: "04_Day_Arrays", title: "Arrays, Readonly Arrays & Matrices", verify: verifyDay04 },
  { day: 5, id: "05", folder: "05_Day_Tuples", title: "Tuples, Labeled Tuples & as const", verify: verifyDay05 },
  { day: 6, id: "06", folder: "06_Day_Objects", title: "Object Types & Property Modifiers", verify: verifyDay06 },
  { day: 7, id: "07", folder: "07_Day_Type_aliases", title: "Type Aliases & Intersection Types", verify: verifyDay07 },
  { day: 8, id: "08", folder: "08_Day_Unions_and_literals", title: "Union Types & Literal Types", verify: verifyDay08 },
  { day: 9, id: "09", folder: "09_Day_Type_narrowing", title: "Type Narrowing & Control Flow Analysis", verify: verifyDay09 },
  { day: 10, id: "10", folder: "10_Day_Type_predicates", title: "Type Predicates & Custom Type Guards", verify: verifyDay10 },
  { day: 11, id: "11", folder: "11_Day_Discriminated_unions", title: "Discriminated Unions & Pattern Matching", verify: verifyDay11 },
  { day: 12, id: "12", folder: "12_Day_Functions", title: "Functions, Parameters, Rest & Optional", verify: verifyDay12 },
  { day: 13, id: "13", folder: "13_Day_Function_overloading", title: "Function Overloading & Signatures", verify: verifyDay13 },
  { day: 14, id: "14", folder: "14_Day_Interfaces", title: "Interfaces & Inheritance", verify: verifyDay14 },
  { day: 15, id: "15", folder: "15_Day_Interface_vs_type", title: "Interface vs Type & Declaration Merging", verify: verifyDay15 },
  { day: 16, id: "16", folder: "16_Day_Classes", title: "Classes, Access Modifiers & readonly", verify: verifyDay16 },
  { day: 17, id: "17", folder: "17_Day_Abstract_classes", title: "Abstract Classes, override & Polymorphism", verify: verifyDay17 },
  { day: 18, id: "18", folder: "18_Day_Enums", title: "Enums & Object Literals as const", verify: verifyDay18 },
  { day: 19, id: "19", folder: "19_Day_Generics_basics", title: "Generics: Functions, Interfaces & Types", verify: verifyDay19 },
  { day: 20, id: "20", folder: "20_Day_Generics_constraints", title: "Generics Constraints & keyof Operator", verify: verifyDay20 },
  { day: 21, id: "21", folder: "21_Day_Generic_classes", title: "Generic Classes & Data Structures", verify: verifyDay21 },
  { day: 22, id: "22", folder: "22_Day_Keyof_and_indexed_access", title: "Keyof, Indexed Access & typeof Queries", verify: verifyDay22 },
  { day: 23, id: "23", folder: "23_Day_Mapped_types", title: "Mapped Types & Key Remapping", verify: verifyDay23 },
  { day: 24, id: "24", folder: "24_Day_Template_literal_types", title: "Template Literal Types & Event Strings", verify: verifyDay24 },
  { day: 25, id: "25", folder: "25_Day_Conditional_types", title: "Conditional Types & Distributive Conditionals", verify: verifyDay25 },
  { day: 26, id: "26", folder: "26_Day_The_infer_keyword", title: "The infer Keyword & Unwrapping Types", verify: verifyDay26 },
  { day: 27, id: "27", folder: "27_Day_Utility_types_part_1", title: "Utility Types Part 1: Partial, Pick, Omit, etc.", verify: verifyDay27 },
  { day: 28, id: "28", folder: "28_Day_Utility_types_part_2", title: "Utility Types Part 2: Extract, Exclude, ReturnType, etc.", verify: verifyDay28 },
  { day: 29, id: "29", folder: "29_Day_Async_and_error_handling", title: "Async, Promises, and Robust Error Handling", verify: verifyDay29 },
  { day: 30, id: "30", folder: "30_Day_Final_capstone_project", title: "Final Capstone: Event-Driven Workflow Engine", verify: verifyDay30 },
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
  console.log("Master TypeScript step-by-step with daily lessons, multi-tiered exercises, and tests.\n");

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
  console.log("  npm test                  - Run all 30 automated verification test suites");
  console.log("  npm run day:01            - Run lesson for Day 01 (works up to day:30)");
  console.log("  npm run typecheck         - Check type health across all 30 days");
  console.log("  npx tsx <Day_Folder>/exercise.ts - Run and verify an individual day's exercise\n");
}

async function runAllTests(): Promise<void> {
  printBanner();
  console.log("Running Full Automated Verification Suite across all 30 Days...\n");
  let passed = 0;
  let failed = 0;

  for (const d of DAYS_REGISTRY) {
    try {
      const ok = await d.verify();
      if (ok) {
        passed++;
        console.log(`  [OK] Day ${d.id} [${d.title}]: PASSED`);
      } else {
        failed++;
        console.error(`  [FAIL] Day ${d.id} [${d.title}]: FAILED`);
      }
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
      await import(`../${found.folder}/lesson.js`);
      return;
    }
  }

  printDashboard();
}

main().catch((err) => {
  console.error("Fatal error:", err);
  process.exit(1);
});
