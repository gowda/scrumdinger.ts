import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import _ from 'lodash';

import Ring from '../../components/ring';
import Arc from '../../components/arc';
import { Theme } from '../../theme';
import { Point } from '../../point';

const createCenter = (width: number, height: number): Point => ({
  x: width / 2.0,
  y: height / 2.0,
});
const createRadius = (width: number, height: number): number =>
  Math.min(width, height) / 2.0 - 6;

interface Props {
  currentSpeaker: string;
  currentSpeakerIndex: number;
  totalSpeakers: number;
  theme: Theme;
  width: number;
  height?: number;
}

export default ({
  currentSpeakerIndex,
  totalSpeakers,
  theme,
  width,
  height,
}: Props) => {
  const [center] = useState<Point>(createCenter(width, height || width));
  const [radius] = useState<number>(createRadius(width, height || width));
  return (
    <Row className='justify-content-center g-0'>
      <Col xs='auto'>
        <svg height={height || width} width={width}>
          <Ring center={center} radius={radius} color={theme.accentColor} />
          {_.range(0, totalSpeakers).map((index) => (
            <Arc
              key={index}
              center={center}
              radius={radius}
              startAngle={index * (360.0 / totalSpeakers)}
              endAngle={index * (360.0 / totalSpeakers) + 360.0 / totalSpeakers}
              color={
                index < currentSpeakerIndex ? theme.mainColor : 'transparent'
              }
            />
          ))}
        </svg>
      </Col>
    </Row>
  );
};
