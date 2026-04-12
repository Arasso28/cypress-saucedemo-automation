export class LoginAssertions {
    static verifySuccessfulLogin() {
      cy.url().should("include", "/inventory.html");
  
      cy.contains(".title", "Products")
        .should("be.visible");
  
      cy.get(".inventory_item")
        .should("have.length.greaterThan", 0);
    }
  
    static verifyLoginError(message: string) {
      cy.get('[data-test="error"]')
        .should("be.visible")
        .and("contain", message);
    }
  }