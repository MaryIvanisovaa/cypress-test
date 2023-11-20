
import StepperPage from '../../pageObjects/stepperPage';

const stepperPage = new StepperPage();

describe("First test suite", () => {
  context("First test suite-context", () => {
    it("Verify url", () => {
      stepperPage.visitStepperPage();
      cy.url().should("contain", stepperPage.stepperUrl)

    }); 
  });
});
