import InventoryPage from "../pages/InventoryPage";
import CartPage from "../pages/CartPage";
import CheckoutPage from "../pages/CheckoutPage";

describe("Checkout Flow", () => {
  it("should complete checkout successfully", () => {
    cy.loginAsStandardUser();

    InventoryPage.selectFirstProduct();
    InventoryPage.goToCart();

    CartPage.verifySelectedProductInCart();
    CartPage.clickCheckout();

    CheckoutPage.fillInformation("QA", "Engineer", "12345");
    CheckoutPage.continueCheckout();
    CheckoutPage.finishCheckout();

    CheckoutPage.verifySuccessMessage();
    CheckoutPage.backHome();
  });
});