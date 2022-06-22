import React from 'react';

import { DailyScrum } from '../daily-scrum';
import LoadingMessage from '../components/loading-message';
import Progress from './progress';
import Header from './header';
import SpeakerProgress from './speaker-progress';
import { useTimeKeeper } from '../hooks/time-keeper';

type Props = DailyScrum;

export default (props: Props) => {
  const { isLoading, isRunning, timer, skipSpeaker } = useTimeKeeper(props);
  const {
    attendees,
    meetingInfo: { lengthInMinutes, theme },
  } = props;

  return (
    <>
      {isLoading && <LoadingMessage />}
      {isRunning && timer && (
        <div className='d-flex flex-column justify-content-between py-4'>
          <Header lengthInMinutes={lengthInMinutes} />
          <Progress
            currentSpeaker={timer.currentSpeaker}
            currentSpeakerIndex={timer.currentSpeakerIndex}
            totalSpeakers={attendees.length}
            theme={theme}
          />
          <SpeakerProgress
            text={timer.statusText}
            lastSpeaker={timer.lastSpeaker}
            onSkip={skipSpeaker}
          />
        </div>
      )}
    </>
  );
};
