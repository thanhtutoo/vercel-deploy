describe("filter", () => {
    it("select the category and display fragrances products listing", () => {
      // Start from the index page
      cy.visit("http://localhost:3000/?category=smartphones&price=12&price=280");
  
      cy.get('[data-cy-filter="category"]').click();
      cy.get('[data-cy-id=3]').click();
      cy.get('[data-cy-card="product"]').should('exist').first()
      .get('[data-cy-info="title"]').should('contain', 'perfume Oil')
      .get('[data-cy-info="category"]').should('contain', 'fragrances')
      .get('[data-cy-info="price"]').should('exist')
      .get('[data-cy-info="star"]').should('exist');
    });
  });
  