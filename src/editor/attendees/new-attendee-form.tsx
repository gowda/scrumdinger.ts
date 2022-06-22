import React, { useState } from 'react';
import { Row, Col, Button } from 'react-bootstrap';

import TextField from '../../components/text-field';

interface Props {
  onAdd: (name: string) => void;
}

export default ({ onAdd }: Props) => {
  const [newAttendee, setNewAttendee] = useState<string>('');

  const commit = () => {
    onAdd(newAttendee);
    setNewAttendee('');
  };

  return (
    <Row className='align-items-center'>
      <Col xs='auto'>
        <i className='bi-person' style={{ color: '#117CFF' }} />
      </Col>
      <Col>
        <TextField
          name='attendee'
          placeholder='Attendee name...'
          value={newAttendee}
          onChange={(change) => setNewAttendee(change)}
          onCommit={commit}
        />
      </Col>
      <Col xs='auto'>
        <Button
          className='p-0 shadow-none'
          disabled={newAttendee.trim().length === 0}
          onClick={commit}
          style={{
            backgroundColor: 'transparent',
            border: 'transparent',
            color: 'inherit',
          }}
        >
          <i className='bi-plus-circle' />
        </Button>
      </Col>
    </Row>
  );
};
