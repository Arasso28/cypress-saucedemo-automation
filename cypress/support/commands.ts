import type { SauceDemoUsers } from "../types/fixtures";
import { loginSelectors } from "./selectors";

declare global {
  namespace Cypress {
    interface Chainable {
      loginAs(
        username: string,
        options?: { visit?: boolean }
      ): Chainable<void>;
      loginAsStandardUser(): Chainable<void>;
    }
  }
}

Cypress.Commands.add("loginAs", (username: string, options = {}) => {
  const { visit = true } = options;
  if (visit) {
    cy.visit("/");
  }

  cy.get(loginSelectors.username)
    .should("be.visible")
    .clear()
    .type(username);

  cy.env(["password"]).then(({ password }) => {
    cy.get(loginSelectors.password)
      .should("be.visible")
      .clear()
      .type(password);
  });

  cy.get(loginSelectors.submitButton)
    .should("be.visible")
    .click();
});

Cypress.Commands.add("loginAsStandardUser", () => {
  cy.env(["users"]).then(({ users }) => {
    cy.loginAs((users as SauceDemoUsers).standard_user);
  });
});

export {};