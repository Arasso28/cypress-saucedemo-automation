/**
 * Central DOM routes and copy used across page objects and assertions.
 * Prefer importing from here instead of scattering selector strings.
 */
export const loginSelectors = {
  username: "#user-name",
  password: "#password",
  submitButton: "#login-button"
} as const;

export const errorSelectors = {
  banner: '[data-test="error"]'
} as const;

export const inventorySelectors = {
  itemName: ".inventory_item_name",
  itemPrice: ".inventory_item_price",
  item: ".inventory_item",
  pageTitle: ".title",
  cartLink: ".shopping_cart_link"
} as const;

export const inventoryCopy = {
  productsTitle: "Products",
  addToCart: "Add to cart"
} as const;

export const cartSelectors = {
  badge: ".shopping_cart_badge",
  quantity: ".cart_quantity",
  checkoutButton: "#checkout"
} as const;

export const checkoutSelectors = {
  firstName: "#first-name",
  lastName: "#last-name",
  postalCode: "#postal-code",
  continue: "#continue",
  finish: "#finish",
  completeHeader: ".complete-header",
  backToProducts: "#back-to-products",
  summaryInfo: ".summary_info"
} as const;

export const routes = {
  inventory: "/inventory.html",
  checkoutStepTwo: "/checkout-step-two.html"
} as const;

export const orderCopy = {
  thankYouHeader: "Thank you for your order!"
} as const;
