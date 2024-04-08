/// <reference types="Cypress" />

describe('This is for a dropdown test', ()=> {
    it('Select an element', ()=> {
        cy.navigate('Dropdown')
        cy.get('#dropdown').select('Option 2').should('have.value', '2')
        cy.get('option[selected]').should('have.text', 'Option 2').and('have.attr', 'selected')
    })

    it.only('Dinamically select an element', ()=> {
        cy.navigate('Dropdown')
        cy.get('#dropdown').find('option').eq(0).invoke('removeAttr', 'value')
        cy.get('option[value]').each(($el, index, $list) => {
            let value2 = Math.floor(Math.random() * $list.length) + 1
            cy.log(value2)
            cy.get('#dropdown').select(value2)
            cy.get('option[selected]').should('have.text', `Option ${value2}`).and('have.attr', 'selected')
        })
    })
})