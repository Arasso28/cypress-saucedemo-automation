import InventoryPage from "../pages/InventoryPage";
import CartPage from "../pages/CartPage";
import CheckoutPage from "../pages/CheckoutPage";

describe("Checkout Negative Scenarios", () => {
  beforeEach(() => {
    cy.loginAsStandardUser();
    InventoryPage.selectFirstProduct();
    InventoryPage.goToCart();
    CartPage.clickCheckout();
  });

  it("TC_CHECKOUT_002 - missing first name", () => {
    CheckoutPage.fillInformation("", "Engineer", "12345");
    CheckoutPage.continueCheckout();

    cy.get('[data-test="error"]')
      .should("contain", "First Name is required");
  });

  it("TC_CHECKOUT_003 - missing last name", () => {
    CheckoutPage.fillInformation("QA", "", "12345");
    CheckoutPage.continueCheckout();

    cy.get('[data-test="error"]')
      .should("contain", "Last Name is required");
  });

  it("TC_CHECKOUT_004 - missing postal code", () => {
    CheckoutPage.fillInformation("QA", "Engineer", "");
    CheckoutPage.continueCheckout();

    cy.get('[data-test="error"]')
      .should("contain", "Postal Code is required");
  });
});