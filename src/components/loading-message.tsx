import React from 'react';
import { Col, Row, Spinner } from 'react-bootstrap';

export default () => (
  <Row>
    <Col xs='auto'>
      <Spinner animation='border' />
    </Col>
    <Col xs='auto'>Loading...</Col>
  </Row>
);
