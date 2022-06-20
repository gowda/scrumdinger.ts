import React from 'react';
import { Row, Col } from 'react-bootstrap';

import Label from '../components/label';
import { Theme } from '../theme';

type Props = Theme;

export default ({ name, mainColor, accentColor }: Props) => (
  <Row className='justify-content-between'>
    <Col xs='auto'>
      <Label icon='palette'>Theme</Label>
    </Col>
    <Col
      xs='auto'
      className='rounded'
      style={{
        backgroundColor: mainColor,
        color: accentColor,
      }}
    >
      {name}
    </Col>
  </Row>
);
