# 30 Days Of TypeScript: Day 30 - Final Capstone: Event-Driven Workflow Engine

<div align="center">
  <p><a href="../29_Day_Async_and_error_handling/29_day_async_and_error_handling.md">&lt;&lt; Day 29</a> | <a href="../README.md">30 Days of TypeScript</a> | <a href="../README.md">Home &gt;&gt;</a></p>
</div>

---

- [30 Days Of TypeScript: Day 30 - Final Capstone: Event-Driven Workflow Engine](#30-days-of-typescript-day-30---final-capstone-event-driven-workflow-engine)
  - [📖 Overview](#-overview)
  - [🎯 Learning Objectives](#-learning-objectives)
  - [💡 Core Concepts & Deep Dive](#-core-concepts--deep-dive)
    - [1. Architectural Synthesis](#1-architectural-synthesis)
    - [2. Production Tooling](#2-production-tooling)
  - [💻 Runnable Lesson Demonstration](#-runnable-lesson-demonstration)
  - [⚠️ Common Pitfalls & Pro Tips](#️-common-pitfalls--pro-tips)
  - [💡 10 In-Depth Practical Examples & Solutions](#-10-in-depth-practical-examples--solutions)
    - [Example 1: Domain Entities with Strict Generics & Readonly Identifiers](#example-1-domain-entities-with-strict-generics-readonly-identifiers)
    - [Example 2: Discriminated Union Event Specification for Pipeline](#example-2-discriminated-union-event-specification-for-pipeline)
    - [Example 3: Strongly-Typed Middleware Pipeline](#example-3-strongly-typed-middleware-pipeline)
    - [Example 4: Step Context and State Transition Validator](#example-4-step-context-and-state-transition-validator)
    - [Example 5: Resilient Step Executor with Retry & Fallback](#example-5-resilient-step-executor-with-retry-fallback)
    - [Example 6: Mapped Event Handler Registry](#example-6-mapped-event-handler-registry)
    - [Example 7: Template Literal Subscription Topics ('workflow:${Status}')](#example-7-template-literal-subscription-topics-workflowstatus)
    - [Example 8: Async Step Orchestrator with 'Promise.allSettled'](#example-8-async-step-orchestrator-with-promiseallsettled)
    - [Example 9: Immutable Audit Trail Generator with Utility Types](#example-9-immutable-audit-trail-generator-with-utility-types)
    - [Example 10: Complete End-to-End Workflow Execution & Type-Safe Verification](#example-10-complete-end-to-end-workflow-execution-type-safe-verification)
  - [🎉 Congratulations](#-congratulations)

---

## 📖 Overview

Congratulations on reaching Day 30! Assemble everything you have learned (Generics, Discriminated Unions, Mapped Types, and Async) to build an Event-Driven Workflow Engine.

---

## 🎯 Learning Objectives

By the end of today, you will be able to:
- [ ] Master **Architectural Synthesis**
- [ ] Master **Production Tooling**
- [ ] Study and implement the 10 in-depth practical examples with complete solutions.

---

## 💡 Core Concepts & Deep Dive


### 1. Architectural Synthesis

Combining type safe state machines, pipeline steps, event dispatchers, and result envelopes.


### 2. Production Tooling

Configuring strict tsconfig, project references, bundling, and CI verification.


---

## 💻 Runnable Lesson Demonstration

Execute today's live code in your terminal:
```bash
npm run day:30
```

Here is the source code for today's lesson:
```typescript
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

```

---

## ⚠️ Common Pitfalls & Pro Tips

> [!TIP]
> **Pro Tip**: In TypeScript, the compiler is your pair-programmer. Pay close attention to compiler diagnostic messages: they describe the exact shape mismatch.

> [!WARNING]
> **Common Pitfall**: Do not fall into the trap of using `any` to silence compiler warnings. Use `unknown` with type guards or write proper generic constraints!

---

## 💡 10 In-Depth Practical Examples & Solutions

### Example 1: Domain Entities with Strict Generics & Readonly Identifiers
**Problem / Scenario:**
Establish core immutable workflow entities with typed payloads.

**Solution:**
```typescript
interface WorkflowEntity<TPayload> {
  readonly id: string;
  readonly workflowName: string;
  readonly createdAt: number;
  payload: TPayload;
}

const entity: WorkflowEntity<{ orderId: string; amount: number }> = {
  id: "wf_001",
  workflowName: "OrderProcessing",
  createdAt: Date.now(),
  payload: { orderId: "ord_99", amount: 150 }
};

console.log("Entity ID:", entity.id, "Order:", entity.payload.orderId);
```

**Explanation & Output:**
Generic workflow models ensure pipeline context objects remain strictly typed from start to finish.

---

### Example 2: Discriminated Union Event Specification for Pipeline
**Problem / Scenario:**
Model all pipeline lifecycle events using discriminated unions.

**Solution:**
```typescript
type WorkflowEvent<TData> =
  | { type: "STARTED"; runId: string }
  | { type: "STEP_PROGRESS"; stepName: string; percent: number }
  | { type: "COMPLETED"; result: TData }
  | { type: "FAILED"; error: string };

function logPipelineEvent<T>(evt: WorkflowEvent<T>): void {
  switch (evt.type) {
    case "STARTED": console.log(`Run ${evt.runId} started`); break;
    case "STEP_PROGRESS": console.log(`Step ${evt.stepName}: ${evt.percent}%`); break;
    case "COMPLETED": console.log("Workflow completed successfully"); break;
    case "FAILED": console.error(`Workflow failed: ${evt.error}`); break;
  }
}

logPipelineEvent({ type: "STARTED", runId: "run_881" });
```

**Explanation & Output:**
Discriminated union events provide clear lifecycle state transitions with zero ambiguity.

---

### Example 3: Strongly-Typed Middleware Pipeline
**Problem / Scenario:**
Execute a chain of middleware functions that transform workflow state.

**Solution:**
```typescript
type Middleware<TContext> = (ctx: TContext, next: () => Promise<void>) => Promise<void>;

class Pipeline<TContext> {
  private middlewares: Middleware<TContext>[] = [];

  use(fn: Middleware<TContext>): this {
    this.middlewares.push(fn);
    return this;
  }

  async execute(ctx: TContext): Promise<void> {
    let index = 0;
    const next = async (): Promise<void> => {
      if (index < this.middlewares.length) {
        const mw = this.middlewares[index++];
        await mw(ctx, next);
      }
    };
    await next();
  }
}

const pipe = new Pipeline<{ log: string[] }>();
pipe.use(async (ctx, next) => {
  ctx.log.push("Step 1 started");
  await next();
  ctx.log.push("Step 1 finished");
});

const context = { log: [] };
pipe.execute(context).then(() => console.log("Pipeline Log:", context.log));
```

**Explanation & Output:**
Typed middleware chains power enterprise orchestrators like Express, Koa, and event processors.

---

### Example 4: Step Context and State Transition Validator
**Problem / Scenario:**
Enforce valid state transitions (Pending -> Running -> Done) using a typed state validator.

**Solution:**
```typescript
type StepStatus = "PENDING" | "RUNNING" | "DONE" | "ERROR";

const VALID_NEXT: Record<StepStatus, readonly StepStatus[]> = {
  PENDING: ["RUNNING"],
  RUNNING: ["DONE", "ERROR"],
  DONE: [],
  ERROR: ["PENDING"] // Allows retry
};

function transition(current: StepStatus, target: StepStatus): StepStatus {
  if (!VALID_NEXT[current].includes(target)) {
    throw new Error(`Invalid step transition from ${current} to ${target}`);
  }
  return target;
}

console.log("Transition PENDING -> RUNNING:", transition("PENDING", "RUNNING"));
```

**Explanation & Output:**
Typed transition maps prevent invalid state transitions at both compile time and runtime.

---

### Example 5: Resilient Step Executor with Retry & Fallback
**Problem / Scenario:**
Execute individual steps with automated fallback values upon failure.

**Solution:**
```typescript
interface StepDefinition<TIn, TOut> {
  name: string;
  run(input: TIn): Promise<TOut>;
  fallback?(err: Error): TOut;
}

async function executeStep<TIn, TOut>(step: StepDefinition<TIn, TOut>, input: TIn): Promise<TOut> {
  try {
    return await step.run(input);
  } catch (err: unknown) {
    if (step.fallback) {
      return step.fallback(err as Error);
    }
    throw err;
  }
}

const robustStep: StepDefinition<number, string> = {
  name: "SafeDivider",
  run: async (n) => { if (n === 0) throw new Error("Zero error"); return (100 / n).toString(); },
  fallback: () => "Infinity (Fallback)"
};

executeStep(robustStep, 0).then(res => console.log("Step result:", res));
```

**Explanation & Output:**
Providing typed fallbacks ensures workflow pipelines can degrade gracefully without crashing.

---

### Example 6: Mapped Event Handler Registry
**Problem / Scenario:**
Register handlers for every step of an event-driven workflow using mapped types.

**Solution:**
```typescript
type WorkflowSteps = "validate" | "process" | "notify";

type StepHandlerMap = {
  [K in WorkflowSteps]: (data: string) => Promise<boolean>;
};

const handlers: StepHandlerMap = {
  validate: async d => d.length > 0,
  process: async d => true,
  notify: async d => { console.log("Notified for:", d); return true; }
};

handlers.notify("Order #100");
```

**Explanation & Output:**
Mapped types ensure that every declared workflow step has an associated handler function.

---

### Example 7: Template Literal Subscription Topics ('workflow:${Status}')
**Problem / Scenario:**
Listen for specific status changes using template literal event topics.

**Solution:**
```typescript
type Status = "started" | "finished" | "failed";
type Topic = `workflow:${Status}`;

function subscribeTopic(topic: Topic, callback: () => void): void {
  console.log("Subscribed to topic:", topic);
}

subscribeTopic("workflow:started", () => {});
subscribeTopic("workflow:finished", () => {});
```

**Explanation & Output:**
Template literal topics enforce strictly typed event channels and message routing.

---

### Example 8: Async Step Orchestrator with 'Promise.allSettled'
**Problem / Scenario:**
Run multiple independent workflow steps concurrently and aggregate results.

**Solution:**
```typescript
interface StepResult {
  step: string;
  success: boolean;
}

async function runStep(name: string): Promise<StepResult> {
  return { step: name, success: true };
}

async function orchestrate(): Promise<void> {
  const steps = ["InventoryCheck", "FraudAnalysis", "TaxCalculation"];
  const outcomes = await Promise.allSettled(steps.map(runStep));

  for (const outcome of outcomes) {
    if (outcome.status === "fulfilled") {
      console.log(`Step ${outcome.value.step} completed.`);
    }
  }
}

orchestrate();
```

**Explanation & Output:**
Parallel step orchestration maximizes throughput while preserving error reporting per step.

---

### Example 9: Immutable Audit Trail Generator with Utility Types
**Problem / Scenario:**
Produce a readonly audit trail log capturing each executed workflow phase.

**Solution:**
```typescript
interface AuditLog {
  runId: string;
  events: readonly string[];
  completedAt: number;
}

function createAuditSnapshot(runId: string, events: string[]): Readonly<AuditLog> {
  return Object.freeze({
    runId,
    events: Object.freeze([...events]),
    completedAt: Date.now()
  });
}

const audit = createAuditSnapshot("run_001", ["Started", "Validated", "Shipped"]);
console.log("Audit Run ID:", audit.runId, "Events:", audit.events.length);
```

**Explanation & Output:**
'Readonly<T>' and 'Object.freeze' provide tamper-proof runtime and compile-time audit logging.

---

### Example 10: Complete End-to-End Workflow Execution & Type-Safe Verification
**Problem / Scenario:**
Assemble all components into a working event-driven workflow engine.

**Solution:**
```typescript
interface WorkflowContext {
  userId: string;
  isVerified: boolean;
  score: number;
}

class WorkflowEngine {
  async runWorkflow(userId: string): Promise<WorkflowContext> {
    const ctx: WorkflowContext = { userId, isVerified: false, score: 0 };

    // Step 1: Verification
    ctx.isVerified = userId.startsWith("user_");
    // Step 2: Scoring
    ctx.score = ctx.isVerified ? 100 : 0;

    return ctx;
  }
}

const engine = new WorkflowEngine();
engine.runWorkflow("user_ada_01").then(finalState => {
  console.log("Workflow Complete!");
  console.log(`User: ${finalState.userId}, Verified: ${finalState.isVerified}, Score: ${finalState.score}`);
});
```

**Explanation & Output:**
The complete workflow engine unifies generics, interfaces, async/await, and strict typing into an enterprise-ready architecture.

---

## 🎉 Congratulations

🌕 **You are amazing!** You have conquered **Day 30** of 30 Days of TypeScript. Keep the momentum going!

<div align="center">
  <p><a href="../29_Day_Async_and_error_handling/29_day_async_and_error_handling.md">&lt;&lt; Day 29</a> | <a href="../README.md">30 Days of TypeScript</a> | <a href="../README.md">Home &gt;&gt;</a></p>
</div>
