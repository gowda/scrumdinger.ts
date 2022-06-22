import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import Card from './card';
import { DailyScrum } from '../../daily-scrum';

type Props = DailyScrum;

export default ({ id, ...rest }: Props) => (
  <Link
    to={`/scrums/${id}`}
    style={{ textDecoration: 'none', color: 'inherit' }}
  >
    <Row className='align-items-center'>
      <Col>
        <Card {...rest} />
      </Col>
      <Col xs='auto' className='ps-0'>
        <i className='bi-chevron-right' />
      </Col>
    </Row>
  </Link>
);
