import {
  errorSelectors,
  inventoryCopy,
  inventorySelectors,
  routes
} from "../selectors";

export class LoginAssertions {
  static verifySuccessfulLogin() {
    cy.url().should("include", routes.inventory);

    cy.contains(inventorySelectors.pageTitle, inventoryCopy.productsTitle)
      .should("be.visible");

    cy.get(inventorySelectors.item)
      .should("have.length.greaterThan", 0);
  }

  static verifyLoginError(message: string) {
    cy.get(errorSelectors.banner)
      .should("be.visible")
      .and("contain", message);
  }
}