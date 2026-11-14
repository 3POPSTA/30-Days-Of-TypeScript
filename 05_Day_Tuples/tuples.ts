// Day 5: Tuples, Labeled Tuples & Const Assertions
// Run: npx tsx 05_Day_Tuples/tuples.ts

console.log("=== Day 5: Tuples, Labeled Tuples & Const Assertions ===\n");

// 1. Readonly labeled tuple with optional altitude
type GeoPoint = readonly [latitude: number, longitude: number, altitudeM?: number];

function formatGeoPoint([lat, lng, alt]: GeoPoint): string {
    const base = `(${lat.toFixed(4)}, ${lng.toFixed(4)})`;
    return alt !== undefined ? `${base} @ ${alt}m` : base;
}

const observatory: GeoPoint = [19.8207, -155.4681, 4207];
const harbor: GeoPoint = [21.3069, -157.8583];
console.log("Observatory:", formatGeoPoint(observatory));
console.log("Harbor:     ", formatGeoPoint(harbor), "\n");

// 2. Variadic tuple (leading fixed + middle rest + trailing code)
type AuditRecord = readonly [actor: string, ...actions: string[], statusCode: number];

const deployAudit: AuditRecord = ["ci-bot", "build", "migrate", "rollout", 200];
console.log("Variadic Audit Record:", deployAudit, "\n");

// 3. `as const` assertion for exact readonly tuple inference
function useCounter(initial: number) {
    let current = initial;
    const read = (): number => current;
    const add = (delta: number = 1): number => {
        current += delta;
        return current;
    };
    return [read, add] as const;
}

const [getCount, increment] = useCounter(10);
increment(5);
console.log("Counter tuple state after +5:", getCount());

export {};
