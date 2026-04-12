import InventoryPage from "../pages/InventoryPage";
import CartPage from "../pages/CartPage";
import CheckoutPage from "../pages/CheckoutPage";
import {
  generateRandomString,
  generateRandomInteger
} from "../support/utils";

describe("Checkout Flow", () => {
  beforeEach(() => {
    cy.loginAsStandardUser();
    InventoryPage.selectFirstProduct();
    InventoryPage.goToCart();
    CartPage.clickCheckout();
  });

  it("TC_CHECKOUT_001 - should complete checkout successfully", () => {
    const firstName = generateRandomString(6);
    const lastName = generateRandomString(8);
    const postalCode = generateRandomInteger();

    cy.allure().step("Fill checkout form with random data", true);
    CheckoutPage.fillInformation(
      firstName,
      lastName,
      postalCode
    );

    cy.allure().step("Continue checkout", true);
    CheckoutPage.continueCheckout();

    cy.get(".summary_info")
      .should("be.visible");

    cy.allure().step("Finish order", true);
    CheckoutPage.finishCheckout();

    cy.allure().step("Verify success message", true);
    CheckoutPage.verifySuccessMessage();

    CheckoutPage.backHome();
  });
});