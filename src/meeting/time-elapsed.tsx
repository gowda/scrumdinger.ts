import React from 'react';
import { Stack } from 'react-bootstrap';

import Label from '../components/label';

interface Props {
  value: number;
}

export default ({ value }: Props) => (
  <Stack className='align-items-start'>
    <div>Seconds elapsed</div>
    <Label icon='hourglass-bottom' color='inherit'>
      {value}
    </Label>
  </Stack>
);
