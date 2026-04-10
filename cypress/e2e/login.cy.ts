import LoginPage from "../pages/LoginPage";

describe("Login Scenarios", () => {
  it("should login successfully", () => {
    cy.loginAsStandardUser();
    LoginPage.verifySuccessfulLogin();
  });

  it("should show locked user error", () => {
    cy.env(["users"]).then(({ users }) => {
        cy.loginAs(users.locked_out_user);
    });

    LoginPage.verifyErrorMessage(
      "Epic sadface: Sorry, this user has been locked out."
    );
  });
});