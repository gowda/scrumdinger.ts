import { useState, useEffect } from 'react';

// eslint-disable-next-line import/prefer-default-export
export const useStopClock = (lengthInMinutes: number) => {
  const [intervalID, setIntervalID] = useState<NodeJS.Timeout>();
  const [elapsed, setElapsed] = useState(0);
  const [remaining, setRemaining] = useState(lengthInMinutes * 60);

  useEffect(() => {
    if (!intervalID) {
      const id = setInterval(() => {
        setElapsed((previous) => previous + 1);
        setRemaining((previous) => previous - 1);
      }, 1000);
      setIntervalID(id);
    }

    return () => {
      if (intervalID) {
        clearInterval(intervalID);
      }
    };
  }, []);

  useEffect(() => {
    if (remaining === 0 && intervalID) {
      clearInterval(intervalID);
      setIntervalID(undefined);
    }
  }, [remaining]);

  return {
    elapsed,
    remaining,
  };
};
