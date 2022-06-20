import React from 'react';
import { Row, Col, ListGroup, ListGroupItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Card from '../card';
import { DailyScrum } from '../daily-scrum';
import { accentColor, mainColor } from '../theme';

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
          </ListGroupItem>
        ))}
      </ListGroup>
    </Col>
  </Row>
);
