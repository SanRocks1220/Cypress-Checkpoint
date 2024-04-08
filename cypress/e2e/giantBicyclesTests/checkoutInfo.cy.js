/// <reference types="Cypress" />

describe('Giant Bicycles US', () => {
    it('Should display checkout information', () => {
        cy.visit('https://www.giant-bicycles.com/us/talon-eplus-3-29er-20mph-2022')
        cy.get('button.btn.dropdown-toggle.bs-placeholder.btn-default[title="Select your size"]').click();
        cy.get('#bs-select-2-1').click();
        cy.get('a.btn.btn-addtocart').click();
        cy.get('button.btn.btn-success').click();
        cy.get('#proceedCheckout').scrollIntoView()
        cy.get('#proceedCheckout').click();
        cy.get('.extrabottommargin').should('be.visible');
        cy.get('.extrabottommargin').should('have.text', 'Checkout');
        cy.get('button[aria-label="Close dialog 1"]').click();


        cy.contains('span', 'Address & Contact info').should('be.visible');
        cy.contains('span', 'Delivery options').should('be.visible');
        cy.contains('span', 'Select a Giant retailer').should('be.visible');

        cy.get('#btnLogin').click()
        cy.get('p#LoginErrorDescription.alert.alert-danger.ng-binding').should('contain', 'Wrong username or password');


    });

});
