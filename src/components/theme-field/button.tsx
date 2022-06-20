import React, { SyntheticEvent } from 'react';
import { Row, Col, Button } from 'react-bootstrap';

import { Theme } from '../../theme';

interface Props {
  value: Theme;
  onClick: (event: SyntheticEvent<HTMLButtonElement>) => void;
}

export default ({ value, onClick }: Props) => (
  <Button
    className='w-100 shadow-none'
    style={{
      background: 'transparent',
      border: 'transparent',
      color: 'inherit',
    }}
    onClick={onClick}
  >
    <Row>
      <Col
        className='rounded text-center'
        style={{
          backgroundColor: value.mainColor,
          color: value.accentColor,
        }}
      >
        {value.name}
      </Col>
      <Col xs='auto'>
        <i className='bi-chevron-down' />
      </Col>
    </Row>
  </Button>
);
