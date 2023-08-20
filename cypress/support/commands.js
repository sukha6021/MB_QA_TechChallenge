Cypress.Commands.add('acceptCookies', () => {
  cy.wait(10000)
    cy.get('[data-test="handle-accept-all-button"]')
      .contains("Agree to all")
      .click({ force: true }, { multiple: true });
});

Cypress.Commands.add('selectVehicleModel', (modelName,vehicleClass) => {
    cy.get("p").contains("Our models").click();
    cy.get("p").contains(modelName).click();
    cy.get("p").contains(vehicleClass).trigger("mouseover").click();
    cy.get(".owc-stage-cta-buttons").contains("Build your car").click();
    cy.get(".cc-navigation__item").contains("Model").click();
});

Cypress.Commands.add('filterByFuelType', (fuelType) => {
  cy.contains(fuelType).scrollIntoView().click({ force: true });;
});

Cypress.Commands.add('savePricesToFile', () => {
  cy.get('.cc-motorization-header__price--with-environmental-hint').then(($prices) => {
    const prices = $prices.toArray().map((el) => parseFloat(el.innerText.replace('£', '').replace(',', '')));
    const lowestPrice = Math.min(...prices);
    const highestPrice = Math.max(...prices);

    cy.writeFile('prices.txt', `Lowest Price: £${lowestPrice}\nHighest Price: £${highestPrice}`);
  });
});


Cypress.on("uncaught:exception", (error, runnable) => false);