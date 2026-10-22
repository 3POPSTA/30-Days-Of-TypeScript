/**
 * EXERCISE DAY 01: INTRODUCTION & HELLO TYPESCRIPT
 */
// Level 1: Return a greeting formatted as "Hello, <name>! Welcome to TypeScript."
export function greet(name: string): string {
  return `Hello, ${name}! Welcome to TypeScript.`;
}

// Level 2: Multiply two numbers safely with type annotations
export function multiply(a: number, b: number): number {
  return a * b;
}

// Level 3: Return a system info object containing course and days
export function getCourseInfo(): { course: string; days: number; isAwesome: boolean } {
  return {
    course: "30 Days of TypeScript",
    days: 30,
    isAwesome: true
  };
}

export function verifyDay01(): boolean {
  console.log("Verifying Day 01 Exercises...");
  if (greet("Ada") !== "Hello, Ada! Welcome to TypeScript.") throw new Error("L1 failed");
  if (multiply(6, 7) !== 42) throw new Error("L2 failed");
  const info = getCourseInfo();
  if (info.days !== 30 || !info.isAwesome) throw new Error("L3 failed");
  console.log(" Day 01: All exercises verified successfully!\n");
  return true;
}

if (import.meta.url.endsWith(process.argv[1] ?? "")) {
  verifyDay01();
}
