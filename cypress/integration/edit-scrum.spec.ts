import { DailyScrum } from '../../src/daily-scrum';

describe('Scrumdinger editing', () => {
  let scrum: DailyScrum;
  const baseUrl = 'http://localhost:3000';

  beforeEach(() => {
    cy.fixture('scrums.json')
      .then((json: DailyScrum[]) => {
        // eslint-disable-next-line prefer-destructuring
        scrum = json[0];
        return json;
      })
      .then((json) =>
        localStorage.setItem('scrumdinger.scrums', JSON.stringify(json))
      )
      .then(() => cy.visit(`${baseUrl}/scrums/${scrum.id}`))
      .then(() => cy.get('a').contains('Edit').click());
  });

  it('shows all fields', () => {
    cy.get('input[name=name]').clear().type('Updated scrum name');
    cy.get('input[type=range][name=length]')
      .invoke('val', 25)
      .trigger('change');
    cy.get('input[name=attendee]')
      .clear()
      .type('Test attendee 1')
      .type('{enter}');
    cy.get('button').contains('Save').click();
    cy.url().should('match', /scrums\/[0-9]+$/);
  });
});
