// Select vehicle models and Fuel
class VehicleSelection {
  selectModel(vehicleType, modelName) {
    cy.get("p").contains("Our models").click();
    cy.get("p").contains(vehicleType).click();
    cy.get("p").contains(modelName).trigger("mouseover").click();
    cy.get(".owc-stage-cta-buttons").contains("Build your car").click();
    cy.get(".cc-navigation__item").contains("Model").click();
  }
}

export default new VehicleSelection();
