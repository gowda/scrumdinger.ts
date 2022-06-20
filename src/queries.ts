import { useMutation, useQuery } from 'react-query';
import { DailyScrum, sampleData as sourceSampleData } from './daily-scrum';

let sampleData = sourceSampleData;

export const useScrums = () =>
  useQuery<DailyScrum[], Error>(['scrums'], () => Promise.resolve(sampleData));

export const useScrum = (id?: string) =>
  useQuery<DailyScrum, Error>(['scrums', id], () => {
    const scrum = sampleData.find(({ id: scrumId }) => scrumId === id);
    if (scrum) {
      return Promise.resolve(scrum);
    }

    return Promise.reject(new Error(`DailyScrum not found with id ${id}`));
  });

export type DailyScrumAttrs = Omit<DailyScrum, 'id'>;

export const useUpdateScrumMutation = (id?: string) =>
  useMutation((attrs: DailyScrumAttrs) => {
    sampleData = sampleData.map(({ id: scrumId, ...rest }) =>
      scrumId === id ? { id, ...rest, ...attrs } : { id: scrumId, ...rest }
    );

    return Promise.resolve({ message: 'Updated' });
  });
