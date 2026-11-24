// Day 17: Abstract Classes, Override & Polymorphism
// Run: npx tsx 17_Day_Abstract_classes/abstract_classes.ts

console.log("=== Day 17: Abstract Classes, Override & Polymorphism ===\n");

abstract class ReportExporter {
    constructor(public readonly reportTitle: string) {}

    abstract readonly formatName: string;
    protected abstract encodeBody(records: readonly Record<string, string | number>[]): string;

    // Template method orchestrating shared workflow + abstract hook
    generate(records: readonly Record<string, string | number>[]): string {
        const body = this.encodeBody(records);
        return `--- [${this.formatName}] ${this.reportTitle} (${records.length} rows) ---\n${body}`;
    }
}

class JsonReportExporter extends ReportExporter {
    override readonly formatName = "JSON";

    protected override encodeBody(records: readonly Record<string, string | number>[]): string {
        return JSON.stringify(records);
    }
}

class CsvReportExporter extends ReportExporter {
    override readonly formatName = "CSV";

    protected override encodeBody(records: readonly Record<string, string | number>[]): string {
        if (records.length === 0) return "";
        const headers = Object.keys(records[0] ?? {});
        const lines = records.map((row) => headers.map((h) => String(row[h] ?? "")).join(","));
        return [headers.join(","), ...lines].join("\n");
    }
}

const dataset = [
    { service: "gateway", p99Ms: 18 },
    { service: "search", p99Ms: 42 },
] as const;

// Polymorphic dispatch over abstract base references
const exporters: readonly ReportExporter[] = [
    new JsonReportExporter("Service Latency Snapshot"),
    new CsvReportExporter("Service Latency Snapshot"),
];

for (const exporter of exporters) {
    console.log(exporter.generate(dataset), "\n");
}

export {};
