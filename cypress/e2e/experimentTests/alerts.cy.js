/// <reference types="Cypress" />

describe('This is for a alert test', ()=> {
    
    beforeEach(()=> {
        cy.navigate('javascript_alerts')
    })

    it('Manage alerts', ()=> {
        cy.get("button[onclick='jsAlert()']").click()
        cy.on('window:alert', (alertMessage) => {
            expect(alertMessage).to.be.equal('I am a JS Confirm')
        })
        cy.get('#result').should('have.text', 'You successfuly clicked an alert')
        
    })
})