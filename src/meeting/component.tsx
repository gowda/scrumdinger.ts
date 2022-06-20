import React from 'react';

import { DailyScrum } from '../daily-scrum';
import Progress from './progress';
import TimeProgress from './time-progress';
import SpeakerProgress from './speaker-progress';

type Props = DailyScrum;

export default ({ meetingInfo: { lengthInMinutes }, attendees }: Props) => (
  <div className='d-flex flex-column justify-content-between py-4'>
    <TimeProgress lengthInMinutes={lengthInMinutes} />
    <Progress />
    <SpeakerProgress attendees={attendees} />
  </div>
);
