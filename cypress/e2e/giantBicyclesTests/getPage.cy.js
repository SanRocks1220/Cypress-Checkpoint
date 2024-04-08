/// <reference types="Cypress" />

describe('Giant Bicycles US', () => {
    beforeEach(() => {
        cy.visit('https://www.giant-bicycles.com/us');
    });

    it('Should display the logo', () => {
        cy.get('.logo').should('be.visible');
    });

    it('Should have a navigation menu', () => {
        cy.get('.menu').should('be.visible');
    });

    it('Should contain a search bar', () => {
        cy.get('.icongiant-search').click();
        cy.get('.tt-input').should('be.visible');
    });

    it('Should display the Cart Logo', () => {
        cy.get('.glyphicon.glyphicon-shopping-cart').should('be.visible');
    });
});
