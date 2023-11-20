import SmartTablePage from '../../models/smartTablePage';

describe('Check functionality of Smart Table', ()=>{
    context(' page - pages/tables/smart-table', ()=>{

        it('Editing a row and checking if an item has been updated', () => {
            SmartTablePage.visitPage();
            const newValue = 'test';
            SmartTablePage.editRow(0, newValue);
            SmartTablePage.getFirstRowText(3).should('contain', newValue);
          });
        });
      });
