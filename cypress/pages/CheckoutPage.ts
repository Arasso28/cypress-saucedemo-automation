class CheckoutPage {
    fillInformation(first: string, last: string, zip: string) {
      const setField = (selector: string, value: string) => {
        cy.get(selector)
          .clear()
          .then(($el) => {
            if (value !== "") {
              cy.wrap($el).type(value);
            }
          });
      };

      setField("#first-name", first);
      setField("#last-name", last);
      setField("#postal-code", zip);
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