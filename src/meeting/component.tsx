import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';

import { DailyScrum } from '../daily-scrum';
import Progress from './progress';
import TimeProgress from './time-progress';

type Props = DailyScrum;

export default (_props: Props) => (
  <div className='d-flex flex-column justify-content-between py-4'>
    <TimeProgress elapsed={300} remaining={600} />
    <Progress />
    <Row className='justify-content-between align-items-center'>
      <Col xs='auto'>
        <span>Speaker 1 of 3</span>
      </Col>
      <Col xs='auto'>
        <Button>
          <i className='bi-skip-forward' />
        </Button>
      </Col>
    </Row>
  </div>
);
