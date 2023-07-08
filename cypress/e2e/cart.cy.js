describe("cart", () => {
    it("add the product into card and add more quantity", () => {
      // Start from the product page
      cy.visit("http://localhost:3000/product/1");
  
      cy.get('[data-cy-button="cart"]').click();
      cy.get('[data-cy-cart="total"]').should('contain', '1').click();
      cy.url().should('eq', `http://localhost:3000/cart`);
      cy.get('[data-cy-button="checkout"]').should('exist');
      cy.get('[data-cy="order-total"]').should('exist');
      cy.get('[data-cy-info="price"]').should('exist');
      cy.get('[data-cy-info="add"]').click();
      cy.get('[data-cy-info="remove"]').should('exist');
      cy.get('[data-cy-cart="total"]').should('contain', '2')
    });
  });
  