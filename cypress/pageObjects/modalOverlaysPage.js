class DialogPage {
    visitDialogPage() {
      cy.visit('pages/modal-overlays/dialog');
    }
  
    openEnterNameDialog() {
      cy.get('.appearance-filled').last().click();
    }
  
    isNameFormVisible() {
      return cy.get('input').parent().should('be.visible');
    }
  
    isPromptVisible() {
      return cy.contains('Enter your name').should('be.visible');
    }
  
    enterName(name) {
      cy.get('input').last().type(name);
    }
  
    clickCancelButton() {
      cy.get('.cancel')
    }
  
    isStatusSuccessVisible() {
      return cy.get('.status-success').should('be.visible')
    }
  }
  
  export default DialogPage;