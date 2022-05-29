const valid_email = Cypress.env('valid_email');
const valid_password = Cypress.env('valid_password');


context('Test Search', () => {

    beforeEach(() => {
        cy.visit('/')
    })
//Check search user and posts
it('Enter users and posts to search', () => {
    cy.get('#login').within(() => {

        cy.get('#emailLogin').type(valid_email)
            .should('have.value', valid_email)

        cy.get('#passwordLogin').type(valid_password)
            .should('have.value', valid_password)

        cy.get('.submit-btn').click()

    })
    cy.url().should('includes', '/')
  
     cy.visit('/search')

     cy.get('a.tab:nth-child(1)').should('have.attr', 'href', '/search/users').click()
     cy.findByPlaceholderText('Enter name or post...').type('Anh Tan{enter}')

     cy.wait(3000)

     cy.get('a.tab:nth-child(2)').should('have.attr', 'href', '/search/posts').click()
     cy.findByPlaceholderText('Enter name or post...').type('hello world!{enter}')

})
   
})