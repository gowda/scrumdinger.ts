import React, { ReactNode } from 'react';
import { Row, Col } from 'react-bootstrap';
import { Color } from '../theme';

interface Props {
  icon: string;
  children: ReactNode;
  color?: Color;
  reversed?: boolean;
}

export default ({
  icon,
  children,
  color = '#117CFF',
  reversed = false,
}: Props) => (
  <Row>
    <Col
      xs={{ span: 'auto', order: reversed ? 'last' : 'first' }}
      className={reversed ? '' : 'pe-0'}
    >
      <i className={`bi-${icon}`} style={{ color }} />
    </Col>
    <Col xs='auto' className={reversed ? 'pe-0' : ''}>
      {children}
    </Col>
  </Row>
);
