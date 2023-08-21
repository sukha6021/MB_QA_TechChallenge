class CookieBanner {
  acceptCookies() {
    // Wait for the accept button to be visible and clickable
    cy.get('[data-test="handle-accept-all-button"]')
      .contains("Agree to all")
      .should('be.visible')
      .click({ force: true }, { multiple: true });
  }
}

export default new CookieBanner();
