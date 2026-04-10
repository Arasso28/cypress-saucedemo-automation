class CheckoutPage {
    fillInformation(first: string, last: string, zip: string) {
      cy.get("#first-name").type(first);
      cy.get("#last-name").type(last);
      cy.get("#postal-code").type(zip);
    }
  
    continueCheckout() {
      cy.get("#continue").click();
    }
  
    finishCheckout() {
      cy.get("#finish").click();
    }
  
    verifySuccessMessage() {
      cy.get(".complete-header")
        .should("have.text", "Thank you for your order!");
    }
  
    backHome() {
      cy.get("#back-to-products").click();
    }
  }
  
  export default new CheckoutPage();