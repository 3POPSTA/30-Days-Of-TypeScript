/**
 * ============================================================================
 * 30 DAYS OF TYPESCRIPT: ZERO TO HERO INTERACTIVE TUTOR
 * ============================================================================
 * Inspired by the legendary "30 Days of JavaScript" repository.
 * Run `npm start` for the interactive dashboard or `npm test` for the full test suite.
 */

// Import verification suites for all 30 days
import { verifyDay01 } from "./day-01-introduction/exercise.js";
import { verifyDay02 } from "./day-02-primitives/exercise.js";
import { verifyDay03 } from "./day-03-special-types/exercise.js";
import { verifyDay04 } from "./day-04-arrays/exercise.js";
import { verifyDay05 } from "./day-05-tuples/exercise.js";
import { verifyDay06 } from "./day-06-objects/exercise.js";
import { verifyDay07 } from "./day-07-type-aliases/exercise.js";
import { verifyDay08 } from "./day-08-unions-literals/exercise.js";
import { verifyDay09 } from "./day-09-type-narrowing/exercise.js";
import { verifyDay10 } from "./day-10-type-predicates/exercise.js";
import { verifyDay11 } from "./day-11-discriminated-unions/exercise.js";
import { verifyDay12 } from "./day-12-functions-basics/exercise.js";
import { verifyDay13 } from "./day-13-function-overloads/exercise.js";
import { verifyDay14 } from "./day-14-interfaces/exercise.js";
import { verifyDay15 } from "./day-15-interface-vs-type/exercise.js";
import { verifyDay16 } from "./day-16-classes-basics/exercise.js";
import { verifyDay17 } from "./day-17-classes-advanced/exercise.js";
import { verifyDay18 } from "./day-18-enums/exercise.js";
import { verifyDay19 } from "./day-19-generics-basics/exercise.js";
import { verifyDay20 } from "./day-20-generics-constraints/exercise.js";
import { verifyDay21 } from "./day-21-generic-classes/exercise.js";
import { verifyDay22 } from "./day-22-keyof-indexed-access/exercise.js";
import { verifyDay23 } from "./day-23-mapped-types/exercise.js";
import { verifyDay24 } from "./day-24-template-literals/exercise.js";
import { verifyDay25 } from "./day-25-conditional-types/exercise.js";
import { verifyDay26 } from "./day-26-infer-keyword/exercise.js";
import { verifyDay27 } from "./day-27-utility-types-part1/exercise.js";
import { verifyDay28 } from "./day-28-utility-types-part2/exercise.js";
import { verifyDay29 } from "./day-29-async-error-handling/exercise.js";
import { verifyDay30 } from "./day-30-production-tooling/exercise.js";

export const DAYS_REGISTRY = [
  { day: 1, id: "01", slug: "day-01-introduction", title: "Introduction, Environment & First Program", verify: verifyDay01 },
  { day: 2, id: "02", slug: "day-02-primitives", title: "Primitive Types & Type Inference", verify: verifyDay02 },
  { day: 3, id: "03", slug: "day-03-special-types", title: "Special Types: any, unknown, never, void", verify: verifyDay03 },
  { day: 4, id: "04", slug: "day-04-arrays", title: "Arrays, Readonly Arrays & Matrices", verify: verifyDay04 },
  { day: 5, id: "05", slug: "day-05-tuples", title: "Tuples, Labeled Tuples & as const", verify: verifyDay05 },
  { day: 6, id: "06", slug: "day-06-objects", title: "Object Types & Excess Property Checks", verify: verifyDay06 },
  { day: 7, id: "07", slug: "day-07-type-aliases", title: "Type Aliases & Intersection Types", verify: verifyDay07 },
  { day: 8, id: "08", slug: "day-08-unions-literals", title: "Union Types & Literal Types", verify: verifyDay08 },
  { day: 9, id: "09", slug: "day-09-type-narrowing", title: "Type Narrowing & Built-in Guards", verify: verifyDay09 },
  { day: 10, id: "10", slug: "day-10-type-predicates", title: "Custom Type Predicates & Assertion Functions", verify: verifyDay10 },
  { day: 11, id: "11", slug: "day-11-discriminated-unions", title: "Discriminated Unions & Exhaustiveness with never", verify: verifyDay11 },
  { day: 12, id: "12", slug: "day-12-functions-basics", title: "Functions: Parameters, Defaults & Callbacks", verify: verifyDay12 },
  { day: 13, id: "13", slug: "day-13-function-overloads", title: "Function Overloading & Explicit this", verify: verifyDay13 },
  { day: 14, id: "14", slug: "day-14-interfaces", title: "Interfaces, Inheritance & Multiple Extends", verify: verifyDay14 },
  { day: 15, id: "15", slug: "day-15-interface-vs-type", title: "Interface vs Type Alias & Declaration Merging", verify: verifyDay15 },
  { day: 16, id: "16", slug: "day-16-classes-basics", title: "Classes, Access Modifiers & Parameter Properties", verify: verifyDay16 },
  { day: 17, id: "17", slug: "day-17-classes-advanced", title: "Abstract Classes, override & Singletons", verify: verifyDay17 },
  { day: 18, id: "18", slug: "day-18-enums", title: "Enums vs as const Objects", verify: verifyDay18 },
  { day: 19, id: "19", slug: "day-19-generics-basics", title: "Generics: The Core Superpower", verify: verifyDay19 },
  { day: 20, id: "20", slug: "day-20-generics-constraints", title: "Generic Constraints & keyof Lookups", verify: verifyDay20 },
  { day: 21, id: "21", slug: "day-21-generic-classes", title: "Generic Classes & In-Memory Cache (Milestone)", verify: verifyDay21 },
  { day: 22, id: "22", slug: "day-22-keyof-indexed-access", title: "Advanced: keyof, typeof & Indexed Access", verify: verifyDay22 },
  { day: 23, id: "23", slug: "day-23-mapped-types", title: "Mapped Types & Modifier Flags", verify: verifyDay23 },
  { day: 24, id: "24", slug: "day-24-template-literals", title: "Template Literal Types & Key Remapping", verify: verifyDay24 },
  { day: 25, id: "25", slug: "day-25-conditional-types", title: "Conditional Types & Distributive Unions", verify: verifyDay25 },
  { day: 26, id: "26", slug: "day-26-infer-keyword", title: "The infer Keyword & Type Extraction", verify: verifyDay26 },
  { day: 27, id: "27", slug: "day-27-utility-types-part1", title: "Utility Types Masterclass (Part 1)", verify: verifyDay27 },
  { day: 28, id: "28", slug: "day-28-utility-types-part2", title: "Utility Types Masterclass (Part 2)", verify: verifyDay28 },
  { day: 29, id: "29", slug: "day-29-async-error-handling", title: "Asynchronous TS & Safe Error Handling", verify: verifyDay29 },
  { day: 30, id: "30", slug: "day-30-production-tooling", title: "Production Tooling & Final Capstone Project", verify: verifyDay30 },
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
    { title: "WEEK 2: FUNCTIONS, UNIONS, NARROWING & INTERFACES", days: DAYS_REGISTRY.slice(7, 14) },
    { title: "WEEK 3: OOP, ENUMS, GENERICS & MILESTONE CACHE", days: DAYS_REGISTRY.slice(14, 21) },
    { title: "WEEK 4: TYPE GYMNASTICS & UTILITY TYPES", days: DAYS_REGISTRY.slice(21, 28) },
    { title: "WEEK 5: ASYNC, TOOLING & CAPSTONE ENGINE", days: DAYS_REGISTRY.slice(28, 30) },
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
  console.log("  npx tsx src/<day>/exercise.ts - Run and verify an individual day's exercise\n");
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
        console.log(`   Day ${d.id} [${d.title}]: PASSED`);
      } else {
        failed++;
        console.error(`  ❌ Day ${d.id} [${d.title}]: FAILED`);
      }
    } catch (err: unknown) {
      failed++;
      console.error(`  ❌ Day ${d.id} [${d.title}]: FAILED with error:`, (err as Error).message);
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
      await import(`./${found.slug}/lesson.js`);
      return;
    }
  }

  printDashboard();
}

main().catch((err) => {
  console.error("Fatal error:", err);
  process.exit(1);
});
