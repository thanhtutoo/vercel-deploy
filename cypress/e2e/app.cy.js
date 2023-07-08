describe("Navigation", () => {
  it("should navigate to the index page", () => {
    // Start from the index page
    cy.visit("http://localhost:3000/");
    cy.get('[data-cy-filter="min-price"]').should("exist");
  });
});
