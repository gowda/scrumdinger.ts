import React from 'react';
import { Row, Col, ListGroup, ListGroupItem } from 'react-bootstrap';

import { DeepMap, DeepPartial, FieldError } from 'react-hook-form';
import { DailyScrumMeetingInfo } from '../daily-scrum';

import SectionTitle from '../components/section-title';
import Label from '../components/label';
import TextField from '../components/text-field';
import DurationField from './duration-field';
import ThemeField from './theme-field';

type Props = DailyScrumMeetingInfo & {
  errors?: DeepMap<DeepPartial<DailyScrumMeetingInfo>, FieldError>;
  onChange: (attrs: DailyScrumMeetingInfo) => void;
};

export default ({ errors, onChange, ...props }: Props) => {
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
                    placeholder='Scrum title...'
                    value={title}
                    onChange={(change) => onChange({ ...props, title: change })}
                  />
                </Col>
              </Row>
              {errors?.title?.message && (
                <Row className='mt-1'>
                  <Col>
                    <span className='text-danger'>
                      {errors?.title?.message}
                    </span>
                  </Col>
                </Row>
              )}
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
