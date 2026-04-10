class LoginPage {
    verifySuccessfulLogin() {
      cy.url().should("include", "/inventory.html");
      cy.contains(".title", "Products").should("be.visible");
    }
  
    verifyErrorMessage(message: string) {
      cy.get('[data-test="error"]')
            .should("be.visible")
            .and("contain", message);
    }
}
  
export default new LoginPage();