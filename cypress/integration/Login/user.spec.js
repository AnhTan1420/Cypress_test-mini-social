const valid_email = Cypress.env('valid_email');
const valid_password = Cypress.env('valid_password');
const invalid_email = Cypress.env('invalid_email');
const invalid_password = Cypress.env('invalid_password')

context('Test User Login', () => {
    before(() => {
        cy.visit('/')
    })

    beforeEach(() => {
        cy.visit('/auth/login')
    })

    after(() => {
        cy.log('Done')
    })

    afterEach(() => {
        cy.log('Done each testcase')
    })

    //Check enter correct fully login
    it('Enter correct and fully login information', () => {
        cy.get('#login').within(($form) => {

            cy.get('#emailLogin').type(valid_email)
                .should('have.value', valid_email)

            cy.get('#passwordLogin').type(valid_password)
                .should('have.value', valid_password)

            cy.get('.submit-btn').click()

        })

        cy.url().should('includes', '/')
        cy.wait(2000)

    })

    //Check enter incorrect fully login
    it('Enter full login information but incorrect email or password', () => {

        // Incorrect email

        cy.get('#login').within(($form) => {

            cy.get('#emailLogin').type(invalid_email)
                .should('have.value', invalid_email)

            cy.get('#passwordLogin').type(valid_password)
                .should('have.value', valid_password)

            cy.get('.submit-btn').click()

        })

        cy.log('Incorrect email')
        cy.url().should('includes', '/auth/login')
        cy.wait(2000)

        //Incorrect password

        cy.get('#login').within(($form) => {
            cy.get('#emailLogin').type(valid_email)
                .should('have.value', valid_email)

            cy.get('#passwordLogin').type(invalid_password)
                .should('have.value', invalid_password)

            cy.get('.submit-btn').click()
        })

        cy.log('Incorrect password')
        cy.url().should('includes', '/auth/login')
        cy.wait(2000)

    })

     //Check enter login information but blank email or password
     it('Enter login information but blank email or password', () => {

        // Blank email

        cy.get('#login').within(($form) => {

            cy.get('#emailLogin').type(' ')
                .should('have.value', ' ')

            cy.get('#passwordLogin').type(valid_password)
                .should('have.value', valid_password)

            cy.get('.submit-btn').click()

        })
        
        cy.log('Blank email')
        cy.url().should('includes', '/auth/login')
        cy.wait(2000)

        //Blank password

        cy.get('#login').within(($form) => {

            cy.get('#emailLogin').type(valid_email)
                .should('have.value', valid_email)

            cy.get('.submit-btn').click()
        })

        cy.log('Balank password')
        cy.url().should('includes', '/auth/login')
        cy.wait(2000)

    })

    //check blank login 
    it('Enter blank login information', () => {
        cy.get('#login').within(($form) => {

            cy.get('.submit-btn').click()

        })

        cy.url().should('includes', '/auth/login')
        cy.wait(2000)
    })



})