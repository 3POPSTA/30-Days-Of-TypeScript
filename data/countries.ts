/**
 * ============================================================================
 * SHARED DATASET: COUNTRIES DATA
 * ============================================================================
 * Strongly typed countries dataset used across 30 Days of TypeScript exercises.
 */

export interface Country {
  name: string;
  capital: string;
  languages: string[];
  population: number;
  flag: string;
  currency: string;
  region: "Africa" | "Americas" | "Asia" | "Europe" | "Oceania" | "Polar";
}

export const COUNTRIES: readonly Country[] = [
  {
    name: "Afghanistan",
    capital: "Kabul",
    languages: ["Pashto", "Dari"],
    population: 40218234,
    flag: "🇦🇫",
    currency: "AFN",
    region: "Asia"
  },
  {
    name: "Brazil",
    capital: "Brasília",
    languages: ["Portuguese"],
    population: 214326223,
    flag: "🇧🇷",
    currency: "BRL",
    region: "Americas"
  },
  {
    name: "Canada",
    capital: "Ottawa",
    languages: ["English", "French"],
    population: 38246108,
    flag: "🇨🇦",
    currency: "CAD",
    region: "Americas"
  },
  {
    name: "Denmark",
    capital: "Copenhagen",
    languages: ["Danish"],
    population: 5831404,
    flag: "🇩🇰",
    currency: "DKK",
    region: "Europe"
  },
  {
    name: "Ethiopia",
    capital: "Addis Ababa",
    languages: ["Amharic", "Oromo", "Somali", "Tigrinya"],
    population: 120283026,
    flag: "🇪🇹",
    currency: "ETB",
    region: "Africa"
  },
  {
    name: "Finland",
    capital: "Helsinki",
    languages: ["Finnish", "Swedish"],
    population: 5540720,
    flag: "🇫🇮",
    currency: "EUR",
    region: "Europe"
  },
  {
    name: "Germany",
    capital: "Berlin",
    languages: ["German"],
    population: 83129285,
    flag: "🇩🇪",
    currency: "EUR",
    region: "Europe"
  },
  {
    name: "Japan",
    capital: "Tokyo",
    languages: ["Japanese"],
    population: 125507472,
    flag: "🇯🇵",
    currency: "JPY",
    region: "Asia"
  },
  {
    name: "Kenya",
    capital: "Nairobi",
    languages: ["English", "Swahili"],
    population: 54985698,
    flag: "🇰🇪",
    currency: "KES",
    region: "Africa"
  },
  {
    name: "Norway",
    capital: "Oslo",
    languages: ["Norwegian"],
    population: 5421241,
    flag: "🇳🇴",
    currency: "NOK",
    region: "Europe"
  },
  {
    name: "Switzerland",
    capital: "Bern",
    languages: ["German", "French", "Italian", "Romansh"],
    population: 8654622,
    flag: "🇨🇭",
    currency: "CHF",
    region: "Europe"
  },
  {
    name: "United Kingdom",
    capital: "London",
    languages: ["English"],
    population: 67326569,
    flag: "🇬🇧",
    currency: "GBP",
    region: "Europe"
  },
  {
    name: "United States",
    capital: "Washington, D.C.",
    languages: ["English"],
    population: 331893745,
    flag: "🇺🇸",
    currency: "USD",
    region: "Americas"
  }
];
