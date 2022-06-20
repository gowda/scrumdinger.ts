import React from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

import { DailyScrumMeetingInfo } from '../daily-scrum';

import SectionTitle from '../components/section-title';
import StartMeetingButton from './start-meeting-button';
import Duration from './duration';
import Theme from './theme';

type Props = DailyScrumMeetingInfo & { id: string };

export default ({ id, lengthInMinutes, theme }: Props) => (
  <>
    <SectionTitle title='MEETING INFO' />
    <ListGroup className='mt-2'>
      <ListGroupItem>
        <StartMeetingButton id={id} />
      </ListGroupItem>
      <ListGroupItem>
        <Duration value={lengthInMinutes} />
      </ListGroupItem>
      <ListGroupItem>
        <Theme {...theme} />
      </ListGroupItem>
    </ListGroup>
  </>
);
