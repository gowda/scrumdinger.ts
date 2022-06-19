import React from 'react';
import { Row, Col, ListGroup, ListGroupItem } from 'react-bootstrap';
import Card from './card';
import { DailyScrum } from './daily-scrum';
import { accentColor, mainColor } from './theme';

interface Props {
  scrums: DailyScrum[];
}

export default ({ scrums }: Props) => (
  <Row className='justify-content-center p-4'>
    <Col xs={12} sm={6}>
      <ListGroup>
        {scrums.map(({ id, theme, ...rest }) => (
          <ListGroupItem
            key={id}
            className='p-0'
            style={{
              backgroundColor: mainColor(theme),
              color: accentColor(theme),
            }}
          >
            <Card {...rest} />
          </ListGroupItem>
        ))}
      </ListGroup>
    </Col>
  </Row>
);
