import React from 'react';

import Progress from './progress';
import Header from './header';
import Footer from './footer';
import { DailyScrumTimer } from '../daily-scrum-timer';

type Props = DailyScrumTimer & { skipSpeaker: () => void };

export default ({ skipSpeaker, ...timer }: Props) => (
  <div className='d-flex flex-column justify-content-between py-4'>
    <Header {...timer} />
    <Progress {...timer} />
    <Footer {...timer} onSkip={skipSpeaker} />
  </div>
);
