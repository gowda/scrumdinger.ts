import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';

interface Props {
  statusText: string;
  lastSpeaker: boolean;
  onSkip: () => void;
}

export default ({ statusText, lastSpeaker, onSkip }: Props) => (
  <Row className='justify-content-between align-items-center'>
    <Col xs='auto'>
      <span>{statusText}</span>
    </Col>
    <Col xs='auto'>
      <Button
        name='skip'
        className='shadow-none'
        disabled={lastSpeaker}
        onClick={onSkip}
      >
        <i className='bi-skip-forward' />
      </Button>
    </Col>
  </Row>
);
