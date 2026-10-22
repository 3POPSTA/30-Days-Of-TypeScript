/**
 * ============================================================================
 * DAY 16: CLASSES, ACCESS MODIFIERS & READONLY — CODING CHALLENGES
 * ============================================================================
 * TypeScript brings enterprise OOP features to ES6 classes:
 * - Access modifiers: public (default), private (# or private), protected
 * - Parameter properties (concise constructors)
 * - Readonly fields and smart getters/setters
 * - Static factory methods
 *
 * Test with:
 *   npx tsx 16_Day_Classes/challenge.ts
 *   OR
 *   npm run challenge:16
 * ============================================================================
 */

console.log("\n=======================================================");
console.log("  DAY 16: CHALLENGE VERIFICATION RUNNER");
console.log("=======================================================\n");

function testCheck(step: string, passed: boolean, details?: string): void {
  if (passed) {
    console.log(`  [PASS] ${step}${details ? ` -> ${details}` : ""}`);
  } else {
    console.log(`  [WAIT] ${step} (Needs attention)${details ? ` -> ${details}` : ""}`);
  }
}

// ============================================================================
// STEP 1: Parameter Properties & Private State
// ============================================================================
/**
 * CHALLENGE 1:
 * Create a class 'BankAccount' using parameter properties in its constructor:
 *   - public readonly accountNumber: string
 *   - protected ownerName: string
 *   - private _balance: number
 * 
 * Implement methods:
 *   - getBalance(): number (returns _balance)
 *   - deposit(amount: number): void (if amount > 0, adds to _balance)
 *   - withdraw(amount: number): boolean (if amount > 0 and amount <= _balance, subtracts and returns true; otherwise false)
 */
// >>> YOUR CODE HERE <<<
export class BankAccount {
  constructor(
    public readonly accountNumber: string,
    protected ownerName: string,
    private _balance: number
  ) {}

  getBalance(): number {
    // TODO: Replace with your implementation
    return this._balance;
  }

  deposit(amount: number): void {
    // TODO: Replace with your implementation
    if (amount > 0) {
      this._balance += amount;
    }
  }

  withdraw(amount: number): boolean {
    // TODO: Replace with your implementation
    if (amount > 0 && amount <= this._balance) {
      this._balance -= amount;
      return true;
    }
    return false;
  }
}


// ============================================================================
// STEP 2: Smart Getters & Setters with Validation
// ============================================================================
/**
 * CHALLENGE 2:
 * Create a class 'Temperature':
 *   - private field: _celsius (number)
 *   - constructor initializes _celsius
 *   - getter 'celsius': returns _celsius
 *   - setter 'celsius': sets _celsius if value >= -273.15 (absolute zero);
 *     otherwise throws an Error("Below absolute zero!")
 *   - getter 'fahrenheit': returns (celsius * 9) / 5 + 32
 */
// >>> YOUR CODE HERE <<<
export class Temperature {
  private _celsius: number;

  constructor(initialCelsius: number) {
    this._celsius = initialCelsius;
  }

  get celsius(): number {
    // TODO: Replace with your implementation
    return this._celsius;
  }

  set celsius(val: number) {
    // TODO: Replace with your implementation
    if (val < -273.15) {
      throw new Error("Below absolute zero!");
    }
    this._celsius = val;
  }

  get fahrenheit(): number {
    // TODO: Replace with your implementation
    return (this._celsius * 9) / 5 + 32;
  }
}


// ============================================================================
// STEP 3: Static Utility Members & Factory Pattern
// ============================================================================
/**
 * CHALLENGE 3:
 * Create a class 'IdGenerator':
 *   - private static sequence: number = 0;
 *   - static generate(prefix: string): string => `${prefix}_${++sequence}`
 *   - static reset(): void => resets sequence to 0
 */
// >>> YOUR CODE HERE <<<
export class IdGenerator {
  private static sequence = 0;

  static generate(prefix: string): string {
    // TODO: Replace with your implementation
    return `${prefix}_${++IdGenerator.sequence}`;
  }

  static reset(): void {
    // TODO: Replace with your implementation
    IdGenerator.sequence = 0;
  }
}


// ============================================================================
// STEP 4: Protected Inheritance
// ============================================================================
/**
 * CHALLENGE 4:
 * Create a subclass 'SavingsAccount' that extends 'BankAccount':
 *   - constructor takes (accountNumber: string, ownerName: string, initialBalance: number, interestRate: number)
 *   - method 'applyInterest(): void' => deposits (getBalance() * interestRate)
 *   - method 'getAccountSummary(): string' => returns `Owner: ${this.ownerName}, Balance: $${this.getBalance()}`
 */
// >>> YOUR CODE HERE <<<
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
    // TODO: Replace with your implementation
    const interest = this.getBalance() * this.interestRate;
    this.deposit(interest);
  }

  getAccountSummary(): string {
    // TODO: Replace with your implementation
    return `Owner: ${this.ownerName}, Balance: $${this.getBalance()}`;
  }
}


// ============================================================================
// VERIFICATION TEST SUITE
// ============================================================================
console.log("Verifying Step 1 (BankAccount)...");
const acc = new BankAccount("AC123", "Ada", 100);
acc.deposit(50);
const didWithdraw = acc.withdraw(30);
testCheck("Step 1 - deposit and withdraw", didWithdraw === true && acc.getBalance() === 120);

console.log("\nVerifying Step 2 (Temperature)...");
const temp = new Temperature(25);
testCheck("Step 2.1 - fahrenheit calculation", temp.fahrenheit === 77);
temp.celsius = 0;
testCheck("Step 2.2 - freezing point", temp.fahrenheit === 32);

console.log("\nVerifying Step 3 (IdGenerator)...");
IdGenerator.reset();
const id1 = IdGenerator.generate("user");
const id2 = IdGenerator.generate("user");
testCheck("Step 3 - IdGenerator sequence", id1 === "user_1" && id2 === "user_2");

console.log("\nVerifying Step 4 (SavingsAccount)...");
const sav = new SavingsAccount("SA999", "Grace", 1000, 0.05);
sav.applyInterest();
testCheck("Step 4 - SavingsAccount interest", sav.getBalance() === 1050 && sav.getAccountSummary().includes("Grace"));

console.log("\n[Summary] Day 16 challenge checks completed!\n");
