import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { BASENAME } from '../config';

export default () => (
  <Row className='justify-content-center border-bottom py-2 mb-4'>
    <Col xs='auto'>
      <Link to='/' style={{ textDecoration: 'none', color: 'inherit' }}>
        <Row className='align-items-end'>
          <Col xs='auto' className='px-0'>
            <img
              src={`${BASENAME}images/logo.png`}
              alt='Scrumdinger'
              width={64}
            />
          </Col>
          <Col xs='auto' className='px-0'>
            <h1>Scrumdinger</h1>
          </Col>
        </Row>
      </Link>
    </Col>
  </Row>
);
