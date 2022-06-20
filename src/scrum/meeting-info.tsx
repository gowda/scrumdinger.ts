import React from 'react';
import { Row, Col, ListGroup, ListGroupItem } from 'react-bootstrap';

import { Link } from 'react-router-dom';
import { DailyScrum } from '../daily-scrum';
import { mainColor, Theme } from '../theme';
import Label from '../components/label';

type Props = Pick<DailyScrum, 'id' | 'lengthInMinutes' | 'theme'>;

export default ({ id, lengthInMinutes, theme }: Props) => (
  <>
    <Row>
      <Col>
        <h4>MEETING INFO</h4>
      </Col>
    </Row>
    <Row className='mt-2'>
      <Col>
        <ListGroup>
          <ListGroupItem>
            <Link
              to={`/scrums/${id}/meeting`}
              style={{ textDecoration: 'none', fontWeight: 'bold' }}
            >
              <Row className='justify-content-between'>
                <Col xs='auto'>
                  <Label icon='alarm'>Start meeting</Label>
                </Col>
                <Col xs='auto' className='ps-0'>
                  <i className='bi-chevron-right' />
                </Col>
              </Row>
            </Link>
          </ListGroupItem>
          <ListGroupItem>
            <Row className='justify-content-between'>
              <Col xs='auto'>
                <Label icon='clock'>Length</Label>
              </Col>
              <Col xs='auto'>{`${lengthInMinutes} minutes`}</Col>
            </Row>
          </ListGroupItem>
          <ListGroupItem>
            <Row className='justify-content-between'>
              <Col xs='auto'>
                <Label icon='palette'>Theme</Label>
              </Col>
              <Col
                xs='auto'
                className='rounded'
                style={{ backgroundColor: mainColor(theme) }}
              >
                {Theme[theme]}
              </Col>
            </Row>
          </ListGroupItem>
        </ListGroup>
      </Col>
    </Row>
  </>
);
