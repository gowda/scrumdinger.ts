import { useEffect, useState } from 'react';

import { BASENAME } from '../config';
import { DailyScrumTimer } from '../daily-scrum-timer';
import { useScrum } from '../queries';

// eslint-disable-next-line import/prefer-default-export
export const useTimeKeeper = (id?: string) => {
  const { isLoading, isError, error, isSuccess, data: scrum } = useScrum(id);
  const [workerUrl, setWorkerUrl] = useState<string>();
  const [worker, setWorker] = useState<Worker>();
  const [timer, setTimer] = useState<DailyScrumTimer>();

  useEffect(() => {
    const url = new URL(window.location.href);
    const base = `${url.protocol}//${url.host}`;
    setWorkerUrl(
      `${base}${
        BASENAME === '/' ? BASENAME : `${BASENAME}/`
      }workers/time-keeper.js`
    );
  }, [window.location.href]);

  useEffect(() => {
    if (!worker && isSuccess && workerUrl) {
      const localWorker = new Worker(new URL(workerUrl));
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
  }, [id, isSuccess, workerUrl]);

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
