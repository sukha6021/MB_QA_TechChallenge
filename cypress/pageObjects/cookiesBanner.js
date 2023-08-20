class CookieBanner {
  acceptCookies() {
    cy.wait(10000);
    cy.get('[data-test="handle-accept-all-button"]')
      .contains("Agree to all")
      .click({ force: true }, { multiple: true });
  }
}

export default new CookieBanner();
