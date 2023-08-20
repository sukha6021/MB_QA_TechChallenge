class SavePrice {
  static savePricesToFile(lowestPrice, highestPrice) {
    // Updated function signature
    const priceData = `Lowest Price: £${lowestPrice}\nHighest Price: £${highestPrice}`;

    // Use 'cy.writeFile' inside a 'then' block
    cy.writeFile("prices.txt", priceData).then(() => {
      cy.log("Prices saved to prices.txt");
    });
  }
}

export default SavePrice;
