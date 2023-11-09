describe('Check error messages for each fields', ()=>{
    context(' page -  /auth/register', ()=>{

        it('Error behind "Password "(empty input)',()=>{
            cy.visit('/auth/register');
            cy.get('[ng-reflect-status]').eq(2).click()
            cy.get('[ng-reflect-status]').eq(3).click()
            cy.get('.caption').should('contain', 'Password is required!')
        })

        it('Error behind "Password "(incorrect input)',()=>{
            cy.visit('/auth/register');
            cy.get('[ng-reflect-status]').eq(2).click().type('hh')
            cy.get('[ng-reflect-status]').eq(3).click()
            cy.get('.caption').should('contain', 'Password should contain from 4 to 50 characters')
        })
});
});
