import React from 'react';
import { Row, Col } from 'react-bootstrap';

export default () => (
  <Row className='justify-content-center'>
    <Col xs='auto'>
      <svg height='320' width='320'>
        <circle
          cx='160'
          cy='160'
          r='144'
          stroke='black'
          strokeWidth='16'
          fill='transparent'
        />
      </svg>
    </Col>
  </Row>
);
