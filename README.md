# MB_QATechChallenge
This Cypress automated test case validates that the prices of A-Class models are between £15,000 and £60,000, as described below:
• Open the Mercedes-Benz United Kingdom market.
• Under 'Our Models,' select 'Model: Hatchbacks.'
• Hover over the available 'A-Class' model and proceed to 'Build your car.'
• Filter by the fuel type 'Diesel.'
• Take and save a screenshot of the results.
• Save the values of the highest and lowest prices, denoted in '£,' in a text file."

1. Initialize a new Cypress project or use an existing one in your GitHub repository. You can do this by running:

   npm install cypress --save-dev


2. To run the Cypress project.
 # Run the test in the default Electron browser
    npx cypress run

# Run the test in Chrome
    npx cypress run --browser chrome

# Run the test in Firefox
    npx cypress run --browser firefox
