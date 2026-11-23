// Day 16: Classes, Access Modifiers & Parameter Properties
// Run: npx tsx 16_Day_Classes/classes.ts

console.log("=== Day 16: Classes, Access Modifiers & Parameter Properties ===\n");

interface AuditableVault {
    readonly vaultId: string;
    readonly balanceDollars: number;
    depositCents(cents: number): void;
    withdrawCents(cents: number): boolean;
}

class SecureVault implements AuditableVault {
    private static createdCount = 0;
    #balanceCents: number; // Hard runtime ECMAScript private field

    constructor(
        public readonly vaultId: string,
        protected readonly ownerName: string,
        openingCents: number = 0,
    ) {
        if (openingCents < 0) {
            throw new RangeError("Opening balance cannot be negative");
        }
        this.#balanceCents = openingCents;
        SecureVault.createdCount += 1;
    }

    static get totalVaults(): number {
        return SecureVault.createdCount;
    }

    get balanceDollars(): number {
        return this.#balanceCents / 100;
    }

    depositCents(cents: number): void {
        if (cents <= 0) throw new RangeError("Deposit must be positive");
        this.#balanceCents += cents;
    }

    withdrawCents(cents: number): boolean {
        if (cents <= 0 || cents > this.#balanceCents) {
            return false;
        }
        this.#balanceCents -= cents;
        return true;
    }
}

const primaryVault = new SecureVault("vlt_001", "Grace Hopper", 25_000);
primaryVault.depositCents(5_500);
const withdrew = primaryVault.withdrawCents(10_000);

console.log(`Vault ${primaryVault.vaultId} withdrawal succeeded: ${withdrew}`);
console.log(`Current balance: $${primaryVault.balanceDollars.toFixed(2)}`);
console.log(`Total vaults instantiated: ${SecureVault.totalVaults}`);
console.log(`JSON serialization (notice #balanceCents is hidden): ${JSON.stringify(primaryVault)}`);

export {};
