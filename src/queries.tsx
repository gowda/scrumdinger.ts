import { useQuery } from 'react-query';
import { DailyScrum, sampleData } from './daily-scrum';

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
