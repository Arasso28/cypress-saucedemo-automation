import CheckoutPage from "../pages/CheckoutPage";
import edgeCases from "../fixtures/checkoutEdgeCases.json";
import { prepareCheckoutStepOne } from "../support/checkout-helper";

describe("Data-Driven Checkout Edge Scenarios", () => {
  beforeEach(() => {
    prepareCheckoutStepOne();
  });

  edgeCases.forEach((testCase) => {
    it(`${testCase.testId} - ${testCase.description}`, () => {
      cy.allure().step("Fill edge case data", true);

      CheckoutPage.fillInformation(
        testCase.firstName,
        testCase.lastName,
        testCase.postalCode
      );

      cy.allure().step("Continue checkout", true);
      CheckoutPage.continueCheckout();

      cy.allure().step("Verify navigation", true);
      cy.url().should(
        "include",
        testCase.expectedUrl
      );
    });
  });
});