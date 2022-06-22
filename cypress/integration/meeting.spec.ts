import { DailyScrum } from '../../src/daily-scrum';

describe('Scrumdinger meeting', () => {
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
      .then(() => cy.visit(`${baseUrl}/scrums/${scrum.id}/meeting`));
  });

  it('shows details', () => {
    cy.get('div').contains(scrum.attendees[0]).should('be.visible');
  });

  it('skips to next speaker on clicking "Skip button"', () => {
    cy.get('button[name=skip]').click();
    cy.get('button[name=skip]')
      .parents()
      .siblings()
      .contains('Speaker 2 of 4')
      .should('be.visible');
  });
});
