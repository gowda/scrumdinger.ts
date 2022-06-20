import React from 'react';
import { Col, Row } from 'react-bootstrap';

interface Props {
  message: string;
}

export default ({ message }: Props) => (
  <Row>
    <Col xs='auto'>{message}</Col>
  </Row>
);
