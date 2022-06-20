import React from 'react';
import { Row, Col } from 'react-bootstrap';

interface Props {
  title: string;
}

export default ({ title }: Props) => (
  <Row className='mt-4'>
    <Col>
      <h6 className='text-muted text-uppercase fw-lighter my-0'>{title}</h6>
    </Col>
  </Row>
);
