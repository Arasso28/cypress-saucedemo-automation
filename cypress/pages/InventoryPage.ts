class InventoryPage {
    selectFirstProduct() {
        cy.get(".inventory_item_name")
            .first()
            .invoke("text")
            .then((name) => cy.wrap(name).as("selectedProduct"));
  
        cy.get(".inventory_item_price")
            .first()
            .invoke("text")
            .then((price) => cy.wrap(price).as("selectedPrice"));
  
        cy.contains("button", "Add to cart").first().click();
    }
  
    goToCart() {
        cy.get(".shopping_cart_link").click();
    }
  }
  
export default new InventoryPage();