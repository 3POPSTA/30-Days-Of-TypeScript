/**
 * ============================================================================
 * EXERCISES DAY 17: ABSTRACT CLASSES, OVERRIDE & POLYMORPHISM
 * ============================================================================
 * Instructions:
 * Complete the implementations below. Once finished, test with:
 *   npx tsx 17_Day_Abstract_classes/exercise.ts
 * Or run the complete test suite:
 *   npm test
 */

export abstract class Shape {
  abstract getArea(): number;
  describe(): string {
    return `Shape with area ${this.getArea()}`;
  }
}

export class Square extends Shape {
  constructor(public size: number) { super(); }
  override getArea(): number { return this.size * this.size; }
}

export function level1Task(size: number): string {
  return new Square(size).describe();
}

export abstract class ReportFormatter {
  abstract format(data: string[]): string;
}

export class CsvFormatter extends ReportFormatter {
  override format(data: string[]): string {
    return data.join(",");
  }
}

export function level2Task(data: string[]): string {
  return new CsvFormatter().format(data);
}

export function level3Task(val: number): number {
  return new Square(val).getArea();
}


// ----------------------------------------------------------------------------
// Automated Verification Suite
// ----------------------------------------------------------------------------
export async function verifyDay17(): Promise<boolean> {
  console.log("Verifying Day 17 Exercises (Abstract Classes, override & Polymorphism)...");

  if (level1Task(4) !== "Shape with area 16") throw new Error("L1 failed");
  if (level2Task(["a", "b", "c"]) !== "a,b,c") throw new Error("L2 failed");
  if (level3Task(10) !== 100) throw new Error("L3 failed");


  console.log(" Day 17: All exercises verified successfully!\n");
  return true;
}

if (process.argv[1] && new RegExp("17_Day_Abstract_classes[/\\\\]exercise\\.[tj]s$", "i").test(process.argv[1])) {
  verifyDay17();
}
