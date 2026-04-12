export class CheckoutAssertions {
    static verifyValidationError(message: string) {
      cy.get('[data-test="error"]')
        .should("be.visible")
        .and("contain", message);
    }
  
    static verifyCheckoutStepTwo() {
      cy.url().should(
        "include",
        "/checkout-step-two.html"
      );
  
      cy.get(".summary_info")
        .should("be.visible");
    }
  
    static verifySuccessMessage() {
      cy.get(".complete-header")
        .should(
          "have.text",
          "Thank you for your order!"
        );
    }
  }