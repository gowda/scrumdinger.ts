import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

interface Props {
  enableAddButton?: boolean;
}

export default ({ enableAddButton = true }: Props) => (
  <Row className='justify-content-between align-items-center'>
    <Col xs='auto'>
      <h2 className='my-0'>Daily scrums</h2>
    </Col>
    {enableAddButton && (
      <Col xs='auto' className='me-2'>
        <Link to='/scrums/new' style={{ textDecoration: 'none' }}>
          <i className='bi-plus-lg' style={{ fontSize: '2rem' }} />
        </Link>
      </Col>
    )}
  </Row>
);
