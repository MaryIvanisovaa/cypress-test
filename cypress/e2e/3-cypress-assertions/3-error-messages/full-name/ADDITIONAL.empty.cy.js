describe('Check error messages for each fields', ()=>{
    context(' page -  /auth/register', ()=>{

it ('Error behind "Full name field"(empty input)', ()=>{
cy.visit('/auth/register');
cy.get('[ng-reflect-status]').eq(0).click()
cy.get('[ng-reflect-status]').eq(1).click()
cy.get('.caption').should('contain', 'Full name is required!')
});
});
}); 
//  цей тест додатковий, я написала його по своїй інніціативі.
// на данний момент, на сайті не відображається нічого, коли не заповнюєш фул нейм поле. 
// я вирішила що це схоже на баг та вирішила дофантузувати вимогу для такого кейсу. Кейс падає бо ніякого еррор месседжу нема.