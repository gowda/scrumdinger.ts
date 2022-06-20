import React from 'react';
import { Row, Col, ListGroup, ListGroupItem } from 'react-bootstrap';

import { DailyScrum } from '../daily-scrum';
import { mainColor, Theme } from '../theme';
import Label from '../components/label';

type Props = Pick<DailyScrum, 'lengthInMinutes' | 'theme'>;

export default ({ lengthInMinutes, theme }: Props) => (
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
            <Label icon='alarm'>Start meeting</Label>
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
