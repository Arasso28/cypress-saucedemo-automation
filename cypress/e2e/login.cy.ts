import LoginPage from "../pages/LoginPage";

describe("Login Scenarios", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("TC_LOGIN_001 - should login successfully with standard user", () => {
    cy.allure().step("Login as standard user", true);
    cy.loginAsStandardUser();

    cy.allure().step("Verify successful login", true);
    LoginPage.verifySuccessfulLogin();

    cy.get(".inventory_item")
      .should("have.length.greaterThan", 0);
  });

  it("TC_LOGIN_002 - should show error for locked user", () => {
    cy.allure().step("Login as locked out user", true);

    cy.env(["users"]).then(({ users }) => {
      cy.loginAs(users.locked_out_user);
    });

    cy.allure().step("Verify locked out error message", true);
    LoginPage.verifyErrorMessage(
      "Epic sadface: Sorry, this user has been locked out."
    );

    cy.url().should("not.include", "/inventory.html");
  });

  it("TC_LOGIN_003 - should login with performance glitch user", () => {
    cy.env(["users"]).then(({ users }) => {
      cy.loginAs(users.performance_glitch_user);
    });

    cy.url({ timeout: 10000 })
      .should("include", "/inventory.html");

    LoginPage.verifySuccessfulLogin();
  });

  it("TC_LOGIN_004 - should login with problem user", () => {
    cy.env(["users"]).then(({ users }) => {
      cy.loginAs(users.problem_user);
    });

    LoginPage.verifySuccessfulLogin();

    cy.get(".inventory_item img")
      .first()
      .should("be.visible");
  });

  it("TC_LOGIN_005 - should login with visual user", () => {
    cy.env(["users"]).then(({ users }) => {
      cy.loginAs(users.visual_user);
    });

    LoginPage.verifySuccessfulLogin();

    cy.get(".app_logo").should("be.visible");
    cy.get(".shopping_cart_link").should("be.visible");
  });
});