import React from 'react';
import { Row, Col, Stack } from 'react-bootstrap';
import { DailyScrum } from './daily-scrum';

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
        <Row>
          <Col xs='auto'>
            <i className='bi-people' />
          </Col>
          <Col xs='auto' className='px-0'>
            {attendees.length}
          </Col>
        </Row>
      </Col>
      <Col xs='auto'>
        <Row>
          <Col xs='auto' className='px-0'>
            {lengthInMinutes}
          </Col>
          <Col xs='auto'>
            <i className='bi-clock' />
          </Col>
        </Row>
      </Col>
    </Row>
  </Stack>
);
