/**
 * ============================================================================
 * SOLUTION DAY 30: FINAL CAPSTONE: EVENT-DRIVEN WORKFLOW ENGINE
 * ============================================================================
 * Reference implementations for Level 1, Level 2, and Level 3 exercises.
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


console.log("[Solution Day 30] Verified reference implementation.");
