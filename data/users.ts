/**
 * ============================================================================
 * SHARED DATASET: USERS DATA
 * ============================================================================
 * Strongly typed users dataset used across 30 Days of TypeScript exercises.
 */

export type Role = "admin" | "editor" | "contributor" | "guest";

export interface UserAddress {
  street: string;
  city: string;
  country: string;
  postalCode: string;
}

export interface User {
  id: number;
  username: string;
  email: string;
  role: Role;
  isActive: boolean;
  score: number;
  skills: string[];
  address: UserAddress;
  createdAt: string;
}

export const USERS: readonly User[] = [
  {
    id: 1,
    username: "asabeneh",
    email: "asabeneh@example.com",
    role: "admin",
    isActive: true,
    score: 98,
    skills: ["JavaScript", "TypeScript", "Python", "React"],
    address: {
      street: "Keskuskatu 1",
      city: "Helsinki",
      country: "Finland",
      postalCode: "00100"
    },
    createdAt: "2020-01-01T08:00:00Z"
  },
  {
    id: 2,
    username: "ada_lovelace",
    email: "ada@computing.org",
    role: "admin",
    isActive: true,
    score: 100,
    skills: ["Mathematics", "Algorithms", "Logic"],
    address: {
      street: "12 St James Square",
      city: "London",
      country: "United Kingdom",
      postalCode: "SW1Y 4LB"
    },
    createdAt: "2020-02-15T10:30:00Z"
  },
  {
    id: 3,
    username: "grace_hopper",
    email: "grace@compilers.org",
    role: "editor",
    isActive: true,
    score: 95,
    skills: ["Compilers", "COBOL", "Systems"],
    address: {
      street: "Constitution Ave",
      city: "Washington",
      country: "United States",
      postalCode: "20001"
    },
    createdAt: "2020-03-10T14:20:00Z"
  },
  {
    id: 4,
    username: "linus_t",
    email: "linus@kernel.org",
    role: "editor",
    isActive: false,
    score: 92,
    skills: ["C", "Git", "Linux Kernel"],
    address: {
      street: "Mannerheimintie 10",
      city: "Helsinki",
      country: "Finland",
      postalCode: "00102"
    },
    createdAt: "2021-05-04T12:00:00Z"
  },
  {
    id: 5,
    username: "typescript_learner",
    email: "learner@typescript.io",
    role: "contributor",
    isActive: true,
    score: 80,
    skills: ["JavaScript", "HTML", "CSS"],
    address: {
      street: "Alexanderplatz 4",
      city: "Berlin",
      country: "Germany",
      postalCode: "10178"
    },
    createdAt: "2023-09-01T09:15:00Z"
  }
];
