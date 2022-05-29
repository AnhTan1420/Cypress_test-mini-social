const valid_email = Cypress.env('valid_email');
const valid_password = Cypress.env('valid_password');


context('Test Messages', () => {

    beforeEach(() => {
        cy.visit('/')
    })
//Check send text and image messages
it('Enter text and upload image to send message', () => {
    cy.get('#login').within(() => {

        cy.get('#emailLogin').type(valid_email)
            .should('have.value', valid_email)

        cy.get('#passwordLogin').type(valid_password)
            .should('have.value', valid_password)

        cy.get('.submit-btn').click()

    })
    cy.url().should('includes', '/')
  
     cy.visit('/messages')

     cy.get('[href="/messages/623b23753b01d3cf0891c028"]').should('have.attr', 'href', '/messages/623b23753b01d3cf0891c028').click()
     cy.findByPlaceholderText('Type a message...').type('hello{enter}').should('have.value', '')

     cy.wait(5000)

     const imageMess = '279097.jpg';
     cy.get('#messageImage').attachFile(imageMess)
     cy.get('.send-message__button').click({ force: true }).should('have.value', '')
     
})
   
})