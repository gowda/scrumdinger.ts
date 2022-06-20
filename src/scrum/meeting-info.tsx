import React from 'react';
import { Row, Col, ListGroup, ListGroupItem } from 'react-bootstrap';

import { Link } from 'react-router-dom';
import { DailyScrumMeetingInfo } from '../daily-scrum';

import SectionTitle from '../components/section-title';
import Label from '../components/label';
import Duration from './duration';

type Props = DailyScrumMeetingInfo & { id: string };

export default ({ id, lengthInMinutes, theme }: Props) => (
  <>
    <SectionTitle title='MEETING INFO' />
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
            <Duration value={lengthInMinutes} />
          </ListGroupItem>
          <ListGroupItem>
            <Row className='justify-content-between'>
              <Col xs='auto'>
                <Label icon='palette'>Theme</Label>
              </Col>
              <Col
                xs='auto'
                className='rounded'
                style={{
                  backgroundColor: theme.mainColor,
                  color: theme.accentColor,
                }}
              >
                {theme.name}
              </Col>
            </Row>
          </ListGroupItem>
        </ListGroup>
      </Col>
    </Row>
  </>
);
