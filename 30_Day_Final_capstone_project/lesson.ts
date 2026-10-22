/**
 * ============================================================================
 * DAY 30: FINAL CAPSTONE: EVENT-DRIVEN WORKFLOW ENGINE
 * ============================================================================
 * Congratulations on reaching Day 30! Assemble everything you have learned (Generics, Discriminated Unions, Mapped Types, and Async) to build an Event-Driven Workflow Engine.
 * Run with: npm run day:30  OR  npx tsx 30_Day_Final_capstone_project/lesson.ts
 */

console.log("\n=======================================================");
console.log("  DAY 30: FINAL CAPSTONE: EVENT-DRIVEN WORKFLOW ENGINE");
console.log("=======================================================\n");

// Day 30: Final Capstone: Event-Driven Workflow Engine
export interface Step<TContext> {
  name: string;
  execute: (ctx: TContext) => Promise<TContext>;
}

export class Pipeline<TContext> {
  private steps: Step<TContext>[] = [];

  addStep(step: Step<TContext>): this {
    this.steps.push(step);
    return this;
  }

  async run(initialContext: TContext): Promise<TContext> {
    let ctx = initialContext;
    for (const step of this.steps) {
      console.log(`Running step: ${step.name}`);
      ctx = await step.execute(ctx);
    }
    return ctx;
  }
}

console.log("Capstone pipeline architecture initialized!");


console.log("\n[Summary] Day 30 lesson finished successfully!\n");
