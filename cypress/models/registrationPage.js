class RegistrationPage {
    visitPage() {
      cy.visit('/auth/register');
    }
  
    fillRegistrationForm(name, email, password, rePassword) {
      const inputData = {
        '#input-name': name,
        '#input-email': email,
        '#input-password': password,
        '#input-re-password': rePassword
      };
  
      cy.get('nb-register').within(() => {
        Object.entries(inputData).forEach(([selector, value]) => {
          cy.get(selector).click().type(value).should('have.attr', 'ng-reflect-model', value);
        });
      });
  
      cy.get('.custom-checkbox').should('not.be.checked').click();
      cy.get('.appearance-filled').click();
    }
  
    checkHeaders() {
      cy.get('.title').first().should('contain', 'Register');
      cy.get('.label').eq(0).should('have.text', 'Full name:');
      cy.get('.label').eq(1).should('have.text', 'Email address:');
      cy.get('.label').eq(2).should('have.text', 'Password:');
      cy.get('.label').eq(3).should('have.text', 'Repeat password:');
      cy.get('.label').eq(4).should('contain', 'Agree to');
      cy.get('section.links').should('include.text', 'or enter with:');
    }
  
    checkErrorMessagesEmptyEmail() {
      cy.get('[ng-reflect-status]').eq(1).click();
      cy.get('[ng-reflect-status]').eq(2).click();
      cy.get('.caption').should('contain', 'Email is required!');
    }
  
    checkErrorMessagesIncorrectEmail() {
      cy.get('[ng-reflect-status]').eq(1).type('hh');
      cy.get('[ng-reflect-status]').eq(2).click();
      cy.get('.caption').should('contain', 'Email should be the real one!');
    }
  }
  
  export default new RegistrationPage();
  