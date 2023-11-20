class StepperPage {
    visitStepperPage() {
      cy.visit('pages/layout/stepper');
    }
  
    checkFirstStepText(expectedText) {
      cy.get('.selected').eq(0).should('include.text', expectedText);
    }
  
    clickNextButton(index) {
      cy.get('[nbsteppernext=""]').eq(index).click();
    }
  }
  export default StepperPage;