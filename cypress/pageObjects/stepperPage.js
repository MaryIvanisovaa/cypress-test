 class StepperPage {
        constructor() {
          this.stepperUrl = "pages/layout/stepper";
          this.stepperSection = ".stepper-section";
        }
      
        visitStepperPage() {
          cy.visit(this.stepperUrl);
        }
      
        getStepperSection() {
          return cy.get(this.stepperSection);
        }
      }
      
      export default StepperPage;
      