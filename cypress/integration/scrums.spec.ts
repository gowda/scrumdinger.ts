import { DailyScrum } from '../../src/daily-scrum';

describe('Scrumdinger listing', () => {
  const url = 'http://localhost:3000';

  context('when scrums present', () => {
    let scrums: DailyScrum[];
    beforeEach(() => {
      cy.fixture('scrums.json')
        .then((json) => {
          scrums = json;
          return json;
        })
        .then((json) =>
          localStorage.setItem('scrumdinger.scrums', JSON.stringify(json))
        );
      cy.visit(url);
    });

    it('shows every scrum', () => {
      scrums.forEach((scrum) => {
        cy.get('h4').contains(scrum.meetingInfo.title).should('be.visible');
        cy.get('div').contains(scrum.attendees.length).should('be.visible');
        cy.get('div')
          .contains(scrum.meetingInfo.lengthInMinutes)
          .should('be.visible');
      });
    });

    it('shows add button', () => {
      cy.get('a > i.bi-plus-lg').should('be.visible');
    });

    it('takes to new scrum form on clicking add button', () => {
      cy.get('a > i.bi-plus-lg').click();
      cy.url().should('include', '/scrums/new');
    });
  });
});
