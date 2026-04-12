# SauceDemo Cypress automation

End-to-end tests for [Sauce Demo](https://www.saucedemo.com/) using **Cypress 15**, **TypeScript**, **Page Object Model**, a small **assertions** layer, **data-driven fixtures**, and **Allure** reporting.

## Prerequisites

- **Node.js** 18+ (project has been run on Node 22; use an LTS that matches your team)
- **npm** 9+

## Setup

```bash
npm install
```

### Environment and secrets

Credentials and URLs are read from [`cypress.env.json`](cypress.env.json) (and can be overridden by CI variables). keep `cypress.env.json` out of version control if it contains sensitive data (this repo’s sample uses the public demo password).

Expected keys:

| Key        | Purpose |
| ---------- | ------- |
| `baseUrl`  | Optional; app URL (Cypress config also sets `e2e.baseUrl`). |
| `password` | Shared demo password for all users. |
| `users`    | Map of logical keys → usernames (e.g. `standard_user`, `locked_out_user`). |

Tests resolve users with `cy.env(["users"])` and the password with `cy.env(["password"])` so values stay off hard-coded strings in specs.

## Scripts

| Command | Description |
| ------- | ----------- |
| `npm run cy:open` | Open Cypress Test Runner (interactive). |
| `npm run cy:run` | Run all specs headlessly (Electron). |
| `npm run test:allure` | Run tests then generate Allure HTML under `allure-report/`. |
| `npm run allure:generate` | Generate report from existing `allure-results/`. |
| `npm run allure:open` | Open the generated Allure report (requires prior generate). |

Typecheck (no emit):

```bash
npx tsc --noEmit
```

## Project layout

```text
cypress/
  e2e/                 # Specs (*.cy.ts)
  fixtures/            # JSON data for data-driven tests
  pages/               # Page objects: actions only (clicks, fills, navigation)
  support/
    assertions/        # Reusable visibility/text/URL checks
    commands.ts        # Custom commands (e.g. cy.loginAs)
    selectors.ts       # Central selectors, routes, stable copy
    checkout-helper.ts # Shared flows (e.g. open checkout step one)
    e2e.ts             # Support entry (imports commands + Allure)
  types/
    fixtures.ts        # TypeScript types for fixture JSON
```

**Design choices**

- **Pages** expose user flows and DOM interaction; they import **selectors** from [`cypress/support/selectors.ts`](cypress/support/selectors.ts) instead of duplicating CSS strings.
- **Assertions** (`support/assertions/*`) hold `should` chains used across specs so expectations stay consistent.
- **Custom commands** in [`cypress/support/commands.ts`](cypress/support/commands.ts) wrap login; `cy.loginAs(username, { visit: false })` skips `cy.visit` when the spec already opened the login page.

## Test coverage (high level)

- Login: positive and negative cases (data-driven from [`cypress/fixtures/loginUsers.json`](cypress/fixtures/loginUsers.json)).
- Cart: add item, badge, cart contents.
- Checkout: happy path, negative validation, edge inputs (fixtures under `cypress/fixtures/`).

## Tags

Titles can include tags from [`cypress/support/helpers/tags.ts`](cypress/support/helpers/tags.ts) (e.g. `@smoke`, `@negative`).

## Allure reporting

The suite uses [`@shelex/cypress-allure-plugin`](https://github.com/Shelex/cypress-allure-plugin). Allure is enabled via `env` in [`cypress.config.ts`](cypress.config.ts) (`allure`, `allureResultsPath`).