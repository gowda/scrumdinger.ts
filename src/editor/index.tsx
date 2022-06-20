import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { Controller, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { DailyScrum } from '../daily-scrum';
import MeetingInfo from './meeting-info';
import Attendees from './attendees';
import { DailyScrumAttrs } from '../queries';

const schema = yup.object({
  meetingInfo: yup.object({
    title: yup.string().required('Title is required'),
  }),
});

type Props = Omit<DailyScrum, 'id'> & {
  saving: boolean;
  onUpdate: (attrs: DailyScrumAttrs) => void;
};

export default ({ saving, onUpdate, ...props }: Props) => {
  const {
    meetingInfo: { title },
  } = props;
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<DailyScrum>({
    defaultValues: props,
    resolver: yupResolver(schema),
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
            <MeetingInfo
              {...value}
              errors={errors.meetingInfo}
              onChange={onChange}
            />
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
