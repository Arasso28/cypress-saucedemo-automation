import { CartAssertions } from "../support/assertions/cartAssertions";
import { cartSelectors } from "../support/selectors";

class CartPage {
  verifySelectedProductInCart() {
    CartAssertions.verifyProductName("@selectedProduct");
    CartAssertions.verifyQuantity("1");
  }

  clickCheckout() {
    cy.get(cartSelectors.checkoutButton).click();
  }
}
  
export default new CartPage();