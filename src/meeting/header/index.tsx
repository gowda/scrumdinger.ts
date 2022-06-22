import React from 'react';
import { Row, Col, ProgressBar } from 'react-bootstrap';
import { useStopClock } from '../../hooks/stop-clock';

import TimeElapsed from './time-elapsed';
import TimeRemaining from './time-remaining';

interface Props {
  lengthInMinutes: number;
}

export default ({ lengthInMinutes }: Props) => {
  const { elapsed, remaining } = useStopClock(lengthInMinutes);

  return (
    <>
      <Row>
        <Col>
          <ProgressBar now={elapsed} max={elapsed + remaining} />
        </Col>
      </Row>
      <Row className='justify-content-between'>
        <Col xs='auto'>
          <TimeElapsed value={elapsed} />
        </Col>
        <Col xs='auto'>
          <TimeRemaining value={remaining} />
        </Col>
      </Row>
    </>
  );
};
