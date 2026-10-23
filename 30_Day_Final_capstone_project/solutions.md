# 📘 Day 30: Challenge Solutions & Explanations

Welcome to the solution guide for **Day 30: Final Capstone: Event-Driven Workflow Engine**!

---

## 🎯 Challenge 1: Generic Workflow Step Contract

### Solution
```typescript
export interface WorkflowStep<TIn, TOut> {
  name: string;
  execute(input: TIn): Promise<TOut>;
}

export function createStep<TIn, TOut>(
  name: string,
  fn: (input: TIn) => Promise<TOut>
): WorkflowStep<TIn, TOut> {
  return {
    name,
    execute: fn
  };
}
```

---

## 🎯 Challenge 2: Step Pipeline Composition

### Solution
```typescript
export function pipeWorkflowSteps<A, B, C>(
  step1: WorkflowStep<A, B>,
  step2: WorkflowStep<B, C>
): WorkflowStep<A, C> {
  return {
    name: `${step1.name} -> ${step2.name}`,
    execute: async (input: A) => {
      const intermediate = await step1.execute(input);
      return await step2.execute(intermediate);
    }
  };
}
```

---

## 🎯 Challenge 3: Strictly Typed Event Emitter

### Solution
```typescript
export class TypedEventEmitter<EventMap extends object> {
  private listeners = new Map<keyof EventMap, ((payload: any) => void)[]>();

  on<E extends keyof EventMap>(event: E, handler: (payload: EventMap[E]) => void): void {
    const existing = this.listeners.get(event) ?? [];
    existing.push(handler);
    this.listeners.set(event, existing);
  }

  emit<E extends keyof EventMap>(event: E, payload: EventMap[E]): void {
    const handlers = this.listeners.get(event) ?? [];
    for (const h of handlers) {
      h(payload);
    }
  }
}
```

---

## 🎯 Challenge 4: End-to-End Pipeline Execution

### Solution
```typescript
export interface UserPipelineEvents {
  "step:complete": { stepName: string; durationMs: number };
}

export async function runCapstonePipeline(
  rawUser: string
): Promise<{ id: string; username: string; active: boolean }> {
  const step1 = createStep("ParseRawUser", async (raw: string) => {
    return { username: raw.trim().toLowerCase() };
  });

  const step2 = createStep("EnrichUser", async (parsed: { username: string }) => {
    return { id: `usr_${Date.now()}`, username: parsed.username, active: true };
  });

  const pipeline = pipeWorkflowSteps(step1, step2);
  return await pipeline.execute(rawUser);
}
```

---

## 🏆 Congratulations!
You have completed all 30 days of the **30 Days of TypeScript Challenge**! You are now equipped with production-grade type systems mastery!
