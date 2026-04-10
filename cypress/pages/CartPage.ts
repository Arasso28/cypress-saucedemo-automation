class CartPage {
    verifySelectedProductInCart() {
        cy.get("@selectedProduct").then((name) => {
            cy.get(".inventory_item_name").should("have.text", name as unknown as string);
        });
  
        cy.get(".cart_quantity").should("have.text", "1");
    }
  
    clickCheckout() {
        cy.get("#checkout").click();
    }
}
  
export default new CartPage();