import CheckoutPage from "../pages/CheckoutPage";
import InventoryPage from "../pages/InventoryPage";
import CartPage from "../pages/CartPage";

describe("Checkout Edge Cases", () => {
  beforeEach(() => {
    cy.loginAsStandardUser();
    InventoryPage.selectFirstProduct();
    InventoryPage.goToCart();
    CartPage.clickCheckout();
  });

  it("TC_CHECKOUT_005 - long string inputs", () => {
    const longName = "A".repeat(255);

    CheckoutPage.fillInformation(
      longName,
      longName,
      "12345"
    );

    CheckoutPage.continueCheckout();

    cy.url().should("include", "/checkout-step-two.html");
  });

  it("TC_CHECKOUT_006 - special characters", () => {
    CheckoutPage.fillInformation(
      "@#QA",
      "!Engineer",
      "12345"
    );

    CheckoutPage.continueCheckout();

    cy.url().should("include", "/checkout-step-two.html");
  });
});