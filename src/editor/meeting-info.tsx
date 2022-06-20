import React from 'react';
import { Row, Col, ListGroup, ListGroupItem } from 'react-bootstrap';

import { DailyScrumMeetingInfo } from '../daily-scrum';

import SectionTitle from '../components/section-title';
import Label from '../components/label';
import TextField from '../components/text-field';
import DurationField from './duration-field';
import ThemeField from './theme-field';

type Props = DailyScrumMeetingInfo & {
  onChange: (attrs: DailyScrumMeetingInfo) => void;
};

export default ({ onChange, ...props }: Props) => {
  const { title, lengthInMinutes, theme } = props;

  return (
    <>
      <SectionTitle title='MEETING INFO' />
      <Row className='mt-2'>
        <Col>
          <ListGroup>
            <ListGroupItem>
              <Row className='align-items-center'>
                <Col>
                  <TextField
                    value={title}
                    onChange={(change) => onChange({ ...props, title: change })}
                  />
                </Col>
              </Row>
            </ListGroupItem>
            <ListGroupItem>
              <DurationField
                value={lengthInMinutes}
                onChange={(change) =>
                  onChange({ ...props, lengthInMinutes: change })
                }
              />
            </ListGroupItem>
            <ListGroupItem>
              <Row className='justify-content-between align-items-center'>
                <Col xs='auto'>
                  <Label icon='palette'>Theme</Label>
                </Col>
                <Col>
                  <ThemeField
                    value={theme}
                    onChange={(change) => onChange({ ...props, theme: change })}
                  />
                </Col>
              </Row>
            </ListGroupItem>
          </ListGroup>
        </Col>
      </Row>
    </>
  );
};
