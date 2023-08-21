# Mercedes-Benz Test Automation

This project automates the test case to validate A Class model prices on the Mercedes-Benz UK website.

## Running Tests locally
 
### Installation

1. Clone this repository.
    `git clone https://github.com/sukha6021/MB_QA_TechChallenge.git` 
2. Install dependencies with `npm install`.

### Running Tests

1. Execute the command `npx cypress open` to open the Cypress Test Runner.
2. Select the browser(s) you want to test on.
3. Click on the test case `priceValidationTest' to run it.

### Test Results

After running the test, screenshots will be saved in the `cypress/screenshots` directory, and price range data will be saved in `prices.txt`.

## Running Tests via github Actions
Tests can be launched from the GitHub Actions page. To do that, please follow the following steps:
1. Go to GitHub and select the 'MB_QA_TechChallenge' repository.
2. Click on the 'Actions' tab.
3. Select 'Run End-to-End' test.
4. Click on 'Automated test case to validate...'.
5. Click on 'Re-run all jobs'.


## Result via Cypress Dashboard
Cypress tests results can be viewed in a couple of dashboards for inspection and analysis.
https://cloud.cypress.io/projects/42ojgr/


## Test Output

- Screenshots of the results will be saved in the `cypress/screenshots` folder.
- Prices will be saved to a text file named `prices.txt` in the project root.

## Project Structure

- `cypress/integration/tests`: Contains the test script.
- `cypress/support/commands.js`: Contains custom Cypress commands.

## Test Case Description

1. Open Mercedes-Benz website.
2. Under "Our Models," select "Model: Hatchbacks."
3. Mouse over the "A Class" model and proceed to "Build your car."
4. Filter by Fuel type "Diesel."
5. Take and save a screenshot of the results.
6. Save the value "£" of the highest and lowest price results in a text file.

## Validation

- The test validates that A Class model prices are between £15,000 and £60,000.

## Author
Suresh Khaniya

