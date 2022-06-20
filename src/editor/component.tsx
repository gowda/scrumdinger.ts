import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { Controller, useForm } from 'react-hook-form';

import { DailyScrum } from '../daily-scrum';
import MeetingInfo from './meeting-info';
import Attendees from './attendees';
import { DailyScrumAttrs } from '../queries';

type Props = DailyScrum & {
  saving: boolean;
  onUpdate: (attrs: DailyScrumAttrs) => void;
};

export default ({ saving, onUpdate, ...props }: Props) => {
  const {
    meetingInfo: { title },
  } = props;
  const { control, handleSubmit } = useForm<DailyScrum>({
    defaultValues: props,
  });

  return (
    <Row className='justify-content-center p-4'>
      <Col xs={12} sm={6}>
        <Row className='align-items-center'>
          <Col>
            <h2 className='my-0'>{title}</h2>
          </Col>
          <Col xs='auto'>
            <Button
              variant='link'
              className='shadow-none'
              style={{ textDecoration: 'none' }}
              disabled={saving}
              onClick={handleSubmit(onUpdate)}
            >
              {saving ? 'Saving' : 'Save'}
            </Button>
          </Col>
        </Row>
        <Controller
          control={control}
          name='meetingInfo'
          render={({ field: { value, onChange } }) => (
            <MeetingInfo {...value} onChange={onChange} />
          )}
        />
        <Controller
          control={control}
          name='attendees'
          render={({ field: { value, onChange } }) => (
            <Attendees attendees={value} onChange={onChange} />
          )}
        />
      </Col>
    </Row>
  );
};
