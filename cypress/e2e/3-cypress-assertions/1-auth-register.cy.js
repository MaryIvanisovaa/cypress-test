describe('Check registration form and "Register" button', ()=>{
    context(' page -  /auth/register', ()=>{

it ('Filling out the registration form and clicking the "Register" button)', ()=>{

// cy.visit('/auth/register');

// cy.get('nb-register').within(() => {

//   cy.get('#input-name').click().type('Mariia').should('have.attr', 'ng-reflect-model', 'Mariia');
//   cy.get('#input-email').click().type('test@gmail.com').should('have.attr', 'ng-reflect-model', 'test@gmail.com');
//   cy.get('#input-password').click().type('ash51srhdm').should('have.attr', 'ng-reflect-model', 'ash51srhdm');
//   cy.get('#input-re-password').click().type('ash51srhdm').should('have.attr', 'ng-reflect-model', 'ash51srhdm');
//   });
  
// cy.get('.custom-checkbox').should('not.be.checked').click();
// cy.get('.appearance-filled').click();


// });
// });
// });


cy.visit('/auth/register');

const inputData = {
  '#input-name': 'Mariia',
  '#input-email': 'test@gmail.com',
  '#input-password': 'ash51srhdm',
  '#input-re-password': 'ash51srhdm'
};

cy.get('nb-register').within(() => {
  Object.entries(inputData).forEach(([selector, value]) => {
    cy.get(selector).click().type(value).should('have.attr', 'ng-reflect-model', value);
  });
});

cy.get('.custom-checkbox').should('not.be.checked').click();
cy.get('.appearance-filled').click();
});
});
});