import SmartTablePage from '../../models/smartTablePage';

describe('Check functionality of Smart Table', () => {
  context('page - pages/tables/smart-table', () => {
    it('Additional new row to the table and check that it was added', () => {
      const testData = ['111', 'Alex', 'Bogdan', '@Alex', 'alex@test.com', '31'];
      SmartTablePage.visitPage();
      SmartTablePage.addNewRow(testData);
      SmartTablePage.getFirstRowText(3).should('contain', testData[2]);
    });
  });
});