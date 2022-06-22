import React from 'react';
import { Row, Col } from 'react-bootstrap';

import Ring from '../../components/ring';
import Arc from '../../components/arc';
import { useCircle } from '../../hooks/circle';
import { useSpeakerArcs } from '../../hooks/speaker-arcs';
import { DailyScrumTimer } from '../../daily-scrum-timer';

type Props = DailyScrumTimer & { width: number; height?: number };

export default ({ width, height, ...timer }: Props) => {
  const { theme } = timer;
  const { radius, center } = useCircle(width, height || width);
  const arcs = useSpeakerArcs(center, radius, timer);

  return (
    <Row className='justify-content-center g-0'>
      <Col xs='auto'>
        <svg height={height || width} width={width}>
          <Ring center={center} radius={radius} color={theme.accentColor} />
          {arcs.map((arc) => (
            <Arc key={arc.startAngle} {...arc} />
          ))}
        </svg>
      </Col>
    </Row>
  );
};
