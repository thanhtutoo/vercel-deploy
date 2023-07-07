describe("Navigation", () => {
  it("should navigate to the index page", () => {
    // Start from the index page
    cy.visit("http://localhost:3000/");

    // Find a link with an href attribute containing "about" and click it
    cy.get('[data-cy-filter="min-price"]').should("exist");
  });
});
