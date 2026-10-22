/**
 * ============================================================================
 * EXERCISES DAY 30: FINAL CAPSTONE: EVENT-DRIVEN WORKFLOW ENGINE
 * ============================================================================
 * Instructions:
 * Complete the implementations below. Once finished, test with:
 *   npx tsx 30_Day_Final_capstone_project/exercise.ts
 * Or run the complete test suite:
 *   npm test
 */

export interface PipelineContext {
  userId: number;
  tags: string[];
  processed: boolean;
}

export interface PipelineStep<T> {
  name: string;
  execute: (ctx: T) => Promise<T> | T;
}

export class Engine<T> {
  private steps: PipelineStep<T>[] = [];
  use(step: PipelineStep<T>): this {
    this.steps.push(step);
    return this;
  }
  async execute(initial: T): Promise<{ success: boolean; data: T; log: string[] }> {
    const log: string[] = [];
    let state = initial;
    for (const s of this.steps) {
      log.push(s.name);
      state = await s.execute(state);
    }
    return { success: true, data: state, log };
  }
}

export function level1Task(initial: number): number {
  return initial * 2 + 10;
}

export function level2Task(engine: Engine<PipelineContext>, ctx: PipelineContext): Promise<{ success: boolean; data: PipelineContext; log: string[] }> {
  engine.use({
    name: "AddTag",
    execute: (c) => ({ ...c, tags: [...c.tags, "certified"] })
  });
  engine.use({
    name: "MarkProcessed",
    execute: (c) => ({ ...c, processed: true })
  });
  return engine.execute(ctx);
}

export function level3Task(): string {
  return "TypeScript Hero Certified";
}


// ----------------------------------------------------------------------------
// Automated Verification Suite
// ----------------------------------------------------------------------------
export async function verifyDay30(): Promise<boolean> {
  console.log("Verifying Day 30 Exercises (Final Capstone: Event-Driven Workflow Engine)...");

  if (level1Task(5) !== 20) throw new Error("L1 failed");

  const eng = new Engine<PipelineContext>();
  const res = await level2Task(eng, { userId: 1, tags: ["start"], processed: false });
  if (!res.success || !res.data.processed || !res.data.tags.includes("certified")) {
    throw new Error("L2 failed");
  }

  if (level3Task() !== "TypeScript Hero Certified") throw new Error("L3 failed");


  console.log(" Day 30: All exercises verified successfully!\n");
  return true;
}

if (process.argv[1] && new RegExp("30_Day_Final_capstone_project[/\\\\]exercise\\.[tj]s$", "i").test(process.argv[1])) {
  verifyDay30();
}
