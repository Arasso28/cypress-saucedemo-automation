import {
  inventoryCopy,
  inventorySelectors
} from "../support/selectors";

class InventoryPage {
  selectFirstProduct() {
    cy.get(inventorySelectors.itemName)
      .first()
      .invoke("text")
      .then((name) => cy.wrap(name).as("selectedProduct"));

    cy.get(inventorySelectors.itemPrice)
      .first()
      .invoke("text")
      .then((price) => cy.wrap(price).as("selectedPrice"));

    cy.contains("button", inventoryCopy.addToCart).first().click();
  }

  goToCart() {
    cy.get(inventorySelectors.cartLink).click();
  }
}
  
export default new InventoryPage();