import React from 'react';
import { Row, Col } from 'react-bootstrap';

import { DailyScrum } from '../daily-scrum';
import MeetingInfo from './meeting-info';
import Attendees from './attendees';

type Props = DailyScrum;

export default (props: Props) => (
  <Row className='justify-content-center p-4'>
    <Col xs={12} sm={6}>
      <MeetingInfo {...props} />
      <Attendees {...props} />
    </Col>
  </Row>
);
