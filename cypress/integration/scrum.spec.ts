import { DailyScrum } from '../../src/daily-scrum';

describe('Scrumdinger scrum', () => {
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
      .then(() => cy.visit(`${baseUrl}/scrums/${scrum.id}`));
  });

  it('shows details', () => {
    cy.get('h2').contains(scrum.meetingInfo.title).should('be.visible');
    cy.get('a').contains('Start meeting');
    cy.get('div[class=row]')
      .contains('Length')
      .parents()
      .siblings()
      .contains(`${scrum.meetingInfo.lengthInMinutes} minutes`);
    cy.get('div[class=row]')
      .contains('Theme')
      .parents()
      .siblings()
      .contains(scrum.meetingInfo.theme.name);
  });

  it('shows attendees', () => {
    scrum.attendees.forEach((attendee) =>
      cy.get('div[class=row]').contains(attendee)
    );
  });

  it('shows edit button', () => {
    cy.get('a').contains('Edit').should('be.visible');
  });

  it('takes to edit scrum form on clicking edit button', () => {
    cy.get('a').contains('Edit').click();
    cy.url().should('include', `/scrums/${scrum.id}/edit`);
  });

  it('clicking "Start meeting" takes to meeting page', () => {
    cy.get('a').contains('Start meeting').click();
  });
});
