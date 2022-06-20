import React from 'react';
import { Col, Row } from 'react-bootstrap';

export default () => (
  <Row className='justify-content-center align-items-end border-bottom py-2 mb-4'>
    <Col xs='auto' className='px-0'>
      <img src='/images/logo.png' alt='Scrumdinger' width={64} />
    </Col>
    <Col xs='auto' className='px-0'>
      <h1>Scrumdinger</h1>
    </Col>
  </Row>
);
