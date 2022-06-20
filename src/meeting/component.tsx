import React, { useEffect, useState } from 'react';

import { DailyScrum } from '../daily-scrum';
import Progress from './progress';
import TimeProgress from './time-progress';
import SpeakerProgress from './speaker-progress';

type Props = DailyScrum;

export default ({ attendees }: Props) => {
  const [intervalID, setIntervalID] = useState<NodeJS.Timeout>();
  const [elapsed, setElapsed] = useState(0);
  const [remaining, setRemaining] = useState(900);

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

  return (
    <div className='d-flex flex-column justify-content-between py-4'>
      <TimeProgress elapsed={elapsed} remaining={remaining} />
      <Progress />
      <SpeakerProgress attendees={attendees} />
    </div>
  );
};
