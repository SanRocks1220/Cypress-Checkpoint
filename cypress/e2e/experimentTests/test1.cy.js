/// <reference types="Cypress" />

describe('My first test for Cypress', ()=> {
    it('Navigate to a web page', ()=> {
        cy.visit('https://the-internet.herokuapp.com/')
        cy.get('h1').should('have.text', 'Welcome to the-internet')
    })

    it.only('Check button', ()=> {
        cy.visit('https://the-internet.herokuapp.com/')
        cy.contains('Checkboxes').click()
        cy.get("input[type='checkbox']").eq(0).check()
        cy.get("input[type='checkbox']").should('be.checked')
    })

    it.only('Uncheck button', ()=> {
        cy.visit('https://the-internet.herokuapp.com/')
        cy.contains('Checkboxes').click()
        cy.get("input[type='checkbox']").eq(1).uncheck()
        cy.get("input[type='checkbox']").should('not.be.checked')
    })
})