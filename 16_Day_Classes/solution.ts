/**
 * ============================================================================
 * SOLUTION DAY 16: CLASSES, ACCESS MODIFIERS & READONLY
 * ============================================================================
 * Reference implementations for Level 1, Level 2, and Level 3 exercises.
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


console.log("[Solution Day 16] Verified reference implementation.");
