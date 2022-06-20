import React, { useState } from 'react';
import { Row, Col, Overlay, Popover } from 'react-bootstrap';

import { Theme } from '../../theme';

import Label from '../label';
import Button from './button';
import Selector from './selector';

interface Props {
  value: Theme;
  onChange: (change: Theme) => void;
}

export default ({ value, onChange }: Props) => {
  const [showSelector, setShowSelector] = useState<boolean>(false);
  const [target, setTarget] = useState<HTMLButtonElement>();

  return (
    <Row className='justify-content-between align-items-center'>
      <Col xs='auto'>
        <Label icon='palette'>Theme</Label>
      </Col>
      <Col>
        <Button
          value={value}
          onClick={(eventTarget) => {
            setShowSelector(!showSelector);
            setTarget(eventTarget);
          }}
        />
        <Overlay target={target as any} placement='bottom' show={showSelector}>
          <Popover
            id='theme-selector'
            arrowProps={{ style: { display: 'none' } }}
            style={{ minWidth: '38vw' }}
          >
            <Popover.Body className='w-100'>
              <Selector
                value={value}
                onSelect={(change) => {
                  onChange(change);
                  setShowSelector(false);
                }}
              />
            </Popover.Body>
          </Popover>
        </Overlay>
      </Col>
    </Row>
  );
};
