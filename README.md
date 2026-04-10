# SauceDemo Automation Framework

Automation test solution for SauceDemo using **Cypress + POM + Custom Commands**.

## Tech Stack
- Cypress
- TypeScript
- Page Object Model (POM)

## Test Coverage
- Login positive & negative scenarios
- Add product to cart
- End-to-end checkout flow
- Negative checkout validations

## Run Project
```bash
npm install
npm run cy:open
```

## Run Headless
```bash
npm run cy:run
```

## Framework Design
- Reusable custom commands
- Centralized selectors with POM
- Environment-based credential management
- Scalable test structure