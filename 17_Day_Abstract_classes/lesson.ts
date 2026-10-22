/**
 * ============================================================================
 * DAY 17: ABSTRACT CLASSES, OVERRIDE & POLYMORPHISM
 * ============================================================================
 * Build extensible class hierarchies with abstract classes, enforce subclass contracts, and use the 'override' keyword.
 * Run with: npm run day:17  OR  npx tsx 17_Day_Abstract_classes/lesson.ts
 */

console.log("\n=======================================================");
console.log("  DAY 17: ABSTRACT CLASSES, OVERRIDE & POLYMORPHISM");
console.log("=======================================================\n");

// Day 17: Abstract Classes, override & Polymorphism
abstract class PaymentProcessor {
  constructor(public readonly currency: string) {}

  abstract processPayment(amount: number): boolean;

  // Concrete template method
  public logTransaction(amount: number): void {
    console.log(`Logged payment of ${amount} ${this.currency}`);
  }
}

class StripeProcessor extends PaymentProcessor {
  override processPayment(amount: number): boolean {
    this.logTransaction(amount);
    return true;
  }
}

const proc = new StripeProcessor("EUR");
proc.processPayment(99);


console.log("\n[Summary] Day 17 lesson finished successfully!\n");
