import { cartSelectors, inventorySelectors } from "../selectors";

export class CartAssertions {
  static verifyCartBadge(count: string) {
    cy.get(cartSelectors.badge).should("have.text", count);
  }

  static verifyQuantity(quantity: string) {
    cy.get(cartSelectors.quantity).should("have.text", quantity);
  }

  static verifyProductName(aliasName: string) {
    cy.get(aliasName).then((subject: unknown) => {
      // Alias may yield a plain string (e.g. from .invoke("text") + .as()) or a DOM subject.
      const raw =
        typeof subject === "string"
          ? subject
          : Cypress.$(subject as JQuery<HTMLElement> | Element).text();
      const productName = raw.trim();

      cy.get(inventorySelectors.itemName).should(
        "have.text",
        productName
      );
    });
  }
}