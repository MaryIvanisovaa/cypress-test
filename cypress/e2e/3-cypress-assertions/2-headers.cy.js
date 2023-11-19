import RegistrationPage from 'C:/Users/Admin/cypress-test/cypress/models/registrationPage';

describe('Check the headers of all elements in the /auth/register page', () => {
    context('page - /auth/register', () => {
      it('Check the headers of all elements', () => {
        RegistrationPage.visitPage();
        RegistrationPage.checkHeaders();
      });
    });
  });