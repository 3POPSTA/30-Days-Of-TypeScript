export interface ExampleItem {
  title: string;
  scenario: string;
  solution: string;
  explanation: string;
}

export interface DayExamplesData {
  day: number;
  examples: ExampleItem[];
}
