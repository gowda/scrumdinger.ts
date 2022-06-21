import React from 'react';
import { Row, Col } from 'react-bootstrap';
import _ from 'lodash';

import Arc from './arc';
import { Point } from './point';

const WIDTH = 320;
const HEIGHT = WIDTH;
const CENTER: Point = { x: 160, y: 160 };
const RADIUS = 144;
const COLORS = ['red', 'green', 'blue', 'orange', 'yellow'];

export default () => (
  <Row className='justify-content-center'>
    <Col xs='auto'>
      <svg height={HEIGHT} width={WIDTH}>
        <circle
          cx={CENTER.x}
          cy={CENTER.y}
          r={RADIUS}
          stroke='black'
          strokeWidth='16'
          fill='transparent'
        />
        {_.range(0, 10).map((index) => (
          <Arc
            center={CENTER}
            radius={RADIUS}
            startAngle={index * (360.0 / 10.0)}
            endAngle={index * (360.0 / 10.0) + 360.0 / 10.0}
            color={COLORS[index % COLORS.length]}
          />
        ))}
      </svg>
    </Col>
  </Row>
);
