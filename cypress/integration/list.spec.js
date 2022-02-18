describe('Getting the list of people', () => {
    it('Displays all of the people in the address book', () => {
        cy.visit('http://localhost:3000');
        cy.get('[data-testid="contact-list"');
    });
});