import { useEffect, useState } from 'react';
import { DailyScrum } from '../daily-scrum';
import { DailyScrumTimer } from '../daily-scrum-timer';

// eslint-disable-next-line import/prefer-default-export
export const useTimeKeeper = (scrum: DailyScrum) => {
  const [worker, setWorker] = useState<Worker>();
  const [timer, setTimer] = useState<DailyScrumTimer>();

  useEffect(() => {
    if (!worker) {
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
  }, [scrum.id]);

  return {
    isLoading: !timer,
    isRunning: !!timer,
    timer,
    skipSpeaker: () =>
      timer ? worker?.postMessage({ action: 'skip' }) : false,
  };
};
