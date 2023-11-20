import RegistrationPage from '../../models/registrationPage';
describe('Check error messages for each field', () => {
    context('page - /auth/register', () => {
      it('Error behind "Email address" (empty input)', () => {
        RegistrationPage.visitPage();
        RegistrationPage.checkErrorMessagesEmptyEmail();
      });
  
      it('Error behind "Email address" (incorrect input)', () => {
        RegistrationPage.visitPage();
        RegistrationPage.checkErrorMessagesIncorrectEmail();
      });
    });
  });
  