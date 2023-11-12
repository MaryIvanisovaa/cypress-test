describe('Check functionality of Smart Table', ()=>{
    context(' page -  pages/tables/smart-table', ()=>{

it ('Additional new row to the table and check that it was added', ()=>{


const testData = ['111', 'Alex', 'Bogdan', '@Alex', 'alex@test.com', '31'];
cy.visit('pages/tables/smart-table');
cy.get('.nb-plus').click();

cy.get('.form-control').each(($el, index) => {
  if (index >= 6 && index < 12) {
    cy.wrap($el).type(testData[index - 6]);
  }
});

cy.get('.nb-checkmark').click();
cy.get('tbody tr').first().should('contain', testData[0]);
});
});
});