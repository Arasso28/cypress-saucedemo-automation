import negativeCasesJson from "../fixtures/checkoutNegativeCases.json";
import CheckoutPage from "../pages/CheckoutPage";
import { CheckoutAssertions } from "../support/assertions/checkoutAssertions";
import { prepareCheckoutStepOne } from "../support/checkout-helper";
import { TAGS } from "../support/helpers/tags";
import type { CheckoutNegativeFixture } from "../types/fixtures";

const negativeCases = negativeCasesJson as readonly CheckoutNegativeFixture[];

describe("Checkout Negative Scenarios", () => {
  beforeEach(() => {
    prepareCheckoutStepOne();
  });

  negativeCases.forEach((testCase) => {
    it(
      `${TAGS.negative} ${testCase.testId} - ${testCase.description}`,
      () => {
        CheckoutPage.fillInformation(
          testCase.firstName,
          testCase.lastName,
          testCase.postalCode
        );

        CheckoutPage.continueCheckout();

        CheckoutAssertions.verifyValidationError(
          testCase.expectedError
        );
      }
    );
  });
});