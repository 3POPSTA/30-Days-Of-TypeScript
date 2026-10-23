/**
 * 🎯 Day 17: Abstract Classes & Polymorphism - Coding Challenges
 *
 * Implement abstract base classes, the override keyword, and template method design patterns.
 *
 * 🚀 Run with: npm run challenge:17
 */

// ============================================================================
// 🎯 CHALLENGE 1 & 2: Abstract Base Class & Concrete Implementations
// ============================================================================
/**
 * 1. Define abstract class 'TaxCalculator':
 *    - abstract calculateTax(taxableIncome: number): number
 *    - formatTax(taxableIncome: number): string => "$${tax.toFixed(2)}"
 *
 * 2. Implement 'FlatTaxCalculator' (constructor rate: number, tax = income * rate)
 * 3. Implement 'ProgressiveTaxCalculator' (10% up to 50k, 20% on portion over 50k)
 */
// 👇 YOUR CODE HERE:
export abstract class TaxCalculator {
  abstract calculateTax(taxableIncome: number): number;

  formatTax(taxableIncome: number): string {
    const tax = this.calculateTax(taxableIncome);
    return `$${tax.toFixed(2)}`;
  }
}

export class FlatTaxCalculator extends TaxCalculator {
  constructor(public readonly rate: number) {
    super();
  }

  override calculateTax(taxableIncome: number): number {
    return taxableIncome * this.rate;
  }
}

export class ProgressiveTaxCalculator extends TaxCalculator {
  override calculateTax(taxableIncome: number): number {
    if (taxableIncome <= 50000) return taxableIncome * 0.1;
    return 5000 + (taxableIncome - 50000) * 0.2;
  }
}

// ============================================================================
// 🎯 CHALLENGE 3: Template Method Pattern
// ============================================================================
/**
 * 1. Define abstract class 'DocumentExporter':
 *    - generateDocument(): string => "${renderHeader()}\n${renderBody()}\n${renderFooter()}"
 *    - protected abstract renderHeader(): string
 *    - protected abstract renderBody(): string
 *    - protected renderFooter(): string => "=== END OF DOCUMENT ==="
 *
 * 2. Implement 'MarkdownDocumentExporter' (constructor title, content)
 */
// 👇 YOUR CODE HERE:
export abstract class DocumentExporter {
  generateDocument(): string {
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
    return `# ${this.title}`;
  }

  protected override renderBody(): string {
    return this.content;
  }
}

// ============================================================================
// 🎯 CHALLENGE 4: Polymorphic Collection Runner
// ============================================================================
/**
 * Write 'computeTaxComparison(calculators: TaxCalculator[], income: number): string[]'
 * Maps each calculator to its formatted tax string for the given income.
 */
// 👇 YOUR CODE HERE:
export function computeTaxComparison(calculators: TaxCalculator[], income: number): string[] {
  // TODO: Map calculators to formatTax(income)
  return calculators.map(c => c.formatTax(income));
}

// ============================================================================
// 🧪 TEST RUNNER - Run: npm run challenge:17
// ============================================================================
console.log("--- 🧪 Day 17 Challenge Results ---");
const flat = new FlatTaxCalculator(0.15);
const prog = new ProgressiveTaxCalculator();
console.log("Challenge 1 & 2 (Flat 100k):", flat.formatTax(100000));
console.log("Challenge 1 & 2 (Prog 100k):", prog.formatTax(100000));

const exporter = new MarkdownDocumentExporter("TypeScript Guide", "Abstract classes rock.");
console.log("Challenge 3 document:\n" + exporter.generateDocument());

console.log("Challenge 4 comparison:", computeTaxComparison([flat, prog], 80000));
console.log("-----------------------------------\n");
