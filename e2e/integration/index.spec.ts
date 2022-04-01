export {};

describe("index", () => {
  it("Website button works", () => {
    cy.visit("/");

    cy.get(`a:contains("Website")`).click();

    cy.url().should("equal", "https://tobysmith.uk/");
  });

  it("GitHub button works", () => {
    cy.visit("/");

    cy.get(`a:contains("GitHub")`).click();

    cy.url().should("equal", "https://github.com/tobysmith568");
  });
});
