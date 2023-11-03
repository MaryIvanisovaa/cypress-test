describe('Check form "Enter name"', ()=>{
    context('page modal-overlays/dialog', ()=>{

it ('Check form "Enter name" on page modal-overlays/dialog(Return Result From Dialog)', ()=>{
cy.visit('pages/modal-overlays/dialog');
cy.get('.appearance-filled').last().click()
cy.contains('Enter your name')
cy.get('input').last().get('.cancel').get('.status-success')

});
});
});
