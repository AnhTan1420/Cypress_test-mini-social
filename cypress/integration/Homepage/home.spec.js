

const valid_email = Cypress.env('valid_email');
const valid_password = Cypress.env('valid_password');
const hundred_words = Cypress.env('hundred_words');


context('Test Homepage', () => {

    before(() => {
        cy.visit('/')
    })

    beforeEach(() => {
        cy.visit('/')
    })

    afterEach(() => {
        cy.log('Done each testcase')
    })

    //check sideleft navbar click button navigate url
    it('Click sideleft navbar navigate page url', () => {
        cy.get('#login').within(() => {

            cy.get('#emailLogin').type(valid_email)
                .should('have.value', valid_email)

            cy.get('#passwordLogin').type(valid_password)
                .should('have.value', valid_password)

            cy.get('.submit-btn').click()
            cy.url().should('includes', '/')

        })


        //Search
        cy.get('.menu-list').find('li').eq(1)
            .find('a').should('have.attr', 'href', '/search').click()
        cy.wait(3500)
        
        //Notifications
        cy.get('.menu-list').find('li').eq(2)
            .find('a').should('have.attr', 'href', '/notifications').click()
        cy.wait(3500)

        //Messages
        cy.get('.menu-list').find('li').eq(3)
            .find('a').should('have.attr', 'href', '/messages').click()
        cy.wait(3500)

        //Profile
        cy.get('.menu-list').find('li').eq(4)
            .find('a').should('have.attr', 'href', '/profile').click()
        cy.wait(3500)

        //Admin
        cy.get('.menu-list').find('li').eq(5)
            .find('a').should('have.attr', 'href', '/admin').click()

        //Logout
        cy.get('.menu-list').find('li').eq(6)
            .find('a').click()
        cy.get('.swal2-confirm').click({ force: true })

        cy.wait(5000)

    })

    //Check enter text, upload image post
    it('Enter fully text, upload image post', () => {
        cy.get('#login').within(() => {

            cy.get('#emailLogin').type(valid_email)
                .should('have.value', valid_email)

            cy.get('#passwordLogin').type(valid_password)
                .should('have.value', valid_password)

            cy.get('.submit-btn').click()
            cy.url().should('includes', '/')

        })

        cy.get('#buttonPostFormModal').click()
        cy.get('#postTextarea').type('alo alo alo').should('have.value', 'alo alo alo')
        const p = 'ashley-whitlatch-36aGnv29Ss0-unsplash.jpg';
        cy.get('#postImage').attachFile(p)
        cy.get('#submitCreatePost').click({ force: true })
        cy.url().should('includes', '/')

        cy.wait(4000)

    })

    //Check enter text post under 100 words
    it('Enter text post under 100 words', () => {
        cy.get('#login').within(() => {

            cy.get('#emailLogin').type(valid_email)
                .should('have.value', valid_email)

            cy.get('#passwordLogin').type(valid_password)
                .should('have.value', valid_password)

            cy.get('.submit-btn').click()
            cy.url().should('includes', '/')

        })


        cy.get('#buttonPostFormModal').click()
        cy.get('#postTextarea').type('alo alo alo').should('have.value', 'alo alo alo')
        cy.get('#submitCreatePost').click({ force: true })
        cy.url().should('includes', '/')

        cy.wait(4000)
    })

    //Check enter text post over 100 words
    it('Enter text post over 100 words', () => {
        cy.get('#login').within(() => {

            cy.get('#emailLogin').type(valid_email)
                .should('have.value', valid_email)

            cy.get('#passwordLogin').type(valid_password)
                .should('have.value', valid_password)

            cy.get('.submit-btn').click()
            cy.url().should('includes', '/')
        })


        cy.get('#buttonPostFormModal').click()
        cy.get('#postTextarea').type(hundred_words).should('have.value', hundred_words)
        cy.get('#submitCreatePost').click({ force: true })
        cy.url().should('includes', '/')

        cy.wait(4000)
    })

    //Check imgage upload under 1 mb post
    it('Upload image under 1 MB post', () => {
        cy.get('#login').within(() => {

            cy.get('#emailLogin').type(valid_email)
                .should('have.value', valid_email)

            cy.get('#passwordLogin').type(valid_password)
                .should('have.value', valid_password)

            cy.get('.submit-btn').click()
            cy.url().should('includes', '/')

        })
        cy.url().should('includes', '/')

        cy.get('#buttonPostFormModal').click()
        const p = 'ashley-whitlatch-36aGnv29Ss0-unsplash.jpg';
        cy.get('#postImage').attachFile(p)
        cy.get('#submitCreatePost').click({ force: true })
        cy.url().should('includes', '/')

        cy.wait(4000)

    })

    //Check imgage upload over 1 mb post
    it('Upload image over 1 MB post', () => {
        cy.get('#login').within(() => {

            cy.get('#emailLogin').type(valid_email)
                .should('have.value', valid_email)

            cy.get('#passwordLogin').type(valid_password)
                .should('have.value', valid_password)

            cy.get('.submit-btn').click()
            cy.url().should('includes', '/')

        })


        cy.get('#buttonPostFormModal').click()
        const p = 'wavy_lines_v01_5120x2880.png';
        cy.get('#postImage').attachFile(p)
        cy.get('#submitCreatePost').click({ force: true })

        cy.url().should('includes', '/')

        cy.wait(4000)
    })

    //Check blank post
    it('Enter blank post', () => {
        cy.get('#login').within(() => {

            cy.get('#emailLogin').type(valid_email)
                .should('have.value', valid_email)

            cy.get('#passwordLogin').type(valid_password)
                .should('have.value', valid_password)

            cy.get('.submit-btn').click()
            cy.url().should('includes', '/')

        })


        cy.get('#buttonPostFormModal').click()
        cy.get('#postTextarea').type(' ').should('have.value', ' ')
        cy.get('#submitCreatePost').click({ force: true })
        cy.url().should('includes', '/')

        cy.wait(4000)
    })

    // Check displayName posted
    it('Click displayname in posted', () => {
        cy.get('#login').within(() => {

            cy.get('#emailLogin').type(valid_email)
                .should('have.value', valid_email)

            cy.get('#passwordLogin').type(valid_password)
                .should('have.value', valid_password)

            cy.get('.submit-btn').click()
            cy.url().should('includes', '/')

        })

        cy.get('.post_main-content-container > .post_content-container > .post_header')
            .find('a').eq(0).should('have.attr', 'href', '/profile/minh.mchiu')
            .click()

        cy.wait(4000)
    })

    //Check pin posted
    it('Click pin posted', () => {
        cy.get('#login').within(() => {

            cy.get('#emailLogin').type(valid_email)
                .should('have.value', valid_email)

            cy.get('#passwordLogin').type(valid_password)
                .should('have.value', valid_password)

            cy.get('.submit-btn').click()
            cy.url().should('includes', '/')

        })

        cy.get('.button-pinned-post').eq(1).should('be.visible').click()
        cy.get('#submitPinPost').should('be.visible').click({ force: true })

        cy.wait(4000)
    })

    //check delete posted
    it('Click delete posted', () => {
        cy.get('#login').within(() => {

            cy.get('#emailLogin').type(valid_email)
                .should('have.value', valid_email)

            cy.get('#passwordLogin').type(valid_password)
                .should('have.value', valid_password)

            cy.get('.submit-btn').click()
            cy.url().should('includes', '/')

        })


        cy.get('.button-delete-post').eq(1).should('be.visible').click()
        cy.get('#submitDeletePost').should('be.visible').click({ force: true })

        cy.wait(4000)

    })

})