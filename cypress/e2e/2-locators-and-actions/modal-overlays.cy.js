describe('Check form "Enter name"', ()=>{
    context('page modal-overlays/dialog', ()=>{

it ('Check form "Enter name" on page modal-overlays/dialog(Return Result From Dialog)', ()=>{
cy.visit('pages/modal-overlays/dialog');
cy.get('.appearance-filled').last().click()
cy.get('input').parent().should('be.visible')
cy.contains('Enter your name').should('be.visible')
cy.get('input').last().get('.cancel').get('.status-success')

});
});
});
