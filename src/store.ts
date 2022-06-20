import { DailyScrum } from './daily-scrum';

const KEY = 'scrumdinger.scrums';

export const getScrums = (): Promise<DailyScrum[]> => {
  const scrumsJSON = localStorage.getItem(KEY);

  if (!scrumsJSON || scrumsJSON.trim().length === 0) {
    return Promise.resolve([] as DailyScrum[]);
  }

  return Promise.resolve(JSON.parse(scrumsJSON) as DailyScrum[]);
};

export const setScrums = (scrums: DailyScrum[]) => {
  localStorage.setItem(KEY, JSON.stringify(scrums));
};
