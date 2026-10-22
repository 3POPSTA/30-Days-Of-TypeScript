/**
 * ============================================================================
 * EXERCISES DAY 16: CLASSES, ACCESS MODIFIERS & READONLY
 * ============================================================================
 * Instructions:
 * Complete the implementations below. Once finished, test with:
 *   npx tsx 16_Day_Classes/exercise.ts
 * Or run the complete test suite:
 *   npm test
 */

export class UserAccount {
  constructor(public readonly id: string, public name: string) {}
  get summary(): string {
    return `User ${this.name} (${this.id})`;
  }
}

export class Wallet {
  constructor(private balance: number = 0) {}
  getBalance(): number { return this.balance; }
  deposit(amount: number): void { this.balance += amount; }
  withdraw(amount: number): boolean {
    if (amount > this.balance) return false;
    this.balance -= amount;
    return true;
  }
}

export function level1Task(id: string, name: string): string {
  return new UserAccount(id, name).summary;
}

export function level2Task(initial: number, deposit: number, withdraw: number): number {
  const w = new Wallet(initial);
  w.deposit(deposit);
  w.withdraw(withdraw);
  return w.getBalance();
}

export function level3Task<T extends object>(data: T): Readonly<T> {
  return Object.freeze({ ...data });
}


// ----------------------------------------------------------------------------
// Automated Verification Suite
// ----------------------------------------------------------------------------
export async function verifyDay16(): Promise<boolean> {
  console.log("Verifying Day 16 Exercises (Classes, Access Modifiers & readonly)...");

  if (level1Task("001", "Ada") !== "User Ada (001)") throw new Error("L1 failed");
  if (level2Task(100, 50, 30) !== 120) throw new Error("L2 failed");
  const obj = level3Task({ x: 10 });
  if (obj.x !== 10) throw new Error("L3 failed");


  console.log(" Day 16: All exercises verified successfully!\n");
  return true;
}

if (process.argv[1] && new RegExp("16_Day_Classes[/\\\\]exercise\\.[tj]s$", "i").test(process.argv[1])) {
  verifyDay16();
}
