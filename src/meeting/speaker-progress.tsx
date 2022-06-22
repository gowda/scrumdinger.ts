import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';

interface Props {
  text: string;
  lastSpeaker: boolean;
  onSkip: () => void;
}

export default ({ text, lastSpeaker, onSkip }: Props) => (
  <Row className='justify-content-between align-items-center'>
    <Col xs='auto'>
      <span>{text}</span>
    </Col>
    <Col xs='auto'>
      <Button className='shadow-none' disabled={lastSpeaker} onClick={onSkip}>
        <i className='bi-skip-forward' />
      </Button>
    </Col>
  </Row>
);
