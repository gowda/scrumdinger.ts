import React from 'react';
import { Row, Col, ListGroup, ListGroupItem } from 'react-bootstrap';

import SectionTitle from '../components/section-title';
import Label from '../components/label';
import { DailyScrum } from '../daily-scrum';

type Props = Pick<DailyScrum, 'attendees'>;

export default ({ attendees }: Props) => (
  <>
    <SectionTitle title='ATTENDEES' />
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
