<div align="center">
  <h1>🚀 30 Days Of TypeScript: Day 1 - Introduction & Setup</h1>
  <sub>Master Modern TypeScript from first principles to production software engineering</sub>
</div>

[<< Table of Contents](../README.md) | [Day 2: Primitive Types >>](../02_Day_Primitive_types/02_primitive_types.md)

---

## Table of Contents
- [Welcome to 30 Days of TypeScript](#welcome-to-30-days-of-typescript)
- [Why TypeScript?](#why-typescript)
- [The TypeScript Compilation Model](#the-typescript-compilation-model)
- [Development Environment Setup](#development-environment-setup)
  - [Windows (Node.js LTS / Winget)](#windows-nodejs-lts--winget)
  - [Linux (Node.js / npm)](#linux-nodejs--npm)
  - [macOS (Homebrew)](#macos-homebrew)
- [Your First TypeScript Program: Hello World](#your-first-typescript-program-hello-world)
  - [Code Breakdown](#code-breakdown)
  - [Compiling and Running via CLI](#compiling-and-running-via-cli)
- [Essential Compiler Flags (`tsconfig.json`)](#essential-compiler-flags-tsconfigjson)
- [💻 Exercises - Day 1](#-exercises---day-1)

---

## Welcome to 30 Days of TypeScript
TypeScript was created by **Anders Hejlsberg** at Microsoft in 2012 as a statically typed syntactic superset of JavaScript. Every valid JavaScript program is already a valid TypeScript program, enhanced with an expressive compile-time type system that scales from single-file scripts to multi-million-line enterprise systems.

This 30-day curriculum focuses on **Modern TypeScript (5.x+)**. We prioritize strict null safety (`"strict": true`), structural subtyping, zero-runtime-overhead type erasure, generic architecture, and type-level metaprogramming.

---

## Why TypeScript?
1. **Zero-Runtime-Cost Type Erasure**: Interfaces, type aliases, and generic constraints exist solely at compile time. Once verified, they are completely erased, emitting clean standard JavaScript with zero runtime overhead.
2. **Compile-Time Bug Prevention**: Eliminates entire classes of production crashes—such as `TypeError: Cannot read properties of undefined` and accidental implicit string/number coercion—before code ever executes.
3. **Structural Subtyping**: Type compatibility is based on an object's actual shape and capabilities rather than rigid nominal inheritance hierarchies.
4. **First-Class Language Server Tooling**: Powers instant refactoring, go-to-definition, symbol renaming, and inline diagnostics across modern editors.

---

## The TypeScript Compilation Model
Unlike ahead-of-time native compilers that emit machine instructions, the TypeScript compiler (`tsc`) validates types and transpiles down to standard ECMAScript:

```text
Source Code (.ts)
        │
        ▼  [1. Scanner & Parser]  (Tokenizes text and builds the Abstract Syntax Tree)
Abstract Syntax Tree (AST)
        │
        ▼  [2. Binder & Checker]  (Resolves symbols, narrows control flow, verifies types)
Type-Validated AST
        │
        ▼  [3. Transformer/Emit]  (Strips type annotations, downlevels syntax if needed)
JavaScript (.js) + Declarations (.d.ts) + Source Maps (.js.map)
```

---

## Development Environment Setup

### Windows (Node.js LTS / Winget)
1. Install Node.js LTS:
   ```powershell
   winget install OpenJS.NodeJS.LTS
   ```
2. Install dependencies inside the project root:
   ```powershell
   npm install
   ```
3. Verify in PowerShell:
   ```powershell
   node --version
   npx tsc --version
   ```

### Linux (Node.js / npm)
```bash
sudo apt update && sudo apt install -y nodejs npm
npm install
npx tsc --version
```

### macOS (Homebrew)
```bash
brew install node
npm install
npx tsc --version
```

---

## Your First TypeScript Program: Hello World

Create a file named `helloworld.ts`:

```typescript
const greeting: string = "Hello, World! Welcome to 30 Days of TypeScript!";

function printBanner(message: string): void {
    console.log(message);
}

printBanner(greeting);
```

### Code Breakdown
- `const greeting: string`: Declares an immutable constant explicitly annotated with the `string` primitive type.
- `function printBanner(message: string): void`: Accepts only a `string` argument and declares `void` because no value is returned.
- `console.log(message)`: Writes the verified string to standard output.

### Compiling and Running via CLI
```bash
# Direct execution during development via tsx
npx tsx 01_Day_Introduction/helloworld.ts

# Strict static type-check without emitting files
npx tsc --noEmit

# Compile all 30 days into ./build/ and execute with Node.js
npm run build
node build/01_Day_Introduction/helloworld.js
```

---

## Essential Compiler Flags (`tsconfig.json`)
Always compile with strict diagnostics enabled to catch subtle defects at compile time:
- `"strict": true`: Enables the full strict type-checking family (`strictNullChecks`, `noImplicitAny`, `strictFunctionTypes`, `useUnknownInCatchVariables`).
- `"noImplicitOverride": true`: Requires the `override` keyword when overriding base class methods.
- `"isolatedModules": true`: Ensures every file can be safely transpiled in isolation by modern bundlers and runners (`tsx`, `esbuild`, `swc`).
- `"module": "nodenext"`: Enforces modern Node.js ECMAScript Module (ESM) resolution rules.

---

## 💻 Exercises - Day 1

### Exercises: Level 1
1. Verify your Node.js and TypeScript compiler versions using `node --version` and `npx tsc --version`.
2. Execute `helloworld.ts` using `npx tsx 01_Day_Introduction/helloworld.ts` (or `npm run day01`).
3. Modify `helloworld.ts` to declare typed variables for your name (`string`), current year (`number`), and whether strict mode is active (`boolean`), then print them.

### Exercises: Level 2
1. Write a function `calculateRectangleArea(width: number, height: number): number` and log the result for a `12.5` by `8` rectangle.
2. Intentionally pass a string `"12.5"` to `calculateRectangleArea` and run `npm run typecheck` to inspect how `tsc` reports type mismatches, then fix the call.

### Exercises: Level 3
1. Run `npm run build` and inspect the emitted `build/01_Day_Introduction/helloworld.js` and `helloworld.d.ts` files. Compare what was erased in `.js` versus what was preserved in `.d.ts`.
2. Write a typed startup logger function `formatStartupBanner(appName: string, version: string, port: number): string` that returns a multi-line ASCII summary box.
