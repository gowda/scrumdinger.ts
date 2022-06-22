import React from 'react';
import { Row, Col } from 'react-bootstrap';

interface Props {
  currentSpeaker: string;
}

export default ({ currentSpeaker }: Props) => (
  <Row className='justify-content-center w-100 g-0'>
    <Col xs='auto'>
      <Row className='justify-content-center'>
        <Col xs='auto'>{currentSpeaker}</Col>
      </Row>
      <Row className='justify-content-center'>
        <Col xs='auto'>is speaking</Col>
      </Row>
    </Col>
  </Row>
);
