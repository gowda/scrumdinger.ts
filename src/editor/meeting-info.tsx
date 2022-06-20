import React from 'react';
import { Row, Col, ListGroup, ListGroupItem } from 'react-bootstrap';
import { DeepMap, DeepPartial, FieldError } from 'react-hook-form';

import { DailyScrumMeetingInfo } from '../daily-scrum';
import SectionTitle from '../components/section-title';
import TextField from '../components/text-field';
import DurationField from './duration-field';
import ThemeField from '../components/theme-field';

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
              <TextField
                placeholder='Scrum title...'
                value={title}
                errorMessage={errors?.title?.message}
                onChange={(change) => onChange({ ...props, title: change })}
              />
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
              <ThemeField
                value={theme}
                onChange={(change) => onChange({ ...props, theme: change })}
              />
            </ListGroupItem>
          </ListGroup>
        </Col>
      </Row>
    </>
  );
};
