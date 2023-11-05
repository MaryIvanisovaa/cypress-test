describe('This test checks login in Horizontal form', ()=>{
    context('Check that all fields can be fill and can click button "Login"', ()=>{

it ('All fields are available and button "Login" is clickable', ()=>{
cy.visit('pages/forms/layouts');
cy.get('#inputEmail3').clear().type('test123@test.com')
cy.get('#inputPassword3').clear().type('125wrhrejetj', {log:false})
cy.get('.custom-checkbox').last().click()
cy.get('.appearance-filled').last().click()

});
});
});
