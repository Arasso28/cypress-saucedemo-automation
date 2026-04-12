import loginUsersJson from "../fixtures/loginUsers.json";
import { LoginAssertions } from "../support/assertions/loginAssertions";
import { TAGS } from "../support/helpers/tags";
import type {
  LoginScenarioFixture,
  SauceDemoUsers
} from "../types/fixtures";

const loginUsers = loginUsersJson as readonly LoginScenarioFixture[];

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
        const typedUsers = users as SauceDemoUsers;
        const username = typedUsers[testCase.usernameKey];

        cy.loginAs(username, { visit: false });

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