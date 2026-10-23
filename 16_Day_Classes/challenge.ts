/**
 * 🎯 Day 16: Classes, Access Modifiers & readonly - Coding Challenges
 *
 * Master parameter properties, getters/setters, static members, and inheritance.
 *
 * 🚀 Run with: npm run challenge:16
 */

// ============================================================================
// 🎯 CHALLENGE 1: Parameter Properties & Private State
// ============================================================================
/**
 * Implement 'BankAccount':
 * - Constructor parameter properties:
 *   - public readonly accountNumber: string
 *   - protected ownerName: string
 *   - private _balance: number
 * - Methods:
 *   - getBalance(): number
 *   - deposit(amount: number): void (adds if amount > 0)
 *   - withdraw(amount: number): boolean (subtracts if amount > 0 && amount <= _balance, returns true/false)
 */
// 👇 YOUR CODE HERE:
export class BankAccount {
  constructor(
    public readonly accountNumber: string,
    protected ownerName: string,
    private _balance: number
  ) {}

  getBalance(): number {
    // TODO: Return _balance
    return this._balance;
  }

  deposit(amount: number): void {
    // TODO: Deposit if amount > 0
    if (amount > 0) this._balance += amount;
  }

  withdraw(amount: number): boolean {
    // TODO: Withdraw if valid and return true, else false
    if (amount > 0 && amount <= this._balance) {
      this._balance -= amount;
      return true;
    }
    return false;
  }
}

// ============================================================================
// 🎯 CHALLENGE 2: Smart Getters & Setters with Validation
// ============================================================================
/**
 * Implement 'Temperature':
 * - private _celsius: number
 * - get celsius(): number
 * - set celsius(val: number): throws Error if val < -273.15 ("Below absolute zero!")
 * - get fahrenheit(): number => (celsius * 9) / 5 + 32
 */
// 👇 YOUR CODE HERE:
export class Temperature {
  private _celsius: number;

  constructor(initialCelsius: number) {
    this._celsius = initialCelsius;
  }

  get celsius(): number {
    return this._celsius;
  }

  set celsius(val: number) {
    if (val < -273.15) throw new Error("Below absolute zero!");
    this._celsius = val;
  }

  get fahrenheit(): number {
    return (this._celsius * 9) / 5 + 32;
  }
}

// ============================================================================
// 🎯 CHALLENGE 3: Static Utility Members & Factory Pattern
// ============================================================================
/**
 * Implement 'IdGenerator':
 * - private static sequence = 0
 * - static generate(prefix: string): string => "${prefix}_${++sequence}"
 * - static reset(): void => sets sequence back to 0
 */
// 👇 YOUR CODE HERE:
export class IdGenerator {
  private static sequence = 0;

  static generate(prefix: string): string {
    return `${prefix}_${++IdGenerator.sequence}`;
  }

  static reset(): void {
    IdGenerator.sequence = 0;
  }
}

// ============================================================================
// 🎯 CHALLENGE 4: Protected Inheritance
// ============================================================================
/**
 * Implement 'SavingsAccount extends BankAccount':
 * - constructor(accountNumber, ownerName, initialBalance, private interestRate: number)
 * - applyInterest(): void => deposits (balance * interestRate)
 * - getAccountSummary(): string => "Owner: <ownerName>, Balance: $<balance>"
 */
// 👇 YOUR CODE HERE:
export class SavingsAccount extends BankAccount {
  constructor(
    accountNumber: string,
    ownerName: string,
    initialBalance: number,
    private interestRate: number
  ) {
    super(accountNumber, ownerName, initialBalance);
  }

  applyInterest(): void {
    const interest = this.getBalance() * this.interestRate;
    this.deposit(interest);
  }

  getAccountSummary(): string {
    return `Owner: ${this.ownerName}, Balance: $${this.getBalance()}`;
  }
}

// ============================================================================
// 🧪 TEST RUNNER - Run: npm run challenge:16
// ============================================================================
console.log("--- 🧪 Day 16 Challenge Results ---");
const acc = new BankAccount("AC123", "Alice", 100);
acc.deposit(50);
console.log("Challenge 1 balance:", acc.getBalance());

const temp = new Temperature(25);
console.log("Challenge 2 fahrenheit:", temp.fahrenheit);

console.log("Challenge 3 IDs:", IdGenerator.generate("user"), IdGenerator.generate("user"));

const savings = new SavingsAccount("SA99", "Bob", 1000, 0.05);
savings.applyInterest();
console.log("Challenge 4 summary:", savings.getAccountSummary());
console.log("-----------------------------------\n");
