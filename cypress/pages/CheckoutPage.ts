import { checkoutSelectors } from "../support/selectors";

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

    setField(checkoutSelectors.firstName, first);
    setField(checkoutSelectors.lastName, last);
    setField(checkoutSelectors.postalCode, zip);
  }

  continueCheckout() {
    cy.get(checkoutSelectors.continue).click();
  }

  finishCheckout() {
    cy.get(checkoutSelectors.finish).click();
  }

  backHome() {
    cy.get(checkoutSelectors.backToProducts).click();
  }
}
  
export default new CheckoutPage();