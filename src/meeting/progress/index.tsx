import React from 'react';
import { Row, Col } from 'react-bootstrap';

import StatusRing from './status-ring';
import CurrentSpeaker from './current-speaker';
import { DailyScrumTimer } from '../../daily-scrum-timer';

const WIDTH = 320;
const HEIGHT = WIDTH;

type Props = DailyScrumTimer;

export default (props: Props) => (
  <Row className='justify-content-center'>
    <Col xs='auto'>
      <div
        className='position-relative'
        style={{ width: WIDTH, height: HEIGHT }}
      >
        <div className='position-absolute top-0' style={{ left: 0 }}>
          <StatusRing width={WIDTH} height={HEIGHT} {...props} />
        </div>
        <div className='position-absolute w-100' style={{ top: '136px' }}>
          <CurrentSpeaker {...props} />
        </div>
      </div>
    </Col>
  </Row>
);
