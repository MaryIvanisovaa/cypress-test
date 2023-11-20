// cypress/integration/loginTest.spec.js
import LoginPage from '../../models/formHorizontalPage';

describe('This test checks login in Horizontal form', () => {
  const loginPage = new LoginPage();

  context('Check that all fields can be filled and can click button "Login"', () => {
    it('All fields are available and button "Login" is clickable', () => {
      loginPage.visitLoginPage();
      loginPage.fillEmail('test123@test.com');
      loginPage.fillPassword('125wrhrejetj');
      loginPage.checkCheckbox();
      loginPage.clickLoginButton();
    });
  });
});
