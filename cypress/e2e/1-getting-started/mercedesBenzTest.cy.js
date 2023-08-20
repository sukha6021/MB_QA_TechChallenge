describe('Mercedes-Benz Test', () => {
  it('Validate A Class models price are between £15,000 and £60,000', () => {
    cy.viewport(1280, 800);
    // Visit Mercedes-Benz UK website
    cy.visit('https://www.mercedes-benz.co.uk');
    // Accept Cookies
    cy.acceptCookies();
    // Open Mercedes-benz United Kingdom market
    cy.selectVehicleModel('Hatchback',"A-Class Hatchback");
    
    // Filter by Fuel type “Diesel”
    cy.filterByFuelType('Diesel');

    // Take a screenshot of the results
    cy.get('.cc-motorization-comparison-wrapper').screenshot('results');

    // Save the value “£” of the highest and lowest price results in a text file
    cy.savePricesToFile();

    // Validate prices are within the range
    cy.get('.cc-motorization-header__price--with-environmental-hint').should(($prices) => {
      const prices = $prices.toArray().map((el) => parseFloat(el.innerText.replace('£', '').replace(',', '')));
      const lowestPrice = Math.min(...prices);
      const highestPrice = Math.max(...prices);

      expect(lowestPrice).to.be.at.least(15000);
      expect(highestPrice).to.be.at.most(65000);
    });
  });
});
