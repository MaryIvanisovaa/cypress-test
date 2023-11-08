describe('Check registration form and "Register" button', ()=>{
    context(' page -  /auth/register', ()=>{

it ('Filling out the registration form and clicking the "Register" button)', ()=>{

cy.visit('/auth/register');

cy.get('[nbinput]').eq(0).type('Mariia')
  .should('have.attr', 'ng-reflect-model', 'Mariia');

cy.get('[nbinput]').eq(1).type('test@gmail.com')
  .should('have.value', 'test@gmail.com');

cy.get('[nbinput]').eq(2).type('ash51srhdm', {log:false})
  .should('have.value', 'ash51srhdm');

cy.get('[nbinput]').eq(3).type('ash51srhdm', {log:false})
  .should('have.value', 'ash51srhdm');
  
cy.get('.custom-checkbox').should('not.be.checked').click()
cy.get('.appearance-filled').click()
});
});
});
