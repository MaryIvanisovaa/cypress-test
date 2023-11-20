// cypress/integration/dialogTest.spec.js
import DialogPage from '../../pageObjects/modalOverlaysPage'

describe('Check form "Enter name"', () => {
  const dialogPage = new DialogPage();

  context('page modal-overlays/dialog', () => {
    it('Check form "Enter name" on page modal-overlays/dialog(Return Result From Dialog)', () => {
      dialogPage.visitDialogPage();
      dialogPage.openEnterNameDialog();
      dialogPage.isNameFormVisible();
      dialogPage.isPromptVisible();
      dialogPage.enterName('John Doe'); 
      dialogPage.clickCancelButton();
      dialogPage.isStatusSuccessVisible();
    });
  });
});
