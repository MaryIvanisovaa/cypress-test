describe('Check error messages for each fields', ()=>{
    context(' page -  /auth/register', ()=>{
        it('Error behind "Email address"(incorrect input)',()=>{
            cy.visit('/auth/register');
            cy.get('[ng-reflect-status]').eq(1)
            .type('hh')
            cy.get('[ng-reflect-status]').eq(2).click()
            cy.get('.caption').should('contain', 'Email should be the real one!')
        })
               
    })
});
