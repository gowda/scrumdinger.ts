import React, { useState, useEffect } from 'react';

import { DailyScrum } from '../daily-scrum';
import Progress from './progress';
import TimeProgress from './time-progress';
import SpeakerProgress from './speaker-progress';

type Props = DailyScrum;

export default ({
  meetingInfo: { lengthInMinutes, theme },
  attendees,
}: Props) => {
  const [intervalID, setIntervalID] = useState<NodeJS.Timeout>();
  const [totalSpeakers] = useState(attendees.length);
  const [secondsPerSpeaker] = useState(
    totalSpeakers ? (lengthInMinutes * 60) / totalSpeakers : 0
  );
  const [currentSpeakerIndex, setCurrentSpeakerIndex] = useState(1);
  const [lastSpeaker, setLastSpeaker] = useState<boolean>(false);
  const [text, setText] = useState(
    `Speaker ${currentSpeakerIndex} of ${totalSpeakers}`
  );

  useEffect(
    () => setLastSpeaker(currentSpeakerIndex === totalSpeakers),
    [currentSpeakerIndex, totalSpeakers]
  );

  useEffect(() => {
    if (lastSpeaker) {
      setText('Last speaker');
    } else {
      setText(`Speaker ${currentSpeakerIndex} of ${totalSpeakers}`);
    }
  }, [currentSpeakerIndex, totalSpeakers, lastSpeaker]);

  useEffect(() => {
    if (!intervalID && secondsPerSpeaker) {
      const id = setInterval(() => {
        setCurrentSpeakerIndex((previous) =>
          lastSpeaker ? previous : previous + 1
        );
      }, secondsPerSpeaker * 1000);
      setIntervalID(id);
    }

    return () => {
      if (intervalID) {
        clearInterval(intervalID);
      }
    };
  }, [lastSpeaker, secondsPerSpeaker]);

  useEffect(() => {
    if (lastSpeaker && intervalID) {
      clearInterval(intervalID);
      setIntervalID(undefined);
    }
  }, [lastSpeaker]);

  return (
    <div className='d-flex flex-column justify-content-between py-4'>
      <TimeProgress lengthInMinutes={lengthInMinutes} />
      <Progress
        currentSpeaker={attendees[currentSpeakerIndex]}
        currentSpeakerIndex={currentSpeakerIndex}
        totalSpeakers={totalSpeakers}
        theme={theme}
      />
      <SpeakerProgress
        text={text}
        lastSpeaker={lastSpeaker}
        onSkip={() =>
          setCurrentSpeakerIndex((previous) =>
            previous === totalSpeakers ? previous : previous + 1
          )
        }
      />
    </div>
  );
};
