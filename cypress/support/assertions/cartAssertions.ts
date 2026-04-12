export class CartAssertions {
    static verifyCartBadge(count: string) {
      cy.get(".shopping_cart_badge")
        .should("have.text", count);
    }
  
    static verifyQuantity(quantity: string) {
      cy.get(".cart_quantity")
        .should("have.text", quantity);
    }
  
    static verifyProductName(aliasName: string) {
      cy.get(aliasName).then(($el) => {
        const productName = $el.text().trim();
        cy.get(".inventory_item_name")
          .should("have.text", productName);
      });
    }
  }