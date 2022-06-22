import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import Header from './header';

export default () => (
  <>
    <Header enableAddButton={false} />
    <Row className='mt-4'>
      <Col>
        <h4>No scrums created yet.</h4>
      </Col>
    </Row>
    <Row className='mt-2'>
      <Col xs='auto'>
        <Link to='/scrums/new' className='btn btn-success shadow-none'>
          Create scrum
        </Link>
      </Col>
    </Row>
  </>
);
