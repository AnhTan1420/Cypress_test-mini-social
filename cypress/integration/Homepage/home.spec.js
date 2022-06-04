const auth_login = Cypress.env('auth_login')
const menu_list = Cypress.env('menu_list')
const valid_email = Cypress.env('valid_email');
const valid_password = Cypress.env('valid_password');
const hundred_words = Cypress.env('hundred_words');
const menu_post = Cypress.env('menu_post');
const pin_post = Cypress.env('pin_post');
const hide_post = Cypress.env('hide_post');
const delete_post = Cypress.env('delete_post');


context('Test Homepage', () => {

    before(() => {
        cy.visit('/')
    })

    beforeEach(() => {
        cy.visit('/')
    })

    after(() => {
        cy.log('Done')
    })

    afterEach(() => {
        cy.log('Done each testcase')
    })

    //check sideleft navbar click button navigate url
    it('Click sideleft navbar navigate page url', () => {
        cy.get(auth_login).within(() => {

            cy.get('#email').type(valid_email)
                .should('have.value', valid_email)

            cy.get('#password').type(valid_password)
                .should('have.value', valid_password)

            cy.get('button').click({ multiple: true })

        })

        //Search
        cy.get(menu_list).find('a').eq(1)
            .should('have.attr', 'href', '/search').click()
        cy.url().should('includes', '/search')
        
        cy.wait(2000)

        //Notifications
        cy.get(menu_list).find('a').eq(2)
            .should('have.attr', 'href', '/notification').click()
        cy.url().should('includes', '/notification')
        cy.wait(2000)

        //Messages
        cy.get(menu_list).find('a').eq(3)
            .should('have.attr', 'href', '/chat').click()
        cy.url().should('includes', '/chat')
        cy.wait(2000)

        //Profile
        cy.get(menu_list).find('a').eq(4)
            .should('have.attr', 'href', '/users/profile').click()
        cy.url().should('includes', '/users/profile')
        cy.wait(2000)

        //Logout
        cy.get(menu_list).find('a').eq(5).click()
        cy.url().should('includes', '/')

        cy.wait(3000)

    })

    //Check enter text, upload image post
    it('Enter fully text, upload image post', () => {
        cy.get(auth_login).within(() => {

            cy.get('#email').type(valid_email)
                .should('have.value', valid_email)

            cy.get('#password').type(valid_password)
                .should('have.value', valid_password)

            cy.get('button').click({ multiple: true })

        })
        cy.url().should('includes', '/')

        cy.get('.css-3bs752').find('input').click()
        cy.get('.css-pcfq5i > textarea:nth-child(1)').type('alo alo alo').should('have.value', 'alo alo alo')
        const p = 'ashley-whitlatch-36aGnv29Ss0-unsplash.jpg';
        cy.get('.css-1hyfx7x').attachFile(p)
        cy.get('[form="createPostForm').click({ force: true })
        cy.url().should('includes', '/')

        cy.wait(6000)

    })

    //Check enter text post under 100 words
    it('Enter text post under 100 words', () => {
        cy.get(auth_login).within(() => {

            cy.get('#email').type(valid_email)
                .should('have.value', valid_email)

            cy.get('#password').type(valid_password)
                .should('have.value', valid_password)

            cy.get('button').click({ multiple: true })

        })
        cy.url().should('includes', '/')


        cy.get('.css-3bs752').find('input').click()
        cy.get('.css-pcfq5i > textarea:nth-child(1)').type('alo alo alo').should('have.value', 'alo alo alo')
        cy.get('[form="createPostForm').click({ force: true })
        cy.url().should('includes', '/')

        cy.wait(3000)
    })

    //Check enter text post over 100 words
    it('Enter text post over 100 words', () => {
        cy.get(auth_login).within(() => {

            cy.get('#email').type(valid_email)
                .should('have.value', valid_email)

            cy.get('#password').type(valid_password)
                .should('have.value', valid_password)

            cy.get('button').click({ multiple: true })

        })
        cy.url().should('includes', '/')


        cy.get('.css-3bs752').find('input').click()
        cy.get('.css-pcfq5i > textarea:nth-child(1)').type(hundred_words).should('have.value', hundred_words)
        cy.get('[form="createPostForm').click({ force: true })
        cy.url().should('includes', '/')

        cy.wait(3000)
    })

    //Check enter text post over 100 words and upload image
    it('Enter text post over 100 words and upload image', () => {
        cy.get(auth_login).within(() => {

            cy.get('#email').type(valid_email)
                .should('have.value', valid_email)

            cy.get('#password').type(valid_password)
                .should('have.value', valid_password)

            cy.get('button').click({ multiple: true })

        })
        cy.url().should('includes', '/')


        cy.get('.css-3bs752').find('input').click()
        cy.get('.css-pcfq5i > textarea:nth-child(1)').type(hundred_words).should('have.value', hundred_words)
        const p = 'ashley-whitlatch-36aGnv29Ss0-unsplash.jpg';
        cy.get('.css-1hyfx7x').attachFile(p)
        cy.get('[form="createPostForm').click({ force: true })
        cy.url().should('includes', '/')

        cy.wait(3000)
    })

    //Check imgage upload under 1 mb post
    it('Upload image under 1 MB post', () => {
        cy.get(auth_login).within(() => {

            cy.get('#email').type(valid_email)
                .should('have.value', valid_email)

            cy.get('#password').type(valid_password)
                .should('have.value', valid_password)

            cy.get('button').click({ multiple: true })

        })
        cy.url().should('includes', '/')

        cy.get('.css-3bs752').find('input').click()
        const p = 'ashley-whitlatch-36aGnv29Ss0-unsplash.jpg';
        cy.get('.css-1hyfx7x').attachFile(p)
        cy.get('[form="createPostForm').click({ force: true })
        cy.url().should('includes', '/')

        cy.wait(3000)

    })

    //Check imgage upload over 1 mb post
    it('Upload image over 1 MB post', () => {
        cy.get(auth_login).within(() => {

            cy.get('#email').type(valid_email)
                .should('have.value', valid_email)

            cy.get('#password').type(valid_password)
                .should('have.value', valid_password)

            cy.get('button').click({ multiple: true })

        })
        cy.url().should('includes', '/')


        cy.get('.css-3bs752').find('input').click()
        const p = 'wavy_lines_v01_5120x2880.png';
        cy.get('.css-1hyfx7x').attachFile(p)
        cy.get('[form="createPostForm').click({ force: true })

        cy.url().should('includes', '/')

        cy.wait(3000)
    })

    //Check blank post
    it('Enter blank post', () => {
        cy.get(auth_login).within(() => {

            cy.get('#email').type(valid_email)
                .should('have.value', valid_email)

            cy.get('#password').type(valid_password)
                .should('have.value', valid_password)

            cy.get('button').click({ multiple: true })

        })
        cy.url().should('includes', '/')

        cy.get('.css-3bs752').find('input').click()
        cy.get('[form="createPostForm').click({ force: true })
        cy.url().should('includes', '/')

        cy.wait(3000)
    })

    // Check displayName posted
    it('Click displayname in posted', () => {
        cy.get(auth_login).within(() => {

            cy.get('#email').type(valid_email)
                .should('have.value', valid_email)

            cy.get('#password').type(valid_password)
                .should('have.value', valid_password)

            cy.get('button').click({ multiple: true })

        })
        cy.url().should('includes', '/')

        cy.get('.css-gg4vpm').find('a').eq(0)
            .click()
   
        cy.wait(3000)
    })

    //Check pin posted
    it('Click pin posted', () => {
        cy.get(auth_login).within(() => {

            cy.get('#email').type(valid_email)
                .should('have.value', valid_email)

            cy.get('#password').type(valid_password)
                .should('have.value', valid_password)

            cy.get('button').click({ multiple: true })

        })
        cy.url().should('includes', '/')

        cy.get(menu_post).click()
        cy.get(pin_post).click({force: true}) 
        cy.get('.css-xj3rwy-MuiButtonBase-root-MuiButton-root').should('be.visible').click({ force: true })
        cy.wait(3000)
    })

    //Check Hide posted
    it('Click hide posted', () => {
        cy.get(auth_login).within(() => {

            cy.get('#email').type(valid_email)
                .should('have.value', valid_email)

            cy.get('#password').type(valid_password)
                .should('have.value', valid_password)

            cy.get('button').click({ multiple: true })

        })
        cy.url().should('includes', '/')

        cy.get(menu_post).click()
        cy.get(hide_post).click({force: true}) 
        cy.get('.css-xj3rwy-MuiButtonBase-root-MuiButton-root').should('be.visible').click({ force: true })
        cy.wait(3000)
    })

    //check delete posted
    it('Click delete posted', () => {
        cy.get(auth_login).within(() => {

            cy.get('#email').type(valid_email)
                .should('have.value', valid_email)

            cy.get('#password').type(valid_password)
                .should('have.value', valid_password)

            cy.get('button').click({ multiple: true })

        })
        cy.url().should('includes', '/')


        cy.get(menu_post).click()
        cy.get(delete_post).click({force: true}) 
        cy.get('.css-xj3rwy-MuiButtonBase-root-MuiButton-root').should('be.visible').click({ force: true })
        cy.wait(3000)

    })

})