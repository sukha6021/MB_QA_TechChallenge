const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "42ojgr",
  requestTimeout: 200000,
  responseTimeout: 200000,
  pageLoadTimeout: 200000,
  includeShadowDom: true,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://www.mercedes-benz.co.uk",
  },
});
