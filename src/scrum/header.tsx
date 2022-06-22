import React from 'react';
import { Row, Col } from 'react-bootstrap';

import { Link } from 'react-router-dom';
import { DailyScrum } from '../daily-scrum';

type Props = DailyScrum;

export default ({ id, meetingInfo: { title } }: Props) => (
  <>
    <Row className='justify-content-between align-items-center'>
      <Col xs='auto'>
        <h2 className='my-0'>{title}</h2>
      </Col>
      <Col xs='auto'>
        <Link to={`/scrums/${id}/edit`} style={{ textDecoration: 'none' }}>
          Edit
        </Link>
      </Col>
    </Row>
  </>
);
