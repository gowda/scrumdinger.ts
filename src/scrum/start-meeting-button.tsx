import React from 'react';
import { Row, Col } from 'react-bootstrap';

import { Link } from 'react-router-dom';

import Label from '../components/label';

interface Props {
  id: string;
}

export default ({ id }: Props) => (
  <Link
    to={`/scrums/${id}/meeting`}
    style={{ textDecoration: 'none', fontWeight: 'bold' }}
  >
    <Row className='justify-content-between'>
      <Col xs='auto'>
        <Label icon='alarm'>Start meeting</Label>
      </Col>
      <Col xs='auto' className='ps-0'>
        <i className='bi-chevron-right' />
      </Col>
    </Row>
  </Link>
);
