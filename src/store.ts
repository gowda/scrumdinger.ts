import { DailyScrum } from './daily-scrum';

const SCRUMS_KEY = 'scrumdinger.scrums';

export const getId = (): string => `${new Date().getTime()}`;

export const getScrums = (): Promise<DailyScrum[]> => {
  const scrumsJSON = localStorage.getItem(SCRUMS_KEY);

  if (!scrumsJSON || scrumsJSON.trim().length === 0) {
    return Promise.resolve([] as DailyScrum[]);
  }

  return Promise.resolve(JSON.parse(scrumsJSON) as DailyScrum[]);
};

export const setScrums = (scrums: DailyScrum[]) => {
  localStorage.setItem(SCRUMS_KEY, JSON.stringify(scrums));
};
