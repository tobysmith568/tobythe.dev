export {};

describe("index", () => {
  it("Website button works", () => {
    cy.visit("/");

    cy.get(`a:contains("Website")`).should("have.attr", "href", "https://tobysmith.uk");
  });

  it("GitHub button works", () => {
    cy.visit("/");

    cy.get(`a:contains("GitHub")`).should("have.attr", "href", "https://github.com/tobysmith568");
  });
});
