import React from 'react';
import { Row, Col, ListGroup, ListGroupItem } from 'react-bootstrap';

import Label from './label';
import { DailyScrum } from '../daily-scrum';

type Props = Pick<DailyScrum, 'attendees'>;

export default ({ attendees }: Props) => (
  <>
    <Row className='mt-4'>
      <Col>
        <h4>ATTENDEES</h4>
      </Col>
    </Row>
    <Row className='mt-2'>
      <Col>
        <ListGroup>
          {attendees.map((attendee) => (
            <ListGroupItem key={attendee}>
              <Label icon='person'>{attendee}</Label>
            </ListGroupItem>
          ))}
        </ListGroup>
      </Col>
    </Row>
  </>
);
