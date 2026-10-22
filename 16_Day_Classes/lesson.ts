/**
 * ============================================================================
 * DAY 16: CLASSES, ACCESS MODIFIERS & READONLY
 * ============================================================================
 * Master object-oriented TypeScript with classes, public/private/protected access modifiers, readonly, and concise parameter properties.
 * Run with: npm run day:16  OR  npx tsx 16_Day_Classes/lesson.ts
 */

console.log("\n=======================================================");
console.log("  DAY 16: CLASSES, ACCESS MODIFIERS & READONLY");
console.log("=======================================================\n");

// Day 16: Classes, Access Modifiers & readonly
class BankAccount {
  constructor(
    public readonly accountNumber: string,
    private _balance: number
  ) {}

  public get balance(): number {
    return this._balance;
  }

  public deposit(amount: number): void {
    if (amount <= 0) throw new Error("Must deposit positive amount");
    this._balance += amount;
  }
}

const acct = new BankAccount("FI-12345", 500);
acct.deposit(250);
console.log("Account balance:", acct.balance);


console.log("\n[Summary] Day 16 lesson finished successfully!\n");
