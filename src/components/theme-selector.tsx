import React from 'react';
import { Button, Col, ListGroup, ListGroupItem, Row } from 'react-bootstrap';

import { Theme, Themes } from '../theme';

interface Props {
  value: Theme;
  onSelect: (selected: Theme) => void;
}

export default ({ value, onSelect }: Props) => (
  <ListGroup variant='flush'>
    {Object.keys(Themes)
      .map((key) => Themes[key])
      .map((theme) => (
        <ListGroupItem className='border-bottom-0'>
          <Row>
            <Col>
              <Button
                className='w-100 py-1 shadow-none'
                onClick={() => onSelect(theme as unknown as Theme)}
                style={{
                  background: theme.mainColor,
                  border: 'transparent',
                  color: theme.accentColor,
                }}
              >
                {value.name === theme.name ? (
                  <i className='bi-check2 me-2' />
                ) : (
                  <></>
                )}
                <span>{theme.name}</span>
              </Button>
            </Col>
          </Row>
        </ListGroupItem>
      ))}
  </ListGroup>
);
