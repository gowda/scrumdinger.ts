import React from 'react';
import { Row, Col, ListGroup } from 'react-bootstrap';

import ListItemCard from './list-item-card';
import { DailyScrum } from '../../daily-scrum';

interface Props {
  scrums: DailyScrum[];
}

export default ({ scrums }: Props) => (
  <Row className='mt-4'>
    <Col>
      <ListGroup>
        {scrums.map((scrum) => (
          <ListItemCard key={scrum.id} {...scrum} />
        ))}
      </ListGroup>
    </Col>
  </Row>
);
