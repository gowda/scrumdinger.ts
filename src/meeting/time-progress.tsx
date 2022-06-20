import React, { useState, useEffect } from 'react';
import { Row, Col, ProgressBar } from 'react-bootstrap';

import TimeElapsed from './time-elapsed';
import TimeRemaining from './time-remaining';

interface Props {
  lengthInMinutes: number;
}

export default ({ lengthInMinutes }: Props) => {
  const [intervalID, setIntervalID] = useState<NodeJS.Timeout>();
  const [elapsed, setElapsed] = useState(0);
  const [remaining, setRemaining] = useState(lengthInMinutes * 60);

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
