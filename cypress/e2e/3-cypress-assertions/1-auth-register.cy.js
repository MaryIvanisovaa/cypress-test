import RegistrationPage from 'C:/Users/Admin/cypress-test/cypress/models/registrationPage';

describe('Check registration form and "Register" button', () => {
  context('page - /auth/register', () => {
    it('Filling out the registration form and clicking the "Register" button', () => {
      RegistrationPage.visitPage();
      RegistrationPage.fillRegistrationForm('Mariia', 'test@gmail.com', 'ash51srhdm', 'ash51srhdm');
    });
  });
});



