/**
 * SavePrice Class
 * 
 * This class provides a method for saving the lowest and highest prices to the "prices.txt" file.
 * It formats the price data and uses Cypress's 'cy.writeFile' to save the data to the file.
 * 
 * @class SavePrice
 * @static
 */
class SavePrice {
  static savePricesToFile(lowestPrice, highestPrice) {
    const priceData = `Lowest Price: £${lowestPrice}\nHighest Price: £${highestPrice}`;

    // Use 'cy.writeFile' inside a 'then' block
    cy.writeFile("prices.txt", priceData).then(() => {
      cy.log("Prices saved to prices.txt");
    });
  }
}

export default SavePrice;
