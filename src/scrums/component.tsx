import React from 'react';
import { Row, Col, ListGroup, ListGroupItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import Card from '../components/card';
import { DailyScrum } from '../daily-scrum';

interface Props {
  scrums: DailyScrum[];
}

export default ({ scrums }: Props) => (
  <Row className='justify-content-center p-4'>
    <Col xs={12} sm={6}>
      <ListGroup>
        {scrums.map(
          ({ id, meetingInfo: { theme, ...meetingInfoRest }, ...rest }) => (
            <ListGroupItem
              key={id}
              className='p-0'
              style={{
                backgroundColor: theme.mainColor,
                color: theme.accentColor,
              }}
            >
              <Link
                to={`/scrums/${id}`}
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <Row className='align-items-center'>
                  <Col>
                    <Card
                      meetingInfo={{ theme, ...meetingInfoRest }}
                      {...rest}
                    />
                  </Col>
                  <Col xs='auto' className='ps-0'>
                    <i className='bi-chevron-right' />
                  </Col>
                </Row>
              </Link>
            </ListGroupItem>
          )
        )}
      </ListGroup>
    </Col>
  </Row>
);
