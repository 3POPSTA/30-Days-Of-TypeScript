/**
 * 🎯 Day 30: Final Capstone: Event-Driven Workflow Engine - Coding Challenges
 *
 * Build an extensible, type-safe workflow pipeline engine combining all 30 days of TypeScript!
 *
 * 🚀 Run with: npm run challenge:30
 */

// ============================================================================
// 🎯 CHALLENGE 1: Generic Workflow Step Contract
// ============================================================================
/**
 * 1. Define 'WorkflowStep<TIn, TOut>':
 *    - name: string
 *    - execute(input: TIn): Promise<TOut>
 *
 * 2. Implement 'createStep<TIn, TOut>(name: string, fn: (input: TIn) => Promise<TOut>): WorkflowStep<TIn, TOut>'
 */
export interface WorkflowStep<TIn, TOut> {
  name: string;
  execute(input: TIn): Promise<TOut>;
}

// 👇 YOUR CODE HERE:
export function createStep<TIn, TOut>(
  name: string,
  fn: (input: TIn) => Promise<TOut>
): WorkflowStep<TIn, TOut> {
  // TODO: Return WorkflowStep object
  return { name, execute: fn };
}

// ============================================================================
// 🎯 CHALLENGE 2: Step Pipeline Composition
// ============================================================================
/**
 * Write 'pipeWorkflowSteps<A, B, C>(step1: WorkflowStep<A, B>, step2: WorkflowStep<B, C>): WorkflowStep<A, C>'
 * Composes two workflow steps sequentially: execute step1, then pass result to step2.
 */
// 👇 YOUR CODE HERE:
export function pipeWorkflowSteps<A, B, C>(
  step1: WorkflowStep<A, B>,
  step2: WorkflowStep<B, C>
): WorkflowStep<A, C> {
  // TODO: Return composite WorkflowStep
  return {
    name: `${step1.name} -> ${step2.name}`,
    execute: async (input: A) => {
      const intermediate = await step1.execute(input);
      return await step2.execute(intermediate);
    }
  };
}

// ============================================================================
// 🎯 CHALLENGE 3: Strictly Typed Event Emitter
// ============================================================================
/**
 * Implement 'TypedEventEmitter<EventMap extends object>':
 * - on<E extends keyof EventMap>(event: E, handler: (payload: EventMap[E]) => void): void
 * - emit<E extends keyof EventMap>(event: E, payload: EventMap[E]): void
 */
// 👇 YOUR CODE HERE:
export class TypedEventEmitter<EventMap extends object> {
  private listeners = new Map<keyof EventMap, ((payload: any) => void)[]>();

  on<E extends keyof EventMap>(event: E, handler: (payload: EventMap[E]) => void): void {
    // TODO: Register listener
    const existing = this.listeners.get(event) ?? [];
    existing.push(handler);
    this.listeners.set(event, existing);
  }

  emit<E extends keyof EventMap>(event: E, payload: EventMap[E]): void {
    // TODO: Invoke listeners with payload
    const handlers = this.listeners.get(event) ?? [];
    for (const h of handlers) {
      h(payload);
    }
  }
}

// ============================================================================
// 🎯 CHALLENGE 4: End-to-End Pipeline Execution
// ============================================================================
export interface UserPipelineEvents {
  "step:complete": { stepName: string; durationMs: number };
}

// 👇 YOUR CODE HERE:
export async function runCapstonePipeline(rawUser: string): Promise<{ id: string; username: string; active: boolean }> {
  // TODO: Create steps, pipe them, and execute
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
// 🧪 TEST RUNNER - Run: npm run challenge:30
// ============================================================================
console.log("--- 🧪 Day 30 Final Capstone Results ---");
const doubleStep = createStep("Double", async (n: number) => n * 2);
const stringifyStep = createStep("Stringify", async (n: number) => `Result: ${n}`);
const pipeline = pipeWorkflowSteps(doubleStep, stringifyStep);

pipeline.execute(21).then(res => console.log("Challenge 1 & 2:", res));

const emitter = new TypedEventEmitter<{ "metric": { count: number } }>();
emitter.on("metric", p => console.log("Challenge 3 Emitter:", p));
emitter.emit("metric", { count: 42 });

runCapstonePipeline("  DevNinja  ").then(u => console.log("Challenge 4 Capstone User:", u));
console.log("-----------------------------------\n");
