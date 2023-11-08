describe('Check error messages for each fields', ()=>{
    context(' page -  /auth/register', ()=>{

        it('Error behind "Password "(empty input)',()=>{
            cy.visit('/auth/register');
            cy.get('[ng-reflect-status]').eq(3).click()
            cy.get('[ng-reflect-status]').eq(0).click()
            cy.get('.caption').should('contain', 'Password confirmation is required!')
        })
});
});
