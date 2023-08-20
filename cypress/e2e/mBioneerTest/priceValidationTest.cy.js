// Correct import paths
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
        SavePrice.savePricesToFile(lowestPrice, highestPrice); // Pass the values as arguments
  
        // Use the values from the fixture
        expect(lowestPrice).to.be.at.least(prices.minPrice);
        expect(highestPrice).to.be.at.most(prices.maxPrice);
      });
    });
  });
