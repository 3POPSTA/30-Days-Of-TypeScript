<div align="center">
  <h1>🚀 30 Days Of TypeScript: Day 12 - Functions, Rest Parameters & Call Signatures</h1>
  <sub>Function expressions, optional/default arguments, typed rest tuples, and explicit this parameters</sub>
</div>

[<< Day 11: Discriminated Unions](../11_Day_Discriminated_unions/11_discriminated_unions.md) | [Day 13: Function Overloading >>](../13_Day_Function_overloading/13_function_overloading.md)

---

## Table of Contents
- [Typing Function Declarations & Expressions](#typing-function-declarations--expressions)
- [Call Signatures & Callable Objects](#call-signatures--callable-objects)
- [Optional (`?`) vs Default Parameters](#optional--vs-default-parameters)
- [Typed Rest Parameters & Tuple Spreads](#typed-rest-parameters--tuple-spreads)
- [Explicit `this` Parameter Typing](#explicit-this-parameter-typing)
- [Contextual Typing in Higher-Order Callbacks](#contextual-typing-in-higher-order-callbacks)
- [💻 Exercises - Day 12](#-exercises---day-12)

---

## Typing Function Declarations & Expressions
Always annotate parameter types explicitly. Annotating public return types documents the contract and catches accidental return-shape drift inside the implementation:

```typescript
type BinaryMathOp = (left: number, right: number) => number;

const multiply: BinaryMathOp = (a, b) => a * b;
```

---

## Call Signatures & Callable Objects
In JavaScript, functions are first-class objects and can carry metadata properties. Object **call signatures** model functions with attached fields:

```typescript
type TaggedFormatter = {
    readonly version: string;
    (rawInput: string): string;
};
```

---

## Optional (`?`) vs Default Parameters
- `timeoutMs?: number`: Caller may omit it; inside the body its type is `number | undefined`.
- `timeoutMs: number = 5000`: Caller may omit it or pass `undefined`; inside the body its type is guaranteed `number`!

> [!TIP]
> Avoid optional parameters in callback types (like `(err?: Error) => void`) unless you explicitly intend to invoke the callback with zero arguments.

---

## Typed Rest Parameters & Tuple Spreads
Rest parameters are always arrays or tuples—never bare types:

```typescript
function joinPathSegments(root: string, ...segments: readonly string[]): string {
    return [root, ...segments].join("/").replace(/\/+/g, "/");
}

// Tuple spread enforces exact arity when spreading arguments!
const coords = [10, 25] as const;
const angle = Math.atan2(...coords);
```

---

## Explicit `this` Parameter Typing
TypeScript lets you declare a fake first parameter named `this` (erased completely during compilation) to verify `Function.prototype.call` / method invocation contexts:

```typescript
interface CounterContext {
    count: number;
    increment(this: CounterContext, step: number): void;
}
```

---

## Contextual Typing in Higher-Order Callbacks
When passing an inline arrow function to `.map()`, `.sort()`, or an event handler, TypeScript infers callback parameter types automatically from the target function signature.

---

## 💻 Exercises - Day 12

### Exercises: Level 1
1. Define a function type `RetryDelayStrategy = (attempt: number, baseMs: number) => number` and implement both `linearBackoff` and `exponentialBackoff`.
2. Write `buildQueryUrl(baseUrl: string, limit?: number, offset: number = 0): string` and test omitting optional/default arguments.
3. Implement `sumAll(...numbers: readonly number[]): number` and call it both with direct arguments and by spreading a `readonly` tuple.

### Exercises: Level 2
1. Create a callable `Logger` object matching `{ readonly namespace: string; (message: string): void }` using `Object.assign`.
2. Write a higher-order function `composeUnary(f: (n: number) => number, g: (n: number) => number): (n: number) => number` and verify contextual parameter inference.

### Exercises: Level 3
1. Demonstrate how an explicit `this: { prefix: string }` parameter prevents detaching a method (`const fn = obj.format; fn()`) under `"strictBindCallApply": true`.
2. Implement a typed `memoizeUnary<TArg extends string | number, TResult>(fn: (arg: TArg) => TResult): ((arg: TArg) => TResult) & { cacheSize: () => number }`.
