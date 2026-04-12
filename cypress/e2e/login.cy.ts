import LoginPage from "../pages/LoginPage";
import loginUsers from "../fixtures/loginUsers.json";

describe("Data-Driven Login Scenarios", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  loginUsers.forEach((testCase) => {
    it(`${testCase.testId} - ${testCase.description}`, () => {
      cy.allure().step("Fetch user credentials", true);

      cy.env(["users"]).then(({ users }) => {
        const username = users[testCase.usernameKey];

        cy.allure().step(`Login with ${username}`, true);
        cy.loginAs(username);

        if (testCase.expectedSuccess) {
          LoginPage.verifySuccessfulLogin();

          cy.get(".inventory_item")
            .should("have.length.greaterThan", 0);

          if (
            testCase.usernameKey === "visual_user"
          ) {
            cy.get(".app_logo")
              .should("be.visible");
          }

          if (
            testCase.usernameKey === "problem_user"
          ) {
            cy.get(".inventory_item img")
              .first()
              .should("be.visible");
          }
        } else {
          LoginPage.verifyErrorMessage(
            testCase.errorMessage!
          );
        }
      });
    });
  });
});