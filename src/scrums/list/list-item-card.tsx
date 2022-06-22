import React from 'react';
import { ListGroupItem } from 'react-bootstrap';

import LinkCard from './link-card';
import { DailyScrum } from '../../daily-scrum';

type Props = DailyScrum;

export default (props: Props) => {
  const {
    meetingInfo: {
      theme: { mainColor, accentColor },
    },
  } = props;

  return (
    <ListGroupItem
      className='p-0'
      style={{
        backgroundColor: mainColor,
        color: accentColor,
      }}
    >
      <LinkCard {...props} />
    </ListGroupItem>
  );
};
