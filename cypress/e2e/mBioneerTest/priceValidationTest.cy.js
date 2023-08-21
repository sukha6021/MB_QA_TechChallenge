/**
 * Mercedes-Benz Test Script
 *
 * This Cypress test script automates the validation of A-Class model prices on the Mercedes-Benz website.
 * It ensures that the prices are within the configured range and saves the lowest and highest prices to a file.
 *
 * Prerequisites:
 * - The website should have a cookie banner that can be accepted.
 *
 * Steps:
 * 1. Accept cookies using the CookieBanner page object.
 * 2. Select the A-Class Hatchback model using the VehicleSelection page object.
 * 3. Filter by fuel type  Diesel using the Filters page object.
 * 4. Take a screenshot of the results.
 * 5. Save the lowest and highest prices to a file using the SavePrice page object.
 * 6. Compare the prices to the configured range from the 'prices.json' fixture.
 * - The 'prices.json' fixture contains the configured price range (minPrice and maxPrice).
 *
 */

import CookieBanner from '../../pageObjects/cookiesBanner';
import VehicleSelection from '../../pageObjects/vehicleSelection';
import Filters from '../../pageObjects/filters';
import SavePrice from '../../pageObjects/savePriceToFiles';
import prices from '../../fixtures/prices.json';

describe('Mercedes-Benz Test', () => {
  before(() => {
    cy.viewport(1280, 800);
    cy.visit('/');
    CookieBanner.acceptCookies();
  });

  it('Validate A Class models price are within the configured range', () => {
    VehicleSelection.selectModel('Hatchback', 'A-Class Hatchback');
    Filters.filterByFuelType('Diesel');
    
    cy.get('.cc-motorization-comparison-wrapper').screenshot('results');

    SavePrice.savePricesToFile();
    cy.get('.cc-motorization-header__price--with-environmental-hint').then(($prices) => {
        const pricesArray = $prices.toArray().map((el) => parseFloat(el.innerText.replace('£', '').replace(',', '')));
        const lowestPrice = Math.min(...pricesArray);
        const highestPrice = Math.max(...pricesArray);
  
        // Call the SavePrice function and pass the lowest and highest prices
        SavePrice.savePricesToFile(lowestPrice, highestPrice); 
  
        // Use the values from the fixture
        expect(lowestPrice).to.be.at.least(prices.minPrice);
        expect(highestPrice).to.be.at.most(prices.maxPrice);
      });
    });
  });
