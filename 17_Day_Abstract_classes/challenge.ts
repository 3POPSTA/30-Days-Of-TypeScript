/**
 * ============================================================================
 * DAY 17: ABSTRACT CLASSES, OVERRIDE & POLYMORPHISM - CODING CHALLENGES
 * ============================================================================
 * Abstract classes define incomplete base classes that cannot be instantiated directly:
 * - 'abstract' methods define signatures child classes must implement
 * - 'override' keyword ensures safe polymorphic implementation
 * - Template method pattern coordinates concrete and abstract methods
 *
 * Test with:
 *   npx tsx 17_Day_Abstract_classes/challenge.ts
 *   OR
 *   npm run challenge:17
 * ============================================================================
 */

console.log("\n=======================================================");
console.log("  DAY 17: CHALLENGE VERIFICATION RUNNER");
console.log("=======================================================\n");

function testCheck(step: string, passed: boolean, details?: string): void {
  if (passed) {
    console.log(`  [PASS] ${step}${details ? ` -> ${details}` : ""}`);
  } else {
    console.log(`  [WAIT] ${step} (Needs attention)${details ? ` -> ${details}` : ""}`);
  }
}

// ============================================================================
// STEP 1: Abstract Base Class
// ============================================================================
/**
 * CHALLENGE 1:
 * Create an abstract base class 'TaxCalculator':
 *   - abstract calculateTax(taxableIncome: number): number;
 *   - concrete formatTax(taxableIncome: number): string {
 *       const tax = this.calculateTax(taxableIncome);
 *       return `$${tax.toFixed(2)}`;
 *     }
 */
// >>> YOUR CODE HERE <<<
export abstract class TaxCalculator {
  abstract calculateTax(taxableIncome: number): number;

  formatTax(taxableIncome: number): string {
    // TODO: Replace with your implementation
    const tax = this.calculateTax(taxableIncome);
    return `$${tax.toFixed(2)}`;
  }
}


// ============================================================================
// STEP 2: Concrete Implementation with 'override'
// ============================================================================
/**
 * CHALLENGE 2:
 * Implement two concrete subclasses:
 *   1. 'FlatTaxCalculator' (extends TaxCalculator):
 *      - constructor(public readonly rate: number)
 *      - override calculateTax(income: number): return income * this.rate
 * 
 *   2. 'ProgressiveTaxCalculator' (extends TaxCalculator):
 *      - if income <= 50000: 10% (income * 0.10)
 *      - if income > 50000: 5000 + (income - 50000) * 0.20
 */
// >>> YOUR CODE HERE <<<
export class FlatTaxCalculator extends TaxCalculator {
  constructor(public readonly rate: number) {
    super();
  }

  override calculateTax(taxableIncome: number): number {
    // TODO: Replace with your implementation
    return taxableIncome * this.rate;
  }
}

export class ProgressiveTaxCalculator extends TaxCalculator {
  override calculateTax(taxableIncome: number): number {
    // TODO: Replace with your implementation
    if (taxableIncome <= 50000) {
      return taxableIncome * 0.1;
    }
    return 5000 + (taxableIncome - 50000) * 0.2;
  }
}


// ============================================================================
// STEP 3: Template Method Pattern
// ============================================================================
/**
 * CHALLENGE 3:
 * Implement an abstract class 'DocumentExporter':
 *   - generateDocument(): string {
 *       return `${this.renderHeader()}\n${this.renderBody()}\n${this.renderFooter()}`;
 *     }
 *   - protected abstract renderHeader(): string;
 *   - protected abstract renderBody(): string;
 *   - protected renderFooter(): string { return "=== END OF DOCUMENT ==="; }
 * 
 * Implement concrete class 'MarkdownDocumentExporter' that supplies the abstract methods.
 */
// >>> YOUR CODE HERE <<<
export abstract class DocumentExporter {
  generateDocument(): string {
    // TODO: Replace with your implementation
    return `${this.renderHeader()}\n${this.renderBody()}\n${this.renderFooter()}`;
  }

  protected abstract renderHeader(): string;
  protected abstract renderBody(): string;
  protected renderFooter(): string {
    return "=== END OF DOCUMENT ===";
  }
}

export class MarkdownDocumentExporter extends DocumentExporter {
  constructor(private title: string, private content: string) {
    super();
  }

  protected override renderHeader(): string {
    // TODO: Replace with your implementation
    return `# ${this.title}`;
  }

  protected override renderBody(): string {
    // TODO: Replace with your implementation
    return this.content;
  }
}


// ============================================================================
// STEP 4: Polymorphic Collection Runner
// ============================================================================
/**
 * CHALLENGE 4:
 * Write a function 'computeTaxComparison' that accepts:
 *   - calculators (TaxCalculator[]): polymorphic list of calculators
 *   - income (number)
 * 
 * Return an array of formatted tax strings from each calculator.
 */
// >>> YOUR CODE HERE <<<
export function computeTaxComparison(calculators: TaxCalculator[], income: number): string[] {
  // TODO: Replace with your implementation
  return calculators.map(c => c.formatTax(income));
}


// ============================================================================
// VERIFICATION TEST SUITE
// ============================================================================
console.log("Verifying Step 1 & 2 (Tax Calculators)...");
const flat = new FlatTaxCalculator(0.15);
const prog = new ProgressiveTaxCalculator();
testCheck("Step 2.1 - flat tax calculation", flat.calculateTax(100000) === 15000);
testCheck("Step 2.2 - progressive tax <= 50k", prog.calculateTax(40000) === 4000);
testCheck("Step 2.3 - progressive tax > 50k", prog.calculateTax(100000) === 15000);

console.log("\nVerifying Step 3 (Template Method Pattern)...");
const mdExporter = new MarkdownDocumentExporter("TypeScript 101", "Learning abstract classes");
const exported = mdExporter.generateDocument();
testCheck("Step 3 - template method", exported.includes("# TypeScript 101") && exported.includes("=== END OF DOCUMENT ==="));

console.log("\nVerifying Step 4 (computeTaxComparison)...");
const comparison = computeTaxComparison([flat, prog], 60000);
testCheck("Step 4 - comparison output", comparison[0] === "$9000.00" && comparison[1] === "$7000.00");

console.log("\n[Summary] Day 17 challenge checks completed!\n");
