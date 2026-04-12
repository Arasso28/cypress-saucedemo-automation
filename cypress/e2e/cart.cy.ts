import InventoryPage from "../pages/InventoryPage";
import CartPage from "../pages/CartPage";

describe("Cart Scenarios", () => {
  beforeEach(() => {
    cy.loginAsStandardUser();
  });

  it("TC_CART_001 - should add single product to cart", () => {
    cy.allure().step("Select first product", true);
    InventoryPage.selectFirstProduct();

    cy.allure().step("Verify cart badge", true);
    cy.get(".shopping_cart_badge")
      .should("have.text", "1");

    cy.allure().step("Go to cart", true);
    InventoryPage.goToCart();

    cy.allure().step("Verify product in cart", true );
    CartPage.verifySelectedProductInCart();
  });
});