describe('Scrumdinger new scrum', () => {
  const url = 'http://localhost:3000/scrums/new';

  context('when scrums present', () => {
    beforeEach(() => cy.visit(url));

    it('shows all fields', () => {
      cy.get('input[name=name]').type('Test scrum name');
      cy.get('input[type=range][name=length]')
        .invoke('val', 25)
        .trigger('change');
      cy.get('button').contains('Save').click();
      cy.url().should('match', /scrums\/[0-9]+/);
    });
  });
});
