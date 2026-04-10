import InventoryPage from "../pages/InventoryPage";
import CartPage from "../pages/CartPage";
import CheckoutPage from "../pages/CheckoutPage";
import {
  generateRandomString,
  generateRandomInteger
} from "../support/utils";

describe("Checkout Flow", () => {
  it("should complete checkout successfully", () => {
    cy.loginAsStandardUser();

    InventoryPage.selectFirstProduct();
    InventoryPage.goToCart();

    CartPage.verifySelectedProductInCart();
    CartPage.clickCheckout();

    const firstName = generateRandomString(6);
    const lastName = generateRandomString(8);
    const postalCode = generateRandomInteger();

    cy.log(`First Name: ${firstName}`);
    cy.log(`Last Name: ${lastName}`);
    cy.log(`Postal Code: ${postalCode}`);

    CheckoutPage.fillInformation(
      firstName,
      lastName,
      postalCode
    );

    CheckoutPage.continueCheckout();
    CheckoutPage.finishCheckout();

    CheckoutPage.verifySuccessMessage();
    CheckoutPage.backHome();
  });
});