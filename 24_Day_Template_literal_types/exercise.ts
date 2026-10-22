/**
 * ============================================================================
 * EXERCISES DAY 24: TEMPLATE LITERAL TYPES & EVENT STRINGS
 * ============================================================================
 * Instructions:
 * Complete the implementations below. Once finished, test with:
 *   npx tsx 24_Day_Template_literal_types/exercise.ts
 * Or run the complete test suite:
 *   npm test
 */

export type HexColor = `#${string}`;

export function level1Task(color: HexColor): boolean {
  return color.startsWith("#");
}

export function level2Task<E extends string, A extends string>(entity: E, action: A): `${E}:${A}` {
  return `${entity}:${action}`;
}

export class SimpleEventBus {
  private handlers = new Map<string, ((payload: any) => void)[]>();

  on(event: string, handler: (payload: any) => void): void {
    const list = this.handlers.get(event) ?? [];
    list.push(handler);
    this.handlers.set(event, list);
  }

  emit(event: string, payload: any): void {
    const list = this.handlers.get(event) ?? [];
    for (const h of list) h(payload);
  }
}

export function level3Task(bus: SimpleEventBus, event: string, val: string): string {
  let captured = "";
  bus.on(event, (data) => { captured = data; });
  bus.emit(event, val);
  return captured;
}


// ----------------------------------------------------------------------------
// Automated Verification Suite
// ----------------------------------------------------------------------------
export async function verifyDay24(): Promise<boolean> {
  console.log("Verifying Day 24 Exercises (Template Literal Types & Event Strings)...");

  if (!level1Task("#ff0000")) throw new Error("L1 failed");
  if (level2Task("user", "login") !== "user:login") throw new Error("L2 failed");

  const bus = new SimpleEventBus();
  if (level3Task(bus, "user:created", "Ada") !== "Ada") throw new Error("L3 failed");


  console.log(" Day 24: All exercises verified successfully!\n");
  return true;
}

if (process.argv[1] && new RegExp("24_Day_Template_literal_types[/\\\\]exercise\\.[tj]s$", "i").test(process.argv[1])) {
  verifyDay24();
}
