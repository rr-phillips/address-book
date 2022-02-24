describe('Getting each person', () => {
    it('Displays all of the people in the address book', () => {
        cy.visit('http://localhost:3000');
        cy.get('[data-class="person-container"]');
        cy.get('[data-class="person"');
        cy.get('[data-class="person-img"]');
        cy.get('[data-class="person-name"]')
            .should('have.length', 50);
    });
});