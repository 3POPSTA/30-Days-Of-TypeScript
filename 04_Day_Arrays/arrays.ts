// Day 4: Typed Arrays, Readonly Arrays & Matrices
// Run: npx tsx 04_Day_Arrays/arrays.ts

console.log("=== Day 4: Typed Arrays, Readonly Arrays & Matrices ===\n");

// 1. Homogeneous and union element arrays
const latenciesMs: number[] = [14, 22, 9, 35, 18, 41];
const cliArgs: (string | number)[] = ["--workers", 4, "--host", "0.0.0.0"];

console.log("Latencies (ms):", latenciesMs);
console.log("CLI args:", cliArgs, "\n");

// 2. Non-mutating functions accepting `readonly T[]`
function averageLatency(samples: readonly number[]): number {
    if (samples.length === 0) return 0;
    const sum = samples.reduce((acc, current) => acc + current, 0);
    return sum / samples.length;
}

console.log(`Average latency: ${averageLatency(latenciesMs).toFixed(2)} ms`);
console.log(`Latest sample (.at(-1)): ${latenciesMs.at(-1) ?? 0} ms\n`);

// 3. Functional pipeline (filter -> sort copy -> map)
const fastEndpoints: string[] = latenciesMs
    .filter((ms) => ms <= 20)
    .sort((a, b) => a - b)
    .map((ms, idx) => `#${idx + 1}: ${ms}ms`);

console.log("Fast samples (<= 20ms):", fastEndpoints, "\n");

// 4. Immutable 2D matrix trace calculation
type Matrix = readonly (readonly number[])[];

function matrixTrace(grid: Matrix): number {
    let trace = 0;
    for (let i = 0; i < grid.length; i++) {
        trace += grid[i]?.[i] ?? 0;
    }
    return trace;
}

const transform3x3: Matrix = [
    [4, 1, 0],
    [2, 7, 3],
    [0, 5, 9],
];

console.log("3x3 Matrix Trace (4 + 7 + 9):", matrixTrace(transform3x3));

export {};
