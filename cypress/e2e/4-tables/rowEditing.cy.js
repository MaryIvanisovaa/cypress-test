describe('Check functionality of Smart Table', ()=>{
    context(' page - pages/tables/smart-table', ()=>{

it ('Editing a row and checking if an item has been updated', ()=>{

    cy.visit('pages/tables/smart-table');
    cy.get('.nb-edit').eq(0).click();
    cy.get('.form-control').eq(8).clear().type('test');
    cy.get('.nb-checkmark').first().click();
    cy.get('tbody tr').eq(0).find('td').eq(3).invoke('text', 'test').then((text) => {
      });
   
});
});
});