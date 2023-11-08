describe('Check error messages for each fields', ()=>{
    context(' page -  /auth/register', ()=>{

        it('Error behind "Password "(empty input)',()=>{
            cy.visit('/auth/register');
            cy.get('[ng-reflect-status]').eq(2).click().type('123123')
            cy.get('[ng-reflect-status]').eq(3).click().type('141414')
            cy.get('[ng-reflect-status]').eq(2).click()
            cy.get('.caption').should('contain', 'The passwords do not match')
        })
});
});

//  цей тест додатковий, я написала його по своїй інніціативі.
// на данний момент, на сайті не відображається нічого, коли в 'repeate password' вводиться інший пасворд. 
// я вирішила що це схоже на баг та вирішила дофантузувати вимогу для такого кейсу. Кейс падає бо ніякого еррор месседжу нема.