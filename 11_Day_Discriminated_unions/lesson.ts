/**
 * ============================================================================
 * DAY 11: DISCRIMINATED UNIONS & PATTERN MATCHING
 * ============================================================================
 * Model complex domain states with discriminated (tagged) unions and achieve 100% exhaustive compile-time safety.
 * Run with: npm run day:11  OR  npx tsx 11_Day_Discriminated_unions/lesson.ts
 */

console.log("\n=======================================================");
console.log("  DAY 11: DISCRIMINATED UNIONS & PATTERN MATCHING");
console.log("=======================================================\n");

// Day 11: Discriminated Unions & Pattern Matching
type Shape =
  | { kind: "circle"; radius: number }
  | { kind: "square"; size: number }
  | { kind: "rectangle"; width: number; height: number };

function getArea(s: Shape): number {
  switch (s.kind) {
    case "circle": return Math.PI * s.radius * s.radius;
    case "square": return s.size * s.size;
    case "rectangle": return s.width * s.height;
    default: {
      const _unreachable: never = s;
      throw new Error("Unhandled shape: " + _unreachable);
    }
  }
}

console.log("Square area:", getArea({ kind: "square", size: 4 }));


console.log("\n[Summary] Day 11 lesson finished successfully!\n");
