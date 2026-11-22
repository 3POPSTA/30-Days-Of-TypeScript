// Day 14: Interfaces, Extending Contracts & Hybrid Types
// Run: npx tsx 14_Day_Interfaces/interfaces.ts

console.log("=== Day 14: Interfaces, Extending Contracts & Hybrid Types ===\n");

// 1. Multiple interface inheritance (`extends`)
interface Identifiable {
    readonly id: string;
}

interface HealthCheckable {
    ping(): boolean;
}

interface WorkerNode extends Identifiable, HealthCheckable {
    readonly region: string;
    readonly activeJobs: number;
}

const nodeA: WorkerNode = {
    id: "worker-eu-01",
    region: "eu-west-1",
    activeJobs: 4,
    ping: () => true,
};
console.log(`Node ${nodeA.id} (${nodeA.region}) healthy: ${nodeA.ping()}\n`);

// 2. Construct signature (`new (...) => Instance`)
interface Transport {
    send(packet: string): string;
}

interface TransportConstructor {
    new (endpoint: string): Transport;
}

class TcpTransport implements Transport {
    constructor(private readonly endpoint: string) {}
    send(packet: string): string {
        return `[TCP -> ${this.endpoint}] ${packet}`;
    }
}

function bootTransport(Ctor: TransportConstructor, endpoint: string): Transport {
    return new Ctor(endpoint);
}

const client = bootTransport(TcpTransport, "10.0.4.12:9090");
console.log(client.send("SYN_ACK\n"));

// 3. Hybrid interface (callable function + methods/properties)
interface HybridRateLimiter {
    (clientKey: string): boolean;
    readonly maxHits: number;
    resetAll(): void;
}

function createRateLimiter(maxHits: number): HybridRateLimiter {
    const counts = new Map<string, number>();
    const limiter = ((clientKey: string): boolean => {
        const next = (counts.get(clientKey) ?? 0) + 1;
        counts.set(clientKey, next);
        return next <= maxHits;
    }) as HybridRateLimiter;

    Object.defineProperty(limiter, "maxHits", { value: maxHits, writable: false });
    limiter.resetAll = () => counts.clear();
    return limiter;
}

const allowRequest = createRateLimiter(2);
console.log("Hit 1 allowed:", allowRequest("ip_1"), "| Hit 2:", allowRequest("ip_1"), "| Hit 3:", allowRequest("ip_1"));
allowRequest.resetAll();
console.log("After resetAll(), Hit 1 allowed:", allowRequest("ip_1"));

export {};
