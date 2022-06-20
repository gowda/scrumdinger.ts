import React from 'react';
import { Row, Col } from 'react-bootstrap';

import { Link } from 'react-router-dom';
import { DailyScrum } from '../daily-scrum';
import MeetingInfo from './meeting-info';
import Attendees from './attendees';

type Props = DailyScrum;

export default ({ id, ...props }: Props) => {
  const {
    meetingInfo: { title },
  } = props;

  return (
    <Row className='justify-content-center p-4'>
      <Col xs={12} sm={6}>
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
        <MeetingInfo id={id} {...props.meetingInfo} />
        <Attendees {...props} />
      </Col>
    </Row>
  );
};
