import React, { ReactNode } from 'react';
import { Row, Col } from 'react-bootstrap';

interface Props {
  icon: string;
  children: ReactNode;
}

export default ({ icon, children }: Props) => (
  <Row>
    <Col xs='auto' className='pe-0'>
      <i className={`bi-${icon}`} style={{ color: '#117CFF' }} />
    </Col>
    <Col xs='auto'>{children}</Col>
  </Row>
);
