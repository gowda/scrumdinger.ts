import React from 'react';
import { Stack } from 'react-bootstrap';

import Label from '../../components/label';

interface Props {
  value: number;
}

export default ({ value }: Props) => (
  <Stack className='align-items-end'>
    <div>Seconds remaining</div>
    <Label icon='hourglass-top' color='inherit' reversed>
      {value}
    </Label>
  </Stack>
);
