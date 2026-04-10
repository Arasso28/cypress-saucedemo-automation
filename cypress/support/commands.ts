declare global {
  namespace Cypress {
    interface Chainable {
      loginAs(username: string): Chainable<void>;
      loginAsStandardUser(): Chainable<void>;
    }
  }
}

Cypress.Commands.add("loginAs", (username: string) => {
  cy.visit("/");

  cy.get("#user-name")
    .should("be.visible")
    .clear()
    .type(username);

  cy.env(["password"]).then(({ password }) => {
    cy.get("#password")
      .should("be.visible")
      .clear()
      .type(password);
  });

  cy.get("#login-button")
    .should("be.visible")
    .click();
});

Cypress.Commands.add("loginAsStandardUser", () => {
  cy.env(["users"]).then(({ users }) => {
    cy.loginAs(users.standard_user);
  });
});

export {};