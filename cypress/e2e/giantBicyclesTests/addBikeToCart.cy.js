/// <reference types="Cypress" />

describe('Giant Bicycles US', () => {
    it('Should search a bike', () => {
        cy.visit('https://www.giant-bicycles.com/us');
        cy.get('.icongiant-search').click();
        cy.get('.tt-input').should('be.visible');
        cy.get('.tt-input').type('talon');
        cy.get('.tt-input').type('{enter}');
        cy.get('.product').should('be.visible');
        cy.get('a.track-GA4-event[href="/us/talon-eplus-3-29er-20mph-2022"]').should('exist');
        cy.get('a.track-GA4-event[href="/us/talon-eplus-3-29er-20mph-2022"]').first().click();
        cy.get('h1').should('contain.text', 'Talon E+ 3 29er 20');
    });

    it('Should search a bike', () => {
        cy.visit('https://www.giant-bicycles.com/us/talon-eplus-3-29er-20mph-2022')
        cy.get('button.btn.dropdown-toggle.bs-placeholder.btn-default[title="Select your size"]').should('be.visible');
        cy.get('button.btn.dropdown-toggle.bs-placeholder.btn-default[title="Select your size"]').scrollIntoView();
        cy.get('button.btn.dropdown-toggle.bs-placeholder.btn-default[title="Select your size"]').click();
        cy.get('#bs-select-2-1').click();
        cy.get('a.btn.btn-addtocart').click();
        cy.get('.you-have-added').should('be.visible');
        cy.get('.you-have-added').should('have.text', 'You have added');
        cy.get('.productname').should('be.visible');
        cy.get('.productname').should('have.text', 'Talon E+ 3 29er 20MPH');
        cy.get('button.btn.btn-success').click();
        cy.get('#proceedCheckout').scrollIntoView().should('be.visible');
        cy.get('#proceedCheckout').click();
        cy.get('.extrabottommargin').should('be.visible');
        cy.get('.extrabottommargin').should('have.text', 'Checkout');
    });    

});
