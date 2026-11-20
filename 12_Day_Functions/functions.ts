// Day 12: Functions, Rest Parameters & Call Signatures
// Run: npx tsx 12_Day_Functions/functions.ts

console.log("=== Day 12: Functions, Rest Parameters & Call Signatures ===\n");

// 1. Function type alias for backoff strategies
type BackoffStrategy = (attempt: number, baseDelayMs: number) => number;

const exponentialBackoff: BackoffStrategy = (attempt, baseDelayMs) => baseDelayMs * 2 ** attempt;
console.log("Backoff attempt #3 (100ms base):", exponentialBackoff(3, 100), "ms\n");

// 2. Default & rest parameters
function buildRoute(prefix: string = "/api/v1", ...parts: readonly string[]): string {
    const cleaned = parts.map((p) => p.replace(/^\/+|\/+$/g, ""));
    return `${prefix}/${cleaned.join("/")}`;
}

console.log("Route:", buildRoute(undefined, "users", "42", "permissions"), "\n");

// 3. Callable function object with metadata properties (call signature)
type MetricRecorder = {
    readonly metricName: string;
    totalCalls: number;
    (value: number): void;
};

function createRecorder(metricName: string): MetricRecorder {
    const fn = ((value: number): void => {
        fn.totalCalls += 1;
        console.log(`[Metric:${fn.metricName}] recorded=${value} (call #${fn.totalCalls})`);
    }) as MetricRecorder;

    Object.defineProperty(fn, "metricName", { value: metricName, writable: false });
    fn.totalCalls = 0;
    return fn;
}

const cpuRecorder = createRecorder("cpu_load_pct");
cpuRecorder(42.5);
cpuRecorder(61.0);

// 4. Explicit `this` parameter contract
interface FormatterBox {
    prefix: string;
    render(this: FormatterBox, text: string): string;
}

const box: FormatterBox = {
    prefix: "[CORE]",
    render(text) {
        return `${this.prefix} ${text}`;
    },
};
console.log("\nBound method call:", box.render("Subsystem online"));

export {};
