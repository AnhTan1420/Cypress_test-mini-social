const valid_email = Cypress.env('valid_email');
const valid_password = Cypress.env('valid_password');
const invalid_email = Cypress.env('invalid_email');
const invalid_password = Cypress.env('invalid_password')


context('Test Admin Login', () => {
    before(() => {
        cy.visit('/')
    })

    beforeEach(() => {
        cy.visit('/auth/admin/sign_in')
    })

    after(() => {
        cy.log('Done')
    })

    afterEach(() => {
        cy.log('Done each testcase')
    })

    //Check enter correct fully login
    it('Enter correct and fully login information', () => {
        cy.get('form.sign-in').within(($form) => {

            cy.get('div:nth-child(1)').find('input').type(valid_email)
                .should('have.value', valid_email)

            cy.get('div:nth-child(2)').find('input').type(valid_password)
                .should('have.value', valid_password)

            cy.get('button').click()

        })

        cy.url().should('includes', '/admin')
        cy.wait(2000)

    })

    //Check enter incorrect fully login information but incorrect email or password
    it('Enter full login information but incorrect email or password', () => {

        // Incorrect email

        cy.get('form.sign-in').within(($form) => {

            cy.get('div:nth-child(1)').find('input').type(invalid_email)
                .should('have.value', invalid_email)

            cy.get('div:nth-child(2)').find('input').type(valid_password)
                .should('have.value', valid_password)

            cy.get('button').click()

        })

        cy.log('Incorrect email')
        cy.url().should('includes', '/auth/admin/sign_in')
        cy.wait(2000)



        //Incorrect password

        cy.get('form.sign-in').within(($form) => {

            cy.get('div:nth-child(1)').find('input').type(valid_email)
                .should('have.value', valid_email)

            cy.get('div:nth-child(2)').find('input').type(invalid_password)
                .should('have.value', invalid_password)

            cy.get('button').click()

        })

        cy.log('Incorrect password')
        cy.url().should('includes', '/auth/admin/sign_in')
        cy.wait(2000)

    })

    //Check enter login information but blank email or password
    it('Enter login information but blank email or password', () => {

        // Blank email

        cy.get('form.sign-in').within(($form) => {

            cy.get('div:nth-child(1)').find('input').type(' ')
                .should('have.value', ' ')

            cy.get('div:nth-child(2)').find('input').type(valid_password)
                .should('have.value', valid_password)

            cy.get('button').click()

        })

        cy.log('Blank email')
        cy.url().should('includes', '/auth/admin/sign_in')
        cy.wait(2000)



        //Blank password

        cy.get('form.sign-in').within(($form) => {

            cy.get('div:nth-child(1)').find('input').type(valid_email)
                .should('have.value', valid_email)

            cy.get('div:nth-child(2)').find('input').type(' ')
                .should('have.value', ' ')

            cy.get('button').click()

        })
        cy.log('Blank password')
        cy.url().should('includes', '/auth/admin/sign_in')
        cy.wait(2000)

    })

    //check blank login fully
    it('Enter blank login information', () => {
        cy.get('form.sign-in').within(($form) => {

            cy.get('div:nth-child(1)').find('input').type(' ')
                .should('have.value', ' ')

            cy.get('div:nth-child(2)').find('input').type(' ')
                .should('have.value', ' ')

            cy.get('button').click()

        })

        cy.url().should('includes', '/auth/admin/sign_in')
        cy.wait(2000)
    })
})