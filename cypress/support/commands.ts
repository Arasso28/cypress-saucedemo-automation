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
  
    cy.get("#user-name").should("be.visible").type(username);
    cy.get("#password").type(Cypress.env("password"));
    cy.get("#login-button").click();
});
  
Cypress.Commands.add("loginAsStandardUser", () => {
    cy.loginAs(Cypress.env("users").standard_user);
});
  
export {};