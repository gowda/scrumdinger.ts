import { useEffect, useState } from 'react';

import { DailyScrumTimer } from '../daily-scrum-timer';
import { useScrum } from '../queries';

// eslint-disable-next-line import/prefer-default-export
export const useTimeKeeper = (id?: string) => {
  const { isLoading, isError, error, isSuccess, data: scrum } = useScrum(id);
  const [worker, setWorker] = useState<Worker>();
  const [timer, setTimer] = useState<DailyScrumTimer>();

  useEffect(() => {
    if (!worker && isSuccess) {
      const localWorker = new Worker(
        new URL('workers/time-keeper.js', 'http://localhost:3000')
      );
      localWorker.addEventListener(
        'message',
        ({ data }: MessageEvent<DailyScrumTimer>) => {
          setTimer(data);
        }
      );
      setWorker(localWorker);
      localWorker.postMessage({ action: 'start', payload: scrum });
    }

    return () => {
      worker?.terminate();
      setWorker(undefined);
    };
  }, [id, isSuccess]);

  if (isLoading) {
    return {
      isLoading,
      isRunning: false,
      timer: undefined,
      skipSpeaker: () => false,
    };
  }

  if (isError) {
    return {
      isLoading: false,
      isError,
      error,
      isRunning: false,
      timer: undefined,
      skipSpeaker: () => false,
    };
  }

  return {
    isLoading: !timer,
    isRunning: !!timer,
    timer,
    skipSpeaker: () =>
      timer ? worker?.postMessage({ action: 'skip' }) : false,
  };
};
