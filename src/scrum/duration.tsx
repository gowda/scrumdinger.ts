import React from 'react';
import { Row, Col } from 'react-bootstrap';

import Label from '../components/label';

interface Props {
  value: number;
}

export default ({ value }: Props) => (
  <Row className='justify-content-between'>
    <Col xs='auto'>
      <Label icon='clock'>Length</Label>
    </Col>
    <Col xs='auto'>{`${value} minutes`}</Col>
  </Row>
);
