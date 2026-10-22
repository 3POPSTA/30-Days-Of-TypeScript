/**
 * SOLUTION DAY 01
 */
export function greet(name: string): string {
  return `Hello, ${name}! Welcome to TypeScript.`;
}

export function multiply(a: number, b: number): number {
  return a * b;
}

export function getCourseInfo(): { course: string; days: number; isAwesome: boolean } {
  return {
    course: "30 Days of TypeScript",
    days: 30,
    isAwesome: true
  };
}
