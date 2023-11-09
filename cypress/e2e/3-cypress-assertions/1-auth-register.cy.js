describe('Check registration form and "Register" button', ()=>{
    context(' page -  /auth/register', ()=>{

it ('Filling out the registration form and clicking the "Register" button)', ()=>{

cy.visit('/auth/register');

const testData = ['Mariia', 'test@gmail.com', 'ash51srhdm', 'ash51srhdm']
      cy.get('[nbinput]').each(($el, index) => {
        cy.wrap($el).type(testData[index]).should('have.attr', 'ng-reflect-model', testData[index]);
      });
  
cy.get('.custom-checkbox').should('not.be.checked').click()
cy.get('.appearance-filled').click()
});
});
});
