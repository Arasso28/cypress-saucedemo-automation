import InventoryPage from "../pages/InventoryPage";
import CartPage from "../pages/CartPage";

export const prepareCheckoutStepOne = () => {
  cy.allure().step("Login as standard user", true);
  cy.loginAsStandardUser();

  cy.allure().step("Add product to cart", true);
  InventoryPage.selectFirstProduct();

  cy.allure().step("Navigate to cart", true);
  InventoryPage.goToCart();

  cy.allure().step("Proceed to checkout", true);
  CartPage.clickCheckout();
};