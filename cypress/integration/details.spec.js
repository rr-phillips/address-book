describe('Testing the description feature', () => {
    it('Displays specific details of a person in an andress book', () => {
        cy.visit('http://localhost:3000');
        cy.get(['[data-class="person"]'][0]).first()
            .click()
            .get(['[data-details-container'])
            .get(['[data-class="details-img-container"'])
            .get(['[data-class="profile-img"'])
            .get(['[data-class="details-full_name"'])
            .get(['[data-class="details-phone"'])
            .get(['[data-class="details-email"'])
            .get(['[data-class="details-dob"']);
        cy.get('.base-overlay')
            .click('topLeft')
            .should('not.exist');
    });
});