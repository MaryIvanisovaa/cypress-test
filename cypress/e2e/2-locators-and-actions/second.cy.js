describe('Check form "Enter name"', ()=>{
    context('page modal-overlays/dialog', ()=>{

it ('Check form "Enter name" on page modal-overlays/dialog(Return Result From Dialog)', ()=>{
cy.visit('pages/modal-overlays/dialog');
cy.get('.appearance-filled').last().click()
cy.get('input').parent().should('be.visible')
cy.contains('Enter your name').should('have.text', 'Enter your name')
cy.get('input').last().get('.cancel').get('.status-success')

});
});
});

// тут є питання щодо 8 строчки. я спочатку написала просто cy.contains('Enter your name') і думала що це одночасно можна вважати перевіркою тексту, але потім прочитала що необзідно використовувати cy.get(element).should('have.text', 'your text') і додала це. 
// тож питання в тому, чи можна су.contains уже вважати перевіркою тексту і виключити .should('have.text', 'your text')?