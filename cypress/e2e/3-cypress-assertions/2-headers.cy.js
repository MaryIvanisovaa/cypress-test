describe('Check the headers of all elements in the /auth/register page', ()=>{
    context(' page -  /auth/register', ()=>{

it ('Check the headers of all elements', ()=>{
cy.visit('/auth/register');
cy.get('.title').first().should('contain', 'Register')
cy.get('.label').eq(0).should('have.text', 'Full name:')
cy.get('.label').eq(1).should('have.text', 'Email address:')
cy.get('.label').eq(2).should('have.text', 'Password:')
cy.get('.label').eq(3).should('have.text', 'Repeat password:')
cy.get('.label').eq(4).should('contain', 'Agree to')
cy.get('section.links').should('include.text', 'or enter with:')
});
});
}); 