describe('Check error messages for each fields', ()=>{
    context(' page -  /auth/register', ()=>{

        it('Error behind "Password "(empty input)',()=>{
            cy.visit('/auth/register');
            cy.get('[ng-reflect-status]').eq(2).click().type('123123')
            cy.get('[ng-reflect-status]').eq(3).click().type('141414')
            cy.get('[ng-reflect-status]').eq(2).click()
            cy.get('.caption').should('contain', 'The passwords do not match')
        })

        it('Error behind "Password "(empty input)',()=>{
            cy.visit('/auth/register');
            cy.get('[ng-reflect-status]').eq(3).click()
            cy.get('[ng-reflect-status]').eq(0).click()
            cy.get('.caption').should('contain', 'Password confirmation is required!')
        })
});
});
