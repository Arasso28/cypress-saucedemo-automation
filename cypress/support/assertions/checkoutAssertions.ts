import {
  checkoutSelectors,
  errorSelectors,
  orderCopy,
  routes
} from "../selectors";

export class CheckoutAssertions {
  static verifyValidationError(message: string) {
    cy.get(errorSelectors.banner)
      .should("be.visible")
      .and("contain", message);
  }

  static verifyCheckoutStepTwo() {
    cy.url().should("include", routes.checkoutStepTwo);

    cy.get(checkoutSelectors.summaryInfo).should("be.visible");
  }

  static verifySuccessMessage() {
    cy.get(checkoutSelectors.completeHeader).should(
      "have.text",
      orderCopy.thankYouHeader
    );
  }
}