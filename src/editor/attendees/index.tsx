import React from 'react';
import { Row, Col, ListGroup, ListGroupItem } from 'react-bootstrap';

import SectionTitle from '../../components/section-title';
import NewAttendeeForm from './new-attendee-form';
import Attendee from './attendee';
import { DailyScrum } from '../../daily-scrum';

type Props = Pick<DailyScrum, 'attendees'> & {
  onChange: (change: string[]) => void;
};

export default ({ attendees, onChange }: Props) => (
  <>
    <SectionTitle title='ATTENDEES' />
    <Row className='mt-2'>
      <Col>
        <ListGroup>
          <ListGroupItem>
            <NewAttendeeForm onAdd={(name) => onChange([name, ...attendees])} />
          </ListGroupItem>
          {attendees.map((attendee) => (
            <ListGroupItem key={attendee}>
              <Attendee
                name={attendee}
                onDelete={() =>
                  onChange(attendees.filter((name) => name !== attendee))
                }
              />
            </ListGroupItem>
          ))}
        </ListGroup>
      </Col>
    </Row>
  </>
);
