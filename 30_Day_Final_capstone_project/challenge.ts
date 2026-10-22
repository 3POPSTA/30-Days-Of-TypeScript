/**
 * ============================================================================
 * DAY 30: FINAL CAPSTONE: EVENT-DRIVEN WORKFLOW ENGINE — CODING CHALLENGES
 * ============================================================================
 * Congratulations on reaching Day 30!
 * In this final capstone challenge, you bring together everything you've learned:
 * - Generics and generic constraints
 * - Discriminated unions and exhaustive checks
 * - Mapped types and key remapping
 * - Type-safe event emitters
 * - Async pipelines and error boundaries
 *
 * Test with:
 *   npx tsx 30_Day_Final_capstone_project/challenge.ts
 *   OR
 *   npm run challenge:30
 * ============================================================================
 */

console.log("\n=======================================================");
console.log("  DAY 30: FINAL CAPSTONE VERIFICATION RUNNER");
console.log("=======================================================\n");

function testCheck(step: string, passed: boolean, details?: string): void {
  if (passed) {
    console.log(`  [PASS] ${step}${details ? ` -> ${details}` : ""}`);
  } else {
    console.log(`  [WAIT] ${step} (Needs attention)${details ? ` -> ${details}` : ""}`);
  }
}

// ============================================================================
// STEP 1: Generic Workflow Step Contract
// ============================================================================
/**
 * CHALLENGE 1:
 * Define an interface 'WorkflowStep<TIn, TOut>':
 *   - name: string;
 *   - execute(input: TIn): Promise<TOut>;
 * 
 * Implement a factory function 'createStep<TIn, TOut>(name: string, fn: (input: TIn) => Promise<TOut>): WorkflowStep<TIn, TOut>'.
 */
// >>> YOUR CODE HERE <<<
export interface WorkflowStep<TIn, TOut> {
  name: string;
  execute(input: TIn): Promise<TOut>;
}

export function createStep<TIn, TOut>(
  name: string,
  fn: (input: TIn) => Promise<TOut>
): WorkflowStep<TIn, TOut> {
  // TODO: Replace with your implementation
  return {
    name,
    execute: fn
  };
}


// ============================================================================
// STEP 2: Step Pipeline Composition
// ============================================================================
/**
 * CHALLENGE 2:
 * Write a function 'pipeWorkflowSteps<A, B, C>(step1: WorkflowStep<A, B>, step2: WorkflowStep<B, C>): WorkflowStep<A, C>'
 * that connects two steps into a combined composite step named `${step1.name} -> ${step2.name}`.
 */
// >>> YOUR CODE HERE <<<
export function pipeWorkflowSteps<A, B, C>(
  step1: WorkflowStep<A, B>,
  step2: WorkflowStep<B, C>
): WorkflowStep<A, C> {
  // TODO: Replace with your implementation
  return {
    name: `${step1.name} -> ${step2.name}`,
    execute: async (input: A) => {
      const intermediate = await step1.execute(input);
      return await step2.execute(intermediate);
    }
  };
}


// ============================================================================
// STEP 3: Strictly Typed Event Emitter
// ============================================================================
/**
 * CHALLENGE 3:
 * Implement a generic 'TypedEventEmitter<EventMap extends Record<string, unknown>>':
 *   - on<E extends keyof EventMap>(event: E, handler: (payload: EventMap[E]) => void): void
 *   - emit<E extends keyof EventMap>(event: E, payload: EventMap[E]): void
 */
// >>> YOUR CODE HERE <<<
export class TypedEventEmitter<EventMap extends object> {
  private listeners = new Map<keyof EventMap, ((payload: any) => void)[]>();

  on<E extends keyof EventMap>(event: E, handler: (payload: EventMap[E]) => void): void {
    // TODO: Replace with your implementation
    const existing = this.listeners.get(event) ?? [];
    existing.push(handler);
    this.listeners.set(event, existing);
  }

  emit<E extends keyof EventMap>(event: E, payload: EventMap[E]): void {
    // TODO: Replace with your implementation
    const handlers = this.listeners.get(event) ?? [];
    for (const h of handlers) {
      h(payload);
    }
  }
}


// ============================================================================
// STEP 4: End-to-End Pipeline Execution
// ============================================================================
/**
 * CHALLENGE 4:
 * Create an end-to-end user processing pipeline:
 *   - Step 1: Parse Raw Input: (raw: string) => { username: string }
 *   - Step 2: Validate & Enrich: ({ username: string }) => { id: string; username: string; active: boolean }
 * 
 * Wire them together with 'pipeWorkflowSteps', attach the TypedEventEmitter
 * to emit "step:complete" telemetry, and execute.
 */
export interface UserPipelineEvents {
  "step:complete": { stepName: string; durationMs: number };
}

// >>> YOUR CODE HERE <<<
export async function runCapstonePipeline(rawUser: string): Promise<{ id: string; username: string; active: boolean }> {
  // TODO: Replace with your implementation
  const emitter = new TypedEventEmitter<UserPipelineEvents>();

  const step1 = createStep("ParseRawUser", async (raw: string) => {
    return { username: raw.trim().toLowerCase() };
  });

  const step2 = createStep("EnrichUser", async (parsed: { username: string }) => {
    return { id: `usr_${Date.now()}`, username: parsed.username, active: true };
  });

  const pipeline = pipeWorkflowSteps(step1, step2);
  return await pipeline.execute(rawUser);
}


// ============================================================================
// VERIFICATION TEST SUITE
// ============================================================================
async function runVerification(): Promise<void> {
  console.log("Verifying Step 1 (createStep)...");
  const doubleStep = createStep("Double", async (n: number) => n * 2);
  const doubleRes = await doubleStep.execute(21);
  testCheck("Step 1 - createStep execute", doubleRes === 42 && doubleStep.name === "Double");

  console.log("\nVerifying Step 2 (pipeWorkflowSteps)...");
  const toStringStep = createStep("ToString", async (n: number) => `Number: ${n}`);
  const piped = pipeWorkflowSteps(doubleStep, toStringStep);
  const pipedRes = await piped.execute(5);
  testCheck("Step 2 - pipeWorkflowSteps", pipedRes === "Number: 10" && piped.name === "Double -> ToString");

  console.log("\nVerifying Step 3 (TypedEventEmitter)...");
  interface TestEvents { "ping": { count: number } }
  const emitter = new TypedEventEmitter<TestEvents>();
  let pingReceived = 0;
  emitter.on("ping", p => { pingReceived = p.count; });
  emitter.emit("ping", { count: 99 });
  testCheck("Step 3 - TypedEventEmitter payload received", pingReceived === 99);

  console.log("\nVerifying Step 4 (runCapstonePipeline)...");
  const capstoneResult = await runCapstonePipeline("  GRACE_HOPPER  ");
  testCheck("Step 4 - runCapstonePipeline", capstoneResult.username === "grace_hopper" && capstoneResult.active === true);

  console.log("\n=======================================================");
  console.log("  🏆 CONGRATULATIONS! ALL 30 DAYS MASTERED!");
  console.log("=======================================================\n");
}

runVerification();
