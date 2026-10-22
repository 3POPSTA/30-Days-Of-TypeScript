/**
 * DAY 01: INTRODUCTION & FIRST TYPESCRIPT PROGRAM
 * TypeScript adds compile-time static typing to JavaScript.
 */
console.log("\n=== DAY 01: WELCOME TO TYPESCRIPT ===");
const courseName: string = "30 Days of TypeScript";
const totalDays: number = 30;
const isExcited: boolean = true;

function printWelcome(course: string, days: number): string {
  return `Welcome to ${course}! A ${days}-day journey from Zero to Hero.`;
}

console.log(printWelcome(courseName, totalDays));
console.log("Status excited:", isExcited);
