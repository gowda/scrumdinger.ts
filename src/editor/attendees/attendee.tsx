import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';

import Label from '../../components/label';

interface Props {
  name: string;
  onDelete: () => void;
}

export default ({ name, onDelete }: Props) => (
  <Row>
    <Col>
      <Label icon='person'>{name}</Label>
    </Col>
    <Col xs='auto'>
      <Button
        className='p-0 shadow-none'
        onClick={onDelete}
        style={{
          backgroundColor: 'transparent',
          border: 'transparent',
          color: 'inherit',
        }}
      >
        <i className='bi-x-circle' />
      </Button>
    </Col>
  </Row>
);
