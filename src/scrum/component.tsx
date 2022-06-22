import React from 'react';

import { DailyScrum } from '../daily-scrum';
import Header from './header';
import MeetingInfo from './meeting-info';
import Attendees from './attendees';

type Props = DailyScrum;

export default ({ id, meetingInfo, ...rest }: Props) => (
  <>
    <Header id={id} meetingInfo={meetingInfo} {...rest} />
    <MeetingInfo id={id} {...meetingInfo} />
    <Attendees {...rest} />
  </>
);
