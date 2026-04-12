import CheckoutPage from "../pages/CheckoutPage";
import negativeCases from "../fixtures/checkoutNegativeCases.json";
import { prepareCheckoutStepOne } from "../support/checkout-helper";

describe("Data-Driven Checkout Negative Scenarios", () => {
  beforeEach(() => {
    prepareCheckoutStepOne();
  });

  negativeCases.forEach((testCase) => {
    it(`${testCase.testId} - ${testCase.description}`, () => {
      cy.allure().step("Fill invalid checkout data", true);

      CheckoutPage.fillInformation(
        testCase.firstName,
        testCase.lastName,
        testCase.postalCode
      );

      cy.allure().step("Click continue", true);
      CheckoutPage.continueCheckout();

      cy.allure().step("Verify validation error", true);
      cy.get('[data-test="error"]')
        .should("be.visible")
        .and("contain", testCase.expectedError);
    });
  });
});