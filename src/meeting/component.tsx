import React from 'react';

import { DailyScrum } from '../daily-scrum';
import LoadingMessage from '../components/loading-message';
import Progress from './progress';
import Header from './header';
import Footer from './footer';
import { useTimeKeeper } from '../hooks/time-keeper';

type Props = DailyScrum;

export default (props: Props) => {
  const { isLoading, isRunning, timer, skipSpeaker } = useTimeKeeper(props);

  return (
    <>
      {isLoading && <LoadingMessage />}
      {isRunning && timer && (
        <div className='d-flex flex-column justify-content-between py-4'>
          <Header {...timer} />
          <Progress {...timer} />
          <Footer {...timer} onSkip={skipSpeaker} />
        </div>
      )}
    </>
  );
};
