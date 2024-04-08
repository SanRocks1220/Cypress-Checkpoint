/// <reference types="Cypress" />

describe('This is for a empty key test', ()=> {
    
    beforeEach(()=> {
        cy.navigate('Key Presses')
    })

    it('Send keys', ()=> {
        cy.get('#target').type('{BACK_SPACE}')
        cy.get('#result').should('contain.text', 'BACK_SPACE')
    })
})