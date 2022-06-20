import React from 'react';
import { Row, Col, Button, OverlayTrigger, Popover } from 'react-bootstrap';

import { Theme } from '../theme';
import ThemeSelector from '../components/theme-selector';

interface Props {
  value: Theme;
  onChange: (change: Theme) => void;
}

export default ({ value, onChange }: Props) => (
  <OverlayTrigger
    trigger='click'
    placement='bottom'
    rootClose
    overlay={
      <Popover
        id='theme-selector'
        arrowProps={{ style: { display: 'none' } }}
        style={{ minWidth: '36vw' }}
      >
        <Popover.Body className='w-100'>
          <ThemeSelector
            value={value}
            onSelect={(change) => {
              onChange(change);
            }}
          />
        </Popover.Body>
      </Popover>
    }
  >
    <Button
      className='w-100 shadow-none'
      style={{
        background: 'transparent',
        border: 'transparent',
        color: 'inherit',
      }}
    >
      <Row>
        <Col
          className='rounded text-center'
          style={{ backgroundColor: value.mainColor, color: value.accentColor }}
        >
          {value.name}
        </Col>
        <Col xs='auto'>
          <i className='bi-chevron-down' />
        </Col>
      </Row>
    </Button>
  </OverlayTrigger>
);
