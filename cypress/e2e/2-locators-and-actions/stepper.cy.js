describe('Check text of "Step content#1"', ()=>{
    context('Check  text of all buttons', ()=>{


it ('Check text of "Step content#1', ()=>{
cy.visit('pages/layout/stepper');
cy.get('.selected').eq(0).should('include.text', 'First step').get('[nbsteppernext=""]').eq(1).click()
cy.get('.selected').eq(0).should('include.text', 'Second step').get('[nbsteppernext=""]').eq(0).click()
cy.get('.selected').eq(0).should('include.text', 'Third step').get('[nbsteppernext=""]').eq(0).click()
cy.get('.selected').eq(0).should('include.text', 'Fourth step')

});
});
});



