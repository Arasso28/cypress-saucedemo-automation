import edgeCasesJson from "../fixtures/checkoutEdgeCases.json";
import CheckoutPage from "../pages/CheckoutPage";
import { prepareCheckoutStepOne } from "../support/checkout-helper";
import type { CheckoutEdgeFixture } from "../types/fixtures";

const edgeCases = edgeCasesJson as readonly CheckoutEdgeFixture[];

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
      cy.url().should("include", testCase.expectedUrl);
    });
  });
});