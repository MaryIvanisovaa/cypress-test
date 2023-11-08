describe('Check error messages for each fields', ()=>{
    context(' page -  /auth/register', ()=>{

it ('Error behind "Full name field"(incorrect input)', ()=>{
cy.visit('/auth/register');
cy.get('[ng-reflect-status]').eq(0).click().type('gg')
cy.get('[ng-reflect-status]').eq(1).click()
cy.get('.caption').should('contain', 'Full name should contains from 4 to 50 characters')
});
});
}); 