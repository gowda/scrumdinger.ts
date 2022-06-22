describe('Scrumdinger', () => {
  const url = 'http://localhost:3000';

  context('when no scrums present', () => {
    beforeEach(() => cy.visit(url));

    it('shows message', () => {
      cy.get('h4')
        .contains(/no scrums created yet/i)
        .should('be.visible');
    });

    it('shows create button', () => {
      cy.get('a').contains(/create scrum/i);
    });
  });
});
