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
      <Row className='justify-content-between align-items-center'>
        <Col xs='auto'>
          <h2 className='my-0'>Daily scrums</h2>
        </Col>
        <Col xs='auto' className='me-2'>
          <Link to='/scrums/new' style={{ textDecoration: 'none' }}>
            <i className='bi-plus-lg' style={{ fontSize: '2rem' }} />
          </Link>
        </Col>
      </Row>
      <Row className='mt-4'>
        <Col>
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
    </Col>
  </Row>
);
