import loginUsers from "../fixtures/loginUsers.json";
import { LoginAssertions } from "../support/assertions/loginAssertions";
import { TAGS } from "../support/helpers/tags";

describe("Login Scenarios", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  loginUsers.forEach((testCase) => {
    const tag = testCase.expectedSuccess
      ? TAGS.smoke
      : TAGS.negative;

    it(`${tag} ${testCase.testId} - ${testCase.description}`, () => {
      cy.env(["users"]).then(({ users }) => {
        const username = users[testCase.usernameKey];

        cy.loginAs(username);

        if (testCase.expectedSuccess) {
          LoginAssertions.verifySuccessfulLogin();
        } else {
          LoginAssertions.verifyLoginError(
            testCase.errorMessage!
          );
        }
      });
    });
  });
});