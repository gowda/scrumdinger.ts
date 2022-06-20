import React, { useEffect, useState } from 'react';
import { Row, Col, Button } from 'react-bootstrap';

interface Props {
  lengthInMinutes: number;
  attendees: string[];
}

export default ({ lengthInMinutes, attendees }: Props) => {
  const [intervalID, setIntervalID] = useState<NodeJS.Timeout>();
  const [totalSpeakers] = useState(attendees.length);
  const [secondsPerSpeaker] = useState(
    totalSpeakers ? (lengthInMinutes * 60) / totalSpeakers : 0
  );
  const [currentSpeakerIndex, setCurrentSpeakerIndex] = useState(1);
  const [lastSpeaker, setLastSpeaker] = useState<boolean>(false);
  const [text, setText] = useState(
    `Speaker ${currentSpeakerIndex} of ${totalSpeakers}`
  );

  useEffect(
    () => setLastSpeaker(currentSpeakerIndex === totalSpeakers),
    [currentSpeakerIndex, totalSpeakers]
  );

  useEffect(() => {
    if (lastSpeaker) {
      setText('Last speaker');
    } else {
      setText(`Speaker ${currentSpeakerIndex} of ${totalSpeakers}`);
    }
  }, [currentSpeakerIndex, totalSpeakers, lastSpeaker]);

  useEffect(() => {
    if (!intervalID && secondsPerSpeaker) {
      const id = setInterval(() => {
        setCurrentSpeakerIndex((previous) =>
          lastSpeaker ? previous : previous + 1
        );
      }, secondsPerSpeaker * 1000);
      setIntervalID(id);
    }

    return () => {
      if (intervalID) {
        clearInterval(intervalID);
      }
    };
  }, [lastSpeaker, secondsPerSpeaker]);

  useEffect(() => {
    if (lastSpeaker && intervalID) {
      clearInterval(intervalID);
      setIntervalID(undefined);
    }
  }, [lastSpeaker]);

  return (
    <Row className='justify-content-between align-items-center'>
      <Col xs='auto'>
        <span>{text}</span>
      </Col>
      <Col xs='auto'>
        <Button
          className='shadow-none'
          disabled={lastSpeaker}
          onClick={() =>
            setCurrentSpeakerIndex((previous) =>
              previous === totalSpeakers ? previous : previous + 1
            )
          }
        >
          <i className='bi-skip-forward' />
        </Button>
      </Col>
    </Row>
  );
};
