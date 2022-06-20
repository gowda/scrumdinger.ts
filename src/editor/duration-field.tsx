import React from 'react';
import { Row, Col } from 'react-bootstrap';

import FormRange from 'react-bootstrap/esm/FormRange';

import Label from '../components/label';

interface Props {
  value: number;
  onChange: (change: number) => void;
}

export default ({ value, onChange }: Props) => (
  <Row className='justify-content-between'>
    <Col xs='auto'>
      <Label icon='clock'>Length</Label>
    </Col>
    <Col>
      <FormRange
        min='5'
        max='30'
        onChange={({ target: { value: change } }) =>
          onChange(parseInt(change, 10))
        }
      />
    </Col>
    <Col xs={2}>{`${value} minutes`}</Col>
  </Row>
);
