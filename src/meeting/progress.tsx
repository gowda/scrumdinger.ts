import React from 'react';
import { Row, Col } from 'react-bootstrap';
import _ from 'lodash';

import Ring from './ring';
import Arc from './arc';
import { Point } from './point';
import { Theme } from '../theme';

const WIDTH = 320;
const HEIGHT = WIDTH;
const CENTER: Point = { x: 160, y: 160 };
const RADIUS = 144;

interface Props {
  currentSpeaker: string;
  currentSpeakerIndex: number;
  totalSpeakers: number;
  theme: Theme;
}

export default ({
  currentSpeaker,
  currentSpeakerIndex,
  totalSpeakers,
  theme,
}: Props) => (
  <Row className='justify-content-center'>
    <Col xs='auto'>
      <div className='position-relative' style={{ width: 320, height: 320 }}>
        <Row
          className='justify-content-center position-absolute top-0'
          style={{ left: 0 }}
        >
          <Col xs='auto'>
            <svg height={HEIGHT} width={WIDTH}>
              <Ring center={CENTER} radius={RADIUS} color={theme.accentColor} />
              {_.range(0, totalSpeakers).map((index) => (
                <Arc
                  key={index}
                  center={CENTER}
                  radius={RADIUS}
                  startAngle={index * (360.0 / totalSpeakers)}
                  endAngle={
                    index * (360.0 / totalSpeakers) + 360.0 / totalSpeakers
                  }
                  color={
                    index < currentSpeakerIndex
                      ? theme.mainColor
                      : 'transparent'
                  }
                />
              ))}
            </svg>
          </Col>
        </Row>
        <Row
          className='justify-content-center position-absolute w-100 g-0'
          style={{ top: '136px' }}
        >
          <Col xs='auto'>
            <Row className='justify-content-center'>
              <Col xs='auto'>{currentSpeaker}</Col>
            </Row>
            <Row className='justify-content-center'>
              <Col xs='auto'>is speaking</Col>
            </Row>
          </Col>
        </Row>
      </div>
    </Col>
  </Row>
);
