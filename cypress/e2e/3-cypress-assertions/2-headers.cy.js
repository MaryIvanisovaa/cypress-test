import RegistrationPage from '../../models/registrationPage';

describe('Check the headers of all elements in the /auth/register page', () => {
    context('page - /auth/register', () => {
      it('Check the headers of all elements', () => {
        RegistrationPage.visitPage();
        RegistrationPage.checkHeaders();
      });
    });
  });