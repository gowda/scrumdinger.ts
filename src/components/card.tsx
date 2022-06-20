import React from 'react';
import { Row, Col, Stack } from 'react-bootstrap';

import Label from './label';
import { DailyScrum } from '../daily-scrum';

type Props = Pick<DailyScrum, 'title' | 'attendees' | 'lengthInMinutes'>;

export default ({ title, attendees, lengthInMinutes }: Props) => (
  <Stack className='p-2 rounded'>
    <Row>
      <Col>
        <h4>{title}</h4>
      </Col>
    </Row>
    <Row className='justify-content-between'>
      <Col xs='auto'>
        <Label icon='people' color='inherit'>
          {attendees.length}
        </Label>
      </Col>
      <Col xs='auto'>
        <Label icon='clock' color='inherit' reversed>
          {lengthInMinutes}
        </Label>
      </Col>
    </Row>
  </Stack>
);
