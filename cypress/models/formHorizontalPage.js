// cypress/pageObjects/loginPage.js

class LoginPage {
    visitLoginPage() {
      cy.visit('pages/forms/layouts');
    }
  
    fillEmail(email) {
      cy.get('#inputEmail3').clear().type(email);
    }
  
    fillPassword(password) {
      cy.get('#inputPassword3').clear().type(password, { log: false });
    }
  
    checkCheckbox() {
      cy.get('.custom-checkbox').last().click();
    }
  
    clickLoginButton() {
      cy.get('.appearance-filled').last().click();
    }
  }
  
  export default LoginPage;
  