// Day 15: Interface vs Type & Declaration Merging
// Run: npx tsx 15_Day_Interface_vs_type/interface_vs_type.ts

console.log("=== Day 15: Interface vs Type & Declaration Merging ===\n");

// 1. Declaration merging (exclusive to `interface`)
interface TelemetryContext {
    readonly requestId: string;
}

// Second declaration in a plugin/instrumentation layer merges seamlessly:
interface TelemetryContext {
    readonly durationMs: number;
    readonly region: string;
}

const trace: TelemetryContext = {
    requestId: "req_91a8f",
    durationMs: 14.2,
    region: "us-west-2",
};
console.log("Merged TelemetryContext:", trace, "\n");

// 2. Interoperability: `interface` extending a `type` alias & `type` union of `interface`s
type BaseMetadata = {
    readonly schemaVersion: 1 | 2;
};

interface CreatedEvent extends BaseMetadata {
    readonly type: "USER_CREATED";
    readonly email: string;
}

interface DeletedEvent extends BaseMetadata {
    readonly type: "USER_DELETED";
    readonly reason: string;
}

// Union sum type (exclusive to `type`)
type DomainEvent = CreatedEvent | DeletedEvent;

function handleDomainEvent(event: DomainEvent): string {
    if (event.type === "USER_CREATED") {
        return `[v${event.schemaVersion}] Provisioned ${event.email}`;
    }
    return `[v${event.schemaVersion}] Removed user (${event.reason})`;
}

console.log(handleDomainEvent({ schemaVersion: 2, type: "USER_CREATED", email: "ada@ analytical.org" }));
console.log(handleDomainEvent({ schemaVersion: 2, type: "USER_DELETED", reason: "GDPR erasure request" }));

export {};
