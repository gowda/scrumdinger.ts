import React, { useEffect, useState } from 'react';
import { Row, Col, Button } from 'react-bootstrap';

interface Props {
  attendees: string[];
}

export default ({ attendees }: Props) => {
  const [totalSpeakers] = useState(attendees.length);
  const [currentSpeakerIndex, setCurrentSpeakerIndex] = useState(1);
  const [text, setText] = useState(
    `Speaker ${currentSpeakerIndex} of ${totalSpeakers}`
  );

  useEffect(() => {
    if (currentSpeakerIndex === totalSpeakers) {
      setText('Last speaker');
    } else {
      setText(`Speaker ${currentSpeakerIndex} of ${totalSpeakers}`);
    }
  }, [currentSpeakerIndex, totalSpeakers]);

  return (
    <Row className='justify-content-between align-items-center'>
      <Col xs='auto'>
        <span>{text}</span>
      </Col>
      <Col xs='auto'>
        <Button
          className='shadow-none'
          disabled={currentSpeakerIndex === totalSpeakers}
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
