import { useMutation, useQuery, useQueryClient } from 'react-query';
import { DailyScrum } from './daily-scrum';
import { getId, getScrums, setScrums } from './store';

export const useScrums = () =>
  useQuery<DailyScrum[], Error>(['scrums'], () => getScrums());

export const useScrum = (id?: string) =>
  useQuery<DailyScrum, Error>(['scrums', id], () =>
    getScrums()
      .then((scrums) => scrums.find(({ id: scrumId }) => scrumId === id))
      .then((scrum) => {
        if (scrum) {
          return scrum;
        }
        throw new Error(`DailyScrum not found with id ${id}`);
      })
  );

export type DailyScrumAttrs = Omit<DailyScrum, 'id'>;

export const useUpdateScrumMutation = (id?: string) => {
  const queryClient = useQueryClient();

  return useMutation((attrs: DailyScrumAttrs) =>
    getScrums()
      .then((scrums) =>
        scrums.map(({ id: scrumId, ...rest }) =>
          scrumId === id ? { id, ...rest, ...attrs } : { id: scrumId, ...rest }
        )
      )
      .then((scrums) => setScrums(scrums))
      .then(() => queryClient.invalidateQueries(['scrums']))
  );
};

export const useCreateScrumMutation = () => {
  const queryClient = useQueryClient();

  return useMutation((attrs: DailyScrumAttrs) => {
    const scrum = { id: getId(), ...attrs };

    return getScrums()
      .then((scrums) => [scrum, ...scrums])
      .then((scrums) => setScrums(scrums))
      .then(() => queryClient.invalidateQueries(['scrums']))
      .then(() => scrum);
  });
};
