**SauceDemo E2E Test Automation – Playwright (JavaScript)**

This repository contains an end-to-end functional automation test using Playwright with JavaScript for the public demo website:
https://www.saucedemo.com/

The test automates the full user basic flow including login, product selection, cart verification, and logout.


**Test Scenario Covered**

"A user logs in with valid credentials, adds one product to the cart, verifies the product name in the cart, and logs out."

**Steps automated:**

**1**.Navigate to the SauceDemo login page

**2**.Enter valid username and password

**3**.View the full product list

**4**.Select one random product dynamically

**5**.Add the product to the cart

**6**.Navigate to the cart

**7**.Verify that the correct product appears inside the cart

**8**.Logout successfully

**9**.Ensure the user is redirected back to the login page

**Tech Stack Used**

Playwright (JavaScript)

Node.js

Visual Studio Code

Playwright HTML Reporter

GitHub for version control



## Project Structure

```
PLAYWRIGHT_WITH_JS
│
├── .github/
│   └── workflows/               # GitHub Actions workflow (optional)
│
├── node_modules/                # Auto generated dependencies
│
├── playwright-report/           # Auto generated HTML test report
│
├── test-results/                # Screenshots & trace files
│
├── tests/
│   └── sauce_demo.spec.js       # Main E2E test
│
├── .gitignore
├── package.json
├── package-lock.json
├── playwright.config.js
└── README.md
```


**How to Run This Project**
1. Clone the repository
```
git clone https://github.com/sanjidaafrin08/SauceDemo-E2E-Test-Automation
cd SauceDemo-E2E-Test-Automation
```
2. Install dependencies
```
npm install
```
3. Run the test
```
npx playwright test
```

4. View HTML report
```
npx playwright show-report
```

**Playwright Report:**

![Test Screenshot](https://drive.google.com/uc?export=view&id=1ROQqc4fnGOuUrOxab3cVmVz2eryjXOGM)



**Author**

Sanjida Afrin
Junior QA Engineer
