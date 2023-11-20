class SmartTablePage {
    visitPage() {
      cy.visit('pages/tables/smart-table');
    }
  
    addNewRow(testData) {
      cy.get('.nb-plus').click();
  
      cy.get('.form-control').each(($el, index) => {
        if (index >= 6 && index < 12) {
          cy.wrap($el).type(testData[index - 6]);
        }
      });
  
      cy.get('.nb-checkmark').click();
    }
  
    editRow(index, newValue) {
      cy.get('.nb-edit').eq(index).click();
      cy.get('.form-control').eq(8).clear().type(newValue);
      cy.get('.nb-checkmark').first().click();
    }
  
    getFirstRowText(columnIndex) {
      return cy.get('tbody tr').first().find('td').eq(columnIndex).invoke('text');
    }
  }
  
  export default new SmartTablePage();
  