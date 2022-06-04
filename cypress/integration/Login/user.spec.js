const menu_list = Cypress.env('menu_list')
const auth_login = Cypress.env('auth_login');
const valid_email = Cypress.env('valid_email');
const valid_password = Cypress.env('valid_password');
const invalid_email = Cypress.env('invalid_email');
const invalid_password = Cypress.env('invalid_password');

context('Test User Login', () => {
    before(() => {
        cy.visit('/')
    })

    beforeEach(() => {
        cy.visit('/auth')
    })

    after(() => {
        cy.log('Done')
    })

    afterEach(() => {
        cy.log('Done each testcase')
    })
     
    //Check enter correct email and password
    it('Enter correct email and password', () => {
        
        cy.get(auth_login).within(($form) => {

            cy.get('#email').type(valid_email)
                .should('have.value', valid_email)

            cy.get('#password').type(valid_password)
                .should('have.value', valid_password)

            cy.get('button').click({ multiple: true })

        })

        cy.url().should('includes', '/')

        //Logout
        cy.get(menu_list).find('a').eq(5).click()
        cy.wait(2000)
        cy.get('.MuiDialogActions-root > .MuiButton-root').click({ force: true })
        cy.url().should('includes', '/auth')
        cy.wait(2000)


    })

    //Check enter correct password but incorrect email
    it('Enter correct password but incorrect email', () => {

        cy.get(auth_login).within(($form) => {

            cy.get('#email').type(invalid_email)
                .should('have.value', invalid_email)

            cy.get('#password').type(valid_password)
                .should('have.value', valid_password)

            cy.get('button').click({ multiple: true })

        })
        cy.log('Incorrect email')
        cy.url().should('includes', '/auth')
       


    })

    //Check enter correct email but incorrect password
    it('Enter correct email but incorrect password', () => {

        cy.get(auth_login).within(($form) => {

            cy.get('#email').type(valid_email)
                .should('have.value', valid_email)

            cy.get('#password').type(invalid_password)
                .should('have.value', invalid_password)

            cy.get('button').click({ multiple: true })

        })
        cy.log('Incorrect password')
        cy.url().should('includes', '/auth')

    })

    //Check enter correct password but blank email
    it('Enter correct password but blank email', () => {

        cy.get(auth_login).within(($form) => {

            cy.get('#password').type(invalid_password)
                .should('have.value', invalid_password)

            cy.get('button').click({ multiple: true })

        })
        cy.log('Blank email')
        cy.url().should('includes', '/auth')
        cy.wait(2000)

    })

    //Check enter correct email but blank password
    it('Enter login information but blank password', () => {

        cy.get(auth_login).within(($form) => {

            cy.get('#email').type(invalid_email)
                .should('have.value', invalid_email)

            cy.get('button').click({ multiple: true })

        })
        cy.log('Blank password')
        cy.url().should('includes', '/auth')
        cy.wait(2000)

    })

    //check blank email and password
    it('Blank email and password', () => {
        cy.get(auth_login).within(($form) => {

            cy.get('button').click({ multiple: true })

        })

        cy.url().should('includes', '/auth')
        cy.wait(2000)
    })



})