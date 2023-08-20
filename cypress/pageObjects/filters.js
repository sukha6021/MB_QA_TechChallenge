class Filters {
  filterByFuelType() {
    cy.get("button .label").scrollIntoView().click({ force: true });
    cy.get('input[type="checkbox"][name="Diesel"]')
      .first()
      .check({ force: true });
    cy.get(
      'ccwb-interactive-tag[type="secondary"][variant="button"][size="s"]'
    ).should("be.visible");
  }
}

export default new Filters();
