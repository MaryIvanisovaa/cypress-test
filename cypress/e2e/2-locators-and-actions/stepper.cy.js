
import StepperPage from '../../pageObjects/stepperPage1';

describe('Check text of "Step content#1"', () => {
  const stepperPage = new StepperPage();

  context('Check text of all buttons', () => {
    it('Check text of "Step content#1"', () => {
      stepperPage.visitStepperPage();
      stepperPage.checkFirstStepText('First step');

      stepperPage.clickNextButton(1);
      stepperPage.checkFirstStepText('Second step');

      stepperPage.clickNextButton(0);
      stepperPage.checkFirstStepText('Third step');

      stepperPage.clickNextButton(0);
      stepperPage.checkFirstStepText('Fourth step');


    });
  });
});


