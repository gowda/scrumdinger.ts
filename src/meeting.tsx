import React from 'react';
import { Row, Col, ProgressBar, Stack, Button } from 'react-bootstrap';

export default () => (
  <Row className='justify-content-center p-4' style={{ minHeight: '100vh' }}>
    <Col
      xs={12}
      sm={6}
      className='d-flex flex-column justify-content-between py-4'
    >
      <Row>
        <Col>
          <Row>
            <Col>
              <ProgressBar now={5} max={15} />
            </Col>
          </Row>
          <Row>
            <Col>
              <Stack className='align-items-center'>
                <div>Seconds elapsed</div>
                <Row>
                  <Col xs='auto'>
                    <i className='bi-hourglass-bottom' />
                  </Col>
                  <Col xs='auto'>300</Col>
                </Row>
              </Stack>
            </Col>
            <Col>
              <Stack className='align-items-center'>
                <div>Seconds remaining</div>
                <Row>
                  <Col xs='auto'>600</Col>
                  <Col xs='auto'>
                    <i className='bi-hourglass-top' />
                  </Col>
                </Row>
              </Stack>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className='justify-content-center'>
        <Col xs='auto'>
          <svg height='320' width='320'>
            <circle
              cx='160'
              cy='160'
              r='144'
              stroke='black'
              strokeWidth='16'
              fill='transparent'
            />
          </svg>
        </Col>
      </Row>
      <Row className='justify-content-between align-items-center'>
        <Col xs='auto'>
          <span>Speaker 1 of 3</span>
        </Col>
        <Col xs='auto'>
          <Button>
            <i className='bi-skip-forward' />
          </Button>
        </Col>
      </Row>
    </Col>
  </Row>
);
