/**
 * Types for JSON fixtures used in data-driven specs.
 * Import JSON, then cast: `const rows = data as readonly SomeFixture[]`.
 */

export type SauceDemoUsernameKey =
  | "standard_user"
  | "locked_out_user"
  | "problem_user"
  | "performance_glitch_user"
  | "error_user"
  | "visual_user";

/** Usernames from `cypress.env.json` → `users` (cy.env). */
export type SauceDemoUsers = Record<SauceDemoUsernameKey, string>;

export type LoginScenarioFixture = {
  testId: string;
  usernameKey: SauceDemoUsernameKey;
  description: string;
  expectedSuccess: boolean;
  errorMessage?: string;
};

export type CheckoutNegativeFixture = {
  testId: string;
  description: string;
  firstName: string;
  lastName: string;
  postalCode: string;
  expectedError: string;
};

export type CheckoutEdgeFixture = {
  testId: string;
  description: string;
  firstName: string;
  lastName: string;
  postalCode: string;
  expectedUrl: string;
};
