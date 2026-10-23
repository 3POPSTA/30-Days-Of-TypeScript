# 📘 Day 17: Challenge Solutions & Explanations

Welcome to the solution guide for **Day 17: Abstract Classes, override & Polymorphism**!

---

## 🎯 Challenge 1 & 2: Abstract Base Class & Concrete Implementations

### Solution
```typescript
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
    if (taxableIncome <= 50000) {
      return taxableIncome * 0.1;
    }
    return 5000 + (taxableIncome - 50000) * 0.2;
  }
}
```

### 💡 Why This Works
- An `abstract class` cannot be directly instantiated (`new TaxCalculator()` errors).
- The `override` keyword ensures that the method actually exists in the base class, protecting against typos.

---

## 🎯 Challenge 3: Template Method Pattern

### Solution
```typescript
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
```

---

## 🎯 Challenge 4: Polymorphic Collection Runner

### Solution
```typescript
export function computeTaxComparison(calculators: TaxCalculator[], income: number): string[] {
  return calculators.map(c => c.formatTax(income));
}
```

---

## 🚀 Next Steps
Advance to **Day 18: Enums & Object Literals as const**!
