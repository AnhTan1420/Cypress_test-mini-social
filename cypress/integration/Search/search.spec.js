
const auth_login = Cypress.env('auth_login');
const valid_email = Cypress.env('valid_email');
const valid_password = Cypress.env('valid_password');


context('Test Search', () => {

    beforeEach(() => {
        cy.visit('/')
    })
//Check search user and posts
it('Enter users and posts to search', () => {
    cy.get(auth_login).within(() => {

        cy.get('#email').type(valid_email)
            .should('have.value', valid_email)

        cy.get('#password').type(valid_password)
            .should('have.value', valid_password)

        cy.get('button').click({ multiple: true })

    })
    cy.url().should('includes', '/')
  
     cy.visit('/search')

    
     cy.get('.css-18ktaeh > form:nth-child(1) > div:nth-child(1) > div:nth-child(1) > input:nth-child(1)').type('Anh Tan{enter}')

     cy.wait(3000)

     cy.get('button.MuiButton-fullWidth:nth-child(2)').click({force: true})

     cy.get('.css-18ktaeh > form:nth-child(1) > div:nth-child(1) > div:nth-child(1) > input:nth-child(1)').type('alo alo alo{enter}')

})
   
})