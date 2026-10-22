/**
 * ============================================================================
 * SOLUTION DAY 17: ABSTRACT CLASSES, OVERRIDE & POLYMORPHISM
 * ============================================================================
 * Reference implementations for Level 1, Level 2, and Level 3 exercises.
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


console.log("[Solution Day 17] Verified reference implementation.");
