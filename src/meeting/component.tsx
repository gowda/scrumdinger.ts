import React, { useEffect, useState } from 'react';
import { Row, Col, Button } from 'react-bootstrap';

import { DailyScrum } from '../daily-scrum';
import Progress from './progress';
import TimeProgress from './time-progress';

type Props = DailyScrum;

export default (_props: Props) => {
  const [intervalID, setIntervalID] = useState<NodeJS.Timeout>();
  const [elapsed, setElapsed] = useState(0);
  const [remaining, setRemaining] = useState(900);

  useEffect(() => {
    if (!intervalID) {
      const id = setInterval(() => {
        setElapsed((previous) => previous + 1);
        setRemaining((previous) => previous - 1);
      }, 1000);
      setIntervalID(id);
    }

    return () => {
      if (intervalID) {
        clearInterval(intervalID);
      }
    };
  }, []);

  useEffect(() => {
    if (remaining === 0 && intervalID) {
      clearInterval(intervalID);
      setIntervalID(undefined);
    }
  }, [remaining]);

  return (
    <div className='d-flex flex-column justify-content-between py-4'>
      <TimeProgress elapsed={elapsed} remaining={remaining} />
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
};
