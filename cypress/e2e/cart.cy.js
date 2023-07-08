const { cy } = require("date-fns/locale");

describe("filter", () => {
    it("select the category and display fragrances products listing", () => {
      // Start from the index page
      cy.visit("http://localhost:3000/product/1");
  
      cy.get('[data-cy-button="cart"]').click();
      cy.get('[data-cy-cart="total"]').should('contain', '1').click();
      cy.url().should('eq', `http://localhost:3000/cart`);
      cy.get('data-cy-button="checkout"').should('exist');
      cy.get('data-cy="order-total"').should('exist');
      cy.get('data-cy="order-total"').should('exist');

    });
  });
  